n.d(t, { Z: () => k }), n(388685);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(442837),
    s = n(481060),
    c = n(904245),
    u = n(593472),
    d = n(393238),
    p = n(330726),
    h = n(48929),
    f = n(333535),
    m = n(566006),
    g = n(443877),
    b = n(60174),
    _ = n(216337),
    y = n(920888),
    x = n(287151),
    C = n(569471),
    v = n(346479),
    j = n(592125),
    O = n(934415),
    E = n(572004),
    I = n(456269),
    P = n(109590),
    S = n(228392),
    Z = n(981631),
    N = n(388032),
    T = n(184844),
    A = n(92254);
function w(e) {
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
function R(e, t) {
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
function k(e) {
    let { postId: t, isFirstMessage: n, isLastItem: l = !1, parentChannelId: k } = e,
        { ref: M, width: L } = (0, d.ZP)(),
        [D, U] = i.useState(3),
        [B, G] = i.useState(!n),
        [F, H] = (0, p.Z)(!1, 2000),
        V = (0, a.e7)([j.Z], () => j.Z.getChannel(t), [t]),
        { firstMessage: z } = (0, P.cl)(V),
        W = (0, a.e7)([C.Z], () => C.Z.hasJoined(t)),
        { disableReactionUpdates: Y, disableReactionCreates: q, isLurking: K, isGuest: X, isPendingMember: Q } = (0, g.Z)(V),
        J = (0, a.e7)([j.Z], () => j.Z.getChannel(k)),
        $ = (0, I.Bs)(J),
        ee = (0, a.e7)([h.Z], () => h.Z.shouldDisplayPrompt(t) && !0 === n, [t, n]),
        et = i.useCallback(
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
        let e = M.current;
        if (null == e || !n) return;
        let t = new IntersectionObserver(et, { threshold: 1 });
        return (
            t.observe(e),
            () => {
                t.disconnect();
            }
        );
    });
    let [en, er] = i.useState(!0);
    if (
        (i.useEffect(() => {
            null != L && (U(Math.floor((L - 280) / 58)), er(!1));
        }, [L]),
        null == V || null == z)
    )
        return null;
    let ei = z.reactions.length > 0,
        el = () => {
            W ? v.Z.leaveThread(V, 'Forum Toolbar') : v.Z.joinThread(V, 'Forum Toolbar');
        },
        eo = () => {
            (0, S.B)({
                postId: V.id,
                location: { section: Z.jXE.CHANNEL_HEADER }
            }),
                (0, E.JG)((0, O.EO)(V, J), () => H(!0));
        },
        ea = () => {
            c.Z.jumpToMessage({
                channelId: V.id,
                messageId: V.id,
                flash: !0,
                jumpType: u.SR.INSTANT
            });
        },
        es = W ? s.dz2 : s.Dkj;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)('div', {
                className: o()(T.container, { [T.header]: B }),
                ref: M,
                children: [
                    (0, r.jsxs)('div', {
                        className: o()(T.reactButtons, { [T.loading]: en }),
                        children: [
                            !ei &&
                                !q &&
                                null != $ &&
                                (0, r.jsx)('div', {
                                    className: A.reactions,
                                    children: (0, r.jsx)(x.le, {
                                        message: z,
                                        readOnly: !1,
                                        useChatFontScaling: !1,
                                        isLurking: K,
                                        isGuest: X,
                                        isPendingMember: Q,
                                        emoji: $,
                                        type: m.O.NORMAL,
                                        hideCount: !0,
                                        count: 0,
                                        me: !1,
                                        burst_count: 0,
                                        me_burst: !1,
                                        emojiSize: 'reaction'
                                    })
                                }),
                            (0, r.jsx)(y.Z, {
                                message: z,
                                channel: V,
                                disableReactionCreates: !0,
                                disableReactionUpdates: Y,
                                isLurking: K,
                                isGuest: X,
                                isPendingMember: Q,
                                maxReactions: D,
                                className: T.reactions,
                                useChatFontScaling: !1,
                                isForumToolbar: !0,
                                forceHideReactionCreates: !0
                            }),
                            !q &&
                                (0, r.jsx)(b.X, {
                                    type: m.O.NORMAL,
                                    message: z,
                                    channel: V,
                                    useChatFontScaling: !1,
                                    className: o()(T.addReactButton, { [T.hasNoReactions]: !ei }),
                                    isForumToolbar: !0,
                                    children: !ei && N.intl.string(N.t.xpOyTE)
                                })
                        ]
                    }),
                    (0, r.jsxs)('div', {
                        className: T.buttons,
                        children: [
                            (0, r.jsx)(s.ua7, {
                                text: N.intl.string(N.t.F7oeDg),
                                children: (e) =>
                                    (0, r.jsxs)(
                                        s.zxk,
                                        R(w({}, e), {
                                            look: s.zxk.Looks.BLANK,
                                            size: s.zxk.Sizes.SMALL,
                                            onClick: el,
                                            className: T.button,
                                            innerClassName: o()(T.buttonInner, { [T.active]: W }),
                                            children: [
                                                (0, r.jsx)(es, {
                                                    size: 'xs',
                                                    color: 'currentColor'
                                                }),
                                                W ? N.intl.string(N.t['7OkUzs']) : N.intl.string(N.t['3aOv+v'])
                                            ]
                                        })
                                    )
                            }),
                            (0, r.jsx)(s.ua7, {
                                text: N.intl.string(N.t.WqhZsr),
                                children: (e) =>
                                    (0, r.jsxs)(
                                        s.zxk,
                                        R(w({}, e), {
                                            look: s.zxk.Looks.BLANK,
                                            size: s.zxk.Sizes.SMALL,
                                            onClick: eo,
                                            className: T.button,
                                            innerClassName: T.buttonInner,
                                            children: [
                                                F
                                                    ? (0, r.jsx)(s.dz2, {
                                                          size: 'custom',
                                                          color: 'currentColor',
                                                          width: 16,
                                                          height: 16
                                                      })
                                                    : (0, r.jsx)(s.xPt, {
                                                          size: 'custom',
                                                          color: 'currentColor',
                                                          width: 16,
                                                          height: 16
                                                      }),
                                                F ? N.intl.string(N.t['t5VZ8/']) : null
                                            ]
                                        })
                                    )
                            }),
                            !n &&
                                (0, r.jsx)(s.ua7, {
                                    text: N.intl.string(N.t.nFP4oa),
                                    children: (e) =>
                                        (0, r.jsx)(
                                            s.zxk,
                                            R(w({}, e), {
                                                look: s.zxk.Looks.BLANK,
                                                size: s.zxk.Sizes.SMALL,
                                                onClick: ea,
                                                className: T.button,
                                                innerClassName: T.buttonInner,
                                                children: (0, r.jsx)(s.Za2, {
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
            ee && (0, r.jsx)(f.Z, { threadId: t }),
            (0, r.jsx)(_.Z, {
                channel: V,
                isLastItem: l
            })
        ]
    });
}
