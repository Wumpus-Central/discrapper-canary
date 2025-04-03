n.d(t, {
    $s: () => C,
    A0: () => R,
    Sg: () => T,
    ow: () => y,
    rQ: () => N,
    t$: () => A,
    tM: () => O
}),
    n(47120);
var r = n(544891),
    i = n(570140),
    o = n(904245),
    a = n(911969),
    s = n(812206),
    l = n(375824),
    c = n(346479),
    u = n(314897),
    d = n(709054),
    f = n(603721),
    _ = n(282397),
    p = n(622449),
    h = n(96989),
    m = n(981631),
    g = n(388032);
function E(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function b(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                E(e, t, n[t]);
            });
    }
    return e;
}
function y(e) {
    return null == e || '' === e || Number.isNaN(e) ? Date.now() : d.default.extractTimestamp(e) + 900000;
}
function v(e) {
    return null == e || '' === e || Number.isNaN(e) ? Date.now() : d.default.extractTimestamp(e) + 3000;
}
let O = async (e) => {
    let { componentType: t, messageId: n, messageFlags: i, customId: o, componentId: s, applicationId: l, channelId: p, guildId: h, localState: g } = e,
        E = d.default.fromTimestamp(Date.now());
    if (!_.ZP.canQueueInteraction(n, E)) return;
    await c.Z.unarchiveThreadIfNecessary(p),
        (0, f.kz)(E, {
            messageId: n,
            data: {
                interactionType: a.B8.MESSAGE_COMPONENT,
                applicationId: l,
                customId: o,
                componentId: s
            },
            onFailure: (e, t) => S(p, e, t)
        }),
        null != g && (0, f.B0)(n, E, g, s);
    let y = {
        type: a.B8.MESSAGE_COMPONENT,
        nonce: E,
        guild_id: h,
        channel_id: p,
        message_flags: i,
        message_id: n,
        application_id: l,
        session_id: u.default.getSessionId(),
        data: b(
            {
                component_type: t,
                custom_id: o
            },
            I(g)
        )
    };
    await r.tn.post(
        {
            url: m.ANM.INTERACTIONS,
            body: y,
            timeout: 3000,
            rejectWithError: !1
        },
        (e) => {
            T(E, e, l, p, h);
        }
    );
};
function I(e) {
    if (null == e) return null;
    if (e.type === a.re.STRING_SELECT || e.type === a.re.TEXT_INPUT) return e;
    let t = e.selectedOptions.map((e) => e.value);
    return {
        type: e.type,
        values: t
    };
}
let S = (e, t, n) => {
        null == n && null != t && o.Z.sendClydeError(e, t);
    },
    T = (e, t, n, r, o) => {
        if (!t.ok) {
            if (!t.hasErr)
                if (t.status >= 400 && t.status < 500 && t.body)
                    if (t.body.code !== m.evJ.INVALID_FORM_BODY || !t.body.errors) return void (0, f.yr)(e, t.body.code, t.body.message, t.status);
                    else {
                        let a = (0, h.e)(t.body.errors);
                        null != a &&
                            ('INTERACTION_APPLICATION_COMMAND_INVALID_VERSION' === a.code || 'INTERACTION_APPLICATION_COMMAND_INVALID' === a.code) &&
                            i.Z.dispatch({
                                type: 'APPLICATION_COMMAND_EXECUTE_BAD_VERSION',
                                applicationId: n,
                                channelId: r,
                                guildId: null != o ? o : null
                            }),
                            (0, f.yr)(e, void 0, null == a ? void 0 : a.message);
                        return;
                    }
                else {
                    var a;
                    (0, f.yr)(e, null == (a = t.body) ? void 0 : a.code);
                    return;
                }
            (0, f.yr)(e);
        }
    };
var N = (function (e) {
    return (e[(e.SENDING = 0)] = 'SENDING'), (e[(e.CREATED = 1)] = 'CREATED'), (e[(e.FAILED = 2)] = 'FAILED'), (e[(e.TIMED_OUT = 3)] = 'TIMED_OUT'), (e[(e.EPHEMERAL_SUCCESS = 4)] = 'EPHEMERAL_SUCCESS'), e;
})({});
let A = (e, t) => {
    let n = null == t ? void 0 : t.state,
        r = e.state === m.yb.SENT && y(e.id) < Date.now(),
        i = e.state === m.yb.SEND_FAILED && v(e.id) < Date.now(),
        o = (null == t ? void 0 : t.data.interactionType) === a.B8.APPLICATION_COMMAND,
        s = e.isCommandType();
    if ((o && n === p.F.QUEUED) || (s && e.state === m.yb.SENDING && null != t)) return 0;
    if ((o && n === p.F.CREATED) || (e.hasFlag(m.iLy.LOADING) && !r)) return 1;
    if (null != e.interaction && e.hasFlag(m.iLy.LOADING) && r) return 3;
    if (null != e.interaction && !e.hasFlag(m.iLy.LOADING) && i) return 3;
    if (s && e.state === m.yb.SEND_FAILED) return 2;
    else if (null != e.interaction && e.hasFlag(m.iLy.EPHEMERAL)) return 4;
};
function C(e) {
    let t = e.options;
    for (; (null == t ? void 0 : t.length) === 1 && (t[0].type === a.jw.SUB_COMMAND_GROUP || t[0].type === a.jw.SUB_COMMAND); ) t = t[0].options;
    for (let e of null != t ? t : []) if (e.type === a.jw.ATTACHMENT) return !1;
    return !0;
}
function R(e, t) {
    switch (e) {
        case l.Z.ReasonCodes.TIMEOUT:
            let n = s.Z.getApplication(t);
            if (null != n) return g.NW.formatToPlainString(g.t.u2D2Ul, { applicationName: n.name });
            return g.NW.string(g.t['vGU8+v']);
        case l.Z.ReasonCodes.ACTIVITY_LAUNCH_NOT_IN_EXPERIMENT:
            return g.NW.string(g.t.Gyzcra);
        case l.Z.ReasonCodes.ACTIVITY_LAUNCH_INVALID_USER_VERIFICATION_LEVEL:
        case l.Z.ReasonCodes.ACTIVITY_LAUNCH_INVALID_USER_PERMISSIONS:
            return g.NW.string(g.t.hHGrW1);
        case l.Z.ReasonCodes.ACTIVITY_LAUNCH_UNKNOWN_CHANNEL:
        case l.Z.ReasonCodes.ACTIVITY_LAUNCH_UNKNOWN_GUILD:
        case l.Z.ReasonCodes.ACTIVITY_LAUNCH_INVALID_CHANNEL_TYPE:
        case l.Z.ReasonCodes.ACTIVITY_LAUNCH_INVALID_CHANNEL_NO_AFK:
            return g.NW.string(g.t.j29zCg);
        case l.Z.ReasonCodes.ACTIVITY_LAUNCH_INVALID_USER_AGE_GATE:
            return g.NW.string(g.t['4WuFRE']);
        case l.Z.ReasonCodes.ACTIVITY_LAUNCH_INVALID_DEV_PREVIEW_GUILD_SIZE:
            return g.NW.string(g.t.RvkXdX);
        case l.Z.ReasonCodes.ACTIVITY_LAUNCH_INVALID_CONFIGURATION_PLATFORM_NOT_SUPPORTED:
        case l.Z.ReasonCodes.ACTIVITY_LAUNCH_INVALID_CONFIGURATION_PLATFORM_NOT_RELEASED:
            return g.NW.string(g.t.uGDCc3);
        case l.Z.ReasonCodes.ACTIVITY_LAUNCH_INVALID_USER_NO_ACCESS_TO_ACTIVITY:
            return g.NW.string(g.t.WjNAAA);
        case l.Z.ReasonCodes.ACTIVITY_LAUNCH_INVALID_LOCATION_TYPE:
            return g.NW.string(g.t.PtobXV);
        case l.Z.ReasonCodes.ACTIVITY_LAUNCH_INVALID_USER_REGION_FOR_APPLICATION:
            return g.NW.string(g.t.PrHIMz);
    }
}
