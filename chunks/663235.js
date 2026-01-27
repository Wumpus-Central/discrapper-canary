n.d(t, {
    A: () => P,
}),
    n(321073);
var r = n(627968),
    l = n(64700),
    a = n(158954),
    i = n(311907),
    s = n(827734),
    o = n(435371),
    c = n(397927),
    u = n(565645),
    d = n(58149),
    m = n(222713),
    f = n(488556),
    p = n(57882),
    h = n(146104),
    b = n(7584),
    g = n(263063),
    x = n(734057),
    y = n(71393),
    v = n(954571),
    j = n(486020),
    C = n(207963),
    _ = n(652215),
    A = n(985018),
    O = n(622865),
    E = n(155919),
    S = n(756362),
    N = n(626715),
    I = n(427401);

function P(e) {
    let { checkpointData: t } = e,
        {
            cardId: n,
            numMessagesSent: P = 0,
            totalVoiceMinutes: w = 0,
            numEmojisSent: T = 0,
            topEmoji: R,
            topGame: L,
            topGuild: D,
            powerLevel: k,
            powerLevelPercentile: M,
        } = t,
        H = new Intl.NumberFormat(A.intl.currentLocale, {
            notation: "compact",
            compactDisplay: "short",
            maximumFractionDigits: 2,
        }).format(P),
        U = new Intl.NumberFormat(A.intl.currentLocale, {
            notation: "compact",
            compactDisplay: "short",
            maximumFractionDigits: 2,
        }).format(T),
        F = (0, p.Xq)(w),
        G = (0, p.OW)(n),
        V = m.f[n],
        B = (0, c.rdh)(V.primaryColor).hex(),
        W = (0, c.rdh)(V.secondaryColor).hex({
            opacity: 0.2,
        }),
        z = (0, i.bG)([y.A], () => y.A.getGuild(null == D ? void 0 : D.guildId)),
        K = (0, C.jc)(),
        { enabled: Z } = f.w.useConfig({
            location: "message_component",
        }),
        Y = new Intl.NumberFormat(A.intl.currentLocale, {
            notation: "compact",
            compactDisplay: "short",
        }),
        q = (0, p._V)(null != M ? M : 0),
        X = (0, l.useMemo)(() => {
            let e = [];
            e.push(I);
            for (let t = 0; t < 8; t++) e.push(N);
            return e.push(S), e;
        }, []);
    return (0, r.jsxs)("div", {
        className: E.kL,
        style: {
            backgroundColor: B,
        },
        children: [
            (0, r.jsxs)("div", {
                className: E.Nr,
                children: [
                    (0, r.jsx)("img", {
                        src: G,
                        alt: "",
                        className: E.LY,
                        style: {
                            backgroundColor: B,
                        },
                    }),
                    (0, r.jsxs)("div", {
                        className: E.M1,
                        children: [
                            (0, r.jsxs)("div", {
                                className: E.dJ,
                                children: [
                                    (0, r.jsx)(a.oyn, {
                                        color: s.A.colors.BLACK,
                                        size: "xs",
                                    }),
                                    (0, r.jsx)(a.EYj, {
                                        variant: "text-sm/medium",
                                        className: E.KA,
                                        children: H,
                                    }),
                                ],
                            }),
                            (0, r.jsxs)("div", {
                                className: E.dJ,
                                children: [
                                    (0, r.jsx)(a.cNw, {
                                        color: s.A.colors.BLACK,
                                        size: "xs",
                                    }),
                                    (0, r.jsx)(a.EYj, {
                                        variant: "text-sm/medium",
                                        className: E.KA,
                                        children: F,
                                    }),
                                ],
                            }),
                            (0, r.jsxs)("div", {
                                className: E.dJ,
                                children: [
                                    (0, r.jsx)(a.nm2, {
                                        color: s.A.colors.BLACK,
                                        size: "xs",
                                    }),
                                    (0, r.jsx)(a.EYj, {
                                        variant: "text-sm/medium",
                                        className: E.KA,
                                        children: U,
                                    }),
                                ],
                            }),
                            (0, r.jsx)("div", {
                                className: E.dJ,
                                children:
                                    null == R
                                        ? (0, r.jsxs)(r.Fragment, {
                                              children: [
                                                  (0, r.jsx)(a._7Z, {
                                                      color: s.A.colors.BLACK,
                                                      size: "xs",
                                                  }),
                                                  (0, r.jsx)(a.EYj, {
                                                      variant: "text-sm/medium",
                                                      className: E.KA,
                                                      children: A.intl.string(O.default["fn+gnp"]),
                                                  }),
                                              ],
                                          })
                                        : (0, r.jsxs)(r.Fragment, {
                                              children: [
                                                  (0, r.jsx)(u.A, {
                                                      emojiId: R.emojiId,
                                                      emojiName: R.emojiName,
                                                      className: E.iY,
                                                  }),
                                                  (0, r.jsx)(a.EYj, {
                                                      variant: "text-sm/medium",
                                                      className: E.KA,
                                                      children:
                                                          null == R.emojiId
                                                              ? b.Ay.convertSurrogateToName(R.emojiName)
                                                              : ":".concat(R.emojiName, ":"),
                                                  }),
                                              ],
                                          }),
                            }),
                            (0, r.jsx)("div", {
                                className: E.dJ,
                                children:
                                    null == L
                                        ? (0, r.jsxs)(r.Fragment, {
                                              children: [
                                                  (0, r.jsx)(a._7Z, {
                                                      color: s.A.colors.BLACK,
                                                      size: "xs",
                                                  }),
                                                  (0, r.jsx)(a.EYj, {
                                                      variant: "text-sm/medium",
                                                      className: E.KA,
                                                      children: A.intl.string(O.default["26V/4h"]),
                                                  }),
                                              ],
                                          })
                                        : (0, r.jsxs)(r.Fragment, {
                                              children: [
                                                  (0, r.jsx)("img", {
                                                      src: j.Ay.getApplicationIconURL({
                                                          id: L.applicationId,
                                                          icon: L.applicationImageId,
                                                      }),
                                                      alt: "",
                                                      className: E.iY,
                                                  }),
                                                  (0, r.jsx)(a.EYj, {
                                                      variant: "text-sm/medium",
                                                      className: E.KA,
                                                      children: L.applicationName,
                                                  }),
                                              ],
                                          }),
                            }),
                            (0, r.jsx)("div", {
                                className: E.dJ,
                                children:
                                    null == D
                                        ? (0, r.jsxs)(r.Fragment, {
                                              children: [
                                                  (0, r.jsx)(a._7Z, {
                                                      color: s.A.colors.BLACK,
                                                      size: "xs",
                                                  }),
                                                  (0, r.jsx)(a.EYj, {
                                                      variant: "text-sm/medium",
                                                      className: E.KA,
                                                      children: A.intl.string(O.default.eoLmk1),
                                                  }),
                                              ],
                                          })
                                        : (0, r.jsxs)(r.Fragment, {
                                              children: [
                                                  null != z
                                                      ? (0, r.jsx)(g.A, {
                                                            guild: z,
                                                            size: g.A.Sizes.SMOL,
                                                            className: E.iY,
                                                        })
                                                      : (0, r.jsx)(a.RR9, {
                                                            color: s.A.colors.BLACK,
                                                            size: "xs",
                                                        }),
                                                  (0, r.jsx)(a.EYj, {
                                                      variant: "text-sm/medium",
                                                      className: E.KA,
                                                      children: D.guildName,
                                                  }),
                                              ],
                                          }),
                            }),
                        ],
                    }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: E.qr,
                style: {
                    backgroundColor: W,
                },
                children: [
                    (0, r.jsx)(a.DZT, {
                        variant: "display-sm",
                        className: E.DD,
                        children: A.intl.string(O.default["CdU/PF"]),
                    }),
                    Z
                        ? (0, r.jsx)(o.m_, {
                              text: A.intl.string(O.default.r8GEbK),
                              "aria-label": !1,
                              children: (0, r.jsxs)(a.DUT, {
                                  className: E.lO,
                                  onClick: () => {
                                      var e, t;
                                      let n = x.A.getChannel(
                                          null == K || null == (e = K.message) ? void 0 : e.channel_id,
                                      );
                                      v.default.track(
                                          _.HAw.CHECKPOINT_CARD_CLICKED,
                                          (function (e) {
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
                                          })(
                                              {
                                                  other_user_id:
                                                      null == K || null == (t = K.message) ? void 0 : t.author.id,
                                              },
                                              (0, d.dI)(n),
                                              (0, d.H$)(null == n ? void 0 : n.guild_id),
                                          ),
                                      ),
                                          (0, h.A)("message_component");
                                  },
                                  children: [
                                      (0, r.jsx)(a.EYj, {
                                          variant: "text-sm/bold",
                                          className: E.Ic,
                                          children: A.intl.string(A.t.I0v0Qv),
                                      }),
                                      (0, r.jsx)(a.KS6, {
                                          color: s.A.colors.BLACK,
                                          size: "xs",
                                      }),
                                  ],
                              }),
                          })
                        : null,
                ],
            }),
            (0, r.jsxs)("div", {
                className: E.hC,
                style: {
                    backgroundColor: B,
                },
                children: [
                    (0, r.jsx)("div", {
                        className: E.TO,
                        children: X.map((e, t) =>
                            (0, r.jsx)(
                                "img",
                                {
                                    className: E.mG,
                                    src: e,
                                    width: 4,
                                    alt: "",
                                    style: {
                                        opacity: t >= q ? 0.3 : 1,
                                    },
                                },
                                t,
                            ),
                        ),
                    }),
                    (0, r.jsxs)("div", {
                        className: E.JA,
                        children: [
                            (0, r.jsx)(a.EYj, {
                                variant: "text-xs/normal",
                                className: E.KA,
                                children: "LVL",
                            }),
                            (0, r.jsx)(a.EYj, {
                                variant: "text-xs/bold",
                                className: E.KA,
                                children: Y.format(null != k ? k : 0),
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
