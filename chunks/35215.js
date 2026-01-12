n.d(t, { Z: () => z }), n(388685);
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
    b = n(77498),
    y = n(626135),
    O = n(768581),
    v = n(617136),
    S = n(49436),
    I = n(475595),
    T = n(602667),
    C = n(723307),
    A = n(324805),
    N = n(981631),
    P = n(388032),
    R = n(578362);
function w(e, t, n) {
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
                w(e, t, n[t]);
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
    Z = 8,
    F = 10;
function B(e) {
    var t;
    let n = {
            [A.S7.PACKAGE_ACTION_ADVENTURE]: P.t.PYFVdf,
            [A.S7.PACKAGE_RPG_MMO]: P.t.rFQo2F,
            [A.S7.PACKAGE_RACING_SPORTS]: P.t.zDRa6g,
            [A.S7.PACKAGE_SANDBOX_CREATIVE]: P.t.vz9U2Q,
            [A.S7.PACKAGE_FAMILY_FRIENDLY]: P.t.IOiAE0,
            [A.S7.PACKAGE_HOLIDAY_SEASON]: P.t.cJPqvD,
            [A.S7.PACKAGE_NEW_YEARS]: P.t.S0w2mv,
        },
        r = e.config.features.find((e) => e in n),
        i = null != (t = null != r ? n[r] : null) ? t : P.t["D+DkEH"];
    return P.intl.string(i);
}
let V = (e) => {
        let { quest: t, onClose: n } = e,
            i = (0, a.e7)([E.Z], () => E.Z.getState().theme),
            o = (0, l.wj)(i) ? N.BRd.DARK : N.BRd.LIGHT;
        return (0, r.jsxs)("div", {
            className: R.headerContainer,
            children: [
                (0, r.jsxs)("div", {
                    className: R.headerContent,
                    children: [
                        (0, r.jsx)("img", {
                            className: R.gameTile,
                            alt: t.config.messages.gameTitle,
                            src: (0, I.fh)(t, I.eC.GAME_TILE, o).url,
                        }),
                        (0, r.jsxs)("div", {
                            className: R.headerTextContainer,
                            children: [
                                (0, r.jsx)(c.Text, {
                                    variant: "text-sm/semibold",
                                    color: "text-strong",
                                    children: B(t),
                                }),
                                (0, r.jsx)(c.Text, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children: P.intl.string(P.t.VgN1Bn),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, r.jsx)(c.P3F, {
                    className: R.closeButton,
                    "aria-label": P.intl.string(P.t.cpT0Cq),
                    onClick: n,
                    children: (0, r.jsx)(c.Dio, {
                        size: "md",
                        color: "currentColor",
                    }),
                }),
            ],
        });
    },
    H = (e) => {
        let { quest: t, game: o, sourceQuestContent: l, onGameProfileModalOpen: u, onGameProfileModalClose: p } = e,
            _ = (0, v.O5)(),
            h = (0, a.e7)([f.Z], () => f.Z.getApplication(o.applicationId)),
            E = (0, a.e7)([d.Z], () => d.Z.useReducedMotion),
            b = i.useRef(null),
            y = null != o.supplementalData,
            O = () => {
                _({
                    questId: t.id,
                    questContent: S.jn.SPONSORED_QUEST_SHEET,
                    questContentCTA: v.jZ.GAME_STORE_OPEN_GAME_LINK,
                    sourceQuestContent: l,
                });
            },
            I = async () => {
                y &&
                    (_({
                        questId: t.id,
                        questContent: S.jn.SPONSORED_QUEST_SHEET,
                        questContentCTA: v.jZ.GAME_PROFILE_OPEN,
                        sourceQuestContent: l,
                    }),
                    await (0, c.ZDy)(
                        async () => {
                            let { default: e } = await n.e("89311").then(n.bind(n, 644941));
                            return (t) =>
                                (0, r.jsx)(
                                    e,
                                    D(
                                        {
                                            applicationId: o.applicationId,
                                            source: m.m1.GameSheet,
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
            T = i.useCallback(
                (e) => {
                    if (null == b.current || E) return;
                    let t = b.current.getBoundingClientRect(),
                        n = e.clientX - t.left,
                        r = e.clientY - t.top,
                        i = t.width / 2,
                        a = t.height / 2,
                        o = -(((r - a) / a) * k),
                        s = ((n - i) / i) * k;
                    b.current.style.transform = "rotateX(".concat(o, "deg) rotateY(").concat(s, "deg)");
                },
                [E],
            ),
            C = i.useCallback(() => {
                null == b.current || E || (b.current.style.transform = "rotateX(0deg) rotateY(0deg)");
            }, [E]),
            A = () =>
                null != o.supplementalData
                    ? (0, r.jsx)(g.C, {
                          game: o.supplementalData,
                          application: h,
                          className: R.coverArt,
                          size: g.Z.SMALL,
                      })
                    : null != o.fallbackCoverImageUrl
                      ? (0, r.jsx)("img", {
                            src: o.fallbackCoverImageUrl,
                            alt: o.name,
                            className: R.coverArt,
                        })
                      : null;
        return (0, r.jsx)(s.u, {
            text: o.name,
            children: (0, r.jsx)(c.P3F, {
                className: R.gameClickable,
                onClick: I,
                onMouseMove: T,
                onMouseLeave: C,
                children: (0, r.jsx)("div", {
                    ref: b,
                    className: R.coverArtContainer,
                    children: A(),
                }),
            }),
        });
    },
    Y = () =>
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
function W(e) {
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
        v = (0, a.Wu)([_.Z], () =>
            o
                .map((e) => _.Z.getGame(e))
                .filter((e) => null != e)
                .filter((e) => (0, h.z6)(e.applicationId))
                .slice(0, j),
        ),
        S = (0, a.e7)([b.Z, _.Z], () => {
            let e = new Set(v.map((e) => e.applicationId));
            return o
                .filter((t) => !e.has(t))
                .filter((e) => null == _.Z.getGame(e))
                .map((e) => {
                    let t = b.Z.getDetectableGame(e);
                    if ((null == t ? void 0 : t.cover_image_hash) == null) return null;
                    let n = O.ZP.getApplicationIconURL({
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
        I = i.useMemo(
            () =>
                [
                    ...v.map((e) => ({
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
                ].slice(0, j),
            [v, S],
        ),
        T = i.useMemo(() => {
            let e = I.length;
            return e <= U ? U - e : e === G ? 0 : e <= Z ? Z - e : F - e;
        }, [I.length]),
        A = !g && 0 === I.length,
        P = E || A;
    if (
        (i.useEffect(() => {
            if (P) {
                let e = E ? C.n.FETCH_FAILED : C.n.NO_GAMES_AVAILABLE;
                y.default.track(N.rMx.QUEST_GAME_SHEET_ERROR, {
                    quest_id: t.id,
                    error_type: e,
                }),
                    s(),
                    (0, c.ZDy)(async () => {
                        let { default: e } = await n.e("12198").then(n.bind(n, 521760));
                        return (t) => (0, r.jsx)(e, D({}, t));
                    });
            }
        }, [P, E, t.id, s]),
        g && !P)
    ) {
        let e = Math.min(o.length, j);
        return (0, r.jsxs)("div", {
            className: R.container,
            children: [
                (0, r.jsx)(V, {
                    quest: t,
                    onClose: s,
                }),
                (0, r.jsx)("div", {
                    className: R.gameGrid,
                    children: o.slice(0, e).map((e) => (0, r.jsx)("div", { className: R.placeholderArt }, e)),
                }),
            ],
        });
    }
    return P
        ? null
        : (0, r.jsxs)("div", {
              ref: (e) => {
                  d.current = e;
              },
              className: R.container,
              children: [
                  (0, r.jsx)(V, {
                      quest: t,
                      onClose: s,
                  }),
                  (0, r.jsxs)("div", {
                      className: R.gameGrid,
                      children: [
                          I.map((e) =>
                              (0, r.jsx)(
                                  H,
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
                          Array.from({ length: T }, (e, t) => (0, r.jsx)(Y, {}, "placeholder-".concat(t))),
                      ],
                  }),
              ],
          });
}
function K(e) {
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
        m = (0, v.O5)(),
        h = i.useRef(null),
        g = (null == t ? void 0 : t.current) != null,
        E = g ? t : h,
        b = g ? "right" : "top",
        y = g ? "bottom" : void 0,
        O = () => {
            null == s || s(),
                m({
                    questId: u.id,
                    questContent: d,
                    questContentCTA: v.jZ.SPONSORED_QUEST_SHEET,
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
            return (0, r.jsx)(W, {
                quest: u,
                applications: n,
                onClose: t,
                sourceQuestContent: d,
                impressionRef: f,
                onGameProfileModalOpen: I,
                onGameProfileModalClose: T,
            });
        },
        onRequestOpen: O,
        onRequestClose: S,
        position: b,
        align: y,
        spacing: M,
        scrollBehavior: "close",
        ignoreModalClicks: !0,
        children: (e) => a(e, h),
    });
}
let z = function (e) {
    return null == e.quest || e.applications.length <= 1
        ? null
        : (0, r.jsx)(T.A, {
              questOrQuests: e.quest,
              questContent: S.jn.SPONSORED_QUEST_SHEET,
              sourceQuestContent: e.sourceQuestContent,
              children: (t) => (0, r.jsx)(K, L(D({}, e), { impressionRef: t })),
          });
};
