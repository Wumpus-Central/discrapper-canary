l.d(t, { A: () => y });
var n = l(627968),
    r = l(64700),
    a = l(735438),
    s = l.n(a),
    i = l(397927),
    u = l(25911),
    c = l(985018),
    o = l(740371);
function d(e) {
    let { className: t } = e;
    return (0, n.jsxs)("svg", {
        className: t,
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 48 48",
        children: [
            (0, n.jsx)("g", {
                filter: "url(#a)",
                children: (0, n.jsx)("path", {
                    d: "M30.4 8 24 14.4 17.6 8 16 9.6l6.4 6.4-6.4 6.4 1.6 1.6 6.4-6.4 6.4 6.4 1.6-1.6-6.4-6.4L32 9.6 30.4 8Z",
                    fill: "currentColor",
                }),
            }),
            (0, n.jsx)("defs", {
                children: (0, n.jsxs)("filter", {
                    id: "a",
                    x: "0",
                    y: "0",
                    width: "48",
                    height: "48",
                    filterUnits: "userSpaceOnUse",
                    colorInterpolationFilters: "sRGB",
                    children: [
                        (0, n.jsx)("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                        (0, n.jsx)("feColorMatrix", {
                            in: "SourceAlpha",
                            values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                            result: "hardAlpha",
                        }),
                        (0, n.jsx)("feOffset", { dy: "8" }),
                        (0, n.jsx)("feGaussianBlur", { stdDeviation: "8" }),
                        (0, n.jsx)("feColorMatrix", { values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0" }),
                        (0, n.jsx)("feBlend", { in2: "BackgroundImageFix", result: "effect1_dropShadow_605_72103" }),
                        (0, n.jsx)("feBlend", {
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
    x = h.length;
function f(e, t, l) {
    let n = e * t;
    return e > 0.5 ? n - l : e < 0.5 ? n : n - l / 2;
}
let y = r.memo(function (e) {
    let {
            wheelWidth: t,
            wheelHeight: l,
            itemWidth: y,
            itemHeight: p,
            showDeadZoneIndicator: g,
            activeItem: A,
            onItemSelect: m,
            onItemAction: _,
            interactive: I = !0,
            onClose: v,
            children: E,
        } = e,
        M = r.useRef(null),
        C = r.useRef([]),
        w = r.useRef(!1),
        D = r.useRef(null),
        [N, O] = r.useState(0),
        [T, b] = r.useState({ x: 0, y: 0 }),
        j = Math.abs(T.x) + Math.abs(T.y) > 0,
        S = r.useMemo(() => s().chunk(E, x), [E]),
        k = r.useCallback(
            (e, t) => {
                null == C.current[N] ? (C.current[N] = []) : (C.current[N][t] = e);
            },
            [N],
        ),
        R = r.useCallback(
            (e, t) => {
                (D.current = t), m(x * e + t);
            },
            [m],
        ),
        L = r.useCallback(() => {
            (D.current = null), m(null);
        }, [m]),
        U = r.useCallback(
            (e) => {
                L(), (w.current = e);
            },
            [L],
        ),
        P = r.useCallback((e, t, l) => {
            let n, r, a;
            if (w.current) return void b({ x: 0, y: 0 });
            let s = { x: e.x - t.x, y: e.y - t.y },
                i = s.x < 0,
                u = s.y < 0,
                c =
                    ((n = Math.abs(s.x)),
                    (r = (180 / Math.PI) * Math.atan2(Math.abs(s.y), n)),
                    {
                        x: Math.max((a = l / 2 - 28.8) * Math.cos((2 * Math.PI * r) / 360), 0),
                        y: Math.max(a * Math.sin((2 * Math.PI * r) / 360), 0),
                    });
            b({
                x: (i ? Math.max(s.x, -c.x) : Math.min(s.x, c.x)) / 2,
                y: (u ? Math.max(s.y, -c.y) : Math.min(s.y, c.y)) / 2,
            });
        }, []),
        B = r.useCallback(
            (e) => {
                null != D.current && (e.preventDefault(), e.stopPropagation(), _?.(x * N + D.current));
            },
            [_, N],
        ),
        V = r.useMemo(
            () =>
                (0, a.throttle)((e) => {
                    if (null == M.current) return;
                    let n = M.current.getBoundingClientRect(),
                        r = { x: n.left + n.width / 2, y: n.top + n.height / 2 },
                        a = { x: e.clientX, y: e.clientY };
                    if ((P(a, r, Math.max(t, l)), w.current)) {
                        null != A && L();
                        return;
                    }
                    let s = (0, u.wf)(r, a, Math.max(t, l));
                    for (let e = 0; e < C.current[N].length; e++) {
                        let t = C.current[N][e];
                        if (null == t) continue;
                        let l = t.getBoundingClientRect();
                        if ((0, u.lw)(r, s, l)) return void R(N, e);
                    }
                    L();
                }, 16),
            [A, P, L, R, N, l, t],
        ),
        Y = r.useCallback(
            (e) => {
                if (!I) return;
                let t = N + (e.deltaY > 0 ? 1 : -1);
                t >= 0 &&
                    t < S.length &&
                    (null != D.current && (S[t].length > D.current ? R(t, D.current) : L()), O(t));
            },
            [I, N, S, R, L],
        ),
        F = r.useMemo(
            () =>
                S[N].map((e, r) => {
                    let a = h[r];
                    if (null == a) throw Error(`Too many items supplied ${E.length} expected max of ${h.length}`);
                    let s = f(a.x, t, y),
                        i = f(a.y, l, p);
                    return (0, n.jsx)(
                        "div",
                        {
                            ref: (e) => k(e, r),
                            className: o.Tj,
                            style: { left: s, top: i, width: y, height: p },
                            children: e,
                        },
                        r,
                    );
                }),
            [S, N, t, y, l, p, E.length, k],
        );
    return (0, n.jsx)(i.DUT, {
        className: o.Pw,
        onMouseMove: V,
        onWheel: Y,
        onClick: B,
        children: (0, n.jsxs)("div", {
            ref: M,
            className: o._$,
            style: { width: t, height: l },
            children: [
                (0, n.jsxs)("svg", {
                    className: o.cA,
                    viewBox: "0 0 288 288",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [
                        (0, n.jsxs)("filter", {
                            id: "soundboard-wheel-background-shadow",
                            x: "0",
                            y: "0",
                            width: "288",
                            height: "288",
                            filterUnits: "userSpaceOnUse",
                            colorInterpolationFilters: "sRGB",
                            children: [
                                (0, n.jsx)("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                                (0, n.jsx)("feColorMatrix", {
                                    in: "SourceAlpha",
                                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                    result: "hardAlpha",
                                }),
                                (0, n.jsx)("feOffset", { dy: "8" }),
                                (0, n.jsx)("feGaussianBlur", { stdDeviation: "8" }),
                                (0, n.jsx)("feColorMatrix", { values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0" }),
                                (0, n.jsx)("feBlend", {
                                    in2: "BackgroundImageFix",
                                    result: "effect1_dropShadow_489_60382",
                                }),
                                (0, n.jsx)("feBlend", {
                                    in: "SourceGraphic",
                                    in2: "effect1_dropShadow_489_60382",
                                    result: "shape",
                                }),
                            ],
                        }),
                        (0, n.jsxs)("g", {
                            filter: "url(#soundboard-wheel-background-shadow)",
                            children: [
                                (0, n.jsx)("circle", {
                                    className: o.cA,
                                    cx: "144",
                                    cy: "144",
                                    r: "103.68",
                                    strokeWidth: "40.32",
                                }),
                                g &&
                                    (0, n.jsx)("circle", {
                                        className: o.u1,
                                        onMouseEnter: () => U(!0),
                                        onMouseLeave: () => U(!1),
                                        cx: 144,
                                        cy: 144,
                                        r: 28.8,
                                    }),
                                j && (0, n.jsx)("circle", { className: o.JV, cx: 144 + T.x, cy: 144 + T.y, r: 28.8 }),
                            ],
                        }),
                        g &&
                            (0, n.jsx)("circle", {
                                className: o.u1,
                                onMouseEnter: () => U(!0),
                                onMouseLeave: () => U(!1),
                                cx: 144,
                                cy: 144,
                                r: 28.8,
                                stroke: "none",
                            }),
                    ],
                }),
                (0, n.jsxs)("div", {
                    className: o.gx,
                    children: [
                        g &&
                            (0, n.jsx)(i.DUT, {
                                className: o.$2,
                                onClick: v,
                                children: (0, n.jsx)(d, { className: o.$2 }),
                            }),
                        I && S.length > 1
                            ? (0, n.jsx)("div", { className: o.YB, children: c.intl.string(c.t["Xy+S02"]) })
                            : null,
                    ],
                }),
                F,
            ],
        }),
    });
});
