n.d(t, { A: () => I }), n(896048), n(321073);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(73939),
    l = n(397927),
    c = n(505527),
    u = n(960538),
    d = n(860227),
    f = n(644249),
    p = n(260821),
    _ = n(985018),
    h = n(233080),
    m = n(710504);
function g(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function E(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                g(e, t, n[t]);
            });
    }
    return e;
}
function b(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function y(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : b(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let O = (e, t) => (null == e && null == t) || e === t,
    A = (e, t) =>
        e.findIndex((e) => O(e.emoji.id, null == t ? void 0 : t.id) && O(e.emoji.name, null == t ? void 0 : t.name)),
    v = (e, t) => {
        if (null == t) return e;
        let n = A(e, t);
        return n < 0 ? e : [e[n], ...e.slice(0, n), ...e.slice(n + 1)];
    };
class S extends i.PureComponent {
    static getDerivedStateFromProps(e, t) {
        let n = e.message.reactions.length;
        return 0 === t.reactionsCount && n > 0
            ? {
                  disableTransitionAppear: !1,
                  reactionsCount: n,
              }
            : t.reactionsCount !== n
              ? { reactionsCount: n }
              : null;
    }
    render() {
        let {
                message: e,
                disableReactionCreates: t,
                disableReactionUpdates: n,
                isLurking: i,
                isGuest: a,
                isPendingMember: c,
                isForumToolbar: g,
                channel: E,
                className: b,
                forceAddReactions: y,
                reactionClassName: O,
                useChatFontScaling: A,
                forceHideReactionCreates: v,
                remainingReactions: S,
                combinedReactions: I,
                visibleReactionsCount: T,
            } = this.props,
            { disableTransitionAppear: C } = this.state,
            N = A ? m : h,
            R = T > 0;
        if (!R && !y) return null;
        let w = y || R;
        return (0, r.jsxs)(o.F, {
            component: "div",
            className: s()(N.reactions, b),
            transitionAppear: !C,
            role: "group",
            transitionLeave: !1,
            id: (0, d.JH)(e),
            onMouseEnter: () => this.setState({ isHovered: !0 }),
            onMouseLeave: () => this.setState({ isHovered: !1 }),
            children: [
                (0, r.jsx)(f.A, {
                    reactions: I,
                    message: e,
                    readOnly: n,
                    isLurking: i,
                    isGuest: a,
                    isPendingMember: c,
                    isForumToolbar: g,
                    useChatFontScaling: A,
                    className: O,
                }),
                S > 0 &&
                    (0, r.jsx)(l.DUT, {
                        onClick: (t) => {
                            t.stopPropagation(), (0, p.$l)(E, e);
                        },
                        className: s()(N.reaction, O, N.remainingReactions),
                        "aria-label": _.intl.string(_.t.lfIHs4),
                        children: (0, r.jsxs)(l.Text, {
                            className: N.reactionInner,
                            variant: "text-sm/normal",
                            children: ["+", S],
                        }),
                    }),
                !t &&
                    !v &&
                    (0, r.jsx)(u.t, {
                        tabIndex: w || this.state.isHovered ? 0 : -1,
                        message: e,
                        channel: E,
                        useChatFontScaling: A,
                        isHovered: this.state.isHovered,
                        className: s()({ [N.forceShow]: w }),
                    }),
            ],
        });
    }
    constructor(...e) {
        super(...e),
            g(this, "state", {
                disableTransitionAppear: !0,
                reactionsCount: this.props.message.reactions.length,
                isHovered: !1,
            });
    }
}
let I = (e) => {
    let { message: t, maxReactions: n, hoistReaction: a } = e,
        {
            combinedReactions: s,
            remainingReactions: o,
            visibleReactionsCount: l,
        } = i.useMemo(() => {
            let e = [],
                r = v(t.reactions, a),
                i = null != n && n < r.length ? r.slice(0, n) : r,
                s = r.length - i.length,
                o = r.length;
            return (
                i.forEach((t) => {
                    t.burst_count > 0 && e.push(y(E({}, t), { type: c.v.BURST })),
                        t.count > 0 && e.push(y(E({}, t), { type: c.v.NORMAL })),
                        null != t.me_vote && --o;
                }),
                {
                    combinedReactions: e,
                    visibleReactionsCount: o,
                    remainingReactions: s,
                }
            );
        }, [a, n, t.reactions]);
    return (0, r.jsx)(
        S,
        y(E({}, e), {
            visibleReactionsCount: l,
            combinedReactions: s,
            remainingReactions: o,
        }),
    );
};
