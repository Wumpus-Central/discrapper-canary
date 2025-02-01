n.d(t, {
    LO: () => N,
    On: () => b,
    Vv: () => I,
    _: () => T,
    bp: () => C,
    ef: () => y,
    s6: () => v,
    sh: () => D
}),
    n(653041),
    n(47120);
var i = n(434179),
    r = n(771649),
    a = n(544891),
    s = n(570140),
    o = n(668781),
    l = n(340332),
    u = n(19780),
    c = n(797258),
    d = n(626135),
    f = n(960048),
    _ = n(607214),
    p = n(258609),
    h = n(893387),
    m = n(981631),
    g = n(388032);
function E(e, t) {
    var n, i;
    d.default.track(m.rMx.REMOTE_COMMAND_SENT, {
        command_type: e,
        remote_platform: null === (i = c.Z.getSessionById(t)) || void 0 === i ? void 0 : null === (n = i.clientInfo) || void 0 === n ? void 0 : n.os
    });
}
async function v() {
    let e = p.Z.getAwaitingRemoteSessionInfo(),
        t = null == e ? void 0 : e.nonce;
    s.Z.dispatch({ type: 'REMOTE_SESSION_DISCONNECT' });
    let n = [];
    ((null == e ? void 0 : e.type) === m.ABu.PLAYSTATION || (null == e ? void 0 : e.type) === m.ABu.PLAYSTATION_STAGING) && (null == e ? void 0 : e.commandId) != null && (null == e ? void 0 : e.deviceId) != null && n.push(O(e.type, e.deviceId, e.commandId)), null != t && n.push(A(t));
    try {
        await Promise.all(n);
    } catch (e) {
        o.Z.show({
            title: g.intl.string(g.t.LNhXcH),
            body: g.intl.string(g.t.QnKxtL)
        });
    }
}
function y(e) {
    s.Z.dispatch({
        type: 'REMOTE_SESSION_CONNECT',
        sessionId: e
    });
}
function I(e, t) {
    let { selfMute: n, selfDeaf: i } = t;
    s.Z.dispatch({
        type: 'REMOTE_COMMAND',
        sessionId: e,
        payload: {
            type: 'VOICE_STATE_UPDATE',
            self_mute: n,
            self_deaf: i
        }
    }),
        E('VOICE_STATE_UPDATE', e);
}
function T(e) {
    s.Z.dispatch({
        type: 'REMOTE_COMMAND',
        sessionId: e,
        payload: { type: 'DISCONNECT' }
    }),
        E('DISCONNECT', e),
        v();
}
function b(e, t, n, i) {
    let r = (0, l.z)(n);
    null != r &&
        (s.Z.dispatch({
            type: 'REMOTE_COMMAND',
            sessionId: e,
            payload: {
                type: 'AUDIO_SETTINGS_UPDATE',
                context: r,
                id: t,
                ...i
            }
        }),
        E('AUDIO_SETTINGS_UPDATE', e));
}
async function S() {
    let e;
    try {
        let t = null != u.Z.getRTCConnectionId() ? r.o.TRANSFER_EXISTING_CALL : r.o.CREATE_NEW_CALL;
        e = (
            await a.tn.post({
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
    return a.tn.del({
        url: m.ANM.CONNECT_REQUEST(e),
        rejectWithError: !1
    });
}
async function N(e) {
    let t;
    s.Z.dispatch({
        type: 'GAME_CONSOLE_FETCH_DEVICES_START',
        platform: e
    });
    try {
        t = await a.tn.get({
            url: m.ANM.CONSOLES_DEVICES(e),
            rejectWithError: !1
        });
    } catch (t) {
        throw (
            (s.Z.dispatch({
                type: 'GAME_CONSOLE_FETCH_DEVICES_FAIL',
                platform: e,
                error: t
            }),
            t)
        );
    }
    let n = t.body.devices;
    return (
        s.Z.dispatch({
            type: 'GAME_CONSOLE_FETCH_DEVICES_SUCCESS',
            platform: e,
            devices: n
        }),
        n
    );
}
function C(e, t) {
    s.Z.dispatch({
        type: 'GAME_CONSOLE_SELECT_DEVICE',
        platform: e,
        deviceId: t
    });
}
async function R(e, t, n, r) {
    let o;
    s.Z.dispatch({
        type: 'GAME_CONSOLE_DEVICE_SEND_COMMAND_START',
        platform: e
    });
    try {
        o = await a.tn.post({
            url: m.ANM.CONSOLES_DEVICES_COMMANDS(e, t),
            body: {
                command: i.n.CONNECT_VOICE,
                channel_id: n.id,
                guild_id: n.guild_id,
                nonce: r
            },
            rejectWithError: !1
        });
    } catch (t) {
        throw (
            (s.Z.dispatch({
                type: 'GAME_CONSOLE_DEVICE_SEND_COMMAND_FAIL',
                platform: e,
                error: t
            }),
            t)
        );
    }
    let l = o.body.id;
    return (
        s.Z.dispatch({
            type: 'WAIT_FOR_REMOTE_SESSION',
            sessionType: e,
            nonce: r,
            channelId: n.id,
            deviceId: t,
            commandId: l
        }),
        l
    );
}
async function O(e, t, n) {
    s.Z.dispatch({
        type: 'GAME_CONSOLE_DEVICE_CANCEL_COMMAND_START',
        platform: e,
        deviceId: t,
        commandId: n
    });
    try {
        await a.tn.del({
            url: m.ANM.CONSOLES_DEVICES_COMMAND(e, t, n),
            rejectWithError: !1
        });
    } catch (i) {
        throw (
            (s.Z.dispatch({
                type: 'GAME_CONSOLE_DEVICE_CANCEL_COMMAND_FAIL',
                platform: e,
                deviceId: t,
                commandId: n,
                error: i
            }),
            i)
        );
    }
    s.Z.dispatch({
        type: 'GAME_CONSOLE_DEVICE_CANCEL_COMMAND_SUCCESS',
        platform: e,
        deviceId: t,
        commandId: n
    });
}
async function D(e, t, n) {
    await _.Z.maybeShowPTTAlert(e), await v();
    let i = await S();
    await R(e, t, n, i), (0, h.Z)(n.id, e);
}
