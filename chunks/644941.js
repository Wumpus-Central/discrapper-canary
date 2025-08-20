n.d(t, { default: () => X }), n(388685), n(49124);
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
    p = n(493773),
    f = n(100527),
    g = n(835473),
    x = n(168551),
    j = n(485267),
    h = n(561308),
    v = n(669764),
    O = n(480086),
    b = n(706454),
    y = n(768581),
    I = n(814225),
    P = n(709054),
    w = n(810568),
    E = n(998058),
    N = n(839392),
    S = n(567409),
    C = n(774073),
    k = n(426482),
    T = n(715318),
    A = n(38516),
    G = n(891949),
    D = n(252547),
    Z = n(484527),
    L = n(131033),
    M = n(296768),
    R = n(978313),
    _ = n(206583),
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
        p = i.useMemo(() => {
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
        f = null == l ? void 0 : l.getIconURL(160, y.$k ? "webp" : "png"),
        g = P.default.extractTimestamp(l.id),
        x = o()().diff(o()(g), "days") <= _.G,
        j = s.some((e) => (0, h.ig)(e) === c.o.GLOBAL),
        v = null != (t = n.name) ? t : null == l ? void 0 : l.name;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", {
                className: F.gameArtHero,
                style: { backgroundImage: 'url("'.concat(p, '")') },
            }),
            (0, r.jsxs)("div", {
                className: a()(F.content, F.column, F.gapLg, F.headerInfo),
                children: [
                    (0, r.jsxs)("div", {
                        className: F.coverArtRow,
                        children: [
                            (0, r.jsx)("div", {
                                className: F.logoWrapper,
                                children: (0, r.jsx)(k.C, {
                                    game: n,
                                    application: l,
                                    className: F.logo,
                                    size: k.Z.LARGE,
                                }),
                            }),
                            (0, r.jsx)(T.Z, {
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
                                    children: v,
                                }),
                                (0, r.jsxs)("div", {
                                    className: a()(F.row, F.gapSm),
                                    children: [
                                        null != f &&
                                            (0, r.jsx)("img", {
                                                className: F.gameIcon,
                                                src: f,
                                                height: 16,
                                                alt: z.intl.formatToPlainString(z.t["nh+jWl"], { game: v }),
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
                                        j &&
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
function W(e) {
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
            (0, r.jsx)(D.Z, {
                entries: l,
                viewId: u,
                officialGuildId: null == a || null == (t = a.guild) ? void 0 : t.id,
                onClose: c,
            }),
            (0, r.jsx)(G.Z, {
                detectedGame: n,
                trackAction: d,
            }),
            (0, r.jsx)(M.Z, {
                applicationId: i.id,
                onClose: c,
                trackAction: d,
                similarGames: s,
                similarGamesError: o,
            }),
        ],
    });
}
function Y(e) {
    let { detectedGame: t, setOfficialGuildInvite: n, trackAction: l, onClose: s, applicationId: o } = e,
        c = (0, O.u)(o, f.Z.GAME_PROFILE),
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
                    (0, r.jsx)(R.Z, {
                        detectedGame: t,
                        trackAction: l,
                    }),
                    (0, r.jsx)(Z.Z, {
                        detectedGame: t,
                        trackClick: l,
                        onInviteResolved: u,
                        closeModal: s,
                    }),
                    (0, r.jsx)(A.Z, {
                        detectedGame: t,
                        trackClick: l,
                    }),
                    (0, r.jsx)(L.Z, { detectedGame: t }),
                    (0, r.jsx)(d.Text, {
                        variant: "text-xxs/normal",
                        children: z.intl.format(z.t.pch2Jy, { igdbLink: _.$f }),
                    }),
                ],
            }),
        ],
    });
}
let X = (e) => {
    var t;
    let { applicationId: n, source: l, sourceUserId: s, transitionState: o, onClose: c, appContext: f } = e,
        { clientThemesClassName: O } = (0, x.ZP)(),
        y = (0, u.e7)([b.default], () => b.default.locale),
        I = i.useMemo(() => (0, w.fP)(), []),
        P = (0, u.Wu)([N.Z], () => {
            var e;
            return (null != (e = N.Z.getSimilarGames(n)) ? e : []).slice(0, 25);
        }),
        [k, T] = i.useState(null),
        A = (0, S.N)(n),
        [G, D] = i.useState(null),
        Z = (0, g.q)(n),
        L = (0, u.e7)([v.Z], () => v.Z.getGame(n)),
        M = null != (t = null == L ? void 0 : L.name) ? t : null == Z ? void 0 : Z.name,
        R = (e, t) => {
            var r;
            (0, w.UE)({
                gameName: null != M ? M : "",
                applicationId: n,
                action: e,
                similarGameId: t,
                viewId: I,
                officialGuildId: null == G || null == (r = G.guild) ? void 0 : r.id,
            });
        };
    return ((0, p.ZP)(() => {
        (0, w.IS)({
            source: l,
            viewId: I,
            applicationId: n,
            gameName: null != M ? M : "",
            authorId: s,
        }),
            (0, j.Jn)();
    }),
    (0, g.Z)(P),
    i.useEffect(() => {
        y.startsWith("en") ||
            (null == L ? void 0 : L.summaryLocalized) != null ||
            m.Z.getDetectableGamesSupplemental([n], { forceFetch: !0 });
    }, [n, null == L ? void 0 : L.summaryLocalized, y]),
    i.useEffect(() => {
        (async () => {
            if (0 === P.length) {
                T(null);
                try {
                    await (0, E.i)(n);
                } catch (e) {
                    T(e);
                }
            }
        })();
    }, [n, P]),
    (0, p.ZP)(() => () => {
        var e;
        let t = Date.now(),
            r = A.map((e) => {
                let n = (0, h.kr)(e) ? (0, h.T_)(e, t) : (0, h.GL)(e, y);
                return JSON.stringify({
                    item_id: e.id,
                    trait: e.traits,
                    time_played: n,
                });
            });
        (0, w.wz)({
            viewId: I,
            applicationId: n,
            gameName: null != M ? M : "",
            playedFriendIds: A.map((e) => e.author_id),
            playedFriendsData: r,
            similarGames: P.filter(C.z6).slice(0, 5),
            officialGuildId: null == G || null == (e = G.guild) ? void 0 : e.id,
        });
    }),
    null == L || null == Z)
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
                          application: Z,
                          entries: A,
                          viewId: I,
                          trackAction: R,
                      }),
                      (0, r.jsx)(d.y5t, {
                          children: (0, r.jsxs)("div", {
                              className: a()(F.content, F.mainContent),
                              children: [
                                  (0, r.jsx)(W, {
                                      detectedGame: L,
                                      application: Z,
                                      entries: A,
                                      officialGuildInvite: G,
                                      similarGames: P,
                                      similarGamesError: k,
                                      onClose: c,
                                      viewId: I,
                                      trackAction: R,
                                  }),
                                  (0, r.jsx)(Y, {
                                      detectedGame: L,
                                      setOfficialGuildInvite: D,
                                      trackAction: R,
                                      onClose: c,
                                      appContext: f,
                                      applicationId: n,
                                  }),
                              ],
                          }),
                      }),
                  ],
              }),
          });
};
