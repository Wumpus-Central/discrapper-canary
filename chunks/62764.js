n.d(t, { Z: () => H }), n(388685);
var i = n(54381),
    r = n(473749),
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
    y = n(443877),
    C = n(490597),
    v = n(216337),
    _ = n(920888),
    O = n(287151),
    x = n(501517),
    E = n(982168),
    j = n(216572),
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
    k = n(342153),
    U = n(319720),
    V = n(127947),
    F = n(577650);
function B(e) {
    let { channel: t } = e,
        l = t.isArchivedThread(),
        a = (0, E.P0)(t),
        [o, c] = r.useState(!1),
        d = () => {
            c(!0),
                x.Z.resolveFlag(t.id).then(() => {
                    c(!1);
                });
        };
    return a
        ? (0, i.jsx)(u.Button, {
              size: "sm",
              variant: "secondary",
              text: l ? D.intl.string(k.default["2Y4vkk"]) : D.intl.string(k.default.YIbR4r),
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
function H(e) {
    let { postId: t, isFirstMessage: n, isLastItem: l = !1, parentChannelId: s } = e,
        { ref: x, width: E } = (0, h.ZP)(),
        [S, k] = r.useState(3),
        [H, G] = r.useState(!n),
        [z, W] = (0, f.Z)(!1, 2000),
        q = (0, o.e7)([T.Z], () => T.Z.getChannel(t), [t]),
        { firstMessage: K } = (0, M.cl)(q),
        Y = (0, o.e7)([I.Z], () => I.Z.hasJoined(t)),
        {
            disableReactionUpdates: X,
            disableReactionCreates: J,
            isLurking: Q,
            isGuest: $,
            isPendingMember: ee,
        } = (0, y.Z)(q),
        et = (0, j.nw)(q),
        en = (0, o.e7)([T.Z], () => T.Z.getChannel(s)),
        ei = (0, w.Bs)(en),
        er = (0, o.e7)([m.Z], () => m.Z.shouldDisplayPrompt(t) && !0 === n, [t, n]),
        el = r.useCallback(
            (e) => {
                let t = e[0];
                if (null != t && n) {
                    let e = t.intersectionRect,
                        n = t.boundingClientRect;
                    G((e.bottom - e.top) / (n.bottom - n.top) < 1);
                }
            },
            [n],
        );
    r.useLayoutEffect(() => {
        let e = x.current;
        if (null == e || !n) return;
        let t = new IntersectionObserver(el, { threshold: 1 });
        return (
            t.observe(e),
            () => {
                t.disconnect();
            }
        );
    });
    let [ea, eo] = r.useState(!0);
    if (
        (r.useEffect(() => {
            null != E && (k(Math.floor((E - 280) / 58)), eo(!1));
        }, [E]),
        null == q || null == K)
    )
        return null;
    let es = K.reactions.length > 0,
        ec = () => {
            (0, R.B)({
                postId: q.id,
                location: { section: L.jXE.CHANNEL_HEADER },
            }),
                (0, A.JG)((0, N.EO)(q, en), () => W(!0));
        },
        eu = Y ? u.dz2 : u.Dkj;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: a()(U.container, { [U.header]: H }),
                ref: x,
                children: [
                    et
                        ? (0, i.jsx)("div", {
                              className: U.reportedMessageActions,
                              children: (0, i.jsx)(P.Z, {
                                  message: K,
                                  channel: q,
                              }),
                          })
                        : (0, i.jsxs)("div", {
                              className: a()(U.reactButtons, { [U.loading]: ea }),
                              children: [
                                  !es &&
                                      !J &&
                                      null != ei &&
                                      (0, i.jsx)("div", {
                                          className: V.reactions,
                                          children: (0, i.jsx)(O.le, {
                                              message: K,
                                              readOnly: !1,
                                              useChatFontScaling: !1,
                                              isLurking: Q,
                                              isGuest: $,
                                              isPendingMember: ee,
                                              emoji: ei,
                                              type: b.O.NORMAL,
                                              hideCount: !0,
                                              count: 0,
                                              me: !1,
                                              burst_count: 0,
                                              me_burst: !1,
                                              emojiSize: "reaction",
                                          }),
                                      }),
                                  (0, i.jsx)(_.Z, {
                                      message: K,
                                      channel: q,
                                      disableReactionCreates: !0,
                                      disableReactionUpdates: X,
                                      isLurking: Q,
                                      isGuest: $,
                                      isPendingMember: ee,
                                      maxReactions: S,
                                      className: U.reactions,
                                      useChatFontScaling: !1,
                                      isForumToolbar: !0,
                                      forceHideReactionCreates: !0,
                                  }),
                                  !J &&
                                      (0, i.jsx)(C.X, {
                                          message: K,
                                          channel: q,
                                          useChatFontScaling: !1,
                                          className: a()(F.secondary, U.addReactButton, { [U.hasNoReactions]: !es }),
                                          isForumToolbar: !0,
                                          children: !es && D.intl.string(D.t.xpOyTO),
                                      }),
                              ],
                          }),
                    (0, i.jsxs)("div", {
                        className: U.buttons,
                        children: [
                            et
                                ? (0, i.jsx)(B, { channel: q })
                                : (0, i.jsx)(c.u, {
                                      text: D.intl.string(D.t.F7oeDv),
                                      children: (0, i.jsx)(u.Button, {
                                          icon: eu,
                                          size: "sm",
                                          variant: "secondary",
                                          text: Y ? D.intl.string(D.t["7OkUzs"]) : D.intl.string(D.t["3aOv+h"]),
                                          onClick: () => {
                                              Y
                                                  ? Z.Z.leaveThread(q, "Forum Toolbar")
                                                  : Z.Z.joinThread(q, "Forum Toolbar");
                                          },
                                      }),
                                  }),
                            (0, i.jsx)(c.u, {
                                text: D.intl.string(D.t.WqhZss),
                                children: z
                                    ? (0, i.jsx)(u.Button, {
                                          icon: u.dz2,
                                          size: "sm",
                                          variant: "secondary",
                                          onClick: ec,
                                          text: D.intl.string(D.t.t5VZ88),
                                      })
                                    : (0, i.jsx)(u.hU, {
                                          icon: u.xPt,
                                          size: "sm",
                                          variant: "secondary",
                                          onClick: ec,
                                          "aria-label": D.intl.string(D.t.WqhZss),
                                      }),
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
            er && (0, i.jsx)(g.Z, { threadId: t }),
            (0, i.jsx)(v.Z, {
                channel: q,
                isLastItem: l,
            }),
        ],
    });
}
