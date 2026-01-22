n.d(t, {
    A: () => g,
}),
    n(896048),
    n(65821);
var l = n(627968),
    r = n(64700),
    i = n(735438),
    a = n.n(i),
    s = n(397927),
    o = n(25911),
    c = n(985018),
    u = n(968432);

function d(e) {
    let { className: t } = e;
    return (0, l.jsxs)("svg", {
        className: t,
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 48 48",
        children: [
            (0, l.jsx)("g", {
                filter: "url(#a)",
                children: (0, l.jsx)("path", {
                    d: "M30.4 8 24 14.4 17.6 8 16 9.6l6.4 6.4-6.4 6.4 1.6 1.6 6.4-6.4 6.4 6.4 1.6-1.6-6.4-6.4L32 9.6 30.4 8Z",
                    fill: "currentColor",
                }),
            }),
            (0, l.jsx)("defs", {
                children: (0, l.jsxs)("filter", {
                    id: "a",
                    x: "0",
                    y: "0",
                    width: "48",
                    height: "48",
                    filterUnits: "userSpaceOnUse",
                    colorInterpolationFilters: "sRGB",
                    children: [
                        (0, l.jsx)("feFlood", {
                            floodOpacity: "0",
                            result: "BackgroundImageFix",
                        }),
                        (0, l.jsx)("feColorMatrix", {
                            in: "SourceAlpha",
                            values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                            result: "hardAlpha",
                        }),
                        (0, l.jsx)("feOffset", {
                            dy: "8",
                        }),
                        (0, l.jsx)("feGaussianBlur", {
                            stdDeviation: "8",
                        }),
                        (0, l.jsx)("feColorMatrix", {
                            values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0",
                        }),
                        (0, l.jsx)("feBlend", {
                            in2: "BackgroundImageFix",
                            result: "effect1_dropShadow_605_72103",
                        }),
                        (0, l.jsx)("feBlend", {
                            in: "SourceGraphic",
                            in2: "effect1_dropShadow_605_72103",
                            result: "shape",
                        }),
                    ],
                }),
            }),
        ],
    });
}
let f = [
        {
            x: 0.5,
            y: 0.05,
        },
        {
            x: 0.95,
            y: 0.2,
        },
        {
            x: 1,
            y: 0.5,
        },
        {
            x: 0.95,
            y: 0.8,
        },
        {
            x: 0.5,
            y: 0.95,
        },
        {
            x: 0.05,
            y: 0.8,
        },
        {
            x: 0,
            y: 0.5,
        },
        {
            x: 0.05,
            y: 0.2,
        },
    ],
    p = f.length;

function b(e, t, n) {
    let l = e * t;
    return e > 0.5 ? l - n : e < 0.5 ? l : l - n / 2;
}
let g = r.memo(function (e) {
    let {
            wheelWidth: t,
            wheelHeight: n,
            itemWidth: g,
            itemHeight: m,
            showDeadZoneIndicator: h,
            activeItem: A,
            onItemSelect: y,
            onItemAction: _,
            interactive: E = !0,
            onClose: v,
            children: O,
        } = e,
        x = r.useRef(null),
        S = r.useRef([]),
        N = r.useRef(!1),
        C = r.useRef(null),
        [j, T] = r.useState(0),
        [I, w] = r.useState({
            x: 0,
            y: 0,
        }),
        R = Math.abs(I.x) + Math.abs(I.y) > 0,
        P = r.useMemo(() => a().chunk(O, p), [O]),
        D = r.useCallback(
            (e, t) => {
                null == S.current[j] ? (S.current[j] = []) : (S.current[j][t] = e);
            },
            [j],
        ),
        k = r.useCallback(
            (e, t) => {
                (C.current = t), y(p * e + t);
            },
            [y],
        ),
        L = r.useCallback(() => {
            (C.current = null), y(null);
        }, [y]),
        M = r.useCallback(
            (e) => {
                L(), (N.current = e);
            },
            [L],
        ),
        U = r.useCallback((e, t, n) => {
            let l, r, i;
            if (N.current)
                return void w({
                    x: 0,
                    y: 0,
                });
            let a = {
                    x: e.x - t.x,
                    y: e.y - t.y,
                },
                s = a.x < 0,
                o = a.y < 0,
                c =
                    ((l = Math.abs(a.x)),
                    (r = (180 / Math.PI) * Math.atan2(Math.abs(a.y), l)),
                    {
                        x: Math.max((i = n / 2 - 28.8) * Math.cos((2 * Math.PI * r) / 360), 0),
                        y: Math.max(i * Math.sin((2 * Math.PI * r) / 360), 0),
                    });
            w({
                x: (s ? Math.max(a.x, -c.x) : Math.min(a.x, c.x)) / 2,
                y: (o ? Math.max(a.y, -c.y) : Math.min(a.y, c.y)) / 2,
            });
        }, []),
        V = r.useCallback(
            (e) => {
                null != C.current && (e.preventDefault(), e.stopPropagation(), null == _ || _(p * j + C.current));
            },
            [_, j],
        ),
        F = r.useMemo(
            () =>
                (0, i.throttle)((e) => {
                    if (null == x.current) return;
                    let l = x.current.getBoundingClientRect(),
                        r = {
                            x: l.left + l.width / 2,
                            y: l.top + l.height / 2,
                        },
                        i = {
                            x: e.clientX,
                            y: e.clientY,
                        };
                    if ((U(i, r, Math.max(t, n)), N.current)) {
                        null != A && L();
                        return;
                    }
                    let a = (0, o.wf)(r, i, Math.max(t, n));
                    for (let e = 0; e < S.current[j].length; e++) {
                        let t = S.current[j][e];
                        if (null == t) continue;
                        let n = t.getBoundingClientRect();
                        if ((0, o.lw)(r, a, n)) return void k(j, e);
                    }
                    L();
                }, 16),
            [A, U, L, k, j, n, t],
        ),
        G = r.useCallback(
            (e) => {
                if (!E) return;
                let t = j + (e.deltaY > 0 ? 1 : -1);
                t >= 0 &&
                    t < P.length &&
                    (null != C.current && (P[t].length > C.current ? k(t, C.current) : L()), T(t));
            },
            [E, j, P, k, L],
        ),
        H = r.useMemo(
            () =>
                P[j].map((e, r) => {
                    let i = f[r];
                    if (null == i)
                        throw Error("Too many items supplied ".concat(O.length, " expected max of ").concat(f.length));
                    let a = b(i.x, t, g),
                        s = b(i.y, n, m);
                    return (0, l.jsx)(
                        "div",
                        {
                            ref: (e) => D(e, r),
                            className: u.Tj,
                            style: {
                                left: a,
                                top: s,
                                width: g,
                                height: m,
                            },
                            children: e,
                        },
                        r,
                    );
                }),
            [P, j, t, g, n, m, O.length, D],
        );
    return (0, l.jsx)(s.DUT, {
        className: u.Pw,
        onMouseMove: F,
        onWheel: G,
        onClick: V,
        children: (0, l.jsxs)("div", {
            ref: x,
            className: u._$,
            style: {
                width: t,
                height: n,
            },
            children: [
                (0, l.jsxs)("svg", {
                    className: u.cA,
                    viewBox: "0 0 288 288",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [
                        (0, l.jsxs)("filter", {
                            id: "soundboard-wheel-background-shadow",
                            x: "0",
                            y: "0",
                            width: "288",
                            height: "288",
                            filterUnits: "userSpaceOnUse",
                            colorInterpolationFilters: "sRGB",
                            children: [
                                (0, l.jsx)("feFlood", {
                                    floodOpacity: "0",
                                    result: "BackgroundImageFix",
                                }),
                                (0, l.jsx)("feColorMatrix", {
                                    in: "SourceAlpha",
                                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                    result: "hardAlpha",
                                }),
                                (0, l.jsx)("feOffset", {
                                    dy: "8",
                                }),
                                (0, l.jsx)("feGaussianBlur", {
                                    stdDeviation: "8",
                                }),
                                (0, l.jsx)("feColorMatrix", {
                                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0",
                                }),
                                (0, l.jsx)("feBlend", {
                                    in2: "BackgroundImageFix",
                                    result: "effect1_dropShadow_489_60382",
                                }),
                                (0, l.jsx)("feBlend", {
                                    in: "SourceGraphic",
                                    in2: "effect1_dropShadow_489_60382",
                                    result: "shape",
                                }),
                            ],
                        }),
                        (0, l.jsxs)("g", {
                            filter: "url(#soundboard-wheel-background-shadow)",
                            children: [
                                (0, l.jsx)("circle", {
                                    className: u.cA,
                                    cx: "144",
                                    cy: "144",
                                    r: "103.68",
                                    strokeWidth: "40.32",
                                }),
                                h &&
                                    (0, l.jsx)("circle", {
                                        className: u.u1,
                                        onMouseEnter: () => M(!0),
                                        onMouseLeave: () => M(!1),
                                        cx: 144,
                                        cy: 144,
                                        r: 28.8,
                                    }),
                                R &&
                                    (0, l.jsx)("circle", {
                                        className: u.JV,
                                        cx: 144 + I.x,
                                        cy: 144 + I.y,
                                        r: 28.8,
                                    }),
                            ],
                        }),
                        h &&
                            (0, l.jsx)("circle", {
                                className: u.u1,
                                onMouseEnter: () => M(!0),
                                onMouseLeave: () => M(!1),
                                cx: 144,
                                cy: 144,
                                r: 28.8,
                                stroke: "none",
                            }),
                    ],
                }),
                (0, l.jsxs)("div", {
                    className: u.gx,
                    children: [
                        h &&
                            (0, l.jsx)(s.DUT, {
                                className: u.$2,
                                onClick: v,
                                children: (0, l.jsx)(d, {
                                    className: u.$2,
                                }),
                            }),
                        E && P.length > 1
                            ? (0, l.jsx)("div", {
                                  className: u.YB,
                                  children: c.intl.string(c.t["Xy+S02"]),
                              })
                            : null,
                    ],
                }),
                H,
            ],
        }),
    });
});
