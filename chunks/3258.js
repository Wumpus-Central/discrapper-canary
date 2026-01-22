n.r(t),
    n.d(t, {
        Playground: () => j,
        PlaygroundStore: () => D,
    }),
    n(896048),
    n(114821),
    n(339614);
var r = n(627968),
    i = n(64700),
    a = n(934551),
    s = n(158954),
    o = n(349288),
    l = n(862328),
    c = n(861672),
    u = n(477782),
    d = n(67811),
    f = n(265872),
    p = n(691540),
    _ = n(990078),
    h = n(732955),
    m = n(839214),
    g = n(58736),
    E = n(380450),
    b = n(227542),
    y = n(84654),
    O = n(957565),
    A = n(470586),
    v = n(648339),
    S = n(97483),
    I = n(818348),
    T = n(985018),
    C = n(94576);
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
function w(e, t) {
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
            : w(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let D = (0, m.D)(() => ({
    selectedCollection: null,
    selectedStory: null,
    controlsLayout: "right",
}));
function x() {
    let e = (0, b.A)(),
        t = (0, E.A)(),
        n = (0, y.A)(),
        a = D.useField("controlsLayout"),
        s = i.useMemo(
            () =>
                (0, r.jsxs)(
                    u.rX,
                    {
                        label: "Controls",
                        children: [
                            (0, r.jsx)(u.iD, {
                                id: "controls-right",
                                group: "controls-layout",
                                label: "Right Side",
                                action: () => D.setState({ controlsLayout: "right" }),
                                checked: "right" === a,
                            }),
                            (0, r.jsx)(u.iD, {
                                id: "controls-bottom",
                                group: "controls-layout",
                                label: "Bottom",
                                action: () => D.setState({ controlsLayout: "bottom" }),
                                checked: "bottom" === a,
                            }),
                            (0, r.jsx)(u.iD, {
                                id: "controls-hidden",
                                group: "controls-layout",
                                label: "Hidden",
                                action: () => D.setState({ controlsLayout: "hidden" }),
                                checked: "hidden" === a,
                            }),
                        ],
                    },
                    "controls-layout",
                ),
            [a],
        );
    return (0, r.jsxs)(c.W, {
        onSelect: I.tE,
        navId: "playground-settings-menu",
        onClose: I.tE,
        "aria-label": "Playground Settings",
        children: [
            (0, r.jsx)(u.Dr, {
                id: "appearance",
                label: T.intl.string(T.t["iHH+ky"]),
                children: [...e.filter((e) => null != e), s],
            }),
            (0, r.jsx)(u.Dr, {
                id: "accessibility",
                label: T.intl.string(T.t.G0neg7),
                children: t.filter((e) => null != e),
            }),
            (0, r.jsx)(u.Dr, {
                id: "experiments",
                label: "Experiments",
                children: n.filter((e) => null != e),
            }),
        ],
    });
}
function L() {
    let e = i.useRef(null);
    return (0, r.jsx)(f.Y, {
        targetElementRef: e,
        renderPopout: () => (0, r.jsx)(x, {}),
        position: "bottom",
        align: "center",
        animation: f.Y.Animation.SCALE,
        onRequestClose: () => {},
        children: (t) =>
            (0, r.jsx)(
                h.K0,
                P(
                    R(
                        {
                            size: "sm",
                            icon: a.SettingsIcon,
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
function j(e) {
    var t;
    let { configs: n } = e,
        c = D.useField("selectedCollection"),
        u = D.useField("selectedStory"),
        f = D.useField("controlsLayout"),
        m = i.useMemo(() => n.flatMap((e) => e.collections), [n]),
        {
            collection: E,
            group: b,
            story: y,
        } = i.useMemo(() => {
            var e;
            let t = null != c ? m.find((e) => e.id === c) : m[0];
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
        }, [c, u, m]),
        I = (e) => {
            D.setState({
                selectedCollection: e,
                selectedStory: null,
            });
        },
        T = (e) => {
            D.setState({ selectedStory: e });
        },
        N = null != (t = null == E ? void 0 : E.name) ? t : "Design System",
        R = null == y ? void 0 : y.name,
        w = () => {
            if (null == E) return;
            let e = null != y ? "dev://playground/".concat(E.id, "/").concat(y.id) : "dev://playground/".concat(E.id);
            (0, O.C)(e, () =>
                (0, p.P0)({
                    id: "playground-link-copied",
                    message: "Copied playground link",
                    type: S.Ck.SUCCESS,
                }),
            );
        };
    return (0, r.jsxs)("div", {
        className: C.zr,
        children: [
            (0, r.jsx)("div", {
                className: C.Os,
                children: m.map((e) => {
                    var t;
                    return (0, r.jsx)(
                        l.Q,
                        {
                            children: (0, r.jsx)(_.m, {
                                position: "right",
                                text: "".concat(e.name, " Design System"),
                                children: (0, r.jsx)(d.j, {
                                    name: e.name,
                                    selected: (null != c ? c : null == (t = m[0]) ? void 0 : t.id) === e.id,
                                    onClick: () => I(e.id),
                                }),
                            }),
                        },
                        e.id,
                    );
                }),
            }),
            (0, r.jsxs)("div", {
                className: C.Qs,
                children: [
                    (0, r.jsxs)(g.Ay, {
                        className: C.wx,
                        children: [
                            null != N ? (0, r.jsx)(g.Ay.Title, { children: N }) : null,
                            null != R
                                ? (0, r.jsxs)(r.Fragment, {
                                      children: [
                                          null != N ? (0, r.jsx)(g.Ay.Caret, { className: C.zN }) : null,
                                          (0, r.jsx)(g.Ay.Title, { children: R }),
                                      ],
                                  })
                                : null,
                            (null == y ? void 0 : y.docs) != null
                                ? (0, r.jsxs)(r.Fragment, {
                                      children: [
                                          (0, r.jsx)(g.Ay.Divider, { className: C.zN }),
                                          (0, r.jsx)(g.Ay.Title, {
                                              children: (0, r.jsx)(o.Anchor, {
                                                  href: y.docs,
                                                  children: "Docs",
                                              }),
                                          }),
                                      ],
                                  })
                                : null,
                            null != E
                                ? (0, r.jsx)(h.K0, {
                                      size: "sm",
                                      "aria-label": "Copy Link",
                                      variant: "icon-only",
                                      icon: a.CopyIcon,
                                      onClick: w,
                                  })
                                : null,
                            (0, r.jsx)("div", {
                                className: C.IE,
                                children: (0, r.jsx)(L, {}),
                            }),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: C.MY,
                        children: [
                            (0, r.jsx)(s.IpV, {
                                fade: !0,
                                className: C.pz,
                                children:
                                    null != E
                                        ? (0, r.jsx)(A._, {
                                              groups: E.groups,
                                              selectedStory: u,
                                              onStorySelect: T,
                                          })
                                        : null,
                            }),
                            (0, r.jsx)("div", {
                                className: C.Qs,
                                children:
                                    null != y && null != b
                                        ? (0, r.jsx)(v.z, {
                                              story: y,
                                              groupTitle: b.title,
                                              controlsLayout: f,
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
