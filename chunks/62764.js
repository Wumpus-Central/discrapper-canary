n.d(t, { Z: () => F }), n(388685);
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
    s = n(433517),
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
    x = n(216337),
    C = n(920888),
    y = n(287151),
    v = n(799903),
    j = n(501517),
    O = n(982168),
    E = n(216572),
    I = n(569471),
    P = n(346479),
    S = n(592125),
    Z = n(934415),
    N = n(572004),
    T = n(456269),
    A = n(109590),
    w = n(228392),
    R = n(981631),
    M = n(388032),
    k = n(776571),
    L = n(184844),
    D = n(92254);
function U(e) {
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
function B(e, t) {
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
function G(e) {
    let { channel: t } = e,
        l = t.isArchivedThread(),
        a = (0, O.P0)(t),
        [o, u] = i.useState(!1),
        d = () => {
            u(!0),
                j.Z.resolveFlag(t.id).then(() => {
                    u(!1);
                });
        };
    return a
        ? (0, r.jsxs)(c.zxk, {
              size: c.zxk.Sizes.SMALL,
              look: c.zxk.Looks.FILLED,
              color: c.zxk.Colors.PRIMARY,
              onClick: () => {
                  !0 === s.K.get(v.F)
                      ? d()
                      : (0, c.ZDy)(async () => {
                            let { default: e } = await Promise.resolve().then(n.bind(n, 799903));
                            return (t) => {
                                let { transitionState: n, onClose: i } = t;
                                return (0, r.jsx)(e, {
                                    transitionState: n,
                                    onClose: i,
                                    handleResolveFlag: d
                                });
                            };
                        });
              },
              disabled: l,
              innerClassName: L.actionButton,
              submitting: o,
              children: [
                  (0, r.jsx)(c.dz2, {
                      size: 'custom',
                      color: 'currentColor',
                      width: 16,
                      height: 16
                  }),
                  l ? M.intl.string(k.default['2Y4vkp']) : M.intl.string(k.default.YIbR4u)
              ]
          })
        : null;
}
function F(e) {
    let { postId: t, isFirstMessage: n, isLastItem: l = !1, parentChannelId: s } = e,
        { ref: v, width: j } = (0, p.ZP)(),
        [O, k] = i.useState(3),
        [F, H] = i.useState(!n),
        [V, z] = (0, h.Z)(!1, 2000),
        W = (0, o.e7)([S.Z], () => S.Z.getChannel(t), [t]),
        { firstMessage: Y } = (0, A.cl)(W),
        q = (0, o.e7)([I.Z], () => I.Z.hasJoined(t)),
        { disableReactionUpdates: K, disableReactionCreates: X, isLurking: Q, isGuest: J, isPendingMember: $ } = (0, b.Z)(W),
        ee = (0, E.nw)(W),
        et = (0, o.e7)([S.Z], () => S.Z.getChannel(s)),
        en = (0, T.Bs)(et),
        er = (0, o.e7)([f.Z], () => f.Z.shouldDisplayPrompt(t) && !0 === n, [t, n]),
        ei = i.useCallback(
            (e) => {
                let t = e[0];
                if (null != t && n) {
                    let e = t.intersectionRect,
                        n = t.boundingClientRect;
                    H((e.bottom - e.top) / (n.bottom - n.top) < 1);
                }
            },
            [n]
        );
    i.useLayoutEffect(() => {
        let e = v.current;
        if (null == e || !n) return;
        let t = new IntersectionObserver(ei, { threshold: 1 });
        return (
            t.observe(e),
            () => {
                t.disconnect();
            }
        );
    });
    let [el, ea] = i.useState(!0);
    if (
        (i.useEffect(() => {
            null != j && (k(Math.floor((j - 280) / 58)), ea(!1));
        }, [j]),
        null == W || null == Y)
    )
        return null;
    let eo = Y.reactions.length > 0,
        es = () => {
            q ? P.Z.leaveThread(W, 'Forum Toolbar') : P.Z.joinThread(W, 'Forum Toolbar');
        },
        ec = () => {
            (0, w.B)({
                postId: W.id,
                location: { section: R.jXE.CHANNEL_HEADER }
            }),
                (0, N.JG)((0, Z.EO)(W, et), () => z(!0));
        },
        eu = () => {
            u.Z.jumpToMessage({
                channelId: W.id,
                messageId: W.id,
                flash: !0,
                jumpType: d.SR.INSTANT
            });
        },
        ed = q ? c.dz2 : c.Dkj;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)('div', {
                className: a()(L.container, { [L.header]: F }),
                ref: v,
                children: [
                    (0, r.jsxs)('div', {
                        className: a()(L.reactButtons, { [L.loading]: el }),
                        children: [
                            !eo &&
                                !X &&
                                null != en &&
                                (0, r.jsx)('div', {
                                    className: D.reactions,
                                    children: (0, r.jsx)(y.le, {
                                        message: Y,
                                        readOnly: !1,
                                        useChatFontScaling: !1,
                                        isLurking: Q,
                                        isGuest: J,
                                        isPendingMember: $,
                                        emoji: en,
                                        type: g.O.NORMAL,
                                        hideCount: !0,
                                        count: 0,
                                        me: !1,
                                        burst_count: 0,
                                        me_burst: !1,
                                        emojiSize: 'reaction'
                                    })
                                }),
                            (0, r.jsx)(C.Z, {
                                message: Y,
                                channel: W,
                                disableReactionCreates: !0,
                                disableReactionUpdates: K,
                                isLurking: Q,
                                isGuest: J,
                                isPendingMember: $,
                                maxReactions: O,
                                className: L.reactions,
                                useChatFontScaling: !1,
                                isForumToolbar: !0,
                                forceHideReactionCreates: !0
                            }),
                            !X &&
                                (0, r.jsx)(_.X, {
                                    type: g.O.NORMAL,
                                    message: Y,
                                    channel: W,
                                    useChatFontScaling: !1,
                                    className: a()(L.addReactButton, { [L.hasNoReactions]: !eo }),
                                    isForumToolbar: !0,
                                    children: !eo && M.intl.string(M.t.xpOyTE)
                                })
                        ]
                    }),
                    (0, r.jsxs)('div', {
                        className: L.buttons,
                        children: [
                            ee
                                ? (0, r.jsx)(G, { channel: W })
                                : (0, r.jsx)(c.ua7, {
                                      text: M.intl.string(M.t.F7oeDg),
                                      children: (e) =>
                                          (0, r.jsxs)(
                                              c.zxk,
                                              B(U({}, e), {
                                                  look: c.zxk.Looks.BLANK,
                                                  size: c.zxk.Sizes.SMALL,
                                                  onClick: es,
                                                  className: L.button,
                                                  innerClassName: a()(L.buttonInner, { [L.active]: q }),
                                                  children: [
                                                      (0, r.jsx)(ed, {
                                                          size: 'xs',
                                                          color: 'currentColor'
                                                      }),
                                                      q ? M.intl.string(M.t['7OkUzs']) : M.intl.string(M.t['3aOv+v'])
                                                  ]
                                              })
                                          )
                                  }),
                            (0, r.jsx)(c.ua7, {
                                text: M.intl.string(M.t.WqhZsr),
                                children: (e) =>
                                    (0, r.jsxs)(
                                        c.zxk,
                                        B(U({}, e), {
                                            look: c.zxk.Looks.BLANK,
                                            size: c.zxk.Sizes.SMALL,
                                            onClick: ec,
                                            className: L.button,
                                            innerClassName: L.buttonInner,
                                            children: [
                                                V
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
                                                V ? M.intl.string(M.t['t5VZ8/']) : null
                                            ]
                                        })
                                    )
                            }),
                            !n &&
                                (0, r.jsx)(c.ua7, {
                                    text: M.intl.string(M.t.nFP4oa),
                                    children: (e) =>
                                        (0, r.jsx)(
                                            c.zxk,
                                            B(U({}, e), {
                                                look: c.zxk.Looks.BLANK,
                                                size: c.zxk.Sizes.SMALL,
                                                onClick: eu,
                                                className: L.button,
                                                innerClassName: L.buttonInner,
                                                children: (0, r.jsx)(c.Za2, {
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
            er && (0, r.jsx)(m.Z, { threadId: t }),
            (0, r.jsx)(x.Z, {
                channel: W,
                isLastItem: l
            })
        ]
    });
}
