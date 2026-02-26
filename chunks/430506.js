n.d(t, { A: () => f }), n(321073);
var l = n(627968),
    a = n(64700),
    r = n(158954),
    s = n(311907),
    i = n(827734),
    o = n(397927),
    c = n(565645),
    d = n(222713),
    u = n(57882),
    m = n(7584),
    p = n(263063),
    A = n(71393),
    h = n(486020),
    C = n(985018),
    E = n(931059),
    x = n(241522),
    N = n(756362),
    I = n(626715),
    _ = n(427401);
function f(e) {
    let { checkpointData: t } = e,
        {
            cardId: n,
            numMessagesSent: f = 0,
            totalVoiceMinutes: g = 0,
            numEmojisSent: T = 0,
            topEmoji: v,
            topGame: j,
            topGuild: S,
            powerLevel: O,
            powerLevelPercentile: R,
        } = t,
        y = new Intl.NumberFormat(C.intl.currentLocale, {
            notation: "compact",
            compactDisplay: "short",
            maximumFractionDigits: 2,
        }).format(f),
        b = new Intl.NumberFormat(C.intl.currentLocale, {
            notation: "compact",
            compactDisplay: "short",
            maximumFractionDigits: 2,
        }).format(T),
        P = (0, u.oO)(g),
        L = (0, u.OW)(n),
        D = d.f[n],
        U = (0, o.rdh)(D.primaryColor).hex(),
        k = (0, o.rdh)(D.secondaryColor).hex({ opacity: 0.2 }),
        w = (0, s.bG)([A.A], () => A.A.getGuild(S?.guildId)),
        M = new Intl.NumberFormat(C.intl.currentLocale, { notation: "compact", compactDisplay: "short" }),
        H = (0, u._V)(R ?? 0),
        K = (0, a.useMemo)(() => {
            let e = [];
            e.push(_);
            for (let t = 0; t < 8; t++) e.push(I);
            return e.push(N), e;
        }, []);
    return (0, l.jsxs)("div", {
        className: x.kL,
        style: { backgroundColor: U },
        children: [
            (0, l.jsxs)("div", {
                className: x.Nr,
                children: [
                    (0, l.jsx)("img", { src: L, alt: "", className: x.LY, style: { backgroundColor: U } }),
                    (0, l.jsxs)("div", {
                        className: x.M1,
                        children: [
                            (0, l.jsxs)("div", {
                                className: x.dJ,
                                children: [
                                    (0, l.jsx)(r.oyn, { color: i.A.colors.BLACK, size: "xs" }),
                                    (0, l.jsx)(r.EYj, { variant: "text-sm/medium", className: x.KA, children: y }),
                                ],
                            }),
                            (0, l.jsxs)("div", {
                                className: x.dJ,
                                children: [
                                    (0, l.jsx)(r.cNw, { color: i.A.colors.BLACK, size: "xs" }),
                                    (0, l.jsx)(r.EYj, { variant: "text-sm/medium", className: x.KA, children: P }),
                                ],
                            }),
                            (0, l.jsxs)("div", {
                                className: x.dJ,
                                children: [
                                    (0, l.jsx)(r.nm2, { color: i.A.colors.BLACK, size: "xs" }),
                                    (0, l.jsx)(r.EYj, { variant: "text-sm/medium", className: x.KA, children: b }),
                                ],
                            }),
                            (0, l.jsx)("div", {
                                className: x.dJ,
                                children:
                                    null == v
                                        ? (0, l.jsxs)(l.Fragment, {
                                              children: [
                                                  (0, l.jsx)(r._7Z, { color: i.A.colors.BLACK, size: "xs" }),
                                                  (0, l.jsx)(r.EYj, {
                                                      variant: "text-sm/medium",
                                                      className: x.KA,
                                                      children: C.intl.string(E.default["fn+gnp"]),
                                                  }),
                                              ],
                                          })
                                        : (0, l.jsxs)(l.Fragment, {
                                              children: [
                                                  (0, l.jsx)(c.A, {
                                                      emojiId: v.emojiId,
                                                      emojiName: v.emojiName,
                                                      className: x.iY,
                                                  }),
                                                  (0, l.jsx)(r.EYj, {
                                                      variant: "text-sm/medium",
                                                      className: x.KA,
                                                      children:
                                                          null == v.emojiId
                                                              ? m.Ay.convertSurrogateToName(v.emojiName)
                                                              : `:${v.emojiName}:`,
                                                  }),
                                              ],
                                          }),
                            }),
                            (0, l.jsx)("div", {
                                className: x.dJ,
                                children:
                                    null == j
                                        ? (0, l.jsxs)(l.Fragment, {
                                              children: [
                                                  (0, l.jsx)(r._7Z, { color: i.A.colors.BLACK, size: "xs" }),
                                                  (0, l.jsx)(r.EYj, {
                                                      variant: "text-sm/medium",
                                                      className: x.KA,
                                                      children: C.intl.string(E.default["26V/4h"]),
                                                  }),
                                              ],
                                          })
                                        : (0, l.jsxs)(l.Fragment, {
                                              children: [
                                                  (0, l.jsx)("img", {
                                                      src: h.Ay.getApplicationIconURL({
                                                          id: j.applicationId,
                                                          icon: j.applicationImageId,
                                                      }),
                                                      alt: "",
                                                      className: x.iY,
                                                  }),
                                                  (0, l.jsx)(r.EYj, {
                                                      variant: "text-sm/medium",
                                                      className: x.KA,
                                                      children: j.applicationName,
                                                  }),
                                              ],
                                          }),
                            }),
                            (0, l.jsx)("div", {
                                className: x.dJ,
                                children:
                                    null == S
                                        ? (0, l.jsxs)(l.Fragment, {
                                              children: [
                                                  (0, l.jsx)(r._7Z, { color: i.A.colors.BLACK, size: "xs" }),
                                                  (0, l.jsx)(r.EYj, {
                                                      variant: "text-sm/medium",
                                                      className: x.KA,
                                                      children: C.intl.string(E.default.eoLmk1),
                                                  }),
                                              ],
                                          })
                                        : (0, l.jsxs)(l.Fragment, {
                                              children: [
                                                  null != w
                                                      ? (0, l.jsx)(p.Ay, {
                                                            guild: w,
                                                            size: p.Ay.Sizes.SMOL,
                                                            className: x.iY,
                                                        })
                                                      : (0, l.jsx)(r.RR9, { color: i.A.colors.BLACK, size: "xs" }),
                                                  (0, l.jsx)(r.EYj, {
                                                      variant: "text-sm/medium",
                                                      className: x.KA,
                                                      children: S.guildName,
                                                  }),
                                              ],
                                          }),
                            }),
                        ],
                    }),
                ],
            }),
            (0, l.jsx)("div", {
                className: x.qr,
                style: { backgroundColor: k },
                children: (0, l.jsx)(r.DZT, {
                    variant: "display-sm",
                    className: x.DD,
                    children: C.intl.string(E.default["CdU/PF"]),
                }),
            }),
            (0, l.jsxs)("div", {
                className: x.hC,
                style: { backgroundColor: U },
                children: [
                    (0, l.jsx)("div", {
                        className: x.TO,
                        children: K.map((e, t) =>
                            (0, l.jsx)(
                                "img",
                                { className: x.mG, src: e, width: 4, alt: "", style: { opacity: t >= H ? 0.3 : 1 } },
                                t,
                            ),
                        ),
                    }),
                    (0, l.jsxs)("div", {
                        className: x.JA,
                        children: [
                            (0, l.jsx)(r.EYj, { variant: "text-xs/normal", className: x.KA, children: "LVL" }),
                            (0, l.jsx)(r.EYj, { variant: "text-xs/bold", className: x.KA, children: M.format(O ?? 0) }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
