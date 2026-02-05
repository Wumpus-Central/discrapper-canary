"use strict";
n.d(t, { Bl: () => b, Gv: () => I, I5: () => E, fK: () => C, h0: () => v, sW: () => N, wy: () => S });
var r = n(562465),
    i = n(73153),
    a = n(843472),
    s = n(155718),
    o = n(587895),
    l = n(113267),
    u = n(867455),
    c = n(961350),
    d = n(661191),
    _ = n(706727),
    f = n(436283),
    p = n(337591),
    h = n(616716),
    m = n(652215),
    g = n(985018);
function E(e) {
    return null == e || "" === e || Number.isNaN(e) ? Date.now() : d.default.extractTimestamp(e) + 9e5;
}
function A(e) {
    return null == e || "" === e || Number.isNaN(e) ? Date.now() : d.default.extractTimestamp(e) + 3e3;
}
let I = async (e) => {
    let {
            componentType: t,
            messageId: n,
            messageFlags: i,
            customId: a,
            componentId: o,
            applicationId: l,
            channelId: p,
            guildId: h,
            localState: g,
        } = e,
        E = d.default.fromTimestamp(Date.now());
    if (!f.Ay.canQueueInteraction(n, E)) return;
    await u.A.unarchiveThreadIfNecessary(p),
        (0, _.tU)(E, {
            messageId: n,
            data: { interactionType: s.G4.MESSAGE_COMPONENT, applicationId: l, customId: a, componentId: o },
            onFailure: (e, t) => y(p, e, t),
        }),
        null != g && (0, _.Sw)(n, E, g, o);
    let A = {
        type: s.G4.MESSAGE_COMPONENT,
        nonce: E,
        guild_id: h,
        channel_id: p,
        message_flags: i,
        message_id: n,
        application_id: l,
        session_id: c.default.getSessionId(),
        data: { component_type: t, custom_id: a, ...T(g) },
    };
    await r.Bo.post({ url: m.Rsh.INTERACTIONS, body: A, timeout: 3e3, rejectWithError: !1 }, (e) => {
        S(E, e, l, p, h);
    });
};
function T(e) {
    if (null == e) return null;
    switch (e.type) {
        case s.I5.TEXT_INPUT:
        case s.I5.FILE_UPLOAD:
        case s.I5.RADIO_GROUP:
        case s.I5.CHECKBOX_GROUP:
        case s.I5.CHECKBOX:
            return null;
        case s.I5.STRING_SELECT:
            return e;
        case s.I5.USER_SELECT:
        case s.I5.ROLE_SELECT:
        case s.I5.MENTIONABLE_SELECT:
        case s.I5.CHANNEL_SELECT:
            let t = e.selectedOptions.map((e) => e.value);
            return { type: e.type, values: t };
        default:
            return null;
    }
}
let y = (e, t, n) => {
        null == n && null != t && a.A.sendClydeError(e, t);
    },
    S = (e, t, n, r, a) => {
        if (!t.ok) {
            if (!t.hasErr)
                if (!(t.status >= 400) || !(t.status < 500) || !t.body) return void (0, _.C1)(e, t.body?.code);
                else if (t.body.code === m.t02.INVALID_FORM_BODY && t.body.errors) {
                    let s = (0, h.W)(t.body.errors);
                    null != s &&
                        ("INTERACTION_APPLICATION_COMMAND_INVALID_VERSION" === s.code ||
                            "INTERACTION_APPLICATION_COMMAND_INVALID" === s.code) &&
                        i.h.dispatch({
                            type: "APPLICATION_COMMAND_EXECUTE_BAD_VERSION",
                            applicationId: n,
                            channelId: r,
                            guildId: a ?? null,
                        }),
                        (0, _.C1)(e, void 0, s?.message);
                    return;
                } else
                    return t.body.code !== m.t02.UNKNOWN_INTEGRATION
                        ? void (0, _.C1)(e, t.body.code, t.body.message, t.status)
                        : (i.h.dispatch({
                              type: "APPLICATION_COMMAND_EXECUTE_BAD_VERSION",
                              applicationId: n,
                              channelId: r,
                              guildId: a ?? null,
                          }),
                          (0, _.C1)(e, void 0, t.body.message),
                          void 0);
            (0, _.C1)(e);
        }
    };
var v = (function (e) {
    return (
        (e[(e.SENDING = 0)] = "SENDING"),
        (e[(e.CREATED = 1)] = "CREATED"),
        (e[(e.FAILED = 2)] = "FAILED"),
        (e[(e.TIMED_OUT = 3)] = "TIMED_OUT"),
        (e[(e.EPHEMERAL_SUCCESS = 4)] = "EPHEMERAL_SUCCESS"),
        e
    );
})({});
let C = (e, t) => {
    let n = t?.state,
        r = e.state === m.cmJ.SENT && E(e.id) < Date.now(),
        i = e.state === m.cmJ.SEND_FAILED && A(e.id) < Date.now(),
        a = t?.data.interactionType === s.G4.APPLICATION_COMMAND,
        o = e.isCommandType();
    if ((a && n === p.m.QUEUED) || (o && e.state === m.cmJ.SENDING && null != t)) return 0;
    if ((a && n === p.m.CREATED) || (e.hasFlag(m.pr7.LOADING) && !r)) return 1;
    if (null != e.interaction && e.hasFlag(m.pr7.LOADING) && r) return 3;
    if (null != e.interaction && !e.hasFlag(m.pr7.LOADING) && i) return 3;
    if (o && e.state === m.cmJ.SEND_FAILED) return 2;
    else if (null != e.interaction && e.hasFlag(m.pr7.EPHEMERAL)) return 4;
};
function b(e) {
    let t = e.options;
    for (; t?.length === 1 && (t[0].type === s.n4.SUB_COMMAND_GROUP || t[0].type === s.n4.SUB_COMMAND); )
        t = t[0].options;
    for (let e of t ?? []) if (e.type === s.n4.ATTACHMENT) return !1;
    return !0;
}
function N(e, t) {
    switch (e) {
        case l.A.ReasonCodes.TIMEOUT:
            let n = o.A.getApplication(t);
            if (null != n) return g.intl.formatToPlainString(g.t.u2D2Uj, { applicationName: n.name });
            return g.intl.string(g.t["vGU8+r"]);
        case l.A.ReasonCodes.ACTIVITY_LAUNCH_NOT_IN_EXPERIMENT:
            return g.intl.string(g.t.GyzcrS);
        case l.A.ReasonCodes.ACTIVITY_LAUNCH_INVALID_USER_VERIFICATION_LEVEL:
        case l.A.ReasonCodes.ACTIVITY_LAUNCH_INVALID_USER_PERMISSIONS:
            return g.intl.string(g.t.hHGrWz);
        case l.A.ReasonCodes.ACTIVITY_LAUNCH_UNKNOWN_CHANNEL:
        case l.A.ReasonCodes.ACTIVITY_LAUNCH_UNKNOWN_GUILD:
        case l.A.ReasonCodes.ACTIVITY_LAUNCH_INVALID_CHANNEL_TYPE:
        case l.A.ReasonCodes.ACTIVITY_LAUNCH_INVALID_CHANNEL_NO_AFK:
            return g.intl.string(g.t.j29zCr);
        case l.A.ReasonCodes.ACTIVITY_LAUNCH_INVALID_USER_AGE_GATE:
            return g.intl.string(g.t["4WuFRE"]);
        case l.A.ReasonCodes.ACTIVITY_LAUNCH_INVALID_DEV_PREVIEW_GUILD_SIZE:
            return g.intl.string(g.t.RvkXdb);
        case l.A.ReasonCodes.ACTIVITY_LAUNCH_INVALID_CONFIGURATION_PLATFORM_NOT_SUPPORTED:
        case l.A.ReasonCodes.ACTIVITY_LAUNCH_INVALID_CONFIGURATION_PLATFORM_NOT_RELEASED:
            return g.intl.string(g.t.uGDCcw);
        case l.A.ReasonCodes.ACTIVITY_LAUNCH_INVALID_USER_NO_ACCESS_TO_ACTIVITY:
            return g.intl.string(g.t.WjNAAA);
        case l.A.ReasonCodes.ACTIVITY_LAUNCH_INVALID_LOCATION_TYPE:
            return g.intl.string(g.t.PtobXW);
        case l.A.ReasonCodes.ACTIVITY_LAUNCH_INVALID_USER_REGION_FOR_APPLICATION:
            return g.intl.string(g.t.PrHIM5);
    }
}
