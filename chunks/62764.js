n.d(t, { Z: () => z }), n(388685);
var i = n(951288),
    r = n(647438),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
    s = n(433517),
    c = n(28664),
    u = n(481060),
    d = n(904245),
    p = n(593472),
    h = n(393238),
    f = n(330726),
    m = n(48929),
    g = n(333535),
    b = n(566006),
    C = n(443877),
    y = n(60174),
    _ = n(216337),
    v = n(920888),
    x = n(287151),
    O = n(501517),
    j = n(982168),
    E = n(216572),
    S = n(5101),
    P = n(817608),
    I = n(569471),
    Z = n(346479),
    T = n(592125),
    N = n(934415),
    A = n(572004),
    w = n(456269),
    M = n(109590),
    R = n(228392),
    L = n(981631),
    D = n(388032),
    k = n(764295),
    U = n(319720),
    B = n(127947),
    H = n(577650);
function V(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = i);
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
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
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
        [o, c] = r.useState(!1),
        d = () => {
            c(!0),
                O.Z.resolveFlag(t.id).then(() => {
                    c(!1);
                });
        };
    return a
        ? (0, i.jsx)(u.Button, {
              size: "sm",
              variant: "secondary",
              text: l ? D.intl.string(k.default["2Y4vkp"]) : D.intl.string(k.default.YIbR4u),
              onClick: () => {
                  !0 === s.K.get(S.F)
                      ? d()
                      : (0, u.ZDy)(async () => {
                            let { default: e } = await Promise.resolve().then(n.bind(n, 5101));
                            return (t) => {
                                let { transitionState: n, onClose: r } = t;
                                return (0, i.jsx)(e, {
                                    transitionState: n,
                                    onClose: r,
                                    handleResolveFlag: d,
                                });
                            };
                        });
              },
              loading: o,
              icon: u.dz2,
              disabled: l,
          })
        : null;
}
function z(e) {
    let { postId: t, isFirstMessage: n, isLastItem: l = !1, parentChannelId: s } = e,
        { ref: O, width: j } = (0, h.ZP)(),
        [S, k] = r.useState(3),
        [z, W] = r.useState(!n),
        [Y, K] = (0, f.Z)(!1, 2000),
        q = (0, o.e7)([T.Z], () => T.Z.getChannel(t), [t]),
        { firstMessage: X } = (0, M.cl)(q),
        J = (0, o.e7)([I.Z], () => I.Z.hasJoined(t)),
        {
            disableReactionUpdates: Q,
            disableReactionCreates: $,
            isLurking: ee,
            isGuest: et,
            isPendingMember: en,
        } = (0, C.Z)(q),
        ei = (0, E.nw)(q),
        er = (0, o.e7)([T.Z], () => T.Z.getChannel(s)),
        el = (0, w.Bs)(er),
        ea = (0, o.e7)([m.Z], () => m.Z.shouldDisplayPrompt(t) && !0 === n, [t, n]),
        eo = r.useCallback(
            (e) => {
                let t = e[0];
                if (null != t && n) {
                    let e = t.intersectionRect,
                        n = t.boundingClientRect;
                    W((e.bottom - e.top) / (n.bottom - n.top) < 1);
                }
            },
            [n],
        );
    r.useLayoutEffect(() => {
        let e = O.current;
        if (null == e || !n) return;
        let t = new IntersectionObserver(eo, { threshold: 1 });
        return (
            t.observe(e),
            () => {
                t.disconnect();
            }
        );
    });
    let [es, ec] = r.useState(!0);
    if (
        (r.useEffect(() => {
            null != j && (k(Math.floor((j - 280) / 58)), ec(!1));
        }, [j]),
        null == q || null == X)
    )
        return null;
    let eu = X.reactions.length > 0,
        ed = () => {
            (0, R.B)({
                postId: q.id,
                location: { section: L.jXE.CHANNEL_HEADER },
            }),
                (0, A.JG)((0, N.EO)(q, er), () => K(!0));
        },
        ep = J ? u.dz2 : u.Dkj;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: a()(U.container, { [U.header]: z }),
                ref: O,
                children: [
                    ei
                        ? (0, i.jsx)("div", {
                              className: U.reportedMessageActions,
                              children: (0, i.jsx)(P.Z, {
                                  message: X,
                                  channel: q,
                              }),
                          })
                        : (0, i.jsxs)("div", {
                              className: a()(U.reactButtons, { [U.loading]: es }),
                              children: [
                                  !eu &&
                                      !$ &&
                                      null != el &&
                                      (0, i.jsx)("div", {
                                          className: B.reactions,
                                          children: (0, i.jsx)(x.le, {
                                              message: X,
                                              readOnly: !1,
                                              useChatFontScaling: !1,
                                              isLurking: ee,
                                              isGuest: et,
                                              isPendingMember: en,
                                              emoji: el,
                                              type: b.O.NORMAL,
                                              hideCount: !0,
                                              count: 0,
                                              me: !1,
                                              burst_count: 0,
                                              me_burst: !1,
                                              emojiSize: "reaction",
                                          }),
                                      }),
                                  (0, i.jsx)(v.Z, {
                                      message: X,
                                      channel: q,
                                      disableReactionCreates: !0,
                                      disableReactionUpdates: Q,
                                      isLurking: ee,
                                      isGuest: et,
                                      isPendingMember: en,
                                      maxReactions: S,
                                      className: U.reactions,
                                      useChatFontScaling: !1,
                                      isForumToolbar: !0,
                                      forceHideReactionCreates: !0,
                                  }),
                                  !$ &&
                                      (0, i.jsx)(y.X, {
                                          type: b.O.NORMAL,
                                          message: X,
                                          channel: q,
                                          useChatFontScaling: !1,
                                          className: a()(H.secondary, U.addReactButton, { [U.hasNoReactions]: !eu }),
                                          isForumToolbar: !0,
                                          children: !eu && D.intl.string(D.t.xpOyTE),
                                      }),
                              ],
                          }),
                    (0, i.jsxs)("div", {
                        className: U.buttons,
                        children: [
                            ei
                                ? (0, i.jsx)(G, { channel: q })
                                : (0, i.jsx)(c.u, {
                                      text: D.intl.string(D.t.F7oeDg),
                                      children: (0, i.jsx)(u.Button, {
                                          icon: ep,
                                          size: "sm",
                                          variant: "secondary",
                                          text: J ? D.intl.string(D.t["7OkUzs"]) : D.intl.string(D.t["3aOv+v"]),
                                          onClick: () => {
                                              J
                                                  ? Z.Z.leaveThread(q, "Forum Toolbar")
                                                  : Z.Z.joinThread(q, "Forum Toolbar");
                                          },
                                      }),
                                  }),
                            (0, i.jsx)(u.ua7, {
                                "data-migration-pending": !0,
                                text: D.intl.string(D.t.WqhZsr),
                                children: (e) =>
                                    Y
                                        ? (0, i.jsx)(
                                              u.Button,
                                              F(V({}, e), {
                                                  icon: u.dz2,
                                                  size: "sm",
                                                  variant: "secondary",
                                                  onClick: ed,
                                                  text: D.intl.string(D.t["t5VZ8/"]),
                                              }),
                                          )
                                        : (0, i.jsx)(
                                              u.hU,
                                              F(V({}, e), {
                                                  icon: u.xPt,
                                                  size: "sm",
                                                  variant: "secondary",
                                                  onClick: ed,
                                                  "aria-label": D.intl.string(D.t.WqhZsr),
                                              }),
                                          ),
                            }),
                            !n &&
                                (0, i.jsx)(c.u, {
                                    text: D.intl.string(D.t.nFP4oa),
                                    children: (0, i.jsx)(u.hU, {
                                        icon: u.Za2,
                                        size: "sm",
                                        variant: "secondary",
                                        onClick: () => {
                                            d.Z.jumpToMessage({
                                                channelId: q.id,
                                                messageId: q.id,
                                                flash: !0,
                                                jumpType: p.SR.INSTANT,
                                            });
                                        },
                                        "aria-label": D.intl.string(D.t.nFP4oa),
                                    }),
                                }),
                        ],
                    }),
                ],
            }),
            ea && (0, i.jsx)(g.Z, { threadId: t }),
            (0, i.jsx)(_.Z, {
                channel: q,
                isLastItem: l,
            }),
        ],
    });
}
