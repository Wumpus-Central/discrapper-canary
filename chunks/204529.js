n.d(t, { A: () => W }), n(321073);
var i = n(477900),
    l = n(582128),
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
    x = n(506774),
    f = n(228366),
    E = n(280450),
    _ = n(956703),
    C = n(232835),
    I = n(994500),
    v = n(8506),
    N = n(85109),
    j = n(652215);
let T = "BookmarkNudgeLastShownAt",
    S = null,
    y = null;
class b extends h.Ay.Store {
    static displayName = "BookmarkNudgeStore";
    initialize() {
        this.waitFor(E.default, C.A, _.A, I.A, N.A);
    }
    isNudging(e, t) {
        return S === `${e}:${t}`;
    }
}
let R = new b(f.h, {
    MESSAGE_REACTION_ADD: function (e) {
        if (!0 !== e.optimistic) return !1;
        let t = E.default.getId();
        if (e.userId !== t || !(0, v.A9)("bookmark_nudge")) return !1;
        let n = C.A.getMessage(e.channelId, e.messageId);
        if (null == n || null != N.A.getSavedMessage(e.channelId, e.messageId)) return !1;
        {
            let e = Date.now(),
                i = e - (x.w.get(T) ?? 0);
            if (
                i < 36e5 ||
                (function (e, t) {
                    let n = 0;
                    for (let i of ((e.attachments.some(
                        (e) => null != e.content_type && /^(image|video)\//.test(e.content_type),
                    ) ||
                        e.embeds.some(
                            (e) =>
                                e.type === j.Auw.IMAGE ||
                                e.type === j.Auw.VIDEO ||
                                e.type === j.Auw.GIFV ||
                                null != e.image ||
                                null != e.video ||
                                (null != e.images && e.images.length > 0),
                        )) &&
                        (n += 1),
                    I.A.isFriend(e.author.id) && (n += 1),
                    _.A.getKnownReactorIds(
                        e.id,
                        e.reactions.map((e) => e.emoji),
                    )))
                        i !== t && I.A.isFriend(i) && (n += 1);
                    return n;
                })(n, t) < (i < 864e5 ? 2 : 1)
            )
                return !1;
            x.w.set(T, e);
        }
        var i,
            l,
            s = ((i = e.channelId), (l = e.messageId), `${i}:${l}`);
        function a() {
            (S = null), (y = null), R.emitChange();
        }
        return (
            null != y && (clearTimeout(y), (S = null)),
            (y = setTimeout(function () {
                (S = s), R.emitChange(), (y = setTimeout(a, 1e4));
            }, 500)),
            !0
        );
    },
    BOOKMARK_NUDGE_DISMISS: function () {
        null != y && (clearTimeout(y), (y = null)), (S = null);
    },
});
var M = n(216623),
    L = n(519222),
    O = n(375708),
    k = n(435153),
    P = n(129821);
function D(e) {
    let { message: t, channel: n, useChatFontScaling: l, className: s } = e,
        r = (0, v.jv)("message_reactions"),
        d = (0, h.bG)([N.A], () => null != N.A.getSavedMessage(n.id, t.id)),
        u = (0, h.bG)([R], () => R.isNudging(n.id, t.id));
    if (!r && !u) return null;
    let m = l ? P : k,
        x = d ? g.c : p.c;
    return (0, i.jsx)(A.m, {
        asContainer: !0,
        text: d ? O.intl.string(O.t.LHUP9D) : O.intl.string(O.t["9p3D9p"]),
        children: (0, i.jsxs)(o.D, {
            onClick: (e) => {
                e.stopPropagation(), d ? (0, L.r7)(n, t) : (0, L.wF)(n, t), u && (0, M.qx)();
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
                        children: O.intl.string(O.t["9p3D9p"]),
                    }),
                }),
            ],
        }),
    });
}
var U = n(860227),
    G = n(172218),
    w = n(317097),
    H = n(565645),
    V = n(114166),
    B = n(891734),
    F = n(831688);
let z = l.memo(function (e) {
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
            _ = (0, F.IN)(c, d, x),
            C = (0, B.g)(E && null != h ? h : []),
            I = l ? P : k,
            v = E ? m : o,
            N = (0, V.x)(v, F.$Z),
            j = {};
        if (E && null != C) {
            let { accentColor: e, backgroundColor: i, opacity: l } = C,
                s = (0, w.xp)(i ?? "", l) ?? "";
            _ && (j.borderColor = i), (j.background = s), (t = e), (n = e);
        }
        let T = { minWidth: N, color: t, borderColor: n };
        return (0, i.jsxs)("div", {
            className: a()(I.reaction, I.reactionInner, r, { [I.reactionMe]: _, [I.reactionReadOnly]: g && !p && !A }),
            style: j,
            children: [
                (0, i.jsx)(H.A, { emojiId: s.id, emojiName: s.name, size: f, animated: E && s.animated }),
                (0, i.jsx)("div", { className: I.reactionCount, style: T, children: v }),
            ],
        });
    }),
    J = l.memo(function (e) {
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
            m = (0, G.K)(d),
            h = (a && !o) || t ? F.qT : z;
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
function Y(e, t) {
    return (null == e && null == t) || e === t;
}
class K extends l.PureComponent {
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
                visibleReactionsCount: _,
            } = this.props,
            { disableTransitionAppear: C } = this.state,
            I = A ? P : k;
        return _ > 0
            ? (0, i.jsxs)(r.F, {
                  component: "div",
                  className: a()(I.reactions, g),
                  transitionAppear: !C,
                  role: "group",
                  transitionLeave: !1,
                  id: (0, U.JH)(e),
                  children: [
                      (0, i.jsx)(J, {
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
                              "aria-label": O.intl.string(O.t.lfIHs4),
                              children: (0, i.jsxs)(c.E, {
                                  className: I.reactionInner,
                                  variant: "text-sm/normal",
                                  children: ["+", f],
                              }),
                          }),
                      !t &&
                          !x &&
                          (0, i.jsx)(m.t, { message: e, channel: h, useChatFontScaling: A, className: I.forceShow }),
                      !u && (0, i.jsx)(D, { message: e, channel: h, useChatFontScaling: A }),
                  ],
              })
            : null;
    }
}
let W = function (e) {
    let { message: t, maxReactions: n, hoistReaction: s } = e,
        {
            combinedReactions: a,
            remainingReactions: r,
            visibleReactionsCount: o,
        } = l.useMemo(() => {
            let e = [],
                i = (function (e, t) {
                    if (null == t) return e;
                    let n = e.findIndex((e) => Y(e.emoji.id, t?.id) && Y(e.emoji.name, t?.name));
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
    return (0, i.jsx)(K, { ...e, visibleReactionsCount: o, combinedReactions: a, remainingReactions: r });
};
