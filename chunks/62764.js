n.d(t, { Z: () => V }), n(388685);
var r = n(951288),
    i = n(647438),
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
    y = n(60174),
    _ = n(216337),
    C = n(920888),
    x = n(287151),
    v = n(501517),
    j = n(982168),
    O = n(216572),
    E = n(5101),
    S = n(817608),
    P = n(569471),
    I = n(346479),
    Z = n(592125),
    T = n(934415),
    N = n(572004),
    A = n(456269),
    w = n(109590),
    R = n(228392),
    M = n(981631),
    k = n(388032),
    D = n(764295),
    L = n(319720),
    U = n(214785),
    B = n(127947);
function F(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
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
        a = (0, j.P0)(t),
        [o, u] = i.useState(!1),
        d = () => {
            u(!0),
                v.Z.resolveFlag(t.id).then(() => {
                    u(!1);
                });
        };
    return a
        ? (0, r.jsx)(c.zxk, {
              size: "sm",
              variant: "secondary",
              text: l ? k.intl.string(D.default["2Y4vkp"]) : k.intl.string(D.default.YIbR4u),
              onClick: () => {
                  !0 === s.K.get(E.F)
                      ? d()
                      : (0, c.ZDy)(async () => {
                            let { default: e } = await Promise.resolve().then(n.bind(n, 5101));
                            return (t) => {
                                let { transitionState: n, onClose: i } = t;
                                return (0, r.jsx)(e, {
                                    transitionState: n,
                                    onClose: i,
                                    handleResolveFlag: d,
                                });
                            };
                        });
              },
              loading: o,
              icon: c.dz2,
              disabled: l,
          })
        : null;
}
function V(e) {
    let { postId: t, isFirstMessage: n, isLastItem: l = !1, parentChannelId: s } = e,
        { ref: v, width: j } = (0, p.ZP)(),
        [E, D] = i.useState(3),
        [V, z] = i.useState(!n),
        [W, q] = (0, h.Z)(!1, 2000),
        Y = (0, o.e7)([Z.Z], () => Z.Z.getChannel(t), [t]),
        { firstMessage: K } = (0, w.cl)(Y),
        X = (0, o.e7)([P.Z], () => P.Z.hasJoined(t)),
        {
            disableReactionUpdates: Q,
            disableReactionCreates: J,
            isLurking: $,
            isGuest: ee,
            isPendingMember: et,
        } = (0, b.Z)(Y),
        en = (0, O.nw)(Y),
        er = (0, o.e7)([Z.Z], () => Z.Z.getChannel(s)),
        ei = (0, A.Bs)(er),
        el = (0, o.e7)([f.Z], () => f.Z.shouldDisplayPrompt(t) && !0 === n, [t, n]),
        ea = i.useCallback(
            (e) => {
                let t = e[0];
                if (null != t && n) {
                    let e = t.intersectionRect,
                        n = t.boundingClientRect;
                    z((e.bottom - e.top) / (n.bottom - n.top) < 1);
                }
            },
            [n],
        );
    i.useLayoutEffect(() => {
        let e = v.current;
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
            null != j && (D(Math.floor((j - 280) / 58)), es(!1));
        }, [j]),
        null == Y || null == K)
    )
        return null;
    let ec = K.reactions.length > 0,
        eu = () => {
            X ? I.Z.leaveThread(Y, "Forum Toolbar") : I.Z.joinThread(Y, "Forum Toolbar");
        },
        ed = () => {
            (0, R.B)({
                postId: Y.id,
                location: { section: M.jXE.CHANNEL_HEADER },
            }),
                (0, N.JG)((0, T.EO)(Y, er), () => q(!0));
        },
        ep = () => {
            u.Z.jumpToMessage({
                channelId: Y.id,
                messageId: Y.id,
                flash: !0,
                jumpType: d.SR.INSTANT,
            });
        },
        eh = X ? c.dz2 : c.Dkj;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: a()(L.container, { [L.header]: V }),
                ref: v,
                children: [
                    en
                        ? (0, r.jsx)("div", {
                              className: L.reportedMessageActions,
                              children: (0, r.jsx)(S.Z, {
                                  message: K,
                                  channel: Y,
                              }),
                          })
                        : (0, r.jsxs)("div", {
                              className: a()(L.reactButtons, { [L.loading]: eo }),
                              children: [
                                  !ec &&
                                      !J &&
                                      null != ei &&
                                      (0, r.jsx)("div", {
                                          className: B.reactions,
                                          children: (0, r.jsx)(x.le, {
                                              message: K,
                                              readOnly: !1,
                                              useChatFontScaling: !1,
                                              isLurking: $,
                                              isGuest: ee,
                                              isPendingMember: et,
                                              emoji: ei,
                                              type: g.O.NORMAL,
                                              hideCount: !0,
                                              count: 0,
                                              me: !1,
                                              burst_count: 0,
                                              me_burst: !1,
                                              emojiSize: "reaction",
                                          }),
                                      }),
                                  (0, r.jsx)(C.Z, {
                                      message: K,
                                      channel: Y,
                                      disableReactionCreates: !0,
                                      disableReactionUpdates: Q,
                                      isLurking: $,
                                      isGuest: ee,
                                      isPendingMember: et,
                                      maxReactions: E,
                                      className: L.reactions,
                                      useChatFontScaling: !1,
                                      isForumToolbar: !0,
                                      forceHideReactionCreates: !0,
                                  }),
                                  !J &&
                                      (0, r.jsx)(y.X, {
                                          type: g.O.NORMAL,
                                          message: K,
                                          channel: Y,
                                          useChatFontScaling: !1,
                                          className: a()(U.secondary, L.addReactButton, { [L.hasNoReactions]: !ec }),
                                          isForumToolbar: !0,
                                          children: !ec && k.intl.string(k.t.xpOyTE),
                                      }),
                              ],
                          }),
                    (0, r.jsxs)("div", {
                        className: L.buttons,
                        children: [
                            en
                                ? (0, r.jsx)(G, { channel: Y })
                                : (0, r.jsx)(c.ua7, {
                                      text: k.intl.string(k.t.F7oeDg),
                                      children: (e) =>
                                          (0, r.jsx)(
                                              c.zxk,
                                              H(F({}, e), {
                                                  icon: eh,
                                                  size: "sm",
                                                  variant: "secondary",
                                                  text: X ? k.intl.string(k.t["7OkUzs"]) : k.intl.string(k.t["3aOv+v"]),
                                                  onClick: eu,
                                              }),
                                          ),
                                  }),
                            (0, r.jsx)(c.ua7, {
                                text: k.intl.string(k.t.WqhZsr),
                                children: (e) =>
                                    W
                                        ? (0, r.jsx)(
                                              c.zxk,
                                              H(F({}, e), {
                                                  icon: c.dz2,
                                                  size: "sm",
                                                  variant: "secondary",
                                                  onClick: ed,
                                                  text: k.intl.string(k.t["t5VZ8/"]),
                                              }),
                                          )
                                        : (0, r.jsx)(
                                              c.hU,
                                              H(F({}, e), {
                                                  icon: c.xPt,
                                                  size: "sm",
                                                  variant: "secondary",
                                                  onClick: ed,
                                                  "aria-label": k.intl.string(k.t.WqhZsr),
                                              }),
                                          ),
                            }),
                            !n &&
                                (0, r.jsx)(c.ua7, {
                                    text: k.intl.string(k.t.nFP4oa),
                                    children: (e) =>
                                        (0, r.jsx)(
                                            c.hU,
                                            H(F({}, e), {
                                                icon: c.Za2,
                                                size: "sm",
                                                variant: "secondary",
                                                onClick: ep,
                                                "aria-label": k.intl.string(k.t.nFP4oa),
                                            }),
                                        ),
                                }),
                        ],
                    }),
                ],
            }),
            el && (0, r.jsx)(m.Z, { threadId: t }),
            (0, r.jsx)(_.Z, {
                channel: Y,
                isLastItem: l,
            }),
        ],
    });
}
