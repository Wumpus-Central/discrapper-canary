n.d(t, {
    LO: () => C,
    On: () => T,
    Vv: () => S,
    _: () => I,
    bp: () => R,
    ef: () => O,
    s6: () => y,
    sh: () => D
}),
    n(653041),
    n(47120);
var r = n(434179),
    i = n(771649),
    o = n(544891),
    a = n(570140),
    s = n(668781),
    l = n(340332),
    c = n(19780),
    u = n(797258),
    d = n(626135),
    f = n(960048),
    p = n(607214),
    _ = n(258609),
    h = n(893387),
    m = n(981631),
    g = n(388032);
function E(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function v(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                E(e, t, n[t]);
            });
    }
    return e;
}
function b(e, t) {
    var n, r;
    d.default.track(m.rMx.REMOTE_COMMAND_SENT, {
        command_type: e,
        remote_platform: null === (r = u.Z.getSessionById(t)) || void 0 === r ? void 0 : null === (n = r.clientInfo) || void 0 === n ? void 0 : n.os
    });
}
async function y() {
    let e = _.Z.getAwaitingRemoteSessionInfo(),
        t = null == e ? void 0 : e.nonce;
    a.Z.dispatch({ type: 'REMOTE_SESSION_DISCONNECT' });
    let n = [];
    ((null == e ? void 0 : e.type) === m.ABu.PLAYSTATION || (null == e ? void 0 : e.type) === m.ABu.PLAYSTATION_STAGING) && (null == e ? void 0 : e.commandId) != null && (null == e ? void 0 : e.deviceId) != null && n.push(w(e.type, e.deviceId, e.commandId)), null != t && n.push(A(t));
    try {
        await Promise.all(n);
    } catch (e) {
        s.Z.show({
            title: g.NW.string(g.t.LNhXcH),
            body: g.NW.string(g.t.QnKxtL)
        });
    }
}
function O(e) {
    a.Z.dispatch({
        type: 'REMOTE_SESSION_CONNECT',
        sessionId: e
    });
}
function S(e, t) {
    let { selfMute: n, selfDeaf: r } = t;
    a.Z.dispatch({
        type: 'REMOTE_COMMAND',
        sessionId: e,
        payload: {
            type: 'VOICE_STATE_UPDATE',
            self_mute: n,
            self_deaf: r
        }
    }),
        b('VOICE_STATE_UPDATE', e);
}
function I(e) {
    a.Z.dispatch({
        type: 'REMOTE_COMMAND',
        sessionId: e,
        payload: { type: 'DISCONNECT' }
    }),
        b('DISCONNECT', e),
        y();
}
function T(e, t, n, r) {
    let i = (0, l.z)(n);
    null != i &&
        (a.Z.dispatch({
            type: 'REMOTE_COMMAND',
            sessionId: e,
            payload: v(
                {
                    type: 'AUDIO_SETTINGS_UPDATE',
                    context: i,
                    id: t
                },
                r
            )
        }),
        b('AUDIO_SETTINGS_UPDATE', e));
}
async function N() {
    let e;
    try {
        let t = null != c.Z.getRTCConnectionId() ? i.o.TRANSFER_EXISTING_CALL : i.o.CREATE_NEW_CALL;
        e = (
            await o.tn.post({
                url: m.ANM.CONNECT_REQUEST_CREATE,
                body: { analytics_properties: { handoff_type: t } },
                rejectWithError: !1
            })
        ).body.nonce;
    } catch (e) {
        f.Z.captureException(e);
    }
    return e;
}
function A(e) {
    return o.tn.del({
        url: m.ANM.CONNECT_REQUEST(e),
        rejectWithError: !1
    });
}
async function C(e) {
    let t;
    a.Z.dispatch({
        type: 'GAME_CONSOLE_FETCH_DEVICES_START',
        platform: e
    });
    try {
        t = await o.tn.get({
            url: m.ANM.CONSOLES_DEVICES(e),
            rejectWithError: !1
        });
    } catch (t) {
        throw (
            (a.Z.dispatch({
                type: 'GAME_CONSOLE_FETCH_DEVICES_FAIL',
                platform: e,
                error: t
            }),
            t)
        );
    }
    let n = t.body.devices;
    return (
        a.Z.dispatch({
            type: 'GAME_CONSOLE_FETCH_DEVICES_SUCCESS',
            platform: e,
            devices: n
        }),
        n
    );
}
function R(e, t) {
    a.Z.dispatch({
        type: 'GAME_CONSOLE_SELECT_DEVICE',
        platform: e,
        deviceId: t
    });
}
async function P(e, t, n, i) {
    let s;
    a.Z.dispatch({
        type: 'GAME_CONSOLE_DEVICE_SEND_COMMAND_START',
        platform: e
    });
    try {
        s = await o.tn.post({
            url: m.ANM.CONSOLES_DEVICES_COMMANDS(e, t),
            body: {
                command: r.n.CONNECT_VOICE,
                channel_id: n.id,
                guild_id: n.guild_id,
                nonce: i
            },
            rejectWithError: !1
        });
    } catch (t) {
        throw (
            (a.Z.dispatch({
                type: 'GAME_CONSOLE_DEVICE_SEND_COMMAND_FAIL',
                platform: e,
                error: t
            }),
            t)
        );
    }
    let l = s.body.id;
    return (
        a.Z.dispatch({
            type: 'WAIT_FOR_REMOTE_SESSION',
            sessionType: e,
            nonce: i,
            channelId: n.id,
            deviceId: t,
            commandId: l
        }),
        l
    );
}
async function w(e, t, n) {
    a.Z.dispatch({
        type: 'GAME_CONSOLE_DEVICE_CANCEL_COMMAND_START',
        platform: e,
        deviceId: t,
        commandId: n
    });
    try {
        await o.tn.del({
            url: m.ANM.CONSOLES_DEVICES_COMMAND(e, t, n),
            rejectWithError: !1
        });
    } catch (r) {
        throw (
            (a.Z.dispatch({
                type: 'GAME_CONSOLE_DEVICE_CANCEL_COMMAND_FAIL',
                platform: e,
                deviceId: t,
                commandId: n,
                error: r
            }),
            r)
        );
    }
    a.Z.dispatch({
        type: 'GAME_CONSOLE_DEVICE_CANCEL_COMMAND_SUCCESS',
        platform: e,
        deviceId: t,
        commandId: n
    });
}
async function D(e, t, n) {
    await p.Z.maybeShowPTTAlert(e), await y();
    let r = await N();
    await P(e, t, n, r), (0, h.Z)(n.id, e);
}
