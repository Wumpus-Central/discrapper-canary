i.d(t, { aW: () => ee, Ay: () => et, rj: () => $ }), i(321073);
var n = i(477900),
    s = i(582128),
    l = i(503698),
    a = i.n(l),
    r = i(435558),
    d = i.n(r),
    o = i(17928),
    u = i(661531),
    c = i(863610),
    h = i(602853),
    m = i(228366),
    p = i(174459),
    A = i(652215);
let g = {
    dismissForApplicationId(e) {
        m.h.dispatch({ type: "ACTIVITY_INVITE_EDUCATION_DISMISS", key: e, value: !0 }),
            p.default.track(A.HAw.CLOSE_TUTORIAL, {
                tutorial: "activity-invite-nux-inline",
                application_id: e,
                acknowledged: !0,
            });
    },
};
var I = i(770178),
    E = i(968522),
    x = i(874546),
    f = i(20015),
    v = i(55730),
    S = i(587895),
    C = i(834730),
    _ = i(291747),
    N = i(866665),
    j = i(101392),
    y = i(625494),
    b = i(960850),
    T = i(634266);
function D(e) {
    let { isEnabled: t, rateLimitPerUser: i, isBypassSlowmode: l, slowmodeCooldownGuess: a } = e,
        [r, d] = s.useState(!1);
    if (
        (s.useEffect(() => {
            function e() {
                d(!0),
                    setTimeout(() => {
                        d(!1);
                    }, 1e3);
            }
            return (
                y._.subscribe(A.jej.EMPHASIZE_SLOWMODE_COOLDOWN, e),
                () => {
                    y._.unsubscribe(A.jej.EMPHASIZE_SLOWMODE_COOLDOWN, e);
                }
            );
        }, []),
        !t)
    )
        return null;
    let o = (0, b.VI)(i),
        u = (0, b.pS)(a, l),
        c = (0, n.jsxs)(C.E, {
            className: T.rk,
            variant: "text-xs/medium",
            color: r ? "text-feedback-critical" : "text-muted",
            tabularNumbers: !0,
            children: [(0, n.jsx)(_.x, { size: "xxs", color: "currentColor", className: T.Eq }), u],
        });
    return (0, n.jsx)(N.m, { text: o, children: (0, n.jsx)("div", { className: T.ns, children: c }) });
}
function O(e) {
    let { channel: t, isThreadCreation: i = !1 } = e,
        s = (0, o.bG)([j.A], () => j.A.getSlowmodeCooldownGuess(t.id, i ? j.R.CreateThread : j.R.SendMessage)),
        l = (0, b._i)(t),
        { rateLimitPerUser: a } = t;
    return (0, n.jsx)(D, { isEnabled: a > 0, rateLimitPerUser: a, isBypassSlowmode: l, slowmodeCooldownGuess: s });
}
var G = i(710195),
    w = i(407278);
let k = {};
class R extends o.Ay.PersistedStore {
    static displayName = "ActivityInviteEducationStore";
    static persistKey = "ActivityInviteEducationExperimentStore";
    initialize(e) {
        Object.assign(k, e);
    }
    getState() {
        return k;
    }
    shouldShowEducation(e) {
        return !0 !== k[e];
    }
}
let U = new R(m.h, {
    ACTIVITY_INVITE_EDUCATION_DISMISS: function (e) {
        return (k[e.key] = e.value), !0;
    },
});
var L = i(629016),
    M = i(576705),
    P = i(994500),
    B = i(461213),
    V = i(741961),
    F = i(287809),
    W = i(531685),
    H = i(403362),
    q = i(562153),
    Z = i(345870),
    z = i(375708),
    X = i(379285);
let K = [];
class Q extends s.PureComponent {
    state = { fadeIn: !1 };
    timeout = null;
    componentDidMount() {
        this.timeout = setTimeout(() => {
            this.setState({ fadeIn: !0 }), (this.timeout = null), this.logShownEventIfNeeded();
        }, 100);
    }
    componentDidUpdate() {
        this.logShownEventIfNeeded();
    }
    logShownEventIfNeeded() {
        let e = this.props.activity.application_id;
        null != e &&
            -1 === K.indexOf(e) &&
            (p.default.track(A.HAw.SHOW_TUTORIAL, { tutorial: "activity-invite-nux-inline", application_id: e }),
            K.push(e));
    }
    componentWillUnmount() {
        null !== this.timeout && clearTimeout(this.timeout);
    }
    handleDismissInviteEducation = () => {
        let { activity: e } = this.props;
        null != e && null != e.application_id && g.dismissForApplicationId(e.application_id);
    };
    render() {
        let { activity: e } = this.props;
        return (0, n.jsxs)("div", {
            className: a()(X.F4, { [X.gV]: this.state.fadeIn }),
            children: [
                (0, n.jsx)("div", { className: X.GZ }),
                (0, n.jsx)("span", {
                    children: z.intl.format(z.t["i/MoCt"], {
                        game: e.name,
                        dismissOnClick: this.handleDismissInviteEducation,
                    }),
                }),
            ],
        });
    }
}
function Y() {
    return (0, n.jsxs)("div", {
        className: X.r$,
        "aria-hidden": !0,
        children: [
            (0, n.jsx)("span", { className: X.Om }),
            (0, n.jsx)("span", { className: X.Om }),
            (0, n.jsx)("span", { className: X.Om }),
        ],
    });
}
function J(e) {
    let {
            activityInviteEducationActivity: t,
            isFocused: i,
            typingUsers: l,
            className: r,
            channel: d,
            isThreadCreation: o,
            renderDots: u,
            renderSlowmode: h,
            isInTextChannel: m = !1,
            shouldShowLegacyGameInviteCreationBanner: p = !1,
        } = e,
        A = (0, Z.v)("TypingUsers"),
        { rateLimitPerUser: g } = d,
        E = s.useRef(null),
        x = s.useRef(null),
        [f, v] = s.useState(!1),
        S = s.useCallback(() => {
            if (null == E.current || null == x.current) return;
            let e = E.current.getBoundingClientRect();
            x.current.scrollWidth + 48 > e.width ? v(!0) : v(!1);
        }, []);
    (0, I.g)(E, S, [], { enabled: m }), (0, I.g)(x, S, [], { enabled: m });
    let [C, _, N] = l,
        j = "";
    1 === l.length
        ? (j = z.intl.format(z.t.lJ9sZX, { a: C }))
        : 2 === l.length
          ? (j = z.intl.format(z.t.rB0CUa, { a: C, b: _ }))
          : 3 === l.length
            ? (j = z.intl.format(z.t.StKThj, { a: C, b: _, c: N }))
            : l.length > 3 && (j = z.intl.format(z.t.Q8lUnE, {}));
    let y = f && l.length > 0 && l.length <= 3 ? z.intl.format(z.t["qD/0qZ"], {}) : j,
        b = l.length > 0 || g > 0 || p,
        T = !b && null != t,
        D = null;
    return (
        b
            ? (D = (0, n.jsxs)("div", {
                  className: a()(X.IW, { "stop-animation": !i, [X.Il]: m }, r),
                  children: [
                      0 === l.length && p
                          ? (0, n.jsx)(w.A, {})
                          : (0, n.jsxs)("div", {
                                className: X.y5,
                                ref: E,
                                children: [
                                    l.length > 0 &&
                                        !1 !== u &&
                                        (A
                                            ? (0, n.jsx)(Y, {})
                                            : (0, n.jsx)(c.n, { className: X.gO, dotRadius: 3.5, themed: !0 })),
                                    (0, n.jsx)("span", { className: X.Qq, "aria-hidden": !0, children: y }),
                                    (0, n.jsx)("span", {
                                        className: X.Qq,
                                        style: { position: "absolute", visibility: "hidden" },
                                        "aria-hidden": !0,
                                        ref: x,
                                        children: j,
                                    }),
                                ],
                            }),
                      !1 !== h && (0, n.jsx)(O, { channel: d, isThreadCreation: o }),
                  ],
              }))
            : T && null != t && (D = (0, n.jsx)(Q, { activity: t, isFocused: i })),
        (0, n.jsxs)(n.Fragment, {
            children: [
                D,
                (0, n.jsx)("span", { className: X.y4, "aria-live": "polite", "aria-atomic": !0, children: j }),
            ],
        })
    );
}
function $(e) {
    let t = (0, o.bG)([V.A], () => V.A.getTypingUsers(e.id)),
        i = (0, o.bG)([F.default], () => F.default.getCurrentUser());
    return d()(t)
        .keys()
        .filter((e) => e !== i?.id)
        .reject((e) => P.A.isBlockedOrIgnored(e))
        .map((e) => F.default.getUser(e))
        .filter(H.Vq)
        .map((t) => q.Ay.getName(e.guild_id, e.id, t))
        .value();
}
function ee(e) {
    let t = (0, o.bG)([B.A], () => B.A.findActivity((e) => null != e.application_id));
    return (0, o.bG)([U, S.A, P.A, L.A, M.A, G.A], () => {
        let i = t?.application_id != null ? S.A.getApplication(t.application_id) : null;
        return (
            !(
                (0, x._C)(t) &&
                (e.isPrivate() || M.A.can(A.xBc.SEND_MESSAGES, e)) &&
                null != i &&
                !(0, f.n)(i, A.gfo.EMBEDDED) &&
                E.sK.getConfig({ location: E.P8.TYPING_USERS }).showBanner
            ) &&
            (function (e) {
                let {
                        channel: t,
                        activity: i,
                        ActivityInviteEducationStore: n,
                        ApplicationStore: s,
                        RelationshipStore: l,
                        GamePartyStore: a,
                        PermissionStore: r,
                    } = e,
                    d = i?.application_id;
                if (
                    null == t ||
                    null == i ||
                    !(0, v.A)(i, A.jUm.JOIN) ||
                    null == d ||
                    (!t.isPrivate() && !r.can(A.xBc.SEND_MESSAGES, t))
                )
                    return !1;
                let o = s.getApplication(d);
                return (
                    !(
                        null == o ||
                        (0, f.n)(o, A.gfo.EMBEDDED) ||
                        (t.isPrivate() && l.isBlockedOrIgnored(t.getRecipientId())) ||
                        (t.isDM() && a.getParty(i.party?.id)?.has(t.getRecipientId()) === !0)
                    ) && n.shouldShowEducation(d)
                );
            })({
                channel: e,
                activity: t,
                ActivityInviteEducationStore: U,
                ApplicationStore: S.A,
                RelationshipStore: P.A,
                GamePartyStore: L.A,
                PermissionStore: M.A,
            })
        );
    })
        ? t
        : null;
}
function et(e) {
    let { channel: t, isThreadCreation: i = !1, ...s } = e,
        l = $(t),
        a = (0, w.L)(t.id),
        r = {
            ...s,
            baseTextColor: (0, h.r)(u.A.colors.INTERACTIVE_TEXT_DEFAULT).hex(),
            activeTextColor: (0, h.r)(u.A.colors.INTERACTIVE_TEXT_DEFAULT).hex(),
            activityInviteEducationActivity: ee(t),
            typingUsers: i ? [] : l,
            isFocused: (0, o.bG)([W.A], () => W.A.isFocused()),
            guildId: t.guild_id,
            channel: t,
            isThreadCreation: i,
        };
    return (0, n.jsx)(J, { ...r, shouldShowLegacyGameInviteCreationBanner: a });
}
