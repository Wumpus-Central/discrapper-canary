n.d(t, { A: () => q }), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(311907),
    s = n(453903),
    o = n(990078),
    l = n(582754),
    c = n(397927),
    u = n(544420),
    d = n(775602),
    f = n(587895),
    p = n(429913),
    _ = n(524799),
    h = n(409626),
    m = n(611656),
    g = n(459746),
    E = n(544028),
    b = n(760751),
    y = n(954571),
    O = n(486020),
    A = n(216456),
    v = n(341915),
    S = n(579473),
    I = n(73473),
    T = n(811500),
    C = n(654487),
    N = n(652215),
    R = n(985018),
    w = n(72011);
function P(e, t, n) {
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
                P(e, t, n[t]);
            });
    }
    return e;
}
function x(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function L(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : x(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let j = 10,
    M = 20,
    k = 15,
    U = 4,
    G = 5,
    V = 8,
    F = 10;
function B(e) {
    var t;
    let n = {
            [C.Li.PACKAGE_ACTION_ADVENTURE]: R.t.PYFVdf,
            [C.Li.PACKAGE_RPG_MMO]: R.t.rFQo2F,
            [C.Li.PACKAGE_RACING_SPORTS]: R.t.zDRa6g,
            [C.Li.PACKAGE_SANDBOX_CREATIVE]: R.t.vz9U2Q,
            [C.Li.PACKAGE_FAMILY_FRIENDLY]: R.t.IOiAE0,
            [C.Li.PACKAGE_HOLIDAY_SEASON]: R.t.cJPqvD,
            [C.Li.PACKAGE_NEW_YEARS]: R.t.S0w2mv,
        },
        r = e.config.features.find((e) => e in n),
        i = null != (t = null != r ? n[r] : null) ? t : R.t["D+DkEH"];
    return R.intl.string(i);
}
let H = (e) => {
        let { quest: t, onClose: n } = e,
            i = (0, a.bG)([E.A], () => E.A.getState().theme),
            s = (0, l.Mw)(i) ? N.NJ8.DARK : N.NJ8.LIGHT;
        return (0, r.jsxs)("div", {
            className: w.N1,
            children: [
                (0, r.jsxs)("div", {
                    className: w.VW,
                    children: [
                        (0, r.jsx)("img", {
                            className: w.rC,
                            alt: t.config.messages.gameTitle,
                            src: (0, S.tW)(t, S.fY.GAME_TILE, s).url,
                        }),
                        (0, r.jsxs)("div", {
                            className: w.if,
                            children: [
                                (0, r.jsx)(c.Text, {
                                    variant: "text-sm/semibold",
                                    color: "text-strong",
                                    children: B(t),
                                }),
                                (0, r.jsx)(c.Text, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children: R.intl.string(R.t.VgN1Bn),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, r.jsx)(c.DUT, {
                    className: w.b,
                    "aria-label": R.intl.string(R.t.cpT0Cq),
                    onClick: n,
                    children: (0, r.jsx)(c.PGe, {
                        size: "md",
                        color: "currentColor",
                    }),
                }),
            ],
        });
    },
    Y = (e) => {
        let { quest: t, game: s, sourceQuestContent: l, onGameProfileModalOpen: u, onGameProfileModalClose: p } = e,
            _ = (0, A.Ut)(),
            m = (0, a.bG)([f.A], () => f.A.getApplication(s.applicationId)),
            E = (0, a.bG)([d.A], () => d.A.useReducedMotion),
            b = i.useRef(null),
            y = null != s.supplementalData,
            O = () => {
                _({
                    questId: t.id,
                    questContent: v.uF.SPONSORED_QUEST_SHEET,
                    questContentCTA: A.Cy.GAME_STORE_OPEN_GAME_LINK,
                    sourceQuestContent: l,
                });
            },
            S = async () => {
                y &&
                    (_({
                        questId: t.id,
                        questContent: v.uF.SPONSORED_QUEST_SHEET,
                        questContentCTA: A.Cy.GAME_PROFILE_OPEN,
                        sourceQuestContent: l,
                    }),
                    await (0, c.mMO)(
                        async () => {
                            let { default: e } = await n.e("13530").then(n.bind(n, 225732));
                            return (t) =>
                                (0, r.jsx)(
                                    e,
                                    D(
                                        {
                                            applicationId: s.applicationId,
                                            source: h.Ob.GameSheet,
                                            trackExternalAction: O,
                                        },
                                        t,
                                    ),
                                );
                        },
                        { onCloseCallback: p },
                    ),
                    u());
            },
            I = i.useCallback(
                (e) => {
                    if (null == b.current || E) return;
                    let t = b.current.getBoundingClientRect(),
                        n = e.clientX - t.left,
                        r = e.clientY - t.top,
                        i = t.width / 2,
                        a = t.height / 2,
                        s = -(((r - a) / a) * k),
                        o = ((n - i) / i) * k;
                    b.current.style.transform = "rotateX(".concat(s, "deg) rotateY(").concat(o, "deg)");
                },
                [E],
            ),
            T = i.useCallback(() => {
                null == b.current || E || (b.current.style.transform = "rotateX(0deg) rotateY(0deg)");
            }, [E]),
            C = () =>
                null != s.supplementalData
                    ? (0, r.jsx)(g.A, {
                          game: s.supplementalData,
                          application: m,
                          className: w.xe,
                          size: g.w.SMALL,
                      })
                    : null != s.fallbackCoverImageUrl
                      ? (0, r.jsx)("img", {
                            src: s.fallbackCoverImageUrl,
                            alt: s.name,
                            className: w.xe,
                        })
                      : null;
        return (0, r.jsx)(o.m, {
            text: s.name,
            children: (0, r.jsx)(c.DUT, {
                className: w.zR,
                onClick: S,
                onMouseMove: I,
                onMouseLeave: T,
                children: (0, r.jsx)("div", {
                    ref: b,
                    className: w._M,
                    children: C(),
                }),
            }),
        });
    },
    W = () =>
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
function K(e) {
    let {
        quest: t,
        applications: s,
        onClose: o,
        sourceQuestContent: l,
        impressionRef: d,
        onGameProfileModalOpen: f,
        onGameProfileModalClose: h,
    } = e;
    (0, p.A)(s),
        i.useEffect(() => {
            s.length > 1 && u.A.getDetectableGamesSupplemental(s);
        }, [s]);
    let g = (0, a.bG)([_.A], () => s.some((e) => _.A.isFetching(e))),
        E = (0, a.bG)([_.A], () => s.some((e) => _.A.didFetchingFail(e))),
        A = (0, a.yK)([_.A], () =>
            s
                .map((e) => _.A.getGame(e))
                .filter((e) => null != e)
                .filter((e) => (0, m.oS)(e.applicationId))
                .slice(0, j),
        ),
        v = (0, a.bG)([b.A, _.A], () => {
            let e = new Set(A.map((e) => e.applicationId));
            return s
                .filter((t) => !e.has(t))
                .filter((e) => null == _.A.getGame(e))
                .map((e) => {
                    let t = b.A.getDetectableGame(e);
                    if ((null == t ? void 0 : t.cover_image_hash) == null) return null;
                    let n = O.Ay.getApplicationIconURL({
                        id: e,
                        icon: t.cover_image_hash,
                        size: 256,
                        keepAspectRatio: !0,
                    });
                    return null == n
                        ? null
                        : {
                              applicationId: e,
                              name: t.name,
                              coverImageUrl: n,
                          };
                })
                .filter((e) => null != e)
                .slice(0, j);
        }),
        S = i.useMemo(
            () =>
                [
                    ...A.map((e) => ({
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
                ].slice(0, j),
            [A, v],
        ),
        I = i.useMemo(() => {
            let e = S.length;
            return e <= U ? U - e : e === G ? 0 : e <= V ? V - e : F - e;
        }, [S.length]),
        C = !g && 0 === S.length,
        R = E || C;
    if (
        (i.useEffect(() => {
            if (R) {
                let e = E ? T.W.FETCH_FAILED : T.W.NO_GAMES_AVAILABLE;
                y.default.track(N.HAw.QUEST_GAME_SHEET_ERROR, {
                    quest_id: t.id,
                    error_type: e,
                }),
                    o(),
                    (0, c.mMO)(async () => {
                        let { default: e } = await n.e("91646").then(n.bind(n, 659309));
                        return (t) => (0, r.jsx)(e, D({}, t));
                    });
            }
        }, [R, E, t.id, o]),
        g && !R)
    ) {
        let e = Math.min(s.length, j);
        return (0, r.jsxs)("div", {
            className: w.kL,
            children: [
                (0, r.jsx)(H, {
                    quest: t,
                    onClose: o,
                }),
                (0, r.jsx)("div", {
                    className: w.LA,
                    children: s.slice(0, e).map((e) => (0, r.jsx)("div", { className: w.Vj }, e)),
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
              className: w.kL,
              children: [
                  (0, r.jsx)(H, {
                      quest: t,
                      onClose: o,
                  }),
                  (0, r.jsxs)("div", {
                      className: w.LA,
                      children: [
                          S.map((e) =>
                              (0, r.jsx)(
                                  Y,
                                  {
                                      quest: t,
                                      game: e,
                                      sourceQuestContent: l,
                                      onGameProfileModalOpen: f,
                                      onGameProfileModalClose: h,
                                  },
                                  e.applicationId,
                              ),
                          ),
                          Array.from({ length: I }, (e, t) => (0, r.jsx)(W, {}, "placeholder-".concat(t))),
                      ],
                  }),
              ],
          });
}
function z(e) {
    let {
            targetElementRef: t,
            applications: n,
            children: a,
            onGameSheetOpened: o,
            onGameSheetClosed: l,
            quest: u,
            sourceQuestContent: d,
            impressionRef: f,
        } = e,
        [p, _] = i.useState(!1),
        h = (0, A.Ut)(),
        m = i.useRef(null),
        g = (null == t ? void 0 : t.current) != null,
        E = g ? t : m,
        b = g ? "right" : "top",
        y = g ? "bottom" : void 0,
        O = () => {
            null == o || o(),
                h({
                    questId: u.id,
                    questContent: d,
                    questContentCTA: A.Cy.SPONSORED_QUEST_SHEET,
                    sourceQuestContent: d,
                });
        },
        v = () => {
            if (p) return s.o;
            null == l || l();
        },
        S = () => {
            _(!0);
        },
        I = () => {
            _(!1);
        };
    return (0, r.jsx)(c.YNO, {
        targetElementRef: E,
        clickTrap: !0,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, r.jsx)(K, {
                quest: u,
                applications: n,
                onClose: t,
                sourceQuestContent: d,
                impressionRef: f,
                onGameProfileModalOpen: S,
                onGameProfileModalClose: I,
            });
        },
        onRequestOpen: O,
        onRequestClose: v,
        position: b,
        align: y,
        spacing: M,
        scrollBehavior: "close",
        ignoreModalClicks: !0,
        children: (e) => a(e, m),
    });
}
let q = function (e) {
    return null == e.quest || e.applications.length <= 1
        ? null
        : (0, r.jsx)(I.R, {
              questOrQuests: e.quest,
              questContent: v.uF.SPONSORED_QUEST_SHEET,
              sourceQuestContent: e.sourceQuestContent,
              children: (t) => (0, r.jsx)(z, L(D({}, e), { impressionRef: t })),
          });
};
