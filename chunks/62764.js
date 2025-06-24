n.d(t, { Z: () => H }), n(388685);
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
    y = n(216337),
    x = n(920888),
    C = n(287151),
    v = n(799903),
    j = n(501517),
    O = n(982168),
    E = n(216572),
    I = n(817608),
    S = n(569471),
    P = n(346479),
    Z = n(592125),
    N = n(934415),
    T = n(572004),
    A = n(456269),
    w = n(109590),
    R = n(228392),
    M = n(981631),
    k = n(388032),
    D = n(130883),
    L = n(184844),
    U = n(92254);
function B(e) {
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
function F(e, t) {
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
                  l ? k.intl.string(D.default['2Y4vkp']) : k.intl.string(D.default.YIbR4u)
              ]
          })
        : null;
}
function H(e) {
    let { postId: t, isFirstMessage: n, isLastItem: l = !1, parentChannelId: s } = e,
        { ref: v, width: j } = (0, p.ZP)(),
        [O, D] = i.useState(3),
        [H, V] = i.useState(!n),
        [z, W] = (0, h.Z)(!1, 2000),
        Y = (0, o.e7)([Z.Z], () => Z.Z.getChannel(t), [t]),
        { firstMessage: q } = (0, w.cl)(Y),
        K = (0, o.e7)([S.Z], () => S.Z.hasJoined(t)),
        { disableReactionUpdates: X, disableReactionCreates: Q, isLurking: J, isGuest: $, isPendingMember: ee } = (0, b.Z)(Y),
        et = (0, E.nw)(Y),
        en = (0, o.e7)([Z.Z], () => Z.Z.getChannel(s)),
        er = (0, A.Bs)(en),
        ei = (0, o.e7)([f.Z], () => f.Z.shouldDisplayPrompt(t) && !0 === n, [t, n]),
        el = i.useCallback(
            (e) => {
                let t = e[0];
                if (null != t && n) {
                    let e = t.intersectionRect,
                        n = t.boundingClientRect;
                    V((e.bottom - e.top) / (n.bottom - n.top) < 1);
                }
            },
            [n]
        );
    i.useLayoutEffect(() => {
        let e = v.current;
        if (null == e || !n) return;
        let t = new IntersectionObserver(el, { threshold: 1 });
        return (
            t.observe(e),
            () => {
                t.disconnect();
            }
        );
    });
    let [ea, eo] = i.useState(!0);
    if (
        (i.useEffect(() => {
            null != j && (D(Math.floor((j - 280) / 58)), eo(!1));
        }, [j]),
        null == Y || null == q)
    )
        return null;
    let es = q.reactions.length > 0,
        ec = () => {
            K ? P.Z.leaveThread(Y, 'Forum Toolbar') : P.Z.joinThread(Y, 'Forum Toolbar');
        },
        eu = () => {
            (0, R.B)({
                postId: Y.id,
                location: { section: M.jXE.CHANNEL_HEADER }
            }),
                (0, T.JG)((0, N.EO)(Y, en), () => W(!0));
        },
        ed = () => {
            u.Z.jumpToMessage({
                channelId: Y.id,
                messageId: Y.id,
                flash: !0,
                jumpType: d.SR.INSTANT
            });
        },
        ep = K ? c.dz2 : c.Dkj;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)('div', {
                className: a()(L.container, { [L.header]: H }),
                ref: v,
                children: [
                    et
                        ? (0, r.jsx)('div', {
                              className: L.reportedMessageActions,
                              children: (0, r.jsx)(I.Z, {
                                  message: q,
                                  channel: Y
                              })
                          })
                        : (0, r.jsxs)('div', {
                              className: a()(L.reactButtons, { [L.loading]: ea }),
                              children: [
                                  !es &&
                                      !Q &&
                                      null != er &&
                                      (0, r.jsx)('div', {
                                          className: U.reactions,
                                          children: (0, r.jsx)(C.le, {
                                              message: q,
                                              readOnly: !1,
                                              useChatFontScaling: !1,
                                              isLurking: J,
                                              isGuest: $,
                                              isPendingMember: ee,
                                              emoji: er,
                                              type: g.O.NORMAL,
                                              hideCount: !0,
                                              count: 0,
                                              me: !1,
                                              burst_count: 0,
                                              me_burst: !1,
                                              emojiSize: 'reaction'
                                          })
                                      }),
                                  (0, r.jsx)(x.Z, {
                                      message: q,
                                      channel: Y,
                                      disableReactionCreates: !0,
                                      disableReactionUpdates: X,
                                      isLurking: J,
                                      isGuest: $,
                                      isPendingMember: ee,
                                      maxReactions: O,
                                      className: L.reactions,
                                      useChatFontScaling: !1,
                                      isForumToolbar: !0,
                                      forceHideReactionCreates: !0
                                  }),
                                  !Q &&
                                      (0, r.jsx)(_.X, {
                                          type: g.O.NORMAL,
                                          message: q,
                                          channel: Y,
                                          useChatFontScaling: !1,
                                          className: a()(L.addReactButton, { [L.hasNoReactions]: !es }),
                                          isForumToolbar: !0,
                                          children: !es && k.intl.string(k.t.xpOyTE)
                                      })
                              ]
                          }),
                    (0, r.jsxs)('div', {
                        className: L.buttons,
                        children: [
                            et
                                ? (0, r.jsx)(G, { channel: Y })
                                : (0, r.jsx)(c.ua7, {
                                      text: k.intl.string(k.t.F7oeDg),
                                      children: (e) =>
                                          (0, r.jsxs)(
                                              c.zxk,
                                              F(B({}, e), {
                                                  look: c.zxk.Looks.BLANK,
                                                  size: c.zxk.Sizes.SMALL,
                                                  onClick: ec,
                                                  className: L.button,
                                                  innerClassName: a()(L.buttonInner, { [L.active]: K }),
                                                  children: [
                                                      (0, r.jsx)(ep, {
                                                          size: 'xs',
                                                          color: 'currentColor'
                                                      }),
                                                      K ? k.intl.string(k.t['7OkUzs']) : k.intl.string(k.t['3aOv+v'])
                                                  ]
                                              })
                                          )
                                  }),
                            (0, r.jsx)(c.ua7, {
                                text: k.intl.string(k.t.WqhZsr),
                                children: (e) =>
                                    (0, r.jsxs)(
                                        c.zxk,
                                        F(B({}, e), {
                                            look: c.zxk.Looks.BLANK,
                                            size: c.zxk.Sizes.SMALL,
                                            onClick: eu,
                                            className: L.button,
                                            innerClassName: L.buttonInner,
                                            children: [
                                                z
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
                                                z ? k.intl.string(k.t['t5VZ8/']) : null
                                            ]
                                        })
                                    )
                            }),
                            !n &&
                                (0, r.jsx)(c.ua7, {
                                    text: k.intl.string(k.t.nFP4oa),
                                    children: (e) =>
                                        (0, r.jsx)(
                                            c.zxk,
                                            F(B({}, e), {
                                                look: c.zxk.Looks.BLANK,
                                                size: c.zxk.Sizes.SMALL,
                                                onClick: ed,
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
            ei && (0, r.jsx)(m.Z, { threadId: t }),
            (0, r.jsx)(y.Z, {
                channel: Y,
                isLastItem: l
            })
        ]
    });
}
