"use strict";
n.d(t, { A: () => W });
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
    p = n(524799),
    h = n(409626),
    m = n(611656),
    g = n(459746),
    E = n(544028),
    A = n(760751),
    I = n(954571),
    T = n(486020),
    y = n(341915),
    S = n(579473),
    v = n(18437),
    C = n(590202),
    b = n(73473),
    N = n(811500),
    R = n(654487),
    O = n(652215),
    D = n(985018),
    L = n(72011);
let w = 10,
    x = 20,
    P = 15,
    M = 4,
    k = 5,
    U = 8,
    G = 10;
function V(e) {
    let t = {
            [R.Li.PACKAGE_ACTION_ADVENTURE]: D.t.PYFVdf,
            [R.Li.PACKAGE_RPG_MMO]: D.t.rFQo2F,
            [R.Li.PACKAGE_RACING_SPORTS]: D.t.zDRa6g,
            [R.Li.PACKAGE_SANDBOX_CREATIVE]: D.t.vz9U2Q,
            [R.Li.PACKAGE_FAMILY_FRIENDLY]: D.t.IOiAE0,
            [R.Li.PACKAGE_HOLIDAY_SEASON]: D.t.cJPqvD,
            [R.Li.PACKAGE_NEW_YEARS]: D.t.S0w2mv,
        },
        n = e.config.features.find((e) => e in t),
        r = (null != n ? t[n] : null) ?? D.t["D+DkEH"];
    return D.intl.string(r);
}
let F = (e) => {
        let { quest: t, onClose: n } = e,
            i = (0, a.bG)([E.A], () => E.A.getState().theme),
            s = (0, l.Mw)(i) ? O.NJ8.DARK : O.NJ8.LIGHT;
        return (0, r.jsxs)("div", {
            className: L.N1,
            children: [
                (0, r.jsxs)("div", {
                    className: L.VW,
                    children: [
                        (0, r.jsx)("img", {
                            className: L.rC,
                            alt: t.config.messages.gameTitle,
                            src: (0, S.tW)(t, S.fY.GAME_TILE, s).url,
                        }),
                        (0, r.jsxs)("div", {
                            className: L.if,
                            children: [
                                (0, r.jsx)(u.Text, {
                                    variant: "text-sm/semibold",
                                    color: "text-strong",
                                    children: V(t),
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
        let { quest: t, game: s, sourceQuestContent: l, onGameProfileModalOpen: c, onGameProfileModalClose: f } = e,
            p = (0, v.Ut)(),
            m = (0, a.bG)([_.A], () => _.A.getApplication(s.applicationId)),
            E = (0, a.bG)([d.A], () => d.A.useReducedMotion),
            A = i.useRef(null),
            I = null != s.supplementalData,
            T = () => {
                p({
                    questId: t.id,
                    questContent: y.uF.SPONSORED_QUEST_SHEET,
                    questContentCTA: C.Cy.GAME_STORE_OPEN_GAME_LINK,
                    sourceQuestContent: l,
                });
            },
            S = async () => {
                I &&
                    (p({
                        questId: t.id,
                        questContent: y.uF.SPONSORED_QUEST_SHEET,
                        questContentCTA: C.Cy.GAME_PROFILE_OPEN,
                        sourceQuestContent: l,
                    }),
                    await (0, u.mMO)(
                        async () => {
                            let { default: e } = await n.e("13530").then(n.bind(n, 225732));
                            return (t) =>
                                (0, r.jsx)(e, {
                                    applicationId: s.applicationId,
                                    source: h.Ob.GameSheet,
                                    trackExternalAction: T,
                                    ...t,
                                });
                        },
                        { onCloseCallback: f },
                    ),
                    c());
            },
            b = i.useCallback(
                (e) => {
                    if (null == A.current || E) return;
                    let t = A.current.getBoundingClientRect(),
                        n = e.clientX - t.left,
                        r = e.clientY - t.top,
                        i = t.width / 2,
                        a = t.height / 2,
                        s = -(((r - a) / a) * P),
                        o = ((n - i) / i) * P;
                    A.current.style.transform = `rotateX(${s}deg) rotateY(${o}deg)`;
                },
                [E],
            ),
            N = i.useCallback(() => {
                null == A.current || E || (A.current.style.transform = "rotateX(0deg) rotateY(0deg)");
            }, [E]),
            R = () =>
                null != s.supplementalData
                    ? (0, r.jsx)(g.A, { game: s.supplementalData, application: m, className: L.xe, size: g.w.SMALL })
                    : null != s.fallbackCoverImageUrl
                      ? (0, r.jsx)("img", { src: s.fallbackCoverImageUrl, alt: s.name, className: L.xe })
                      : null;
        return (0, r.jsx)(o.m, {
            text: s.name,
            children: (0, r.jsx)(u.DUT, {
                className: L.zR,
                onClick: S,
                onMouseMove: b,
                onMouseLeave: N,
                children: (0, r.jsx)("div", { ref: A, className: L._M, children: R() }),
            }),
        });
    },
    j = () =>
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
function H(e) {
    let {
        quest: t,
        applications: s,
        onClose: o,
        sourceQuestContent: l,
        impressionRef: d,
        onGameProfileModalOpen: _,
        onGameProfileModalClose: h,
    } = e;
    (0, f.A)(s),
        i.useEffect(() => {
            s.length > 1 && c.A.getDetectableGamesSupplemental(s);
        }, [s]);
    let g = (0, a.bG)([p.A], () => s.some((e) => p.A.isFetching(e))),
        E = (0, a.bG)([p.A], () => s.some((e) => p.A.didFetchingFail(e))),
        y = (0, a.yK)([p.A], () =>
            s
                .map((e) => p.A.getGame(e))
                .filter((e) => null != e)
                .filter((e) => (0, m.oS)(e.applicationId))
                .slice(0, w),
        ),
        S = (0, a.bG)([A.A, p.A], () => {
            let e = new Set(y.map((e) => e.applicationId));
            return s
                .filter((t) => !e.has(t))
                .filter((e) => null == p.A.getGame(e))
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
                    ...y.map((e) => ({
                        applicationId: e.applicationId,
                        name: e.name,
                        supplementalData: e,
                        fallbackCoverImageUrl: null,
                    })),
                    ...S.map((e) => ({
                        applicationId: e.applicationId,
                        name: e.name,
                        supplementalData: null,
                        fallbackCoverImageUrl: e.coverImageUrl,
                    })),
                ].slice(0, w),
            [y, S],
        ),
        C = i.useMemo(() => {
            let e = v.length;
            return e <= M ? M - e : e === k ? 0 : e <= U ? U - e : G - e;
        }, [v.length]),
        b = !g && 0 === v.length,
        R = E || b;
    if (
        (i.useEffect(() => {
            if (R) {
                let e = E ? N.W.FETCH_FAILED : N.W.NO_GAMES_AVAILABLE;
                I.default.track(O.HAw.QUEST_GAME_SHEET_ERROR, { quest_id: t.id, error_type: e }),
                    o(),
                    (0, u.mMO)(async () => {
                        let { default: e } = await n.e("91646").then(n.bind(n, 659309));
                        return (t) => (0, r.jsx)(e, { ...t });
                    });
            }
        }, [R, E, t.id, o]),
        g && !R)
    ) {
        let e = Math.min(s.length, w);
        return (0, r.jsxs)("div", {
            className: L.kL,
            children: [
                (0, r.jsx)(F, { quest: t, onClose: o }),
                (0, r.jsx)("div", {
                    className: L.LA,
                    children: s.slice(0, e).map((e) => (0, r.jsx)("div", { className: L.Vj }, e)),
                }),
            ],
        });
    }
    return R
        ? null
        : (0, r.jsxs)("div", {
              ref: (e) => {
                  d.current = e;
              },
              className: L.kL,
              children: [
                  (0, r.jsx)(F, { quest: t, onClose: o }),
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
                                      onGameProfileModalOpen: _,
                                      onGameProfileModalClose: h,
                                  },
                                  e.applicationId,
                              ),
                          ),
                          Array.from({ length: C }, (e, t) => (0, r.jsx)(j, {}, `placeholder-${t}`)),
                      ],
                  }),
              ],
          });
}
function Y(e) {
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
        [f, p] = i.useState(!1),
        h = (0, v.Ut)(),
        m = i.useRef(null),
        g = t?.current != null,
        E = g ? t : m,
        A = g ? "right" : "top",
        I = g ? "bottom" : void 0,
        T = () => {
            o?.(),
                h({
                    questId: c.id,
                    questContent: d,
                    questContentCTA: C.Cy.SPONSORED_QUEST_SHEET,
                    sourceQuestContent: d,
                });
        },
        y = () => {
            if (f) return s.o;
            l?.();
        },
        S = () => {
            p(!0);
        },
        b = () => {
            p(!1);
        };
    return (0, r.jsx)(u.YNO, {
        targetElementRef: E,
        clickTrap: !0,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, r.jsx)(H, {
                quest: c,
                applications: n,
                onClose: t,
                sourceQuestContent: d,
                impressionRef: _,
                onGameProfileModalOpen: S,
                onGameProfileModalClose: b,
            });
        },
        onRequestOpen: T,
        onRequestClose: y,
        position: A,
        align: I,
        spacing: x,
        scrollBehavior: "close",
        ignoreModalClicks: !0,
        children: (e) => a(e, m),
    });
}
let W = function (e) {
    return null == e.quest || e.applications.length <= 1
        ? null
        : (0, r.jsx)(b.R, {
              questOrQuests: e.quest,
              questContent: y.uF.SPONSORED_QUEST_SHEET,
              sourceQuestContent: e.sourceQuestContent,
              children: (t) => (0, r.jsx)(Y, { ...e, impressionRef: t }),
          });
};
