n.d(t, { Z: () => H }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(442837),
    o = n(930295),
    s = n(28664),
    l = n(780384),
    c = n(481060),
    u = n(224706),
    d = n(812206),
    f = n(835473),
    _ = n(669764),
    p = n(810568),
    h = n(774073),
    m = n(426482),
    g = n(210887),
    E = n(626135),
    b = n(617136),
    y = n(497505),
    O = n(475595),
    v = n(602667),
    I = n(723307),
    T = n(46140),
    S = n(981631),
    A = n(388032),
    C = n(879048);
function N(e, t, n) {
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
function R(e) {
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
                N(e, t, n[t]);
            });
    }
    return e;
}
function P(e, t) {
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
function w(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : P(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let D = 10,
    L = 20,
    x = 4,
    M = 5,
    j = 8,
    k = 10;
function U(e) {
    var t;
    let n = {
            [T.S7.PACKAGE_ACTION_ADVENTURE]: A.t.PYFVdX,
            [T.S7.PACKAGE_RPG_MMO]: A.t.rFQo2N,
            [T.S7.PACKAGE_RACING_SPORTS]: A.t.zDRa6u,
            [T.S7.PACKAGE_SANDBOX_CREATIVE]: A.t.vz9U2d,
            [T.S7.PACKAGE_FAMILY_FRIENDLY]: A.t.IOiAEx,
            [T.S7.PACKAGE_HOLIDAY_SEASON]: A.t.cJPqvL,
            [T.S7.PACKAGE_NEW_YEARS]: A.t.S0w2mp,
        },
        r = e.config.features.find((e) => e in n),
        i = null != (t = null != r ? n[r] : null) ? t : A.t["D+DkEB"];
    return A.intl.string(i);
}
let G = (e) => {
        let { quest: t, onClose: n } = e,
            i = (0, a.e7)([g.Z], () => g.Z.getState().theme),
            o = (0, l.wj)(i) ? S.BRd.DARK : S.BRd.LIGHT;
        return (0, r.jsxs)("div", {
            className: C.headerContainer,
            children: [
                (0, r.jsxs)("div", {
                    className: C.headerContent,
                    children: [
                        (0, r.jsx)("img", {
                            className: C.gameTile,
                            alt: t.config.messages.gameTitle,
                            src: (0, O.fh)(t, O.eC.GAME_TILE, o).url,
                        }),
                        (0, r.jsxs)("div", {
                            className: C.headerTextContainer,
                            children: [
                                (0, r.jsx)(c.Text, {
                                    variant: "text-sm/semibold",
                                    color: "text-primary",
                                    children: U(t),
                                }),
                                (0, r.jsx)(c.Text, {
                                    variant: "text-sm/normal",
                                    color: "text-tertiary",
                                    children: A.intl.string(A.t.VgN1Bg),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, r.jsx)(c.P3F, {
                    className: C.closeButton,
                    "aria-label": A.intl.string(A.t.cpT0Cg),
                    onClick: n,
                    children: (0, r.jsx)(c.Dio, {
                        size: "md",
                        color: "currentColor",
                    }),
                }),
            ],
        });
    },
    B = (e) => {
        let { quest: t, game: i, sourceQuestContent: o, onGameProfileModalOpen: l, onGameProfileModalClose: u } = e,
            f = (0, b.O5)(),
            _ = (0, a.e7)([d.Z], () => d.Z.getApplication(i.applicationId)),
            h = () => {
                f({
                    questId: t.id,
                    questContent: y.jn.SPONSORED_QUEST_SHEET,
                    questContentCTA: b.jZ.GAME_STORE_OPEN_GAME_LINK,
                    sourceQuestContent: o,
                });
            },
            g = async () => {
                f({
                    questId: t.id,
                    questContent: y.jn.SPONSORED_QUEST_SHEET,
                    questContentCTA: b.jZ.GAME_PROFILE_OPEN,
                    sourceQuestContent: o,
                }),
                    await (0, c.ZDy)(
                        async () => {
                            let { default: e } = await Promise.all([n.e("89311"), n.e("83123")]).then(
                                n.bind(n, 644941),
                            );
                            return (t) =>
                                (0, r.jsx)(
                                    e,
                                    R(
                                        {
                                            applicationId: i.applicationId,
                                            source: p.m1.GameSheet,
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
        return (0, r.jsx)(s.u, {
            text: i.name,
            children: (0, r.jsx)(c.P3F, {
                className: C.gameClickable,
                onClick: g,
                children: (0, r.jsx)("div", {
                    className: C.coverArtContainer,
                    children: (0, r.jsx)(m.C, {
                        game: i,
                        application: _,
                        className: C.coverArt,
                        size: m.Z.SMALL,
                    }),
                }),
            }),
        });
    },
    Z = () =>
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
        applications: o,
        onClose: s,
        sourceQuestContent: l,
        impressionRef: d,
        onGameProfileModalOpen: p,
        onGameProfileModalClose: m,
    } = e;
    (0, f.Z)(o),
        i.useEffect(() => {
            o.length > 1 && u.Z.getDetectableGamesSupplemental(o);
        }, [o]);
    let g = (0, a.e7)([_.Z], () => o.some((e) => _.Z.isFetching(e))),
        b = (0, a.e7)([_.Z], () => o.some((e) => _.Z.didFetchingFail(e))),
        y = (0, a.Wu)([_.Z], () =>
            o
                .map((e) => _.Z.getGame(e))
                .filter((e) => null != e)
                .filter((e) => (0, h.z6)(e.applicationId))
                .slice(0, D),
        ),
        O = i.useMemo(() => {
            let e = y.length;
            return e <= x ? x - e : e === M ? 0 : e <= j ? j - e : k - e;
        }, [y.length]);
    if (
        (i.useEffect(() => {
            b &&
                (E.default.track(S.rMx.QUEST_GAME_SHEET_ERROR, {
                    quest_id: t.id,
                    error_type: I.n.FETCH_FAILED,
                }),
                s(),
                (0, c.ZDy)(async () => {
                    let { default: e } = await n.e("12198").then(n.bind(n, 521760));
                    return (t) => (0, r.jsx)(e, R({}, t));
                }));
        }, [b, t.id, s]),
        g && !b)
    ) {
        let e = Math.min(o.length, D);
        return (0, r.jsxs)("div", {
            className: C.container,
            children: [
                (0, r.jsx)(G, {
                    quest: t,
                    onClose: s,
                }),
                (0, r.jsx)("div", {
                    className: C.gameGrid,
                    children: o.slice(0, e).map((e) => (0, r.jsx)("div", { className: C.placeholderArt }, e)),
                }),
            ],
        });
    }
    return b
        ? null
        : (0, r.jsxs)("div", {
              ref: (e) => {
                  d.current = e;
              },
              className: C.container,
              children: [
                  (0, r.jsx)(G, {
                      quest: t,
                      onClose: s,
                  }),
                  (0, r.jsxs)("div", {
                      className: C.gameGrid,
                      children: [
                          y.map((e) =>
                              (0, r.jsx)(
                                  B,
                                  {
                                      quest: t,
                                      game: e,
                                      sourceQuestContent: l,
                                      onGameProfileModalOpen: p,
                                      onGameProfileModalClose: m,
                                  },
                                  e.applicationId,
                              ),
                          ),
                          Array.from({ length: O }, (e, t) => (0, r.jsx)(Z, {}, "placeholder-".concat(t))),
                      ],
                  }),
              ],
          });
}
function V(e) {
    let {
            targetElementRef: t,
            applications: n,
            children: a,
            onGameSheetOpened: s,
            onGameSheetClosed: l,
            quest: u,
            sourceQuestContent: d,
            impressionRef: f,
        } = e,
        [_, p] = i.useState(!1),
        h = (0, b.O5)(),
        m = i.useRef(null),
        g = (null == t ? void 0 : t.current) != null,
        E = g ? t : m,
        y = g ? "right" : "top",
        O = g ? "bottom" : void 0,
        v = () => {
            null == s || s(),
                h({
                    questId: u.id,
                    questContent: d,
                    questContentCTA: b.jZ.SPONSORED_QUEST_SHEET,
                    sourceQuestContent: d,
                });
        },
        I = () => {
            if (_) return o.F;
            null == l || l();
        },
        T = () => {
            p(!0);
        },
        S = () => {
            p(!1);
        };
    return (0, r.jsx)(c.yRy, {
        targetElementRef: E,
        clickTrap: !0,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, r.jsx)(F, {
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
        spacing: L,
        scrollBehavior: "close",
        ignoreModalClicks: !0,
        children: (e) => a(e, m),
    });
}
let H = function (e) {
    return null == e.quest || e.applications.length <= 1
        ? null
        : (0, r.jsx)(v.A, {
              questOrQuests: e.quest,
              questContent: y.jn.SPONSORED_QUEST_SHEET,
              sourceQuestContent: e.sourceQuestContent,
              children: (t) => (0, r.jsx)(V, w(R({}, e), { impressionRef: t })),
          });
};
