i.d(t, { aW: () => X, Ay: () => Q, rj: () => z }), i(321073);
var n = i(627968),
    l = i(64700),
    s = i(503698),
    a = i.n(s),
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
    f = i(20015),
    v = i(55730),
    C = i(587895),
    x = i(834730),
    E = i(291747),
    S = i(866665),
    b = i(101392),
    y = i(625494),
    T = i(960850),
    _ = i(634266);
function j(e) {
    let { isEnabled: t, rateLimitPerUser: i, isBypassSlowmode: s, slowmodeCooldownGuess: a } = e,
        [r, d] = l.useState(!1);
    if (
        (l.useEffect(() => {
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
    let o = (0, T.VI)(i),
        u = (0, T.pS)(a, s),
        c = (0, n.jsxs)(x.E, {
            className: _.rk,
            variant: "text-xs/medium",
            color: r ? "text-feedback-critical" : "text-muted",
            tabularNumbers: !0,
            children: [(0, n.jsx)(E.x, { size: "xxs", color: "currentColor", className: _.Eq }), u],
        });
    return (0, n.jsx)(S.m, { text: o, children: (0, n.jsx)("div", { className: _.ns, children: c }) });
}
function N(e) {
    let { channel: t, isThreadCreation: i = !1 } = e,
        l = (0, o.bG)([b.A], () => b.A.getSlowmodeCooldownGuess(t.id, i ? b.R.CreateThread : b.R.SendMessage)),
        s = (0, T._i)(t, i ? b.R.CreateThread : b.R.SendMessage),
        { rateLimitPerUser: a } = t;
    return (0, n.jsx)(j, { isEnabled: a > 0, rateLimitPerUser: a, isBypassSlowmode: s, slowmodeCooldownGuess: l });
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
let w = new k(m.h, {
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
    V = i(562153),
    F = i(375708),
    W = i(379285);
let H = [];
class q extends l.PureComponent {
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
            -1 === H.indexOf(e) &&
            (p.default.track(A.HAw.SHOW_TUTORIAL, { tutorial: "activity-invite-nux-inline", application_id: e }),
            H.push(e));
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
            className: a()(W.F4, { [W.gV]: this.state.fadeIn }),
            children: [
                (0, n.jsx)("div", { className: W.GZ }),
                (0, n.jsx)("span", {
                    children: F.intl.format(F.t["i/MoCt"], {
                        game: e.name,
                        dismissOnClick: this.handleDismissInviteEducation,
                    }),
                }),
            ],
        });
    }
}
function Z(e) {
    let {
            activityInviteEducationActivity: t,
            isFocused: i,
            typingUsers: s,
            className: r,
            channel: d,
            isThreadCreation: o,
            renderDots: u,
            renderSlowmode: h,
            isInTextChannel: m = !1,
            shouldShowLegacyGameInviteCreationBanner: p = !1,
        } = e,
        { rateLimitPerUser: A } = d,
        g = l.useRef(null),
        f = l.useRef(null),
        [v, C] = l.useState(!1),
        x = l.useCallback(() => {
            if (null == g.current || null == f.current) return;
            let e = g.current.getBoundingClientRect();
            f.current.scrollWidth + 48 > e.width ? C(!0) : C(!1);
        }, []);
    (0, I.g)(g, x, [], { enabled: m }), (0, I.g)(f, x, [], { enabled: m });
    let [E, S, b] = s,
        y = "";
    1 === s.length
        ? (y = F.intl.format(F.t.lJ9sZX, { a: E }))
        : 2 === s.length
          ? (y = F.intl.format(F.t.rB0CUa, { a: E, b: S }))
          : 3 === s.length
            ? (y = F.intl.format(F.t.StKThj, { a: E, b: S, c: b }))
            : s.length > 3 && (y = F.intl.format(F.t.Q8lUnE, {}));
    let T = v && s.length > 0 && s.length <= 3 ? F.intl.format(F.t["qD/0qZ"], {}) : y,
        _ = s.length > 0 || A > 0 || p,
        j = !_ && null != t,
        D = null;
    return (
        _
            ? (D = (0, n.jsxs)("div", {
                  className: a()(W.IW, { "stop-animation": !i, [W.Il]: m }, r),
                  children: [
                      0 === s.length && p
                          ? (0, n.jsx)(O.A, {})
                          : (0, n.jsxs)("div", {
                                className: W.y5,
                                ref: g,
                                children: [
                                    s.length > 0 &&
                                        !1 !== u &&
                                        (0, n.jsx)(c.n, { className: W.gO, dotRadius: 3.5, themed: !0 }),
                                    (0, n.jsx)("span", { className: W.Qq, "aria-hidden": !0, children: T }),
                                    (0, n.jsx)("span", {
                                        className: W.Qq,
                                        style: { position: "absolute", visibility: "hidden" },
                                        "aria-hidden": !0,
                                        ref: f,
                                        children: y,
                                    }),
                                ],
                            }),
                      !1 !== h && (0, n.jsx)(N, { channel: d, isThreadCreation: o }),
                  ],
              }))
            : j && null != t && (D = (0, n.jsx)(q, { activity: t, isFocused: i })),
        (0, n.jsxs)(n.Fragment, {
            children: [
                D,
                (0, n.jsx)("span", { className: W.y4, "aria-live": "polite", "aria-atomic": !0, children: y }),
            ],
        })
    );
}
function z(e) {
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
function X(e) {
    let t = (0, o.bG)([U.A], () => U.A.findActivity((e) => null != e.application_id));
    return (0, o.bG)([w, C.A, R.A, G.A], () =>
        (function (e) {
            let {
                    channel: t,
                    activity: i,
                    ActivityInviteEducationStore: n,
                    ApplicationStore: l,
                    RelationshipStore: s,
                    GamePartyStore: a,
                } = e,
                r = i?.application_id;
            if (null == t || null == i || !(0, v.A)(i, A.jUm.JOIN) || null == r) return !1;
            let d = l.getApplication(r);
            return (
                !(
                    null == d ||
                    (0, f.n)(d, A.gfo.EMBEDDED) ||
                    (t.isPrivate() && s.isBlockedOrIgnored(t.getRecipientId())) ||
                    (t.isDM() && a.getParty(i.party?.id)?.has(t.getRecipientId()) === !0)
                ) && n.shouldShowEducation(r)
            );
        })({
            channel: e,
            activity: t,
            ActivityInviteEducationStore: w,
            ApplicationStore: C.A,
            RelationshipStore: R.A,
            GamePartyStore: G.A,
        }),
    )
        ? t
        : null;
}
function Q(e) {
    let { channel: t, isThreadCreation: i = !1, ...l } = e,
        s = z(t),
        a = (0, O.L)(t.id),
        r = {
            ...l,
            baseTextColor: (0, h.r)(u.A.colors.INTERACTIVE_TEXT_DEFAULT).hex(),
            activeTextColor: (0, h.r)(u.A.colors.INTERACTIVE_TEXT_DEFAULT).hex(),
            activityInviteEducationActivity: X(t),
            typingUsers: i ? [] : s,
            isFocused: (0, o.bG)([P.A], () => P.A.isFocused()),
            guildId: t.guild_id,
            channel: t,
            isThreadCreation: i,
        };
    return (0, n.jsx)(Z, { ...r, shouldShowLegacyGameInviteCreationBanner: a });
}
