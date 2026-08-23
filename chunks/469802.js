"use strict";
n.d(t, { Fc: () => C, Jm: () => y, m9: () => S, Uc: () => L, ZG: () => g, VP: () => b, VR: () => R, JS: () => N }),
    n(321073);
var i,
    r,
    a = (((i = {}).CONNECT_VOICE = "connect_voice"), i),
    s = (((r = {}).TRANSFER_EXISTING_CALL = "TRANSFER_EXISTING_CALL"), (r.CREATE_NEW_CALL = "CREATE_NEW_CALL"), r),
    l = n(636537),
    o = n(228366),
    d = n(157559),
    c = n(386723),
    u = n(763827),
    _ = n(528767),
    E = n(174459),
    A = n(38405),
    h = n(124697),
    I = n(643501),
    f = n(350701),
    p = n(652215),
    T = n(375708);
function m(e, t) {
    E.default.track(p.HAw.REMOTE_COMMAND_SENT, {
        command_type: e,
        remote_platform: _.A.getSessionById(t)?.clientInfo?.os,
    });
}
async function g() {
    var e;
    let t = I.default.getAwaitingRemoteSessionInfo(),
        n = t?.nonce;
    o.h.dispatch({ type: "REMOTE_SESSION_DISCONNECT" });
    let i = [];
    (t?.type === p.fg2.PLAYSTATION || t?.type === p.fg2.PLAYSTATION_STAGING) &&
        t?.commandId != null &&
        t?.deviceId != null &&
        i.push(v(t.type, t.deviceId, t.commandId)),
        null != n && i.push(((e = n), l.Bo.del({ url: p.Rsh.CONNECT_REQUEST(e), rejectWithError: !1 })));
    try {
        await Promise.all(i);
    } catch (e) {
        d.A.show({ title: T.intl.string(T.t.LNhXcL), body: T.intl.string(T.t.QnKxtP) });
    }
}
function S(e) {
    o.h.dispatch({ type: "REMOTE_SESSION_CONNECT", sessionId: e });
}
function N(e, t) {
    let { selfMute: n, selfDeaf: i } = t;
    o.h.dispatch({
        type: "REMOTE_COMMAND",
        sessionId: e,
        payload: { type: "VOICE_STATE_UPDATE", self_mute: n, self_deaf: i },
    }),
        m("VOICE_STATE_UPDATE", e);
}
function C(e) {
    o.h.dispatch({ type: "REMOTE_COMMAND", sessionId: e, payload: { type: "DISCONNECT" } }), m("DISCONNECT", e), g();
}
function R(e, t, n, i) {
    let r = (0, c.o)(n);
    null != r &&
        (o.h.dispatch({
            type: "REMOTE_COMMAND",
            sessionId: e,
            payload: { type: "AUDIO_SETTINGS_UPDATE", context: r, id: t, ...i },
        }),
        m("AUDIO_SETTINGS_UPDATE", e));
}
async function O() {
    let e;
    try {
        let t = null != u.A.getRTCConnectionId() ? s.TRANSFER_EXISTING_CALL : s.CREATE_NEW_CALL;
        e = (
            await l.Bo.post({
                url: p.Rsh.CONNECT_REQUEST_CREATE,
                body: { analytics_properties: { handoff_type: t } },
                rejectWithError: !1,
            })
        ).body.nonce;
    } catch (e) {
        A.A.captureException(e);
    }
    return e;
}
async function L(e) {
    let t;
    o.h.dispatch({ type: "GAME_CONSOLE_FETCH_DEVICES_START", platform: e });
    try {
        t = await l.Bo.get({ url: p.Rsh.CONSOLES_DEVICES(e), rejectWithError: !1 });
    } catch (t) {
        throw (o.h.dispatch({ type: "GAME_CONSOLE_FETCH_DEVICES_FAIL", platform: e, error: t }), t);
    }
    let n = t.body.devices;
    return o.h.dispatch({ type: "GAME_CONSOLE_FETCH_DEVICES_SUCCESS", platform: e, devices: n }), n;
}
function y(e, t) {
    o.h.dispatch({ type: "GAME_CONSOLE_SELECT_DEVICE", platform: e, deviceId: t });
}
async function D(e, t, n, i) {
    let r;
    o.h.dispatch({ type: "GAME_CONSOLE_DEVICE_SEND_COMMAND_START", platform: e });
    try {
        r = await l.Bo.post({
            url: p.Rsh.CONSOLES_DEVICES_COMMANDS(e, t),
            body: { command: a.CONNECT_VOICE, channel_id: n.id, guild_id: n.guild_id, nonce: i },
            rejectWithError: !1,
        });
    } catch (t) {
        throw (o.h.dispatch({ type: "GAME_CONSOLE_DEVICE_SEND_COMMAND_FAIL", platform: e, error: t }), t);
    }
    let s = r.body.id;
    return (
        o.h.dispatch({
            type: "WAIT_FOR_REMOTE_SESSION",
            sessionType: e,
            nonce: i,
            channelId: n.id,
            deviceId: t,
            commandId: s,
        }),
        s
    );
}
async function v(e, t, n) {
    o.h.dispatch({ type: "GAME_CONSOLE_DEVICE_CANCEL_COMMAND_START", platform: e, deviceId: t, commandId: n });
    try {
        await l.Bo.del({ url: p.Rsh.CONSOLES_DEVICES_COMMAND(e, t, n), rejectWithError: !1 });
    } catch (i) {
        throw (
            (o.h.dispatch({
                type: "GAME_CONSOLE_DEVICE_CANCEL_COMMAND_FAIL",
                platform: e,
                deviceId: t,
                commandId: n,
                error: i,
            }),
            i)
        );
    }
    o.h.dispatch({ type: "GAME_CONSOLE_DEVICE_CANCEL_COMMAND_SUCCESS", platform: e, deviceId: t, commandId: n });
}
async function b(e, t, n) {
    await h.A.maybeShowPTTAlert(e), await g();
    let i = await O();
    await D(e, t, n, i), (0, f.A)(n.id, e);
}
