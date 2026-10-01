(n.d(t, { A: () => en }), n(321073));
var i = n(477900),
    l = n(582128),
    s = n(503698),
    r = n.n(s),
    a = n(868285),
    o = n(939249),
    d = n(834730),
    c = n(191226),
    u = n(505527),
    m = n(960538),
    h = n(17928),
    g = n(606096),
    p = n(997146),
    A = n(866665),
    x = n(73153),
    f = n(280450),
    I = n(956703),
    E = n(232835),
    v = n(994500),
    C = n(269073),
    _ = n(85109),
    j = n(652215);
let N = null,
    y = {};
function T(e, t) {
    return `${e}:${t}`;
}
class S extends h.Ay.Store {
    static displayName = "BookmarkNudgeStore";
    initialize() {
        this.waitFor(f.default, E.A, I.A, v.A, _.A);
    }
    isNudging(e, t) {
        return N === T(e, t);
    }
    hasRecentlyReacted(e, t) {
        let n = y[T(e, t)];
        return null != n && Date.now() - n < 9e5;
    }
}
let b = new S(x.h, {
    MESSAGE_REACTION_ADD: function (e) {
        var t, n, i;
        if (!0 !== e.optimistic) return !1;
        let l = f.default.getId();
        if (e.userId !== l) return !1;
        if (((y[T(e.channelId, e.messageId)] = Date.now()), null != N || !(0, C.U_)("bookmark_nudge"))) return !0;
        let s = E.A.getMessage(e.channelId, e.messageId);
        return (
            !(
                !(
                    null == s ||
                    null != _.A.getSavedMessage(e.channelId, e.messageId) ||
                    3 > s.reactions.reduce((e, t) => e + t.count + t.burst_count, 0)
                ) &&
                ((t = s),
                (n = l),
                ((i = t).attachments.some((e) => null != e.content_type && /^(image|video)\//.test(e.content_type)) ||
                    i.embeds.some(
                        (e) =>
                            e.type === j.Auw.IMAGE ||
                            e.type === j.Auw.VIDEO ||
                            e.type === j.Auw.GIFV ||
                            null != e.image ||
                            null != e.video ||
                            (null != e.images && e.images.length > 0),
                    )) &&
                    (v.A.isFriend(t.author.id) ||
                        Array.from(
                            I.A.getKnownReactorIds(
                                t.id,
                                t.reactions.map((e) => e.emoji),
                            ),
                        ).some((e) => e !== n && v.A.isFriend(e))))
            ) || ((N = T(e.channelId, e.messageId)), !0)
        );
    },
    CHANNEL_SELECT: function () {
        if (null == N) return !1;
        N = null;
    },
});
var k = n(738125),
    R = n(554146),
    L = n(43105),
    M = n(826673),
    P = n(501419),
    D = n(49999),
    O = n(375708),
    U = n(936037);
let G = R.M.FOR_LATER_REACTION_COACHMARK;
function w(e) {
    let { targetElementRef: t, onDismiss: n } = e;
    return (0, i.jsx)(L.A, {
        targetElementRef: t,
        gradientColor: "purple",
        position: "top",
        align: "left",
        shouldShow: !0,
        scrollBehavior: "close",
        caretConfig: { align: "start" },
        onRequestClose: () => n(D.i.USER_DISMISS),
        title: O.intl.string(O.t.qPbFK2),
        body: O.intl.string(O.t.FMaaaB),
        actions: [{ text: O.intl.string(O.t["NX+WJN"]), onClick: () => n(D.i.USER_DISMISS) }],
        graphic: { type: "image", src: U },
    });
}
var B = n(539206),
    V = n(356974),
    H = n(988626);
function F(e) {
    let { message: t, channel: n, useChatFontScaling: s, className: a } = e,
        d = (0, C.jv)("message_reactions"),
        c = (0, h.bG)([_.A], () => _.A.getSavedMessage(n.id, t.id)),
        u = null != c && null == c.saveData.dueAt,
        m = null != c && null != c.saveData.dueAt,
        x = (0, h.bG)([b], () => b.isNudging(n.id, t.id)),
        I = l.useRef(null),
        { isCoachmarkVisible: E, dismissCoachmark: v } = (function (e) {
            let t = (0, M.HX)(G),
                n = (0, h.bG)([_.A], () => _.A.getSavedMessageCount() > 0),
                i = e && !t && !n,
                [s, r] = l.useState(!1);
            i && !s ? r(!0) : !e && s && r(!1);
            let [a, o] = l.useState(!1),
                d = e && !a && (i || s),
                c = l.useCallback((e) => {
                    (0, M.Dr)(G, { dismissAction: e });
                }, []),
                u = l.useCallback(
                    (e) => {
                        (o(!0), c(e));
                    },
                    [c],
                );
            return (
                l.useEffect(() => {
                    n && !t && c(D.i.INDIRECT_ACTION);
                }, [n, t, c]),
                l.useEffect(() => {
                    d && ((0, P.Wx)(G), c(D.i.AUTO_DISMISS));
                }, [d, c]),
                { isCoachmarkVisible: d, dismissCoachmark: u }
            );
        })(x);
    if ((!(0, h.bG)([b], () => b.hasRecentlyReacted(n.id, t.id)) && !u) || !d || t.author.id === f.default.getId() || m)
        return null;
    let j = s ? H : V,
        N = u ? g.BookmarkIcon : p.c;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(A.m, {
                asContainer: !0,
                text: u ? O.intl.string(O.t.LHUP9D) : O.intl.string(O.t["9p3D9p"]),
                children: (0, i.jsx)(o.D, {
                    innerRef: I,
                    onClick: (e) => {
                        (e.stopPropagation(),
                            u ? (0, B.r)(n, t) : (0, B.w)(n, t, k.r.REACTION_BUTTON),
                            E && v(D.i.TAKE_ACTION));
                    },
                    className: r()(j.reactionBtn, j.bookmarkBtn, { [j.visible]: u || x }, a),
                    children: (0, i.jsx)(N, { size: "sm", color: "currentColor", className: j.icon }),
                }),
            }),
            E && (0, i.jsx)(w, { targetElementRef: I, onDismiss: v }),
        ],
    });
}
var z = n(860227),
    Y = n(172218),
    K = n(317097),
    W = n(565645),
    J = n(114166),
    X = n(891734),
    q = n(815807),
    Z = n(831688);
let $ = l.memo(function (e) {
        let t,
            n,
            {
                useChatFontScaling: l,
                emoji: s,
                className: a,
                count: o,
                me: d,
                me_burst: c,
                burst_count: m,
                burst_colors: h,
                readOnly: g,
                isLurking: p,
                isPendingMember: A,
                type: x,
                emojiSize: f,
            } = e,
            I = x === u.v.BURST,
            E = (0, q.IN)(d, c, x),
            v = (0, X.g)(I && null != h ? h : []),
            C = l ? H : V,
            _ = I ? m : o,
            j = (0, J.x)(_, Z.$),
            N = {};
        if (I && null != v) {
            let { accentColor: e, backgroundColor: i, opacity: l } = v,
                s = (0, K.xp)(i ?? "", l) ?? "";
            (E && (N.borderColor = i), (N.background = s), (t = e), (n = e));
        }
        let y = { minWidth: j, color: t, borderColor: n };
        return (0, i.jsxs)("div", {
            className: r()(C.reaction, C.reactionInner, a, { [C.reactionMe]: E, [C.reactionReadOnly]: g && !p && !A }),
            style: N,
            children: [
                (0, i.jsx)(W.A, { emojiId: s.id, emojiName: s.name, size: f, animated: I && s.animated }),
                (0, i.jsx)("div", { className: C.reactionCount, style: y, children: _ }),
            ],
        });
    }),
    Q = l.memo(function (e) {
        let { showImmediate: t, reactions: n, ...s } = e,
            [r, a] = l.useState(!1),
            [o, d] = l.useTransition(),
            c = l.useCallback(
                (e) => {
                    !e ||
                        r ||
                        o ||
                        d(() => {
                            a(!0);
                        });
                },
                [r, o],
            ),
            m = (0, Y.K)(c),
            h = (r && !o) || t ? Z.q : $;
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
function ee(e, t) {
    return (null == e && null == t) || e === t;
}
class et extends l.PureComponent {
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
                combinedReactions: I,
                visibleReactionsCount: E,
            } = this.props,
            { disableTransitionAppear: v } = this.state,
            C = A ? H : V;
        return E > 0
            ? (0, i.jsxs)(a.F, {
                  component: "div",
                  className: r()(C.reactions, g),
                  transitionAppear: !v,
                  role: "group",
                  transitionLeave: !1,
                  id: (0, z.JH)(e),
                  children: [
                      (0, i.jsx)(Q, {
                          reactions: I,
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
                                  (t.stopPropagation(), (0, c.$)(e));
                              },
                              className: r()(C.reaction, p, C.remainingReactions),
                              "aria-label": O.intl.string(O.t.lfIHs4),
                              children: (0, i.jsxs)(d.E, {
                                  className: C.reactionInner,
                                  variant: "text-sm/normal",
                                  children: ["+", f],
                              }),
                          }),
                      !t &&
                          !x &&
                          (0, i.jsx)(m.t, { message: e, channel: h, useChatFontScaling: A, className: C.forceShow }),
                      !u && (0, i.jsx)(F, { message: e, channel: h, useChatFontScaling: A }),
                  ],
              })
            : null;
    }
}
let en = function (e) {
    let { message: t, maxReactions: n, hoistReaction: s } = e,
        {
            combinedReactions: r,
            remainingReactions: a,
            visibleReactionsCount: o,
        } = l.useMemo(() => {
            let e = [],
                i = (function (e, t) {
                    if (null == t) return e;
                    let n = e.findIndex((e) => ee(e.emoji.id, t?.id) && ee(e.emoji.name, t?.name));
                    return n < 0 ? e : [e[n], ...e.slice(0, n), ...e.slice(n + 1)];
                })(t.reactions, s),
                l = null != n && n < i.length ? i.slice(0, n) : i,
                r = i.length - l.length,
                a = i.length;
            return (
                l.forEach((t) => {
                    (t.burst_count > 0 && e.push({ ...t, type: u.v.BURST }),
                        t.count > 0 && e.push({ ...t, type: u.v.NORMAL }),
                        null != t.me_vote && --a);
                }),
                { combinedReactions: e, visibleReactionsCount: a, remainingReactions: r }
            );
        }, [s, n, t.reactions]);
    return (0, i.jsx)(et, { ...e, visibleReactionsCount: o, combinedReactions: r, remainingReactions: a });
};
