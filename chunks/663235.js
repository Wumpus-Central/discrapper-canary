n.d(t, { A: () => D }), n(321073);
var r = n(627968),
    i = n(64700),
    a = n(158954),
    s = n(311907),
    o = n(827734),
    l = n(435371),
    c = n(397927),
    u = n(565645),
    d = n(58149),
    f = n(222713),
    p = n(488556),
    _ = n(57882),
    h = n(146104),
    m = n(7584),
    g = n(263063),
    E = n(734057),
    b = n(71393),
    y = n(954571),
    O = n(486020),
    A = n(207963),
    v = n(652215),
    S = n(985018),
    I = n(622865),
    T = n(155919),
    C = n(756362),
    N = n(626715),
    R = n(427401);
function w(e, t, n) {
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
function P(e) {
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
                w(e, t, n[t]);
            });
    }
    return e;
}
function D(e) {
    let { checkpointData: t } = e,
        {
            cardId: n,
            numMessagesSent: w = 0,
            totalVoiceMinutes: D = 0,
            numEmojisSent: x = 0,
            topEmoji: L,
            topGame: j,
            topGuild: M,
            powerLevel: k,
            powerLevelPercentile: U,
        } = t,
        G = new Intl.NumberFormat(S.intl.currentLocale, {
            notation: "compact",
            compactDisplay: "short",
            maximumFractionDigits: 2,
        }).format(w),
        V = new Intl.NumberFormat(S.intl.currentLocale, {
            notation: "compact",
            compactDisplay: "short",
            maximumFractionDigits: 2,
        }).format(x),
        F = (0, _.Xq)(D),
        B = (0, _.OW)(n),
        H = f.f[n],
        Y = (0, c.rdh)(H.primaryColor).hex(),
        W = (0, c.rdh)(H.secondaryColor).hex({ opacity: 0.2 }),
        K = (0, s.bG)([b.A], () => b.A.getGuild(null == M ? void 0 : M.guildId)),
        z = (0, A.jc)(),
        { enabled: q } = p.w.useConfig({ location: "message_component" }),
        X = new Intl.NumberFormat(S.intl.currentLocale, {
            notation: "compact",
            compactDisplay: "short",
        }),
        Z = (0, _._V)(null != U ? U : 0),
        Q = (0, i.useMemo)(() => {
            let e = [];
            e.push(R);
            for (let t = 0; t < 8; t++) e.push(N);
            return e.push(C), e;
        }, []),
        $ = () => {
            var e, t;
            let n = E.A.getChannel(null == z || null == (e = z.message) ? void 0 : e.channel_id);
            y.default.track(
                v.HAw.CHECKPOINT_CARD_CLICKED,
                P(
                    { other_user_id: null == z || null == (t = z.message) ? void 0 : t.author.id },
                    (0, d.dI)(n),
                    (0, d.H$)(null == n ? void 0 : n.guild_id),
                ),
            ),
                (0, h.A)("message_component");
        };
    return (0, r.jsxs)("div", {
        className: T.kL,
        style: { backgroundColor: Y },
        children: [
            (0, r.jsxs)("div", {
                className: T.Nr,
                children: [
                    (0, r.jsx)("img", {
                        src: B,
                        alt: "",
                        className: T.LY,
                        style: { backgroundColor: Y },
                    }),
                    (0, r.jsxs)("div", {
                        className: T.M1,
                        children: [
                            (0, r.jsxs)("div", {
                                className: T.dJ,
                                children: [
                                    (0, r.jsx)(a.oyn, {
                                        color: o.A.colors.BLACK,
                                        size: "xs",
                                    }),
                                    (0, r.jsx)(a.EYj, {
                                        variant: "text-sm/medium",
                                        className: T.KA,
                                        children: G,
                                    }),
                                ],
                            }),
                            (0, r.jsxs)("div", {
                                className: T.dJ,
                                children: [
                                    (0, r.jsx)(a.cNw, {
                                        color: o.A.colors.BLACK,
                                        size: "xs",
                                    }),
                                    (0, r.jsx)(a.EYj, {
                                        variant: "text-sm/medium",
                                        className: T.KA,
                                        children: F,
                                    }),
                                ],
                            }),
                            (0, r.jsxs)("div", {
                                className: T.dJ,
                                children: [
                                    (0, r.jsx)(a.nm2, {
                                        color: o.A.colors.BLACK,
                                        size: "xs",
                                    }),
                                    (0, r.jsx)(a.EYj, {
                                        variant: "text-sm/medium",
                                        className: T.KA,
                                        children: V,
                                    }),
                                ],
                            }),
                            (0, r.jsx)("div", {
                                className: T.dJ,
                                children:
                                    null == L
                                        ? (0, r.jsxs)(r.Fragment, {
                                              children: [
                                                  (0, r.jsx)(a._7Z, {
                                                      color: o.A.colors.BLACK,
                                                      size: "xs",
                                                  }),
                                                  (0, r.jsx)(a.EYj, {
                                                      variant: "text-sm/medium",
                                                      className: T.KA,
                                                      children: S.intl.string(I.default["fn+gnp"]),
                                                  }),
                                              ],
                                          })
                                        : (0, r.jsxs)(r.Fragment, {
                                              children: [
                                                  (0, r.jsx)(u.A, {
                                                      emojiId: L.emojiId,
                                                      emojiName: L.emojiName,
                                                      className: T.iY,
                                                  }),
                                                  (0, r.jsx)(a.EYj, {
                                                      variant: "text-sm/medium",
                                                      className: T.KA,
                                                      children:
                                                          null == L.emojiId
                                                              ? m.Ay.convertSurrogateToName(L.emojiName)
                                                              : ":".concat(L.emojiName, ":"),
                                                  }),
                                              ],
                                          }),
                            }),
                            (0, r.jsx)("div", {
                                className: T.dJ,
                                children:
                                    null == j
                                        ? (0, r.jsxs)(r.Fragment, {
                                              children: [
                                                  (0, r.jsx)(a._7Z, {
                                                      color: o.A.colors.BLACK,
                                                      size: "xs",
                                                  }),
                                                  (0, r.jsx)(a.EYj, {
                                                      variant: "text-sm/medium",
                                                      className: T.KA,
                                                      children: S.intl.string(I.default["26V/4h"]),
                                                  }),
                                              ],
                                          })
                                        : (0, r.jsxs)(r.Fragment, {
                                              children: [
                                                  (0, r.jsx)("img", {
                                                      src: O.Ay.getApplicationIconURL({
                                                          id: j.applicationId,
                                                          icon: j.applicationImageId,
                                                      }),
                                                      alt: "",
                                                      className: T.iY,
                                                  }),
                                                  (0, r.jsx)(a.EYj, {
                                                      variant: "text-sm/medium",
                                                      className: T.KA,
                                                      children: j.applicationName,
                                                  }),
                                              ],
                                          }),
                            }),
                            (0, r.jsx)("div", {
                                className: T.dJ,
                                children:
                                    null == M
                                        ? (0, r.jsxs)(r.Fragment, {
                                              children: [
                                                  (0, r.jsx)(a._7Z, {
                                                      color: o.A.colors.BLACK,
                                                      size: "xs",
                                                  }),
                                                  (0, r.jsx)(a.EYj, {
                                                      variant: "text-sm/medium",
                                                      className: T.KA,
                                                      children: S.intl.string(I.default.eoLmk1),
                                                  }),
                                              ],
                                          })
                                        : (0, r.jsxs)(r.Fragment, {
                                              children: [
                                                  null != K
                                                      ? (0, r.jsx)(g.A, {
                                                            guild: K,
                                                            size: g.A.Sizes.SMOL,
                                                            className: T.iY,
                                                        })
                                                      : (0, r.jsx)(a.RR9, {
                                                            color: o.A.colors.BLACK,
                                                            size: "xs",
                                                        }),
                                                  (0, r.jsx)(a.EYj, {
                                                      variant: "text-sm/medium",
                                                      className: T.KA,
                                                      children: M.guildName,
                                                  }),
                                              ],
                                          }),
                            }),
                        ],
                    }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: T.qr,
                style: { backgroundColor: W },
                children: [
                    (0, r.jsx)(a.DZT, {
                        variant: "display-sm",
                        className: T.DD,
                        children: S.intl.string(I.default["CdU/PF"]),
                    }),
                    q
                        ? (0, r.jsx)(l.m_, {
                              text: S.intl.string(I.default.r8GEbK),
                              "aria-label": !1,
                              children: (0, r.jsxs)(a.DUT, {
                                  className: T.lO,
                                  onClick: $,
                                  children: [
                                      (0, r.jsx)(a.EYj, {
                                          variant: "text-sm/bold",
                                          className: T.Ic,
                                          children: S.intl.string(S.t.I0v0Qv),
                                      }),
                                      (0, r.jsx)(a.KS6, {
                                          color: o.A.colors.BLACK,
                                          size: "xs",
                                      }),
                                  ],
                              }),
                          })
                        : null,
                ],
            }),
            (0, r.jsxs)("div", {
                className: T.hC,
                style: { backgroundColor: Y },
                children: [
                    (0, r.jsx)("div", {
                        className: T.TO,
                        children: Q.map((e, t) =>
                            (0, r.jsx)(
                                "img",
                                {
                                    className: T.mG,
                                    src: e,
                                    width: 4,
                                    alt: "",
                                    style: { opacity: t >= Z ? 0.3 : 1 },
                                },
                                t,
                            ),
                        ),
                    }),
                    (0, r.jsxs)("div", {
                        className: T.JA,
                        children: [
                            (0, r.jsx)(a.EYj, {
                                variant: "text-xs/normal",
                                className: T.KA,
                                children: "LVL",
                            }),
                            (0, r.jsx)(a.EYj, {
                                variant: "text-xs/bold",
                                className: T.KA,
                                children: X.format(null != k ? k : 0),
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
