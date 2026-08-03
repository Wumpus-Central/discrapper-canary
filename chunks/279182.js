n.d(t, { A: () => $ }), n(321073);
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
    _ = n(232835),
    C = n(994500),
    I = n(269073),
    v = n(85109),
    N = n(652215);
let j = null;
class T extends h.Ay.Store {
    static displayName = "BookmarkNudgeStore";
    initialize() {
        this.waitFor(f.default, _.A, E.A, C.A, v.A);
    }
    isNudging(e, t) {
        return j === `${e}:${t}`;
    }
}
let S = new T(x.h, {
    MESSAGE_REACTION_ADD: function (e) {
        var t, n, i, l, s;
        if (!0 !== e.optimistic || null != j) return !1;
        let a = f.default.getId();
        if (e.userId !== a || !(0, I.U_)("bookmark_nudge")) return !1;
        let r = _.A.getMessage(e.channelId, e.messageId);
        return (
            !(
                null == r ||
                null != v.A.getSavedMessage(e.channelId, e.messageId) ||
                3 > r.reactions.reduce((e, t) => e + t.count + t.burst_count, 0)
            ) &&
            ((i = r),
            (l = a),
            !!(
                ((s = i).attachments.some((e) => null != e.content_type && /^(image|video)\//.test(e.content_type)) ||
                    s.embeds.some(
                        (e) =>
                            e.type === N.Auw.IMAGE ||
                            e.type === N.Auw.VIDEO ||
                            e.type === N.Auw.GIFV ||
                            null != e.image ||
                            null != e.video ||
                            (null != e.images && e.images.length > 0),
                    )) &&
                (C.A.isFriend(i.author.id) ||
                    Array.from(
                        E.A.getKnownReactorIds(
                            i.id,
                            i.reactions.map((e) => e.emoji),
                        ),
                    ).some((e) => e !== l && C.A.isFriend(e)))
            )) &&
            ((t = e.channelId), (n = e.messageId), (j = `${t}:${n}`), !0)
        );
    },
    CHANNEL_SELECT: function () {
        if (null == j) return !1;
        j = null;
    },
});
var y = n(554146),
    b = n(43105),
    R = n(826673),
    L = n(367727),
    M = n(49999),
    k = n(375708),
    O = n(936037);
let P = y.M.FOR_LATER_REACTION_COACHMARK;
function D(e) {
    let { targetElementRef: t, onDismiss: n } = e;
    return (0, i.jsx)(b.A, {
        targetElementRef: t,
        gradientColor: "purple",
        position: "top",
        align: "left",
        shouldShow: !0,
        scrollBehavior: "close",
        caretConfig: { align: "start" },
        onRequestClose: () => n(M.i.USER_DISMISS),
        title: k.intl.string(k.t.qPbFK2),
        body: k.intl.string(k.t.FMaaaB),
        actions: [{ text: k.intl.string(k.t["NX+WJN"]), onClick: () => n(M.i.USER_DISMISS) }],
        graphic: { type: "image", src: O },
    });
}
var U = n(519222),
    G = n(435153),
    w = n(129821);
function H(e) {
    let { message: t, channel: n, useChatFontScaling: s, className: r } = e,
        c = (0, I.jv)("message_reactions"),
        d = (0, h.bG)([v.A], () => null != v.A.getSavedMessage(n.id, t.id)),
        u = (0, h.bG)([S], () => S.isNudging(n.id, t.id)),
        m = l.useRef(null),
        { isCoachmarkVisible: x, dismissCoachmark: E } = (function (e) {
            let t = (0, R.HX)(P),
                n = (0, h.bG)([v.A], () => v.A.getSavedMessageCount() > 0),
                i = e && !t && !n,
                [s, a] = l.useState(!1);
            i && !s ? a(!0) : !e && s && a(!1);
            let [r, o] = l.useState(!1),
                c = e && !r && (i || s),
                d = l.useCallback((e) => {
                    (0, R.Dr)(P, { dismissAction: e });
                }, []),
                u = l.useCallback(
                    (e) => {
                        o(!0), d(e);
                    },
                    [d],
                );
            return (
                l.useEffect(() => {
                    n && !t && d(M.i.INDIRECT_ACTION);
                }, [n, t, d]),
                l.useEffect(() => {
                    c && ((0, L.Wx)(P), d(M.i.AUTO_DISMISS));
                }, [c, d]),
                { isCoachmarkVisible: c, dismissCoachmark: u }
            );
        })(u),
        _ = t.reactions.some((e) => e.me || e.me_burst),
        [C, N] = l.useState(_);
    if ((_ && !C && N(!0), (!C && !_) || !c || t.author.id === f.default.getId())) return null;
    let j = s ? w : G,
        T = d ? g.c : p.c;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(A.m, {
                asContainer: !0,
                text: d ? k.intl.string(k.t.LHUP9D) : k.intl.string(k.t["9p3D9p"]),
                children: (0, i.jsx)(o.D, {
                    innerRef: m,
                    onClick: (e) => {
                        e.stopPropagation(), d ? (0, U.r7)(n, t) : (0, U.wF)(n, t), x && E(M.i.TAKE_ACTION);
                    },
                    className: a()(j.reactionBtn, j.bookmarkBtn, { [j.visible]: d || u }, r),
                    children: (0, i.jsx)(T, { size: "sm", color: "currentColor", className: j.icon }),
                }),
            }),
            x && (0, i.jsx)(D, { targetElementRef: m, onDismiss: E }),
        ],
    });
}
var V = n(860227),
    B = n(172218),
    F = n(317097),
    z = n(565645),
    J = n(114166),
    Y = n(891734),
    K = n(815807),
    W = n(831688);
let X = l.memo(function (e) {
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
            _ = (0, K.IN)(c, d, x),
            C = (0, Y.g)(E && null != h ? h : []),
            I = l ? w : G,
            v = E ? m : o,
            N = (0, J.x)(v, W.$),
            j = {};
        if (E && null != C) {
            let { accentColor: e, backgroundColor: i, opacity: l } = C,
                s = (0, F.xp)(i ?? "", l) ?? "";
            _ && (j.borderColor = i), (j.background = s), (t = e), (n = e);
        }
        let T = { minWidth: N, color: t, borderColor: n };
        return (0, i.jsxs)("div", {
            className: a()(I.reaction, I.reactionInner, r, { [I.reactionMe]: _, [I.reactionReadOnly]: g && !p && !A }),
            style: j,
            children: [
                (0, i.jsx)(z.A, { emojiId: s.id, emojiName: s.name, size: f, animated: E && s.animated }),
                (0, i.jsx)("div", { className: I.reactionCount, style: T, children: v }),
            ],
        });
    }),
    Z = l.memo(function (e) {
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
            m = (0, B.K)(d),
            h = (a && !o) || t ? W.q : X;
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
function q(e, t) {
    return (null == e && null == t) || e === t;
}
class Q extends l.PureComponent {
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
            I = A ? w : G;
        return _ > 0
            ? (0, i.jsxs)(r.F, {
                  component: "div",
                  className: a()(I.reactions, g),
                  transitionAppear: !C,
                  role: "group",
                  transitionLeave: !1,
                  id: (0, V.JH)(e),
                  children: [
                      (0, i.jsx)(Z, {
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
                              "aria-label": k.intl.string(k.t.lfIHs4),
                              children: (0, i.jsxs)(c.E, {
                                  className: I.reactionInner,
                                  variant: "text-sm/normal",
                                  children: ["+", f],
                              }),
                          }),
                      !t &&
                          !x &&
                          (0, i.jsx)(m.t, { message: e, channel: h, useChatFontScaling: A, className: I.forceShow }),
                      !u && (0, i.jsx)(H, { message: e, channel: h, useChatFontScaling: A }),
                  ],
              })
            : null;
    }
}
let $ = function (e) {
    let { message: t, maxReactions: n, hoistReaction: s } = e,
        {
            combinedReactions: a,
            remainingReactions: r,
            visibleReactionsCount: o,
        } = l.useMemo(() => {
            let e = [],
                i = (function (e, t) {
                    if (null == t) return e;
                    let n = e.findIndex((e) => q(e.emoji.id, t?.id) && q(e.emoji.name, t?.name));
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
    return (0, i.jsx)(Q, { ...e, visibleReactionsCount: o, combinedReactions: a, remainingReactions: r });
};
