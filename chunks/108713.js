"use strict";
n.d(t, { Fc: () => S, JS: () => T, Jm: () => C, Uc: () => v, VP: () => b, VR: () => y, ZG: () => A, m9: () => I }),
    n(321073);
var r = n(216348),
    i = n(213270),
    s = n(562465),
    a = n(73153),
    o = n(157559),
    l = n(409826),
    u = n(383501),
    c = n(528767),
    d = n(954571),
    _ = n(728458),
    f = n(124697),
    p = n(643501),
    h = n(350701),
    E = n(652215),
    m = n(985018);
function g(e, t) {
    d.default.track(E.HAw.REMOTE_COMMAND_SENT, {
        command_type: e,
        remote_platform: c.A.getSessionById(t)?.clientInfo?.os,
    });
}
async function A() {
    var e;
    let t = p.default.getAwaitingRemoteSessionInfo(),
        n = t?.nonce;
    a.h.dispatch({ type: "REMOTE_SESSION_DISCONNECT" });
    let r = [];
    (t?.type === E.fg2.PLAYSTATION || t?.type === E.fg2.PLAYSTATION_STAGING) &&
        t?.commandId != null &&
        t?.deviceId != null &&
        r.push(R(t.type, t.deviceId, t.commandId)),
        null != n && r.push(((e = n), s.Bo.del({ url: E.Rsh.CONNECT_REQUEST(e), rejectWithError: !1 })));
    try {
        await Promise.all(r);
    } catch (e) {
        o.A.show({ title: m.intl.string(m.t.LNhXcL), body: m.intl.string(m.t.QnKxtP) });
    }
}
function I(e) {
    a.h.dispatch({ type: "REMOTE_SESSION_CONNECT", sessionId: e });
}
function T(e, t) {
    let { selfMute: n, selfDeaf: r } = t;
    a.h.dispatch({
        type: "REMOTE_COMMAND",
        sessionId: e,
        payload: { type: "VOICE_STATE_UPDATE", self_mute: n, self_deaf: r },
    }),
        g("VOICE_STATE_UPDATE", e);
}
function S(e) {
    a.h.dispatch({ type: "REMOTE_COMMAND", sessionId: e, payload: { type: "DISCONNECT" } }), g("DISCONNECT", e), A();
}
function y(e, t, n, r) {
    let i = (0, l.o)(n);
    null != i &&
        (a.h.dispatch({
            type: "REMOTE_COMMAND",
            sessionId: e,
            payload: { type: "AUDIO_SETTINGS_UPDATE", context: i, id: t, ...r },
        }),
        g("AUDIO_SETTINGS_UPDATE", e));
}
async function N() {
    let e;
    try {
        let t = null != u.A.getRTCConnectionId() ? i.g.TRANSFER_EXISTING_CALL : i.g.CREATE_NEW_CALL;
        e = (
            await s.Bo.post({
                url: E.Rsh.CONNECT_REQUEST_CREATE,
                body: { analytics_properties: { handoff_type: t } },
                rejectWithError: !1,
            })
        ).body.nonce;
    } catch (e) {
        _.A.captureException(e);
    }
    return e;
}
async function v(e) {
    let t;
    a.h.dispatch({ type: "GAME_CONSOLE_FETCH_DEVICES_START", platform: e });
    try {
        t = await s.Bo.get({ url: E.Rsh.CONSOLES_DEVICES(e), rejectWithError: !1 });
    } catch (t) {
        throw (a.h.dispatch({ type: "GAME_CONSOLE_FETCH_DEVICES_FAIL", platform: e, error: t }), t);
    }
    let n = t.body.devices;
    return a.h.dispatch({ type: "GAME_CONSOLE_FETCH_DEVICES_SUCCESS", platform: e, devices: n }), n;
}
function C(e, t) {
    a.h.dispatch({ type: "GAME_CONSOLE_SELECT_DEVICE", platform: e, deviceId: t });
}
async function O(e, t, n, i) {
    let o;
    a.h.dispatch({ type: "GAME_CONSOLE_DEVICE_SEND_COMMAND_START", platform: e });
    try {
        o = await s.Bo.post({
            url: E.Rsh.CONSOLES_DEVICES_COMMANDS(e, t),
            body: { command: r.O.CONNECT_VOICE, channel_id: n.id, guild_id: n.guild_id, nonce: i },
            rejectWithError: !1,
        });
    } catch (t) {
        throw (a.h.dispatch({ type: "GAME_CONSOLE_DEVICE_SEND_COMMAND_FAIL", platform: e, error: t }), t);
    }
    let l = o.body.id;
    return (
        a.h.dispatch({
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
async function R(e, t, n) {
    a.h.dispatch({ type: "GAME_CONSOLE_DEVICE_CANCEL_COMMAND_START", platform: e, deviceId: t, commandId: n });
    try {
        await s.Bo.del({ url: E.Rsh.CONSOLES_DEVICES_COMMAND(e, t, n), rejectWithError: !1 });
    } catch (r) {
        throw (
            (a.h.dispatch({
                type: "GAME_CONSOLE_DEVICE_CANCEL_COMMAND_FAIL",
                platform: e,
                deviceId: t,
                commandId: n,
                error: r,
            }),
            r)
        );
    }
    a.h.dispatch({ type: "GAME_CONSOLE_DEVICE_CANCEL_COMMAND_SUCCESS", platform: e, deviceId: t, commandId: n });
}
async function b(e, t, n) {
    await f.A.maybeShowPTTAlert(e), await A();
    let r = await N();
    await O(e, t, n, r), (0, h.A)(n.id, e);
}
