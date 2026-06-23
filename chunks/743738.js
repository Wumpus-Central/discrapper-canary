"use strict";
n.d(t, { fK: () => y, I5: () => A, Gv: () => I, wy: () => T, sW: () => N, h0: () => S, Bl: () => C });
var i,
    r = n(636537),
    s = n(228366),
    a = n(493336),
    o = n(155718),
    l = n(587895),
    u = n(113267),
    c = n(867455),
    d = n(495544),
    _ = n(935208),
    h = n(706727),
    f = n(436283),
    p = n(337591);
let E = "_errors";
var m = n(652215),
    g = n(375708);
function A(e) {
    return null == e || "" === e || Number.isNaN(e) ? Date.now() : _.default.extractTimestamp(e) + 9e5;
}
async function I(e) {
    let {
            componentType: t,
            messageId: n,
            messageFlags: i,
            customId: s,
            componentId: l,
            applicationId: u,
            channelId: p,
            guildId: E,
            localState: g,
        } = e,
        A = _.default.fromTimestamp(Date.now());
    if (!f.Ay.canQueueInteraction(n, A)) return;
    await c.A.unarchiveThreadIfNecessary(p),
        (0, h.tU)(A, {
            messageId: n,
            data: { interactionType: o.G4.MESSAGE_COMPONENT, applicationId: u, customId: s, componentId: l },
            onFailure: (e, t) => {
                var n, i;
                return (n = p), (i = e), void (null == t && null != i && a.A.sendClydeError(n, i));
            },
        }),
        null != g && (0, h.Sw)(n, A, g, l);
    let I = {
        type: o.G4.MESSAGE_COMPONENT,
        nonce: A,
        guild_id: E,
        channel_id: p,
        message_flags: i,
        message_id: n,
        application_id: u,
        session_id: d.default.getSessionId(),
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
            })(g),
        },
    };
    await r.Bo.post({ url: m.Rsh.INTERACTIONS, body: I, timeout: 3e3, rejectWithError: !1 }, (e) => {
        T(A, e, u, p, E);
    });
}
function T(e, t, n, i, r) {
    if (!t.ok) {
        if (!t.hasErr)
            if (!(t.status >= 400) || !(t.status < 500) || !t.body) return void (0, h.C1)(e, t.body?.code);
            else if (t.body.code === m.t02.INVALID_FORM_BODY && t.body.errors) {
                let a = (function e(t, n) {
                    let i = t[E];
                    if (null != i && Array.isArray(i)) return i[0];
                    for (let [i, r] of Object.entries(t))
                        if (i !== E && null != r && "object" == typeof r) return e(r, n ?? i);
                    return null;
                })(t.body.errors, void 0);
                null != a &&
                    ("INTERACTION_APPLICATION_COMMAND_INVALID_VERSION" === a.code ||
                        "INTERACTION_APPLICATION_COMMAND_INVALID" === a.code) &&
                    s.h.dispatch({
                        type: "APPLICATION_COMMAND_EXECUTE_BAD_VERSION",
                        applicationId: n,
                        channelId: i,
                        guildId: r ?? null,
                    }),
                    (0, h.C1)(e, void 0, a?.message);
                return;
            } else
                return t.body.code !== m.t02.UNKNOWN_INTEGRATION
                    ? void (0, h.C1)(e, t.body.code, t.body.message, t.status)
                    : (s.h.dispatch({
                          type: "APPLICATION_COMMAND_EXECUTE_BAD_VERSION",
                          applicationId: n,
                          channelId: i,
                          guildId: r ?? null,
                      }),
                      (0, h.C1)(e, void 0, t.body.message),
                      void 0);
        (0, h.C1)(e);
    }
}
var S =
    (((i = {})[(i.SENDING = 0)] = "SENDING"),
    (i[(i.CREATED = 1)] = "CREATED"),
    (i[(i.FAILED = 2)] = "FAILED"),
    (i[(i.TIMED_OUT = 3)] = "TIMED_OUT"),
    (i[(i.EPHEMERAL_SUCCESS = 4)] = "EPHEMERAL_SUCCESS"),
    i);
function y(e, t) {
    var n;
    let i = t?.state,
        r = e.state === m.cmJ.SENT && A(e.id) < Date.now(),
        s =
            e.state === m.cmJ.SEND_FAILED &&
            (null == (n = e.id) || "" === n || Number.isNaN(n) ? Date.now() : _.default.extractTimestamp(n) + 3e3) <
                Date.now(),
        a = t?.data.interactionType === o.G4.APPLICATION_COMMAND,
        l = e.isCommandType();
    if ((a && i === p.m.QUEUED) || (l && e.state === m.cmJ.SENDING && null != t)) return 0;
    if ((a && i === p.m.CREATED) || (e.hasFlag(m.pr7.LOADING) && !r)) return 1;
    if (null != e.interaction && e.hasFlag(m.pr7.LOADING) && r) return 3;
    if (null != e.interaction && !e.hasFlag(m.pr7.LOADING) && s) return 3;
    if (l && e.state === m.cmJ.SEND_FAILED) return 2;
    else if (null != e.interaction && e.hasFlag(m.pr7.EPHEMERAL)) return 4;
}
function C(e) {
    let t = e.options;
    for (; t?.length === 1 && (t[0].type === o.n4.SUB_COMMAND_GROUP || t[0].type === o.n4.SUB_COMMAND); )
        t = t[0].options;
    for (let e of t ?? []) if (e.type === o.n4.ATTACHMENT) return !1;
    return !0;
}
function N(e, t) {
    switch (e) {
        case u.A.ReasonCodes.TIMEOUT:
            let n = l.A.getApplication(t);
            if (null != n) return g.intl.formatToPlainString(g.t.u2D2Uj, { applicationName: n.name });
            return g.intl.string(g.t["vGU8+r"]);
        case u.A.ReasonCodes.ACTIVITY_LAUNCH_NOT_IN_EXPERIMENT:
            return g.intl.string(g.t.GyzcrS);
        case u.A.ReasonCodes.ACTIVITY_LAUNCH_INVALID_USER_VERIFICATION_LEVEL:
        case u.A.ReasonCodes.ACTIVITY_LAUNCH_INVALID_USER_PERMISSIONS:
            return g.intl.string(g.t.hHGrWz);
        case u.A.ReasonCodes.ACTIVITY_LAUNCH_UNKNOWN_CHANNEL:
        case u.A.ReasonCodes.ACTIVITY_LAUNCH_UNKNOWN_GUILD:
        case u.A.ReasonCodes.ACTIVITY_LAUNCH_INVALID_CHANNEL_TYPE:
        case u.A.ReasonCodes.ACTIVITY_LAUNCH_INVALID_CHANNEL_NO_AFK:
            return g.intl.string(g.t.j29zCr);
        case u.A.ReasonCodes.ACTIVITY_LAUNCH_INVALID_USER_AGE_GATE:
            return g.intl.string(g.t["4WuFRE"]);
        case u.A.ReasonCodes.ACTIVITY_LAUNCH_INVALID_DEV_PREVIEW_GUILD_SIZE:
            return g.intl.string(g.t.RvkXdb);
        case u.A.ReasonCodes.ACTIVITY_LAUNCH_INVALID_CONFIGURATION_PLATFORM_NOT_SUPPORTED:
        case u.A.ReasonCodes.ACTIVITY_LAUNCH_INVALID_CONFIGURATION_PLATFORM_NOT_RELEASED:
            return g.intl.string(g.t.uGDCcw);
        case u.A.ReasonCodes.ACTIVITY_LAUNCH_INVALID_USER_NO_ACCESS_TO_ACTIVITY:
            return g.intl.string(g.t.WjNAAA);
        case u.A.ReasonCodes.ACTIVITY_LAUNCH_INVALID_LOCATION_TYPE:
            return g.intl.string(g.t.PtobXW);
        case u.A.ReasonCodes.ACTIVITY_LAUNCH_INVALID_USER_REGION_FOR_APPLICATION:
            return g.intl.string(g.t.PrHIM5);
    }
}
