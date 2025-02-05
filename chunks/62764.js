n.d(t, { Z: () => L }), n(47120);
var i = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
    s = n(852229),
    o = n(442837),
    c = n(52826),
    d = n(481060),
    u = n(904245),
    h = n(593472),
    p = n(393238),
    m = n(330726),
    f = n(48929),
    g = n(333535),
    _ = n(566006),
    C = n(443877),
    x = n(60174),
    v = n(216337),
    E = n(920888),
    I = n(287151),
    b = n(569471),
    Z = n(346479),
    N = n(592125),
    T = n(934415),
    S = n(456269),
    j = n(109590),
    y = n(228392),
    A = n(981631),
    P = n(388032),
    R = n(811994),
    M = n(636804);
function L(e) {
    let { postId: t, isFirstMessage: n, isLastItem: a = !1, parentChannelId: L } = e,
        { ref: k, width: O } = (0, p.Z)(),
        [D, w] = l.useState(3),
        [U, B] = l.useState(!n),
        [F, H] = (0, m.Z)(!1, 2000),
        G = (0, o.e7)([N.Z], () => N.Z.getChannel(t), [t]),
        { firstMessage: V } = (0, j.cl)(G),
        z = (0, o.e7)([b.Z], () => b.Z.hasJoined(t)),
        { disableReactionUpdates: W, disableReactionCreates: q, isLurking: Y, isGuest: K, isPendingMember: X } = (0, C.Z)(G),
        Q = (0, o.e7)([N.Z], () => N.Z.getChannel(L)),
        J = (0, S.Bs)(Q),
        $ = (0, o.e7)([f.Z], () => f.Z.shouldDisplayPrompt(t) && !0 === n, [t, n]),
        ee = l.useCallback(
            (e) => {
                let t = e[0];
                if (null != t && n) {
                    let e = t.intersectionRect,
                        n = t.boundingClientRect;
                    B((e.bottom - e.top) / (n.bottom - n.top) < 1);
                }
            },
            [n]
        );
    l.useLayoutEffect(() => {
        let e = k.current;
        if (null == e || !n) return;
        let t = new IntersectionObserver(ee, { threshold: 1 });
        return (
            t.observe(e),
            () => {
                t.disconnect();
            }
        );
    });
    let [et, en] = l.useState(!0);
    if (
        (l.useEffect(() => {
            null != O && (w(Math.floor((O - 280) / 58)), en(!1));
        }, [O]),
        null == G || null == V)
    )
        return null;
    let ei = V.reactions.length > 0,
        el = () => {
            z ? Z.Z.leaveThread(G, 'Forum Toolbar') : Z.Z.joinThread(G, 'Forum Toolbar');
        },
        ea = () => {
            (0, y.B)({
                postId: G.id,
                location: { section: A.jXE.CHANNEL_HEADER }
            }),
                (0, s.J)((0, T.EO)(G, Q)),
                H(!0);
        },
        er = () => {
            u.Z.jumpToMessage({
                channelId: G.id,
                messageId: G.id,
                flash: !0,
                jumpType: h.SR.INSTANT
            });
        },
        es = z ? d.dz2 : d.Dkj;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)('div', {
                className: r()(R.container, { [R.header]: U }),
                ref: k,
                children: [
                    (0, i.jsxs)('div', {
                        className: r()(R.reactButtons, { [R.loading]: et }),
                        children: [
                            !ei &&
                                !q &&
                                null != J &&
                                (0, i.jsx)('div', {
                                    className: M.reactions,
                                    children: (0, i.jsx)(I.le, {
                                        message: V,
                                        readOnly: !1,
                                        useChatFontScaling: !1,
                                        isLurking: Y,
                                        isGuest: K,
                                        isPendingMember: X,
                                        emoji: J,
                                        type: _.O.NORMAL,
                                        hideCount: !0,
                                        count: 0,
                                        me: !1,
                                        burst_count: 0,
                                        me_burst: !1,
                                        emojiSize: 'reactionLarge'
                                    })
                                }),
                            (0, i.jsx)(E.Z, {
                                message: V,
                                channel: G,
                                disableReactionCreates: !0,
                                disableReactionUpdates: W,
                                isLurking: Y,
                                isGuest: K,
                                isPendingMember: X,
                                maxReactions: D,
                                className: R.reactions,
                                useChatFontScaling: !1,
                                isForumToolbar: !0,
                                forceHideReactionCreates: !0
                            }),
                            !q &&
                                (0, i.jsx)(x.X, {
                                    type: _.O.NORMAL,
                                    message: V,
                                    channel: G,
                                    useChatFontScaling: !1,
                                    className: r()(R.addReactButton, { [R.hasNoReactions]: !ei }),
                                    isForumToolbar: !0,
                                    children: !ei && P.intl.string(P.t.xpOyTE)
                                })
                        ]
                    }),
                    (0, i.jsxs)('div', {
                        className: R.buttons,
                        children: [
                            (0, i.jsx)(d.ua7, {
                                text: P.intl.string(P.t.F7oeDg),
                                children: (e) =>
                                    (0, i.jsxs)(d.zxk, {
                                        ...e,
                                        look: d.zxk.Looks.BLANK,
                                        size: d.zxk.Sizes.SMALL,
                                        onClick: el,
                                        className: R.button,
                                        innerClassName: r()(R.buttonInner, { [R.active]: z }),
                                        children: [
                                            (0, i.jsx)(es, {
                                                size: 'xs',
                                                color: 'currentColor'
                                            }),
                                            z ? P.intl.string(P.t['7OkUzs']) : P.intl.string(P.t['3aOv+v'])
                                        ]
                                    })
                            }),
                            (0, i.jsx)(d.ua7, {
                                text: P.intl.string(P.t.WqhZsr),
                                children: (e) =>
                                    (0, i.jsxs)(d.zxk, {
                                        ...e,
                                        look: d.zxk.Looks.BLANK,
                                        size: d.zxk.Sizes.SMALL,
                                        onClick: ea,
                                        className: R.button,
                                        innerClassName: R.buttonInner,
                                        children: [
                                            F
                                                ? (0, i.jsx)(d.dz2, {
                                                      size: 'custom',
                                                      color: 'currentColor',
                                                      width: 16,
                                                      height: 16
                                                  })
                                                : (0, i.jsx)(d.xPt, {
                                                      size: 'custom',
                                                      color: 'currentColor',
                                                      width: 16,
                                                      height: 16
                                                  }),
                                            F ? P.intl.string(P.t['t5VZ8/']) : null
                                        ]
                                    })
                            }),
                            !n &&
                                (0, i.jsx)(d.ua7, {
                                    text: P.intl.string(P.t.nFP4oa),
                                    children: (e) =>
                                        (0, i.jsx)(d.zxk, {
                                            ...e,
                                            look: d.zxk.Looks.BLANK,
                                            size: d.zxk.Sizes.SMALL,
                                            onClick: er,
                                            className: R.button,
                                            innerClassName: R.buttonInner,
                                            children: (0, i.jsx)(c.Z, {
                                                size: 'custom',
                                                color: 'currentColor',
                                                width: 16,
                                                height: 16
                                            })
                                        })
                                })
                        ]
                    })
                ]
            }),
            $ && (0, i.jsx)(g.Z, { threadId: t }),
            (0, i.jsx)(v.Z, {
                channel: G,
                isLastItem: a
            })
        ]
    });
}
