r.d(t, { default: () => Y }), r(388685), r(49124);
var n = r(255367),
    a = r(73800),
    i = r(120356),
    l = r.n(i),
    o = r(913527),
    s = r.n(o),
    c = r(705512),
    u = r(442837),
    d = r(481060),
    m = r(224706),
    f = r(493773),
    g = r(100527),
    p = r(835473),
    x = r(168551),
    v = r(485267),
    h = r(561308),
    j = r(669764),
    b = r(480086),
    O = r(706454),
    y = r(768581),
    _ = r(814225),
    I = r(709054),
    w = r(810568),
    P = r(998058),
    E = r(839392),
    S = r(567409),
    N = r(774073),
    C = r(426482),
    k = r(715318),
    A = r(38516),
    Z = r(891949),
    G = r(252547),
    M = r(484527),
    T = r(131033),
    L = r(296768),
    D = r(978313),
    R = r(206583),
    z = r(388032),
    F = r(226788);
let H = () =>
    (0, n.jsxs)("div", {
        className: F.gameBadge,
        children: [
            (0, n.jsx)(d.YqE, { size: "xxs" }),
            (0, n.jsx)(d.Text, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: z.intl.string(z.t.kAlUs7),
            }),
        ],
    });
function B(e) {
    var t;
    let { detectedGame: r, application: i, entries: o, viewId: u } = e,
        m = a.useMemo(() => (null == r ? void 0 : r.genres.map(_.P3).join(", ")), [r]),
        f = a.useMemo(() => {
            if (null == r) return "";
            let { artwork: e, screenshots: t } = r;
            if (e.length > 0) {
                let t = Math.floor(Math.random() * (e.length - 1));
                return e[t];
            }
            if (t.length > 0) {
                let e = Math.floor(Math.random() * (t.length - 1));
                return t[e];
            }
            return "";
        }, [r]),
        g = null == i ? void 0 : i.getIconURL(160, y.$k ? "webp" : "png"),
        p = I.default.extractTimestamp(i.id),
        x = s()().diff(s()(p), "days") <= R.G,
        v = o.some((e) => (0, h.ig)(e) === c.o.GLOBAL),
        j = null != (t = r.name) ? t : null == i ? void 0 : i.name;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)("div", {
                className: F.gameArtHero,
                style: { backgroundImage: 'url("'.concat(f, '")') },
            }),
            (0, n.jsxs)("div", {
                className: l()(F.content, F.column, F.gapLg, F.headerInfo),
                children: [
                    (0, n.jsxs)("div", {
                        className: F.coverArtRow,
                        children: [
                            (0, n.jsx)("div", {
                                className: F.logoWrapper,
                                children: (0, n.jsx)(C.C, {
                                    game: r,
                                    application: i,
                                    className: F.logo,
                                    size: C.Z.LARGE,
                                }),
                            }),
                            (0, n.jsx)(k.Z, {
                                applicationId: i.id,
                                viewId: u,
                                className: F.overflowMenu,
                            }),
                        ],
                    }),
                    (0, n.jsx)("div", {
                        className: l()(F.row, F.gapSm, F.gameDetails),
                        children: (0, n.jsxs)("div", {
                            children: [
                                (0, n.jsx)(d.X6q, {
                                    variant: "heading-xl/bold",
                                    children: j,
                                }),
                                (0, n.jsxs)("div", {
                                    className: l()(F.row, F.gapSm),
                                    children: [
                                        null != g &&
                                            (0, n.jsx)("img", {
                                                className: F.gameIcon,
                                                src: g,
                                                height: 16,
                                                alt: z.intl.formatToPlainString(z.t["nh+jWl"], { game: j }),
                                            }),
                                        (0, n.jsx)(d.Text, {
                                            variant: "text-sm/semibold",
                                            color: "text-muted",
                                            children: m,
                                        }),
                                        x &&
                                            (0, n.jsx)(d.Text, {
                                                variant: "eyebrow",
                                                className: F.newBadge,
                                                children: z.intl.string(z.t.y2b7CA),
                                            }),
                                        v &&
                                            (0, n.jsxs)(n.Fragment, {
                                                children: [
                                                    (0, n.jsx)(d.Text, {
                                                        variant: "text-sm/medium",
                                                        children: " \xB7 ",
                                                    }),
                                                    (0, n.jsx)(H, {}),
                                                ],
                                            }),
                                    ],
                                }),
                            ],
                        }),
                    }),
                ],
            }),
        ],
    });
}
function W(e) {
    var t;
    let {
        detectedGame: r,
        application: a,
        entries: i,
        officialGuildInvite: l,
        similarGames: o,
        similarGamesError: s,
        onClose: c,
        viewId: u,
        trackAction: d,
    } = e;
    return (0, n.jsxs)("div", {
        className: F.sections,
        children: [
            (0, n.jsx)(G.Z, {
                entries: i,
                viewId: u,
                officialGuildId: null == l || null == (t = l.guild) ? void 0 : t.id,
                onClose: c,
            }),
            (0, n.jsx)(Z.Z, {
                detectedGame: r,
                trackAction: d,
            }),
            (0, n.jsx)(L.Z, {
                applicationId: a.id,
                onClose: c,
                trackAction: d,
                similarGames: o,
                similarGamesError: s,
            }),
        ],
    });
}
function U(e) {
    let { detectedGame: t, setOfficialGuildInvite: r, trackAction: i, onClose: o, applicationId: s } = e,
        c = (0, b.u)(s, g.Z.GAME_PROFILE),
        u = a.useCallback(
            (e) => {
                r(e);
            },
            [r],
        );
    return (0, n.jsxs)("div", {
        className: l()(F.sidebar, F.column, F.gapLg),
        children: [
            null != c
                ? (0, n.jsx)("div", {
                      className: F.gameStoreButton,
                      children: (0, n.jsx)(d.zxk, {
                          icon: c.icon,
                          text: z.intl.string(c.labelKey),
                          variant: "overlay-secondary",
                          onClick: c.openLink,
                          fullWidth: !0,
                      }),
                  })
                : null,
            (0, n.jsx)(d.X6q, {
                variant: "heading-md/bold",
                children: z.intl.string(z.t.CI0vSE),
            }),
            (0, n.jsxs)("div", {
                className: F.sections,
                children: [
                    (0, n.jsx)(D.Z, {
                        detectedGame: t,
                        trackAction: i,
                    }),
                    (0, n.jsx)(M.Z, {
                        detectedGame: t,
                        trackClick: i,
                        onInviteResolved: u,
                        closeModal: o,
                    }),
                    (0, n.jsx)(A.Z, {
                        detectedGame: t,
                        trackClick: i,
                    }),
                    (0, n.jsx)(T.Z, { detectedGame: t }),
                    (0, n.jsx)(d.Text, {
                        variant: "text-xxs/normal",
                        children: z.intl.format(z.t.pch2Jy, { igdbLink: R.$f }),
                    }),
                ],
            }),
        ],
    });
}
let Y = (e) => {
    var t;
    let { applicationId: r, source: i, sourceUserId: o, transitionState: s, onClose: c, appContext: g } = e,
        { clientThemesClassName: b } = (0, x.ZP)(),
        y = (0, u.e7)([O.default], () => O.default.locale),
        _ = a.useMemo(() => (0, w.fP)(), []),
        I = (0, u.Wu)([E.Z], () => {
            var e;
            return (null != (e = E.Z.getSimilarGames(r)) ? e : []).slice(0, 25);
        }),
        [C, k] = a.useState(null),
        A = (0, S.N)(r),
        [Z, G] = a.useState(null),
        M = (0, p.q)(r),
        T = (0, u.e7)([j.Z], () => j.Z.getGame(r)),
        L = null != (t = null == T ? void 0 : T.name) ? t : null == M ? void 0 : M.name,
        D = (e, t) => {
            var n;
            (0, w.UE)({
                gameName: null != L ? L : "",
                applicationId: r,
                action: e,
                similarGameId: t,
                viewId: _,
                officialGuildId: null == Z || null == (n = Z.guild) ? void 0 : n.id,
            });
        };
    return ((0, f.ZP)(() => {
        (0, w.IS)({
            source: i,
            viewId: _,
            applicationId: r,
            gameName: null != L ? L : "",
            authorId: o,
        }),
            (0, v.Jn)();
    }),
    (0, p.Z)(I),
    a.useEffect(() => {
        y.startsWith("en") ||
            (null == T ? void 0 : T.summaryLocalized) != null ||
            m.Z.getDetectableGamesSupplemental([r], { forceFetch: !0 });
    }, [r, null == T ? void 0 : T.summaryLocalized, y]),
    a.useEffect(() => {
        (async () => {
            if (0 === I.length) {
                k(null);
                try {
                    await (0, P.i)(r);
                } catch (e) {
                    k(e);
                }
            }
        })();
    }, [r, I]),
    (0, f.ZP)(() => () => {
        var e;
        let t = Date.now(),
            n = A.map((e) => {
                let r = (0, h.kr)(e) ? (0, h.T_)(e, t) : (0, h.GL)(e, y);
                return JSON.stringify({
                    item_id: e.id,
                    trait: e.traits,
                    time_played: r,
                });
            });
        (0, w.wz)({
            viewId: _,
            applicationId: r,
            gameName: null != L ? L : "",
            playedFriendIds: A.map((e) => e.author_id),
            playedFriendsData: n,
            similarGames: I.filter(N.z6).slice(0, 5),
            officialGuildId: null == Z || null == (e = Z.guild) ? void 0 : e.id,
        });
    }),
    null == T || null == M)
        ? null
        : (0, n.jsx)(d.Y0X, {
              transitionState: s,
              size: d.CgR.DYNAMIC,
              className: l()(b, F.gameProfileModal),
              parentComponent: "GameProfileModal",
              children: (0, n.jsxs)(d.Ttm, {
                  orientation: "auto",
                  children: [
                      (0, n.jsx)(B, {
                          detectedGame: T,
                          application: M,
                          entries: A,
                          viewId: _,
                          trackAction: D,
                      }),
                      (0, n.jsx)(d.y5t, {
                          children: (0, n.jsxs)("div", {
                              className: l()(F.content, F.mainContent),
                              children: [
                                  (0, n.jsx)(W, {
                                      detectedGame: T,
                                      application: M,
                                      entries: A,
                                      officialGuildInvite: Z,
                                      similarGames: I,
                                      similarGamesError: C,
                                      onClose: c,
                                      viewId: _,
                                      trackAction: D,
                                  }),
                                  (0, n.jsx)(U, {
                                      detectedGame: T,
                                      setOfficialGuildInvite: G,
                                      trackAction: D,
                                      onClose: c,
                                      appContext: g,
                                      applicationId: r,
                                  }),
                              ],
                          }),
                      }),
                  ],
              }),
          });
};
