n.d(t, {
    $s: () => N,
    A0: () => C,
    Sg: () => b,
    ow: () => E,
    rQ: () => S,
    t$: () => A,
    tM: () => y
}),
    n(47120);
var i = n(544891),
    r = n(570140),
    a = n(904245),
    s = n(911969),
    o = n(812206),
    l = n(375824),
    u = n(346479),
    c = n(314897),
    d = n(709054),
    f = n(603721),
    _ = n(282397),
    p = n(622449),
    h = n(96989),
    m = n(981631),
    g = n(388032);
function E(e) {
    return null == e || '' === e || Number.isNaN(e) ? Date.now() : d.default.extractTimestamp(e) + 900000;
}
function v(e) {
    return null == e || '' === e || Number.isNaN(e) ? Date.now() : d.default.extractTimestamp(e) + 3000;
}
let y = async (e) => {
    let { componentType: t, messageId: n, messageFlags: r, customId: a, componentId: o, applicationId: l, channelId: p, guildId: h, localState: g } = e,
        E = d.default.fromTimestamp(Date.now());
    if (!_.ZP.canQueueInteraction(n, E)) return;
    await u.Z.unarchiveThreadIfNecessary(p),
        (0, f.kz)(E, {
            messageId: n,
            data: {
                interactionType: s.B8.MESSAGE_COMPONENT,
                applicationId: l,
                customId: a,
                componentId: o
            },
            onFailure: (e, t) => T(p, e, t)
        }),
        null != g && (0, f.B0)(n, E, g, o);
    let v = {
        type: s.B8.MESSAGE_COMPONENT,
        nonce: E,
        guild_id: h,
        channel_id: p,
        message_flags: r,
        message_id: n,
        application_id: l,
        session_id: c.default.getSessionId(),
        data: {
            component_type: t,
            custom_id: a,
            ...I(g)
        }
    };
    await i.tn.post(
        {
            url: m.ANM.INTERACTIONS,
            body: v,
            timeout: 3000,
            rejectWithError: !1
        },
        (e) => {
            b(E, e, l, p, h);
        }
    );
};
function I(e) {
    if (null == e) return null;
    if (e.type === s.re.STRING_SELECT || e.type === s.re.TEXT_INPUT) return e;
    let t = e.selectedOptions.map((e) => e.value);
    return {
        type: e.type,
        values: t
    };
}
let T = (e, t, n) => {
        null == n && null != t && a.Z.sendClydeError(e, t);
    },
    b = (e, t, n, i, a) => {
        if (!t.ok) {
            if (!t.hasErr) {
                var s;
                if (t.status >= 400 && t.status < 500 && t.body) {
                    if (t.body.code === m.evJ.INVALID_FORM_BODY && t.body.errors) {
                        let s = (0, h.e)(t.body.errors);
                        null != s &&
                            ('INTERACTION_APPLICATION_COMMAND_INVALID_VERSION' === s.code || 'INTERACTION_APPLICATION_COMMAND_INVALID' === s.code) &&
                            r.Z.dispatch({
                                type: 'APPLICATION_COMMAND_EXECUTE_BAD_VERSION',
                                applicationId: n,
                                channelId: i,
                                guildId: null != a ? a : null
                            }),
                            (0, f.yr)(e, void 0, null == s ? void 0 : s.message);
                        return;
                    }
                    (0, f.yr)(e, t.body.code, t.body.message, t.status);
                    return;
                }
                (0, f.yr)(e, null === (s = t.body) || void 0 === s ? void 0 : s.code);
                return;
            }
            (0, f.yr)(e);
        }
    };
var S = (function (e) {
    return (e[(e.SENDING = 0)] = 'SENDING'), (e[(e.CREATED = 1)] = 'CREATED'), (e[(e.FAILED = 2)] = 'FAILED'), (e[(e.TIMED_OUT = 3)] = 'TIMED_OUT'), (e[(e.EPHEMERAL_SUCCESS = 4)] = 'EPHEMERAL_SUCCESS'), e;
})({});
let A = (e, t) => {
    let n = null == t ? void 0 : t.state,
        i = e.state === m.yb.SENT && E(e.id) < Date.now(),
        r = e.state === m.yb.SEND_FAILED && v(e.id) < Date.now(),
        a = (null == t ? void 0 : t.data.interactionType) === s.B8.APPLICATION_COMMAND,
        o = e.isCommandType();
    if ((a && n === p.F.QUEUED) || (o && e.state === m.yb.SENDING && null != t)) return 0;
    if ((a && n === p.F.CREATED) || (e.hasFlag(m.iLy.LOADING) && !i)) return 1;
    if (null != e.interaction && e.hasFlag(m.iLy.LOADING) && i) return 3;
    if (null != e.interaction && !e.hasFlag(m.iLy.LOADING) && r) return 3;
    if (o && e.state === m.yb.SEND_FAILED) return 2;
    else if (null != e.interaction && e.hasFlag(m.iLy.EPHEMERAL)) return 4;
};
function N(e) {
    let t = e.options;
    for (; (null == t ? void 0 : t.length) === 1 && (t[0].type === s.jw.SUB_COMMAND_GROUP || t[0].type === s.jw.SUB_COMMAND); ) t = t[0].options;
    for (let e of null != t ? t : []) if (e.type === s.jw.ATTACHMENT) return !1;
    return !0;
}
function C(e, t) {
    switch (e) {
        case l.Z.ReasonCodes.TIMEOUT:
            let n = o.Z.getApplication(t);
            if (null != n) return g.intl.formatToPlainString(g.t.u2D2Ul, { applicationName: n.name });
            return g.intl.string(g.t['vGU8+v']);
        case l.Z.ReasonCodes.ACTIVITY_LAUNCH_NOT_IN_EXPERIMENT:
            return g.intl.string(g.t.Gyzcra);
        case l.Z.ReasonCodes.ACTIVITY_LAUNCH_INVALID_USER_VERIFICATION_LEVEL:
        case l.Z.ReasonCodes.ACTIVITY_LAUNCH_INVALID_USER_PERMISSIONS:
            return g.intl.string(g.t.hHGrW1);
        case l.Z.ReasonCodes.ACTIVITY_LAUNCH_UNKNOWN_CHANNEL:
        case l.Z.ReasonCodes.ACTIVITY_LAUNCH_UNKNOWN_GUILD:
        case l.Z.ReasonCodes.ACTIVITY_LAUNCH_INVALID_CHANNEL_TYPE:
        case l.Z.ReasonCodes.ACTIVITY_LAUNCH_INVALID_CHANNEL_NO_AFK:
            return g.intl.string(g.t.j29zCg);
        case l.Z.ReasonCodes.ACTIVITY_LAUNCH_INVALID_USER_AGE_GATE:
            return g.intl.string(g.t['4WuFRE']);
        case l.Z.ReasonCodes.ACTIVITY_LAUNCH_INVALID_DEV_PREVIEW_GUILD_SIZE:
            return g.intl.string(g.t.RvkXdX);
        case l.Z.ReasonCodes.ACTIVITY_LAUNCH_INVALID_CONFIGURATION_PLATFORM_NOT_SUPPORTED:
        case l.Z.ReasonCodes.ACTIVITY_LAUNCH_INVALID_CONFIGURATION_PLATFORM_NOT_RELEASED:
            return g.intl.string(g.t.uGDCc3);
        case l.Z.ReasonCodes.ACTIVITY_LAUNCH_INVALID_USER_NO_ACCESS_TO_ACTIVITY:
            return g.intl.string(g.t.WjNAAA);
        case l.Z.ReasonCodes.ACTIVITY_LAUNCH_INVALID_LOCATION_TYPE:
            return g.intl.string(g.t.PtobXV);
        case l.Z.ReasonCodes.ACTIVITY_LAUNCH_INVALID_USER_REGION_FOR_APPLICATION:
            return g.intl.string(g.t.PrHIMz);
    }
}
