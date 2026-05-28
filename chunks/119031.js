i.d(t, { aW: () => Q, Ay: () => X, rj: () => Z }), i(321073);
var n = i(627968),
    l = i(64700),
    s = i(503698),
    a = i.n(s),
    r = i(735438),
    d = i.n(r),
    o = i(17928),
    u = i(661531),
    c = i(863610),
    h = i(602853),
    p = i(228366),
    m = i(174459),
    A = i(652215);
let I = {
    dismissForApplicationId(e) {
        p.h.dispatch({ type: "ACTIVITY_INVITE_EDUCATION_DISMISS", key: e, value: !0 }),
            m.default.track(A.HAw.CLOSE_TUTORIAL, {
                tutorial: "activity-invite-nux-inline",
                application_id: e,
                acknowledged: !0,
            });
    },
};
var g = i(770178),
    f = i(20015),
    E = i(55730),
    v = i(587895),
    x = i(990078),
    S = i(834730),
    T = i(291747),
    b = i(101392),
    _ = i(625494),
    y = i(960850),
    C = i(743586);
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
                _._.subscribe(A.jej.EMPHASIZE_SLOWMODE_COOLDOWN, e),
                () => {
                    _._.unsubscribe(A.jej.EMPHASIZE_SLOWMODE_COOLDOWN, e);
                }
            );
        }, []),
        !t)
    )
        return null;
    let o = (0, y.VI)(i),
        u = (0, y.pS)(a, s),
        c = (0, n.jsxs)(S.E, {
            className: C.rk,
            variant: "text-xs/medium",
            color: r ? "text-feedback-critical" : "text-muted",
            tabularNumbers: !0,
            children: [(0, n.jsx)(T.x, { size: "xxs", color: "currentColor", className: C.Eq }), u],
        });
    return (0, n.jsx)(x.m, { text: o, children: (0, n.jsx)("div", { className: C.ns, children: c }) });
}
function N(e) {
    let { channel: t, isThreadCreation: i = !1 } = e,
        l = (0, o.bG)([b.A], () => b.A.getSlowmodeCooldownGuess(t.id, i ? b.R.CreateThread : b.R.SendMessage)),
        s = (0, y._i)(t, i ? b.R.CreateThread : b.R.SendMessage),
        { rateLimitPerUser: a } = t;
    return (0, n.jsx)(j, { isEnabled: a > 0, rateLimitPerUser: a, isBypassSlowmode: s, slowmodeCooldownGuess: l });
}
let O = {};
class D extends o.Ay.PersistedStore {
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
let R = new D(p.h, {
    ACTIVITY_INVITE_EDUCATION_DISMISS: function (e) {
        return (O[e.key] = e.value), !0;
    },
});
var k = i(629016),
    U = i(994500),
    w = i(461213),
    G = i(741961),
    M = i(287809),
    L = i(531685),
    P = i(403362),
    F = i(562153),
    V = i(375708),
    W = i(323837);
let B = [];
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
            -1 === B.indexOf(e) &&
            (m.default.track(A.HAw.SHOW_TUTORIAL, { tutorial: "activity-invite-nux-inline", application_id: e }),
            B.push(e));
    }
    componentWillUnmount() {
        null !== this.timeout && clearTimeout(this.timeout);
    }
    handleDismissInviteEducation = () => {
        let { activity: e } = this.props;
        null != e && null != e.application_id && I.dismissForApplicationId(e.application_id);
    };
    render() {
        let { activity: e } = this.props;
        return (0, n.jsxs)("div", {
            className: a()(W.F4, { [W.gV]: this.state.fadeIn }),
            children: [
                (0, n.jsx)("div", { className: W.GZ }),
                (0, n.jsx)("span", {
                    children: V.intl.format(V.t["i/MoCt"], {
                        game: e.name,
                        dismissOnClick: this.handleDismissInviteEducation,
                    }),
                }),
            ],
        });
    }
}
function H(e) {
    let {
            activityInviteEducationActivity: t,
            isFocused: i,
            typingUsers: s,
            className: r,
            channel: d,
            isThreadCreation: o,
            renderDots: u,
            isInTextChannel: h = !1,
        } = e,
        { rateLimitPerUser: p } = d,
        m = l.useRef(null),
        A = l.useRef(null),
        [I, f] = l.useState(!1),
        E = l.useCallback(() => {
            if (null == m.current || null == A.current) return;
            let e = m.current.getBoundingClientRect();
            A.current.scrollWidth + 48 > e.width ? f(!0) : f(!1);
        }, []);
    (0, g.g)(m, E, [], { enabled: h }), (0, g.g)(A, E, [], { enabled: h });
    let [v, x, S] = s,
        T = "";
    1 === s.length
        ? (T = V.intl.format(V.t.lJ9sZX, { a: v }))
        : 2 === s.length
          ? (T = V.intl.format(V.t.rB0CUa, { a: v, b: x }))
          : 3 === s.length
            ? (T = V.intl.format(V.t.StKThj, { a: v, b: x, c: S }))
            : s.length > 3 && (T = V.intl.format(V.t.Q8lUnE, {}));
    let b = I && s.length > 0 && s.length <= 3 ? V.intl.format(V.t["qD/0qZ"], {}) : T,
        _ = s.length > 0 || p > 0,
        y = !_ && null != t,
        C = null;
    return (
        _
            ? (C = (0, n.jsxs)("div", {
                  className: a()(W.IW, { "stop-animation": !i, [W.Il]: h }, r),
                  children: [
                      (0, n.jsxs)("div", {
                          className: W.y5,
                          ref: m,
                          children: [
                              s.length > 0 &&
                                  !1 !== u &&
                                  (0, n.jsx)(c.n, { className: W.gO, dotRadius: 3.5, themed: !0 }),
                              (0, n.jsx)("span", { className: W.Qq, "aria-hidden": !0, children: b }),
                              (0, n.jsx)("span", {
                                  className: W.Qq,
                                  style: { position: "absolute", visibility: "hidden" },
                                  "aria-hidden": !0,
                                  ref: A,
                                  children: T,
                              }),
                          ],
                      }),
                      (0, n.jsx)(N, { channel: d, isThreadCreation: o }),
                  ],
              }))
            : y && null != t && (C = (0, n.jsx)(q, { activity: t, isFocused: i })),
        (0, n.jsxs)(n.Fragment, {
            children: [
                C,
                (0, n.jsx)("span", { className: W.y4, "aria-live": "polite", "aria-atomic": !0, children: T }),
            ],
        })
    );
}
function Z(e) {
    let t = (0, o.bG)([G.A], () => G.A.getTypingUsers(e.id)),
        i = (0, o.bG)([M.default], () => M.default.getCurrentUser());
    return d()(t)
        .keys()
        .filter((e) => e !== i?.id)
        .reject((e) => U.A.isBlockedOrIgnored(e))
        .map((e) => M.default.getUser(e))
        .filter(P.Vq)
        .map((t) => F.Ay.getName(e.guild_id, e.id, t))
        .value();
}
function Q(e) {
    let t = (0, o.bG)([w.A], () => w.A.findActivity((e) => null != e.application_id));
    return (0, o.bG)([R, v.A, U.A, k.A], () =>
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
            if (null == t || null == i || !(0, E.A)(i, A.jUm.JOIN) || null == r) return !1;
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
            ActivityInviteEducationStore: R,
            ApplicationStore: v.A,
            RelationshipStore: U.A,
            GamePartyStore: k.A,
        }),
    )
        ? t
        : null;
}
function X(e) {
    let { channel: t, isThreadCreation: i = !1, ...l } = e,
        s = Z(t),
        a = {
            ...l,
            baseTextColor: (0, h.r)(u.A.colors.INTERACTIVE_TEXT_DEFAULT).hex(),
            activeTextColor: (0, h.r)(u.A.colors.INTERACTIVE_TEXT_DEFAULT).hex(),
            activityInviteEducationActivity: Q(t),
            typingUsers: i ? [] : s,
            isFocused: (0, o.bG)([L.A], () => L.A.isFocused()),
            guildId: t.guild_id,
            channel: t,
            isThreadCreation: i,
        };
    return (0, n.jsx)(H, { ...a });
}
