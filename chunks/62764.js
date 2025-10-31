n.d(t, { Z: () => H }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
    s = n(433517),
    c = n(28664),
    u = n(481060),
    d = n(904245),
    p = n(593472),
    f = n(393238),
    h = n(330726),
    m = n(48929),
    g = n(333535),
    b = n(566006),
    _ = n(443877),
    y = n(60174),
    C = n(216337),
    v = n(920888),
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
    D = n(981631),
    L = n(388032),
    k = n(43617),
    U = n(319720),
    B = n(127947),
    F = n(577650);
function V(e) {
    let { channel: t } = e,
        l = t.isArchivedThread(),
        a = (0, E.P0)(t),
        [o, c] = i.useState(!1),
        d = () => {
            c(!0),
                x.Z.resolveFlag(t.id).then(() => {
                    c(!1);
                });
        };
    return a
        ? (0, r.jsx)(u.Button, {
              size: "sm",
              variant: "secondary",
              text: l ? L.intl.string(k.default["2Y4vkk"]) : L.intl.string(k.default.YIbR4r),
              onClick: () => {
                  !0 === s.K.get(S.F)
                      ? d()
                      : (0, u.ZDy)(async () => {
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
              icon: u.dz2,
              disabled: l,
          })
        : null;
}
function H(e) {
    let { postId: t, isFirstMessage: n, isLastItem: l = !1, parentChannelId: s } = e,
        { ref: x, width: E } = (0, f.ZP)(),
        [S, k] = i.useState(3),
        [H, G] = i.useState(!n),
        [W, z] = (0, h.Z)(!1, 2000),
        q = (0, o.e7)([T.Z], () => T.Z.getChannel(t), [t]),
        { firstMessage: Y } = (0, M.cl)(q),
        K = (0, o.e7)([I.Z], () => I.Z.hasJoined(t)),
        {
            disableReactionUpdates: X,
            disableReactionCreates: J,
            isLurking: Q,
            isGuest: $,
            isPendingMember: ee,
        } = (0, _.Z)(q),
        et = (0, j.nw)(q),
        en = (0, o.e7)([T.Z], () => T.Z.getChannel(s)),
        er = (0, w.Bs)(en),
        ei = (0, o.e7)([m.Z], () => m.Z.shouldDisplayPrompt(t) && !0 === n, [t, n]),
        el = i.useCallback(
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
    i.useLayoutEffect(() => {
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
    let [ea, eo] = i.useState(!0);
    if (
        (i.useEffect(() => {
            null != E && (k(Math.floor((E - 280) / 58)), eo(!1));
        }, [E]),
        null == q || null == Y)
    )
        return null;
    let es = Y.reactions.length > 0,
        ec = () => {
            (0, R.B)({
                postId: q.id,
                location: { section: D.jXE.CHANNEL_HEADER },
            }),
                (0, A.JG)((0, N.EO)(q, en), () => z(!0));
        },
        eu = K ? u.dz2 : u.Dkj;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: a()(U.container, { [U.header]: H }),
                ref: x,
                children: [
                    et
                        ? (0, r.jsx)("div", {
                              className: U.reportedMessageActions,
                              children: (0, r.jsx)(P.Z, {
                                  message: Y,
                                  channel: q,
                              }),
                          })
                        : (0, r.jsxs)("div", {
                              className: a()(U.reactButtons, { [U.loading]: ea }),
                              children: [
                                  !es &&
                                      !J &&
                                      null != er &&
                                      (0, r.jsx)("div", {
                                          className: B.reactions,
                                          children: (0, r.jsx)(O.le, {
                                              message: Y,
                                              readOnly: !1,
                                              useChatFontScaling: !1,
                                              isLurking: Q,
                                              isGuest: $,
                                              isPendingMember: ee,
                                              emoji: er,
                                              type: b.O.NORMAL,
                                              hideCount: !0,
                                              count: 0,
                                              me: !1,
                                              burst_count: 0,
                                              me_burst: !1,
                                              emojiSize: "reaction",
                                          }),
                                      }),
                                  (0, r.jsx)(v.Z, {
                                      message: Y,
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
                                      (0, r.jsx)(y.X, {
                                          message: Y,
                                          channel: q,
                                          useChatFontScaling: !1,
                                          className: a()(F.secondary, U.addReactButton, { [U.hasNoReactions]: !es }),
                                          isForumToolbar: !0,
                                          children: !es && L.intl.string(L.t.xpOyTO),
                                      }),
                              ],
                          }),
                    (0, r.jsxs)("div", {
                        className: U.buttons,
                        children: [
                            et
                                ? (0, r.jsx)(V, { channel: q })
                                : (0, r.jsx)(c.u, {
                                      text: L.intl.string(L.t.F7oeDv),
                                      children: (0, r.jsx)(u.Button, {
                                          icon: eu,
                                          size: "sm",
                                          variant: "secondary",
                                          text: K ? L.intl.string(L.t["7OkUzs"]) : L.intl.string(L.t["3aOv+h"]),
                                          onClick: () => {
                                              K
                                                  ? Z.Z.leaveThread(q, "Forum Toolbar")
                                                  : Z.Z.joinThread(q, "Forum Toolbar");
                                          },
                                      }),
                                  }),
                            (0, r.jsx)(c.u, {
                                text: L.intl.string(L.t.WqhZss),
                                children: W
                                    ? (0, r.jsx)(u.Button, {
                                          icon: u.dz2,
                                          size: "sm",
                                          variant: "secondary",
                                          onClick: ec,
                                          text: L.intl.string(L.t.t5VZ88),
                                      })
                                    : (0, r.jsx)(u.hU, {
                                          icon: u.xPt,
                                          size: "sm",
                                          variant: "secondary",
                                          onClick: ec,
                                          "aria-label": L.intl.string(L.t.WqhZss),
                                      }),
                            }),
                            !n &&
                                (0, r.jsx)(c.u, {
                                    text: L.intl.string(L.t.nFP4oa),
                                    children: (0, r.jsx)(u.hU, {
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
                                        "aria-label": L.intl.string(L.t.nFP4oa),
                                    }),
                                }),
                        ],
                    }),
                ],
            }),
            ei && (0, r.jsx)(g.Z, { threadId: t }),
            (0, r.jsx)(C.Z, {
                channel: q,
                isLastItem: l,
            }),
        ],
    });
}
