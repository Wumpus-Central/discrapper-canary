n.d(t, { A: () => C }), n(321073);
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(73939),
    o = n(939249),
    d = n(834730),
    c = n(505527),
    u = n(960538),
    m = n(860227),
    _ = n(866630),
    h = n(260821),
    p = n(985018),
    g = n(10585),
    A = n(471717);
let f = (e, t) => (null == e && null == t) || e === t;
class x extends l.PureComponent {
    state = { disableTransitionAppear: !0, reactionsCount: this.props.message.reactions.length, isHovered: !1 };
    static getDerivedStateFromProps(e, t) {
        let n = e.message.reactions.length;
        return 0 === t.reactionsCount && n > 0
            ? { disableTransitionAppear: !1, reactionsCount: n }
            : t.reactionsCount !== n
              ? { reactionsCount: n }
              : null;
    }
    render() {
        let {
                message: e,
                disableReactionCreates: t,
                disableReactionUpdates: n,
                isLurking: l,
                isPendingMember: a,
                isForumToolbar: c,
                channel: f,
                className: x,
                forceAddReactions: C,
                reactionClassName: E,
                useChatFontScaling: I,
                forceHideReactionCreates: v,
                remainingReactions: b,
                combinedReactions: T,
                visibleReactionsCount: S,
            } = this.props,
            { disableTransitionAppear: y } = this.state,
            N = I ? A : g,
            j = S > 0;
        if (!j && !C) return null;
        let L = C || j;
        return (0, i.jsxs)(r.F, {
            component: "div",
            className: s()(N.reactions, x),
            transitionAppear: !y,
            role: "group",
            transitionLeave: !1,
            id: (0, m.JH)(e),
            onMouseEnter: () => this.setState({ isHovered: !0 }),
            onMouseLeave: () => this.setState({ isHovered: !1 }),
            children: [
                (0, i.jsx)(_.A, {
                    reactions: T,
                    message: e,
                    readOnly: n,
                    isLurking: l,
                    isPendingMember: a,
                    isForumToolbar: c,
                    useChatFontScaling: I,
                    className: E,
                }),
                b > 0 &&
                    (0, i.jsx)(o.D, {
                        onClick: (t) => {
                            t.stopPropagation(), (0, h.$l)(f, e);
                        },
                        className: s()(N.reaction, E, N.remainingReactions),
                        "aria-label": p.intl.string(p.t.lfIHs4),
                        children: (0, i.jsxs)(d.E, {
                            className: N.reactionInner,
                            variant: "text-sm/normal",
                            children: ["+", b],
                        }),
                    }),
                !t &&
                    !v &&
                    (0, i.jsx)(u.t, {
                        tabIndex: L || this.state.isHovered ? 0 : -1,
                        message: e,
                        channel: f,
                        useChatFontScaling: I,
                        isHovered: this.state.isHovered,
                        className: s()({ [N.forceShow]: L }),
                    }),
            ],
        });
    }
}
let C = (e) => {
    let { message: t, maxReactions: n, hoistReaction: a } = e,
        {
            combinedReactions: s,
            remainingReactions: r,
            visibleReactionsCount: o,
        } = l.useMemo(() => {
            let e = [],
                i = ((e, t) => {
                    if (null == t) return e;
                    let n = e.findIndex((e) => f(e.emoji.id, t?.id) && f(e.emoji.name, t?.name));
                    return n < 0 ? e : [e[n], ...e.slice(0, n), ...e.slice(n + 1)];
                })(t.reactions, a),
                l = null != n && n < i.length ? i.slice(0, n) : i,
                s = i.length - l.length,
                r = i.length;
            return (
                l.forEach((t) => {
                    t.burst_count > 0 && e.push({ ...t, type: c.v.BURST }),
                        t.count > 0 && e.push({ ...t, type: c.v.NORMAL }),
                        null != t.me_vote && --r;
                }),
                { combinedReactions: e, visibleReactionsCount: r, remainingReactions: s }
            );
        }, [a, n, t.reactions]);
    return (0, i.jsx)(x, { ...e, visibleReactionsCount: o, combinedReactions: s, remainingReactions: r });
};
