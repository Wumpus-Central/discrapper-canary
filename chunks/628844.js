n.d(t, { Z: () => w }), n(539854);
var r = n(54381),
    i = n(473749),
    a = n(793030),
    o = n(442837),
    s = n(692547),
    l = n(681715),
    c = n(481060),
    u = n(596454),
    d = n(367907),
    f = n(830960),
    p = n(99977),
    _ = n(26118),
    m = n(840767),
    h = n(633302),
    g = n(565138),
    E = n(592125),
    b = n(430824),
    y = n(626135),
    O = n(768581),
    v = n(970184),
    S = n(981631),
    I = n(388032),
    T = n(860076),
    A = n(606582),
    C = n(754545),
    N = n(745020),
    P = n(51089);
function R(e, t, n) {
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
function D(e) {
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
                R(e, t, n[t]);
            });
    }
    return e;
}
function w(e) {
    let { checkpointData: t } = e,
        {
            cardId: n,
            numMessagesSent: R = 0,
            totalVoiceMinutes: w = 0,
            numEmojisSent: x = 0,
            topEmoji: L,
            topGame: j,
            topGuild: M,
            powerLevel: k,
            powerLevelPercentile: U,
        } = t,
        G = new Intl.NumberFormat(I.intl.currentLocale, {
            notation: "compact",
            compactDisplay: "short",
            maximumFractionDigits: 2,
        }).format(R),
        Z = new Intl.NumberFormat(I.intl.currentLocale, {
            notation: "compact",
            compactDisplay: "short",
            maximumFractionDigits: 2,
        }).format(x),
        B = (0, _.nJ)(w),
        F = (0, _.UN)(n),
        V = f.F[n],
        H = (0, c.dQu)(V.primaryColor).hex(),
        Y = (0, c.dQu)(V.secondaryColor).hex({ opacity: 0.2 }),
        W = (0, o.e7)([b.Z], () => b.Z.getGuild(null == M ? void 0 : M.guildId)),
        K = (0, v.CJ)(),
        { enabled: z } = p.c.useConfig({ location: "message_component" }),
        q = new Intl.NumberFormat(I.intl.currentLocale, {
            notation: "compact",
            compactDisplay: "short",
        }),
        Q = (0, _.QB)(null != U ? U : 0),
        X = (0, i.useMemo)(() => {
            let e = [];
            e.push(P);
            for (let t = 0; t < 8; t++) e.push(N);
            return e.push(C), e;
        }, []),
        J = () => {
            var e, t;
            let n = E.Z.getChannel(null == K || null == (e = K.message) ? void 0 : e.channel_id);
            y.default.track(
                S.rMx.CHECKPOINT_CARD_CLICKED,
                D(
                    { other_user_id: null == K || null == (t = K.message) ? void 0 : t.author.id },
                    (0, d.v_)(n),
                    (0, d.hH)(null == n ? void 0 : n.guild_id),
                ),
            ),
                (0, m.Z)("message_component");
        };
    return (0, r.jsxs)("div", {
        className: A.container,
        style: { backgroundColor: H },
        children: [
            (0, r.jsxs)("div", {
                className: A.card,
                children: [
                    (0, r.jsx)("img", {
                        src: F,
                        alt: "",
                        className: A.asset,
                        style: { backgroundColor: H },
                    }),
                    (0, r.jsxs)("div", {
                        className: A.stats,
                        children: [
                            (0, r.jsxs)("div", {
                                className: A.stat,
                                children: [
                                    (0, r.jsx)(a.kBi, {
                                        color: s.Z.colors.BLACK,
                                        size: "xs",
                                    }),
                                    (0, r.jsx)(a.xvT, {
                                        variant: "text-sm/medium",
                                        className: A.statText,
                                        children: G,
                                    }),
                                ],
                            }),
                            (0, r.jsxs)("div", {
                                className: A.stat,
                                children: [
                                    (0, r.jsx)(a.S6n, {
                                        color: s.Z.colors.BLACK,
                                        size: "xs",
                                    }),
                                    (0, r.jsx)(a.xvT, {
                                        variant: "text-sm/medium",
                                        className: A.statText,
                                        children: B,
                                    }),
                                ],
                            }),
                            (0, r.jsxs)("div", {
                                className: A.stat,
                                children: [
                                    (0, r.jsx)(a.EO4, {
                                        color: s.Z.colors.BLACK,
                                        size: "xs",
                                    }),
                                    (0, r.jsx)(a.xvT, {
                                        variant: "text-sm/medium",
                                        className: A.statText,
                                        children: Z,
                                    }),
                                ],
                            }),
                            (0, r.jsx)("div", {
                                className: A.stat,
                                children:
                                    null == L
                                        ? (0, r.jsxs)(r.Fragment, {
                                              children: [
                                                  (0, r.jsx)(a.IMN, {
                                                      color: s.Z.colors.BLACK,
                                                      size: "xs",
                                                  }),
                                                  (0, r.jsx)(a.xvT, {
                                                      variant: "text-sm/medium",
                                                      className: A.statText,
                                                      children: I.intl.string(T.default["fn+gnp"]),
                                                  }),
                                              ],
                                          })
                                        : (0, r.jsxs)(r.Fragment, {
                                              children: [
                                                  (0, r.jsx)(u.Z, {
                                                      emojiId: L.emojiId,
                                                      emojiName: L.emojiName,
                                                      className: A.statImage,
                                                  }),
                                                  (0, r.jsx)(a.xvT, {
                                                      variant: "text-sm/medium",
                                                      className: A.statText,
                                                      children:
                                                          null == L.emojiId
                                                              ? h.ZP.convertSurrogateToName(L.emojiName)
                                                              : ":".concat(L.emojiName, ":"),
                                                  }),
                                              ],
                                          }),
                            }),
                            (0, r.jsx)("div", {
                                className: A.stat,
                                children:
                                    null == j
                                        ? (0, r.jsxs)(r.Fragment, {
                                              children: [
                                                  (0, r.jsx)(a.IMN, {
                                                      color: s.Z.colors.BLACK,
                                                      size: "xs",
                                                  }),
                                                  (0, r.jsx)(a.xvT, {
                                                      variant: "text-sm/medium",
                                                      className: A.statText,
                                                      children: I.intl.string(T.default["26V/4h"]),
                                                  }),
                                              ],
                                          })
                                        : (0, r.jsxs)(r.Fragment, {
                                              children: [
                                                  (0, r.jsx)("img", {
                                                      src: O.ZP.getApplicationIconURL({
                                                          id: j.applicationId,
                                                          icon: j.applicationImageId,
                                                      }),
                                                      alt: "",
                                                      className: A.statImage,
                                                  }),
                                                  (0, r.jsx)(a.xvT, {
                                                      variant: "text-sm/medium",
                                                      className: A.statText,
                                                      children: j.applicationName,
                                                  }),
                                              ],
                                          }),
                            }),
                            (0, r.jsx)("div", {
                                className: A.stat,
                                children:
                                    null == M
                                        ? (0, r.jsxs)(r.Fragment, {
                                              children: [
                                                  (0, r.jsx)(a.IMN, {
                                                      color: s.Z.colors.BLACK,
                                                      size: "xs",
                                                  }),
                                                  (0, r.jsx)(a.xvT, {
                                                      variant: "text-sm/medium",
                                                      className: A.statText,
                                                      children: I.intl.string(T.default.eoLmk1),
                                                  }),
                                              ],
                                          })
                                        : (0, r.jsxs)(r.Fragment, {
                                              children: [
                                                  null != W
                                                      ? (0, r.jsx)(g.Z, {
                                                            guild: W,
                                                            size: g.Z.Sizes.SMOL,
                                                            className: A.statImage,
                                                        })
                                                      : (0, r.jsx)(a.QTo, {
                                                            color: s.Z.colors.BLACK,
                                                            size: "xs",
                                                        }),
                                                  (0, r.jsx)(a.xvT, {
                                                      variant: "text-sm/medium",
                                                      className: A.statText,
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
                className: A.footer,
                style: { backgroundColor: Y },
                children: [
                    (0, r.jsx)(a.X6q, {
                        variant: "display-sm",
                        className: A.title,
                        children: I.intl.string(T.default["CdU/PF"]),
                    }),
                    z
                        ? (0, r.jsx)(l.u, {
                              text: I.intl.string(T.default.r8GEbK),
                              "aria-label": !1,
                              children: (0, r.jsxs)(a.P3F, {
                                  className: A.cta,
                                  onClick: J,
                                  children: [
                                      (0, r.jsx)(a.xvT, {
                                          variant: "text-sm/bold",
                                          className: A.ctaText,
                                          children: I.intl.string(I.t.I0v0Qv),
                                      }),
                                      (0, r.jsx)(a.d4D, {
                                          color: s.Z.colors.BLACK,
                                          size: "xs",
                                      }),
                                  ],
                              }),
                          })
                        : null,
                ],
            }),
            (0, r.jsxs)("div", {
                className: A.powerContainer,
                style: { backgroundColor: H },
                children: [
                    (0, r.jsx)("div", {
                        className: A.powerBar,
                        children: X.map((e, t) =>
                            (0, r.jsx)(
                                "img",
                                {
                                    className: A.noDrag,
                                    src: e,
                                    width: 4,
                                    alt: "",
                                    style: { opacity: t >= Q ? 0.3 : 1 },
                                },
                                t,
                            ),
                        ),
                    }),
                    (0, r.jsxs)("div", {
                        className: A.powerText,
                        children: [
                            (0, r.jsx)(a.xvT, {
                                variant: "text-xs/normal",
                                className: A.statText,
                                children: "LVL",
                            }),
                            (0, r.jsx)(a.xvT, {
                                variant: "text-xs/bold",
                                className: A.statText,
                                children: q.format(null != k ? k : 0),
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
