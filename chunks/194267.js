"use strict";
n.d(t, { A: () => K });
var r = n(627968),
    i = n(64700),
    a = n(311907),
    s = n(453903),
    o = n(990078),
    l = n(582754),
    u = n(397927),
    c = n(544420),
    d = n(775602),
    _ = n(587895),
    f = n(429913),
    h = n(524799),
    p = n(409626),
    g = n(611656),
    E = n(459746),
    A = n(544028),
    I = n(760751),
    T = n(954571),
    y = n(486020),
    S = n(341915),
    v = n(579473),
    C = n(18437),
    b = n(590202),
    N = n(73473),
    R = n(811500),
    O = n(654487),
    D = n(652215),
    L = n(985018),
    w = n(72011);
let x = 10,
    P = 20,
    M = 15,
    k = 4,
    U = 5,
    G = 8,
    F = 10;
function V(e) {
    let t = {
            [O.Li.PACKAGE_ACTION_ADVENTURE]: L.t.PYFVdf,
            [O.Li.PACKAGE_RPG_MMO]: L.t.rFQo2F,
            [O.Li.PACKAGE_RACING_SPORTS]: L.t.zDRa6g,
            [O.Li.PACKAGE_SANDBOX_CREATIVE]: L.t.vz9U2Q,
            [O.Li.PACKAGE_FAMILY_FRIENDLY]: L.t.IOiAE0,
            [O.Li.PACKAGE_HOLIDAY_SEASON]: L.t.cJPqvD,
            [O.Li.PACKAGE_NEW_YEARS]: L.t.S0w2mv,
        },
        n = e.config.features.find((e) => e in t),
        r = (null != n ? t[n] : null) ?? L.t["D+DkEH"];
    return L.intl.string(r);
}
let B = (e) => {
        let { quest: t, onClose: n } = e,
            i = (0, a.bG)([A.A], () => A.A.getState().theme),
            s = (0, l.Mw)(i) ? D.NJ8.DARK : D.NJ8.LIGHT;
        return (0, r.jsxs)("div", {
            className: w.N1,
            children: [
                (0, r.jsxs)("div", {
                    className: w.VW,
                    children: [
                        (0, r.jsx)("img", {
                            className: w.rC,
                            alt: t.config.messages.gameTitle,
                            src: (0, v.tW)(t, v.fY.GAME_TILE, s).url,
                        }),
                        (0, r.jsxs)("div", {
                            className: w.if,
                            children: [
                                (0, r.jsx)(u.Text, {
                                    variant: "text-sm/semibold",
                                    color: "text-strong",
                                    children: V(t),
                                }),
                                (0, r.jsx)(u.Text, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children: L.intl.string(L.t.VgN1Bn),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, r.jsx)(u.DUT, {
                    className: w.b,
                    "aria-label": L.intl.string(L.t.cpT0Cq),
                    onClick: n,
                    children: (0, r.jsx)(u.PGe, { size: "md", color: "currentColor" }),
                }),
            ],
        });
    },
    j = (e) => {
        let { quest: t, game: s, sourceQuestContent: l, onGameProfileModalOpen: c, onGameProfileModalClose: f } = e,
            h = (0, C.Ut)(),
            g = (0, a.bG)([_.A], () => _.A.getApplication(s.applicationId)),
            A = (0, a.bG)([d.A], () => d.A.useReducedMotion),
            I = i.useRef(null),
            T = null != s.supplementalData,
            y = () => {
                h({
                    questId: t.id,
                    questContent: S.uF.SPONSORED_QUEST_SHEET,
                    questContentCTA: b.Cy.GAME_STORE_OPEN_GAME_LINK,
                    sourceQuestContent: l,
                });
            },
            v = async () => {
                T &&
                    (h({
                        questId: t.id,
                        questContent: S.uF.SPONSORED_QUEST_SHEET,
                        questContentCTA: b.Cy.GAME_PROFILE_OPEN,
                        sourceQuestContent: l,
                    }),
                    await (0, u.mMO)(
                        async () => {
                            let { default: e } = await n.e("13530").then(n.bind(n, 225732));
                            return (t) =>
                                (0, r.jsx)(e, {
                                    applicationId: s.applicationId,
                                    source: p.Ob.GameSheet,
                                    trackExternalAction: y,
                                    ...t,
                                });
                        },
                        { onCloseCallback: f },
                    ),
                    c());
            },
            N = i.useCallback(
                (e) => {
                    if (null == I.current || A) return;
                    let t = I.current.getBoundingClientRect(),
                        n = e.clientX - t.left,
                        r = e.clientY - t.top,
                        i = t.width / 2,
                        a = t.height / 2,
                        s = -(((r - a) / a) * M),
                        o = ((n - i) / i) * M;
                    I.current.style.transform = `rotateX(${s}deg) rotateY(${o}deg)`;
                },
                [A],
            ),
            R = i.useCallback(() => {
                null == I.current || A || (I.current.style.transform = "rotateX(0deg) rotateY(0deg)");
            }, [A]),
            O = () =>
                null != s.supplementalData
                    ? (0, r.jsx)(E.A, { game: s.supplementalData, application: g, className: w.xe, size: E.w.SMALL })
                    : null != s.fallbackCoverImageUrl
                      ? (0, r.jsx)("img", { src: s.fallbackCoverImageUrl, alt: s.name, className: w.xe })
                      : null;
        return (0, r.jsx)(o.m, {
            text: s.name,
            children: (0, r.jsx)(u.DUT, {
                className: w.zR,
                onClick: v,
                onMouseMove: N,
                onMouseLeave: R,
                children: (0, r.jsx)("div", { ref: I, className: w._M, children: O() }),
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
function Y(e) {
    let {
        quest: t,
        applications: s,
        onClose: o,
        sourceQuestContent: l,
        impressionRef: d,
        onGameProfileModalOpen: _,
        onGameProfileModalClose: p,
    } = e;
    (0, f.A)(s),
        i.useEffect(() => {
            s.length > 1 && c.A.getDetectableGamesSupplemental(s);
        }, [s]);
    let E = (0, a.bG)([h.A], () => s.some((e) => h.A.isFetching(e))),
        A = (0, a.bG)([h.A], () => s.some((e) => h.A.didFetchingFail(e))),
        S = (0, a.yK)([h.A], () =>
            s
                .map((e) => h.A.getGame(e))
                .filter((e) => null != e)
                .filter((e) => (0, g.oS)(e.applicationId))
                .slice(0, x),
        ),
        v = (0, a.bG)([I.A, h.A], () => {
            let e = new Set(S.map((e) => e.applicationId));
            return s
                .filter((t) => !e.has(t))
                .filter((e) => null == h.A.getGame(e))
                .map((e) => {
                    let t = I.A.getDetectableGame(e);
                    if (t?.cover_image_hash == null) return null;
                    let n = y.Ay.getApplicationIconURL({
                        id: e,
                        icon: t.cover_image_hash,
                        size: 256,
                        keepAspectRatio: !0,
                    });
                    return null == n ? null : { applicationId: e, name: t.name, coverImageUrl: n };
                })
                .filter((e) => null != e)
                .slice(0, x);
        }),
        C = i.useMemo(
            () =>
                [
                    ...S.map((e) => ({
                        applicationId: e.applicationId,
                        name: e.name,
                        supplementalData: e,
                        fallbackCoverImageUrl: null,
                    })),
                    ...v.map((e) => ({
                        applicationId: e.applicationId,
                        name: e.name,
                        supplementalData: null,
                        fallbackCoverImageUrl: e.coverImageUrl,
                    })),
                ].slice(0, x),
            [S, v],
        ),
        b = i.useMemo(() => {
            let e = C.length;
            return e <= k ? k - e : e === U ? 0 : e <= G ? G - e : F - e;
        }, [C.length]),
        N = !E && 0 === C.length,
        O = A || N;
    if (
        (i.useEffect(() => {
            if (O) {
                let e = A ? R.W.FETCH_FAILED : R.W.NO_GAMES_AVAILABLE;
                T.default.track(D.HAw.QUEST_GAME_SHEET_ERROR, { quest_id: t.id, error_type: e }),
                    o(),
                    (0, u.mMO)(async () => {
                        let { default: e } = await n.e("91646").then(n.bind(n, 659309));
                        return (t) => (0, r.jsx)(e, { ...t });
                    });
            }
        }, [O, A, t.id, o]),
        E && !O)
    ) {
        let e = Math.min(s.length, x);
        return (0, r.jsxs)("div", {
            className: w.kL,
            children: [
                (0, r.jsx)(B, { quest: t, onClose: o }),
                (0, r.jsx)("div", {
                    className: w.LA,
                    children: s.slice(0, e).map((e) => (0, r.jsx)("div", { className: w.Vj }, e)),
                }),
            ],
        });
    }
    return O
        ? null
        : (0, r.jsxs)("div", {
              ref: (e) => {
                  d.current = e;
              },
              className: w.kL,
              children: [
                  (0, r.jsx)(B, { quest: t, onClose: o }),
                  (0, r.jsxs)("div", {
                      className: w.LA,
                      children: [
                          C.map((e) =>
                              (0, r.jsx)(
                                  j,
                                  {
                                      quest: t,
                                      game: e,
                                      sourceQuestContent: l,
                                      onGameProfileModalOpen: _,
                                      onGameProfileModalClose: p,
                                  },
                                  e.applicationId,
                              ),
                          ),
                          Array.from({ length: b }, (e, t) => (0, r.jsx)(H, {}, `placeholder-${t}`)),
                      ],
                  }),
              ],
          });
}
function W(e) {
    let {
            targetElementRef: t,
            applications: n,
            children: a,
            onGameSheetOpened: o,
            onGameSheetClosed: l,
            quest: c,
            sourceQuestContent: d,
            impressionRef: _,
        } = e,
        [f, h] = i.useState(!1),
        p = (0, C.Ut)(),
        g = i.useRef(null),
        E = t?.current != null,
        A = E ? t : g,
        I = E ? "right" : "top",
        T = E ? "bottom" : void 0,
        y = () => {
            o?.(),
                p({
                    questId: c.id,
                    questContent: d,
                    questContentCTA: b.Cy.SPONSORED_QUEST_SHEET,
                    sourceQuestContent: d,
                });
        },
        S = () => {
            if (f) return s.o;
            l?.();
        },
        v = () => {
            h(!0);
        },
        N = () => {
            h(!1);
        };
    return (0, r.jsx)(u.YNO, {
        targetElementRef: A,
        clickTrap: !0,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, r.jsx)(Y, {
                quest: c,
                applications: n,
                onClose: t,
                sourceQuestContent: d,
                impressionRef: _,
                onGameProfileModalOpen: v,
                onGameProfileModalClose: N,
            });
        },
        onRequestOpen: y,
        onRequestClose: S,
        position: I,
        align: T,
        spacing: P,
        scrollBehavior: "close",
        ignoreModalClicks: !0,
        children: (e) => a(e, g),
    });
}
let K = function (e) {
    return null == e.quest || e.applications.length <= 1
        ? null
        : (0, r.jsx)(N.R, {
              questOrQuests: e.quest,
              questContent: S.uF.SPONSORED_QUEST_SHEET,
              sourceQuestContent: e.sourceQuestContent,
              children: (t) => (0, r.jsx)(W, { ...e, impressionRef: t }),
          });
};
