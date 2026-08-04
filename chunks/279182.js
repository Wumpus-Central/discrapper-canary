n.d(t, { A: () => ee }), n(321073);
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
var y = n(738125),
    b = n(554146),
    R = n(43105),
    L = n(826673),
    M = n(367727),
    k = n(49999),
    O = n(375708),
    P = n(936037);
let D = b.M.FOR_LATER_REACTION_COACHMARK;
function U(e) {
    let { targetElementRef: t, onDismiss: n } = e;
    return (0, i.jsx)(R.A, {
        targetElementRef: t,
        gradientColor: "purple",
        position: "top",
        align: "left",
        shouldShow: !0,
        scrollBehavior: "close",
        caretConfig: { align: "start" },
        onRequestClose: () => n(k.i.USER_DISMISS),
        title: O.intl.string(O.t.qPbFK2),
        body: O.intl.string(O.t.FMaaaB),
        actions: [{ text: O.intl.string(O.t["NX+WJN"]), onClick: () => n(k.i.USER_DISMISS) }],
        graphic: { type: "image", src: P },
    });
}
var G = n(519222),
    w = n(435153),
    H = n(129821);
function V(e) {
    let { message: t, channel: n, useChatFontScaling: s, className: r } = e,
        c = (0, I.jv)("message_reactions"),
        d = (0, h.bG)([v.A], () => v.A.getSavedMessage(n.id, t.id)),
        u = null != d && null == d.saveData.dueAt,
        m = null != d && null != d.saveData.dueAt,
        x = (0, h.bG)([S], () => S.isNudging(n.id, t.id)),
        E = l.useRef(null),
        { isCoachmarkVisible: _, dismissCoachmark: C } = (function (e) {
            let t = (0, L.HX)(D),
                n = (0, h.bG)([v.A], () => v.A.getSavedMessageCount() > 0),
                i = e && !t && !n,
                [s, a] = l.useState(!1);
            i && !s ? a(!0) : !e && s && a(!1);
            let [r, o] = l.useState(!1),
                c = e && !r && (i || s),
                d = l.useCallback((e) => {
                    (0, L.Dr)(D, { dismissAction: e });
                }, []),
                u = l.useCallback(
                    (e) => {
                        o(!0), d(e);
                    },
                    [d],
                );
            return (
                l.useEffect(() => {
                    n && !t && d(k.i.INDIRECT_ACTION);
                }, [n, t, d]),
                l.useEffect(() => {
                    c && ((0, M.Wx)(D), d(k.i.AUTO_DISMISS));
                }, [c, d]),
                { isCoachmarkVisible: c, dismissCoachmark: u }
            );
        })(x),
        N = t.reactions.some((e) => e.me || e.me_burst),
        [j, T] = l.useState(N);
    if ((N && !j && T(!0), (!j && !N) || !c || t.author.id === f.default.getId() || m)) return null;
    let b = s ? H : w,
        R = u ? g.c : p.c;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(A.m, {
                asContainer: !0,
                text: u ? O.intl.string(O.t.LHUP9D) : O.intl.string(O.t["9p3D9p"]),
                children: (0, i.jsx)(o.D, {
                    innerRef: E,
                    onClick: (e) => {
                        e.stopPropagation(),
                            u ? (0, G.r7)(n, t) : (0, G.wF)(n, t, y.r.REACTION_BUTTON),
                            _ && C(k.i.TAKE_ACTION);
                    },
                    className: a()(b.reactionBtn, b.bookmarkBtn, { [b.visible]: u || x }, r),
                    children: (0, i.jsx)(R, { size: "sm", color: "currentColor", className: b.icon }),
                }),
            }),
            _ && (0, i.jsx)(U, { targetElementRef: E, onDismiss: C }),
        ],
    });
}
var B = n(860227),
    F = n(172218),
    z = n(317097),
    J = n(565645),
    Y = n(114166),
    K = n(891734),
    W = n(815807),
    X = n(831688);
let Z = l.memo(function (e) {
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
            _ = (0, W.IN)(c, d, x),
            C = (0, K.g)(E && null != h ? h : []),
            I = l ? H : w,
            v = E ? m : o,
            N = (0, Y.x)(v, X.$),
            j = {};
        if (E && null != C) {
            let { accentColor: e, backgroundColor: i, opacity: l } = C,
                s = (0, z.xp)(i ?? "", l) ?? "";
            _ && (j.borderColor = i), (j.background = s), (t = e), (n = e);
        }
        let T = { minWidth: N, color: t, borderColor: n };
        return (0, i.jsxs)("div", {
            className: a()(I.reaction, I.reactionInner, r, { [I.reactionMe]: _, [I.reactionReadOnly]: g && !p && !A }),
            style: j,
            children: [
                (0, i.jsx)(J.A, { emojiId: s.id, emojiName: s.name, size: f, animated: E && s.animated }),
                (0, i.jsx)("div", { className: I.reactionCount, style: T, children: v }),
            ],
        });
    }),
    q = l.memo(function (e) {
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
            m = (0, F.K)(d),
            h = (a && !o) || t ? X.q : Z;
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
function Q(e, t) {
    return (null == e && null == t) || e === t;
}
class $ extends l.PureComponent {
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
            I = A ? H : w;
        return _ > 0
            ? (0, i.jsxs)(r.F, {
                  component: "div",
                  className: a()(I.reactions, g),
                  transitionAppear: !C,
                  role: "group",
                  transitionLeave: !1,
                  id: (0, B.JH)(e),
                  children: [
                      (0, i.jsx)(q, {
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
                      !u && (0, i.jsx)(V, { message: e, channel: h, useChatFontScaling: A }),
                  ],
              })
            : null;
    }
}
let ee = function (e) {
    let { message: t, maxReactions: n, hoistReaction: s } = e,
        {
            combinedReactions: a,
            remainingReactions: r,
            visibleReactionsCount: o,
        } = l.useMemo(() => {
            let e = [],
                i = (function (e, t) {
                    if (null == t) return e;
                    let n = e.findIndex((e) => Q(e.emoji.id, t?.id) && Q(e.emoji.name, t?.name));
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
    return (0, i.jsx)($, { ...e, visibleReactionsCount: o, combinedReactions: a, remainingReactions: r });
};
