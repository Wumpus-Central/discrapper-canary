n.d(t, { fK: () => S, I5: () => p, Gv: () => T, wy: () => m, sW: () => I.s, h0: () => g, Bl: () => N });
var i,
    r = n(127258),
    a = n(636537),
    s = n(73153),
    l = n(148494),
    o = n(155718),
    d = n(867455),
    c = n(280450),
    u = n(935208),
    _ = n(706727),
    E = n(436283),
    A = n(337591);
let h = "_errors";
var f = n(652215),
    I = n(911929);
function p(e) {
    return null == e || "" === e || Number.isNaN(e) ? Date.now() : u.default.extractTimestamp(e) + 9e5;
}
async function T(e) {
    let {
            componentType: t,
            messageId: n,
            messageFlags: i,
            customId: s,
            componentId: A,
            applicationId: h,
            channelId: I,
            guildId: p,
            localState: T,
        } = e,
        g = u.default.fromTimestamp(Date.now());
    if (!E.Ay.canQueueInteraction(n, g)) return;
    try {
        await d.A.unarchiveThreadIfNecessary(I);
    } catch {
        return;
    }
    ((0, _.tU)(g, {
        messageId: n,
        data: { interactionType: r.G.MESSAGE_COMPONENT, applicationId: h, customId: s, componentId: A },
        onFailure: (e, t) => {
            var n, i;
            return ((n = I), (i = e), void (null == t && null != i && l.A.sendClydeError(n, i)));
        },
    }),
        null != T && (0, _.Sw)(n, g, T, A));
    let S = {
        type: r.G.MESSAGE_COMPONENT,
        nonce: g,
        guild_id: p,
        channel_id: I,
        message_flags: i,
        message_id: n,
        application_id: h,
        session_id: c.default.getSessionId(),
        data: {
            component_type: t,
            custom_id: s,
            ...(function (e) {
                if (null == e) return null;
                switch (e.type) {
                    case o.I5.TEXT_INPUT:
                    case o.I5.FILE_UPLOAD:
                    case o.I5.RADIO_GROUP:
                    case o.I5.CHECKBOX_GROUP:
                    case o.I5.CHECKBOX:
                        return null;
                    case o.I5.STRING_SELECT:
                        return e;
                    case o.I5.USER_SELECT:
                    case o.I5.ROLE_SELECT:
                    case o.I5.MENTIONABLE_SELECT:
                    case o.I5.CHANNEL_SELECT:
                        let t = e.selectedOptions.map((e) => e.value);
                        return { type: e.type, values: t };
                    default:
                        return null;
                }
            })(T),
        },
    };
    await a.Bo.post({ url: f.Rsh.INTERACTIONS, body: S, timeout: 3e3, rejectWithError: (0, a.fT)() }, (e) => {
        m(g, e, h, I, p);
    });
}
function m(e, t, n, i, r) {
    if (!t.ok) {
        if (!t.hasErr)
            if (!(t.status >= 400) || !(t.status < 500) || !t.body) return void (0, _.C1)(e, t.body?.code);
            else if (t.body.code === f.t02.INVALID_FORM_BODY && t.body.errors) {
                let a = (function e(t, n) {
                    let i = t[h];
                    if (null != i && Array.isArray(i)) return i[0];
                    for (let [i, r] of Object.entries(t))
                        if (i !== h && null != r && "object" == typeof r) return e(r, n ?? i);
                    return null;
                })(t.body.errors, void 0);
                (null != a &&
                    ("INTERACTION_APPLICATION_COMMAND_INVALID_VERSION" === a.code ||
                        "INTERACTION_APPLICATION_COMMAND_INVALID" === a.code) &&
                    s.h.dispatch({
                        type: "APPLICATION_COMMAND_EXECUTE_BAD_VERSION",
                        applicationId: n,
                        channelId: i,
                        guildId: r ?? null,
                    }),
                    (0, _.C1)(e, void 0, a?.message));
                return;
            } else
                return t.body.code !== f.t02.UNKNOWN_INTEGRATION
                    ? void (0, _.C1)(e, t.body.code, t.body.message, t.status)
                    : (s.h.dispatch({
                          type: "APPLICATION_COMMAND_EXECUTE_BAD_VERSION",
                          applicationId: n,
                          channelId: i,
                          guildId: r ?? null,
                      }),
                      (0, _.C1)(e, void 0, t.body.message),
                      void 0);
        (0, _.C1)(e);
    }
}
var g =
    (((i = {})[(i.SENDING = 0)] = "SENDING"),
    (i[(i.CREATED = 1)] = "CREATED"),
    (i[(i.FAILED = 2)] = "FAILED"),
    (i[(i.TIMED_OUT = 3)] = "TIMED_OUT"),
    (i[(i.EPHEMERAL_SUCCESS = 4)] = "EPHEMERAL_SUCCESS"),
    i);
function S(e, t) {
    var n;
    let i = t?.state,
        a = e.state === f.cmJ.SENT && p(e.id) < Date.now(),
        s =
            e.state === f.cmJ.SEND_FAILED &&
            (null == (n = e.id) || "" === n || Number.isNaN(n) ? Date.now() : u.default.extractTimestamp(n) + 3e3) <
                Date.now(),
        l = t?.data.interactionType === r.G.APPLICATION_COMMAND,
        o = e.isCommandType();
    if ((l && i === A.m.QUEUED) || (o && e.state === f.cmJ.SENDING && null != t)) return 0;
    if ((l && i === A.m.CREATED) || (e.hasFlag(f.pr7.LOADING) && !a)) return 1;
    if (null != e.interaction && e.hasFlag(f.pr7.LOADING) && a) return 3;
    if (null != e.interaction && !e.hasFlag(f.pr7.LOADING) && s) return 3;
    if (o && e.state === f.cmJ.SEND_FAILED) return 2;
    else if (null != e.interaction && e.hasFlag(f.pr7.EPHEMERAL)) return 4;
}
function N(e) {
    let t = e.options;
    for (; t?.length === 1 && (t[0].type === o.n4.SUB_COMMAND_GROUP || t[0].type === o.n4.SUB_COMMAND);)
        t = t[0].options;
    for (let e of t ?? []) if (e.type === o.n4.ATTACHMENT) return !1;
    return !0;
}
