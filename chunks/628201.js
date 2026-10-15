(n.d(t, { Fc: () => m, Jm: () => C, m9: () => p, Uc: () => N, ZG: () => I, VR: () => g, uh: () => S, JS: () => T }),
    n(321073));
var i,
    r = (((i = {}).TRANSFER_EXISTING_CALL = "TRANSFER_EXISTING_CALL"), (i.CREATE_NEW_CALL = "CREATE_NEW_CALL"), i),
    a = n(636537),
    s = n(73153),
    l = n(157559),
    o = n(386723),
    d = n(763827),
    c = n(528767),
    u = n(174459),
    _ = n(38405),
    E = n(643501),
    A = n(652215),
    h = n(105292);
function f(e, t) {
    u.default.track(A.HAw.REMOTE_COMMAND_SENT, {
        command_type: e,
        remote_platform: c.A.getSessionById(t)?.clientInfo?.os,
    });
}
async function I() {
    var e;
    let t = E.default.getAwaitingRemoteSessionInfo(),
        n = t?.nonce;
    s.h.dispatch({ type: "REMOTE_SESSION_DISCONNECT" });
    let i = [];
    ((t?.type === A.fg2.PLAYSTATION || t?.type === A.fg2.PLAYSTATION_STAGING) &&
        t?.commandId != null &&
        t?.deviceId != null &&
        i.push(O(t.type, t.deviceId, t.commandId)),
        null != n && i.push(((e = n), a.Bo.del({ url: A.Rsh.CONNECT_REQUEST(e), rejectWithError: !1 }))));
    try {
        await Promise.all(i);
    } catch (e) {
        l.A.show({ title: h.intl.string(h.t.LNhXcL), body: h.intl.string(h.t.QnKxtP) });
    }
}
function p(e) {
    s.h.dispatch({ type: "REMOTE_SESSION_CONNECT", sessionId: e });
}
function T(e, t) {
    let { selfMute: n, selfDeaf: i } = t;
    (s.h.dispatch({
        type: "REMOTE_COMMAND",
        sessionId: e,
        payload: { type: "VOICE_STATE_UPDATE", self_mute: n, self_deaf: i },
    }),
        f("VOICE_STATE_UPDATE", e));
}
function m(e) {
    (s.h.dispatch({ type: "REMOTE_COMMAND", sessionId: e, payload: { type: "DISCONNECT" } }), f("DISCONNECT", e), I());
}
function g(e, t, n, i) {
    let r = (0, o.o)(n);
    null != r &&
        (s.h.dispatch({
            type: "REMOTE_COMMAND",
            sessionId: e,
            payload: { type: "AUDIO_SETTINGS_UPDATE", context: r, id: t, ...i },
        }),
        f("AUDIO_SETTINGS_UPDATE", e));
}
async function S() {
    let e;
    try {
        let t = null != d.A.getRTCConnectionId() ? r.TRANSFER_EXISTING_CALL : r.CREATE_NEW_CALL;
        e = (
            await a.Bo.post({
                url: A.Rsh.CONNECT_REQUEST_CREATE,
                body: { analytics_properties: { handoff_type: t } },
                rejectWithError: !1,
            })
        ).body.nonce;
    } catch (e) {
        _.A.captureException(e);
    }
    return e;
}
async function N(e) {
    let t;
    s.h.dispatch({ type: "GAME_CONSOLE_FETCH_DEVICES_START", platform: e });
    try {
        t = await a.Bo.get({ url: A.Rsh.CONSOLES_DEVICES(e), rejectWithError: !1 });
    } catch (t) {
        throw (s.h.dispatch({ type: "GAME_CONSOLE_FETCH_DEVICES_FAIL", platform: e, error: t }), t);
    }
    let n = t.body.devices;
    return (s.h.dispatch({ type: "GAME_CONSOLE_FETCH_DEVICES_SUCCESS", platform: e, devices: n }), n);
}
function C(e, t) {
    s.h.dispatch({ type: "GAME_CONSOLE_SELECT_DEVICE", platform: e, deviceId: t });
}
async function O(e, t, n) {
    s.h.dispatch({ type: "GAME_CONSOLE_DEVICE_CANCEL_COMMAND_START", platform: e, deviceId: t, commandId: n });
    try {
        await a.Bo.del({ url: A.Rsh.CONSOLES_DEVICES_COMMAND(e, t, n), rejectWithError: !1 });
    } catch (i) {
        throw (
            s.h.dispatch({
                type: "GAME_CONSOLE_DEVICE_CANCEL_COMMAND_FAIL",
                platform: e,
                deviceId: t,
                commandId: n,
                error: i,
            }),
            i
        );
    }
    s.h.dispatch({ type: "GAME_CONSOLE_DEVICE_CANCEL_COMMAND_SUCCESS", platform: e, deviceId: t, commandId: n });
}
