n.d(t, { Z: () => M });
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
    p = n(617136),
    h = n(497505),
    m = n(602667),
    g = n(388032),
    E = n(879048),
    b = n(557256);
function y(e, t, n) {
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
function O(e) {
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
                y(e, t, n[t]);
            });
    }
    return e;
}
function v(e, t) {
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
function I(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : v(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let T = 10,
    S = 20,
    A = 4,
    C = 5,
    N = 8,
    R = 10,
    P = (e) => {
        let { gameCount: t, onClose: n } = e;
        return (0, r.jsxs)("div", {
            className: E.headerContainer,
            children: [
                (0, r.jsxs)("div", {
                    className: E.headerContent,
                    children: [
                        (0, r.jsx)(o.Text, {
                            variant: "text-xs/semibold",
                            color: "text-primary",
                            children: g.intl.string(g.t["D+DkEB"]),
                        }),
                        (0, r.jsx)(o.Text, {
                            variant: "text-xs/normal",
                            color: "text-tertiary",
                            children: g.intl.format(g.t.JhwFc3, { count: t }),
                        }),
                    ],
                }),
                (0, r.jsx)(o.P3F, {
                    className: E.closeButton,
                    "aria-label": g.intl.string(g.t.cpT0Cg),
                    onClick: n,
                    children: (0, r.jsx)(o.Dio, {
                        size: "md",
                        color: "currentColor",
                    }),
                }),
            ],
        });
    },
    w = (e) => {
        let { quest: t, game: i, sourceQuestContent: s } = e,
            c = (0, p.O5)(),
            u = (0, a.e7)([l.Z], () => l.Z.getApplication(i.applicationId)),
            f = () => {
                c({
                    questId: t.id,
                    questContent: h.jn.SPONSORED_QUEST_SHEET,
                    questContentCTA: p.jZ.GAME_STORE_OPEN_GAME_LINK,
                    sourceQuestContent: s,
                });
            },
            m = () => {
                c({
                    questId: t.id,
                    questContent: h.jn.SPONSORED_QUEST_SHEET,
                    questContentCTA: p.jZ.GAME_PROFILE_OPEN,
                    sourceQuestContent: s,
                }),
                    (0, o.ZDy)(async () => {
                        let { default: e } = await Promise.all([n.e("89311"), n.e("83123")]).then(n.bind(n, 644941));
                        return (t) =>
                            (0, r.jsx)(
                                e,
                                O(
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
                    I(O({}, e), {
                        className: E.gameClickable,
                        onClick: m,
                        children: (0, r.jsx)(_.C, {
                            game: i,
                            application: u,
                            className: E.coverArt,
                            size: _.Z.SMALL,
                        }),
                    }),
                ),
        });
    },
    D = () =>
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
    x = (e) => {
        let { onClose: t } = e;
        return (0, r.jsxs)("div", {
            className: E.container,
            children: [
                (0, r.jsx)("div", {
                    className: E.closeButtonContainer,
                    children: (0, r.jsx)(o.P3F, {
                        className: E.closeButton,
                        "aria-label": g.intl.string(g.t.cpT0Cg),
                        onClick: t,
                        children: (0, r.jsx)(o.Dio, {
                            size: "md",
                            color: "currentColor",
                        }),
                    }),
                }),
                (0, r.jsxs)("div", {
                    className: E.errorContainer,
                    children: [
                        (0, r.jsx)("img", {
                            alt: "",
                            src: b,
                            className: E.errorImage,
                        }),
                        (0, r.jsx)(o.Text, {
                            variant: "text-md/normal",
                            color: "text-muted",
                            children: g.intl.string(g.t.F8FvU1),
                        }),
                    ],
                }),
            ],
        });
    };
function L(e) {
    let { quest: t, applications: n, onClose: o, sourceQuestContent: l, impressionRef: d } = e;
    (0, c.Z)(n),
        i.useEffect(() => {
            n.length > 1 && s.Z.getDetectableGamesSupplemental(n);
        }, [n]);
    let _ = (0, a.e7)([u.Z], () => n.some((e) => u.Z.isFetching(e))),
        p = (0, a.e7)([u.Z], () => n.some((e) => u.Z.didFetchingFail(e))),
        h = (0, a.Wu)([u.Z], () =>
            n
                .map((e) => u.Z.getGame(e))
                .filter((e) => null != e)
                .filter((e) => (0, f.z6)(e.applicationId))
                .slice(0, T),
        ),
        m = i.useMemo(() => {
            let e = h.length;
            return e <= A ? A - e : e === C ? 0 : e <= N ? N - e : R - e;
        }, [h.length]);
    if (_ && !p) {
        let e = Math.min(n.length, T);
        return (0, r.jsxs)("div", {
            className: E.container,
            children: [
                (0, r.jsx)(P, {
                    gameCount: e,
                    onClose: o,
                }),
                (0, r.jsx)("div", {
                    className: E.gameGrid,
                    children: n.slice(0, e).map((e) => (0, r.jsx)("div", { className: E.placeholderArt }, e)),
                }),
            ],
        });
    }
    return (!_ && 0 === h.length) || p
        ? (0, r.jsx)(x, { onClose: o })
        : (0, r.jsxs)("div", {
              ref: (e) => {
                  d.current = e;
              },
              className: E.container,
              children: [
                  (0, r.jsx)(P, {
                      gameCount: h.length,
                      onClose: o,
                  }),
                  (0, r.jsxs)("div", {
                      className: E.gameGrid,
                      children: [
                          h.map((e) =>
                              (0, r.jsx)(
                                  w,
                                  {
                                      quest: t,
                                      game: e,
                                      sourceQuestContent: l,
                                  },
                                  e.applicationId,
                              ),
                          ),
                          Array.from({ length: m }, (e, t) => (0, r.jsx)(D, {}, "placeholder-".concat(t))),
                      ],
                  }),
              ],
          });
}
function j(e) {
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
        f = (0, p.O5)(),
        _ = i.useRef(null),
        m = (null == t ? void 0 : t.current) != null,
        g = m ? t : _,
        E = m ? "right" : "top",
        b = m ? "bottom" : void 0,
        y = () => {
            null == s || s(),
                f({
                    questId: c.id,
                    questContent: h.jn.SPONSORED_QUEST_SHEET,
                    questContentCTA: p.jZ.SPONSORED_QUEST_SHEET,
                    sourceQuestContent: u,
                });
        };
    return (0, r.jsx)(o.yRy, {
        targetElementRef: g,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, r.jsx)(L, {
                quest: c,
                applications: n,
                onClose: t,
                sourceQuestContent: u,
                impressionRef: d,
            });
        },
        onRequestOpen: y,
        onRequestClose: l,
        position: E,
        align: b,
        spacing: S,
        children: (e) => a(e, _),
    });
}
let M = function (e) {
    return null == e.quest || e.applications.length <= 1
        ? null
        : (0, r.jsx)(m.A, {
              questOrQuests: e.quest,
              questContent: h.jn.SPONSORED_QUEST_SHEET,
              sourceQuestContent: e.sourceQuestContent,
              children: (t) => (0, r.jsx)(j, I(O({}, e), { impressionRef: t })),
          });
};
