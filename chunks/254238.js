n.d(t, {
    LO: () => N,
    On: () => T,
    Vv: () => S,
    _: () => I,
    bp: () => P,
    ef: () => v,
    s6: () => O,
    sh: () => D,
}),
    n(539854),
    n(388685);
var r = n(434179),
    i = n(771649),
    a = n(544891),
    o = n(570140),
    s = n(668781),
    l = n(340332),
    c = n(19780),
    u = n(797258),
    d = n(626135),
    f = n(960048),
    p = n(607214),
    _ = n(258609),
    m = n(893387),
    h = n(981631),
    g = n(388032);
function E(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function b(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                E(e, t, n[t]);
            });
    }
    return e;
}
function y(e, t) {
    var n, r;
    d.default.track(h.rMx.REMOTE_COMMAND_SENT, {
        command_type: e,
        remote_platform: null == (r = u.Z.getSessionById(t)) || null == (n = r.clientInfo) ? void 0 : n.os,
    });
}
async function O() {
    let e = _.default.getAwaitingRemoteSessionInfo(),
        t = null == e ? void 0 : e.nonce;
    o.Z.dispatch({ type: "REMOTE_SESSION_DISCONNECT" });
    let n = [];
    ((null == e ? void 0 : e.type) === h.ABu.PLAYSTATION ||
        (null == e ? void 0 : e.type) === h.ABu.PLAYSTATION_STAGING) &&
        (null == e ? void 0 : e.commandId) != null &&
        (null == e ? void 0 : e.deviceId) != null &&
        n.push(w(e.type, e.deviceId, e.commandId)),
        null != t && n.push(C(t));
    try {
        await Promise.all(n);
    } catch (e) {
        s.Z.show({
            title: g.intl.string(g.t.LNhXcL),
            body: g.intl.string(g.t.QnKxtP),
        });
    }
}
function v(e) {
    o.Z.dispatch({
        type: "REMOTE_SESSION_CONNECT",
        sessionId: e,
    });
}
function S(e, t) {
    let { selfMute: n, selfDeaf: r } = t;
    o.Z.dispatch({
        type: "REMOTE_COMMAND",
        sessionId: e,
        payload: {
            type: "VOICE_STATE_UPDATE",
            self_mute: n,
            self_deaf: r,
        },
    }),
        y("VOICE_STATE_UPDATE", e);
}
function I(e) {
    o.Z.dispatch({
        type: "REMOTE_COMMAND",
        sessionId: e,
        payload: { type: "DISCONNECT" },
    }),
        y("DISCONNECT", e),
        O();
}
function T(e, t, n, r) {
    let i = (0, l.z)(n);
    null != i &&
        (o.Z.dispatch({
            type: "REMOTE_COMMAND",
            sessionId: e,
            payload: b(
                {
                    type: "AUDIO_SETTINGS_UPDATE",
                    context: i,
                    id: t,
                },
                r,
            ),
        }),
        y("AUDIO_SETTINGS_UPDATE", e));
}
async function A() {
    let e;
    try {
        let t = null != c.Z.getRTCConnectionId() ? i.o.TRANSFER_EXISTING_CALL : i.o.CREATE_NEW_CALL;
        e = (
            await a.tn.post({
                url: h.ANM.CONNECT_REQUEST_CREATE,
                body: { analytics_properties: { handoff_type: t } },
                rejectWithError: !1,
            })
        ).body.nonce;
    } catch (e) {
        f.Z.captureException(e);
    }
    return e;
}
function C(e) {
    return a.tn.del({
        url: h.ANM.CONNECT_REQUEST(e),
        rejectWithError: !1,
    });
}
async function N(e) {
    let t;
    o.Z.dispatch({
        type: "GAME_CONSOLE_FETCH_DEVICES_START",
        platform: e,
    });
    try {
        t = await a.tn.get({
            url: h.ANM.CONSOLES_DEVICES(e),
            rejectWithError: !1,
        });
    } catch (t) {
        throw (
            (o.Z.dispatch({
                type: "GAME_CONSOLE_FETCH_DEVICES_FAIL",
                platform: e,
                error: t,
            }),
            t)
        );
    }
    let n = t.body.devices;
    return (
        o.Z.dispatch({
            type: "GAME_CONSOLE_FETCH_DEVICES_SUCCESS",
            platform: e,
            devices: n,
        }),
        n
    );
}
function P(e, t) {
    o.Z.dispatch({
        type: "GAME_CONSOLE_SELECT_DEVICE",
        platform: e,
        deviceId: t,
    });
}
async function R(e, t, n, i) {
    let s;
    o.Z.dispatch({
        type: "GAME_CONSOLE_DEVICE_SEND_COMMAND_START",
        platform: e,
    });
    try {
        s = await a.tn.post({
            url: h.ANM.CONSOLES_DEVICES_COMMANDS(e, t),
            body: {
                command: r.n.CONNECT_VOICE,
                channel_id: n.id,
                guild_id: n.guild_id,
                nonce: i,
            },
            rejectWithError: !1,
        });
    } catch (t) {
        throw (
            (o.Z.dispatch({
                type: "GAME_CONSOLE_DEVICE_SEND_COMMAND_FAIL",
                platform: e,
                error: t,
            }),
            t)
        );
    }
    let l = s.body.id;
    return (
        o.Z.dispatch({
            type: "WAIT_FOR_REMOTE_SESSION",
            sessionType: e,
            nonce: i,
            channelId: n.id,
            deviceId: t,
            commandId: l,
        }),
        l
    );
}
async function w(e, t, n) {
    o.Z.dispatch({
        type: "GAME_CONSOLE_DEVICE_CANCEL_COMMAND_START",
        platform: e,
        deviceId: t,
        commandId: n,
    });
    try {
        await a.tn.del({
            url: h.ANM.CONSOLES_DEVICES_COMMAND(e, t, n),
            rejectWithError: !1,
        });
    } catch (r) {
        throw (
            (o.Z.dispatch({
                type: "GAME_CONSOLE_DEVICE_CANCEL_COMMAND_FAIL",
                platform: e,
                deviceId: t,
                commandId: n,
                error: r,
            }),
            r)
        );
    }
    o.Z.dispatch({
        type: "GAME_CONSOLE_DEVICE_CANCEL_COMMAND_SUCCESS",
        platform: e,
        deviceId: t,
        commandId: n,
    });
}
async function D(e, t, n) {
    await p.Z.maybeShowPTTAlert(e), await O();
    let r = await A();
    await R(e, t, n, r), (0, m.Z)(n.id, e);
}
