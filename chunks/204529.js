n.d(t, { A: () => J }), n(321073);
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(868285),
    o = n(939249),
    c = n(834730),
    d = n(191226),
    u = n(505527),
    m = n(960538),
    h = n(17928),
    g = n(606096),
    p = n(997146),
    A = n(866665),
    x = (n(506774), n(228366)),
    f = n(280450),
    E = n(956703),
    C = n(232835),
    _ = n(994500),
    I = n(966597),
    v = n(85109);
n(652215);
let N = null,
    j = null;
class T extends h.Ay.Store {
    static displayName = "BookmarkNudgeStore";
    initialize() {
        this.waitFor(f.default, C.A, E.A, _.A, v.A);
    }
    isNudging(e, t) {
        return N === `${e}:${t}`;
    }
}
let S = new T(x.h, {
    MESSAGE_REACTION_ADD: function (e) {
        if (!0 !== e.optimistic) return !1;
        let t = f.default.getId();
        if (
            e.userId !== t ||
            !I.A.getConfig({ location: "bookmark_nudge" }).enabled ||
            null == C.A.getMessage(e.channelId, e.messageId) ||
            null != v.A.getSavedMessage(e.channelId, e.messageId)
        )
            return !1;
        var n,
            i,
            l = ((n = e.channelId), (i = e.messageId), `${n}:${i}`);
        function s() {
            (N = null), (j = null), S.emitChange();
        }
        return (
            null != j && (clearTimeout(j), (N = null)),
            (j = setTimeout(function () {
                (N = l), S.emitChange(), (j = setTimeout(s, 1e4));
            }, 500)),
            !0
        );
    },
    BOOKMARK_NUDGE_DISMISS: function () {
        null != j && (clearTimeout(j), (j = null)), (N = null);
    },
});
var y = n(216623),
    b = n(519222),
    R = n(375708),
    L = n(435153),
    M = n(129821);
function k(e) {
    let { message: t, channel: n, useChatFontScaling: l, className: s } = e,
        { enabled: r } = I.A.useConfig({ location: "message_reactions" }),
        d = (0, h.bG)([v.A], () => null != v.A.getSavedMessage(n.id, t.id)),
        u = (0, h.bG)([S], () => S.isNudging(n.id, t.id));
    if (!r && !u) return null;
    let m = l ? M : L,
        x = d ? g.c : p.c;
    return (0, i.jsx)(A.m, {
        asContainer: !0,
        text: d ? R.intl.string(R.t.LHUP9D) : R.intl.string(R.t["9p3D9p"]),
        children: (0, i.jsxs)(o.D, {
            onClick: (e) => {
                e.stopPropagation(), d ? (0, b.r7)(n, t) : (0, b.wF)(n, t), u && (0, y.qx)();
            },
            className: a()(m.reactionBtn, m.bookmarkBtn, { [m.visible]: d || u }, s),
            children: [
                (0, i.jsx)(x, { size: "sm", color: "currentColor", className: m.icon }),
                (0, i.jsx)("span", {
                    className: a()(m.nudgeLabel, { [m.nudgeLabelExpanded]: u }),
                    "aria-hidden": !0,
                    children: (0, i.jsx)(c.E, {
                        variant: "text-sm/medium",
                        color: "currentColor",
                        children: R.intl.string(R.t["9p3D9p"]),
                    }),
                }),
            ],
        }),
    });
}
var O = n(860227),
    P = n(172218),
    D = n(317097),
    U = n(565645),
    G = n(114166),
    w = n(891734),
    H = n(831688);
let B = l.memo(function (e) {
        let t,
            n,
            {
                useChatFontScaling: l,
                emoji: s,
                className: r,
                count: o,
                me: c,
                me_burst: d,
                burst_count: m,
                burst_colors: h,
                readOnly: g,
                isLurking: p,
                isPendingMember: A,
                type: x,
                emojiSize: f,
            } = e,
            E = x === u.v.BURST,
            C = (0, H.IN)(c, d, x),
            _ = (0, w.g)(E && null != h ? h : []),
            I = l ? M : L,
            v = E ? m : o,
            N = (0, G.x)(v, H.$Z),
            j = {};
        if (E && null != _) {
            let { accentColor: e, backgroundColor: i, opacity: l } = _,
                s = (0, D.xp)(i ?? "", l) ?? "";
            C && (j.borderColor = i), (j.background = s), (t = e), (n = e);
        }
        let T = { minWidth: N, color: t, borderColor: n };
        return (0, i.jsxs)("div", {
            className: a()(I.reaction, I.reactionInner, r, { [I.reactionMe]: C, [I.reactionReadOnly]: g && !p && !A }),
            style: j,
            children: [
                (0, i.jsx)(U.A, { emojiId: s.id, emojiName: s.name, size: f, animated: E && s.animated }),
                (0, i.jsx)("div", { className: I.reactionCount, style: T, children: v }),
            ],
        });
    }),
    V = l.memo(function (e) {
        let { showImmediate: t, reactions: n, ...s } = e,
            [a, r] = l.useState(!1),
            [o, c] = l.useTransition(),
            d = l.useCallback(
                (e) => {
                    !e ||
                        a ||
                        o ||
                        c(() => {
                            r(!0);
                        });
                },
                [a, o],
            ),
            m = (0, P.K)(d),
            h = (a && !o) || t ? H.qT : B;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)("div", { ref: m }),
                n.map((e) =>
                    (0, i.jsx)(
                        h,
                        { ...s, ...e, emojiSize: "reaction" },
                        `${e.type === u.v.BURST ? "burst:" : ""}${e.emoji.id ?? 0}:${e.emoji.name}`,
                    ),
                ),
            ],
        });
    });
function F(e, t) {
    return (null == e && null == t) || e === t;
}
class z extends l.PureComponent {
    state = { disableTransitionAppear: !0, reactionsCount: this.props.message.reactions.length };
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
                isPendingMember: s,
                isForumToolbar: u,
                channel: h,
                className: g,
                reactionClassName: p,
                useChatFontScaling: A,
                forceHideReactionCreates: x,
                remainingReactions: f,
                combinedReactions: E,
                visibleReactionsCount: C,
            } = this.props,
            { disableTransitionAppear: _ } = this.state,
            I = A ? M : L;
        return C > 0
            ? (0, i.jsxs)(r.F, {
                  component: "div",
                  className: a()(I.reactions, g),
                  transitionAppear: !_,
                  role: "group",
                  transitionLeave: !1,
                  id: (0, O.JH)(e),
                  children: [
                      (0, i.jsx)(V, {
                          reactions: E,
                          message: e,
                          readOnly: n,
                          isLurking: l,
                          isPendingMember: s,
                          isForumToolbar: u,
                          useChatFontScaling: A,
                          className: p,
                      }),
                      f > 0 &&
                          (0, i.jsx)(o.D, {
                              onClick: (t) => {
                                  t.stopPropagation(), (0, d.$)(e);
                              },
                              className: a()(I.reaction, p, I.remainingReactions),
                              "aria-label": R.intl.string(R.t.lfIHs4),
                              children: (0, i.jsxs)(c.E, {
                                  className: I.reactionInner,
                                  variant: "text-sm/normal",
                                  children: ["+", f],
                              }),
                          }),
                      !t &&
                          !x &&
                          (0, i.jsx)(m.t, { message: e, channel: h, useChatFontScaling: A, className: I.forceShow }),
                      !u && (0, i.jsx)(k, { message: e, channel: h, useChatFontScaling: A }),
                  ],
              })
            : null;
    }
}
let J = function (e) {
    let { message: t, maxReactions: n, hoistReaction: s } = e,
        {
            combinedReactions: a,
            remainingReactions: r,
            visibleReactionsCount: o,
        } = l.useMemo(() => {
            let e = [],
                i = (function (e, t) {
                    if (null == t) return e;
                    let n = e.findIndex((e) => F(e.emoji.id, t?.id) && F(e.emoji.name, t?.name));
                    return n < 0 ? e : [e[n], ...e.slice(0, n), ...e.slice(n + 1)];
                })(t.reactions, s),
                l = null != n && n < i.length ? i.slice(0, n) : i,
                a = i.length - l.length,
                r = i.length;
            return (
                l.forEach((t) => {
                    t.burst_count > 0 && e.push({ ...t, type: u.v.BURST }),
                        t.count > 0 && e.push({ ...t, type: u.v.NORMAL }),
                        null != t.me_vote && --r;
                }),
                { combinedReactions: e, visibleReactionsCount: r, remainingReactions: a }
            );
        }, [s, n, t.reactions]);
    return (0, i.jsx)(z, { ...e, visibleReactionsCount: o, combinedReactions: a, remainingReactions: r });
};
