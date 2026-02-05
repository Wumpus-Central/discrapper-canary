n.d(t, { A: () => x }), n(321073);
var i = n(627968),
    l = n(64700),
    a = n(503698),
    r = n.n(a),
    s = n(73939),
    o = n(397927),
    d = n(505527),
    c = n(960538),
    u = n(860227),
    m = n(866630),
    _ = n(260821),
    h = n(985018),
    p = n(233080),
    g = n(710504);
let A = (e, t) => (null == e && null == t) || e === t;
class f extends l.PureComponent {
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
                isForumToolbar: d,
                channel: A,
                className: f,
                forceAddReactions: x,
                reactionClassName: E,
                useChatFontScaling: C,
                forceHideReactionCreates: I,
                remainingReactions: T,
                combinedReactions: v,
                visibleReactionsCount: N,
            } = this.props,
            { disableTransitionAppear: S } = this.state,
            b = C ? g : p,
            y = N > 0;
        if (!y && !x) return null;
        let j = x || y;
        return (0, i.jsxs)(s.F, {
            component: "div",
            className: r()(b.reactions, f),
            transitionAppear: !S,
            role: "group",
            transitionLeave: !1,
            id: (0, u.JH)(e),
            onMouseEnter: () => this.setState({ isHovered: !0 }),
            onMouseLeave: () => this.setState({ isHovered: !1 }),
            children: [
                (0, i.jsx)(m.A, {
                    reactions: v,
                    message: e,
                    readOnly: n,
                    isLurking: l,
                    isPendingMember: a,
                    isForumToolbar: d,
                    useChatFontScaling: C,
                    className: E,
                }),
                T > 0 &&
                    (0, i.jsx)(o.DUT, {
                        onClick: (t) => {
                            t.stopPropagation(), (0, _.$l)(A, e);
                        },
                        className: r()(b.reaction, E, b.remainingReactions),
                        "aria-label": h.intl.string(h.t.lfIHs4),
                        children: (0, i.jsxs)(o.Text, {
                            className: b.reactionInner,
                            variant: "text-sm/normal",
                            children: ["+", T],
                        }),
                    }),
                !t &&
                    !I &&
                    (0, i.jsx)(c.t, {
                        tabIndex: j || this.state.isHovered ? 0 : -1,
                        message: e,
                        channel: A,
                        useChatFontScaling: C,
                        isHovered: this.state.isHovered,
                        className: r()({ [b.forceShow]: j }),
                    }),
            ],
        });
    }
}
let x = (e) => {
    let { message: t, maxReactions: n, hoistReaction: a } = e,
        {
            combinedReactions: r,
            remainingReactions: s,
            visibleReactionsCount: o,
        } = l.useMemo(() => {
            let e = [],
                i = ((e, t) => {
                    if (null == t) return e;
                    let n = e.findIndex((e) => A(e.emoji.id, t?.id) && A(e.emoji.name, t?.name));
                    return n < 0 ? e : [e[n], ...e.slice(0, n), ...e.slice(n + 1)];
                })(t.reactions, a),
                l = null != n && n < i.length ? i.slice(0, n) : i,
                r = i.length - l.length,
                s = i.length;
            return (
                l.forEach((t) => {
                    t.burst_count > 0 && e.push({ ...t, type: d.v.BURST }),
                        t.count > 0 && e.push({ ...t, type: d.v.NORMAL }),
                        null != t.me_vote && --s;
                }),
                { combinedReactions: e, visibleReactionsCount: s, remainingReactions: r }
            );
        }, [a, n, t.reactions]);
    return (0, i.jsx)(f, { ...e, visibleReactionsCount: o, combinedReactions: r, remainingReactions: s });
};
