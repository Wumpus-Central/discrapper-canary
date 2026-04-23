"use strict";
n.d(t, { A: () => B });
var r = n(627968),
    i = n(64700),
    s = n(311907),
    a = n(453903),
    o = n(990078),
    l = n(462887),
    u = n(834730),
    c = n(939249),
    d = n(789645),
    _ = n(192308),
    f = n(265872),
    p = n(775602),
    h = n(587895),
    E = n(429913),
    m = n(409626),
    g = n(611656),
    A = n(459746),
    I = n(311043),
    T = n(454908),
    S = n(544028),
    y = n(760751),
    N = n(954571),
    v = n(486020),
    C = n(341915),
    O = n(579473),
    R = n(18437),
    b = n(590202),
    D = n(73473),
    L = n(811500),
    w = n(654487),
    M = n(652215),
    P = n(985018),
    x = n(420298);
let k = (e) => {
        let t,
            n,
            i,
            { quest: a, onClose: o } = e,
            _ = (0, s.bG)([S.A], () => S.A.getState().theme),
            f = (0, l.M)(_) ? M.NJ8.DARK : M.NJ8.LIGHT;
        return (0, r.jsxs)("div", {
            className: x.N1,
            children: [
                (0, r.jsxs)("div", {
                    className: x.VW,
                    children: [
                        (0, r.jsx)("img", {
                            className: x.rC,
                            alt: a.config.messages.gameTitle,
                            src: (0, O.tW)(a, O.fY.GAME_TILE, f).url,
                        }),
                        (0, r.jsxs)("div", {
                            className: x.if,
                            children: [
                                (0, r.jsx)(u.E, {
                                    variant: "text-sm/semibold",
                                    color: "text-strong",
                                    children:
                                        ((t = {
                                            [w.Li.PACKAGE_ACTION_ADVENTURE]: P.t.PYFVdf,
                                            [w.Li.PACKAGE_RPG_MMO]: P.t.rFQo2F,
                                            [w.Li.PACKAGE_RACING_SPORTS]: P.t.zDRa6g,
                                            [w.Li.PACKAGE_SANDBOX_CREATIVE]: P.t.vz9U2Q,
                                            [w.Li.PACKAGE_FAMILY_FRIENDLY]: P.t.IOiAE0,
                                            [w.Li.PACKAGE_HOLIDAY_SEASON]: P.t.cJPqvD,
                                            [w.Li.PACKAGE_NEW_YEARS]: P.t.S0w2mv,
                                        }),
                                        (i =
                                            (null != (n = a.config.features.find((e) => e in t)) ? t[n] : null) ??
                                            P.t["D+DkEH"]),
                                        P.intl.string(i)),
                                }),
                                (0, r.jsx)(u.E, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children: P.intl.string(P.t.VgN1Bn),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, r.jsx)(c.D, {
                    className: x.b,
                    "aria-label": P.intl.string(P.t.cpT0Cq),
                    onClick: o,
                    children: (0, r.jsx)(d.P, { size: "md", color: "currentColor" }),
                }),
            ],
        });
    },
    U = (e) => {
        let { quest: t, game: a, sourceQuestContent: l, onGameProfileModalOpen: u, onGameProfileModalClose: d } = e,
            f = (0, R.Ut)(),
            E = (0, s.bG)([h.A], () => h.A.getApplication(a.applicationId)),
            g = (0, s.bG)([p.A], () => p.A.useReducedMotion),
            I = i.useRef(null),
            T = null != a.gameRecord,
            S = () => {
                f({
                    questId: t.id,
                    questContent: C.uF.SPONSORED_QUEST_SHEET,
                    questContentCTA: b.Cy.GAME_STORE_OPEN_GAME_LINK,
                    sourceQuestContent: l,
                });
            },
            y = async () => {
                T &&
                    (f({
                        questId: t.id,
                        questContent: C.uF.SPONSORED_QUEST_SHEET,
                        questContentCTA: b.Cy.GAME_PROFILE_OPEN,
                        sourceQuestContent: l,
                    }),
                    await (0, _.openModalLazy)(
                        async () => {
                            let { default: e } = await Promise.all([
                                n.e("47742"),
                                n.e("89"),
                                n.e("58801"),
                                n.e("62609"),
                                n.e("31929"),
                            ]).then(n.bind(n, 225732));
                            return (t) =>
                                (0, r.jsx)(e, {
                                    applicationId: a.applicationId,
                                    source: m.Ob.GameSheet,
                                    trackExternalAction: S,
                                    ...t,
                                });
                        },
                        { onCloseCallback: d },
                    ),
                    u());
            },
            N = i.useCallback(
                (e) => {
                    if (null == I.current || g) return;
                    let t = I.current.getBoundingClientRect(),
                        n = e.clientX - t.left,
                        r = e.clientY - t.top,
                        i = t.width / 2,
                        s = t.height / 2;
                    I.current.style.transform = `rotateX(${-(((r - s) / s) * 15)}deg) rotateY(${((n - i) / i) * 15}deg)`;
                },
                [g],
            ),
            v = i.useCallback(() => {
                null == I.current || g || (I.current.style.transform = "rotateX(0deg) rotateY(0deg)");
            }, [g]);
        return (0, r.jsx)(o.m, {
            text: a.name,
            children: (0, r.jsx)(c.D, {
                className: x.zR,
                onClick: y,
                onMouseMove: N,
                onMouseLeave: v,
                children: (0, r.jsx)("div", {
                    ref: I,
                    className: x._M,
                    children:
                        null != a.gameRecord
                            ? (0, r.jsx)(A.A, { game: a.gameRecord, application: E, className: x.xe, size: A.w.SMALL })
                            : null != a.fallbackCoverImageUrl
                              ? (0, r.jsx)("img", { src: a.fallbackCoverImageUrl, alt: a.name, className: x.xe })
                              : null,
                }),
            }),
        });
    },
    G = () =>
        (0, r.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "75",
            height: "96",
            viewBox: "0 0 75 96",
            fill: "none",
            children: [
                (0, r.jsx)("rect", {
                    x: "1",
                    y: "1",
                    width: "73",
                    height: "94",
                    rx: "8",
                    fill: "var(--background-surface-high)",
                }),
                (0, r.jsx)("rect", {
                    x: "0.5",
                    y: "0.5",
                    width: "74",
                    height: "95",
                    rx: "8.5",
                    stroke: "var(--border-normal)",
                    strokeOpacity: "0.2",
                }),
                (0, r.jsx)("path", {
                    d: "M2.53418 3L73.0342 93.5",
                    stroke: "var(--border-normal)",
                    strokeOpacity: "0.2",
                }),
            ],
        });
function F(e) {
    let {
        quest: t,
        applications: a,
        onClose: o,
        sourceQuestContent: l,
        impressionRef: u,
        onGameProfileModalOpen: c,
        onGameProfileModalClose: d,
    } = e;
    (0, E.A)(a), (0, T.x)(a);
    let f = (0, s.bG)([I.A], () => a.some((e) => I.A.isFetching(e))),
        p = (0, s.bG)([I.A], () => a.some((e) => I.A.didFetchingFail(e))),
        h = (0, s.yK)([I.A], () =>
            a
                .map((e) => I.A.getGame(e))
                .filter((e) => null != e)
                .filter((e) => (0, g.oS)(e.applicationId))
                .slice(0, 10),
        ),
        m = (0, s.bG)([y.A, I.A], () => {
            let e = new Set(h.map((e) => e.applicationId));
            return a
                .filter((t) => !e.has(t))
                .filter((e) => null == I.A.getGame(e))
                .map((e) => {
                    let t = y.A.getDetectableGame(e);
                    if (t?.cover_image_hash == null) return null;
                    let n = v.Ay.getApplicationIconURL({
                        id: e,
                        icon: t.cover_image_hash,
                        size: 256,
                        keepAspectRatio: !0,
                    });
                    return null == n ? null : { applicationId: e, name: t.name, coverImageUrl: n };
                })
                .filter((e) => null != e)
                .slice(0, 10);
        }),
        A = i.useMemo(
            () =>
                [
                    ...h.map((e) => ({
                        applicationId: e.applicationId,
                        name: e.name,
                        gameRecord: e,
                        fallbackCoverImageUrl: null,
                    })),
                    ...m.map((e) => ({
                        applicationId: e.applicationId,
                        name: e.name,
                        gameRecord: null,
                        fallbackCoverImageUrl: e.coverImageUrl,
                    })),
                ].slice(0, 10),
            [h, m],
        ),
        S = i.useMemo(() => {
            let e = A.length;
            return e <= 4 ? 4 - e : 5 === e ? 0 : e <= 8 ? 8 - e : 10 - e;
        }, [A.length]),
        C = !f && 0 === A.length,
        O = p || C;
    if (
        (i.useEffect(() => {
            if (O) {
                let e = p ? L.W.FETCH_FAILED : L.W.NO_GAMES_AVAILABLE;
                N.default.track(M.HAw.QUEST_GAME_SHEET_ERROR, { quest_id: t.id, error_type: e }),
                    o(),
                    (0, _.openModalLazy)(async () => {
                        let { default: e } = await n.e("91646").then(n.bind(n, 659309));
                        return (t) => (0, r.jsx)(e, { ...t });
                    });
            }
        }, [O, p, t.id, o]),
        f && !O)
    ) {
        let e = Math.min(a.length, 10);
        return (0, r.jsxs)("div", {
            className: x.kL,
            children: [
                (0, r.jsx)(k, { quest: t, onClose: o }),
                (0, r.jsx)("div", {
                    className: x.LA,
                    children: a.slice(0, e).map((e) => (0, r.jsx)("div", { className: x.Vj }, e)),
                }),
            ],
        });
    }
    return O
        ? null
        : (0, r.jsxs)("div", {
              ref: (e) => {
                  u.current = e;
              },
              className: x.kL,
              children: [
                  (0, r.jsx)(k, { quest: t, onClose: o }),
                  (0, r.jsxs)("div", {
                      className: x.LA,
                      children: [
                          A.map((e) =>
                              (0, r.jsx)(
                                  U,
                                  {
                                      quest: t,
                                      game: e,
                                      sourceQuestContent: l,
                                      onGameProfileModalOpen: c,
                                      onGameProfileModalClose: d,
                                  },
                                  e.applicationId,
                              ),
                          ),
                          Array.from({ length: S }, (e, t) => (0, r.jsx)(G, {}, `placeholder-${t}`)),
                      ],
                  }),
              ],
          });
}
function V(e) {
    let {
            targetElementRef: t,
            applications: n,
            children: s,
            onGameSheetOpened: o,
            onGameSheetClosed: l,
            quest: u,
            sourceQuestContent: c,
            impressionRef: d,
        } = e,
        [_, p] = i.useState(!1),
        h = (0, R.Ut)(),
        E = i.useRef(null),
        m = t?.current != null,
        g = m ? t : E,
        A = () => {
            p(!0);
        },
        I = () => {
            p(!1);
        };
    return (0, r.jsx)(f.Y, {
        targetElementRef: g,
        clickTrap: !0,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, r.jsx)(F, {
                quest: u,
                applications: n,
                onClose: t,
                sourceQuestContent: c,
                impressionRef: d,
                onGameProfileModalOpen: A,
                onGameProfileModalClose: I,
            });
        },
        onRequestOpen: () => {
            o?.(),
                h({
                    questId: u.id,
                    questContent: c,
                    questContentCTA: b.Cy.SPONSORED_QUEST_SHEET,
                    sourceQuestContent: c,
                });
        },
        onRequestClose: () => {
            if (_) return a.o;
            l?.();
        },
        position: m ? "right" : "top",
        align: m ? "bottom" : void 0,
        spacing: 20,
        scrollBehavior: "close",
        ignoreModalClicks: !0,
        children: (e) => s(e, E),
    });
}
let B = function (e) {
    return null == e.quest || e.applications.length <= 1
        ? null
        : (0, r.jsx)(D.R, {
              questOrQuests: e.quest,
              questContent: C.uF.SPONSORED_QUEST_SHEET,
              sourceQuestContent: e.sourceQuestContent,
              children: (t) => (0, r.jsx)(V, { ...e, impressionRef: t }),
          });
};
