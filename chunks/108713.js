n.d(t, {
    Fc: () => S,
    JS: () => v,
    Jm: () => R,
    Uc: () => N,
    VP: () => D,
    VR: () => I,
    ZG: () => O,
    m9: () => A,
}),
    n(321073),
    n(896048);
var r = n(216348),
    i = n(213270),
    a = n(562465),
    s = n(73153),
    o = n(157559),
    l = n(409826),
    c = n(383501),
    u = n(528767),
    d = n(954571),
    f = n(728458),
    p = n(124697),
    _ = n(643501),
    h = n(350701),
    m = n(652215),
    g = n(985018);

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
    d.default.track(m.HAw.REMOTE_COMMAND_SENT, {
        command_type: e,
        remote_platform: null == (r = u.A.getSessionById(t)) || null == (n = r.clientInfo) ? void 0 : n.os,
    });
}
async function O() {
    let e = _.default.getAwaitingRemoteSessionInfo(),
        t = null == e ? void 0 : e.nonce;
    s.h.dispatch({
        type: "REMOTE_SESSION_DISCONNECT",
    });
    let n = [];
    ((null == e ? void 0 : e.type) === m.fg2.PLAYSTATION ||
        (null == e ? void 0 : e.type) === m.fg2.PLAYSTATION_STAGING) &&
        (null == e ? void 0 : e.commandId) != null &&
        (null == e ? void 0 : e.deviceId) != null &&
        n.push(P(e.type, e.deviceId, e.commandId)),
        null != t && n.push(C(t));
    try {
        await Promise.all(n);
    } catch (e) {
        o.A.show({
            title: g.intl.string(g.t.LNhXcL),
            body: g.intl.string(g.t.QnKxtP),
        });
    }
}

function A(e) {
    s.h.dispatch({
        type: "REMOTE_SESSION_CONNECT",
        sessionId: e,
    });
}

function v(e, t) {
    let { selfMute: n, selfDeaf: r } = t;
    s.h.dispatch({
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

function S(e) {
    s.h.dispatch({
        type: "REMOTE_COMMAND",
        sessionId: e,
        payload: {
            type: "DISCONNECT",
        },
    }),
        y("DISCONNECT", e),
        O();
}

function I(e, t, n, r) {
    let i = (0, l.o)(n);
    null != i &&
        (s.h.dispatch({
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
async function T() {
    let e;
    try {
        let t = null != c.A.getRTCConnectionId() ? i.g.TRANSFER_EXISTING_CALL : i.g.CREATE_NEW_CALL;
        e = (
            await a.Bo.post({
                url: m.Rsh.CONNECT_REQUEST_CREATE,
                body: {
                    analytics_properties: {
                        handoff_type: t,
                    },
                },
                rejectWithError: !1,
            })
        ).body.nonce;
    } catch (e) {
        f.A.captureException(e);
    }
    return e;
}

function C(e) {
    return a.Bo.del({
        url: m.Rsh.CONNECT_REQUEST(e),
        rejectWithError: !1,
    });
}
async function N(e) {
    let t;
    s.h.dispatch({
        type: "GAME_CONSOLE_FETCH_DEVICES_START",
        platform: e,
    });
    try {
        t = await a.Bo.get({
            url: m.Rsh.CONSOLES_DEVICES(e),
            rejectWithError: !1,
        });
    } catch (t) {
        throw (
            (s.h.dispatch({
                type: "GAME_CONSOLE_FETCH_DEVICES_FAIL",
                platform: e,
                error: t,
            }),
            t)
        );
    }
    let n = t.body.devices;
    return (
        s.h.dispatch({
            type: "GAME_CONSOLE_FETCH_DEVICES_SUCCESS",
            platform: e,
            devices: n,
        }),
        n
    );
}

function R(e, t) {
    s.h.dispatch({
        type: "GAME_CONSOLE_SELECT_DEVICE",
        platform: e,
        deviceId: t,
    });
}
async function w(e, t, n, i) {
    let o;
    s.h.dispatch({
        type: "GAME_CONSOLE_DEVICE_SEND_COMMAND_START",
        platform: e,
    });
    try {
        o = await a.Bo.post({
            url: m.Rsh.CONSOLES_DEVICES_COMMANDS(e, t),
            body: {
                command: r.O.CONNECT_VOICE,
                channel_id: n.id,
                guild_id: n.guild_id,
                nonce: i,
            },
            rejectWithError: !1,
        });
    } catch (t) {
        throw (
            (s.h.dispatch({
                type: "GAME_CONSOLE_DEVICE_SEND_COMMAND_FAIL",
                platform: e,
                error: t,
            }),
            t)
        );
    }
    let l = o.body.id;
    return (
        s.h.dispatch({
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
async function P(e, t, n) {
    s.h.dispatch({
        type: "GAME_CONSOLE_DEVICE_CANCEL_COMMAND_START",
        platform: e,
        deviceId: t,
        commandId: n,
    });
    try {
        await a.Bo.del({
            url: m.Rsh.CONSOLES_DEVICES_COMMAND(e, t, n),
            rejectWithError: !1,
        });
    } catch (r) {
        throw (
            (s.h.dispatch({
                type: "GAME_CONSOLE_DEVICE_CANCEL_COMMAND_FAIL",
                platform: e,
                deviceId: t,
                commandId: n,
                error: r,
            }),
            r)
        );
    }
    s.h.dispatch({
        type: "GAME_CONSOLE_DEVICE_CANCEL_COMMAND_SUCCESS",
        platform: e,
        deviceId: t,
        commandId: n,
    });
}
async function D(e, t, n) {
    await p.A.maybeShowPTTAlert(e), await O();
    let r = await T();
    await w(e, t, n, r), (0, h.A)(n.id, e);
}
