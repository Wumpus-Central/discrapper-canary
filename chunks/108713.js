"use strict";
n.d(t, { Fc: () => y, JS: () => T, Jm: () => N, Uc: () => b, VP: () => D, VR: () => S, ZG: () => A, m9: () => I }),
    n(321073);
var r = n(216348),
    i = n(213270),
    a = n(562465),
    s = n(73153),
    o = n(157559),
    l = n(409826),
    u = n(383501),
    c = n(528767),
    d = n(954571),
    _ = n(728458),
    f = n(124697),
    p = n(643501),
    h = n(350701),
    m = n(652215),
    g = n(985018);
function E(e, t) {
    d.default.track(m.HAw.REMOTE_COMMAND_SENT, {
        command_type: e,
        remote_platform: c.A.getSessionById(t)?.clientInfo?.os,
    });
}
async function A() {
    let e = p.default.getAwaitingRemoteSessionInfo(),
        t = e?.nonce;
    s.h.dispatch({ type: "REMOTE_SESSION_DISCONNECT" });
    let n = [];
    (e?.type === m.fg2.PLAYSTATION || e?.type === m.fg2.PLAYSTATION_STAGING) &&
        e?.commandId != null &&
        e?.deviceId != null &&
        n.push(O(e.type, e.deviceId, e.commandId)),
        null != t && n.push(C(t));
    try {
        await Promise.all(n);
    } catch (e) {
        o.A.show({ title: g.intl.string(g.t.LNhXcL), body: g.intl.string(g.t.QnKxtP) });
    }
}
function I(e) {
    s.h.dispatch({ type: "REMOTE_SESSION_CONNECT", sessionId: e });
}
function T(e, t) {
    let { selfMute: n, selfDeaf: r } = t;
    s.h.dispatch({
        type: "REMOTE_COMMAND",
        sessionId: e,
        payload: { type: "VOICE_STATE_UPDATE", self_mute: n, self_deaf: r },
    }),
        E("VOICE_STATE_UPDATE", e);
}
function y(e) {
    s.h.dispatch({ type: "REMOTE_COMMAND", sessionId: e, payload: { type: "DISCONNECT" } }), E("DISCONNECT", e), A();
}
function S(e, t, n, r) {
    let i = (0, l.o)(n);
    null != i &&
        (s.h.dispatch({
            type: "REMOTE_COMMAND",
            sessionId: e,
            payload: { type: "AUDIO_SETTINGS_UPDATE", context: i, id: t, ...r },
        }),
        E("AUDIO_SETTINGS_UPDATE", e));
}
async function v() {
    let e;
    try {
        let t = null != u.A.getRTCConnectionId() ? i.g.TRANSFER_EXISTING_CALL : i.g.CREATE_NEW_CALL;
        e = (
            await a.Bo.post({
                url: m.Rsh.CONNECT_REQUEST_CREATE,
                body: { analytics_properties: { handoff_type: t } },
                rejectWithError: !1,
            })
        ).body.nonce;
    } catch (e) {
        _.A.captureException(e);
    }
    return e;
}
function C(e) {
    return a.Bo.del({ url: m.Rsh.CONNECT_REQUEST(e), rejectWithError: !1 });
}
async function b(e) {
    let t;
    s.h.dispatch({ type: "GAME_CONSOLE_FETCH_DEVICES_START", platform: e });
    try {
        t = await a.Bo.get({ url: m.Rsh.CONSOLES_DEVICES(e), rejectWithError: !1 });
    } catch (t) {
        throw (s.h.dispatch({ type: "GAME_CONSOLE_FETCH_DEVICES_FAIL", platform: e, error: t }), t);
    }
    let n = t.body.devices;
    return s.h.dispatch({ type: "GAME_CONSOLE_FETCH_DEVICES_SUCCESS", platform: e, devices: n }), n;
}
function N(e, t) {
    s.h.dispatch({ type: "GAME_CONSOLE_SELECT_DEVICE", platform: e, deviceId: t });
}
async function R(e, t, n, i) {
    let o;
    s.h.dispatch({ type: "GAME_CONSOLE_DEVICE_SEND_COMMAND_START", platform: e });
    try {
        o = await a.Bo.post({
            url: m.Rsh.CONSOLES_DEVICES_COMMANDS(e, t),
            body: { command: r.O.CONNECT_VOICE, channel_id: n.id, guild_id: n.guild_id, nonce: i },
            rejectWithError: !1,
        });
    } catch (t) {
        throw (s.h.dispatch({ type: "GAME_CONSOLE_DEVICE_SEND_COMMAND_FAIL", platform: e, error: t }), t);
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
async function O(e, t, n) {
    s.h.dispatch({ type: "GAME_CONSOLE_DEVICE_CANCEL_COMMAND_START", platform: e, deviceId: t, commandId: n });
    try {
        await a.Bo.del({ url: m.Rsh.CONSOLES_DEVICES_COMMAND(e, t, n), rejectWithError: !1 });
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
    s.h.dispatch({ type: "GAME_CONSOLE_DEVICE_CANCEL_COMMAND_SUCCESS", platform: e, deviceId: t, commandId: n });
}
async function D(e, t, n) {
    await f.A.maybeShowPTTAlert(e), await A();
    let r = await v();
    await R(e, t, n, r), (0, h.A)(n.id, e);
}
