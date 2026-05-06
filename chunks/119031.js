i.d(t, { aW: () => Q, Ay: () => X, rj: () => Z }), i(321073);
var n = i(627968),
    l = i(64700),
    s = i(503698),
    a = i.n(s),
    r = i(735438),
    o = i.n(r),
    d = i(17928),
    u = i(661531),
    c = i(863610),
    p = i(602853),
    h = i(228366),
    m = i(174459),
    A = i(652215);
let I = {
    dismissForApplicationId(e) {
        h.h.dispatch({ type: "ACTIVITY_INVITE_EDUCATION_DISMISS", key: e, value: !0 }),
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
function N(e) {
    let { isEnabled: t, rateLimitPerUser: i, isBypassSlowmode: s, slowmodeCooldownGuess: a } = e,
        [r, o] = l.useState(!1);
    if (
        (l.useEffect(() => {
            function e() {
                o(!0),
                    setTimeout(() => {
                        o(!1);
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
    let d = (0, y.VI)(i),
        u = (0, y.pS)(a, s),
        c = (0, n.jsxs)(S.E, {
            className: C.rk,
            variant: "text-xs/medium",
            color: r ? "text-feedback-critical" : "text-muted",
            tabularNumbers: !0,
            children: [(0, n.jsx)(T.x, { size: "xxs", color: "currentColor", className: C.Eq }), u],
        });
    return (0, n.jsx)(x.m, { text: d, children: (0, n.jsx)("div", { className: C.ns, children: c }) });
}
function j(e) {
    let { channel: t, isThreadCreation: i = !1 } = e,
        l = (0, d.bG)([b.A], () => b.A.getSlowmodeCooldownGuess(t.id, i ? b.R.CreateThread : b.R.SendMessage)),
        s = (0, y._i)(t, i ? b.R.CreateThread : b.R.SendMessage),
        { rateLimitPerUser: a } = t;
    return (0, n.jsx)(N, { isEnabled: a > 0, rateLimitPerUser: a, isBypassSlowmode: s, slowmodeCooldownGuess: l });
}
let O = {};
class D extends d.Ay.PersistedStore {
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
let R = new D(h.h, {
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
    V = i(562153),
    W = i(375708),
    F = i(323837);
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
            className: a()(F.F4, { [F.gV]: this.state.fadeIn }),
            children: [
                (0, n.jsx)("div", { className: F.GZ }),
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
function H(e) {
    let {
            activityInviteEducationActivity: t,
            isFocused: i,
            typingUsers: s,
            className: r,
            channel: o,
            isThreadCreation: d,
            renderDots: u,
            isInTextChannel: p = !1,
        } = e,
        { rateLimitPerUser: h } = o,
        m = l.useRef(null),
        A = l.useRef(null),
        [I, f] = l.useState(!1),
        E = l.useCallback(() => {
            if (null == m.current || null == A.current) return;
            let e = m.current.getBoundingClientRect();
            A.current.scrollWidth + 48 > e.width ? f(!0) : f(!1);
        }, []);
    if (((0, g.g)(m, E, [], { enabled: p }), (0, g.g)(A, E, [], { enabled: p }), 0 === s.length && !(h > 0)))
        return null != t ? (0, n.jsx)(q, { activity: t, isFocused: i }) : null;
    let [v, x, S] = s,
        T = "";
    1 === s.length
        ? (T = W.intl.format(W.t.lJ9sZX, { a: v }))
        : 2 === s.length
          ? (T = W.intl.format(W.t.rB0CUa, { a: v, b: x }))
          : 3 === s.length
            ? (T = W.intl.format(W.t.StKThj, { a: v, b: x, c: S }))
            : s.length > 3 && (T = W.intl.format(W.t.Q8lUnE, {}));
    let b = I && s.length > 0 && s.length <= 3 ? W.intl.format(W.t["qD/0qZ"], {}) : T;
    return (0, n.jsxs)("div", {
        className: a()(F.IW, { "stop-animation": !i, [F.Il]: p }, r),
        children: [
            (0, n.jsxs)("div", {
                className: F.y5,
                ref: m,
                children: [
                    s.length > 0 && !1 !== u && (0, n.jsx)(c.n, { className: F.gO, dotRadius: 3.5, themed: !0 }),
                    (0, n.jsx)("span", { className: F.Qq, "aria-live": "polite", "aria-atomic": !0, children: b }),
                    (0, n.jsx)("span", {
                        className: F.Qq,
                        style: { position: "absolute", visibility: "hidden" },
                        "aria-hidden": !0,
                        ref: A,
                        children: T,
                    }),
                ],
            }),
            (0, n.jsx)(j, { channel: o, isThreadCreation: d }),
        ],
    });
}
function Z(e) {
    let t = (0, d.bG)([G.A], () => G.A.getTypingUsers(e.id)),
        i = (0, d.bG)([M.default], () => M.default.getCurrentUser());
    return o()(t)
        .keys()
        .filter((e) => e !== i?.id)
        .reject((e) => U.A.isBlockedOrIgnored(e))
        .map((e) => M.default.getUser(e))
        .filter(P.Vq)
        .map((t) => V.Ay.getName(e.guild_id, e.id, t))
        .value();
}
function Q(e) {
    let t = (0, d.bG)([w.A], () => w.A.findActivity((e) => null != e.application_id));
    return (0, d.bG)([R, v.A, U.A, k.A], () =>
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
            let o = l.getApplication(r);
            return (
                !(
                    null == o ||
                    (0, f.n)(o, A.gfo.EMBEDDED) ||
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
            baseTextColor: (0, p.r)(u.A.colors.INTERACTIVE_TEXT_DEFAULT).hex(),
            activeTextColor: (0, p.r)(u.A.colors.INTERACTIVE_TEXT_DEFAULT).hex(),
            activityInviteEducationActivity: Q(t),
            typingUsers: i ? [] : s,
            isFocused: (0, d.bG)([L.A], () => L.A.isFocused()),
            guildId: t.guild_id,
            channel: t,
            isThreadCreation: i,
        };
    return (0, n.jsx)(H, { ...a });
}
