(i.d(t, { aW: () => K, Ay: () => Y, rj: () => J }), i(321073));
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
    h = i(228366),
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
    x = i(20015),
    f = i(55730),
    v = i(587895),
    E = i(834730),
    C = i(291747),
    S = i(866665),
    j = i(101392),
    y = i(625494),
    N = i(960850),
    b = i(233531);
function _(e) {
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
                y._.subscribe(A.jej.EMPHASIZE_SLOWMODE_COOLDOWN, e),
                () => {
                    y._.unsubscribe(A.jej.EMPHASIZE_SLOWMODE_COOLDOWN, e);
                }
            );
        }, []),
        !t)
    )
        return null;
    let o = (0, N.VI)(i),
        u = (0, N.pS)(a, l),
        c = (0, n.jsxs)(E.E, {
            className: b.rk,
            variant: "text-xs/medium",
            color: r ? "text-feedback-critical" : "text-muted",
            tabularNumbers: !0,
            children: [(0, n.jsx)(C.x, { size: "xxs", color: "currentColor", className: b.Eq }), u],
        });
    return (0, n.jsx)(S.m, { text: o, children: (0, n.jsx)("div", { className: b.ns, children: c }) });
}
function T(e) {
    let { channel: t, isThreadCreation: i = !1 } = e,
        s = (0, o.bG)([j.A], () => j.A.getSlowmodeCooldownGuess(t.id, i ? j.R.CreateThread : j.R.SendMessage)),
        l = (0, N._i)(t),
        { rateLimitPerUser: a } = t;
    return (0, n.jsx)(_, { isEnabled: a > 0, rateLimitPerUser: a, isBypassSlowmode: l, slowmodeCooldownGuess: s });
}
var O = i(407278);
let D = {};
class G extends o.Ay.PersistedStore {
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
let k = new G(h.h, {
    ACTIVITY_INVITE_EDUCATION_DISMISS: function (e) {
        return ((D[e.key] = e.value), !0);
    },
});
var w = i(629016),
    R = i(576705),
    U = i(994500),
    L = i(461213),
    M = i(741961),
    P = i(287809),
    B = i(531685),
    V = i(403362),
    F = i(562153),
    W = i(345870),
    H = i(375708),
    q = i(24504);
let Z = [];
class z extends s.PureComponent {
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
            -1 === Z.indexOf(e) &&
            (p.default.track(A.HAw.SHOW_TUTORIAL, { tutorial: "activity-invite-nux-inline", application_id: e }),
            Z.push(e));
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
            className: a()(q.F4, { [q.gV]: this.state.fadeIn }),
            children: [
                (0, n.jsx)("div", { className: q.GZ }),
                (0, n.jsx)("span", {
                    children: H.intl.format(H.t["i/MoCt"], {
                        game: e.name,
                        dismissOnClick: this.handleDismissInviteEducation,
                    }),
                }),
            ],
        });
    }
}
function X() {
    return (0, n.jsxs)("div", {
        className: q.r$,
        "aria-hidden": !0,
        children: [
            (0, n.jsx)("span", { className: q.Om }),
            (0, n.jsx)("span", { className: q.Om }),
            (0, n.jsx)("span", { className: q.Om }),
        ],
    });
}
function Q(e) {
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
        A = (0, W.v)("TypingUsers"),
        { rateLimitPerUser: g } = d,
        x = s.useRef(null),
        f = s.useRef(null),
        [v, E] = s.useState(!1),
        C = s.useCallback(() => {
            if (null == x.current || null == f.current) return;
            let e = x.current.getBoundingClientRect();
            f.current.scrollWidth + 48 > e.width ? E(!0) : E(!1);
        }, []);
    ((0, I.g)(x, C, [], { enabled: h }), (0, I.g)(f, C, [], { enabled: h }));
    let [S, j, y] = l,
        N = "";
    1 === l.length
        ? (N = H.intl.format(H.t.lJ9sZX, { a: S }))
        : 2 === l.length
          ? (N = H.intl.format(H.t.rB0CUa, { a: S, b: j }))
          : 3 === l.length
            ? (N = H.intl.format(H.t.StKThj, { a: S, b: j, c: y }))
            : l.length > 3 && (N = H.intl.format(H.t.Q8lUnE, {}));
    let b = v && l.length > 0 && l.length <= 3 ? H.intl.format(H.t["qD/0qZ"], {}) : N,
        _ = l.length > 0 || g > 0 || p,
        D = !_ && null != t,
        G = null;
    return (
        _
            ? (G = (0, n.jsxs)("div", {
                  className: a()(q.IW, { "stop-animation": !i, [q.Il]: h }, r),
                  "data-mtctest-ignore": "true",
                  children: [
                      0 === l.length && p
                          ? (0, n.jsx)(O.A, {})
                          : (0, n.jsxs)("div", {
                                className: q.y5,
                                ref: x,
                                children: [
                                    l.length > 0 &&
                                        !1 !== u &&
                                        (A
                                            ? (0, n.jsx)(X, {})
                                            : (0, n.jsx)(c.n, { className: q.gO, dotRadius: 3.5, themed: !0 })),
                                    (0, n.jsx)("span", { className: q.Qq, "aria-hidden": !0, children: b }),
                                    (0, n.jsx)("span", {
                                        className: q.Qq,
                                        style: { position: "absolute", visibility: "hidden" },
                                        "aria-hidden": !0,
                                        ref: f,
                                        children: N,
                                    }),
                                ],
                            }),
                      !1 !== m && (0, n.jsx)(T, { channel: d, isThreadCreation: o }),
                  ],
              }))
            : D && null != t && (G = (0, n.jsx)(z, { activity: t, isFocused: i })),
        (0, n.jsxs)(n.Fragment, {
            children: [
                G,
                (0, n.jsx)("span", { className: q.y4, "aria-live": "polite", "aria-atomic": !0, children: N }),
            ],
        })
    );
}
function J(e) {
    let t = (0, o.bG)([M.A], () => M.A.getTypingUsers(e.id)),
        i = (0, o.bG)([P.default], () => P.default.getCurrentUser());
    return d()(t)
        .keys()
        .filter((e) => e !== i?.id)
        .reject((e) => U.A.isBlockedOrIgnored(e))
        .map((e) => P.default.getUser(e))
        .filter(V.Vq)
        .map((t) => F.Ay.getName(e.guild_id, e.id, t))
        .value();
}
function K(e) {
    let t = (0, o.bG)([L.A], () => L.A.findActivity((e) => null != e.application_id));
    return (0, o.bG)([k, v.A, U.A, w.A, R.A], () =>
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
                !(0, f.A)(i, A.jUm.JOIN) ||
                null == d ||
                (!t.isPrivate() && !r.can(A.xBc.SEND_MESSAGES, t))
            )
                return !1;
            let o = s.getApplication(d);
            return (
                !(
                    null == o ||
                    (0, x.n)(o, A.gfo.EMBEDDED) ||
                    (t.isPrivate() && l.isBlockedOrIgnored(t.getRecipientId())) ||
                    (t.isDM() && a.getParty(i.party?.id)?.has(t.getRecipientId()) === !0)
                ) && n.shouldShowEducation(d)
            );
        })({
            channel: e,
            activity: t,
            ActivityInviteEducationStore: k,
            ApplicationStore: v.A,
            RelationshipStore: U.A,
            GamePartyStore: w.A,
            PermissionStore: R.A,
        }),
    )
        ? t
        : null;
}
function Y(e) {
    let { channel: t, isThreadCreation: i = !1, ...s } = e,
        l = J(t),
        a = (0, O.L)(t.id),
        r = {
            ...s,
            baseTextColor: (0, m.r)(u.A.colors.INTERACTIVE_TEXT_DEFAULT).hex(),
            activeTextColor: (0, m.r)(u.A.colors.INTERACTIVE_TEXT_DEFAULT).hex(),
            activityInviteEducationActivity: K(t),
            typingUsers: i ? [] : l,
            isFocused: (0, o.bG)([B.A], () => B.A.isFocused()),
            guildId: t.guild_id,
            channel: t,
            isThreadCreation: i,
        };
    return (0, n.jsx)(Q, { ...r, shouldShowLegacyGameInviteCreationBanner: a });
}
