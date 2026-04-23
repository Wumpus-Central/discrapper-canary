n.d(t, { Bl: () => L, Gv: () => R, I5: () => O, fK: () => m, h0: () => p, sW: () => D, wy: () => C });
var i,
    r = n(636537),
    a = n(228366),
    s = n(720149),
    _ = n(155718),
    l = n(587895),
    o = n(113267),
    E = n(867455),
    d = n(495544),
    c = n(935208),
    u = n(706727),
    I = n(436283),
    A = n(337591),
    T = n(616716),
    S = n(652215),
    N = n(985018);
function O(e) {
    return null == e || "" === e || Number.isNaN(e) ? Date.now() : c.default.extractTimestamp(e) + 9e5;
}
let R = async (e) => {
        let {
                componentType: t,
                messageId: n,
                messageFlags: i,
                customId: a,
                componentId: s,
                applicationId: l,
                channelId: o,
                guildId: A,
                localState: T,
            } = e,
            N = c.default.fromTimestamp(Date.now());
        if (!I.Ay.canQueueInteraction(n, N)) return;
        await E.A.unarchiveThreadIfNecessary(o),
            (0, u.tU)(N, {
                messageId: n,
                data: { interactionType: _.G4.MESSAGE_COMPONENT, applicationId: l, customId: a, componentId: s },
                onFailure: (e, t) => f(o, e, t),
            }),
            null != T && (0, u.Sw)(n, N, T, s);
        let O = {
            type: _.G4.MESSAGE_COMPONENT,
            nonce: N,
            guild_id: A,
            channel_id: o,
            message_flags: i,
            message_id: n,
            application_id: l,
            session_id: d.default.getSessionId(),
            data: {
                component_type: t,
                custom_id: a,
                ...(function (e) {
                    if (null == e) return null;
                    switch (e.type) {
                        case _.I5.TEXT_INPUT:
                        case _.I5.FILE_UPLOAD:
                        case _.I5.RADIO_GROUP:
                        case _.I5.CHECKBOX_GROUP:
                        case _.I5.CHECKBOX:
                            return null;
                        case _.I5.STRING_SELECT:
                            return e;
                        case _.I5.USER_SELECT:
                        case _.I5.ROLE_SELECT:
                        case _.I5.MENTIONABLE_SELECT:
                        case _.I5.CHANNEL_SELECT:
                            let t = e.selectedOptions.map((e) => e.value);
                            return { type: e.type, values: t };
                        default:
                            return null;
                    }
                })(T),
            },
        };
        await r.Bo.post({ url: S.Rsh.INTERACTIONS, body: O, timeout: 3e3, rejectWithError: !1 }, (e) => {
            C(N, e, l, o, A);
        });
    },
    f = (e, t, n) => {
        null == n && null != t && s.A.sendClydeError(e, t);
    },
    C = (e, t, n, i, r) => {
        if (!t.ok) {
            if (!t.hasErr)
                if (!(t.status >= 400) || !(t.status < 500) || !t.body) return void (0, u.C1)(e, t.body?.code);
                else if (t.body.code === S.t02.INVALID_FORM_BODY && t.body.errors) {
                    let s = (0, T.W)(t.body.errors);
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
                    return t.body.code !== S.t02.UNKNOWN_INTEGRATION
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
    };
var p =
    (((i = {})[(i.SENDING = 0)] = "SENDING"),
    (i[(i.CREATED = 1)] = "CREATED"),
    (i[(i.FAILED = 2)] = "FAILED"),
    (i[(i.TIMED_OUT = 3)] = "TIMED_OUT"),
    (i[(i.EPHEMERAL_SUCCESS = 4)] = "EPHEMERAL_SUCCESS"),
    i);
let m = (e, t) => {
    var n;
    let i = t?.state,
        r = e.state === S.cmJ.SENT && O(e.id) < Date.now(),
        a =
            e.state === S.cmJ.SEND_FAILED &&
            (null == (n = e.id) || "" === n || Number.isNaN(n) ? Date.now() : c.default.extractTimestamp(n) + 3e3) <
                Date.now(),
        s = t?.data.interactionType === _.G4.APPLICATION_COMMAND,
        l = e.isCommandType();
    if ((s && i === A.m.QUEUED) || (l && e.state === S.cmJ.SENDING && null != t)) return 0;
    if ((s && i === A.m.CREATED) || (e.hasFlag(S.pr7.LOADING) && !r)) return 1;
    if (null != e.interaction && e.hasFlag(S.pr7.LOADING) && r) return 3;
    if (null != e.interaction && !e.hasFlag(S.pr7.LOADING) && a) return 3;
    if (l && e.state === S.cmJ.SEND_FAILED) return 2;
    else if (null != e.interaction && e.hasFlag(S.pr7.EPHEMERAL)) return 4;
};
function L(e) {
    let t = e.options;
    for (; t?.length === 1 && (t[0].type === _.n4.SUB_COMMAND_GROUP || t[0].type === _.n4.SUB_COMMAND); )
        t = t[0].options;
    for (let e of t ?? []) if (e.type === _.n4.ATTACHMENT) return !1;
    return !0;
}
function D(e, t) {
    switch (e) {
        case o.A.ReasonCodes.TIMEOUT:
            let n = l.A.getApplication(t);
            if (null != n) return N.intl.formatToPlainString(N.t.u2D2Uj, { applicationName: n.name });
            return N.intl.string(N.t["vGU8+r"]);
        case o.A.ReasonCodes.ACTIVITY_LAUNCH_NOT_IN_EXPERIMENT:
            return N.intl.string(N.t.GyzcrS);
        case o.A.ReasonCodes.ACTIVITY_LAUNCH_INVALID_USER_VERIFICATION_LEVEL:
        case o.A.ReasonCodes.ACTIVITY_LAUNCH_INVALID_USER_PERMISSIONS:
            return N.intl.string(N.t.hHGrWz);
        case o.A.ReasonCodes.ACTIVITY_LAUNCH_UNKNOWN_CHANNEL:
        case o.A.ReasonCodes.ACTIVITY_LAUNCH_UNKNOWN_GUILD:
        case o.A.ReasonCodes.ACTIVITY_LAUNCH_INVALID_CHANNEL_TYPE:
        case o.A.ReasonCodes.ACTIVITY_LAUNCH_INVALID_CHANNEL_NO_AFK:
            return N.intl.string(N.t.j29zCr);
        case o.A.ReasonCodes.ACTIVITY_LAUNCH_INVALID_USER_AGE_GATE:
            return N.intl.string(N.t["4WuFRE"]);
        case o.A.ReasonCodes.ACTIVITY_LAUNCH_INVALID_DEV_PREVIEW_GUILD_SIZE:
            return N.intl.string(N.t.RvkXdb);
        case o.A.ReasonCodes.ACTIVITY_LAUNCH_INVALID_CONFIGURATION_PLATFORM_NOT_SUPPORTED:
        case o.A.ReasonCodes.ACTIVITY_LAUNCH_INVALID_CONFIGURATION_PLATFORM_NOT_RELEASED:
            return N.intl.string(N.t.uGDCcw);
        case o.A.ReasonCodes.ACTIVITY_LAUNCH_INVALID_USER_NO_ACCESS_TO_ACTIVITY:
            return N.intl.string(N.t.WjNAAA);
        case o.A.ReasonCodes.ACTIVITY_LAUNCH_INVALID_LOCATION_TYPE:
            return N.intl.string(N.t.PtobXW);
        case o.A.ReasonCodes.ACTIVITY_LAUNCH_INVALID_USER_REGION_FOR_APPLICATION:
            return N.intl.string(N.t.PrHIM5);
    }
}
