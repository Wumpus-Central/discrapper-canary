"use strict";
n.d(t, { A: () => F });
var i = n(627968),
    l = n(64700),
    s = n(311907),
    r = n(453903),
    a = n(990078),
    o = n(462887),
    c = n(834730),
    u = n(939249),
    d = n(789645),
    h = n(192308),
    m = n(265872),
    p = n(775602),
    f = n(587895),
    g = n(429913),
    _ = n(409626),
    x = n(611656),
    A = n(459746),
    C = n(311043),
    E = n(454908),
    I = n(544028),
    v = n(760751),
    y = n(954571),
    S = n(486020),
    b = n(341915),
    N = n(579473),
    T = n(18437),
    j = n(590202),
    R = n(73473),
    w = n(811500),
    L = n(654487),
    M = n(652215),
    k = n(985018),
    O = n(420298);
let P = (e) => {
        let t,
            n,
            l,
            { quest: r, onClose: a } = e,
            h = (0, s.bG)([I.A], () => I.A.getState().theme),
            m = (0, o.M)(h) ? M.NJ8.DARK : M.NJ8.LIGHT;
        return (0, i.jsxs)("div", {
            className: O.N1,
            children: [
                (0, i.jsxs)("div", {
                    className: O.VW,
                    children: [
                        (0, i.jsx)("img", {
                            className: O.rC,
                            alt: r.config.messages.gameTitle,
                            src: (0, N.tW)(r, N.fY.GAME_TILE, m).url,
                        }),
                        (0, i.jsxs)("div", {
                            className: O.if,
                            children: [
                                (0, i.jsx)(c.E, {
                                    variant: "text-sm/semibold",
                                    color: "text-strong",
                                    children:
                                        ((t = {
                                            [L.Li.PACKAGE_ACTION_ADVENTURE]: k.t.PYFVdf,
                                            [L.Li.PACKAGE_RPG_MMO]: k.t.rFQo2F,
                                            [L.Li.PACKAGE_RACING_SPORTS]: k.t.zDRa6g,
                                            [L.Li.PACKAGE_SANDBOX_CREATIVE]: k.t.vz9U2Q,
                                            [L.Li.PACKAGE_FAMILY_FRIENDLY]: k.t.IOiAE0,
                                            [L.Li.PACKAGE_HOLIDAY_SEASON]: k.t.cJPqvD,
                                            [L.Li.PACKAGE_NEW_YEARS]: k.t.S0w2mv,
                                        }),
                                        (l =
                                            (null != (n = r.config.features.find((e) => e in t)) ? t[n] : null) ??
                                            k.t["D+DkEH"]),
                                        k.intl.string(l)),
                                }),
                                (0, i.jsx)(c.E, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children: k.intl.string(k.t.VgN1Bn),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, i.jsx)(u.D, {
                    className: O.b,
                    "aria-label": k.intl.string(k.t.cpT0Cq),
                    onClick: a,
                    children: (0, i.jsx)(d.P, { size: "md", color: "currentColor" }),
                }),
            ],
        });
    },
    D = (e) => {
        let { quest: t, game: r, sourceQuestContent: o, onGameProfileModalOpen: c, onGameProfileModalClose: d } = e,
            m = (0, T.Ut)(),
            g = (0, s.bG)([f.A], () => f.A.getApplication(r.applicationId)),
            x = (0, s.bG)([p.A], () => p.A.useReducedMotion),
            C = l.useRef(null),
            E = null != r.gameRecord,
            I = () => {
                m({
                    questId: t.id,
                    questContent: b.uF.SPONSORED_QUEST_SHEET,
                    questContentCTA: j.Cy.GAME_STORE_OPEN_GAME_LINK,
                    sourceQuestContent: o,
                });
            },
            v = async () => {
                E &&
                    (m({
                        questId: t.id,
                        questContent: b.uF.SPONSORED_QUEST_SHEET,
                        questContentCTA: j.Cy.GAME_PROFILE_OPEN,
                        sourceQuestContent: o,
                    }),
                    await (0, h.openModalLazy)(
                        async () => {
                            let { default: e } = await Promise.all([
                                n.e("61943"),
                                n.e("28367"),
                                n.e("27411"),
                                n.e("49318"),
                                n.e("12721"),
                                n.e("58283"),
                                n.e("17601"),
                                n.e("8087"),
                                n.e("55057"),
                                n.e("60471"),
                                n.e("42257"),
                                n.e("48563"),
                                n.e("27355"),
                                n.e("67876"),
                                n.e("47742"),
                                n.e("89"),
                                n.e("58801"),
                                n.e("19677"),
                                n.e("62609"),
                                n.e("93157"),
                            ]).then(n.bind(n, 225732));
                            return (t) =>
                                (0, i.jsx)(e, {
                                    applicationId: r.applicationId,
                                    source: _.Ob.GameSheet,
                                    trackExternalAction: I,
                                    ...t,
                                });
                        },
                        { onCloseCallback: d },
                    ),
                    c());
            },
            y = l.useCallback(
                (e) => {
                    if (null == C.current || x) return;
                    let t = C.current.getBoundingClientRect(),
                        n = e.clientX - t.left,
                        i = e.clientY - t.top,
                        l = t.width / 2,
                        s = t.height / 2;
                    C.current.style.transform = `rotateX(${-(((i - s) / s) * 15)}deg) rotateY(${((n - l) / l) * 15}deg)`;
                },
                [x],
            ),
            S = l.useCallback(() => {
                null == C.current || x || (C.current.style.transform = "rotateX(0deg) rotateY(0deg)");
            }, [x]);
        return (0, i.jsx)(a.m, {
            text: r.name,
            children: (0, i.jsx)(u.D, {
                className: O.zR,
                onClick: v,
                onMouseMove: y,
                onMouseLeave: S,
                children: (0, i.jsx)("div", {
                    ref: C,
                    className: O._M,
                    children:
                        null != r.gameRecord
                            ? (0, i.jsx)(A.A, { game: r.gameRecord, application: g, className: O.xe, size: A.w.SMALL })
                            : null != r.fallbackCoverImageUrl
                              ? (0, i.jsx)("img", { src: r.fallbackCoverImageUrl, alt: r.name, className: O.xe })
                              : null,
                }),
            }),
        });
    },
    U = () =>
        (0, i.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "75",
            height: "96",
            viewBox: "0 0 75 96",
            fill: "none",
            children: [
                (0, i.jsx)("rect", {
                    x: "1",
                    y: "1",
                    width: "73",
                    height: "94",
                    rx: "8",
                    fill: "var(--background-surface-high)",
                }),
                (0, i.jsx)("rect", {
                    x: "0.5",
                    y: "0.5",
                    width: "74",
                    height: "95",
                    rx: "8.5",
                    stroke: "var(--border-normal)",
                    strokeOpacity: "0.2",
                }),
                (0, i.jsx)("path", {
                    d: "M2.53418 3L73.0342 93.5",
                    stroke: "var(--border-normal)",
                    strokeOpacity: "0.2",
                }),
            ],
        });
function V(e) {
    let {
        quest: t,
        applications: r,
        onClose: a,
        sourceQuestContent: o,
        impressionRef: c,
        onGameProfileModalOpen: u,
        onGameProfileModalClose: d,
    } = e;
    (0, g.A)(r), (0, E.x)(r);
    let m = (0, s.bG)([C.A], () => r.some((e) => C.A.isFetching(e))),
        p = (0, s.bG)([C.A], () => r.some((e) => C.A.didFetchingFail(e))),
        f = (0, s.yK)([C.A], () =>
            r
                .map((e) => C.A.getGame(e))
                .filter((e) => null != e)
                .filter((e) => (0, x.oS)(e.applicationId))
                .slice(0, 10),
        ),
        _ = (0, s.bG)([v.A, C.A], () => {
            let e = new Set(f.map((e) => e.applicationId));
            return r
                .filter((t) => !e.has(t))
                .filter((e) => null == C.A.getGame(e))
                .map((e) => {
                    let t = v.A.getDetectableGame(e);
                    if (t?.cover_image_hash == null) return null;
                    let n = S.Ay.getApplicationIconURL({
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
        A = l.useMemo(
            () =>
                [
                    ...f.map((e) => ({
                        applicationId: e.applicationId,
                        name: e.name,
                        gameRecord: e,
                        fallbackCoverImageUrl: null,
                    })),
                    ..._.map((e) => ({
                        applicationId: e.applicationId,
                        name: e.name,
                        gameRecord: null,
                        fallbackCoverImageUrl: e.coverImageUrl,
                    })),
                ].slice(0, 10),
            [f, _],
        ),
        I = l.useMemo(() => {
            let e = A.length;
            return e <= 4 ? 4 - e : 5 === e ? 0 : e <= 8 ? 8 - e : 10 - e;
        }, [A.length]),
        b = !m && 0 === A.length,
        N = p || b;
    if (
        (l.useEffect(() => {
            if (N) {
                let e = p ? w.W.FETCH_FAILED : w.W.NO_GAMES_AVAILABLE;
                y.default.track(M.HAw.QUEST_GAME_SHEET_ERROR, { quest_id: t.id, error_type: e }),
                    a(),
                    (0, h.openModalLazy)(async () => {
                        let { default: e } = await n.e("91646").then(n.bind(n, 659309));
                        return (t) => (0, i.jsx)(e, { ...t });
                    });
            }
        }, [N, p, t.id, a]),
        m && !N)
    ) {
        let e = Math.min(r.length, 10);
        return (0, i.jsxs)("div", {
            className: O.kL,
            children: [
                (0, i.jsx)(P, { quest: t, onClose: a }),
                (0, i.jsx)("div", {
                    className: O.LA,
                    children: r.slice(0, e).map((e) => (0, i.jsx)("div", { className: O.Vj }, e)),
                }),
            ],
        });
    }
    return N
        ? null
        : (0, i.jsxs)("div", {
              ref: (e) => {
                  c.current = e;
              },
              className: O.kL,
              children: [
                  (0, i.jsx)(P, { quest: t, onClose: a }),
                  (0, i.jsxs)("div", {
                      className: O.LA,
                      children: [
                          A.map((e) =>
                              (0, i.jsx)(
                                  D,
                                  {
                                      quest: t,
                                      game: e,
                                      sourceQuestContent: o,
                                      onGameProfileModalOpen: u,
                                      onGameProfileModalClose: d,
                                  },
                                  e.applicationId,
                              ),
                          ),
                          Array.from({ length: I }, (e, t) => (0, i.jsx)(U, {}, `placeholder-${t}`)),
                      ],
                  }),
              ],
          });
}
function G(e) {
    let {
            targetElementRef: t,
            applications: n,
            children: s,
            onGameSheetOpened: a,
            onGameSheetClosed: o,
            quest: c,
            sourceQuestContent: u,
            impressionRef: d,
        } = e,
        [h, p] = l.useState(!1),
        f = (0, T.Ut)(),
        g = l.useRef(null),
        _ = t?.current != null,
        x = _ ? t : g,
        A = () => {
            p(!0);
        },
        C = () => {
            p(!1);
        };
    return (0, i.jsx)(m.Y, {
        targetElementRef: x,
        clickTrap: !0,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(V, {
                quest: c,
                applications: n,
                onClose: t,
                sourceQuestContent: u,
                impressionRef: d,
                onGameProfileModalOpen: A,
                onGameProfileModalClose: C,
            });
        },
        onRequestOpen: () => {
            a?.(),
                f({
                    questId: c.id,
                    questContent: u,
                    questContentCTA: j.Cy.SPONSORED_QUEST_SHEET,
                    sourceQuestContent: u,
                });
        },
        onRequestClose: () => {
            if (h) return r.o;
            o?.();
        },
        position: _ ? "right" : "top",
        align: _ ? "bottom" : void 0,
        spacing: 20,
        scrollBehavior: "close",
        ignoreModalClicks: !0,
        children: (e) => s(e, g),
    });
}
let F = function (e) {
    return null == e.quest || e.applications.length <= 1
        ? null
        : (0, i.jsx)(R.R, {
              questOrQuests: e.quest,
              questContent: b.uF.SPONSORED_QUEST_SHEET,
              sourceQuestContent: e.sourceQuestContent,
              children: (t) => (0, i.jsx)(G, { ...e, impressionRef: t }),
          });
};
