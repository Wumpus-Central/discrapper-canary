n.d(t, { A: () => en }), n(321073);
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
    x = n(228366),
    f = n(280450),
    E = n(956703),
    I = n(232835),
    C = n(994500),
    _ = n(269073),
    v = n(85109),
    N = n(652215);
let j = null,
    T = {};
function S(e, t) {
    return `${e}:${t}`;
}
class y extends h.Ay.Store {
    static displayName = "BookmarkNudgeStore";
    initialize() {
        this.waitFor(f.default, I.A, E.A, C.A, v.A);
    }
    isNudging(e, t) {
        return j === S(e, t);
    }
    hasRecentlyReacted(e, t) {
        let n = T[S(e, t)];
        return null != n && Date.now() - n < 9e5;
    }
}
let b = new y(x.h, {
    MESSAGE_REACTION_ADD: function (e) {
        var t, n, i;
        if (!0 !== e.optimistic) return !1;
        let l = f.default.getId();
        if (e.userId !== l) return !1;
        if (((T[S(e.channelId, e.messageId)] = Date.now()), null != j || !(0, _.U_)("bookmark_nudge"))) return !0;
        let s = I.A.getMessage(e.channelId, e.messageId);
        return (
            !(
                !(
                    null == s ||
                    null != v.A.getSavedMessage(e.channelId, e.messageId) ||
                    3 > s.reactions.reduce((e, t) => e + t.count + t.burst_count, 0)
                ) &&
                ((t = s),
                (n = l),
                ((i = t).attachments.some((e) => null != e.content_type && /^(image|video)\//.test(e.content_type)) ||
                    i.embeds.some(
                        (e) =>
                            e.type === N.Auw.IMAGE ||
                            e.type === N.Auw.VIDEO ||
                            e.type === N.Auw.GIFV ||
                            null != e.image ||
                            null != e.video ||
                            (null != e.images && e.images.length > 0),
                    )) &&
                    (C.A.isFriend(t.author.id) ||
                        Array.from(
                            E.A.getKnownReactorIds(
                                t.id,
                                t.reactions.map((e) => e.emoji),
                            ),
                        ).some((e) => e !== n && C.A.isFriend(e))))
            ) || ((j = S(e.channelId, e.messageId)), !0)
        );
    },
    CHANNEL_SELECT: function () {
        if (null == j) return !1;
        j = null;
    },
});
var R = n(738125),
    L = n(554146),
    k = n(43105),
    M = n(826673),
    O = n(367727),
    P = n(49999),
    D = n(375708),
    U = n(936037);
let G = L.M.FOR_LATER_REACTION_COACHMARK;
function w(e) {
    let { targetElementRef: t, onDismiss: n } = e;
    return (0, i.jsx)(k.A, {
        targetElementRef: t,
        gradientColor: "purple",
        position: "top",
        align: "left",
        shouldShow: !0,
        scrollBehavior: "close",
        caretConfig: { align: "start" },
        onRequestClose: () => n(P.i.USER_DISMISS),
        title: D.intl.string(D.t.qPbFK2),
        body: D.intl.string(D.t.FMaaaB),
        actions: [{ text: D.intl.string(D.t["NX+WJN"]), onClick: () => n(P.i.USER_DISMISS) }],
        graphic: { type: "image", src: U },
    });
}
var H = n(519222),
    V = n(356974),
    B = n(988626);
function F(e) {
    let { message: t, channel: n, useChatFontScaling: s, className: r } = e,
        c = (0, _.jv)("message_reactions"),
        d = (0, h.bG)([v.A], () => v.A.getSavedMessage(n.id, t.id)),
        u = null != d && null == d.saveData.dueAt,
        m = null != d && null != d.saveData.dueAt,
        x = (0, h.bG)([b], () => b.isNudging(n.id, t.id)),
        E = l.useRef(null),
        { isCoachmarkVisible: I, dismissCoachmark: C } = (function (e) {
            let t = (0, M.HX)(G),
                n = (0, h.bG)([v.A], () => v.A.getSavedMessageCount() > 0),
                i = e && !t && !n,
                [s, a] = l.useState(!1);
            i && !s ? a(!0) : !e && s && a(!1);
            let [r, o] = l.useState(!1),
                c = e && !r && (i || s),
                d = l.useCallback((e) => {
                    (0, M.Dr)(G, { dismissAction: e });
                }, []),
                u = l.useCallback(
                    (e) => {
                        o(!0), d(e);
                    },
                    [d],
                );
            return (
                l.useEffect(() => {
                    n && !t && d(P.i.INDIRECT_ACTION);
                }, [n, t, d]),
                l.useEffect(() => {
                    c && ((0, O.Wx)(G), d(P.i.AUTO_DISMISS));
                }, [c, d]),
                { isCoachmarkVisible: c, dismissCoachmark: u }
            );
        })(x);
    if ((!(0, h.bG)([b], () => b.hasRecentlyReacted(n.id, t.id)) && !u) || !c || t.author.id === f.default.getId() || m)
        return null;
    let N = s ? B : V,
        j = u ? g.BookmarkIcon : p.c;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(A.m, {
                asContainer: !0,
                text: u ? D.intl.string(D.t.LHUP9D) : D.intl.string(D.t["9p3D9p"]),
                children: (0, i.jsx)(o.D, {
                    innerRef: E,
                    onClick: (e) => {
                        e.stopPropagation(),
                            u ? (0, H.r7)(n, t) : (0, H.wF)(n, t, R.r.REACTION_BUTTON),
                            I && C(P.i.TAKE_ACTION);
                    },
                    className: a()(N.reactionBtn, N.bookmarkBtn, { [N.visible]: u || x }, r),
                    children: (0, i.jsx)(j, { size: "sm", color: "currentColor", className: N.icon }),
                }),
            }),
            I && (0, i.jsx)(w, { targetElementRef: E, onDismiss: C }),
        ],
    });
}
var z = n(860227),
    J = n(172218),
    Y = n(317097),
    K = n(565645),
    W = n(114166),
    X = n(891734),
    Z = n(815807),
    q = n(831688);
let Q = l.memo(function (e) {
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
            I = (0, Z.IN)(c, d, x),
            C = (0, X.g)(E && null != h ? h : []),
            _ = l ? B : V,
            v = E ? m : o,
            N = (0, W.x)(v, q.$),
            j = {};
        if (E && null != C) {
            let { accentColor: e, backgroundColor: i, opacity: l } = C,
                s = (0, Y.xp)(i ?? "", l) ?? "";
            I && (j.borderColor = i), (j.background = s), (t = e), (n = e);
        }
        let T = { minWidth: N, color: t, borderColor: n };
        return (0, i.jsxs)("div", {
            className: a()(_.reaction, _.reactionInner, r, { [_.reactionMe]: I, [_.reactionReadOnly]: g && !p && !A }),
            style: j,
            children: [
                (0, i.jsx)(K.A, { emojiId: s.id, emojiName: s.name, size: f, animated: E && s.animated }),
                (0, i.jsx)("div", { className: _.reactionCount, style: T, children: v }),
            ],
        });
    }),
    $ = l.memo(function (e) {
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
            m = (0, J.K)(d),
            h = (a && !o) || t ? q.q : Q;
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
                combinedReactions: E,
                visibleReactionsCount: I,
            } = this.props,
            { disableTransitionAppear: C } = this.state,
            _ = A ? B : V;
        return I > 0
            ? (0, i.jsxs)(r.F, {
                  component: "div",
                  className: a()(_.reactions, g),
                  transitionAppear: !C,
                  role: "group",
                  transitionLeave: !1,
                  id: (0, z.JH)(e),
                  children: [
                      (0, i.jsx)($, {
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
                              className: a()(_.reaction, p, _.remainingReactions),
                              "aria-label": D.intl.string(D.t.lfIHs4),
                              children: (0, i.jsxs)(c.E, {
                                  className: _.reactionInner,
                                  variant: "text-sm/normal",
                                  children: ["+", f],
                              }),
                          }),
                      !t &&
                          !x &&
                          (0, i.jsx)(m.t, { message: e, channel: h, useChatFontScaling: A, className: _.forceShow }),
                      !u && (0, i.jsx)(F, { message: e, channel: h, useChatFontScaling: A }),
                  ],
              })
            : null;
    }
}
let en = function (e) {
    let { message: t, maxReactions: n, hoistReaction: s } = e,
        {
            combinedReactions: a,
            remainingReactions: r,
            visibleReactionsCount: o,
        } = l.useMemo(() => {
            let e = [],
                i = (function (e, t) {
                    if (null == t) return e;
                    let n = e.findIndex((e) => ee(e.emoji.id, t?.id) && ee(e.emoji.name, t?.name));
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
    return (0, i.jsx)(et, { ...e, visibleReactionsCount: o, combinedReactions: a, remainingReactions: r });
};
