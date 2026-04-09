"use strict";
n.d(t, { A: () => W });
var r = n(627968),
    i = n(64700),
    s = n(311907),
    a = n(453903),
    o = n(990078),
    l = n(582754),
    u = n(397927),
    c = n(775602),
    d = n(587895),
    _ = n(429913),
    f = n(409626),
    p = n(611656),
    h = n(459746),
    m = n(311043),
    E = n(454908),
    g = n(544028),
    A = n(760751),
    I = n(954571),
    T = n(486020),
    S = n(341915),
    y = n(579473),
    v = n(18437),
    N = n(590202),
    C = n(73473),
    R = n(811500),
    O = n(654487),
    b = n(652215),
    D = n(985018),
    L = n(650746);
let w = 10,
    M = 20,
    x = 15,
    P = 4,
    k = 5,
    U = 8,
    G = 10;
function F(e) {
    let t = {
            [O.Li.PACKAGE_ACTION_ADVENTURE]: D.t.PYFVdf,
            [O.Li.PACKAGE_RPG_MMO]: D.t.rFQo2F,
            [O.Li.PACKAGE_RACING_SPORTS]: D.t.zDRa6g,
            [O.Li.PACKAGE_SANDBOX_CREATIVE]: D.t.vz9U2Q,
            [O.Li.PACKAGE_FAMILY_FRIENDLY]: D.t.IOiAE0,
            [O.Li.PACKAGE_HOLIDAY_SEASON]: D.t.cJPqvD,
            [O.Li.PACKAGE_NEW_YEARS]: D.t.S0w2mv,
        },
        n = e.config.features.find((e) => e in t),
        r = (null != n ? t[n] : null) ?? D.t["D+DkEH"];
    return D.intl.string(r);
}
let V = (e) => {
        let { quest: t, onClose: n } = e,
            i = (0, s.bG)([g.A], () => g.A.getState().theme),
            a = (0, l.Mw)(i) ? b.NJ8.DARK : b.NJ8.LIGHT;
        return (0, r.jsxs)("div", {
            className: L.N1,
            children: [
                (0, r.jsxs)("div", {
                    className: L.VW,
                    children: [
                        (0, r.jsx)("img", {
                            className: L.rC,
                            alt: t.config.messages.gameTitle,
                            src: (0, y.tW)(t, y.fY.GAME_TILE, a).url,
                        }),
                        (0, r.jsxs)("div", {
                            className: L.if,
                            children: [
                                (0, r.jsx)(u.Text, {
                                    variant: "text-sm/semibold",
                                    color: "text-strong",
                                    children: F(t),
                                }),
                                (0, r.jsx)(u.Text, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children: D.intl.string(D.t.VgN1Bn),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, r.jsx)(u.DUT, {
                    className: L.b,
                    "aria-label": D.intl.string(D.t.cpT0Cq),
                    onClick: n,
                    children: (0, r.jsx)(u.PGe, { size: "md", color: "currentColor" }),
                }),
            ],
        });
    },
    B = (e) => {
        let { quest: t, game: a, sourceQuestContent: l, onGameProfileModalOpen: _, onGameProfileModalClose: p } = e,
            m = (0, v.Ut)(),
            E = (0, s.bG)([d.A], () => d.A.getApplication(a.applicationId)),
            g = (0, s.bG)([c.A], () => c.A.useReducedMotion),
            A = i.useRef(null),
            I = null != a.gameRecord,
            T = () => {
                m({
                    questId: t.id,
                    questContent: S.uF.SPONSORED_QUEST_SHEET,
                    questContentCTA: N.Cy.GAME_STORE_OPEN_GAME_LINK,
                    sourceQuestContent: l,
                });
            },
            y = async () => {
                I &&
                    (m({
                        questId: t.id,
                        questContent: S.uF.SPONSORED_QUEST_SHEET,
                        questContentCTA: N.Cy.GAME_PROFILE_OPEN,
                        sourceQuestContent: l,
                    }),
                    await (0, u.mMO)(
                        async () => {
                            let { default: e } = await Promise.all([
                                n.e("18976"),
                                n.e("21957"),
                                n.e("18037"),
                                n.e("16222"),
                            ]).then(n.bind(n, 225732));
                            return (t) =>
                                (0, r.jsx)(e, {
                                    applicationId: a.applicationId,
                                    source: f.Ob.GameSheet,
                                    trackExternalAction: T,
                                    ...t,
                                });
                        },
                        { onCloseCallback: p },
                    ),
                    _());
            },
            C = i.useCallback(
                (e) => {
                    if (null == A.current || g) return;
                    let t = A.current.getBoundingClientRect(),
                        n = e.clientX - t.left,
                        r = e.clientY - t.top,
                        i = t.width / 2,
                        s = t.height / 2,
                        a = -(((r - s) / s) * x),
                        o = ((n - i) / i) * x;
                    A.current.style.transform = `rotateX(${a}deg) rotateY(${o}deg)`;
                },
                [g],
            ),
            R = i.useCallback(() => {
                null == A.current || g || (A.current.style.transform = "rotateX(0deg) rotateY(0deg)");
            }, [g]),
            O = () =>
                null != a.gameRecord
                    ? (0, r.jsx)(h.A, { game: a.gameRecord, application: E, className: L.xe, size: h.w.SMALL })
                    : null != a.fallbackCoverImageUrl
                      ? (0, r.jsx)("img", { src: a.fallbackCoverImageUrl, alt: a.name, className: L.xe })
                      : null;
        return (0, r.jsx)(o.m, {
            text: a.name,
            children: (0, r.jsx)(u.DUT, {
                className: L.zR,
                onClick: y,
                onMouseMove: C,
                onMouseLeave: R,
                children: (0, r.jsx)("div", { ref: A, className: L._M, children: O() }),
            }),
        });
    },
    H = () =>
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
function j(e) {
    let {
        quest: t,
        applications: a,
        onClose: o,
        sourceQuestContent: l,
        impressionRef: c,
        onGameProfileModalOpen: d,
        onGameProfileModalClose: f,
    } = e;
    (0, _.A)(a), (0, E.x)(a);
    let h = (0, s.bG)([m.A], () => a.some((e) => m.A.isFetching(e))),
        g = (0, s.bG)([m.A], () => a.some((e) => m.A.didFetchingFail(e))),
        S = (0, s.yK)([m.A], () =>
            a
                .map((e) => m.A.getGame(e))
                .filter((e) => null != e)
                .filter((e) => (0, p.oS)(e.applicationId))
                .slice(0, w),
        ),
        y = (0, s.bG)([A.A, m.A], () => {
            let e = new Set(S.map((e) => e.applicationId));
            return a
                .filter((t) => !e.has(t))
                .filter((e) => null == m.A.getGame(e))
                .map((e) => {
                    let t = A.A.getDetectableGame(e);
                    if (t?.cover_image_hash == null) return null;
                    let n = T.Ay.getApplicationIconURL({
                        id: e,
                        icon: t.cover_image_hash,
                        size: 256,
                        keepAspectRatio: !0,
                    });
                    return null == n ? null : { applicationId: e, name: t.name, coverImageUrl: n };
                })
                .filter((e) => null != e)
                .slice(0, w);
        }),
        v = i.useMemo(
            () =>
                [
                    ...S.map((e) => ({
                        applicationId: e.applicationId,
                        name: e.name,
                        gameRecord: e,
                        fallbackCoverImageUrl: null,
                    })),
                    ...y.map((e) => ({
                        applicationId: e.applicationId,
                        name: e.name,
                        gameRecord: null,
                        fallbackCoverImageUrl: e.coverImageUrl,
                    })),
                ].slice(0, w),
            [S, y],
        ),
        N = i.useMemo(() => {
            let e = v.length;
            return e <= P ? P - e : e === k ? 0 : e <= U ? U - e : G - e;
        }, [v.length]),
        C = !h && 0 === v.length,
        O = g || C;
    if (
        (i.useEffect(() => {
            if (O) {
                let e = g ? R.W.FETCH_FAILED : R.W.NO_GAMES_AVAILABLE;
                I.default.track(b.HAw.QUEST_GAME_SHEET_ERROR, { quest_id: t.id, error_type: e }),
                    o(),
                    (0, u.mMO)(async () => {
                        let { default: e } = await n.e("91646").then(n.bind(n, 659309));
                        return (t) => (0, r.jsx)(e, { ...t });
                    });
            }
        }, [O, g, t.id, o]),
        h && !O)
    ) {
        let e = Math.min(a.length, w);
        return (0, r.jsxs)("div", {
            className: L.kL,
            children: [
                (0, r.jsx)(V, { quest: t, onClose: o }),
                (0, r.jsx)("div", {
                    className: L.LA,
                    children: a.slice(0, e).map((e) => (0, r.jsx)("div", { className: L.Vj }, e)),
                }),
            ],
        });
    }
    return O
        ? null
        : (0, r.jsxs)("div", {
              ref: (e) => {
                  c.current = e;
              },
              className: L.kL,
              children: [
                  (0, r.jsx)(V, { quest: t, onClose: o }),
                  (0, r.jsxs)("div", {
                      className: L.LA,
                      children: [
                          v.map((e) =>
                              (0, r.jsx)(
                                  B,
                                  {
                                      quest: t,
                                      game: e,
                                      sourceQuestContent: l,
                                      onGameProfileModalOpen: d,
                                      onGameProfileModalClose: f,
                                  },
                                  e.applicationId,
                              ),
                          ),
                          Array.from({ length: N }, (e, t) => (0, r.jsx)(H, {}, `placeholder-${t}`)),
                      ],
                  }),
              ],
          });
}
function Y(e) {
    let {
            targetElementRef: t,
            applications: n,
            children: s,
            onGameSheetOpened: o,
            onGameSheetClosed: l,
            quest: c,
            sourceQuestContent: d,
            impressionRef: _,
        } = e,
        [f, p] = i.useState(!1),
        h = (0, v.Ut)(),
        m = i.useRef(null),
        E = t?.current != null,
        g = E ? t : m,
        A = E ? "right" : "top",
        I = E ? "bottom" : void 0,
        T = () => {
            o?.(),
                h({
                    questId: c.id,
                    questContent: d,
                    questContentCTA: N.Cy.SPONSORED_QUEST_SHEET,
                    sourceQuestContent: d,
                });
        },
        S = () => {
            if (f) return a.o;
            l?.();
        },
        y = () => {
            p(!0);
        },
        C = () => {
            p(!1);
        };
    return (0, r.jsx)(u.YNO, {
        targetElementRef: g,
        clickTrap: !0,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, r.jsx)(j, {
                quest: c,
                applications: n,
                onClose: t,
                sourceQuestContent: d,
                impressionRef: _,
                onGameProfileModalOpen: y,
                onGameProfileModalClose: C,
            });
        },
        onRequestOpen: T,
        onRequestClose: S,
        position: A,
        align: I,
        spacing: M,
        scrollBehavior: "close",
        ignoreModalClicks: !0,
        children: (e) => s(e, m),
    });
}
let W = function (e) {
    return null == e.quest || e.applications.length <= 1
        ? null
        : (0, r.jsx)(C.R, {
              questOrQuests: e.quest,
              questContent: S.uF.SPONSORED_QUEST_SHEET,
              sourceQuestContent: e.sourceQuestContent,
              children: (t) => (0, r.jsx)(Y, { ...e, impressionRef: t }),
          });
};
