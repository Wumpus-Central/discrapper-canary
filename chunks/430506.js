n.d(t, {
    A: () => v,
}),
    n(321073);
var r = n(627968),
    l = n(64700),
    a = n(158954),
    i = n(311907),
    o = n(827734),
    s = n(397927),
    c = n(565645),
    u = n(222713),
    d = n(57882),
    p = n(7584),
    m = n(263063),
    f = n(71393),
    O = n(486020),
    b = n(985018),
    y = n(622865),
    h = n(450740),
    j = n(756362),
    g = n(626715),
    A = n(427401);

function v(e) {
    let { checkpointData: t } = e,
        {
            cardId: n,
            numMessagesSent: v = 0,
            totalVoiceMinutes: E = 0,
            numEmojisSent: C = 0,
            topEmoji: x,
            topGame: N,
            topGuild: I,
            powerLevel: P,
            powerLevelPercentile: S,
        } = t,
        _ = new Intl.NumberFormat(b.intl.currentLocale, {
            notation: "compact",
            compactDisplay: "short",
            maximumFractionDigits: 2,
        }).format(v),
        T = new Intl.NumberFormat(b.intl.currentLocale, {
            notation: "compact",
            compactDisplay: "short",
            maximumFractionDigits: 2,
        }).format(C),
        R = (0, d.oO)(E),
        w = (0, d.OW)(n),
        D = u.f[n],
        L = (0, s.rdh)(D.primaryColor).hex(),
        k = (0, s.rdh)(D.secondaryColor).hex({
            opacity: 0.2,
        }),
        U = (0, i.bG)([f.A], () => f.A.getGuild(null == I ? void 0 : I.guildId)),
        M = new Intl.NumberFormat(b.intl.currentLocale, {
            notation: "compact",
            compactDisplay: "short",
        }),
        H = (0, d._V)(null != S ? S : 0),
        K = (0, l.useMemo)(() => {
            let e = [];
            e.push(A);
            for (let t = 0; t < 8; t++) e.push(g);
            return e.push(j), e;
        }, []);
    return (0, r.jsxs)("div", {
        className: h.kL,
        style: {
            backgroundColor: L,
        },
        children: [
            (0, r.jsxs)("div", {
                className: h.Nr,
                children: [
                    (0, r.jsx)("img", {
                        src: w,
                        alt: "",
                        className: h.LY,
                        style: {
                            backgroundColor: L,
                        },
                    }),
                    (0, r.jsxs)("div", {
                        className: h.M1,
                        children: [
                            (0, r.jsxs)("div", {
                                className: h.dJ,
                                children: [
                                    (0, r.jsx)(a.oyn, {
                                        color: o.A.colors.BLACK,
                                        size: "xs",
                                    }),
                                    (0, r.jsx)(a.EYj, {
                                        variant: "text-sm/medium",
                                        className: h.KA,
                                        children: _,
                                    }),
                                ],
                            }),
                            (0, r.jsxs)("div", {
                                className: h.dJ,
                                children: [
                                    (0, r.jsx)(a.cNw, {
                                        color: o.A.colors.BLACK,
                                        size: "xs",
                                    }),
                                    (0, r.jsx)(a.EYj, {
                                        variant: "text-sm/medium",
                                        className: h.KA,
                                        children: R,
                                    }),
                                ],
                            }),
                            (0, r.jsxs)("div", {
                                className: h.dJ,
                                children: [
                                    (0, r.jsx)(a.nm2, {
                                        color: o.A.colors.BLACK,
                                        size: "xs",
                                    }),
                                    (0, r.jsx)(a.EYj, {
                                        variant: "text-sm/medium",
                                        className: h.KA,
                                        children: T,
                                    }),
                                ],
                            }),
                            (0, r.jsx)("div", {
                                className: h.dJ,
                                children:
                                    null == x
                                        ? (0, r.jsxs)(r.Fragment, {
                                              children: [
                                                  (0, r.jsx)(a._7Z, {
                                                      color: o.A.colors.BLACK,
                                                      size: "xs",
                                                  }),
                                                  (0, r.jsx)(a.EYj, {
                                                      variant: "text-sm/medium",
                                                      className: h.KA,
                                                      children: b.intl.string(y.default["fn+gnp"]),
                                                  }),
                                              ],
                                          })
                                        : (0, r.jsxs)(r.Fragment, {
                                              children: [
                                                  (0, r.jsx)(c.A, {
                                                      emojiId: x.emojiId,
                                                      emojiName: x.emojiName,
                                                      className: h.iY,
                                                  }),
                                                  (0, r.jsx)(a.EYj, {
                                                      variant: "text-sm/medium",
                                                      className: h.KA,
                                                      children:
                                                          null == x.emojiId
                                                              ? p.Ay.convertSurrogateToName(x.emojiName)
                                                              : ":".concat(x.emojiName, ":"),
                                                  }),
                                              ],
                                          }),
                            }),
                            (0, r.jsx)("div", {
                                className: h.dJ,
                                children:
                                    null == N
                                        ? (0, r.jsxs)(r.Fragment, {
                                              children: [
                                                  (0, r.jsx)(a._7Z, {
                                                      color: o.A.colors.BLACK,
                                                      size: "xs",
                                                  }),
                                                  (0, r.jsx)(a.EYj, {
                                                      variant: "text-sm/medium",
                                                      className: h.KA,
                                                      children: b.intl.string(y.default["26V/4h"]),
                                                  }),
                                              ],
                                          })
                                        : (0, r.jsxs)(r.Fragment, {
                                              children: [
                                                  (0, r.jsx)("img", {
                                                      src: O.Ay.getApplicationIconURL({
                                                          id: N.applicationId,
                                                          icon: N.applicationImageId,
                                                      }),
                                                      alt: "",
                                                      className: h.iY,
                                                  }),
                                                  (0, r.jsx)(a.EYj, {
                                                      variant: "text-sm/medium",
                                                      className: h.KA,
                                                      children: N.applicationName,
                                                  }),
                                              ],
                                          }),
                            }),
                            (0, r.jsx)("div", {
                                className: h.dJ,
                                children:
                                    null == I
                                        ? (0, r.jsxs)(r.Fragment, {
                                              children: [
                                                  (0, r.jsx)(a._7Z, {
                                                      color: o.A.colors.BLACK,
                                                      size: "xs",
                                                  }),
                                                  (0, r.jsx)(a.EYj, {
                                                      variant: "text-sm/medium",
                                                      className: h.KA,
                                                      children: b.intl.string(y.default.eoLmk1),
                                                  }),
                                              ],
                                          })
                                        : (0, r.jsxs)(r.Fragment, {
                                              children: [
                                                  null != U
                                                      ? (0, r.jsx)(m.A, {
                                                            guild: U,
                                                            size: m.A.Sizes.SMOL,
                                                            className: h.iY,
                                                        })
                                                      : (0, r.jsx)(a.RR9, {
                                                            color: o.A.colors.BLACK,
                                                            size: "xs",
                                                        }),
                                                  (0, r.jsx)(a.EYj, {
                                                      variant: "text-sm/medium",
                                                      className: h.KA,
                                                      children: I.guildName,
                                                  }),
                                              ],
                                          }),
                            }),
                        ],
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                className: h.qr,
                style: {
                    backgroundColor: k,
                },
                children: (0, r.jsx)(a.DZT, {
                    variant: "display-sm",
                    className: h.DD,
                    children: b.intl.string(y.default["CdU/PF"]),
                }),
            }),
            (0, r.jsxs)("div", {
                className: h.hC,
                style: {
                    backgroundColor: L,
                },
                children: [
                    (0, r.jsx)("div", {
                        className: h.TO,
                        children: K.map((e, t) =>
                            (0, r.jsx)(
                                "img",
                                {
                                    className: h.mG,
                                    src: e,
                                    width: 4,
                                    alt: "",
                                    style: {
                                        opacity: t >= H ? 0.3 : 1,
                                    },
                                },
                                t,
                            ),
                        ),
                    }),
                    (0, r.jsxs)("div", {
                        className: h.JA,
                        children: [
                            (0, r.jsx)(a.EYj, {
                                variant: "text-xs/normal",
                                className: h.KA,
                                children: "LVL",
                            }),
                            (0, r.jsx)(a.EYj, {
                                variant: "text-xs/bold",
                                className: h.KA,
                                children: M.format(null != P ? P : 0),
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
