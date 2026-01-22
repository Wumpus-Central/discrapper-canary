n.d(t, {
    A: () => v,
    X: () => A,
});
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(311907),
    o = n(73939),
    l = n(397927),
    c = n(235986),
    u = n(805466),
    d = n(282413),
    f = n(383501),
    p = n(6155),
    _ = n(919706),
    h = n(598565),
    m = n(985018),
    g = n(319567);
function E(e, t, n) {
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
function b(e) {
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
                E(e, t, n[t]);
            });
    }
    return e;
}
function y(e, t) {
    if (null == e) return {};
    var n,
        r,
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = O(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}
function O(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
function A(e) {
    let { title: t, onJumpToChannel: n, onHide: i, idle: a, preventIdleComponent: o } = e,
        c = (0, s.bG)([f.A], () => f.A.getChannelId()),
        d =
            null != c
                ? (0, r.jsx)(p.A, {
                      voiceChannelId: c,
                      idle: a,
                  })
                : null,
        { enabled: _ } = u.A.useExperiment({ location: "PictureInPicturePlayer" });
    return (0, r.jsxs)(o, {
        className: g.Nc,
        children: [
            (0, r.jsxs)(l.DUT, {
                className: g.qd,
                onClick: n,
                children: [
                    (0, r.jsx)(l.rJJ, {
                        size: "custom",
                        color: "currentColor",
                        "aria-label": m.intl.string(m.t.mSfLs0),
                        className: g.Gv,
                        width: 20,
                        height: 20,
                    }),
                    (0, r.jsx)(l.Heading, {
                        variant: "heading-md/normal",
                        className: g.TK,
                        color: "always-white",
                        children: t,
                    }),
                ],
            }),
            _ && null != i
                ? (0, r.jsx)(h.A, {
                      onClick: i,
                      label: m.intl.string(m.t.BEuDEn),
                  })
                : null,
            d,
        ],
    });
}
function v(e) {
    let {
            children: t,
            idle: n,
            onJumpToChannel: i,
            onHide: s,
            backgroundKey: l,
            onActive: u,
            onForceIdle: f,
            renderBottomLeftControls: p,
            renderBottomRightControls: h,
            screenMessage: m,
            hideControls: E = !1,
            className: O,
            innerClassName: v,
            videoControlsClassName: S,
        } = e,
        I = y(e, [
            "children",
            "idle",
            "onJumpToChannel",
            "onHide",
            "backgroundKey",
            "onActive",
            "onForceIdle",
            "renderBottomLeftControls",
            "renderBottomRightControls",
            "screenMessage",
            "hideControls",
            "className",
            "innerClassName",
            "videoControlsClassName",
        ]);
    return (0, r.jsxs)("div", {
        onMouseMove: u,
        onMouseDown: u,
        onMouseLeave: f,
        className: a()(g.Hu, { [g.N7]: n }, O),
        onDoubleClick: i,
        children: [
            (0, r.jsx)(o.F, {
                children: (0, r.jsx)(
                    d.o,
                    {
                        className: v,
                        children: t,
                    },
                    l,
                ),
            }),
            null != m ? (0, r.jsx)(_.A, b({ size: "small" }, m)) : null,
            !E &&
                (0, r.jsxs)("div", {
                    className: a()(g._v, S, "theme-dark"),
                    children: [
                        (0, r.jsx)("div", {
                            className: g.K1,
                            children: (0, r.jsx)(
                                A,
                                b(
                                    {
                                        idle: n,
                                        onJumpToChannel: i,
                                        onHide: s,
                                    },
                                    I,
                                ),
                            ),
                        }),
                        (0, r.jsxs)("div", {
                            className: g.q6,
                            children: [
                                (0, r.jsx)(c.A, {
                                    grow: 0,
                                    shrink: 1,
                                    basis: "50%",
                                    align: c.A.Align.CENTER,
                                    className: g.Px,
                                    children: null == p ? void 0 : p(),
                                }),
                                (0, r.jsx)(c.A, {
                                    grow: 0,
                                    shrink: 1,
                                    justify: c.A.Justify.END,
                                    basis: "50%",
                                    align: c.A.Align.CENTER,
                                    children: null == h ? void 0 : h(),
                                }),
                            ],
                        }),
                    ],
                }),
        ],
    });
}
