r.d(n, {
    LO: function () {
        return O;
    },
    On: function () {
        return C;
    },
    Vv: function () {
        return S;
    },
    _: function () {
        return A;
    },
    bp: function () {
        return D;
    },
    ef: function () {
        return T;
    },
    s6: function () {
        return I;
    },
    sh: function () {
        return w;
    }
});
var i = r(653041);
var a = r(47120);
var o = r(434179),
    s = r(771649),
    l = r(544891),
    u = r(570140),
    c = r(668781),
    d = r(340332),
    f = r(19780),
    p = r(797258),
    h = r(626135),
    _ = r(960048),
    m = r(607214),
    g = r(258609),
    E = r(893387),
    v = r(981631),
    y = r(388032);
function b(e, n) {
    var r, i;
    h.default.track(v.rMx.REMOTE_COMMAND_SENT, {
        command_type: e,
        remote_platform: null === (i = p.Z.getSessionById(n)) || void 0 === i ? void 0 : null === (r = i.clientInfo) || void 0 === r ? void 0 : r.os
    });
}
async function I() {
    let e = g.Z.getAwaitingRemoteSessionInfo(),
        n = null == e ? void 0 : e.nonce;
    u.Z.dispatch({ type: 'REMOTE_SESSION_DISCONNECT' });
    let r = [];
    ((null == e ? void 0 : e.type) === v.ABu.PLAYSTATION || (null == e ? void 0 : e.type) === v.ABu.PLAYSTATION_STAGING) && (null == e ? void 0 : e.commandId) != null && (null == e ? void 0 : e.deviceId) != null && r.push(L(e.type, e.deviceId, e.commandId)), null != n && r.push(R(n));
    try {
        await Promise.all(r);
    } catch (e) {
        c.Z.show({
            title: y.intl.string(y.t.LNhXcH),
            body: y.intl.string(y.t.QnKxtL)
        });
    }
}
function T(e) {
    u.Z.dispatch({
        type: 'REMOTE_SESSION_CONNECT',
        sessionId: e
    });
}
function S(e, n) {
    let { selfMute: r, selfDeaf: i } = n;
    u.Z.dispatch({
        type: 'REMOTE_COMMAND',
        sessionId: e,
        payload: {
            type: 'VOICE_STATE_UPDATE',
            self_mute: r,
            self_deaf: i
        }
    }),
        b('VOICE_STATE_UPDATE', e);
}
function A(e) {
    u.Z.dispatch({
        type: 'REMOTE_COMMAND',
        sessionId: e,
        payload: { type: 'DISCONNECT' }
    }),
        b('DISCONNECT', e),
        I();
}
function C(e, n, r, i) {
    let a = (0, d.z)(r);
    null != a &&
        (u.Z.dispatch({
            type: 'REMOTE_COMMAND',
            sessionId: e,
            payload: {
                type: 'AUDIO_SETTINGS_UPDATE',
                context: a,
                id: n,
                ...i
            }
        }),
        b('AUDIO_SETTINGS_UPDATE', e));
}
async function N() {
    let e;
    try {
        let n = null != f.Z.getRTCConnectionId() ? s.o.TRANSFER_EXISTING_CALL : s.o.CREATE_NEW_CALL;
        e = (
            await l.tn.post({
                url: v.ANM.CONNECT_REQUEST_CREATE,
                body: { analytics_properties: { handoff_type: n } },
                rejectWithError: !1
            })
        ).body.nonce;
    } catch (e) {
        _.Z.captureException(e);
    }
    return e;
}
function R(e) {
    return l.tn.del({
        url: v.ANM.CONNECT_REQUEST(e),
        rejectWithError: !1
    });
}
async function O(e) {
    let n;
    u.Z.dispatch({
        type: 'GAME_CONSOLE_FETCH_DEVICES_START',
        platform: e
    });
    try {
        n = await l.tn.get({
            url: v.ANM.CONSOLES_DEVICES(e),
            rejectWithError: !1
        });
    } catch (n) {
        throw (
            (u.Z.dispatch({
                type: 'GAME_CONSOLE_FETCH_DEVICES_FAIL',
                platform: e,
                error: n
            }),
            n)
        );
    }
    let r = n.body.devices;
    return (
        u.Z.dispatch({
            type: 'GAME_CONSOLE_FETCH_DEVICES_SUCCESS',
            platform: e,
            devices: r
        }),
        r
    );
}
function D(e, n) {
    u.Z.dispatch({
        type: 'GAME_CONSOLE_SELECT_DEVICE',
        platform: e,
        deviceId: n
    });
}
async function x(e, n, r, i) {
    let a;
    u.Z.dispatch({
        type: 'GAME_CONSOLE_DEVICE_SEND_COMMAND_START',
        platform: e
    });
    try {
        a = await l.tn.post({
            url: v.ANM.CONSOLES_DEVICES_COMMANDS(e, n),
            body: {
                command: o.n.CONNECT_VOICE,
                channel_id: r.id,
                guild_id: r.guild_id,
                nonce: i
            },
            rejectWithError: !1
        });
    } catch (n) {
        throw (
            (u.Z.dispatch({
                type: 'GAME_CONSOLE_DEVICE_SEND_COMMAND_FAIL',
                platform: e,
                error: n
            }),
            n)
        );
    }
    let s = a.body.id;
    return (
        u.Z.dispatch({
            type: 'WAIT_FOR_REMOTE_SESSION',
            sessionType: e,
            nonce: i,
            channelId: r.id,
            deviceId: n,
            commandId: s
        }),
        s
    );
}
async function L(e, n, r) {
    u.Z.dispatch({
        type: 'GAME_CONSOLE_DEVICE_CANCEL_COMMAND_START',
        platform: e,
        deviceId: n,
        commandId: r
    });
    try {
        await l.tn.del({
            url: v.ANM.CONSOLES_DEVICES_COMMAND(e, n, r),
            rejectWithError: !1
        });
    } catch (i) {
        throw (
            (u.Z.dispatch({
                type: 'GAME_CONSOLE_DEVICE_CANCEL_COMMAND_FAIL',
                platform: e,
                deviceId: n,
                commandId: r,
                error: i
            }),
            i)
        );
    }
    u.Z.dispatch({
        type: 'GAME_CONSOLE_DEVICE_CANCEL_COMMAND_SUCCESS',
        platform: e,
        deviceId: n,
        commandId: r
    });
}
async function w(e, n, r) {
    await m.Z.maybeShowPTTAlert(e), await I();
    let i = await N();
    await x(e, n, r, i), (0, E.Z)(r.id, e);
}
