"use strict";
n.d(t, { fK: () => g, I5: () => f, Gv: () => p, wy: () => T, sW: () => I.s, h0: () => m, Bl: () => S });
var i,
    r = n(636537),
    a = n(228366),
    s = n(493336),
    l = n(155718),
    o = n(867455),
    d = n(280450),
    c = n(935208),
    u = n(706727),
    _ = n(436283),
    E = n(337591);
let A = "_errors";
var h = n(652215),
    I = n(911929);
function f(e) {
    return null == e || "" === e || Number.isNaN(e) ? Date.now() : c.default.extractTimestamp(e) + 9e5;
}
async function p(e) {
    let {
            componentType: t,
            messageId: n,
            messageFlags: i,
            customId: a,
            componentId: E,
            applicationId: A,
            channelId: I,
            guildId: f,
            localState: p,
        } = e,
        m = c.default.fromTimestamp(Date.now());
    if (!_.Ay.canQueueInteraction(n, m)) return;
    await o.A.unarchiveThreadIfNecessary(I),
        (0, u.tU)(m, {
            messageId: n,
            data: { interactionType: l.G4.MESSAGE_COMPONENT, applicationId: A, customId: a, componentId: E },
            onFailure: (e, t) => {
                var n, i;
                return (n = I), (i = e), void (null == t && null != i && s.A.sendClydeError(n, i));
            },
        }),
        null != p && (0, u.Sw)(n, m, p, E);
    let g = {
        type: l.G4.MESSAGE_COMPONENT,
        nonce: m,
        guild_id: f,
        channel_id: I,
        message_flags: i,
        message_id: n,
        application_id: A,
        session_id: d.default.getSessionId(),
        data: {
            component_type: t,
            custom_id: a,
            ...(function (e) {
                if (null == e) return null;
                switch (e.type) {
                    case l.I5.TEXT_INPUT:
                    case l.I5.FILE_UPLOAD:
                    case l.I5.RADIO_GROUP:
                    case l.I5.CHECKBOX_GROUP:
                    case l.I5.CHECKBOX:
                        return null;
                    case l.I5.STRING_SELECT:
                        return e;
                    case l.I5.USER_SELECT:
                    case l.I5.ROLE_SELECT:
                    case l.I5.MENTIONABLE_SELECT:
                    case l.I5.CHANNEL_SELECT:
                        let t = e.selectedOptions.map((e) => e.value);
                        return { type: e.type, values: t };
                    default:
                        return null;
                }
            })(p),
        },
    };
    await r.Bo.post({ url: h.Rsh.INTERACTIONS, body: g, timeout: 3e3, rejectWithError: !1 }, (e) => {
        T(m, e, A, I, f);
    });
}
function T(e, t, n, i, r) {
    if (!t.ok) {
        if (!t.hasErr)
            if (!(t.status >= 400) || !(t.status < 500) || !t.body) return void (0, u.C1)(e, t.body?.code);
            else if (t.body.code === h.t02.INVALID_FORM_BODY && t.body.errors) {
                let s = (function e(t, n) {
                    let i = t[A];
                    if (null != i && Array.isArray(i)) return i[0];
                    for (let [i, r] of Object.entries(t))
                        if (i !== A && null != r && "object" == typeof r) return e(r, n ?? i);
                    return null;
                })(t.body.errors, void 0);
                null != s &&
                    ("INTERACTION_APPLICATION_COMMAND_INVALID_VERSION" === s.code ||
                        "INTERACTION_APPLICATION_COMMAND_INVALID" === s.code) &&
                    a.h.dispatch({
                        type: "APPLICATION_COMMAND_EXECUTE_BAD_VERSION",
                        applicationId: n,
                        channelId: i,
                        guildId: r ?? null,
                    }),
                    (0, u.C1)(e, void 0, s?.message);
                return;
            } else
                return t.body.code !== h.t02.UNKNOWN_INTEGRATION
                    ? void (0, u.C1)(e, t.body.code, t.body.message, t.status)
                    : (a.h.dispatch({
                          type: "APPLICATION_COMMAND_EXECUTE_BAD_VERSION",
                          applicationId: n,
                          channelId: i,
                          guildId: r ?? null,
                      }),
                      (0, u.C1)(e, void 0, t.body.message),
                      void 0);
        (0, u.C1)(e);
    }
}
var m =
    (((i = {})[(i.SENDING = 0)] = "SENDING"),
    (i[(i.CREATED = 1)] = "CREATED"),
    (i[(i.FAILED = 2)] = "FAILED"),
    (i[(i.TIMED_OUT = 3)] = "TIMED_OUT"),
    (i[(i.EPHEMERAL_SUCCESS = 4)] = "EPHEMERAL_SUCCESS"),
    i);
function g(e, t) {
    var n;
    let i = t?.state,
        r = e.state === h.cmJ.SENT && f(e.id) < Date.now(),
        a =
            e.state === h.cmJ.SEND_FAILED &&
            (null == (n = e.id) || "" === n || Number.isNaN(n) ? Date.now() : c.default.extractTimestamp(n) + 3e3) <
                Date.now(),
        s = t?.data.interactionType === l.G4.APPLICATION_COMMAND,
        o = e.isCommandType();
    if ((s && i === E.m.QUEUED) || (o && e.state === h.cmJ.SENDING && null != t)) return 0;
    if ((s && i === E.m.CREATED) || (e.hasFlag(h.pr7.LOADING) && !r)) return 1;
    if (null != e.interaction && e.hasFlag(h.pr7.LOADING) && r) return 3;
    if (null != e.interaction && !e.hasFlag(h.pr7.LOADING) && a) return 3;
    if (o && e.state === h.cmJ.SEND_FAILED) return 2;
    else if (null != e.interaction && e.hasFlag(h.pr7.EPHEMERAL)) return 4;
}
function S(e) {
    let t = e.options;
    for (; t?.length === 1 && (t[0].type === l.n4.SUB_COMMAND_GROUP || t[0].type === l.n4.SUB_COMMAND); )
        t = t[0].options;
    for (let e of t ?? []) if (e.type === l.n4.ATTACHMENT) return !1;
    return !0;
}
