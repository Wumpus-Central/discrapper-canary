(n.d(t, { m9: () => p, ZG: () => I, Uc: () => N, uh: () => S, Jm: () => C, VR: () => g, Fc: () => T, JS: () => m }),
    n(321073));
var i,
    r = (((i = {}).TRANSFER_EXISTING_CALL = "TRANSFER_EXISTING_CALL"), (i.CREATE_NEW_CALL = "CREATE_NEW_CALL"), i),
    a = n(620632),
    s = n(73153),
    l = n(157559),
    o = n(386723),
    d = n(495867),
    c = n(528767),
    u = n(129230),
    _ = n(856383),
    E = n(643501),
    A = n(652215),
    f = n(792996);
function h(e, t) {
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
        i.push(
            (async function (e, t, n) {
                s.h.dispatch({
                    type: "GAME_CONSOLE_DEVICE_CANCEL_COMMAND_START",
                    platform: e,
                    deviceId: t,
                    commandId: n,
                });
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
                s.h.dispatch({
                    type: "GAME_CONSOLE_DEVICE_CANCEL_COMMAND_SUCCESS",
                    platform: e,
                    deviceId: t,
                    commandId: n,
                });
            })(t.type, t.deviceId, t.commandId),
        ),
        null != n && i.push(((e = n), a.Bo.del({ url: A.Rsh.CONNECT_REQUEST(e), rejectWithError: !1 }))));
    try {
        await Promise.all(i);
    } catch (e) {
        l.A.show({ title: f.intl.string(f.t.LNhXcL), body: f.intl.string(f.t.QnKxtP) });
    }
}
function p(e) {
    s.h.dispatch({ type: "REMOTE_SESSION_CONNECT", sessionId: e });
}
function m(e, t) {
    let { selfMute: n, selfDeaf: i } = t;
    (s.h.dispatch({
        type: "REMOTE_COMMAND",
        sessionId: e,
        payload: { type: "VOICE_STATE_UPDATE", self_mute: n, self_deaf: i },
    }),
        h("VOICE_STATE_UPDATE", e));
}
function T(e) {
    (s.h.dispatch({ type: "REMOTE_COMMAND", sessionId: e, payload: { type: "DISCONNECT" } }), h("DISCONNECT", e), I());
}
function g(e, t, n, i) {
    let r = (0, o.o)(n);
    null != r &&
        (s.h.dispatch({
            type: "REMOTE_COMMAND",
            sessionId: e,
            payload: { type: "AUDIO_SETTINGS_UPDATE", context: r, id: t, ...i },
        }),
        h("AUDIO_SETTINGS_UPDATE", e));
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
