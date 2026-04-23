n.d(t, { A: () => j }), n(321073);
var a = n(627968),
    l = n(64700),
    r = n(534890),
    i = n(834730),
    s = n(831544),
    o = n(460905),
    d = n(109112),
    c = n(664121),
    u = n(534514),
    m = n(311907),
    _ = n(827734),
    p = n(602853),
    h = n(565645),
    A = n(222713),
    C = n(57882),
    x = n(7584),
    f = n(263063),
    E = n(71393),
    I = n(486020),
    N = n(985018),
    g = n(582068),
    v = n(789369),
    T = n(756362),
    b = n(626715),
    S = n(427401);
function j(e) {
    let { checkpointData: t } = e,
        {
            cardId: n,
            numMessagesSent: j = 0,
            totalVoiceMinutes: O = 0,
            numEmojisSent: y = 0,
            topEmoji: R,
            topGame: P,
            topGuild: L,
            powerLevel: D,
            powerLevelPercentile: k,
        } = t,
        w = new Intl.NumberFormat(N.intl.currentLocale, {
            notation: "compact",
            compactDisplay: "short",
            maximumFractionDigits: 2,
        }).format(j),
        M = new Intl.NumberFormat(N.intl.currentLocale, {
            notation: "compact",
            compactDisplay: "short",
            maximumFractionDigits: 2,
        }).format(y),
        U = (0, C.oO)(O),
        H = (0, C.OW)(n),
        B = A.f[n],
        F = (0, p.r)(B.primaryColor).hex(),
        G = (0, p.r)(B.secondaryColor).hex({ opacity: 0.2 }),
        K = (0, m.bG)([E.A], () => E.A.getGuild(L?.guildId)),
        V = new Intl.NumberFormat(N.intl.currentLocale, { notation: "compact", compactDisplay: "short" }),
        z = (0, C._V)(k ?? 0),
        Y = (0, l.useMemo)(() => {
            let e = [];
            e.push(S);
            for (let t = 0; t < 8; t++) e.push(b);
            return e.push(T), e;
        }, []);
    return (0, a.jsxs)("div", {
        className: v.kL,
        style: { backgroundColor: F },
        children: [
            (0, a.jsxs)("div", {
                className: v.Nr,
                children: [
                    (0, a.jsx)("img", { src: H, alt: "", className: v.LY, style: { backgroundColor: F } }),
                    (0, a.jsxs)("div", {
                        className: v.M1,
                        children: [
                            (0, a.jsxs)("div", {
                                className: v.dJ,
                                children: [
                                    (0, a.jsx)(r.o, { color: _.A.colors.BLACK, size: "xs" }),
                                    (0, a.jsx)(i.E, { variant: "text-sm/medium", className: v.KA, children: w }),
                                ],
                            }),
                            (0, a.jsxs)("div", {
                                className: v.dJ,
                                children: [
                                    (0, a.jsx)(s.c, { color: _.A.colors.BLACK, size: "xs" }),
                                    (0, a.jsx)(i.E, { variant: "text-sm/medium", className: v.KA, children: U }),
                                ],
                            }),
                            (0, a.jsxs)("div", {
                                className: v.dJ,
                                children: [
                                    (0, a.jsx)(o.n, { color: _.A.colors.BLACK, size: "xs" }),
                                    (0, a.jsx)(i.E, { variant: "text-sm/medium", className: v.KA, children: M }),
                                ],
                            }),
                            (0, a.jsx)("div", {
                                className: v.dJ,
                                children:
                                    null == R
                                        ? (0, a.jsxs)(a.Fragment, {
                                              children: [
                                                  (0, a.jsx)(d._, { color: _.A.colors.BLACK, size: "xs" }),
                                                  (0, a.jsx)(i.E, {
                                                      variant: "text-sm/medium",
                                                      className: v.KA,
                                                      children: N.intl.string(g.default["fn+gnp"]),
                                                  }),
                                              ],
                                          })
                                        : (0, a.jsxs)(a.Fragment, {
                                              children: [
                                                  (0, a.jsx)(h.A, {
                                                      emojiId: R.emojiId,
                                                      emojiName: R.emojiName,
                                                      className: v.iY,
                                                  }),
                                                  (0, a.jsx)(i.E, {
                                                      variant: "text-sm/medium",
                                                      className: v.KA,
                                                      children:
                                                          null == R.emojiId
                                                              ? x.Ay.convertSurrogateToName(R.emojiName)
                                                              : `:${R.emojiName}:`,
                                                  }),
                                              ],
                                          }),
                            }),
                            (0, a.jsx)("div", {
                                className: v.dJ,
                                children:
                                    null == P
                                        ? (0, a.jsxs)(a.Fragment, {
                                              children: [
                                                  (0, a.jsx)(d._, { color: _.A.colors.BLACK, size: "xs" }),
                                                  (0, a.jsx)(i.E, {
                                                      variant: "text-sm/medium",
                                                      className: v.KA,
                                                      children: N.intl.string(g.default["26V/4h"]),
                                                  }),
                                              ],
                                          })
                                        : (0, a.jsxs)(a.Fragment, {
                                              children: [
                                                  (0, a.jsx)("img", {
                                                      src: I.Ay.getApplicationIconURL({
                                                          id: P.applicationId,
                                                          icon: P.applicationImageId,
                                                      }),
                                                      alt: "",
                                                      className: v.iY,
                                                  }),
                                                  (0, a.jsx)(i.E, {
                                                      variant: "text-sm/medium",
                                                      className: v.KA,
                                                      children: P.applicationName,
                                                  }),
                                              ],
                                          }),
                            }),
                            (0, a.jsx)("div", {
                                className: v.dJ,
                                children:
                                    null == L
                                        ? (0, a.jsxs)(a.Fragment, {
                                              children: [
                                                  (0, a.jsx)(d._, { color: _.A.colors.BLACK, size: "xs" }),
                                                  (0, a.jsx)(i.E, {
                                                      variant: "text-sm/medium",
                                                      className: v.KA,
                                                      children: N.intl.string(g.default.eoLmk1),
                                                  }),
                                              ],
                                          })
                                        : (0, a.jsxs)(a.Fragment, {
                                              children: [
                                                  null != K
                                                      ? (0, a.jsx)(f.Ay, {
                                                            guild: K,
                                                            size: f.Ay.Sizes.SMOL,
                                                            className: v.iY,
                                                        })
                                                      : (0, a.jsx)(c.R, { color: _.A.colors.BLACK, size: "xs" }),
                                                  (0, a.jsx)(i.E, {
                                                      variant: "text-sm/medium",
                                                      className: v.KA,
                                                      children: L.guildName,
                                                  }),
                                              ],
                                          }),
                            }),
                        ],
                    }),
                ],
            }),
            (0, a.jsx)("div", {
                className: v.qr,
                style: { backgroundColor: G },
                children: (0, a.jsx)(u.D, {
                    variant: "display-sm",
                    className: v.DD,
                    children: N.intl.string(g.default["CdU/PF"]),
                }),
            }),
            (0, a.jsxs)("div", {
                className: v.hC,
                style: { backgroundColor: F },
                children: [
                    (0, a.jsx)("div", {
                        className: v.TO,
                        children: Y.map((e, t) =>
                            (0, a.jsx)(
                                "img",
                                { className: v.mG, src: e, width: 4, alt: "", style: { opacity: t >= z ? 0.3 : 1 } },
                                t,
                            ),
                        ),
                    }),
                    (0, a.jsxs)("div", {
                        className: v.JA,
                        children: [
                            (0, a.jsx)(i.E, { variant: "text-xs/normal", className: v.KA, children: "LVL" }),
                            (0, a.jsx)(i.E, { variant: "text-xs/bold", className: v.KA, children: V.format(D ?? 0) }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
