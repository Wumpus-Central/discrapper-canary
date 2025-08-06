n.d(t, { Z: () => Q }), n(388685);
var r = n(255367),
    i = n(73800),
    o = n(120356),
    a = n.n(o),
    s = n(442837),
    l = n(433517),
    c = n(755721),
    u = n(481060),
    d = n(904245),
    f = n(593472),
    _ = n(393238),
    p = n(330726),
    h = n(48929),
    m = n(333535),
    g = n(566006),
    E = n(443877),
    b = n(60174),
    y = n(216337),
    O = n(920888),
    v = n(287151),
    I = n(501517),
    T = n(982168),
    S = n(216572),
    A = n(5101),
    N = n(817608),
    C = n(569471),
    R = n(346479),
    P = n(592125),
    w = n(934415),
    D = n(572004),
    L = n(456269),
    x = n(109590),
    M = n(228392),
    k = n(981631),
    j = n(388032),
    U = n(130883),
    G = n(184844),
    B = n(92254);
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
let Y = 16,
    W = 2000,
    K = 3,
    z = 280,
    q = 58;
function X(e) {
    let { channel: t } = e,
        o = t.isArchivedThread(),
        a = (0, T.P0)(t),
        [s, d] = i.useState(!1),
        f = () => {
            d(!0),
                I.Z.resolveFlag(t.id).then(() => {
                    d(!1);
                });
        };
    if (!a) return null;
    let _ = () => {
        !0 === l.K.get(A.F)
            ? f()
            : (0, u.ZDy)(async () => {
                  let { default: e } = await Promise.resolve().then(n.bind(n, 5101));
                  return (t) => {
                      let { transitionState: n, onClose: i } = t;
                      return (0, r.jsx)(e, {
                          transitionState: n,
                          onClose: i,
                          handleResolveFlag: f,
                      });
                  };
              });
    };
    return (0, r.jsxs)(c.zx, {
        size: c.zx.Sizes.SMALL,
        look: c.zx.Looks.FILLED,
        color: c.zx.Colors.PRIMARY,
        onClick: _,
        disabled: o,
        innerClassName: G.actionButton,
        submitting: s,
        children: [
            (0, r.jsx)(u.dz2, {
                size: "custom",
                color: "currentColor",
                width: Y,
                height: Y,
            }),
            o ? j.intl.string(U.default["2Y4vkp"]) : j.intl.string(U.default.YIbR4u),
        ],
    });
}
function Q(e) {
    let { postId: t, isFirstMessage: n, isLastItem: o = !1, parentChannelId: l } = e,
        { ref: I, width: T } = (0, _.ZP)(),
        [A, U] = i.useState(K),
        [Z, V] = i.useState(!n),
        [Q, J] = (0, p.Z)(!1, W),
        $ = (0, s.e7)([P.Z], () => P.Z.getChannel(t), [t]),
        { firstMessage: ee } = (0, x.cl)($),
        et = (0, s.e7)([C.Z], () => C.Z.hasJoined(t)),
        {
            disableReactionUpdates: en,
            disableReactionCreates: er,
            isLurking: ei,
            isGuest: eo,
            isPendingMember: ea,
        } = (0, E.Z)($),
        es = (0, S.nw)($),
        el = (0, s.e7)([P.Z], () => P.Z.getChannel(l)),
        ec = (0, L.Bs)(el),
        eu = (0, s.e7)([h.Z], () => h.Z.shouldDisplayPrompt(t) && !0 === n, [t, n]),
        ed = i.useCallback(
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
        let e = I.current;
        if (null == e || !n) return;
        let t = new IntersectionObserver(ed, { threshold: 1 });
        return (
            t.observe(e),
            () => {
                t.disconnect();
            }
        );
    });
    let [ef, e_] = i.useState(!0);
    if (
        (i.useEffect(() => {
            null != T && (U(Math.floor((T - z) / q)), e_(!1));
        }, [T]),
        null == $ || null == ee)
    )
        return null;
    let ep = ee.reactions.length > 0,
        eh = () => {
            et ? R.Z.leaveThread($, "Forum Toolbar") : R.Z.joinThread($, "Forum Toolbar");
        },
        em = () => {
            (0, M.B)({
                postId: $.id,
                location: { section: k.jXE.CHANNEL_HEADER },
            }),
                (0, D.JG)((0, w.EO)($, el), () => J(!0));
        },
        eg = () => {
            d.Z.jumpToMessage({
                channelId: $.id,
                messageId: $.id,
                flash: !0,
                jumpType: f.SR.INSTANT,
            });
        },
        eE = et ? u.dz2 : u.Dkj,
        eb = !ep && !er;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: a()(G.container, { [G.header]: Z }),
                ref: I,
                children: [
                    es
                        ? (0, r.jsx)("div", {
                              className: G.reportedMessageActions,
                              children: (0, r.jsx)(N.Z, {
                                  message: ee,
                                  channel: $,
                              }),
                          })
                        : (0, r.jsxs)("div", {
                              className: a()(G.reactButtons, { [G.loading]: ef }),
                              children: [
                                  eb &&
                                      null != ec &&
                                      (0, r.jsx)("div", {
                                          className: B.reactions,
                                          children: (0, r.jsx)(v.le, {
                                              message: ee,
                                              readOnly: !1,
                                              useChatFontScaling: !1,
                                              isLurking: ei,
                                              isGuest: eo,
                                              isPendingMember: ea,
                                              emoji: ec,
                                              type: g.O.NORMAL,
                                              hideCount: !0,
                                              count: 0,
                                              me: !1,
                                              burst_count: 0,
                                              me_burst: !1,
                                              emojiSize: "reaction",
                                          }),
                                      }),
                                  (0, r.jsx)(O.Z, {
                                      message: ee,
                                      channel: $,
                                      disableReactionCreates: !0,
                                      disableReactionUpdates: en,
                                      isLurking: ei,
                                      isGuest: eo,
                                      isPendingMember: ea,
                                      maxReactions: A,
                                      className: G.reactions,
                                      useChatFontScaling: !1,
                                      isForumToolbar: !0,
                                      forceHideReactionCreates: !0,
                                  }),
                                  !er &&
                                      (0, r.jsx)(b.X, {
                                          type: g.O.NORMAL,
                                          message: ee,
                                          channel: $,
                                          useChatFontScaling: !1,
                                          className: a()(G.addReactButton, { [G.hasNoReactions]: !ep }),
                                          isForumToolbar: !0,
                                          children: !ep && j.intl.string(j.t.xpOyTE),
                                      }),
                              ],
                          }),
                    (0, r.jsxs)("div", {
                        className: G.buttons,
                        children: [
                            es
                                ? (0, r.jsx)(X, { channel: $ })
                                : (0, r.jsx)(u.ua7, {
                                      text: j.intl.string(j.t.F7oeDg),
                                      children: (e) =>
                                          (0, r.jsxs)(
                                              c.zx,
                                              H(F({}, e), {
                                                  look: c.zx.Looks.BLANK,
                                                  size: c.zx.Sizes.SMALL,
                                                  onClick: eh,
                                                  className: G.button,
                                                  innerClassName: a()(G.buttonInner, { [G.active]: et }),
                                                  children: [
                                                      (0, r.jsx)(eE, {
                                                          size: "xs",
                                                          color: "currentColor",
                                                      }),
                                                      et ? j.intl.string(j.t["7OkUzs"]) : j.intl.string(j.t["3aOv+v"]),
                                                  ],
                                              }),
                                          ),
                                  }),
                            (0, r.jsx)(u.ua7, {
                                text: j.intl.string(j.t.WqhZsr),
                                children: (e) =>
                                    (0, r.jsxs)(
                                        c.zx,
                                        H(F({}, e), {
                                            look: c.zx.Looks.BLANK,
                                            size: c.zx.Sizes.SMALL,
                                            onClick: em,
                                            className: G.button,
                                            innerClassName: G.buttonInner,
                                            children: [
                                                Q
                                                    ? (0, r.jsx)(u.dz2, {
                                                          size: "custom",
                                                          color: "currentColor",
                                                          width: Y,
                                                          height: Y,
                                                      })
                                                    : (0, r.jsx)(u.xPt, {
                                                          size: "custom",
                                                          color: "currentColor",
                                                          width: Y,
                                                          height: Y,
                                                      }),
                                                Q ? j.intl.string(j.t["t5VZ8/"]) : null,
                                            ],
                                        }),
                                    ),
                            }),
                            !n &&
                                (0, r.jsx)(u.ua7, {
                                    text: j.intl.string(j.t.nFP4oa),
                                    children: (e) =>
                                        (0, r.jsx)(
                                            c.zx,
                                            H(F({}, e), {
                                                look: c.zx.Looks.BLANK,
                                                size: c.zx.Sizes.SMALL,
                                                onClick: eg,
                                                className: G.button,
                                                innerClassName: G.buttonInner,
                                                children: (0, r.jsx)(u.Za2, {
                                                    size: "custom",
                                                    color: "currentColor",
                                                    width: Y,
                                                    height: Y,
                                                }),
                                            }),
                                        ),
                                }),
                        ],
                    }),
                ],
            }),
            eu && (0, r.jsx)(m.Z, { threadId: t }),
            (0, r.jsx)(y.Z, {
                channel: $,
                isLastItem: o,
            }),
        ],
    });
}
