"use strict";
n.d(t, { A: () => w }), n(321073);
var i = n(627968),
    r = n(64700),
    s = n(562708),
    a = n(17928),
    o = n(793574),
    l = n(688810),
    u = n(139286),
    c = n(594061),
    d = n(763827),
    _ = n(935208),
    h = n(796774),
    f = n(209932),
    p = n(813564),
    E = n(933204),
    m = n(805143),
    g = n(735438),
    A = n.n(g),
    I = n(939249);
function T(e, t, n) {
    return (n.y - e.y) * (t.x - e.x) > (t.y - e.y) * (n.x - e.x);
}
function S(e, t, n, i) {
    return T(e, n, i) !== T(t, n, i) && T(e, t, n) !== T(e, t, i);
}
var y = n(375708),
    C = n(890323);
function N(e) {
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
let v = [
        { x: 0.5, y: 0.05 },
        { x: 0.95, y: 0.2 },
        { x: 1, y: 0.5 },
        { x: 0.95, y: 0.8 },
        { x: 0.5, y: 0.95 },
        { x: 0.05, y: 0.8 },
        { x: 0, y: 0.5 },
        { x: 0.05, y: 0.2 },
    ],
    R = v.length;
function O(e, t, n) {
    let i = e * t;
    return e > 0.5 ? i - n : e < 0.5 ? i : i - n / 2;
}
let b = r.memo(function (e) {
    let {
            wheelWidth: t,
            wheelHeight: n,
            itemWidth: s,
            itemHeight: a,
            showDeadZoneIndicator: o,
            activeItem: l,
            onItemSelect: u,
            onItemAction: c,
            interactive: d = !0,
            onClose: _,
            children: h,
        } = e,
        f = r.useRef(null),
        p = r.useRef([]),
        E = r.useRef(!1),
        m = r.useRef(null),
        [T, b] = r.useState(0),
        [D, L] = r.useState({ x: 0, y: 0 }),
        w = Math.abs(D.x) + Math.abs(D.y) > 0,
        M = r.useMemo(() => A().chunk(h, R), [h]),
        P = r.useCallback(
            (e, t) => {
                null == p.current[T] ? (p.current[T] = []) : (p.current[T][t] = e);
            },
            [T],
        ),
        x = r.useCallback(
            (e, t) => {
                (m.current = t), u(R * e + t);
            },
            [u],
        ),
        k = r.useCallback(() => {
            (m.current = null), u(null);
        }, [u]),
        U = r.useCallback(
            (e) => {
                k(), (E.current = e);
            },
            [k],
        ),
        G = r.useCallback((e, t, n) => {
            let i, r, s;
            if (E.current) return void L({ x: 0, y: 0 });
            let a = { x: e.x - t.x, y: e.y - t.y },
                o = a.x < 0,
                l = a.y < 0,
                u =
                    ((i = Math.abs(a.x)),
                    (r = (180 / Math.PI) * Math.atan2(Math.abs(a.y), i)),
                    {
                        x: Math.max((s = n / 2 - 28.8) * Math.cos((2 * Math.PI * r) / 360), 0),
                        y: Math.max(s * Math.sin((2 * Math.PI * r) / 360), 0),
                    });
            L({
                x: (o ? Math.max(a.x, -u.x) : Math.min(a.x, u.x)) / 2,
                y: (l ? Math.max(a.y, -u.y) : Math.min(a.y, u.y)) / 2,
            });
        }, []),
        F = r.useCallback(
            (e) => {
                null != m.current && (e.preventDefault(), e.stopPropagation(), c?.(R * T + m.current));
            },
            [c, T],
        ),
        V = r.useMemo(
            () =>
                (0, g.throttle)((e) => {
                    var i;
                    let r;
                    if (null == f.current) return;
                    let s = f.current.getBoundingClientRect(),
                        a = { x: s.left + s.width / 2, y: s.top + s.height / 2 },
                        o = { x: e.clientX, y: e.clientY };
                    if ((G(o, a, Math.max(t, n)), E.current)) {
                        null != l && k();
                        return;
                    }
                    let u =
                        ((i = Math.max(t, n)),
                        (r = Math.sqrt(Math.pow(a.x - o.x, 2) + Math.pow(a.y - o.y, 2))),
                        { x: o.x + ((o.x - a.x) / r) * i, y: o.y + ((o.y - a.y) / r) * i });
                    for (let e = 0; e < p.current[T].length; e++) {
                        let t = p.current[T][e];
                        if (
                            null != t &&
                            (function (e, t, n) {
                                let i = { x: n.x, y: n.y },
                                    r = { x: n.x + n.width, y: n.y },
                                    s = { x: n.x, y: n.y + n.height },
                                    a = { x: n.x + n.width, y: n.y + n.height };
                                return S(e, t, i, r) || S(e, t, r, a) || S(e, t, a, s) || S(e, t, s, i);
                            })(a, u, t.getBoundingClientRect())
                        )
                            return void x(T, e);
                    }
                    k();
                }, 16),
            [l, G, k, x, T, n, t],
        ),
        B = r.useCallback(
            (e) => {
                if (!d) return;
                let t = T + (e.deltaY > 0 ? 1 : -1);
                t >= 0 &&
                    t < M.length &&
                    (null != m.current && (M[t].length > m.current ? x(t, m.current) : k()), b(t));
            },
            [d, T, M, x, k],
        ),
        j = r.useMemo(
            () =>
                M[T].map((e, r) => {
                    let o = v[r];
                    if (null == o) throw Error(`Too many items supplied ${h.length} expected max of ${v.length}`);
                    let l = O(o.x, t, s),
                        u = O(o.y, n, a);
                    return (0, i.jsx)(
                        "div",
                        {
                            ref: (e) => P(e, r),
                            className: C.Tj,
                            style: { left: l, top: u, width: s, height: a },
                            children: e,
                        },
                        r,
                    );
                }),
            [M, T, t, s, n, a, h.length, P],
        );
    return (0, i.jsx)(I.D, {
        className: C.Pw,
        onMouseMove: V,
        onWheel: B,
        onClick: F,
        children: (0, i.jsxs)("div", {
            ref: f,
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
                                o &&
                                    (0, i.jsx)("circle", {
                                        className: C.u1,
                                        onMouseEnter: () => U(!0),
                                        onMouseLeave: () => U(!1),
                                        cx: 144,
                                        cy: 144,
                                        r: 28.8,
                                    }),
                                w && (0, i.jsx)("circle", { className: C.JV, cx: 144 + D.x, cy: 144 + D.y, r: 28.8 }),
                            ],
                        }),
                        o &&
                            (0, i.jsx)("circle", {
                                className: C.u1,
                                onMouseEnter: () => U(!0),
                                onMouseLeave: () => U(!1),
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
                        o &&
                            (0, i.jsx)(I.D, {
                                className: C.$2,
                                onClick: _,
                                children: (0, i.jsx)(N, { className: C.$2 }),
                            }),
                        d && M.length > 1
                            ? (0, i.jsx)("div", { className: C.YB, children: y.intl.string(y.t["Xy+S02"]) })
                            : null,
                    ],
                }),
                j,
            ],
        }),
    });
});
var D = n(805945);
n(980504);
var L = n(254914);
function w(e) {
    let {
            guildId: t,
            channel: n,
            width: g,
            height: A,
            keepOpen: I,
            interactive: T = !0,
            analyticsSource: S,
            onClose: y,
        } = e,
        C = (function (e) {
            let [t, n] = (0, a.yK)([f.A], () => [f.A.getSounds(), f.A.getFavorites()]);
            return r.useMemo(() => {
                let i = [],
                    r = [...e, "0"],
                    s = (e, r) => {
                        for (let s of t.get(e)?.sort((e, t) => _.default.compare(e.soundId, t.soundId)) ?? []) {
                            let e = n.has(s.soundId);
                            ((e && r) || (!e && !r)) && s.available && i.push(s);
                        }
                    };
                return r.forEach((e) => s(e, !0)), r.forEach((e) => s(e, !1)), i;
            }, [t, n, e]);
        })((0, m.Y)(n, !0)),
        N = (0, E.T)(),
        v = r.useRef(null),
        [R, O] = r.useState(void 0),
        w = (0, a.bG)([d.A], () => d.A.getMediaSessionId()),
        { analyticsLocations: M } = (0, l.Ay)(o.A.SOUNDBOARD_WHEEL),
        P = r.useCallback(
            (e) => {
                (0, p.Ak)(e, n.id, M), y();
            },
            [M, n.id, y],
        );
    r.useEffect(() => {
        h.E7(), c.bW.loadIfNecessary();
    }, []),
        r.useEffect(() => {
            0 === C.length && 0 === N.length && y();
        }, [C.length, N, y]),
        r.useEffect(
            () => () => {
                let e = v.current;
                I || null == e || P(e);
            },
            [I, P],
        ),
        (0, u.A)(
            {
                type: s.ImpressionTypes.POPOUT,
                name: s.ImpressionNames.SOUNDBOARD_POPOUT,
                properties: { source: S, guild_id: t, media_session_id: w },
            },
            { disableTrack: !T },
        );
    let x = r.useCallback((e) => {
            (v.current = e), O(e?.soundId);
        }, []),
        k = r.useCallback(
            (e) => {
                if (null == e) return void x(null);
                let t = C[e];
                null != t && x(t);
            },
            [x, C],
        ),
        U = r.useCallback(
            (e) => {
                if (null == e) return;
                let t = C[e];
                null != t && P(t);
            },
            [C, P],
        ),
        G = r.useMemo(
            () =>
                C.map((e) =>
                    (0, i.jsx)(
                        D.Ay,
                        { interactive: T, className: L.a, sound: e, focused: R === e.soundId, channel: n },
                        e.soundId,
                    ),
                ),
            [R, n, T, C],
        );
    return 0 === C.length
        ? null
        : (0, i.jsx)(l.f5, {
              value: M,
              children: (0, i.jsx)(b, {
                  wheelWidth: g,
                  wheelHeight: A,
                  itemWidth: 96,
                  itemHeight: 52,
                  showDeadZoneIndicator: !I,
                  activeItem: R,
                  onItemSelect: k,
                  onItemAction: U,
                  onClose: y,
                  interactive: T,
                  children: G,
              }),
          });
}
