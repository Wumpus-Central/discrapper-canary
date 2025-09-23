n.d(t, { Z: () => G });
var r = n(951288),
    i = n(647438),
    a = n(442837),
    o = n(481060),
    s = n(224706),
    l = n(812206),
    c = n(835473),
    u = n(669764),
    d = n(810568),
    f = n(774073),
    _ = n(426482),
    p = n(626135),
    h = n(617136),
    m = n(497505),
    g = n(602667),
    E = n(723307),
    b = n(981631),
    y = n(388032),
    O = n(189730),
    v = n(557256);
function I(e, t, n) {
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
function T(e) {
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
                I(e, t, n[t]);
            });
    }
    return e;
}
function S(e, t) {
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
function A(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : S(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let C = 10,
    N = 20,
    R = 4,
    P = 5,
    w = 8,
    D = 10,
    x = (e) => {
        let { gameCount: t, onClose: n } = e;
        return (0, r.jsxs)("div", {
            className: O.headerContainer,
            children: [
                (0, r.jsxs)("div", {
                    className: O.headerContent,
                    children: [
                        (0, r.jsx)(o.Text, {
                            variant: "text-xs/semibold",
                            color: "text-primary",
                            children: y.intl.string(y.t["D+DkEB"]),
                        }),
                        (0, r.jsx)(o.Text, {
                            variant: "text-xs/normal",
                            color: "text-tertiary",
                            children: y.intl.format(y.t.JhwFc3, { count: t }),
                        }),
                    ],
                }),
                (0, r.jsx)(o.P3F, {
                    className: O.closeButton,
                    "aria-label": y.intl.string(y.t.cpT0Cg),
                    onClick: n,
                    children: (0, r.jsx)(o.Dio, {
                        size: "md",
                        color: "currentColor",
                    }),
                }),
            ],
        });
    },
    L = (e) => {
        let { quest: t, game: i, sourceQuestContent: s } = e,
            c = (0, h.O5)(),
            u = (0, a.e7)([l.Z], () => l.Z.getApplication(i.applicationId)),
            f = () => {
                c({
                    questId: t.id,
                    questContent: m.jn.SPONSORED_QUEST_SHEET,
                    questContentCTA: h.jZ.GAME_STORE_OPEN_GAME_LINK,
                    sourceQuestContent: s,
                });
            },
            p = () => {
                c({
                    questId: t.id,
                    questContent: m.jn.SPONSORED_QUEST_SHEET,
                    questContentCTA: h.jZ.GAME_PROFILE_OPEN,
                    sourceQuestContent: s,
                }),
                    (0, o.ZDy)(async () => {
                        let { default: e } = await Promise.all([n.e("89311"), n.e("20074")]).then(n.bind(n, 644941));
                        return (t) =>
                            (0, r.jsx)(
                                e,
                                T(
                                    {
                                        applicationId: i.applicationId,
                                        source: d.m1.GameSheet,
                                        trackExternalAction: f,
                                    },
                                    t,
                                ),
                            );
                    });
            };
        return (0, r.jsx)(o.ua7, {
            text: i.name,
            children: (e) =>
                (0, r.jsx)(
                    o.P3F,
                    A(T({}, e), {
                        className: O.gameClickable,
                        onClick: p,
                        children: (0, r.jsx)(_.C, {
                            game: i,
                            application: u,
                            className: O.coverArt,
                            size: _.Z.SMALL,
                        }),
                    }),
                ),
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
        }),
    M = (e) => {
        let { onClose: t } = e;
        return (0, r.jsxs)("div", {
            className: O.container,
            children: [
                (0, r.jsx)("div", {
                    className: O.closeButtonContainer,
                    children: (0, r.jsx)(o.P3F, {
                        className: O.closeButton,
                        "aria-label": y.intl.string(y.t.cpT0Cg),
                        onClick: t,
                        children: (0, r.jsx)(o.Dio, {
                            size: "md",
                            color: "currentColor",
                        }),
                    }),
                }),
                (0, r.jsxs)("div", {
                    className: O.errorContainer,
                    children: [
                        (0, r.jsx)("img", {
                            alt: "",
                            src: v,
                            className: O.errorImage,
                        }),
                        (0, r.jsx)(o.Text, {
                            variant: "text-md/normal",
                            color: "text-muted",
                            children: y.intl.string(y.t.F8FvU1),
                        }),
                    ],
                }),
            ],
        });
    };
function k(e) {
    let { quest: t, applications: n, onClose: o, sourceQuestContent: l, impressionRef: d } = e;
    (0, c.Z)(n),
        i.useEffect(() => {
            n.length > 1 && s.Z.getDetectableGamesSupplemental(n);
        }, [n]);
    let _ = (0, a.e7)([u.Z], () => n.some((e) => u.Z.isFetching(e))),
        h = (0, a.e7)([u.Z], () => n.some((e) => u.Z.didFetchingFail(e))),
        m = (0, a.Wu)([u.Z], () =>
            n
                .map((e) => u.Z.getGame(e))
                .filter((e) => null != e)
                .filter((e) => (0, f.z6)(e.applicationId))
                .slice(0, C),
        ),
        g = i.useMemo(() => {
            let e = m.length;
            return e <= R ? R - e : e === P ? 0 : e <= w ? w - e : D - e;
        }, [m.length]);
    if (
        (i.useEffect(() => {
            h &&
                p.default.track(b.rMx.QUEST_GAME_SHEET_ERROR, {
                    quest_id: t.id,
                    error_type: E.n.FETCH_FAILED,
                });
        }, [h, t.id]),
        _ && !h)
    ) {
        let e = Math.min(n.length, C);
        return (0, r.jsxs)("div", {
            className: O.container,
            children: [
                (0, r.jsx)(x, {
                    gameCount: e,
                    onClose: o,
                }),
                (0, r.jsx)("div", {
                    className: O.gameGrid,
                    children: n.slice(0, e).map((e) => (0, r.jsx)("div", { className: O.placeholderArt }, e)),
                }),
            ],
        });
    }
    return h
        ? (0, r.jsx)(M, { onClose: o })
        : (0, r.jsxs)("div", {
              ref: (e) => {
                  d.current = e;
              },
              className: O.container,
              children: [
                  (0, r.jsx)(x, {
                      gameCount: m.length,
                      onClose: o,
                  }),
                  (0, r.jsxs)("div", {
                      className: O.gameGrid,
                      children: [
                          m.map((e) =>
                              (0, r.jsx)(
                                  L,
                                  {
                                      quest: t,
                                      game: e,
                                      sourceQuestContent: l,
                                  },
                                  e.applicationId,
                              ),
                          ),
                          Array.from({ length: g }, (e, t) => (0, r.jsx)(j, {}, "placeholder-".concat(t))),
                      ],
                  }),
              ],
          });
}
function U(e) {
    let {
            targetElementRef: t,
            applications: n,
            children: a,
            onGameSheetOpened: s,
            onGameSheetClosed: l,
            quest: c,
            sourceQuestContent: u,
            impressionRef: d,
        } = e,
        f = (0, h.O5)(),
        _ = i.useRef(null),
        p = (null == t ? void 0 : t.current) != null,
        m = p ? t : _,
        g = p ? "right" : "top",
        E = p ? "bottom" : void 0,
        b = () => {
            null == s || s(),
                f({
                    questId: c.id,
                    questContent: u,
                    questContentCTA: h.jZ.SPONSORED_QUEST_SHEET,
                    sourceQuestContent: u,
                });
        };
    return (0, r.jsx)(o.yRy, {
        targetElementRef: m,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, r.jsx)(k, {
                quest: c,
                applications: n,
                onClose: t,
                sourceQuestContent: u,
                impressionRef: d,
            });
        },
        onRequestOpen: b,
        onRequestClose: l,
        position: g,
        align: E,
        spacing: N,
        children: (e) => a(e, _),
    });
}
let G = function (e) {
    return null == e.quest || e.applications.length <= 1
        ? null
        : (0, r.jsx)(g.A, {
              questOrQuests: e.quest,
              questContent: m.jn.SPONSORED_QUEST_SHEET,
              sourceQuestContent: e.sourceQuestContent,
              children: (t) => (0, r.jsx)(U, A(T({}, e), { impressionRef: t })),
          });
};
