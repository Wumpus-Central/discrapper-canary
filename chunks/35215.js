n.d(t, { Z: () => V }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(442837),
    o = n(930295),
    s = n(780384),
    l = n(481060),
    c = n(224706),
    u = n(812206),
    d = n(835473),
    f = n(669764),
    _ = n(810568),
    p = n(774073),
    h = n(426482),
    m = n(210887),
    g = n(626135),
    E = n(617136),
    b = n(497505),
    y = n(475595),
    O = n(602667),
    v = n(723307),
    I = n(46140),
    T = n(981631),
    S = n(388032),
    A = n(879048);
function C(e, t, n) {
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
function N(e) {
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
                C(e, t, n[t]);
            });
    }
    return e;
}
function R(e, t) {
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
function P(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : R(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let w = 10,
    D = 20,
    L = 4,
    x = 5,
    M = 8,
    j = 10;
function k(e) {
    var t;
    let n = {
            [I.S7.PACKAGE_ACTION_ADVENTURE]: S.t.PYFVdX,
            [I.S7.PACKAGE_RPG_MMO]: S.t.rFQo2N,
            [I.S7.PACKAGE_RACING_SPORTS]: S.t.zDRa6u,
            [I.S7.PACKAGE_SANDBOX_CREATIVE]: S.t.vz9U2d,
            [I.S7.PACKAGE_FAMILY_FRIENDLY]: S.t.IOiAEx,
            [I.S7.PACKAGE_HOLIDAY_SEASON]: S.t.cJPqvL,
            [I.S7.PACKAGE_NEW_YEARS]: S.t.S0w2mp,
        },
        r = e.config.features.find((e) => e in n),
        i = null != (t = null != r ? n[r] : null) ? t : S.t["D+DkEB"];
    return S.intl.string(i);
}
let U = (e) => {
        let { quest: t, onClose: n } = e,
            i = (0, a.e7)([m.Z], () => m.Z.getState().theme),
            o = (0, s.wj)(i) ? T.BRd.DARK : T.BRd.LIGHT;
        return (0, r.jsxs)("div", {
            className: A.headerContainer,
            children: [
                (0, r.jsxs)("div", {
                    className: A.headerContent,
                    children: [
                        (0, r.jsx)("img", {
                            className: A.gameTile,
                            alt: t.config.messages.gameTitle,
                            src: (0, y.fh)(t, y.eC.GAME_TILE, o).url,
                        }),
                        (0, r.jsxs)("div", {
                            className: A.headerTextContainer,
                            children: [
                                (0, r.jsx)(l.Text, {
                                    variant: "text-sm/semibold",
                                    color: "text-primary",
                                    children: k(t),
                                }),
                                (0, r.jsx)(l.Text, {
                                    variant: "text-sm/normal",
                                    color: "text-tertiary",
                                    children: S.intl.string(S.t.VgN1Bg),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, r.jsx)(l.P3F, {
                    className: A.closeButton,
                    "aria-label": S.intl.string(S.t.cpT0Cg),
                    onClick: n,
                    children: (0, r.jsx)(l.Dio, {
                        size: "md",
                        color: "currentColor",
                    }),
                }),
            ],
        });
    },
    G = (e) => {
        let { quest: t, game: i, sourceQuestContent: o, onGameProfileModalOpen: s, onGameProfileModalClose: c } = e,
            d = (0, E.O5)(),
            f = (0, a.e7)([u.Z], () => u.Z.getApplication(i.applicationId)),
            p = () => {
                d({
                    questId: t.id,
                    questContent: b.jn.SPONSORED_QUEST_SHEET,
                    questContentCTA: E.jZ.GAME_STORE_OPEN_GAME_LINK,
                    sourceQuestContent: o,
                });
            },
            m = async () => {
                d({
                    questId: t.id,
                    questContent: b.jn.SPONSORED_QUEST_SHEET,
                    questContentCTA: E.jZ.GAME_PROFILE_OPEN,
                    sourceQuestContent: o,
                }),
                    await (0, l.ZDy)(
                        async () => {
                            let { default: e } = await Promise.all([n.e("89311"), n.e("83123")]).then(
                                n.bind(n, 644941),
                            );
                            return (t) =>
                                (0, r.jsx)(
                                    e,
                                    N(
                                        {
                                            applicationId: i.applicationId,
                                            source: _.m1.GameSheet,
                                            trackExternalAction: p,
                                        },
                                        t,
                                    ),
                                );
                        },
                        { onCloseCallback: c },
                    ),
                    s();
            };
        return (0, r.jsx)(l.ua7, {
            text: i.name,
            children: (e) =>
                (0, r.jsx)(
                    l.P3F,
                    P(N({}, e), {
                        className: A.gameClickable,
                        onClick: m,
                        children: (0, r.jsx)("div", {
                            className: A.coverArtContainer,
                            children: (0, r.jsx)(h.C, {
                                game: i,
                                application: f,
                                className: A.coverArt,
                                size: h.Z.SMALL,
                            }),
                        }),
                    }),
                ),
        });
    },
    B = () =>
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
function Z(e) {
    let {
        quest: t,
        applications: o,
        onClose: s,
        sourceQuestContent: u,
        impressionRef: _,
        onGameProfileModalOpen: h,
        onGameProfileModalClose: m,
    } = e;
    (0, d.Z)(o),
        i.useEffect(() => {
            o.length > 1 && c.Z.getDetectableGamesSupplemental(o);
        }, [o]);
    let E = (0, a.e7)([f.Z], () => o.some((e) => f.Z.isFetching(e))),
        b = (0, a.e7)([f.Z], () => o.some((e) => f.Z.didFetchingFail(e))),
        y = (0, a.Wu)([f.Z], () =>
            o
                .map((e) => f.Z.getGame(e))
                .filter((e) => null != e)
                .filter((e) => (0, p.z6)(e.applicationId))
                .slice(0, w),
        ),
        O = i.useMemo(() => {
            let e = y.length;
            return e <= L ? L - e : e === x ? 0 : e <= M ? M - e : j - e;
        }, [y.length]);
    if (
        (i.useEffect(() => {
            b &&
                (g.default.track(T.rMx.QUEST_GAME_SHEET_ERROR, {
                    quest_id: t.id,
                    error_type: v.n.FETCH_FAILED,
                }),
                s(),
                (0, l.ZDy)(async () => {
                    let { default: e } = await n.e("12198").then(n.bind(n, 521760));
                    return (t) => (0, r.jsx)(e, N({}, t));
                }));
        }, [b, t.id, s]),
        E && !b)
    ) {
        let e = Math.min(o.length, w);
        return (0, r.jsxs)("div", {
            className: A.container,
            children: [
                (0, r.jsx)(U, {
                    quest: t,
                    onClose: s,
                }),
                (0, r.jsx)("div", {
                    className: A.gameGrid,
                    children: o.slice(0, e).map((e) => (0, r.jsx)("div", { className: A.placeholderArt }, e)),
                }),
            ],
        });
    }
    return b
        ? null
        : (0, r.jsxs)("div", {
              ref: (e) => {
                  _.current = e;
              },
              className: A.container,
              children: [
                  (0, r.jsx)(U, {
                      quest: t,
                      onClose: s,
                  }),
                  (0, r.jsxs)("div", {
                      className: A.gameGrid,
                      children: [
                          y.map((e) =>
                              (0, r.jsx)(
                                  G,
                                  {
                                      quest: t,
                                      game: e,
                                      sourceQuestContent: u,
                                      onGameProfileModalOpen: h,
                                      onGameProfileModalClose: m,
                                  },
                                  e.applicationId,
                              ),
                          ),
                          Array.from({ length: O }, (e, t) => (0, r.jsx)(B, {}, "placeholder-".concat(t))),
                      ],
                  }),
              ],
          });
}
function F(e) {
    let {
            targetElementRef: t,
            applications: n,
            children: a,
            onGameSheetOpened: s,
            onGameSheetClosed: c,
            quest: u,
            sourceQuestContent: d,
            impressionRef: f,
        } = e,
        [_, p] = i.useState(!1),
        h = (0, E.O5)(),
        m = i.useRef(null),
        g = (null == t ? void 0 : t.current) != null,
        b = g ? t : m,
        y = g ? "right" : "top",
        O = g ? "bottom" : void 0,
        v = () => {
            null == s || s(),
                h({
                    questId: u.id,
                    questContent: d,
                    questContentCTA: E.jZ.SPONSORED_QUEST_SHEET,
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
    return (0, r.jsx)(l.yRy, {
        targetElementRef: b,
        clickTrap: !0,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, r.jsx)(Z, {
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
        spacing: D,
        scrollBehavior: "close",
        ignoreModalClicks: !0,
        children: (e) => a(e, m),
    });
}
let V = function (e) {
    return null == e.quest || e.applications.length <= 1
        ? null
        : (0, r.jsx)(O.A, {
              questOrQuests: e.quest,
              questContent: b.jn.SPONSORED_QUEST_SHEET,
              sourceQuestContent: e.sourceQuestContent,
              children: (t) => (0, r.jsx)(F, P(N({}, e), { impressionRef: t })),
          });
};
