n.d(t, { Z: () => W }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(442837),
    o = n(930295),
    s = n(28664),
    l = n(780384),
    c = n(481060),
    u = n(224706),
    d = n(607070),
    f = n(812206),
    p = n(835473),
    _ = n(669764),
    m = n(810568),
    h = n(774073),
    g = n(426482),
    E = n(210887),
    b = n(626135),
    y = n(617136),
    O = n(49436),
    v = n(475595),
    S = n(602667),
    I = n(723307),
    T = n(324805),
    C = n(981631),
    A = n(388032),
    N = n(879048);
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
                P(e, t, n[t]);
            });
    }
    return e;
}
function D(e, t) {
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
            : D(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let x = 10,
    L = 20,
    j = 15,
    M = 4,
    k = 5,
    U = 8,
    G = 10;
function Z(e) {
    var t;
    let n = {
            [T.S7.PACKAGE_ACTION_ADVENTURE]: A.t.PYFVdf,
            [T.S7.PACKAGE_RPG_MMO]: A.t.rFQo2F,
            [T.S7.PACKAGE_RACING_SPORTS]: A.t.zDRa6g,
            [T.S7.PACKAGE_SANDBOX_CREATIVE]: A.t.vz9U2Q,
            [T.S7.PACKAGE_FAMILY_FRIENDLY]: A.t.IOiAE0,
            [T.S7.PACKAGE_HOLIDAY_SEASON]: A.t.cJPqvD,
            [T.S7.PACKAGE_NEW_YEARS]: A.t.S0w2mv,
        },
        r = e.config.features.find((e) => e in n),
        i = null != (t = null != r ? n[r] : null) ? t : A.t["D+DkEH"];
    return A.intl.string(i);
}
let B = (e) => {
        let { quest: t, onClose: n } = e,
            i = (0, a.e7)([E.Z], () => E.Z.getState().theme),
            o = (0, l.wj)(i) ? C.BRd.DARK : C.BRd.LIGHT;
        return (0, r.jsxs)("div", {
            className: N.headerContainer,
            children: [
                (0, r.jsxs)("div", {
                    className: N.headerContent,
                    children: [
                        (0, r.jsx)("img", {
                            className: N.gameTile,
                            alt: t.config.messages.gameTitle,
                            src: (0, v.fh)(t, v.eC.GAME_TILE, o).url,
                        }),
                        (0, r.jsxs)("div", {
                            className: N.headerTextContainer,
                            children: [
                                (0, r.jsx)(c.Text, {
                                    variant: "text-sm/semibold",
                                    color: "text-strong",
                                    children: Z(t),
                                }),
                                (0, r.jsx)(c.Text, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children: A.intl.string(A.t.VgN1Bn),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, r.jsx)(c.P3F, {
                    className: N.closeButton,
                    "aria-label": A.intl.string(A.t.cpT0Cq),
                    onClick: n,
                    children: (0, r.jsx)(c.Dio, {
                        size: "md",
                        color: "currentColor",
                    }),
                }),
            ],
        });
    },
    F = (e) => {
        let { quest: t, game: o, sourceQuestContent: l, onGameProfileModalOpen: u, onGameProfileModalClose: p } = e,
            _ = (0, y.O5)(),
            h = (0, a.e7)([f.Z], () => f.Z.getApplication(o.applicationId)),
            E = (0, a.e7)([d.Z], () => d.Z.useReducedMotion),
            b = i.useRef(null),
            v = () => {
                _({
                    questId: t.id,
                    questContent: O.jn.SPONSORED_QUEST_SHEET,
                    questContentCTA: y.jZ.GAME_STORE_OPEN_GAME_LINK,
                    sourceQuestContent: l,
                });
            },
            S = async () => {
                _({
                    questId: t.id,
                    questContent: O.jn.SPONSORED_QUEST_SHEET,
                    questContentCTA: y.jZ.GAME_PROFILE_OPEN,
                    sourceQuestContent: l,
                }),
                    await (0, c.ZDy)(
                        async () => {
                            let { default: e } = await n.e("89311").then(n.bind(n, 644941));
                            return (t) =>
                                (0, r.jsx)(
                                    e,
                                    R(
                                        {
                                            applicationId: o.applicationId,
                                            source: m.m1.GameSheet,
                                            trackExternalAction: v,
                                        },
                                        t,
                                    ),
                                );
                        },
                        { onCloseCallback: p },
                    ),
                    u();
            },
            I = i.useCallback(
                (e) => {
                    if (null == b.current || E) return;
                    let t = b.current.getBoundingClientRect(),
                        n = e.clientX - t.left,
                        r = e.clientY - t.top,
                        i = t.width / 2,
                        a = t.height / 2,
                        o = -(((r - a) / a) * j),
                        s = ((n - i) / i) * j;
                    b.current.style.transform = "rotateX(".concat(o, "deg) rotateY(").concat(s, "deg)");
                },
                [E],
            ),
            T = i.useCallback(() => {
                null == b.current || E || (b.current.style.transform = "rotateX(0deg) rotateY(0deg)");
            }, [E]);
        return (0, r.jsx)(s.u, {
            text: o.name,
            children: (0, r.jsx)(c.P3F, {
                className: N.gameClickable,
                onClick: S,
                onMouseMove: I,
                onMouseLeave: T,
                children: (0, r.jsx)("div", {
                    ref: b,
                    className: N.coverArtContainer,
                    children: (0, r.jsx)(g.C, {
                        game: o,
                        application: h,
                        className: N.coverArt,
                        size: g.Z.SMALL,
                    }),
                }),
            }),
        });
    },
    V = () =>
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
        applications: o,
        onClose: s,
        sourceQuestContent: l,
        impressionRef: d,
        onGameProfileModalOpen: f,
        onGameProfileModalClose: m,
    } = e;
    (0, p.Z)(o),
        i.useEffect(() => {
            o.length > 1 && u.Z.getDetectableGamesSupplemental(o);
        }, [o]);
    let g = (0, a.e7)([_.Z], () => o.some((e) => _.Z.isFetching(e))),
        E = (0, a.e7)([_.Z], () => o.some((e) => _.Z.didFetchingFail(e))),
        y = (0, a.Wu)([_.Z], () =>
            o
                .map((e) => _.Z.getGame(e))
                .filter((e) => null != e)
                .filter((e) => (0, h.z6)(e.applicationId))
                .slice(0, x),
        ),
        O = i.useMemo(() => {
            let e = y.length;
            return e <= M ? M - e : e === k ? 0 : e <= U ? U - e : G - e;
        }, [y.length]);
    if (
        (i.useEffect(() => {
            E &&
                (b.default.track(C.rMx.QUEST_GAME_SHEET_ERROR, {
                    quest_id: t.id,
                    error_type: I.n.FETCH_FAILED,
                }),
                s(),
                (0, c.ZDy)(async () => {
                    let { default: e } = await n.e("12198").then(n.bind(n, 521760));
                    return (t) => (0, r.jsx)(e, R({}, t));
                }));
        }, [E, t.id, s]),
        g && !E)
    ) {
        let e = Math.min(o.length, x);
        return (0, r.jsxs)("div", {
            className: N.container,
            children: [
                (0, r.jsx)(B, {
                    quest: t,
                    onClose: s,
                }),
                (0, r.jsx)("div", {
                    className: N.gameGrid,
                    children: o.slice(0, e).map((e) => (0, r.jsx)("div", { className: N.placeholderArt }, e)),
                }),
            ],
        });
    }
    return E
        ? null
        : (0, r.jsxs)("div", {
              ref: (e) => {
                  d.current = e;
              },
              className: N.container,
              children: [
                  (0, r.jsx)(B, {
                      quest: t,
                      onClose: s,
                  }),
                  (0, r.jsxs)("div", {
                      className: N.gameGrid,
                      children: [
                          y.map((e) =>
                              (0, r.jsx)(
                                  F,
                                  {
                                      quest: t,
                                      game: e,
                                      sourceQuestContent: l,
                                      onGameProfileModalOpen: f,
                                      onGameProfileModalClose: m,
                                  },
                                  e.applicationId,
                              ),
                          ),
                          Array.from({ length: O }, (e, t) => (0, r.jsx)(V, {}, "placeholder-".concat(t))),
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
            onGameSheetOpened: s,
            onGameSheetClosed: l,
            quest: u,
            sourceQuestContent: d,
            impressionRef: f,
        } = e,
        [p, _] = i.useState(!1),
        m = (0, y.O5)(),
        h = i.useRef(null),
        g = (null == t ? void 0 : t.current) != null,
        E = g ? t : h,
        b = g ? "right" : "top",
        O = g ? "bottom" : void 0,
        v = () => {
            null == s || s(),
                m({
                    questId: u.id,
                    questContent: d,
                    questContentCTA: y.jZ.SPONSORED_QUEST_SHEET,
                    sourceQuestContent: d,
                });
        },
        S = () => {
            if (p) return o.F;
            null == l || l();
        },
        I = () => {
            _(!0);
        },
        T = () => {
            _(!1);
        };
    return (0, r.jsx)(c.yRy, {
        targetElementRef: E,
        clickTrap: !0,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, r.jsx)(H, {
                quest: u,
                applications: n,
                onClose: t,
                sourceQuestContent: d,
                impressionRef: f,
                onGameProfileModalOpen: I,
                onGameProfileModalClose: T,
            });
        },
        onRequestOpen: v,
        onRequestClose: S,
        position: b,
        align: O,
        spacing: L,
        scrollBehavior: "close",
        ignoreModalClicks: !0,
        children: (e) => a(e, h),
    });
}
let W = function (e) {
    return null == e.quest || e.applications.length <= 1
        ? null
        : (0, r.jsx)(S.A, {
              questOrQuests: e.quest,
              questContent: O.jn.SPONSORED_QUEST_SHEET,
              sourceQuestContent: e.sourceQuestContent,
              children: (t) => (0, r.jsx)(Y, w(R({}, e), { impressionRef: t })),
          });
};
