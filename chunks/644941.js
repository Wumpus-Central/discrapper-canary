n.d(t, { default: () => B }), n(388685), n(49124);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    s = n(913527),
    o = n.n(s),
    c = n(705512),
    u = n(442837),
    d = n(481060),
    m = n(224706),
    f = n(493773),
    p = n(100527),
    g = n(835473),
    x = n(168551),
    h = n(485267),
    v = n(561308),
    j = n(669764),
    O = n(480086),
    y = n(706454),
    b = n(768581),
    I = n(814225),
    E = n(709054),
    w = n(810568),
    P = n(998058),
    N = n(839392),
    S = n(567409),
    C = n(774073),
    Z = n(426482),
    A = n(715318),
    k = n(38516),
    T = n(891949),
    G = n(252547),
    D = n(484527),
    L = n(131033),
    _ = n(296768),
    M = n(978313),
    R = n(206583),
    z = n(388032),
    F = n(226788);
let U = () =>
    (0, r.jsxs)("div", {
        className: F.gameBadge,
        children: [
            (0, r.jsx)(d.YqE, { size: "xxs" }),
            (0, r.jsx)(d.Text, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: z.intl.string(z.t.kAlUs7),
            }),
        ],
    });
function H(e) {
    var t;
    let { detectedGame: n, application: l, entries: s, viewId: u } = e,
        m = i.useMemo(() => (null == n ? void 0 : n.genres.map(I.P3).join(", ")), [n]),
        f = i.useMemo(() => {
            if (null == n) return "";
            let { artwork: e, screenshots: t } = n;
            if (e.length > 0) {
                let t = Math.floor(Math.random() * (e.length - 1));
                return e[t];
            }
            if (t.length > 0) {
                let e = Math.floor(Math.random() * (t.length - 1));
                return t[e];
            }
            return "";
        }, [n]),
        p = null == l ? void 0 : l.getIconURL(160, b.$k ? "webp" : "png"),
        g = E.default.extractTimestamp(l.id),
        x = o()().diff(o()(g), "days") <= R.G,
        h = s.some((e) => (0, v.ig)(e) === c.o.GLOBAL),
        j = null != (t = n.name) ? t : null == l ? void 0 : l.name;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", {
                className: F.gameArtHero,
                style: { backgroundImage: 'url("'.concat(f, '")') },
            }),
            (0, r.jsxs)("div", {
                className: a()(F.content, F.column, F.gapLg, F.headerInfo),
                children: [
                    (0, r.jsxs)("div", {
                        className: F.coverArtRow,
                        children: [
                            (0, r.jsx)("div", {
                                className: F.logoWrapper,
                                children: (0, r.jsx)(Z.C, {
                                    game: n,
                                    application: l,
                                    className: F.logo,
                                    size: Z.Z.LARGE,
                                }),
                            }),
                            (0, r.jsx)(A.Z, {
                                applicationId: l.id,
                                viewId: u,
                                className: F.overflowMenu,
                            }),
                        ],
                    }),
                    (0, r.jsx)("div", {
                        className: a()(F.row, F.gapSm, F.gameDetails),
                        children: (0, r.jsxs)("div", {
                            children: [
                                (0, r.jsx)(d.X6q, {
                                    variant: "heading-xl/bold",
                                    children: j,
                                }),
                                (0, r.jsxs)("div", {
                                    className: a()(F.row, F.gapSm),
                                    children: [
                                        null != p &&
                                            (0, r.jsx)("img", {
                                                className: F.gameIcon,
                                                src: p,
                                                height: 16,
                                                alt: z.intl.formatToPlainString(z.t["nh+jWl"], { game: j }),
                                            }),
                                        (0, r.jsx)(d.Text, {
                                            variant: "text-sm/semibold",
                                            color: "text-muted",
                                            children: m,
                                        }),
                                        x &&
                                            (0, r.jsx)(d.Text, {
                                                variant: "eyebrow",
                                                className: F.newBadge,
                                                children: z.intl.string(z.t.y2b7CA),
                                            }),
                                        h &&
                                            (0, r.jsxs)(r.Fragment, {
                                                children: [
                                                    (0, r.jsx)(d.Text, {
                                                        variant: "text-sm/medium",
                                                        children: " \xB7 ",
                                                    }),
                                                    (0, r.jsx)(U, {}),
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
function Y(e) {
    var t;
    let {
        detectedGame: n,
        application: i,
        entries: l,
        officialGuildInvite: a,
        similarGames: s,
        similarGamesError: o,
        onClose: c,
        viewId: u,
        trackAction: d,
    } = e;
    return (0, r.jsxs)("div", {
        className: F.sections,
        children: [
            (0, r.jsx)(G.Z, {
                entries: l,
                viewId: u,
                officialGuildId: null == a || null == (t = a.guild) ? void 0 : t.id,
                onClose: c,
            }),
            (0, r.jsx)(T.Z, {
                detectedGame: n,
                trackAction: d,
            }),
            (0, r.jsx)(_.Z, {
                applicationId: i.id,
                onClose: c,
                trackAction: d,
                similarGames: s,
                similarGamesError: o,
            }),
        ],
    });
}
function W(e) {
    let { detectedGame: t, setOfficialGuildInvite: n, trackAction: l, onClose: s, applicationId: o } = e,
        c = (0, O.u)(o, p.Z.GAME_PROFILE),
        u = i.useCallback(
            (e) => {
                n(e);
            },
            [n],
        );
    return (0, r.jsxs)("div", {
        className: a()(F.sidebar, F.column, F.gapLg),
        children: [
            null != c
                ? (0, r.jsx)("div", {
                      className: F.gameStoreButton,
                      children: (0, r.jsx)(d.zxk, {
                          icon: c.icon,
                          text: z.intl.string(c.labelKey),
                          variant: "overlay-secondary",
                          onClick: c.openLink,
                          fullWidth: !0,
                      }),
                  })
                : null,
            (0, r.jsx)(d.X6q, {
                variant: "heading-md/bold",
                children: z.intl.string(z.t.CI0vSE),
            }),
            (0, r.jsxs)("div", {
                className: F.sections,
                children: [
                    (0, r.jsx)(M.Z, {
                        detectedGame: t,
                        trackAction: l,
                    }),
                    (0, r.jsx)(D.Z, {
                        detectedGame: t,
                        trackClick: l,
                        onInviteResolved: u,
                        closeModal: s,
                    }),
                    (0, r.jsx)(k.Z, {
                        detectedGame: t,
                        trackClick: l,
                    }),
                    (0, r.jsx)(L.Z, { detectedGame: t }),
                    (0, r.jsx)(d.Text, {
                        variant: "text-xxs/normal",
                        children: z.intl.format(z.t.pch2Jy, { igdbLink: R.$f }),
                    }),
                ],
            }),
        ],
    });
}
let B = (e) => {
    var t;
    let { applicationId: n, source: l, sourceUserId: s, transitionState: o, onClose: c, appContext: p } = e,
        { clientThemesClassName: O } = (0, x.ZP)(),
        b = (0, u.e7)([y.default], () => y.default.locale),
        I = i.useMemo(() => (0, w.fP)(), []),
        E = (0, u.Wu)([N.Z], () => {
            var e;
            return (null != (e = N.Z.getSimilarGames(n)) ? e : []).slice(0, 25);
        }),
        [Z, A] = i.useState(null),
        k = (0, S.N)(n),
        [T, G] = i.useState(null),
        D = (0, g.q)(n),
        L = (0, u.e7)([j.Z], () => j.Z.getGame(n)),
        _ = null != (t = null == L ? void 0 : L.name) ? t : null == D ? void 0 : D.name,
        M = (e, t) => {
            var r;
            (0, w.UE)({
                gameName: null != _ ? _ : "",
                applicationId: n,
                action: e,
                similarGameId: t,
                viewId: I,
                officialGuildId: null == T || null == (r = T.guild) ? void 0 : r.id,
            });
        };
    return ((0, f.ZP)(() => {
        (0, w.IS)({
            source: l,
            viewId: I,
            applicationId: n,
            gameName: null != _ ? _ : "",
            authorId: s,
        }),
            (0, h.Jn)();
    }),
    (0, g.Z)(E),
    i.useEffect(() => {
        b.startsWith("en") ||
            (null == L ? void 0 : L.summaryLocalized) != null ||
            m.Z.getDetectableGamesSupplemental([n], { forceFetch: !0 });
    }, [n, null == L ? void 0 : L.summaryLocalized, b]),
    i.useEffect(() => {
        (async () => {
            if (0 === E.length) {
                A(null);
                try {
                    await (0, P.i)(n);
                } catch (e) {
                    A(e);
                }
            }
        })();
    }, [n, E]),
    (0, f.ZP)(() => () => {
        var e;
        let t = Date.now(),
            r = k.map((e) => {
                let n = (0, v.kr)(e) ? (0, v.T_)(e, t) : (0, v.GL)(e, b);
                return JSON.stringify({
                    item_id: e.id,
                    trait: e.traits,
                    time_played: n,
                });
            });
        (0, w.wz)({
            viewId: I,
            applicationId: n,
            gameName: null != _ ? _ : "",
            playedFriendIds: k.map((e) => e.author_id),
            playedFriendsData: r,
            similarGames: E.filter(C.z6).slice(0, 5),
            officialGuildId: null == T || null == (e = T.guild) ? void 0 : e.id,
        });
    }),
    null == L || null == D)
        ? null
        : (0, r.jsx)(d.Y0X, {
              transitionState: o,
              size: d.CgR.DYNAMIC,
              className: a()(O, F.gameProfileModal),
              parentComponent: "GameProfileModal",
              children: (0, r.jsxs)(d.Ttm, {
                  orientation: "auto",
                  children: [
                      (0, r.jsx)(H, {
                          detectedGame: L,
                          application: D,
                          entries: k,
                          viewId: I,
                          trackAction: M,
                      }),
                      (0, r.jsx)(d.y5t, {
                          children: (0, r.jsxs)("div", {
                              className: a()(F.content, F.mainContent),
                              children: [
                                  (0, r.jsx)(Y, {
                                      detectedGame: L,
                                      application: D,
                                      entries: k,
                                      officialGuildInvite: T,
                                      similarGames: E,
                                      similarGamesError: Z,
                                      onClose: c,
                                      viewId: I,
                                      trackAction: M,
                                  }),
                                  (0, r.jsx)(W, {
                                      detectedGame: L,
                                      setOfficialGuildInvite: G,
                                      trackAction: M,
                                      onClose: c,
                                      appContext: p,
                                      applicationId: n,
                                  }),
                              ],
                          }),
                      }),
                  ],
              }),
          });
};
