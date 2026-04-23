n.d(t, { Fc: () => g, JS: () => C, Jm: () => M, Uc: () => h, VP: () => y, VR: () => R, ZG: () => p, m9: () => O }),
    n(321073);
var i = n(216348),
    r = n(213270),
    a = n(636537),
    l = n(228366),
    s = n(157559),
    o = n(409826),
    u = n(763827),
    _ = n(528767),
    E = n(954571),
    A = n(38405),
    c = n(124697),
    d = n(643501),
    I = n(350701),
    T = n(652215),
    N = n(985018);
function S(e, t) {
    E.default.track(T.HAw.REMOTE_COMMAND_SENT, {
        command_type: e,
        remote_platform: _.A.getSessionById(t)?.clientInfo?.os,
    });
}
async function p() {
    var e;
    let t = d.default.getAwaitingRemoteSessionInfo(),
        n = t?.nonce;
    l.h.dispatch({ type: "REMOTE_SESSION_DISCONNECT" });
    let i = [];
    (t?.type === T.fg2.PLAYSTATION || t?.type === T.fg2.PLAYSTATION_STAGING) &&
        t?.commandId != null &&
        t?.deviceId != null &&
        i.push(L(t.type, t.deviceId, t.commandId)),
        null != n && i.push(((e = n), a.Bo.del({ url: T.Rsh.CONNECT_REQUEST(e), rejectWithError: !1 })));
    try {
        await Promise.all(i);
    } catch (e) {
        s.A.show({ title: N.intl.string(N.t.LNhXcL), body: N.intl.string(N.t.QnKxtP) });
    }
}
function O(e) {
    l.h.dispatch({ type: "REMOTE_SESSION_CONNECT", sessionId: e });
}
function C(e, t) {
    let { selfMute: n, selfDeaf: i } = t;
    l.h.dispatch({
        type: "REMOTE_COMMAND",
        sessionId: e,
        payload: { type: "VOICE_STATE_UPDATE", self_mute: n, self_deaf: i },
    }),
        S("VOICE_STATE_UPDATE", e);
}
function g(e) {
    l.h.dispatch({ type: "REMOTE_COMMAND", sessionId: e, payload: { type: "DISCONNECT" } }), S("DISCONNECT", e), p();
}
function R(e, t, n, i) {
    let r = (0, o.o)(n);
    null != r &&
        (l.h.dispatch({
            type: "REMOTE_COMMAND",
            sessionId: e,
            payload: { type: "AUDIO_SETTINGS_UPDATE", context: r, id: t, ...i },
        }),
        S("AUDIO_SETTINGS_UPDATE", e));
}
async function m() {
    let e;
    try {
        let t = null != u.A.getRTCConnectionId() ? r.g.TRANSFER_EXISTING_CALL : r.g.CREATE_NEW_CALL;
        e = (
            await a.Bo.post({
                url: T.Rsh.CONNECT_REQUEST_CREATE,
                body: { analytics_properties: { handoff_type: t } },
                rejectWithError: !1,
            })
        ).body.nonce;
    } catch (e) {
        A.A.captureException(e);
    }
    return e;
}
async function h(e) {
    let t;
    l.h.dispatch({ type: "GAME_CONSOLE_FETCH_DEVICES_START", platform: e });
    try {
        t = await a.Bo.get({ url: T.Rsh.CONSOLES_DEVICES(e), rejectWithError: !1 });
    } catch (t) {
        throw (l.h.dispatch({ type: "GAME_CONSOLE_FETCH_DEVICES_FAIL", platform: e, error: t }), t);
    }
    let n = t.body.devices;
    return l.h.dispatch({ type: "GAME_CONSOLE_FETCH_DEVICES_SUCCESS", platform: e, devices: n }), n;
}
function M(e, t) {
    l.h.dispatch({ type: "GAME_CONSOLE_SELECT_DEVICE", platform: e, deviceId: t });
}
async function f(e, t, n, r) {
    let s;
    l.h.dispatch({ type: "GAME_CONSOLE_DEVICE_SEND_COMMAND_START", platform: e });
    try {
        s = await a.Bo.post({
            url: T.Rsh.CONSOLES_DEVICES_COMMANDS(e, t),
            body: { command: i.O.CONNECT_VOICE, channel_id: n.id, guild_id: n.guild_id, nonce: r },
            rejectWithError: !1,
        });
    } catch (t) {
        throw (l.h.dispatch({ type: "GAME_CONSOLE_DEVICE_SEND_COMMAND_FAIL", platform: e, error: t }), t);
    }
    let o = s.body.id;
    return (
        l.h.dispatch({
            type: "WAIT_FOR_REMOTE_SESSION",
            sessionType: e,
            nonce: r,
            channelId: n.id,
            deviceId: t,
            commandId: o,
        }),
        o
    );
}
async function L(e, t, n) {
    l.h.dispatch({ type: "GAME_CONSOLE_DEVICE_CANCEL_COMMAND_START", platform: e, deviceId: t, commandId: n });
    try {
        await a.Bo.del({ url: T.Rsh.CONSOLES_DEVICES_COMMAND(e, t, n), rejectWithError: !1 });
    } catch (i) {
        throw (
            (l.h.dispatch({
                type: "GAME_CONSOLE_DEVICE_CANCEL_COMMAND_FAIL",
                platform: e,
                deviceId: t,
                commandId: n,
                error: i,
            }),
            i)
        );
    }
    l.h.dispatch({ type: "GAME_CONSOLE_DEVICE_CANCEL_COMMAND_SUCCESS", platform: e, deviceId: t, commandId: n });
}
async function y(e, t, n) {
    await c.A.maybeShowPTTAlert(e), await p();
    let i = await m();
    await f(e, t, n, i), (0, I.A)(n.id, e);
}
