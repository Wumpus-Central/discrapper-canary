n.d(t, { Ay: () => L, aW: () => O, rj: () => D }), n(321073);
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(735438),
    o = n.n(r),
    c = n(311907),
    d = n(827734),
    u = n(397927),
    h = n(657299),
    m = n(770178),
    A = n(84),
    p = n(587895),
    g = n(144945),
    f = n(912996),
    _ = n(994500),
    E = n(461213),
    C = n(741961),
    x = n(287809),
    S = n(531685),
    T = n(954571),
    I = n(403362),
    N = n(562153),
    v = n(652215),
    y = n(985018),
    b = n(612986);
let R = [];
class j extends l.PureComponent {
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
            -1 === R.indexOf(e) &&
            (T.default.track(v.HAw.SHOW_TUTORIAL, { tutorial: "activity-invite-nux-inline", application_id: e }),
            R.push(e));
    }
    componentWillUnmount() {
        null !== this.timeout && clearTimeout(this.timeout);
    }
    handleDismissInviteEducation = () => {
        let { activity: e } = this.props;
        null != e && null != e.application_id && h.A.dismissForApplicationId(e.application_id);
    };
    render() {
        let { activity: e } = this.props;
        return (0, i.jsxs)("div", {
            className: s()(b.F4, { [b.gV]: this.state.fadeIn }),
            children: [
                (0, i.jsx)("div", { className: b.GZ }),
                (0, i.jsx)("span", {
                    children: y.intl.format(y.t["i/MoCt"], {
                        game: e.name,
                        dismissOnClick: this.handleDismissInviteEducation,
                    }),
                }),
            ],
        });
    }
}
function M(e) {
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
        { rateLimitPerUser: A } = o,
        p = l.useRef(null),
        f = l.useRef(null),
        [_, E] = l.useState(!1),
        C = l.useCallback(() => {
            if (null == p.current || null == f.current) return;
            let e = p.current.getBoundingClientRect();
            f.current.scrollWidth + 48 > e.width ? E(!0) : E(!1);
        }, []);
    if (((0, m.g)(p, C, [], { enabled: h }), (0, m.g)(f, C, [], { enabled: h }), 0 === a.length && !(A > 0)))
        return null != t ? (0, i.jsx)(j, { activity: t, isFocused: n }) : null;
    let [x, S, T] = a,
        I = "";
    1 === a.length
        ? (I = y.intl.format(y.t.lJ9sZX, { a: x }))
        : 2 === a.length
          ? (I = y.intl.format(y.t.rB0CUa, { a: x, b: S }))
          : 3 === a.length
            ? (I = y.intl.format(y.t.StKThj, { a: x, b: S, c: T }))
            : a.length > 3 && (I = y.intl.format(y.t.Q8lUnE, {}));
    let N = _ && a.length > 0 && a.length <= 3 ? y.intl.format(y.t["qD/0qZ"], {}) : I;
    return (0, i.jsxs)("div", {
        className: s()(b.IW, { "stop-animation": !n, [b.Il]: h }, r),
        children: [
            (0, i.jsxs)("div", {
                className: b.y5,
                ref: p,
                children: [
                    a.length > 0 && !1 !== d && (0, i.jsx)(u.nvX, { className: b.gO, dotRadius: 3.5, themed: !0 }),
                    (0, i.jsx)("span", { className: b.Qq, "aria-live": "polite", "aria-atomic": !0, children: N }),
                    (0, i.jsx)("span", {
                        className: b.Qq,
                        style: { position: "absolute", visibility: "hidden" },
                        "aria-hidden": !0,
                        ref: f,
                        children: I,
                    }),
                ],
            }),
            (0, i.jsx)(g.A, { channel: o, isThreadCreation: c }),
        ],
    });
}
function D(e) {
    let t = (0, c.bG)([C.A], () => C.A.getTypingUsers(e.id)),
        n = (0, c.bG)([x.default], () => x.default.getCurrentUser());
    return o()(t)
        .keys()
        .filter((e) => e !== n?.id)
        .reject((e) => _.A.isBlockedOrIgnored(e))
        .map((e) => x.default.getUser(e))
        .filter(I.Vq)
        .map((t) => N.Ay.getName(e.guild_id, e.id, t))
        .value();
}
function O(e) {
    let t = (0, c.bG)([E.A], () => E.A.findActivity((e) => null != e.application_id));
    return (0, c.bG)([f.A, p.A, _.A], () => (0, A.A)(e, t, f.A, p.A, _.A)) ? t : null;
}
function L(e) {
    let { channel: t, isThreadCreation: n = !1, ...l } = e,
        a = D(t),
        s = {
            ...l,
            baseTextColor: (0, u.rdh)(d.A.colors.INTERACTIVE_TEXT_DEFAULT).hex(),
            activeTextColor: (0, u.rdh)(d.A.colors.INTERACTIVE_TEXT_DEFAULT).hex(),
            activityInviteEducationActivity: O(t),
            typingUsers: n ? [] : a,
            isFocused: (0, c.bG)([S.A], () => S.A.isFocused()),
            guildId: t.guild_id,
            channel: t,
            isThreadCreation: n,
        };
    return (0, i.jsx)(M, { ...s });
}
