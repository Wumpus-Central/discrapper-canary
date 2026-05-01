n.d(t, { Bl: () => R, Gv: () => f, I5: () => N, fK: () => C, h0: () => O, sW: () => g, wy: () => m });
var i,
    a = n(636537),
    r = n(228366),
    s = n(720149),
    l = n(155718),
    o = n(587895),
    d = n(113267),
    c = n(867455),
    _ = n(495544),
    E = n(935208),
    u = n(706727),
    A = n(436283),
    I = n(337591),
    T = n(616716),
    h = n(652215),
    S = n(985018);
function N(e) {
    return null == e || "" === e || Number.isNaN(e) ? Date.now() : E.default.extractTimestamp(e) + 9e5;
}
let f = async (e) => {
        let {
                componentType: t,
                messageId: n,
                messageFlags: i,
                customId: r,
                componentId: s,
                applicationId: o,
                channelId: d,
                guildId: I,
                localState: T,
            } = e,
            S = E.default.fromTimestamp(Date.now());
        if (!A.Ay.canQueueInteraction(n, S)) return;
        await c.A.unarchiveThreadIfNecessary(d),
            (0, u.tU)(S, {
                messageId: n,
                data: { interactionType: l.G4.MESSAGE_COMPONENT, applicationId: o, customId: r, componentId: s },
                onFailure: (e, t) => p(d, e, t),
            }),
            null != T && (0, u.Sw)(n, S, T, s);
        let N = {
            type: l.G4.MESSAGE_COMPONENT,
            nonce: S,
            guild_id: I,
            channel_id: d,
            message_flags: i,
            message_id: n,
            application_id: o,
            session_id: _.default.getSessionId(),
            data: {
                component_type: t,
                custom_id: r,
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
                })(T),
            },
        };
        await a.Bo.post({ url: h.Rsh.INTERACTIONS, body: N, timeout: 3e3, rejectWithError: !1 }, (e) => {
            m(S, e, o, d, I);
        });
    },
    p = (e, t, n) => {
        null == n && null != t && s.A.sendClydeError(e, t);
    },
    m = (e, t, n, i, a) => {
        if (!t.ok) {
            if (!t.hasErr)
                if (!(t.status >= 400) || !(t.status < 500) || !t.body) return void (0, u.C1)(e, t.body?.code);
                else if (t.body.code === h.t02.INVALID_FORM_BODY && t.body.errors) {
                    let s = (0, T.W)(t.body.errors);
                    null != s &&
                        ("INTERACTION_APPLICATION_COMMAND_INVALID_VERSION" === s.code ||
                            "INTERACTION_APPLICATION_COMMAND_INVALID" === s.code) &&
                        r.h.dispatch({
                            type: "APPLICATION_COMMAND_EXECUTE_BAD_VERSION",
                            applicationId: n,
                            channelId: i,
                            guildId: a ?? null,
                        }),
                        (0, u.C1)(e, void 0, s?.message);
                    return;
                } else
                    return t.body.code !== h.t02.UNKNOWN_INTEGRATION
                        ? void (0, u.C1)(e, t.body.code, t.body.message, t.status)
                        : (r.h.dispatch({
                              type: "APPLICATION_COMMAND_EXECUTE_BAD_VERSION",
                              applicationId: n,
                              channelId: i,
                              guildId: a ?? null,
                          }),
                          (0, u.C1)(e, void 0, t.body.message),
                          void 0);
            (0, u.C1)(e);
        }
    };
var O =
    (((i = {})[(i.SENDING = 0)] = "SENDING"),
    (i[(i.CREATED = 1)] = "CREATED"),
    (i[(i.FAILED = 2)] = "FAILED"),
    (i[(i.TIMED_OUT = 3)] = "TIMED_OUT"),
    (i[(i.EPHEMERAL_SUCCESS = 4)] = "EPHEMERAL_SUCCESS"),
    i);
let C = (e, t) => {
    var n;
    let i = t?.state,
        a = e.state === h.cmJ.SENT && N(e.id) < Date.now(),
        r =
            e.state === h.cmJ.SEND_FAILED &&
            (null == (n = e.id) || "" === n || Number.isNaN(n) ? Date.now() : E.default.extractTimestamp(n) + 3e3) <
                Date.now(),
        s = t?.data.interactionType === l.G4.APPLICATION_COMMAND,
        o = e.isCommandType();
    if ((s && i === I.m.QUEUED) || (o && e.state === h.cmJ.SENDING && null != t)) return 0;
    if ((s && i === I.m.CREATED) || (e.hasFlag(h.pr7.LOADING) && !a)) return 1;
    if (null != e.interaction && e.hasFlag(h.pr7.LOADING) && a) return 3;
    if (null != e.interaction && !e.hasFlag(h.pr7.LOADING) && r) return 3;
    if (o && e.state === h.cmJ.SEND_FAILED) return 2;
    else if (null != e.interaction && e.hasFlag(h.pr7.EPHEMERAL)) return 4;
};
function R(e) {
    let t = e.options;
    for (; t?.length === 1 && (t[0].type === l.n4.SUB_COMMAND_GROUP || t[0].type === l.n4.SUB_COMMAND); )
        t = t[0].options;
    for (let e of t ?? []) if (e.type === l.n4.ATTACHMENT) return !1;
    return !0;
}
function g(e, t) {
    switch (e) {
        case d.A.ReasonCodes.TIMEOUT:
            let n = o.A.getApplication(t);
            if (null != n) return S.intl.formatToPlainString(S.t.u2D2Uj, { applicationName: n.name });
            return S.intl.string(S.t["vGU8+r"]);
        case d.A.ReasonCodes.ACTIVITY_LAUNCH_NOT_IN_EXPERIMENT:
            return S.intl.string(S.t.GyzcrS);
        case d.A.ReasonCodes.ACTIVITY_LAUNCH_INVALID_USER_VERIFICATION_LEVEL:
        case d.A.ReasonCodes.ACTIVITY_LAUNCH_INVALID_USER_PERMISSIONS:
            return S.intl.string(S.t.hHGrWz);
        case d.A.ReasonCodes.ACTIVITY_LAUNCH_UNKNOWN_CHANNEL:
        case d.A.ReasonCodes.ACTIVITY_LAUNCH_UNKNOWN_GUILD:
        case d.A.ReasonCodes.ACTIVITY_LAUNCH_INVALID_CHANNEL_TYPE:
        case d.A.ReasonCodes.ACTIVITY_LAUNCH_INVALID_CHANNEL_NO_AFK:
            return S.intl.string(S.t.j29zCr);
        case d.A.ReasonCodes.ACTIVITY_LAUNCH_INVALID_USER_AGE_GATE:
            return S.intl.string(S.t["4WuFRE"]);
        case d.A.ReasonCodes.ACTIVITY_LAUNCH_INVALID_DEV_PREVIEW_GUILD_SIZE:
            return S.intl.string(S.t.RvkXdb);
        case d.A.ReasonCodes.ACTIVITY_LAUNCH_INVALID_CONFIGURATION_PLATFORM_NOT_SUPPORTED:
        case d.A.ReasonCodes.ACTIVITY_LAUNCH_INVALID_CONFIGURATION_PLATFORM_NOT_RELEASED:
            return S.intl.string(S.t.uGDCcw);
        case d.A.ReasonCodes.ACTIVITY_LAUNCH_INVALID_USER_NO_ACCESS_TO_ACTIVITY:
            return S.intl.string(S.t.WjNAAA);
        case d.A.ReasonCodes.ACTIVITY_LAUNCH_INVALID_LOCATION_TYPE:
            return S.intl.string(S.t.PtobXW);
        case d.A.ReasonCodes.ACTIVITY_LAUNCH_INVALID_USER_REGION_FOR_APPLICATION:
            return S.intl.string(S.t.PrHIM5);
    }
}
