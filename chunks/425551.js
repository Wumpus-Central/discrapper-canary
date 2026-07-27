i.d(t, { aW: () => J, Ay: () => K, rj: () => Q }), i(321073);
var n = i(627968),
    s = i(64700),
    l = i(503698),
    a = i.n(l),
    r = i(435558),
    d = i.n(r),
    o = i(17928),
    u = i(661531),
    c = i(863610),
    m = i(602853),
    h = i(228366),
    p = i(174459),
    A = i(652215);
let g = {
    dismissForApplicationId(e) {
        h.h.dispatch({ type: "ACTIVITY_INVITE_EDUCATION_DISMISS", key: e, value: !0 }),
            p.default.track(A.HAw.CLOSE_TUTORIAL, {
                tutorial: "activity-invite-nux-inline",
                application_id: e,
                acknowledged: !0,
            });
    },
};
var I = i(770178),
    f = i(20015),
    x = i(55730),
    v = i(587895),
    C = i(834730),
    E = i(291747),
    S = i(866665),
    b = i(101392),
    j = i(625494),
    y = i(960850),
    N = i(634266);
function T(e) {
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
                j._.subscribe(A.jej.EMPHASIZE_SLOWMODE_COOLDOWN, e),
                () => {
                    j._.unsubscribe(A.jej.EMPHASIZE_SLOWMODE_COOLDOWN, e);
                }
            );
        }, []),
        !t)
    )
        return null;
    let o = (0, y.VI)(i),
        u = (0, y.pS)(a, l),
        c = (0, n.jsxs)(C.E, {
            className: N.rk,
            variant: "text-xs/medium",
            color: r ? "text-feedback-critical" : "text-muted",
            tabularNumbers: !0,
            children: [(0, n.jsx)(E.x, { size: "xxs", color: "currentColor", className: N.Eq }), u],
        });
    return (0, n.jsx)(S.m, { text: o, children: (0, n.jsx)("div", { className: N.ns, children: c }) });
}
function _(e) {
    let { channel: t, isThreadCreation: i = !1 } = e,
        s = (0, o.bG)([b.A], () => b.A.getSlowmodeCooldownGuess(t.id, i ? b.R.CreateThread : b.R.SendMessage)),
        l = (0, y._i)(t),
        { rateLimitPerUser: a } = t;
    return (0, n.jsx)(T, { isEnabled: a > 0, rateLimitPerUser: a, isBypassSlowmode: l, slowmodeCooldownGuess: s });
}
var O = i(407278);
let D = {};
class k extends o.Ay.PersistedStore {
    static displayName = "ActivityInviteEducationStore";
    static persistKey = "ActivityInviteEducationExperimentStore";
    initialize(e) {
        Object.assign(D, e);
    }
    getState() {
        return D;
    }
    shouldShowEducation(e) {
        return !0 !== D[e];
    }
}
let w = new k(h.h, {
    ACTIVITY_INVITE_EDUCATION_DISMISS: function (e) {
        return (D[e.key] = e.value), !0;
    },
});
var G = i(629016),
    R = i(994500),
    U = i(461213),
    L = i(741961),
    M = i(287809),
    P = i(531685),
    B = i(403362),
    V = i(562153);
let F = (0, i(945810).mj)({
    name: "2026-07-typing-users-css-dots",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var W = i(375708),
    H = i(379285);
let q = [];
class Z extends s.PureComponent {
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
            -1 === q.indexOf(e) &&
            (p.default.track(A.HAw.SHOW_TUTORIAL, { tutorial: "activity-invite-nux-inline", application_id: e }),
            q.push(e));
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
            className: a()(H.F4, { [H.gV]: this.state.fadeIn }),
            children: [
                (0, n.jsx)("div", { className: H.GZ }),
                (0, n.jsx)("span", {
                    children: W.intl.format(W.t["i/MoCt"], {
                        game: e.name,
                        dismissOnClick: this.handleDismissInviteEducation,
                    }),
                }),
            ],
        });
    }
}
function z() {
    return (0, n.jsxs)("div", {
        className: H.r$,
        "aria-hidden": !0,
        children: [
            (0, n.jsx)("span", { className: H.Om }),
            (0, n.jsx)("span", { className: H.Om }),
            (0, n.jsx)("span", { className: H.Om }),
        ],
    });
}
function X(e) {
    let {
            activityInviteEducationActivity: t,
            isFocused: i,
            typingUsers: l,
            className: r,
            channel: d,
            isThreadCreation: o,
            renderDots: u,
            renderSlowmode: m,
            isInTextChannel: h = !1,
            shouldShowLegacyGameInviteCreationBanner: p = !1,
        } = e,
        A = F.useConfig({ location: "TypingUsers" }).enabled,
        { rateLimitPerUser: g } = d,
        f = s.useRef(null),
        x = s.useRef(null),
        [v, C] = s.useState(!1),
        E = s.useCallback(() => {
            if (null == f.current || null == x.current) return;
            let e = f.current.getBoundingClientRect();
            x.current.scrollWidth + 48 > e.width ? C(!0) : C(!1);
        }, []);
    (0, I.g)(f, E, [], { enabled: h }), (0, I.g)(x, E, [], { enabled: h });
    let [S, b, j] = l,
        y = "";
    1 === l.length
        ? (y = W.intl.format(W.t.lJ9sZX, { a: S }))
        : 2 === l.length
          ? (y = W.intl.format(W.t.rB0CUa, { a: S, b }))
          : 3 === l.length
            ? (y = W.intl.format(W.t.StKThj, { a: S, b, c: j }))
            : l.length > 3 && (y = W.intl.format(W.t.Q8lUnE, {}));
    let N = v && l.length > 0 && l.length <= 3 ? W.intl.format(W.t["qD/0qZ"], {}) : y,
        T = l.length > 0 || g > 0 || p,
        D = !T && null != t,
        k = null;
    return (
        T
            ? (k = (0, n.jsxs)("div", {
                  className: a()(H.IW, { "stop-animation": !i, [H.Il]: h }, r),
                  children: [
                      0 === l.length && p
                          ? (0, n.jsx)(O.A, {})
                          : (0, n.jsxs)("div", {
                                className: H.y5,
                                ref: f,
                                children: [
                                    l.length > 0 &&
                                        !1 !== u &&
                                        (A
                                            ? (0, n.jsx)(z, {})
                                            : (0, n.jsx)(c.n, { className: H.gO, dotRadius: 3.5, themed: !0 })),
                                    (0, n.jsx)("span", { className: H.Qq, "aria-hidden": !0, children: N }),
                                    (0, n.jsx)("span", {
                                        className: H.Qq,
                                        style: { position: "absolute", visibility: "hidden" },
                                        "aria-hidden": !0,
                                        ref: x,
                                        children: y,
                                    }),
                                ],
                            }),
                      !1 !== m && (0, n.jsx)(_, { channel: d, isThreadCreation: o }),
                  ],
              }))
            : D && null != t && (k = (0, n.jsx)(Z, { activity: t, isFocused: i })),
        (0, n.jsxs)(n.Fragment, {
            children: [
                k,
                (0, n.jsx)("span", { className: H.y4, "aria-live": "polite", "aria-atomic": !0, children: y }),
            ],
        })
    );
}
function Q(e) {
    let t = (0, o.bG)([L.A], () => L.A.getTypingUsers(e.id)),
        i = (0, o.bG)([M.default], () => M.default.getCurrentUser());
    return d()(t)
        .keys()
        .filter((e) => e !== i?.id)
        .reject((e) => R.A.isBlockedOrIgnored(e))
        .map((e) => M.default.getUser(e))
        .filter(B.Vq)
        .map((t) => V.Ay.getName(e.guild_id, e.id, t))
        .value();
}
function J(e) {
    let t = (0, o.bG)([U.A], () => U.A.findActivity((e) => null != e.application_id));
    return (0, o.bG)([w, v.A, R.A, G.A], () =>
        (function (e) {
            let {
                    channel: t,
                    activity: i,
                    ActivityInviteEducationStore: n,
                    ApplicationStore: s,
                    RelationshipStore: l,
                    GamePartyStore: a,
                } = e,
                r = i?.application_id;
            if (null == t || null == i || !(0, x.A)(i, A.jUm.JOIN) || null == r) return !1;
            let d = s.getApplication(r);
            return (
                !(
                    null == d ||
                    (0, f.n)(d, A.gfo.EMBEDDED) ||
                    (t.isPrivate() && l.isBlockedOrIgnored(t.getRecipientId())) ||
                    (t.isDM() && a.getParty(i.party?.id)?.has(t.getRecipientId()) === !0)
                ) && n.shouldShowEducation(r)
            );
        })({
            channel: e,
            activity: t,
            ActivityInviteEducationStore: w,
            ApplicationStore: v.A,
            RelationshipStore: R.A,
            GamePartyStore: G.A,
        }),
    )
        ? t
        : null;
}
function K(e) {
    let { channel: t, isThreadCreation: i = !1, ...s } = e,
        l = Q(t),
        a = (0, O.L)(t.id),
        r = {
            ...s,
            baseTextColor: (0, m.r)(u.A.colors.INTERACTIVE_TEXT_DEFAULT).hex(),
            activeTextColor: (0, m.r)(u.A.colors.INTERACTIVE_TEXT_DEFAULT).hex(),
            activityInviteEducationActivity: J(t),
            typingUsers: i ? [] : l,
            isFocused: (0, o.bG)([P.A], () => P.A.isFocused()),
            guildId: t.guild_id,
            channel: t,
            isThreadCreation: i,
        };
    return (0, n.jsx)(X, { ...r, shouldShowLegacyGameInviteCreationBanner: a });
}
