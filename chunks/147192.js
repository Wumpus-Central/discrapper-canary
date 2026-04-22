n.d(t, { Ay: () => w, aW: () => O, rj: () => P }), n(321073);
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(735438),
    o = n.n(r),
    c = n(311907),
    d = n(827734),
    u = n(863610),
    h = n(602853),
    m = n(657299),
    A = n(770178),
    g = n(84),
    p = n(587895),
    _ = n(144945),
    f = n(912996),
    E = n(629016),
    C = n(994500),
    x = n(461213),
    S = n(741961),
    I = n(287809),
    N = n(531685),
    v = n(954571),
    T = n(403362),
    y = n(562153),
    b = n(652215),
    j = n(985018),
    R = n(323837);
let M = [];
class L extends l.PureComponent {
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
            -1 === M.indexOf(e) &&
            (v.default.track(b.HAw.SHOW_TUTORIAL, { tutorial: "activity-invite-nux-inline", application_id: e }),
            M.push(e));
    }
    componentWillUnmount() {
        null !== this.timeout && clearTimeout(this.timeout);
    }
    handleDismissInviteEducation = () => {
        let { activity: e } = this.props;
        null != e && null != e.application_id && m.A.dismissForApplicationId(e.application_id);
    };
    render() {
        let { activity: e } = this.props;
        return (0, i.jsxs)("div", {
            className: s()(R.F4, { [R.gV]: this.state.fadeIn }),
            children: [
                (0, i.jsx)("div", { className: R.GZ }),
                (0, i.jsx)("span", {
                    children: j.intl.format(j.t["i/MoCt"], {
                        game: e.name,
                        dismissOnClick: this.handleDismissInviteEducation,
                    }),
                }),
            ],
        });
    }
}
function D(e) {
    let {
            activityInviteEducationActivity: t,
            isFocused: n,
            typingUsers: a,
            className: r,
            channel: o,
            isThreadCreation: c,
            renderDots: d,
            isInTextChannel: h = !1,
        } = e,
        { rateLimitPerUser: m } = o,
        g = l.useRef(null),
        p = l.useRef(null),
        [f, E] = l.useState(!1),
        C = l.useCallback(() => {
            if (null == g.current || null == p.current) return;
            let e = g.current.getBoundingClientRect();
            p.current.scrollWidth + 48 > e.width ? E(!0) : E(!1);
        }, []);
    if (((0, A.g)(g, C, [], { enabled: h }), (0, A.g)(p, C, [], { enabled: h }), 0 === a.length && !(m > 0)))
        return null != t ? (0, i.jsx)(L, { activity: t, isFocused: n }) : null;
    let [x, S, I] = a,
        N = "";
    1 === a.length
        ? (N = j.intl.format(j.t.lJ9sZX, { a: x }))
        : 2 === a.length
          ? (N = j.intl.format(j.t.rB0CUa, { a: x, b: S }))
          : 3 === a.length
            ? (N = j.intl.format(j.t.StKThj, { a: x, b: S, c: I }))
            : a.length > 3 && (N = j.intl.format(j.t.Q8lUnE, {}));
    let v = f && a.length > 0 && a.length <= 3 ? j.intl.format(j.t["qD/0qZ"], {}) : N;
    return (0, i.jsxs)("div", {
        className: s()(R.IW, { "stop-animation": !n, [R.Il]: h }, r),
        children: [
            (0, i.jsxs)("div", {
                className: R.y5,
                ref: g,
                children: [
                    a.length > 0 && !1 !== d && (0, i.jsx)(u.n, { className: R.gO, dotRadius: 3.5, themed: !0 }),
                    (0, i.jsx)("span", { className: R.Qq, "aria-live": "polite", "aria-atomic": !0, children: v }),
                    (0, i.jsx)("span", {
                        className: R.Qq,
                        style: { position: "absolute", visibility: "hidden" },
                        "aria-hidden": !0,
                        ref: p,
                        children: N,
                    }),
                ],
            }),
            (0, i.jsx)(_.A, { channel: o, isThreadCreation: c }),
        ],
    });
}
function P(e) {
    let t = (0, c.bG)([S.A], () => S.A.getTypingUsers(e.id)),
        n = (0, c.bG)([I.default], () => I.default.getCurrentUser());
    return o()(t)
        .keys()
        .filter((e) => e !== n?.id)
        .reject((e) => C.A.isBlockedOrIgnored(e))
        .map((e) => I.default.getUser(e))
        .filter(T.Vq)
        .map((t) => y.Ay.getName(e.guild_id, e.id, t))
        .value();
}
function O(e) {
    let t = (0, c.bG)([x.A], () => x.A.findActivity((e) => null != e.application_id));
    return (0, c.bG)([f.A, p.A, C.A, E.A], () =>
        (0, g.A)({
            channel: e,
            activity: t,
            ActivityInviteEducationStore: f.A,
            ApplicationStore: p.A,
            RelationshipStore: C.A,
            GamePartyStore: E.A,
        }),
    )
        ? t
        : null;
}
function w(e) {
    let { channel: t, isThreadCreation: n = !1, ...l } = e,
        a = P(t),
        s = {
            ...l,
            baseTextColor: (0, h.r)(d.A.colors.INTERACTIVE_TEXT_DEFAULT).hex(),
            activeTextColor: (0, h.r)(d.A.colors.INTERACTIVE_TEXT_DEFAULT).hex(),
            activityInviteEducationActivity: O(t),
            typingUsers: n ? [] : a,
            isFocused: (0, c.bG)([N.A], () => N.A.isFocused()),
            guildId: t.guild_id,
            channel: t,
            isThreadCreation: n,
        };
    return (0, i.jsx)(D, { ...s });
}
