n.d(t, { Z: () => B }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(442837),
    o = n(930295),
    s = n(481060),
    l = n(224706),
    c = n(812206),
    u = n(835473),
    d = n(669764),
    f = n(810568),
    _ = n(774073),
    p = n(426482),
    h = n(626135),
    m = n(617136),
    g = n(497505),
    E = n(602667),
    b = n(723307),
    y = n(981631),
    O = n(388032),
    v = n(879048),
    I = n(557256);
function T(e, t, n) {
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
function S(e) {
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
                T(e, t, n[t]);
            });
    }
    return e;
}
function A(e, t) {
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
function C(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : A(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let N = 10,
    R = 20,
    P = 4,
    w = 5,
    D = 8,
    x = 10,
    L = (e) => {
        let { gameCount: t, onClose: n } = e;
        return (0, r.jsxs)("div", {
            className: v.headerContainer,
            children: [
                (0, r.jsxs)("div", {
                    className: v.headerContent,
                    children: [
                        (0, r.jsx)(s.Text, {
                            variant: "text-sm/semibold",
                            color: "text-primary",
                            children: O.intl.string(O.t["D+DkEB"]),
                        }),
                        (0, r.jsx)(s.Text, {
                            variant: "text-sm/normal",
                            color: "text-tertiary",
                            children: O.intl.format(O.t.JhwFc3, { count: t }),
                        }),
                    ],
                }),
                (0, r.jsx)(s.P3F, {
                    className: v.closeButton,
                    "aria-label": O.intl.string(O.t.cpT0Cg),
                    onClick: n,
                    children: (0, r.jsx)(s.Dio, {
                        size: "md",
                        color: "currentColor",
                    }),
                }),
            ],
        });
    },
    j = (e) => {
        let { quest: t, game: i, sourceQuestContent: o, onGameProfileModalOpen: l, onGameProfileModalClose: u } = e,
            d = (0, m.O5)(),
            _ = (0, a.e7)([c.Z], () => c.Z.getApplication(i.applicationId)),
            h = () => {
                d({
                    questId: t.id,
                    questContent: g.jn.SPONSORED_QUEST_SHEET,
                    questContentCTA: m.jZ.GAME_STORE_OPEN_GAME_LINK,
                    sourceQuestContent: o,
                });
            },
            E = async () => {
                d({
                    questId: t.id,
                    questContent: g.jn.SPONSORED_QUEST_SHEET,
                    questContentCTA: m.jZ.GAME_PROFILE_OPEN,
                    sourceQuestContent: o,
                }),
                    await (0, s.ZDy)(
                        async () => {
                            let { default: e } = await Promise.all([n.e("89311"), n.e("83123")]).then(
                                n.bind(n, 644941),
                            );
                            return (t) =>
                                (0, r.jsx)(
                                    e,
                                    S(
                                        {
                                            applicationId: i.applicationId,
                                            source: f.m1.GameSheet,
                                            trackExternalAction: h,
                                        },
                                        t,
                                    ),
                                );
                        },
                        { onCloseCallback: u },
                    ),
                    l();
            };
        return (0, r.jsx)(s.ua7, {
            text: i.name,
            children: (e) =>
                (0, r.jsx)(
                    s.P3F,
                    C(S({}, e), {
                        className: v.gameClickable,
                        onClick: E,
                        children: (0, r.jsx)(p.C, {
                            game: i,
                            application: _,
                            className: v.coverArt,
                            size: p.Z.SMALL,
                        }),
                    }),
                ),
        });
    },
    M = () =>
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
        }),
    k = (e) => {
        let { onClose: t } = e;
        return (0, r.jsxs)("div", {
            className: v.container,
            children: [
                (0, r.jsx)("div", {
                    className: v.closeButtonContainer,
                    children: (0, r.jsx)(s.P3F, {
                        className: v.closeButton,
                        "aria-label": O.intl.string(O.t.cpT0Cg),
                        onClick: t,
                        children: (0, r.jsx)(s.Dio, {
                            size: "md",
                            color: "currentColor",
                        }),
                    }),
                }),
                (0, r.jsxs)("div", {
                    className: v.errorContainer,
                    children: [
                        (0, r.jsx)("img", {
                            alt: "",
                            src: I,
                            className: v.errorImage,
                        }),
                        (0, r.jsx)(s.Text, {
                            variant: "text-md/normal",
                            color: "text-muted",
                            children: O.intl.string(O.t.F8FvU1),
                        }),
                    ],
                }),
            ],
        });
    };
function U(e) {
    let {
        quest: t,
        applications: n,
        onClose: o,
        sourceQuestContent: s,
        impressionRef: c,
        onGameProfileModalOpen: f,
        onGameProfileModalClose: p,
    } = e;
    (0, u.Z)(n),
        i.useEffect(() => {
            n.length > 1 && l.Z.getDetectableGamesSupplemental(n);
        }, [n]);
    let m = (0, a.e7)([d.Z], () => n.some((e) => d.Z.isFetching(e))),
        g = (0, a.e7)([d.Z], () => n.some((e) => d.Z.didFetchingFail(e))),
        E = (0, a.Wu)([d.Z], () =>
            n
                .map((e) => d.Z.getGame(e))
                .filter((e) => null != e)
                .filter((e) => (0, _.z6)(e.applicationId))
                .slice(0, N),
        ),
        O = i.useMemo(() => {
            let e = E.length;
            return e <= P ? P - e : e === w ? 0 : e <= D ? D - e : x - e;
        }, [E.length]);
    if (
        (i.useEffect(() => {
            g &&
                h.default.track(y.rMx.QUEST_GAME_SHEET_ERROR, {
                    quest_id: t.id,
                    error_type: b.n.FETCH_FAILED,
                });
        }, [g, t.id]),
        m && !g)
    ) {
        let e = Math.min(n.length, N);
        return (0, r.jsxs)("div", {
            className: v.container,
            children: [
                (0, r.jsx)(L, {
                    gameCount: e,
                    onClose: o,
                }),
                (0, r.jsx)("div", {
                    className: v.gameGrid,
                    children: n.slice(0, e).map((e) => (0, r.jsx)("div", { className: v.placeholderArt }, e)),
                }),
            ],
        });
    }
    return g
        ? (0, r.jsx)(k, { onClose: o })
        : (0, r.jsxs)("div", {
              ref: (e) => {
                  c.current = e;
              },
              className: v.container,
              children: [
                  (0, r.jsx)(L, {
                      gameCount: E.length,
                      onClose: o,
                  }),
                  (0, r.jsxs)("div", {
                      className: v.gameGrid,
                      children: [
                          E.map((e) =>
                              (0, r.jsx)(
                                  j,
                                  {
                                      quest: t,
                                      game: e,
                                      sourceQuestContent: s,
                                      onGameProfileModalOpen: f,
                                      onGameProfileModalClose: p,
                                  },
                                  e.applicationId,
                              ),
                          ),
                          Array.from({ length: O }, (e, t) => (0, r.jsx)(M, {}, "placeholder-".concat(t))),
                      ],
                  }),
              ],
          });
}
function G(e) {
    let {
            targetElementRef: t,
            applications: n,
            children: a,
            onGameSheetOpened: l,
            onGameSheetClosed: c,
            quest: u,
            sourceQuestContent: d,
            impressionRef: f,
        } = e,
        [_, p] = i.useState(!1),
        h = (0, m.O5)(),
        g = i.useRef(null),
        E = (null == t ? void 0 : t.current) != null,
        b = E ? t : g,
        y = E ? "right" : "top",
        O = E ? "bottom" : void 0,
        v = () => {
            null == l || l(),
                h({
                    questId: u.id,
                    questContent: d,
                    questContentCTA: m.jZ.SPONSORED_QUEST_SHEET,
                    sourceQuestContent: d,
                });
        },
        I = () => {
            if (_) return o.F;
            null == c || c();
        },
        T = () => {
            p(!0);
        },
        S = () => {
            p(!1);
        };
    return (0, r.jsx)(s.yRy, {
        targetElementRef: b,
        clickTrap: !0,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, r.jsx)(U, {
                quest: u,
                applications: n,
                onClose: t,
                sourceQuestContent: d,
                impressionRef: f,
                onGameProfileModalOpen: T,
                onGameProfileModalClose: S,
            });
        },
        onRequestOpen: v,
        onRequestClose: I,
        position: y,
        align: O,
        spacing: R,
        scrollBehavior: "close",
        children: (e) => a(e, g),
    });
}
let B = function (e) {
    return null == e.quest || e.applications.length <= 1
        ? null
        : (0, r.jsx)(E.A, {
              questOrQuests: e.quest,
              questContent: g.jn.SPONSORED_QUEST_SHEET,
              sourceQuestContent: e.sourceQuestContent,
              children: (t) => (0, r.jsx)(G, C(S({}, e), { impressionRef: t })),
          });
};
