n.d(t, { Z: () => B }), n(388685);
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
    C = n(920888),
    x = n(287151),
    y = n(501517),
    v = n(982168),
    j = n(216572),
    O = n(569471),
    E = n(346479),
    I = n(592125),
    P = n(934415),
    S = n(572004),
    Z = n(456269),
    N = n(109590),
    T = n(228392),
    A = n(981631),
    w = n(388032),
    R = n(776571),
    M = n(184844),
    k = n(92254);
function L(e) {
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
function D(e, t) {
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
function U(e) {
    let { channel: t } = e,
        n = t.isArchivedThread(),
        l = (0, v.P0)(t),
        [a, o] = i.useState(!1);
    return l
        ? (0, r.jsxs)(s.zxk, {
              size: s.zxk.Sizes.SMALL,
              look: s.zxk.Looks.FILLED,
              color: s.zxk.Colors.PRIMARY,
              onClick: () => {
                  o(!0),
                      y.Z.resolveFlag(t.id).then(() => {
                          o(!1);
                      });
              },
              disabled: n,
              innerClassName: M.actionButton,
              submitting: a,
              children: [
                  (0, r.jsx)(s.dz2, {
                      size: 'custom',
                      color: 'currentColor',
                      width: 16,
                      height: 16
                  }),
                  n ? w.intl.string(R.default['2Y4vkp']) : w.intl.string(R.default.YIbR4u)
              ]
          })
        : null;
}
function B(e) {
    let { postId: t, isFirstMessage: n, isLastItem: l = !1, parentChannelId: y } = e,
        { ref: v, width: R } = (0, d.ZP)(),
        [B, G] = i.useState(3),
        [F, H] = i.useState(!n),
        [V, z] = (0, p.Z)(!1, 2000),
        W = (0, o.e7)([I.Z], () => I.Z.getChannel(t), [t]),
        { firstMessage: Y } = (0, N.cl)(W),
        q = (0, o.e7)([O.Z], () => O.Z.hasJoined(t)),
        { disableReactionUpdates: K, disableReactionCreates: X, isLurking: Q, isGuest: J, isPendingMember: $ } = (0, g.Z)(W),
        ee = (0, j.nw)(W),
        et = (0, o.e7)([I.Z], () => I.Z.getChannel(y)),
        en = (0, Z.Bs)(et),
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
            null != R && (G(Math.floor((R - 280) / 58)), ea(!1));
        }, [R]),
        null == W || null == Y)
    )
        return null;
    let eo = Y.reactions.length > 0,
        es = () => {
            q ? E.Z.leaveThread(W, 'Forum Toolbar') : E.Z.joinThread(W, 'Forum Toolbar');
        },
        ec = () => {
            (0, T.B)({
                postId: W.id,
                location: { section: A.jXE.CHANNEL_HEADER }
            }),
                (0, S.JG)((0, P.EO)(W, et), () => z(!0));
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
                className: a()(M.container, { [M.header]: F }),
                ref: v,
                children: [
                    (0, r.jsxs)('div', {
                        className: a()(M.reactButtons, { [M.loading]: el }),
                        children: [
                            !eo &&
                                !X &&
                                null != en &&
                                (0, r.jsx)('div', {
                                    className: k.reactions,
                                    children: (0, r.jsx)(x.le, {
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
                            (0, r.jsx)(C.Z, {
                                message: Y,
                                channel: W,
                                disableReactionCreates: !0,
                                disableReactionUpdates: K,
                                isLurking: Q,
                                isGuest: J,
                                isPendingMember: $,
                                maxReactions: B,
                                className: M.reactions,
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
                                    className: a()(M.addReactButton, { [M.hasNoReactions]: !eo }),
                                    isForumToolbar: !0,
                                    children: !eo && w.intl.string(w.t.xpOyTE)
                                })
                        ]
                    }),
                    (0, r.jsxs)('div', {
                        className: M.buttons,
                        children: [
                            ee
                                ? (0, r.jsx)(U, { channel: W })
                                : (0, r.jsx)(s.ua7, {
                                      text: w.intl.string(w.t.F7oeDg),
                                      children: (e) =>
                                          (0, r.jsxs)(
                                              s.zxk,
                                              D(L({}, e), {
                                                  look: s.zxk.Looks.BLANK,
                                                  size: s.zxk.Sizes.SMALL,
                                                  onClick: es,
                                                  className: M.button,
                                                  innerClassName: a()(M.buttonInner, { [M.active]: q }),
                                                  children: [
                                                      (0, r.jsx)(ed, {
                                                          size: 'xs',
                                                          color: 'currentColor'
                                                      }),
                                                      q ? w.intl.string(w.t['7OkUzs']) : w.intl.string(w.t['3aOv+v'])
                                                  ]
                                              })
                                          )
                                  }),
                            (0, r.jsx)(s.ua7, {
                                text: w.intl.string(w.t.WqhZsr),
                                children: (e) =>
                                    (0, r.jsxs)(
                                        s.zxk,
                                        D(L({}, e), {
                                            look: s.zxk.Looks.BLANK,
                                            size: s.zxk.Sizes.SMALL,
                                            onClick: ec,
                                            className: M.button,
                                            innerClassName: M.buttonInner,
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
                                                V ? w.intl.string(w.t['t5VZ8/']) : null
                                            ]
                                        })
                                    )
                            }),
                            !n &&
                                (0, r.jsx)(s.ua7, {
                                    text: w.intl.string(w.t.nFP4oa),
                                    children: (e) =>
                                        (0, r.jsx)(
                                            s.zxk,
                                            D(L({}, e), {
                                                look: s.zxk.Looks.BLANK,
                                                size: s.zxk.Sizes.SMALL,
                                                onClick: eu,
                                                className: M.button,
                                                innerClassName: M.buttonInner,
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
