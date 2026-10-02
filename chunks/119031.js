(i.d(t, { aW: () => J, Ay: () => K, rj: () => Q }), i(321073));
var n = i(477900),
    s = i(582128),
    l = i(503698),
    a = i.n(l),
    r = i(435558),
    d = i.n(r),
    o = i(17928),
    u = i(661531),
    c = i(863610),
    m = i(602853),
    h = i(73153),
    p = i(174459),
    A = i(652215);
let g = {
    dismissForApplicationId(e) {
        (h.h.dispatch({ type: "ACTIVITY_INVITE_EDUCATION_DISMISS", key: e, value: !0 }),
            p.default.track(A.HAw.CLOSE_TUTORIAL, {
                tutorial: "activity-invite-nux-inline",
                application_id: e,
                acknowledged: !0,
            }));
    },
};
var I = i(770178),
    x = i(55730),
    v = i(587895),
    f = i(834730),
    C = i(291747),
    E = i(866665),
    S = i(101392),
    j = i(625494),
    b = i(960850),
    y = i(233531);
function N(e) {
    let { isEnabled: t, rateLimitPerUser: i, isBypassSlowmode: l, slowmodeCooldownGuess: a } = e,
        [r, d] = s.useState(!1);
    if (
        (s.useEffect(() => {
            function e() {
                (d(!0),
                    setTimeout(() => {
                        d(!1);
                    }, 1e3));
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
    let o = (0, b.VI)(i),
        u = (0, b.pS)(a, l),
        c = (0, n.jsxs)(f.E, {
            className: y.rk,
            variant: "text-xs/medium",
            color: r ? "text-feedback-critical" : "text-muted",
            tabularNumbers: !0,
            children: [(0, n.jsx)(C.x, { size: "xxs", color: "currentColor", className: y.Eq }), u],
        });
    return (0, n.jsx)(E.m, { text: o, children: (0, n.jsx)("div", { className: y.ns, children: c }) });
}
function _(e) {
    let { channel: t, isThreadCreation: i = !1 } = e,
        s = (0, o.bG)([S.A], () => S.A.getSlowmodeCooldownGuess(t.id, i ? S.R.CreateThread : S.R.SendMessage)),
        l = (0, b._i)(t),
        { rateLimitPerUser: a } = t;
    return (0, n.jsx)(N, { isEnabled: a > 0, rateLimitPerUser: a, isBypassSlowmode: l, slowmodeCooldownGuess: s });
}
var T = i(407278);
let O = {};
class G extends o.Ay.PersistedStore {
    static displayName = "ActivityInviteEducationStore";
    static persistKey = "ActivityInviteEducationExperimentStore";
    initialize(e) {
        Object.assign(O, e);
    }
    getState() {
        return O;
    }
    shouldShowEducation(e) {
        return !0 !== O[e];
    }
}
let k = new G(h.h, {
    ACTIVITY_INVITE_EDUCATION_DISMISS: function (e) {
        return ((O[e.key] = e.value), !0);
    },
});
var w = i(629016),
    D = i(576705),
    R = i(994500),
    U = i(461213),
    L = i(741961),
    M = i(287809),
    P = i(531685),
    B = i(403362),
    V = i(562153),
    F = i(345870),
    W = i(375708),
    H = i(24504);
let q = [];
class Z extends s.PureComponent {
    state = { fadeIn: !1 };
    timeout = null;
    componentDidMount() {
        this.timeout = setTimeout(() => {
            (this.setState({ fadeIn: !0 }), (this.timeout = null), this.logShownEventIfNeeded());
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
        A = (0, F.v)("TypingUsers"),
        { rateLimitPerUser: g } = d,
        x = s.useRef(null),
        v = s.useRef(null),
        [f, C] = s.useState(!1),
        E = s.useCallback(() => {
            if (null == x.current || null == v.current) return;
            let e = x.current.getBoundingClientRect();
            v.current.scrollWidth + 48 > e.width ? C(!0) : C(!1);
        }, []);
    ((0, I.g)(x, E, [], { enabled: h }), (0, I.g)(v, E, [], { enabled: h }));
    let [S, j, b] = l,
        y = "";
    1 === l.length
        ? (y = W.intl.format(W.t.lJ9sZX, { a: S }))
        : 2 === l.length
          ? (y = W.intl.format(W.t.rB0CUa, { a: S, b: j }))
          : 3 === l.length
            ? (y = W.intl.format(W.t.StKThj, { a: S, b: j, c: b }))
            : l.length > 3 && (y = W.intl.format(W.t.Q8lUnE, {}));
    let N = f && l.length > 0 && l.length <= 3 ? W.intl.format(W.t["qD/0qZ"], {}) : y,
        O = l.length > 0 || g > 0 || p,
        G = !O && null != t,
        k = null;
    return (
        O
            ? (k = (0, n.jsxs)("div", {
                  className: a()(H.IW, { "stop-animation": !i, [H.Il]: h }, r),
                  "data-mtctest-ignore": "true",
                  children: [
                      0 === l.length && p
                          ? (0, n.jsx)(T.A, {})
                          : (0, n.jsxs)("div", {
                                className: H.y5,
                                ref: x,
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
                                        ref: v,
                                        children: y,
                                    }),
                                ],
                            }),
                      !1 !== m && (0, n.jsx)(_, { channel: d, isThreadCreation: o }),
                  ],
              }))
            : G && null != t && (k = (0, n.jsx)(Z, { activity: t, isFocused: i })),
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
    return (0, o.bG)([k, v.A, R.A, w.A, D.A], () =>
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
                !(0, x.A)(i, A.jUm.JOIN) ||
                null == d ||
                (!t.isPrivate() && !r.can(A.xBc.SEND_MESSAGES, t))
            )
                return !1;
            let o = s.getApplication(d);
            return (
                !(
                    null == o ||
                    o.isEmbedded ||
                    (t.isPrivate() && l.isBlockedOrIgnored(t.getRecipientId())) ||
                    (t.isDM() && a.getParty(i.party?.id)?.has(t.getRecipientId()) === !0)
                ) && n.shouldShowEducation(d)
            );
        })({
            channel: e,
            activity: t,
            ActivityInviteEducationStore: k,
            ApplicationStore: v.A,
            RelationshipStore: R.A,
            GamePartyStore: w.A,
            PermissionStore: D.A,
        }),
    )
        ? t
        : null;
}
function K(e) {
    let { channel: t, isThreadCreation: i = !1, ...s } = e,
        l = Q(t),
        a = (0, T.L)(t.id),
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
