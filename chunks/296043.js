"use strict";
n.d(t, { Bl: () => O, Gv: () => I, I5: () => A, fK: () => N, h0: () => y, sW: () => R, wy: () => S });
var r,
    i = n(562465),
    s = n(73153),
    a = n(843472),
    o = n(155718),
    l = n(587895),
    u = n(113267),
    d = n(867455),
    c = n(961350),
    _ = n(661191),
    f = n(706727),
    E = n(436283),
    h = n(337591),
    p = n(616716),
    m = n(652215),
    g = n(985018);
function A(e) {
    return null == e || "" === e || Number.isNaN(e) ? Date.now() : _.default.extractTimestamp(e) + 9e5;
}
let I = async (e) => {
        let {
                componentType: t,
                messageId: n,
                messageFlags: r,
                customId: s,
                componentId: a,
                applicationId: l,
                channelId: u,
                guildId: h,
                localState: p,
            } = e,
            g = _.default.fromTimestamp(Date.now());
        if (!E.Ay.canQueueInteraction(n, g)) return;
        await d.A.unarchiveThreadIfNecessary(u),
            (0, f.tU)(g, {
                messageId: n,
                data: { interactionType: o.G4.MESSAGE_COMPONENT, applicationId: l, customId: s, componentId: a },
                onFailure: (e, t) => T(u, e, t),
            }),
            null != p && (0, f.Sw)(n, g, p, a);
        let A = {
            type: o.G4.MESSAGE_COMPONENT,
            nonce: g,
            guild_id: h,
            channel_id: u,
            message_flags: r,
            message_id: n,
            application_id: l,
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
                })(p),
            },
        };
        await i.Bo.post({ url: m.Rsh.INTERACTIONS, body: A, timeout: 3e3, rejectWithError: !1 }, (e) => {
            S(g, e, l, u, h);
        });
    },
    T = (e, t, n) => {
        null == n && null != t && a.A.sendClydeError(e, t);
    },
    S = (e, t, n, r, i) => {
        if (!t.ok) {
            if (!t.hasErr)
                if (!(t.status >= 400) || !(t.status < 500) || !t.body) return void (0, f.C1)(e, t.body?.code);
                else if (t.body.code === m.t02.INVALID_FORM_BODY && t.body.errors) {
                    let a = (0, p.W)(t.body.errors);
                    null != a &&
                        ("INTERACTION_APPLICATION_COMMAND_INVALID_VERSION" === a.code ||
                            "INTERACTION_APPLICATION_COMMAND_INVALID" === a.code) &&
                        s.h.dispatch({
                            type: "APPLICATION_COMMAND_EXECUTE_BAD_VERSION",
                            applicationId: n,
                            channelId: r,
                            guildId: i ?? null,
                        }),
                        (0, f.C1)(e, void 0, a?.message);
                    return;
                } else
                    return t.body.code !== m.t02.UNKNOWN_INTEGRATION
                        ? void (0, f.C1)(e, t.body.code, t.body.message, t.status)
                        : (s.h.dispatch({
                              type: "APPLICATION_COMMAND_EXECUTE_BAD_VERSION",
                              applicationId: n,
                              channelId: r,
                              guildId: i ?? null,
                          }),
                          (0, f.C1)(e, void 0, t.body.message),
                          void 0);
            (0, f.C1)(e);
        }
    };
var y =
    (((r = {})[(r.SENDING = 0)] = "SENDING"),
    (r[(r.CREATED = 1)] = "CREATED"),
    (r[(r.FAILED = 2)] = "FAILED"),
    (r[(r.TIMED_OUT = 3)] = "TIMED_OUT"),
    (r[(r.EPHEMERAL_SUCCESS = 4)] = "EPHEMERAL_SUCCESS"),
    r);
let N = (e, t) => {
    var n;
    let r = t?.state,
        i = e.state === m.cmJ.SENT && A(e.id) < Date.now(),
        s =
            e.state === m.cmJ.SEND_FAILED &&
            (null == (n = e.id) || "" === n || Number.isNaN(n) ? Date.now() : _.default.extractTimestamp(n) + 3e3) <
                Date.now(),
        a = t?.data.interactionType === o.G4.APPLICATION_COMMAND,
        l = e.isCommandType();
    if ((a && r === h.m.QUEUED) || (l && e.state === m.cmJ.SENDING && null != t)) return 0;
    if ((a && r === h.m.CREATED) || (e.hasFlag(m.pr7.LOADING) && !i)) return 1;
    if (null != e.interaction && e.hasFlag(m.pr7.LOADING) && i) return 3;
    if (null != e.interaction && !e.hasFlag(m.pr7.LOADING) && s) return 3;
    if (l && e.state === m.cmJ.SEND_FAILED) return 2;
    else if (null != e.interaction && e.hasFlag(m.pr7.EPHEMERAL)) return 4;
};
function O(e) {
    let t = e.options;
    for (; t?.length === 1 && (t[0].type === o.n4.SUB_COMMAND_GROUP || t[0].type === o.n4.SUB_COMMAND); )
        t = t[0].options;
    for (let e of t ?? []) if (e.type === o.n4.ATTACHMENT) return !1;
    return !0;
}
function R(e, t) {
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
