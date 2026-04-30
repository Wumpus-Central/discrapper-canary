"use strict";
n.d(t, { Fc: () => y, Jm: () => R, m9: () => S, Uc: () => O, ZG: () => T, VP: () => L, VR: () => C, JS: () => N }),
    n(321073);
var i,
    r,
    s = (((i = {}).CONNECT_VOICE = "connect_voice"), i),
    a = (((r = {}).TRANSFER_EXISTING_CALL = "TRANSFER_EXISTING_CALL"), (r.CREATE_NEW_CALL = "CREATE_NEW_CALL"), r),
    o = n(636537),
    l = n(228366),
    u = n(157559),
    c = n(409826),
    d = n(763827),
    _ = n(528767),
    f = n(174459),
    h = n(38405),
    p = n(124697),
    E = n(643501),
    m = n(350701),
    g = n(652215),
    A = n(375708);
function I(e, t) {
    f.default.track(g.HAw.REMOTE_COMMAND_SENT, {
        command_type: e,
        remote_platform: _.A.getSessionById(t)?.clientInfo?.os,
    });
}
async function T() {
    var e;
    let t = E.default.getAwaitingRemoteSessionInfo(),
        n = t?.nonce;
    l.h.dispatch({ type: "REMOTE_SESSION_DISCONNECT" });
    let i = [];
    (t?.type === g.fg2.PLAYSTATION || t?.type === g.fg2.PLAYSTATION_STAGING) &&
        t?.commandId != null &&
        t?.deviceId != null &&
        i.push(D(t.type, t.deviceId, t.commandId)),
        null != n && i.push(((e = n), o.Bo.del({ url: g.Rsh.CONNECT_REQUEST(e), rejectWithError: !1 })));
    try {
        await Promise.all(i);
    } catch (e) {
        u.A.show({ title: A.intl.string(A.t.LNhXcL), body: A.intl.string(A.t.QnKxtP) });
    }
}
function S(e) {
    l.h.dispatch({ type: "REMOTE_SESSION_CONNECT", sessionId: e });
}
function N(e, t) {
    let { selfMute: n, selfDeaf: i } = t;
    l.h.dispatch({
        type: "REMOTE_COMMAND",
        sessionId: e,
        payload: { type: "VOICE_STATE_UPDATE", self_mute: n, self_deaf: i },
    }),
        I("VOICE_STATE_UPDATE", e);
}
function y(e) {
    l.h.dispatch({ type: "REMOTE_COMMAND", sessionId: e, payload: { type: "DISCONNECT" } }), I("DISCONNECT", e), T();
}
function C(e, t, n, i) {
    let r = (0, c.o)(n);
    null != r &&
        (l.h.dispatch({
            type: "REMOTE_COMMAND",
            sessionId: e,
            payload: { type: "AUDIO_SETTINGS_UPDATE", context: r, id: t, ...i },
        }),
        I("AUDIO_SETTINGS_UPDATE", e));
}
async function v() {
    let e;
    try {
        let t = null != d.A.getRTCConnectionId() ? a.TRANSFER_EXISTING_CALL : a.CREATE_NEW_CALL;
        e = (
            await o.Bo.post({
                url: g.Rsh.CONNECT_REQUEST_CREATE,
                body: { analytics_properties: { handoff_type: t } },
                rejectWithError: !1,
            })
        ).body.nonce;
    } catch (e) {
        h.A.captureException(e);
    }
    return e;
}
async function O(e) {
    let t;
    l.h.dispatch({ type: "GAME_CONSOLE_FETCH_DEVICES_START", platform: e });
    try {
        t = await o.Bo.get({ url: g.Rsh.CONSOLES_DEVICES(e), rejectWithError: !1 });
    } catch (t) {
        throw (l.h.dispatch({ type: "GAME_CONSOLE_FETCH_DEVICES_FAIL", platform: e, error: t }), t);
    }
    let n = t.body.devices;
    return l.h.dispatch({ type: "GAME_CONSOLE_FETCH_DEVICES_SUCCESS", platform: e, devices: n }), n;
}
function R(e, t) {
    l.h.dispatch({ type: "GAME_CONSOLE_SELECT_DEVICE", platform: e, deviceId: t });
}
async function b(e, t, n, i) {
    let r;
    l.h.dispatch({ type: "GAME_CONSOLE_DEVICE_SEND_COMMAND_START", platform: e });
    try {
        r = await o.Bo.post({
            url: g.Rsh.CONSOLES_DEVICES_COMMANDS(e, t),
            body: { command: s.CONNECT_VOICE, channel_id: n.id, guild_id: n.guild_id, nonce: i },
            rejectWithError: !1,
        });
    } catch (t) {
        throw (l.h.dispatch({ type: "GAME_CONSOLE_DEVICE_SEND_COMMAND_FAIL", platform: e, error: t }), t);
    }
    let a = r.body.id;
    return (
        l.h.dispatch({
            type: "WAIT_FOR_REMOTE_SESSION",
            sessionType: e,
            nonce: i,
            channelId: n.id,
            deviceId: t,
            commandId: a,
        }),
        a
    );
}
async function D(e, t, n) {
    l.h.dispatch({ type: "GAME_CONSOLE_DEVICE_CANCEL_COMMAND_START", platform: e, deviceId: t, commandId: n });
    try {
        await o.Bo.del({ url: g.Rsh.CONSOLES_DEVICES_COMMAND(e, t, n), rejectWithError: !1 });
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
async function L(e, t, n) {
    await p.A.maybeShowPTTAlert(e), await T();
    let i = await v();
    await b(e, t, n, i), (0, m.A)(n.id, e);
}
