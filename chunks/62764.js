n.d(t, {
    Z: function () {
        return L;
    }
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
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
    C = n(566006),
    x = n(443877),
    v = n(60174),
    _ = n(216337),
    I = n(920888),
    E = n(287151),
    b = n(569471),
    Z = n(346479),
    S = n(592125),
    N = n(934415),
    T = n(456269),
    j = n(109590),
    A = n(228392),
    y = n(981631),
    P = n(388032),
    M = n(811994),
    R = n(636804);
function L(e) {
    let { postId: t, isFirstMessage: n, isLastItem: r = !1, parentChannelId: L } = e,
        { ref: k, width: O } = (0, p.Z)(),
        [D, w] = l.useState(3),
        [B, U] = l.useState(!n),
        [H, G] = (0, m.Z)(!1, 2000),
        F = (0, o.e7)([S.Z], () => S.Z.getChannel(t), [t]),
        { firstMessage: V } = (0, j.cl)(F),
        z = (0, o.e7)([b.Z], () => b.Z.hasJoined(t)),
        { disableReactionUpdates: W, disableReactionCreates: K, isLurking: Y, isGuest: q, isPendingMember: X } = (0, x.Z)(F),
        J = (0, o.e7)([S.Z], () => S.Z.getChannel(L)),
        Q = (0, T.Bs)(J),
        $ = (0, o.e7)([f.Z], () => f.Z.shouldDisplayPrompt(t) && !0 === n, [t, n]),
        ee = l.useCallback(
            (e) => {
                let t = e[0];
                if (null != t && n) {
                    let e = t.intersectionRect,
                        n = t.boundingClientRect;
                    U((e.bottom - e.top) / (n.bottom - n.top) < 1);
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
            if (null != O) w(Math.floor((O - 280) / 58)), en(!1);
        }, [O]),
        null == F || null == V)
    )
        return null;
    let ei = V.reactions.length > 0,
        el = () => {
            z ? Z.Z.leaveThread(F, 'Forum Toolbar') : Z.Z.joinThread(F, 'Forum Toolbar');
        },
        er = () => {
            (0, A.B)({
                postId: F.id,
                location: { section: y.jXE.CHANNEL_HEADER }
            }),
                (0, s.J)((0, N.EO)(F, J)),
                G(!0);
        },
        ea = () => {
            u.Z.jumpToMessage({
                channelId: F.id,
                messageId: F.id,
                flash: !0,
                jumpType: h.SR.INSTANT
            });
        },
        es = z ? d.CheckmarkLargeIcon : d.BellIcon;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)('div', {
                className: a()(M.container, { [M.header]: B }),
                ref: k,
                children: [
                    (0, i.jsxs)('div', {
                        className: a()(M.reactButtons, { [M.loading]: et }),
                        children: [
                            !ei &&
                                !K &&
                                null != Q &&
                                (0, i.jsx)('div', {
                                    className: R.reactions,
                                    children: (0, i.jsx)(E.le, {
                                        message: V,
                                        readOnly: !1,
                                        useChatFontScaling: !1,
                                        isLurking: Y,
                                        isGuest: q,
                                        isPendingMember: X,
                                        emoji: Q,
                                        type: C.O.NORMAL,
                                        hideCount: !0,
                                        count: 0,
                                        me: !1,
                                        burst_count: 0,
                                        me_burst: !1
                                    })
                                }),
                            (0, i.jsx)(I.Z, {
                                message: V,
                                channel: F,
                                disableReactionCreates: !0,
                                disableReactionUpdates: W,
                                isLurking: Y,
                                isGuest: q,
                                isPendingMember: X,
                                maxReactions: D,
                                className: M.reactions,
                                useChatFontScaling: !1,
                                isForumToolbar: !0,
                                forceHideReactionCreates: !0
                            }),
                            !K &&
                                (0, i.jsx)(v.X, {
                                    type: C.O.NORMAL,
                                    message: V,
                                    channel: F,
                                    useChatFontScaling: !1,
                                    className: M.addReactButton,
                                    isForumToolbar: !0,
                                    children: !ei && P.intl.string(P.t.xpOyTE)
                                })
                        ]
                    }),
                    (0, i.jsxs)('div', {
                        className: M.buttons,
                        children: [
                            (0, i.jsx)(d.Tooltip, {
                                text: P.intl.string(P.t.F7oeDg),
                                children: (e) =>
                                    (0, i.jsxs)(d.Button, {
                                        ...e,
                                        look: d.Button.Looks.BLANK,
                                        size: d.Button.Sizes.SMALL,
                                        onClick: el,
                                        className: M.button,
                                        innerClassName: a()(M.buttonInner, { [M.active]: z }),
                                        children: [
                                            (0, i.jsx)(es, {
                                                size: 'xs',
                                                color: 'currentColor'
                                            }),
                                            z ? P.intl.string(P.t['7OkUzs']) : P.intl.string(P.t['3aOv+v'])
                                        ]
                                    })
                            }),
                            (0, i.jsx)(d.Tooltip, {
                                text: P.intl.string(P.t.WqhZsr),
                                children: (e) =>
                                    (0, i.jsxs)(d.Button, {
                                        ...e,
                                        look: d.Button.Looks.BLANK,
                                        size: d.Button.Sizes.SMALL,
                                        onClick: er,
                                        className: M.button,
                                        innerClassName: M.buttonInner,
                                        children: [
                                            H
                                                ? (0, i.jsx)(d.CheckmarkLargeIcon, {
                                                      size: 'custom',
                                                      color: 'currentColor',
                                                      width: 16,
                                                      height: 16
                                                  })
                                                : (0, i.jsx)(d.LinkIcon, {
                                                      size: 'custom',
                                                      color: 'currentColor',
                                                      width: 16,
                                                      height: 16
                                                  }),
                                            H ? P.intl.string(P.t['t5VZ8/']) : null
                                        ]
                                    })
                            }),
                            !n &&
                                (0, i.jsx)(d.Tooltip, {
                                    text: P.intl.string(P.t.nFP4oa),
                                    children: (e) =>
                                        (0, i.jsx)(d.Button, {
                                            ...e,
                                            look: d.Button.Looks.BLANK,
                                            size: d.Button.Sizes.SMALL,
                                            onClick: ea,
                                            className: M.button,
                                            innerClassName: M.buttonInner,
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
            (0, i.jsx)(_.Z, {
                channel: F,
                isLastItem: r
            })
        ]
    });
}
