n.d(t, { Z: () => X }), n(388685);
var r = n(255367),
    i = n(73800),
    o = n(120356),
    a = n.n(o),
    s = n(442837),
    l = n(433517),
    c = n(481060),
    u = n(904245),
    d = n(593472),
    f = n(393238),
    _ = n(330726),
    p = n(48929),
    h = n(333535),
    m = n(566006),
    g = n(443877),
    E = n(60174),
    b = n(216337),
    y = n(920888),
    O = n(287151),
    v = n(501517),
    I = n(982168),
    T = n(216572),
    S = n(5101),
    A = n(817608),
    N = n(569471),
    C = n(346479),
    R = n(592125),
    P = n(934415),
    w = n(572004),
    D = n(456269),
    L = n(109590),
    x = n(228392),
    M = n(981631),
    k = n(388032),
    j = n(764295),
    U = n(319720),
    G = n(214785),
    B = n(127947);
function Z(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
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
                Z(e, t, n[t]);
            });
    }
    return e;
}
function V(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function H(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : V(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let Y = 2000,
    W = 3,
    K = 280,
    z = 58;
function q(e) {
    let { channel: t } = e,
        o = t.isArchivedThread(),
        a = (0, I.P0)(t),
        [s, u] = i.useState(!1),
        d = () => {
            u(!0),
                v.Z.resolveFlag(t.id).then(() => {
                    u(!1);
                });
        };
    if (!a) return null;
    let f = () => {
        !0 === l.K.get(S.F)
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
    };
    return (0, r.jsx)(c.zxk, {
        size: "sm",
        variant: "secondary",
        text: o ? k.intl.string(j.default["2Y4vkp"]) : k.intl.string(j.default.YIbR4u),
        onClick: f,
        loading: s,
        icon: c.dz2,
        disabled: o,
    });
}
function X(e) {
    let { postId: t, isFirstMessage: n, isLastItem: o = !1, parentChannelId: l } = e,
        { ref: v, width: I } = (0, f.ZP)(),
        [S, j] = i.useState(W),
        [Z, V] = i.useState(!n),
        [X, Q] = (0, _.Z)(!1, Y),
        J = (0, s.e7)([R.Z], () => R.Z.getChannel(t), [t]),
        { firstMessage: $ } = (0, L.cl)(J),
        ee = (0, s.e7)([N.Z], () => N.Z.hasJoined(t)),
        {
            disableReactionUpdates: et,
            disableReactionCreates: en,
            isLurking: er,
            isGuest: ei,
            isPendingMember: eo,
        } = (0, g.Z)(J),
        ea = (0, T.nw)(J),
        es = (0, s.e7)([R.Z], () => R.Z.getChannel(l)),
        el = (0, D.Bs)(es),
        ec = (0, s.e7)([p.Z], () => p.Z.shouldDisplayPrompt(t) && !0 === n, [t, n]),
        eu = i.useCallback(
            (e) => {
                let t = e[0];
                if (null != t && n) {
                    let e = t.intersectionRect,
                        n = t.boundingClientRect;
                    V((e.bottom - e.top) / (n.bottom - n.top) < 1);
                }
            },
            [n],
        );
    i.useLayoutEffect(() => {
        let e = v.current;
        if (null == e || !n) return;
        let t = new IntersectionObserver(eu, { threshold: 1 });
        return (
            t.observe(e),
            () => {
                t.disconnect();
            }
        );
    });
    let [ed, ef] = i.useState(!0);
    if (
        (i.useEffect(() => {
            null != I && (j(Math.floor((I - K) / z)), ef(!1));
        }, [I]),
        null == J || null == $)
    )
        return null;
    let e_ = $.reactions.length > 0,
        ep = () => {
            ee ? C.Z.leaveThread(J, "Forum Toolbar") : C.Z.joinThread(J, "Forum Toolbar");
        },
        eh = () => {
            (0, x.B)({
                postId: J.id,
                location: { section: M.jXE.CHANNEL_HEADER },
            }),
                (0, w.JG)((0, P.EO)(J, es), () => Q(!0));
        },
        em = () => {
            u.Z.jumpToMessage({
                channelId: J.id,
                messageId: J.id,
                flash: !0,
                jumpType: d.SR.INSTANT,
            });
        },
        eg = ee ? c.dz2 : c.Dkj,
        eE = !e_ && !en;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: a()(U.container, { [U.header]: Z }),
                ref: v,
                children: [
                    ea
                        ? (0, r.jsx)("div", {
                              className: U.reportedMessageActions,
                              children: (0, r.jsx)(A.Z, {
                                  message: $,
                                  channel: J,
                              }),
                          })
                        : (0, r.jsxs)("div", {
                              className: a()(U.reactButtons, { [U.loading]: ed }),
                              children: [
                                  eE &&
                                      null != el &&
                                      (0, r.jsx)("div", {
                                          className: B.reactions,
                                          children: (0, r.jsx)(O.le, {
                                              message: $,
                                              readOnly: !1,
                                              useChatFontScaling: !1,
                                              isLurking: er,
                                              isGuest: ei,
                                              isPendingMember: eo,
                                              emoji: el,
                                              type: m.O.NORMAL,
                                              hideCount: !0,
                                              count: 0,
                                              me: !1,
                                              burst_count: 0,
                                              me_burst: !1,
                                              emojiSize: "reaction",
                                          }),
                                      }),
                                  (0, r.jsx)(y.Z, {
                                      message: $,
                                      channel: J,
                                      disableReactionCreates: !0,
                                      disableReactionUpdates: et,
                                      isLurking: er,
                                      isGuest: ei,
                                      isPendingMember: eo,
                                      maxReactions: S,
                                      className: U.reactions,
                                      useChatFontScaling: !1,
                                      isForumToolbar: !0,
                                      forceHideReactionCreates: !0,
                                  }),
                                  !en &&
                                      (0, r.jsx)(E.X, {
                                          type: m.O.NORMAL,
                                          message: $,
                                          channel: J,
                                          useChatFontScaling: !1,
                                          className: a()(G.secondary, U.addReactButton, { [U.hasNoReactions]: !e_ }),
                                          isForumToolbar: !0,
                                          children: !e_ && k.intl.string(k.t.xpOyTE),
                                      }),
                              ],
                          }),
                    (0, r.jsxs)("div", {
                        className: U.buttons,
                        children: [
                            ea
                                ? (0, r.jsx)(q, { channel: J })
                                : (0, r.jsx)(c.ua7, {
                                      text: k.intl.string(k.t.F7oeDg),
                                      children: (e) =>
                                          (0, r.jsx)(
                                              c.zxk,
                                              H(F({}, e), {
                                                  icon: eg,
                                                  size: "sm",
                                                  variant: "secondary",
                                                  text: ee
                                                      ? k.intl.string(k.t["7OkUzs"])
                                                      : k.intl.string(k.t["3aOv+v"]),
                                                  onClick: ep,
                                              }),
                                          ),
                                  }),
                            (0, r.jsx)(c.ua7, {
                                text: k.intl.string(k.t.WqhZsr),
                                children: (e) =>
                                    X
                                        ? (0, r.jsx)(
                                              c.zxk,
                                              H(F({}, e), {
                                                  icon: c.dz2,
                                                  size: "sm",
                                                  variant: "secondary",
                                                  onClick: eh,
                                                  text: k.intl.string(k.t["t5VZ8/"]),
                                              }),
                                          )
                                        : (0, r.jsx)(
                                              c.hU,
                                              H(F({}, e), {
                                                  icon: c.xPt,
                                                  size: "sm",
                                                  variant: "secondary",
                                                  onClick: eh,
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
                                                onClick: em,
                                                "aria-label": k.intl.string(k.t.nFP4oa),
                                            }),
                                        ),
                                }),
                        ],
                    }),
                ],
            }),
            ec && (0, r.jsx)(h.Z, { threadId: t }),
            (0, r.jsx)(b.Z, {
                channel: J,
                isLastItem: o,
            }),
        ],
    });
}
