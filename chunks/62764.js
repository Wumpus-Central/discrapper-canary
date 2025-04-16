n.d(t, { Z: () => M }), n(388685);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(442837),
    s = n(52826),
    c = n(481060),
    u = n(904245),
    d = n(593472),
    p = n(393238),
    h = n(330726),
    f = n(48929),
    m = n(333535),
    g = n(566006),
    b = n(443877),
    _ = n(60174),
    y = n(216337),
    C = n(920888),
    x = n(287151),
    v = n(569471),
    j = n(346479),
    O = n(592125),
    E = n(934415),
    N = n(572004),
    I = n(456269),
    P = n(109590),
    S = n(228392),
    Z = n(981631),
    T = n(388032),
    A = n(184844),
    w = n(92254);
function R(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function k(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function M(e) {
    let { postId: t, isFirstMessage: n, isLastItem: l = !1, parentChannelId: M } = e,
        { ref: L, width: D } = (0, p.ZP)(),
        [W, U] = i.useState(3),
        [B, G] = i.useState(!n),
        [F, H] = (0, h.Z)(!1, 2000),
        V = (0, a.e7)([O.Z], () => O.Z.getChannel(t), [t]),
        { firstMessage: z } = (0, P.cl)(V),
        Y = (0, a.e7)([v.Z], () => v.Z.hasJoined(t)),
        { disableReactionUpdates: q, disableReactionCreates: K, isLurking: X, isGuest: Q, isPendingMember: J } = (0, b.Z)(V),
        $ = (0, a.e7)([O.Z], () => O.Z.getChannel(M)),
        ee = (0, I.Bs)($),
        et = (0, a.e7)([f.Z], () => f.Z.shouldDisplayPrompt(t) && !0 === n, [t, n]),
        en = i.useCallback(
            (e) => {
                let t = e[0];
                if (null != t && n) {
                    let e = t.intersectionRect,
                        n = t.boundingClientRect;
                    G((e.bottom - e.top) / (n.bottom - n.top) < 1);
                }
            },
            [n]
        );
    i.useLayoutEffect(() => {
        let e = L.current;
        if (null == e || !n) return;
        let t = new IntersectionObserver(en, { threshold: 1 });
        return (
            t.observe(e),
            () => {
                t.disconnect();
            }
        );
    });
    let [er, ei] = i.useState(!0);
    if (
        (i.useEffect(() => {
            null != D && (U(Math.floor((D - 280) / 58)), ei(!1));
        }, [D]),
        null == V || null == z)
    )
        return null;
    let el = z.reactions.length > 0,
        eo = () => {
            Y ? j.Z.leaveThread(V, 'Forum Toolbar') : j.Z.joinThread(V, 'Forum Toolbar');
        },
        ea = () => {
            (0, S.B)({
                postId: V.id,
                location: { section: Z.jXE.CHANNEL_HEADER }
            }),
                (0, N.JG)((0, E.EO)(V, $)),
                H(!0);
        },
        es = () => {
            u.Z.jumpToMessage({
                channelId: V.id,
                messageId: V.id,
                flash: !0,
                jumpType: d.SR.INSTANT
            });
        },
        ec = Y ? c.dz2 : c.Dkj;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)('div', {
                className: o()(A.container, { [A.header]: B }),
                ref: L,
                children: [
                    (0, r.jsxs)('div', {
                        className: o()(A.reactButtons, { [A.loading]: er }),
                        children: [
                            !el &&
                                !K &&
                                null != ee &&
                                (0, r.jsx)('div', {
                                    className: w.reactions,
                                    children: (0, r.jsx)(x.le, {
                                        message: z,
                                        readOnly: !1,
                                        useChatFontScaling: !1,
                                        isLurking: X,
                                        isGuest: Q,
                                        isPendingMember: J,
                                        emoji: ee,
                                        type: g.O.NORMAL,
                                        hideCount: !0,
                                        count: 0,
                                        me: !1,
                                        burst_count: 0,
                                        me_burst: !1,
                                        emojiSize: 'reactionLarge'
                                    })
                                }),
                            (0, r.jsx)(C.Z, {
                                message: z,
                                channel: V,
                                disableReactionCreates: !0,
                                disableReactionUpdates: q,
                                isLurking: X,
                                isGuest: Q,
                                isPendingMember: J,
                                maxReactions: W,
                                className: A.reactions,
                                useChatFontScaling: !1,
                                isForumToolbar: !0,
                                forceHideReactionCreates: !0
                            }),
                            !K &&
                                (0, r.jsx)(_.X, {
                                    type: g.O.NORMAL,
                                    message: z,
                                    channel: V,
                                    useChatFontScaling: !1,
                                    className: o()(A.addReactButton, { [A.hasNoReactions]: !el }),
                                    isForumToolbar: !0,
                                    children: !el && T.NW.string(T.t.xpOyTE)
                                })
                        ]
                    }),
                    (0, r.jsxs)('div', {
                        className: A.buttons,
                        children: [
                            (0, r.jsx)(c.ua7, {
                                text: T.NW.string(T.t.F7oeDg),
                                children: (e) =>
                                    (0, r.jsxs)(
                                        c.zxk,
                                        k(R({}, e), {
                                            look: c.zxk.Looks.BLANK,
                                            size: c.zxk.Sizes.SMALL,
                                            onClick: eo,
                                            className: A.button,
                                            innerClassName: o()(A.buttonInner, { [A.active]: Y }),
                                            children: [
                                                (0, r.jsx)(ec, {
                                                    size: 'xs',
                                                    color: 'currentColor'
                                                }),
                                                Y ? T.NW.string(T.t['7OkUzs']) : T.NW.string(T.t['3aOv+v'])
                                            ]
                                        })
                                    )
                            }),
                            (0, r.jsx)(c.ua7, {
                                text: T.NW.string(T.t.WqhZsr),
                                children: (e) =>
                                    (0, r.jsxs)(
                                        c.zxk,
                                        k(R({}, e), {
                                            look: c.zxk.Looks.BLANK,
                                            size: c.zxk.Sizes.SMALL,
                                            onClick: ea,
                                            className: A.button,
                                            innerClassName: A.buttonInner,
                                            children: [
                                                F
                                                    ? (0, r.jsx)(c.dz2, {
                                                          size: 'custom',
                                                          color: 'currentColor',
                                                          width: 16,
                                                          height: 16
                                                      })
                                                    : (0, r.jsx)(c.xPt, {
                                                          size: 'custom',
                                                          color: 'currentColor',
                                                          width: 16,
                                                          height: 16
                                                      }),
                                                F ? T.NW.string(T.t['t5VZ8/']) : null
                                            ]
                                        })
                                    )
                            }),
                            !n &&
                                (0, r.jsx)(c.ua7, {
                                    text: T.NW.string(T.t.nFP4oa),
                                    children: (e) =>
                                        (0, r.jsx)(
                                            c.zxk,
                                            k(R({}, e), {
                                                look: c.zxk.Looks.BLANK,
                                                size: c.zxk.Sizes.SMALL,
                                                onClick: es,
                                                className: A.button,
                                                innerClassName: A.buttonInner,
                                                children: (0, r.jsx)(s.Z, {
                                                    size: 'custom',
                                                    color: 'currentColor',
                                                    width: 16,
                                                    height: 16
                                                })
                                            })
                                        )
                                })
                        ]
                    })
                ]
            }),
            et && (0, r.jsx)(m.Z, { threadId: t }),
            (0, r.jsx)(y.Z, {
                channel: V,
                isLastItem: l
            })
        ]
    });
}
