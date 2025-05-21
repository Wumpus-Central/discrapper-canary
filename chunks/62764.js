n.d(t, { Z: () => G }), n(388685);
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
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
    x = n(920888),
    C = n(287151),
    y = n(799903),
    v = n(501517),
    j = n(982168),
    O = n(216572),
    E = n(569471),
    I = n(346479),
    P = n(592125),
    S = n(934415),
    Z = n(572004),
    N = n(456269),
    T = n(109590),
    A = n(228392),
    w = n(981631),
    R = n(388032),
    M = n(776571),
    k = n(184844),
    L = n(92254);
function D(e) {
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
function U(e, t) {
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
function B(e) {
    let { channel: t } = e,
        l = t.isArchivedThread(),
        a = (0, j.P0)(t),
        [o, c] = i.useState(!1),
        u = () => {
            c(!0),
                v.Z.resolveFlag(t.id).then(() => {
                    c(!1);
                });
        };
    return a
        ? (0, r.jsxs)(s.zxk, {
              size: s.zxk.Sizes.SMALL,
              look: s.zxk.Looks.FILLED,
              color: s.zxk.Colors.PRIMARY,
              onClick: () => {
                  'true' === localStorage.getItem(y.F)
                      ? u()
                      : (0, s.ZDy)(async () => {
                            let { default: e } = await Promise.resolve().then(n.bind(n, 799903));
                            return (t) => {
                                let { transitionState: n, onClose: i } = t;
                                return (0, r.jsx)(e, {
                                    transitionState: n,
                                    onClose: i,
                                    handleResolveFlag: u
                                });
                            };
                        });
              },
              disabled: l,
              innerClassName: k.actionButton,
              submitting: o,
              children: [
                  (0, r.jsx)(s.dz2, {
                      size: 'custom',
                      color: 'currentColor',
                      width: 16,
                      height: 16
                  }),
                  l ? R.intl.string(M.default['2Y4vkp']) : R.intl.string(M.default.YIbR4u)
              ]
          })
        : null;
}
function G(e) {
    let { postId: t, isFirstMessage: n, isLastItem: l = !1, parentChannelId: y } = e,
        { ref: v, width: j } = (0, d.ZP)(),
        [M, G] = i.useState(3),
        [F, H] = i.useState(!n),
        [V, z] = (0, p.Z)(!1, 2000),
        W = (0, o.e7)([P.Z], () => P.Z.getChannel(t), [t]),
        { firstMessage: Y } = (0, T.cl)(W),
        q = (0, o.e7)([E.Z], () => E.Z.hasJoined(t)),
        { disableReactionUpdates: K, disableReactionCreates: X, isLurking: Q, isGuest: J, isPendingMember: $ } = (0, g.Z)(W),
        ee = (0, O.nw)(W),
        et = (0, o.e7)([P.Z], () => P.Z.getChannel(y)),
        en = (0, N.Bs)(et),
        er = (0, o.e7)([h.Z], () => h.Z.shouldDisplayPrompt(t) && !0 === n, [t, n]),
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
            null != j && (G(Math.floor((j - 280) / 58)), ea(!1));
        }, [j]),
        null == W || null == Y)
    )
        return null;
    let eo = Y.reactions.length > 0,
        es = () => {
            q ? I.Z.leaveThread(W, 'Forum Toolbar') : I.Z.joinThread(W, 'Forum Toolbar');
        },
        ec = () => {
            (0, A.B)({
                postId: W.id,
                location: { section: w.jXE.CHANNEL_HEADER }
            }),
                (0, Z.JG)((0, S.EO)(W, et), () => z(!0));
        },
        eu = () => {
            c.Z.jumpToMessage({
                channelId: W.id,
                messageId: W.id,
                flash: !0,
                jumpType: u.SR.INSTANT
            });
        },
        ed = q ? s.dz2 : s.Dkj;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)('div', {
                className: a()(k.container, { [k.header]: F }),
                ref: v,
                children: [
                    (0, r.jsxs)('div', {
                        className: a()(k.reactButtons, { [k.loading]: el }),
                        children: [
                            !eo &&
                                !X &&
                                null != en &&
                                (0, r.jsx)('div', {
                                    className: L.reactions,
                                    children: (0, r.jsx)(C.le, {
                                        message: Y,
                                        readOnly: !1,
                                        useChatFontScaling: !1,
                                        isLurking: Q,
                                        isGuest: J,
                                        isPendingMember: $,
                                        emoji: en,
                                        type: m.O.NORMAL,
                                        hideCount: !0,
                                        count: 0,
                                        me: !1,
                                        burst_count: 0,
                                        me_burst: !1,
                                        emojiSize: 'reaction'
                                    })
                                }),
                            (0, r.jsx)(x.Z, {
                                message: Y,
                                channel: W,
                                disableReactionCreates: !0,
                                disableReactionUpdates: K,
                                isLurking: Q,
                                isGuest: J,
                                isPendingMember: $,
                                maxReactions: M,
                                className: k.reactions,
                                useChatFontScaling: !1,
                                isForumToolbar: !0,
                                forceHideReactionCreates: !0
                            }),
                            !X &&
                                (0, r.jsx)(b.X, {
                                    type: m.O.NORMAL,
                                    message: Y,
                                    channel: W,
                                    useChatFontScaling: !1,
                                    className: a()(k.addReactButton, { [k.hasNoReactions]: !eo }),
                                    isForumToolbar: !0,
                                    children: !eo && R.intl.string(R.t.xpOyTE)
                                })
                        ]
                    }),
                    (0, r.jsxs)('div', {
                        className: k.buttons,
                        children: [
                            ee
                                ? (0, r.jsx)(B, { channel: W })
                                : (0, r.jsx)(s.ua7, {
                                      text: R.intl.string(R.t.F7oeDg),
                                      children: (e) =>
                                          (0, r.jsxs)(
                                              s.zxk,
                                              U(D({}, e), {
                                                  look: s.zxk.Looks.BLANK,
                                                  size: s.zxk.Sizes.SMALL,
                                                  onClick: es,
                                                  className: k.button,
                                                  innerClassName: a()(k.buttonInner, { [k.active]: q }),
                                                  children: [
                                                      (0, r.jsx)(ed, {
                                                          size: 'xs',
                                                          color: 'currentColor'
                                                      }),
                                                      q ? R.intl.string(R.t['7OkUzs']) : R.intl.string(R.t['3aOv+v'])
                                                  ]
                                              })
                                          )
                                  }),
                            (0, r.jsx)(s.ua7, {
                                text: R.intl.string(R.t.WqhZsr),
                                children: (e) =>
                                    (0, r.jsxs)(
                                        s.zxk,
                                        U(D({}, e), {
                                            look: s.zxk.Looks.BLANK,
                                            size: s.zxk.Sizes.SMALL,
                                            onClick: ec,
                                            className: k.button,
                                            innerClassName: k.buttonInner,
                                            children: [
                                                V
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
                                                V ? R.intl.string(R.t['t5VZ8/']) : null
                                            ]
                                        })
                                    )
                            }),
                            !n &&
                                (0, r.jsx)(s.ua7, {
                                    text: R.intl.string(R.t.nFP4oa),
                                    children: (e) =>
                                        (0, r.jsx)(
                                            s.zxk,
                                            U(D({}, e), {
                                                look: s.zxk.Looks.BLANK,
                                                size: s.zxk.Sizes.SMALL,
                                                onClick: eu,
                                                className: k.button,
                                                innerClassName: k.buttonInner,
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
            er && (0, r.jsx)(f.Z, { threadId: t }),
            (0, r.jsx)(_.Z, {
                channel: W,
                isLastItem: l
            })
        ]
    });
}
