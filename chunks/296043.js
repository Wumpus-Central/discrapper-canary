n.d(t, {
    Bl: () => N,
    Gv: () => A,
    I5: () => y,
    fK: () => C,
    h0: () => T,
    sW: () => R,
    wy: () => I,
}),
    n(896048);
var r = n(562465),
    i = n(73153),
    a = n(843472),
    s = n(155718),
    o = n(587895),
    l = n(113267),
    c = n(867455),
    u = n(961350),
    d = n(661191),
    f = n(706727),
    p = n(436283),
    _ = n(337591),
    h = n(616716),
    m = n(652215),
    g = n(985018);

function E(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function b(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                E(e, t, n[t]);
            });
    }
    return e;
}

function y(e) {
    return null == e || "" === e || Number.isNaN(e) ? Date.now() : d.default.extractTimestamp(e) + 9e5;
}

function O(e) {
    return null == e || "" === e || Number.isNaN(e) ? Date.now() : d.default.extractTimestamp(e) + 3e3;
}
let A = async (e) => {
    let {
            componentType: t,
            messageId: n,
            messageFlags: i,
            customId: a,
            componentId: o,
            applicationId: l,
            channelId: _,
            guildId: h,
            localState: g,
        } = e,
        E = d.default.fromTimestamp(Date.now());
    if (!p.Ay.canQueueInteraction(n, E)) return;
    await c.A.unarchiveThreadIfNecessary(_),
        (0, f.tU)(E, {
            messageId: n,
            data: {
                interactionType: s.G4.MESSAGE_COMPONENT,
                applicationId: l,
                customId: a,
                componentId: o,
            },
            onFailure: (e, t) => S(_, e, t),
        }),
        null != g && (0, f.Sw)(n, E, g, o);
    let y = {
        type: s.G4.MESSAGE_COMPONENT,
        nonce: E,
        guild_id: h,
        channel_id: _,
        message_flags: i,
        message_id: n,
        application_id: l,
        session_id: u.default.getSessionId(),
        data: b(
            {
                component_type: t,
                custom_id: a,
            },
            v(g),
        ),
    };
    await r.Bo.post(
        {
            url: m.Rsh.INTERACTIONS,
            body: y,
            timeout: 3e3,
            rejectWithError: !1,
        },
        (e) => {
            I(E, e, l, _, h);
        },
    );
};

function v(e) {
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
            return {
                type: e.type,
                values: t,
            };
        default:
            return null;
    }
}
let S = (e, t, n) => {
        null == n && null != t && a.A.sendClydeError(e, t);
    },
    I = (e, t, n, r, a) => {
        if (!t.ok) {
            if (!t.hasErr)
                if (t.status >= 400 && t.status < 500 && t.body)
                    if (t.body.code === m.t02.INVALID_FORM_BODY && t.body.errors) {
                        let s = (0, h.W)(t.body.errors);
                        null != s &&
                            ("INTERACTION_APPLICATION_COMMAND_INVALID_VERSION" === s.code ||
                                "INTERACTION_APPLICATION_COMMAND_INVALID" === s.code) &&
                            i.h.dispatch({
                                type: "APPLICATION_COMMAND_EXECUTE_BAD_VERSION",
                                applicationId: n,
                                channelId: r,
                                guildId: null != a ? a : null,
                            }),
                            (0, f.C1)(e, void 0, null == s ? void 0 : s.message);
                        return;
                    } else
                        return t.body.code !== m.t02.UNKNOWN_INTEGRATION
                            ? void (0, f.C1)(e, t.body.code, t.body.message, t.status)
                            : (i.h.dispatch({
                                  type: "APPLICATION_COMMAND_EXECUTE_BAD_VERSION",
                                  applicationId: n,
                                  channelId: r,
                                  guildId: null != a ? a : null,
                              }),
                              (0, f.C1)(e, void 0, t.body.message),
                              void 0);
                else {
                    var s;
                    (0, f.C1)(e, null == (s = t.body) ? void 0 : s.code);
                    return;
                }
            (0, f.C1)(e);
        }
    };
var T = (function (e) {
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
    let n = null == t ? void 0 : t.state,
        r = e.state === m.cmJ.SENT && y(e.id) < Date.now(),
        i = e.state === m.cmJ.SEND_FAILED && O(e.id) < Date.now(),
        a = (null == t ? void 0 : t.data.interactionType) === s.G4.APPLICATION_COMMAND,
        o = e.isCommandType();
    if ((a && n === _.m.QUEUED) || (o && e.state === m.cmJ.SENDING && null != t)) return 0;
    if ((a && n === _.m.CREATED) || (e.hasFlag(m.pr7.LOADING) && !r)) return 1;
    if (null != e.interaction && e.hasFlag(m.pr7.LOADING) && r) return 3;
    if (null != e.interaction && !e.hasFlag(m.pr7.LOADING) && i) return 3;
    if (o && e.state === m.cmJ.SEND_FAILED) return 2;
    else if (null != e.interaction && e.hasFlag(m.pr7.EPHEMERAL)) return 4;
};

function N(e) {
    let t = e.options;
    for (
        ;
        (null == t ? void 0 : t.length) === 1 &&
        (t[0].type === s.n4.SUB_COMMAND_GROUP || t[0].type === s.n4.SUB_COMMAND);
    )
        t = t[0].options;
    for (let e of null != t ? t : []) if (e.type === s.n4.ATTACHMENT) return !1;
    return !0;
}

function R(e, t) {
    switch (e) {
        case l.A.ReasonCodes.TIMEOUT:
            let n = o.A.getApplication(t);
            if (null != n)
                return g.intl.formatToPlainString(g.t.u2D2Uj, {
                    applicationName: n.name,
                });
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
