"use strict";
n.d(t, { A: () => M }), n(321073);
var i = n(627968),
    r = n(64700),
    a = n(562708),
    s = n(17928),
    l = n(793574),
    o = n(688810),
    d = n(139286),
    c = n(594061),
    u = n(763827),
    _ = n(935208),
    E = n(796774),
    A = n(209932),
    h = n(813564),
    I = n(933204),
    f = n(805143),
    p = n(435558),
    T = n.n(p),
    m = n(939249);
function g(e, t, n) {
    return (n.y - e.y) * (t.x - e.x) > (t.y - e.y) * (n.x - e.x);
}
function S(e, t, n, i) {
    return g(e, n, i) !== g(t, n, i) && g(e, t, n) !== g(e, t, i);
}
var N = n(375708),
    C = n(740371);
function R(e) {
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
let O = [
        { x: 0.5, y: 0.05 },
        { x: 0.95, y: 0.2 },
        { x: 1, y: 0.5 },
        { x: 0.95, y: 0.8 },
        { x: 0.5, y: 0.95 },
        { x: 0.05, y: 0.8 },
        { x: 0, y: 0.5 },
        { x: 0.05, y: 0.2 },
    ],
    L = O.length;
function y(e, t, n) {
    let i = e * t;
    return e > 0.5 ? i - n : e < 0.5 ? i : i - n / 2;
}
let D = r.memo(function (e) {
    let {
            wheelWidth: t,
            wheelHeight: n,
            itemWidth: a,
            itemHeight: s,
            showDeadZoneIndicator: l,
            activeItem: o,
            onItemSelect: d,
            onItemAction: c,
            interactive: u = !0,
            onClose: _,
            children: E,
        } = e,
        A = r.useRef(null),
        h = r.useRef([]),
        I = r.useRef(!1),
        f = r.useRef(null),
        [g, D] = r.useState(0),
        [v, b] = r.useState({ x: 0, y: 0 }),
        M = Math.abs(v.x) + Math.abs(v.y) > 0,
        P = r.useMemo(() => T().chunk(E, L), [E]),
        U = r.useCallback(
            (e, t) => {
                null == h.current[g] ? (h.current[g] = []) : (h.current[g][t] = e);
            },
            [g],
        ),
        w = r.useCallback(
            (e, t) => {
                (f.current = t), d(L * e + t);
            },
            [d],
        ),
        G = r.useCallback(() => {
            (f.current = null), d(null);
        }, [d]),
        x = r.useCallback(
            (e) => {
                G(), (I.current = e);
            },
            [G],
        ),
        k = r.useCallback((e, t, n) => {
            let i, r, a;
            if (I.current) return void b({ x: 0, y: 0 });
            let s = { x: e.x - t.x, y: e.y - t.y },
                l = s.x < 0,
                o = s.y < 0,
                d =
                    ((i = Math.abs(s.x)),
                    (r = (180 / Math.PI) * Math.atan2(Math.abs(s.y), i)),
                    {
                        x: Math.max((a = n / 2 - 28.8) * Math.cos((2 * Math.PI * r) / 360), 0),
                        y: Math.max(a * Math.sin((2 * Math.PI * r) / 360), 0),
                    });
            b({
                x: (l ? Math.max(s.x, -d.x) : Math.min(s.x, d.x)) / 2,
                y: (o ? Math.max(s.y, -d.y) : Math.min(s.y, d.y)) / 2,
            });
        }, []),
        F = r.useCallback(
            (e) => {
                null != f.current && (e.preventDefault(), e.stopPropagation(), c?.(L * g + f.current));
            },
            [c, g],
        ),
        V = r.useMemo(
            () =>
                (0, p.throttle)((e) => {
                    var i;
                    let r;
                    if (null == A.current) return;
                    let a = A.current.getBoundingClientRect(),
                        s = { x: a.left + a.width / 2, y: a.top + a.height / 2 },
                        l = { x: e.clientX, y: e.clientY };
                    if ((k(l, s, Math.max(t, n)), I.current)) {
                        null != o && G();
                        return;
                    }
                    let d =
                        ((i = Math.max(t, n)),
                        (r = Math.sqrt(Math.pow(s.x - l.x, 2) + Math.pow(s.y - l.y, 2))),
                        { x: l.x + ((l.x - s.x) / r) * i, y: l.y + ((l.y - s.y) / r) * i });
                    for (let e = 0; e < h.current[g].length; e++) {
                        let t = h.current[g][e];
                        if (
                            null != t &&
                            (function (e, t, n) {
                                let i = { x: n.x, y: n.y },
                                    r = { x: n.x + n.width, y: n.y },
                                    a = { x: n.x, y: n.y + n.height },
                                    s = { x: n.x + n.width, y: n.y + n.height };
                                return S(e, t, i, r) || S(e, t, r, s) || S(e, t, s, a) || S(e, t, a, i);
                            })(s, d, t.getBoundingClientRect())
                        )
                            return void w(g, e);
                    }
                    G();
                }, 16),
            [o, k, G, w, g, n, t],
        ),
        B = r.useCallback(
            (e) => {
                if (!u) return;
                let t = g + (e.deltaY > 0 ? 1 : -1);
                t >= 0 &&
                    t < P.length &&
                    (null != f.current && (P[t].length > f.current ? w(t, f.current) : G()), D(t));
            },
            [u, g, P, w, G],
        ),
        H = r.useMemo(
            () =>
                P[g].map((e, r) => {
                    let l = O[r];
                    if (null == l) throw Error(`Too many items supplied ${E.length} expected max of ${O.length}`);
                    let o = y(l.x, t, a),
                        d = y(l.y, n, s);
                    return (0, i.jsx)(
                        "div",
                        {
                            ref: (e) => U(e, r),
                            className: C.Tj,
                            style: { left: o, top: d, width: a, height: s },
                            children: e,
                        },
                        r,
                    );
                }),
            [P, g, t, a, n, s, E.length, U],
        );
    return (0, i.jsx)(m.D, {
        className: C.Pw,
        onMouseMove: V,
        onWheel: B,
        onClick: F,
        children: (0, i.jsxs)("div", {
            ref: A,
            className: C._$,
            style: { width: t, height: n },
            children: [
                (0, i.jsxs)("svg", {
                    className: C.cA,
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
                                    className: C.cA,
                                    cx: "144",
                                    cy: "144",
                                    r: "103.68",
                                    strokeWidth: "40.32",
                                }),
                                l &&
                                    (0, i.jsx)("circle", {
                                        className: C.u1,
                                        onMouseEnter: () => x(!0),
                                        onMouseLeave: () => x(!1),
                                        cx: 144,
                                        cy: 144,
                                        r: 28.8,
                                    }),
                                M && (0, i.jsx)("circle", { className: C.JV, cx: 144 + v.x, cy: 144 + v.y, r: 28.8 }),
                            ],
                        }),
                        l &&
                            (0, i.jsx)("circle", {
                                className: C.u1,
                                onMouseEnter: () => x(!0),
                                onMouseLeave: () => x(!1),
                                cx: 144,
                                cy: 144,
                                r: 28.8,
                                stroke: "none",
                            }),
                    ],
                }),
                (0, i.jsxs)("div", {
                    className: C.gx,
                    children: [
                        l &&
                            (0, i.jsx)(m.D, {
                                className: C.$2,
                                onClick: _,
                                children: (0, i.jsx)(R, { className: C.$2 }),
                            }),
                        u && P.length > 1
                            ? (0, i.jsx)("div", { className: C.YB, children: N.intl.string(N.t["Xy+S02"]) })
                            : null,
                    ],
                }),
                H,
            ],
        }),
    });
});
var v = n(805945);
n(980504);
var b = n(1986);
function M(e) {
    let {
            guildId: t,
            channel: n,
            width: p,
            height: T,
            keepOpen: m,
            interactive: g = !0,
            analyticsSource: S,
            onClose: N,
        } = e,
        C = (function (e) {
            let [t, n] = (0, s.yK)([A.A], () => [A.A.getSounds(), A.A.getFavorites()]);
            return r.useMemo(() => {
                let i = [],
                    r = [...e, "0"];
                function a(e, r) {
                    for (let a of t.get(e)?.sort((e, t) => _.default.compare(e.soundId, t.soundId)) ?? []) {
                        let e = n.has(a.soundId);
                        ((e && r) || (!e && !r)) && a.available && i.push(a);
                    }
                }
                return r.forEach((e) => a(e, !0)), r.forEach((e) => a(e, !1)), i;
            }, [t, n, e]);
        })((0, f.Y)(n, !0)),
        R = (0, I.T)(),
        O = r.useRef(null),
        [L, y] = r.useState(void 0),
        M = (0, s.bG)([u.A], () => u.A.getMediaSessionId()),
        { analyticsLocations: P } = (0, o.Ay)(l.A.SOUNDBOARD_WHEEL),
        U = r.useCallback(
            (e) => {
                (0, h.Ak)(e, n.id, P), N();
            },
            [P, n.id, N],
        );
    r.useEffect(() => {
        E.E7(), c.bW.loadIfNecessary();
    }, []),
        r.useEffect(() => {
            0 === C.length && 0 === R.length && N();
        }, [C.length, R, N]),
        r.useEffect(
            () => () => {
                let e = O.current;
                m || null == e || U(e);
            },
            [m, U],
        ),
        (0, d.A)(
            {
                type: a.ImpressionTypes.POPOUT,
                name: a.ImpressionNames.SOUNDBOARD_POPOUT,
                properties: { source: S, guild_id: t, media_session_id: M },
            },
            { disableTrack: !g },
        );
    let w = r.useCallback((e) => {
            (O.current = e), y(e?.soundId);
        }, []),
        G = r.useCallback(
            (e) => {
                if (null == e) return void w(null);
                let t = C[e];
                null != t && w(t);
            },
            [w, C],
        ),
        x = r.useCallback(
            (e) => {
                if (null == e) return;
                let t = C[e];
                null != t && U(t);
            },
            [C, U],
        ),
        k = r.useMemo(
            () =>
                C.map((e) =>
                    (0, i.jsx)(
                        v.Ay,
                        { interactive: g, className: b.a, sound: e, focused: L === e.soundId, channel: n },
                        e.soundId,
                    ),
                ),
            [L, n, g, C],
        );
    return 0 === C.length
        ? null
        : (0, i.jsx)(o.f5, {
              value: P,
              children: (0, i.jsx)(D, {
                  wheelWidth: p,
                  wheelHeight: T,
                  itemWidth: 96,
                  itemHeight: 52,
                  showDeadZoneIndicator: !m,
                  activeItem: L,
                  onItemSelect: G,
                  onItemAction: x,
                  onClose: N,
                  interactive: g,
                  children: k,
              }),
          });
}
