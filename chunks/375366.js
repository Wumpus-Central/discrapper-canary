n.d(t, { A: () => p });
var i = n(627968),
    l = n(64700),
    a = n(735438),
    s = n.n(a),
    r = n(397927),
    o = n(25911),
    c = n(985018),
    d = n(968432);
function u(e) {
    let { className: t } = e;
    return (0, i.jsxs)("svg", {
        className: t,
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 48 48",
        children: [
            (0, i.jsx)("g", {
                filter: "url(#a)",
                children: (0, i.jsx)("path", {
                    d: "M30.4 8 24 14.4 17.6 8 16 9.6l6.4 6.4-6.4 6.4 1.6 1.6 6.4-6.4 6.4 6.4 1.6-1.6-6.4-6.4L32 9.6 30.4 8Z",
                    fill: "currentColor",
                }),
            }),
            (0, i.jsx)("defs", {
                children: (0, i.jsxs)("filter", {
                    id: "a",
                    x: "0",
                    y: "0",
                    width: "48",
                    height: "48",
                    filterUnits: "userSpaceOnUse",
                    colorInterpolationFilters: "sRGB",
                    children: [
                        (0, i.jsx)("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                        (0, i.jsx)("feColorMatrix", {
                            in: "SourceAlpha",
                            values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                            result: "hardAlpha",
                        }),
                        (0, i.jsx)("feOffset", { dy: "8" }),
                        (0, i.jsx)("feGaussianBlur", { stdDeviation: "8" }),
                        (0, i.jsx)("feColorMatrix", { values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0" }),
                        (0, i.jsx)("feBlend", { in2: "BackgroundImageFix", result: "effect1_dropShadow_605_72103" }),
                        (0, i.jsx)("feBlend", {
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
let h = [
        { x: 0.5, y: 0.05 },
        { x: 0.95, y: 0.2 },
        { x: 1, y: 0.5 },
        { x: 0.95, y: 0.8 },
        { x: 0.5, y: 0.95 },
        { x: 0.05, y: 0.8 },
        { x: 0, y: 0.5 },
        { x: 0.05, y: 0.2 },
    ],
    m = h.length;
function A(e, t, n) {
    let i = e * t;
    return e > 0.5 ? i - n : e < 0.5 ? i : i - n / 2;
}
let p = l.memo(function (e) {
    let {
            wheelWidth: t,
            wheelHeight: n,
            itemWidth: p,
            itemHeight: g,
            showDeadZoneIndicator: f,
            activeItem: _,
            onItemSelect: E,
            onItemAction: C,
            interactive: x = !0,
            onClose: S,
            children: T,
        } = e,
        I = l.useRef(null),
        N = l.useRef([]),
        v = l.useRef(!1),
        y = l.useRef(null),
        [b, R] = l.useState(0),
        [j, M] = l.useState({ x: 0, y: 0 }),
        D = Math.abs(j.x) + Math.abs(j.y) > 0,
        O = l.useMemo(() => s().chunk(T, m), [T]),
        L = l.useCallback(
            (e, t) => {
                null == N.current[b] ? (N.current[b] = []) : (N.current[b][t] = e);
            },
            [b],
        ),
        P = l.useCallback(
            (e, t) => {
                (y.current = t), E(m * e + t);
            },
            [E],
        ),
        w = l.useCallback(() => {
            (y.current = null), E(null);
        }, [E]),
        k = l.useCallback(
            (e) => {
                w(), (v.current = e);
            },
            [w],
        ),
        U = l.useCallback((e, t, n) => {
            let i, l, a;
            if (v.current) return void M({ x: 0, y: 0 });
            let s = { x: e.x - t.x, y: e.y - t.y },
                r = s.x < 0,
                o = s.y < 0,
                c =
                    ((i = Math.abs(s.x)),
                    (l = (180 / Math.PI) * Math.atan2(Math.abs(s.y), i)),
                    {
                        x: Math.max((a = n / 2 - 28.8) * Math.cos((2 * Math.PI * l) / 360), 0),
                        y: Math.max(a * Math.sin((2 * Math.PI * l) / 360), 0),
                    });
            M({
                x: (r ? Math.max(s.x, -c.x) : Math.min(s.x, c.x)) / 2,
                y: (o ? Math.max(s.y, -c.y) : Math.min(s.y, c.y)) / 2,
            });
        }, []),
        G = l.useCallback(
            (e) => {
                null != y.current && (e.preventDefault(), e.stopPropagation(), C?.(m * b + y.current));
            },
            [C, b],
        ),
        F = l.useMemo(
            () =>
                (0, a.throttle)((e) => {
                    if (null == I.current) return;
                    let i = I.current.getBoundingClientRect(),
                        l = { x: i.left + i.width / 2, y: i.top + i.height / 2 },
                        a = { x: e.clientX, y: e.clientY };
                    if ((U(a, l, Math.max(t, n)), v.current)) {
                        null != _ && w();
                        return;
                    }
                    let s = (0, o.wf)(l, a, Math.max(t, n));
                    for (let e = 0; e < N.current[b].length; e++) {
                        let t = N.current[b][e];
                        if (null == t) continue;
                        let n = t.getBoundingClientRect();
                        if ((0, o.lw)(l, s, n)) return void P(b, e);
                    }
                    w();
                }, 16),
            [_, U, w, P, b, n, t],
        ),
        H = l.useCallback(
            (e) => {
                if (!x) return;
                let t = b + (e.deltaY > 0 ? 1 : -1);
                t >= 0 &&
                    t < O.length &&
                    (null != y.current && (O[t].length > y.current ? P(t, y.current) : w()), R(t));
            },
            [x, b, O, P, w],
        ),
        B = l.useMemo(
            () =>
                O[b].map((e, l) => {
                    let a = h[l];
                    if (null == a) throw Error(`Too many items supplied ${T.length} expected max of ${h.length}`);
                    let s = A(a.x, t, p),
                        r = A(a.y, n, g);
                    return (0, i.jsx)(
                        "div",
                        {
                            ref: (e) => L(e, l),
                            className: d.Tj,
                            style: { left: s, top: r, width: p, height: g },
                            children: e,
                        },
                        l,
                    );
                }),
            [O, b, t, p, n, g, T.length, L],
        );
    return (0, i.jsx)(r.DUT, {
        className: d.Pw,
        onMouseMove: F,
        onWheel: H,
        onClick: G,
        children: (0, i.jsxs)("div", {
            ref: I,
            className: d._$,
            style: { width: t, height: n },
            children: [
                (0, i.jsxs)("svg", {
                    className: d.cA,
                    viewBox: "0 0 288 288",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [
                        (0, i.jsxs)("filter", {
                            id: "soundboard-wheel-background-shadow",
                            x: "0",
                            y: "0",
                            width: "288",
                            height: "288",
                            filterUnits: "userSpaceOnUse",
                            colorInterpolationFilters: "sRGB",
                            children: [
                                (0, i.jsx)("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                                (0, i.jsx)("feColorMatrix", {
                                    in: "SourceAlpha",
                                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                    result: "hardAlpha",
                                }),
                                (0, i.jsx)("feOffset", { dy: "8" }),
                                (0, i.jsx)("feGaussianBlur", { stdDeviation: "8" }),
                                (0, i.jsx)("feColorMatrix", { values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0" }),
                                (0, i.jsx)("feBlend", {
                                    in2: "BackgroundImageFix",
                                    result: "effect1_dropShadow_489_60382",
                                }),
                                (0, i.jsx)("feBlend", {
                                    in: "SourceGraphic",
                                    in2: "effect1_dropShadow_489_60382",
                                    result: "shape",
                                }),
                            ],
                        }),
                        (0, i.jsxs)("g", {
                            filter: "url(#soundboard-wheel-background-shadow)",
                            children: [
                                (0, i.jsx)("circle", {
                                    className: d.cA,
                                    cx: "144",
                                    cy: "144",
                                    r: "103.68",
                                    strokeWidth: "40.32",
                                }),
                                f &&
                                    (0, i.jsx)("circle", {
                                        className: d.u1,
                                        onMouseEnter: () => k(!0),
                                        onMouseLeave: () => k(!1),
                                        cx: 144,
                                        cy: 144,
                                        r: 28.8,
                                    }),
                                D && (0, i.jsx)("circle", { className: d.JV, cx: 144 + j.x, cy: 144 + j.y, r: 28.8 }),
                            ],
                        }),
                        f &&
                            (0, i.jsx)("circle", {
                                className: d.u1,
                                onMouseEnter: () => k(!0),
                                onMouseLeave: () => k(!1),
                                cx: 144,
                                cy: 144,
                                r: 28.8,
                                stroke: "none",
                            }),
                    ],
                }),
                (0, i.jsxs)("div", {
                    className: d.gx,
                    children: [
                        f &&
                            (0, i.jsx)(r.DUT, {
                                className: d.$2,
                                onClick: S,
                                children: (0, i.jsx)(u, { className: d.$2 }),
                            }),
                        x && O.length > 1
                            ? (0, i.jsx)("div", { className: d.YB, children: c.intl.string(c.t["Xy+S02"]) })
                            : null,
                    ],
                }),
                B,
            ],
        }),
    });
});
