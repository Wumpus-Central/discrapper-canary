r.d(t, { default: () => X }), r(388685), r(49124);
var n = r(255367),
    a = r(73800),
    i = r(120356),
    l = r.n(i),
    o = r(913527),
    s = r.n(o),
    c = r(705512),
    d = r(442837),
    u = r(481060),
    m = r(224706),
    g = r(493773),
    p = r(100527),
    f = r(835473),
    x = r(168551),
    j = r(485267),
    v = r(561308),
    h = r(669764),
    b = r(480086),
    O = r(706454),
    y = r(768581),
    _ = r(814225),
    I = r(709054),
    w = r(810568),
    P = r(998058),
    E = r(839392),
    N = r(567409),
    S = r(774073),
    C = r(426482),
    k = r(715318),
    A = r(38516),
    G = r(891949),
    T = r(252547),
    M = r(484527),
    D = r(131033),
    L = r(296768),
    Z = r(978313),
    R = r(206583),
    z = r(388032),
    F = r(263930);
let H = () =>
    (0, n.jsxs)("div", {
        className: F.gameBadge,
        children: [
            (0, n.jsx)(u.YqE, { size: "xxs" }),
            (0, n.jsx)(u.Text, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: z.intl.string(z.t.kAlUs7),
            }),
        ],
    });
function W(e) {
    var t;
    let { detectedGame: r, application: i, entries: o, viewId: d } = e,
        m = a.useMemo(() => (null == r ? void 0 : r.genres.map(_.P3).join(", ")), [r]),
        g = a.useMemo(() => {
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
        p = null == i ? void 0 : i.getIconURL(160, y.$k ? "webp" : "png"),
        f = I.default.extractTimestamp(i.id),
        x = s()().diff(s()(f), "days") <= R.G,
        j = o.some((e) => (0, v.ig)(e) === c.o.GLOBAL),
        h = null != (t = r.name) ? t : null == i ? void 0 : i.name;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)("div", {
                className: F.gameArtHero,
                style: { backgroundImage: 'url("'.concat(g, '")') },
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
                                viewId: d,
                                className: F.overflowMenu,
                            }),
                        ],
                    }),
                    (0, n.jsx)("div", {
                        className: l()(F.row, F.gapSm, F.gameDetails),
                        children: (0, n.jsxs)("div", {
                            children: [
                                (0, n.jsx)(u.X6q, {
                                    variant: "heading-xl/bold",
                                    children: h,
                                }),
                                (0, n.jsxs)("div", {
                                    className: l()(F.row, F.gapSm),
                                    children: [
                                        null != p &&
                                            (0, n.jsx)("img", {
                                                className: F.gameIcon,
                                                src: p,
                                                height: 16,
                                                alt: z.intl.formatToPlainString(z.t["nh+jWl"], { game: h }),
                                            }),
                                        (0, n.jsx)(u.Text, {
                                            variant: "text-sm/semibold",
                                            color: "text-muted",
                                            children: m,
                                        }),
                                        x &&
                                            (0, n.jsx)(u.Text, {
                                                variant: "eyebrow",
                                                className: F.newBadge,
                                                children: z.intl.string(z.t.y2b7CA),
                                            }),
                                        j &&
                                            (0, n.jsxs)(n.Fragment, {
                                                children: [
                                                    (0, n.jsx)(u.Text, {
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
function U(e) {
    var t;
    let {
        detectedGame: r,
        application: a,
        entries: i,
        officialGuildInvite: l,
        similarGames: o,
        similarGamesError: s,
        onClose: c,
        viewId: d,
        trackAction: u,
    } = e;
    return (0, n.jsxs)("div", {
        className: F.sections,
        children: [
            (0, n.jsx)(T.Z, {
                entries: i,
                viewId: d,
                officialGuildId: null == l || null == (t = l.guild) ? void 0 : t.id,
                onClose: c,
            }),
            (0, n.jsx)(G.Z, {
                detectedGame: r,
                trackAction: u,
            }),
            (0, n.jsx)(L.Z, {
                applicationId: a.id,
                onClose: c,
                trackAction: u,
                similarGames: o,
                similarGamesError: s,
            }),
        ],
    });
}
function B(e) {
    let { detectedGame: t, setOfficialGuildInvite: r, trackAction: i, onClose: o, applicationId: s } = e,
        c = (0, b.u)(s, p.Z.GAME_PROFILE),
        d = a.useCallback(
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
                      children: (0, n.jsx)(u.zxk, {
                          icon: c.icon,
                          text: z.intl.string(c.labelKey),
                          variant: "overlay-secondary",
                          onClick: c.openLink,
                          fullWidth: !0,
                      }),
                  })
                : null,
            (0, n.jsx)(u.X6q, {
                variant: "heading-md/bold",
                children: z.intl.string(z.t.CI0vSE),
            }),
            (0, n.jsxs)("div", {
                className: F.sections,
                children: [
                    (0, n.jsx)(Z.Z, {
                        detectedGame: t,
                        trackAction: i,
                    }),
                    (0, n.jsx)(M.Z, {
                        detectedGame: t,
                        trackClick: i,
                        onInviteResolved: d,
                        closeModal: o,
                    }),
                    (0, n.jsx)(A.Z, {
                        detectedGame: t,
                        trackClick: i,
                    }),
                    (0, n.jsx)(D.Z, { detectedGame: t }),
                ],
            }),
        ],
    });
}
let Y = (e) => e.filter(S.z6).slice(0, 5),
    X = (e) => {
        var t;
        let { applicationId: r, source: i, sourceUserId: o, transitionState: s, onClose: c, appContext: p } = e,
            { clientThemesClassName: b } = (0, x.ZP)(),
            y = (0, d.e7)([O.default], () => O.default.locale),
            _ = a.useMemo(() => (0, w.fP)(), []),
            I = (0, d.Wu)([E.Z], () => {
                var e;
                return (null != (e = E.Z.getSimilarGames(r)) ? e : []).slice(0, 25);
            }),
            [S, C] = a.useState(null),
            k = (0, N.N)(r),
            [A, G] = a.useState(null),
            T = (0, f.q)(r),
            M = (0, d.e7)([h.Z], () => h.Z.getGame(r)),
            D = null != (t = null == M ? void 0 : M.name) ? t : null == T ? void 0 : T.name,
            L = (e, t) => {
                var n;
                (0, w.UE)({
                    gameName: null != D ? D : "",
                    applicationId: r,
                    action: e,
                    similarGameId: t,
                    viewId: _,
                    officialGuildId: null == A || null == (n = A.guild) ? void 0 : n.id,
                });
            };
        return ((0, g.ZP)(() => {
            (0, w.IS)({
                source: i,
                viewId: _,
                applicationId: r,
                gameName: null != D ? D : "",
                authorId: o,
            }),
                (0, j.Jn)();
        }),
        (0, f.Z)(I),
        a.useEffect(() => {
            y.startsWith("en") ||
                (null == M ? void 0 : M.summaryLocalized) != null ||
                m.Z.getDetectableGamesSupplemental([r], { forceFetch: !0 });
        }, [r, null == M ? void 0 : M.summaryLocalized, y]),
        a.useEffect(() => {
            (async () => {
                if (0 === I.length) {
                    C(null);
                    try {
                        await (0, P.i)(r);
                    } catch (e) {
                        C(e);
                    }
                }
            })();
        }, [r, I]),
        (0, g.ZP)(() => () => {
            var e;
            let t = Date.now(),
                n = k.map((e) => {
                    let r = (0, v.kr)(e) ? (0, v.T_)(e, t) : (0, v.GL)(e, y);
                    return JSON.stringify({
                        item_id: e.id,
                        trait: e.traits,
                        time_played: r,
                    });
                });
            (0, w.wz)({
                viewId: _,
                applicationId: r,
                gameName: null != D ? D : "",
                playedFriendIds: k.map((e) => e.author_id),
                playedFriendsData: n,
                similarGames: Y(I),
                officialGuildId: null == A || null == (e = A.guild) ? void 0 : e.id,
            });
        }),
        null == M || null == T)
            ? null
            : (0, n.jsx)(u.Y0X, {
                  transitionState: s,
                  size: u.CgR.DYNAMIC,
                  className: l()(b, F.gameProfileModal),
                  parentComponent: "GameProfileModal",
                  children: (0, n.jsxs)(u.Ttm, {
                      orientation: "auto",
                      children: [
                          (0, n.jsx)(W, {
                              detectedGame: M,
                              application: T,
                              entries: k,
                              viewId: _,
                              trackAction: L,
                          }),
                          (0, n.jsx)(u.y5t, {
                              children: (0, n.jsxs)("div", {
                                  className: l()(F.content, F.mainContent),
                                  children: [
                                      (0, n.jsx)(U, {
                                          detectedGame: M,
                                          application: T,
                                          entries: k,
                                          officialGuildInvite: A,
                                          similarGames: I,
                                          similarGamesError: S,
                                          onClose: c,
                                          viewId: _,
                                          trackAction: L,
                                      }),
                                      (0, n.jsx)(B, {
                                          detectedGame: M,
                                          setOfficialGuildInvite: G,
                                          trackAction: L,
                                          onClose: c,
                                          appContext: p,
                                          applicationId: r,
                                      }),
                                  ],
                              }),
                          }),
                      ],
                  }),
              });
    };
