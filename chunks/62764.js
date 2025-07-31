(n.d(t, { Z: () => V }), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
    s = n(433517),
    c = n(755721),
    u = n(481060),
    d = n(904245),
    p = n(593472),
    h = n(393238),
    f = n(330726),
    m = n(48929),
    g = n(333535),
    b = n(566006),
    _ = n(443877),
    y = n(60174),
    C = n(216337),
    x = n(920888),
    v = n(287151),
    j = n(501517),
    O = n(982168),
    E = n(216572),
    S = n(5101),
    P = n(817608),
    I = n(569471),
    Z = n(346479),
    T = n(592125),
    N = n(934415),
    A = n(572004),
    w = n(456269),
    R = n(109590),
    M = n(228392),
    D = n(981631),
    k = n(388032),
    L = n(130883),
    U = n(184844),
    B = n(92254);
function F(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
    }
    return e;
}
function H(e, t) {
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
        [o, d] = i.useState(!1),
        p = () => {
            (d(!0),
                j.Z.resolveFlag(t.id).then(() => {
                    d(!1);
                }));
        };
    return a
        ? (0, r.jsxs)(c.zx, {
              size: c.zx.Sizes.SMALL,
              look: c.zx.Looks.FILLED,
              color: c.zx.Colors.PRIMARY,
              onClick: () => {
                  !0 === s.K.get(S.F)
                      ? p()
                      : (0, u.ZDy)(async () => {
                            let { default: e } = await Promise.resolve().then(n.bind(n, 5101));
                            return (t) => {
                                let { transitionState: n, onClose: i } = t;
                                return (0, r.jsx)(e, {
                                    transitionState: n,
                                    onClose: i,
                                    handleResolveFlag: p
                                });
                            };
                        });
              },
              disabled: l,
              innerClassName: U.actionButton,
              submitting: o,
              children: [
                  (0, r.jsx)(u.dz2, {
                      size: 'custom',
                      color: 'currentColor',
                      width: 16,
                      height: 16
                  }),
                  l ? k.intl.string(L.default['2Y4vkp']) : k.intl.string(L.default.YIbR4u)
              ]
          })
        : null;
}
function V(e) {
    let { postId: t, isFirstMessage: n, isLastItem: l = !1, parentChannelId: s } = e,
        { ref: j, width: O } = (0, h.ZP)(),
        [S, L] = i.useState(3),
        [V, z] = i.useState(!n),
        [W, Y] = (0, f.Z)(!1, 2000),
        q = (0, o.e7)([T.Z], () => T.Z.getChannel(t), [t]),
        { firstMessage: K } = (0, R.cl)(q),
        X = (0, o.e7)([I.Z], () => I.Z.hasJoined(t)),
        { disableReactionUpdates: Q, disableReactionCreates: J, isLurking: $, isGuest: ee, isPendingMember: et } = (0, _.Z)(q),
        en = (0, E.nw)(q),
        er = (0, o.e7)([T.Z], () => T.Z.getChannel(s)),
        ei = (0, w.Bs)(er),
        el = (0, o.e7)([m.Z], () => m.Z.shouldDisplayPrompt(t) && !0 === n, [t, n]),
        ea = i.useCallback(
            (e) => {
                let t = e[0];
                if (null != t && n) {
                    let e = t.intersectionRect,
                        n = t.boundingClientRect;
                    z((e.bottom - e.top) / (n.bottom - n.top) < 1);
                }
            },
            [n]
        );
    i.useLayoutEffect(() => {
        let e = j.current;
        if (null == e || !n) return;
        let t = new IntersectionObserver(ea, { threshold: 1 });
        return (
            t.observe(e),
            () => {
                t.disconnect();
            }
        );
    });
    let [eo, es] = i.useState(!0);
    if (
        (i.useEffect(() => {
            null != O && (L(Math.floor((O - 280) / 58)), es(!1));
        }, [O]),
        null == q || null == K)
    )
        return null;
    let ec = K.reactions.length > 0,
        eu = () => {
            X ? Z.Z.leaveThread(q, 'Forum Toolbar') : Z.Z.joinThread(q, 'Forum Toolbar');
        },
        ed = () => {
            ((0, M.B)({
                postId: q.id,
                location: { section: D.jXE.CHANNEL_HEADER }
            }),
                (0, A.JG)((0, N.EO)(q, er), () => Y(!0)));
        },
        ep = () => {
            d.Z.jumpToMessage({
                channelId: q.id,
                messageId: q.id,
                flash: !0,
                jumpType: p.SR.INSTANT
            });
        },
        eh = X ? u.dz2 : u.Dkj;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)('div', {
                className: a()(U.container, { [U.header]: V }),
                ref: j,
                children: [
                    en
                        ? (0, r.jsx)('div', {
                              className: U.reportedMessageActions,
                              children: (0, r.jsx)(P.Z, {
                                  message: K,
                                  channel: q
                              })
                          })
                        : (0, r.jsxs)('div', {
                              className: a()(U.reactButtons, { [U.loading]: eo }),
                              children: [
                                  !ec &&
                                      !J &&
                                      null != ei &&
                                      (0, r.jsx)('div', {
                                          className: B.reactions,
                                          children: (0, r.jsx)(v.le, {
                                              message: K,
                                              readOnly: !1,
                                              useChatFontScaling: !1,
                                              isLurking: $,
                                              isGuest: ee,
                                              isPendingMember: et,
                                              emoji: ei,
                                              type: b.O.NORMAL,
                                              hideCount: !0,
                                              count: 0,
                                              me: !1,
                                              burst_count: 0,
                                              me_burst: !1,
                                              emojiSize: 'reaction'
                                          })
                                      }),
                                  (0, r.jsx)(x.Z, {
                                      message: K,
                                      channel: q,
                                      disableReactionCreates: !0,
                                      disableReactionUpdates: Q,
                                      isLurking: $,
                                      isGuest: ee,
                                      isPendingMember: et,
                                      maxReactions: S,
                                      className: U.reactions,
                                      useChatFontScaling: !1,
                                      isForumToolbar: !0,
                                      forceHideReactionCreates: !0
                                  }),
                                  !J &&
                                      (0, r.jsx)(y.X, {
                                          type: b.O.NORMAL,
                                          message: K,
                                          channel: q,
                                          useChatFontScaling: !1,
                                          className: a()(U.addReactButton, { [U.hasNoReactions]: !ec }),
                                          isForumToolbar: !0,
                                          children: !ec && k.intl.string(k.t.xpOyTE)
                                      })
                              ]
                          }),
                    (0, r.jsxs)('div', {
                        className: U.buttons,
                        children: [
                            en
                                ? (0, r.jsx)(G, { channel: q })
                                : (0, r.jsx)(u.ua7, {
                                      text: k.intl.string(k.t.F7oeDg),
                                      children: (e) =>
                                          (0, r.jsxs)(
                                              c.zx,
                                              H(F({}, e), {
                                                  look: c.zx.Looks.BLANK,
                                                  size: c.zx.Sizes.SMALL,
                                                  onClick: eu,
                                                  className: U.button,
                                                  innerClassName: a()(U.buttonInner, { [U.active]: X }),
                                                  children: [
                                                      (0, r.jsx)(eh, {
                                                          size: 'xs',
                                                          color: 'currentColor'
                                                      }),
                                                      X ? k.intl.string(k.t['7OkUzs']) : k.intl.string(k.t['3aOv+v'])
                                                  ]
                                              })
                                          )
                                  }),
                            (0, r.jsx)(u.ua7, {
                                text: k.intl.string(k.t.WqhZsr),
                                children: (e) =>
                                    (0, r.jsxs)(
                                        c.zx,
                                        H(F({}, e), {
                                            look: c.zx.Looks.BLANK,
                                            size: c.zx.Sizes.SMALL,
                                            onClick: ed,
                                            className: U.button,
                                            innerClassName: U.buttonInner,
                                            children: [
                                                W
                                                    ? (0, r.jsx)(u.dz2, {
                                                          size: 'custom',
                                                          color: 'currentColor',
                                                          width: 16,
                                                          height: 16
                                                      })
                                                    : (0, r.jsx)(u.xPt, {
                                                          size: 'custom',
                                                          color: 'currentColor',
                                                          width: 16,
                                                          height: 16
                                                      }),
                                                W ? k.intl.string(k.t['t5VZ8/']) : null
                                            ]
                                        })
                                    )
                            }),
                            !n &&
                                (0, r.jsx)(u.ua7, {
                                    text: k.intl.string(k.t.nFP4oa),
                                    children: (e) =>
                                        (0, r.jsx)(
                                            c.zx,
                                            H(F({}, e), {
                                                look: c.zx.Looks.BLANK,
                                                size: c.zx.Sizes.SMALL,
                                                onClick: ep,
                                                className: U.button,
                                                innerClassName: U.buttonInner,
                                                children: (0, r.jsx)(u.Za2, {
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
            el && (0, r.jsx)(g.Z, { threadId: t }),
            (0, r.jsx)(C.Z, {
                channel: q,
                isLastItem: l
            })
        ]
    });
}
