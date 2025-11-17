n.r(t),
    n.d(t, {
        Playground: () => M,
        PlaygroundStore: () => w,
    }),
    n(361932),
    n(187205);
var r = n(54381),
    i = n(473749),
    a = n(657707),
    o = n(793030),
    s = n(756715),
    l = n(104140),
    c = n(830447),
    u = n(828214),
    d = n(327496),
    f = n(235874),
    _ = n(417153),
    p = n(28664),
    h = n(159691),
    m = n(972959),
    g = n(665149),
    E = n(606669),
    b = n(53432),
    y = n(74869),
    O = n(572004),
    v = n(736134),
    I = n(98763),
    T = n(561466),
    S = n(231338),
    A = n(388032),
    C = n(409738);
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
function D(e, t) {
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
let w = (0, m.H)(() => ({
    selectedCollection: null,
    selectedStory: null,
}));
function x() {
    let e = (0, b.Z)(),
        t = (0, E.Z)(),
        n = (0, y.Z)();
    return (0, r.jsxs)(c.v, {
        onSelect: S.dG,
        navId: "playground-settings-menu",
        onClose: S.dG,
        "aria-label": "Playground Settings",
        children: [
            (0, r.jsx)(u.sN, {
                id: "appearance",
                label: A.intl.string(A.t["iHH+ky"]),
                children: e.filter((e) => null != e),
            }),
            (0, r.jsx)(u.sN, {
                id: "accessibility",
                label: A.intl.string(A.t.G0neg7),
                children: t.filter((e) => null != e),
            }),
            (0, r.jsx)(u.sN, {
                id: "experiments",
                label: "Experiments",
                children: n.filter((e) => null != e),
            }),
        ],
    });
}
function L() {
    let e = i.useRef(null);
    return (0, r.jsx)(f.y, {
        targetElementRef: e,
        renderPopout: () => (0, r.jsx)(x, {}),
        position: "bottom",
        align: "center",
        animation: f.y.Animation.SCALE,
        onRequestClose: () => {},
        children: (t) =>
            (0, r.jsx)(
                h.hU,
                D(
                    R(
                        {
                            size: "sm",
                            icon: a.ewm,
                            "aria-label": "Settings",
                            variant: "icon-only",
                        },
                        t,
                    ),
                    { buttonRef: e },
                ),
            ),
    });
}
function M(e) {
    var t;
    let { configs: n } = e,
        c = w.useField("selectedCollection"),
        u = w.useField("selectedStory"),
        f = i.useMemo(() => n.flatMap((e) => e.collections), [n]),
        {
            collection: m,
            group: E,
            story: b,
        } = i.useMemo(() => {
            var e;
            let t = null != c ? f.find((e) => e.id === c) : f[0];
            if (null == t)
                return {
                    collection: null,
                    group: null,
                    story: null,
                };
            let n = t.groups.find((e) => e.stories.some((e) => e.id === u)),
                r = null != (e = null == n ? void 0 : n.stories.find((e) => e.id === u)) ? e : null;
            return {
                collection: t,
                group: n,
                story: r,
            };
        }, [c, u, f]),
        y = (e) => {
            w.setState({
                selectedCollection: e,
                selectedStory: null,
            });
        },
        S = (e) => {
            w.setState({ selectedStory: e });
        },
        A = null != (t = null == m ? void 0 : m.name) ? t : "Design System",
        N = null == b ? void 0 : b.name,
        R = () => {
            if (null == m) return;
            let e = null != b ? "dev://playground/".concat(m.id, "/").concat(b.id) : "dev://playground/".concat(m.id);
            (0, O.JG)(e, () =>
                (0, _.CF)({
                    id: "playground-link-copied",
                    message: "Copied playground link",
                    type: T.pC.SUCCESS,
                }),
            );
        };
    return (0, r.jsxs)("div", {
        className: C.root,
        children: [
            (0, r.jsx)("div", {
                className: C.group,
                children: f.map((e) => {
                    var t;
                    return (0, r.jsx)(
                        l.a,
                        {
                            children: (0, r.jsx)(p.u, {
                                position: "right",
                                text: "".concat(e.name, " Design System"),
                                children: (0, r.jsx)(d.L, {
                                    name: e.name,
                                    selected: (null != c ? c : null == (t = f[0]) ? void 0 : t.id) === e.id,
                                    onClick: () => y(e.id),
                                }),
                            }),
                        },
                        e.id,
                    );
                }),
            }),
            (0, r.jsxs)("div", {
                className: C.content,
                children: [
                    (0, r.jsxs)(g.ZP, {
                        className: C.header,
                        children: [
                            null != A ? (0, r.jsx)(g.ZP.Title, { children: A }) : null,
                            null != N
                                ? (0, r.jsxs)(r.Fragment, {
                                      children: [
                                          null != A ? (0, r.jsx)(g.ZP.Caret, { className: C.headerDivider }) : null,
                                          (0, r.jsx)(g.ZP.Title, { children: N }),
                                      ],
                                  })
                                : null,
                            (null == b ? void 0 : b.docs) != null
                                ? (0, r.jsxs)(r.Fragment, {
                                      children: [
                                          (0, r.jsx)(g.ZP.Divider, { className: C.headerDivider }),
                                          (0, r.jsx)(g.ZP.Title, {
                                              children: (0, r.jsx)(s.Anchor, {
                                                  href: b.docs,
                                                  children: "Docs",
                                              }),
                                          }),
                                      ],
                                  })
                                : null,
                            null != m
                                ? (0, r.jsx)(h.hU, {
                                      size: "sm",
                                      "aria-label": "Copy Link",
                                      variant: "icon-only",
                                      icon: a.TIy,
                                      onClick: R,
                                  })
                                : null,
                            (0, r.jsx)("div", {
                                className: C.headerRight,
                                children: (0, r.jsx)(L, {}),
                            }),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: C.page,
                        children: [
                            (0, r.jsx)(o.zJl, {
                                fade: !0,
                                className: C.sidebar,
                                children:
                                    null != m
                                        ? (0, r.jsx)(v.N, {
                                              groups: m.groups,
                                              selectedStory: u,
                                              onStorySelect: S,
                                          })
                                        : null,
                            }),
                            (0, r.jsx)("div", {
                                className: C.content,
                                children:
                                    null != b && null != E
                                        ? (0, r.jsx)(I.b, {
                                              story: b,
                                              groupTitle: E.title,
                                          })
                                        : null,
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
