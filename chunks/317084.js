l.d(t, { A: () => b }), l(321073);
var n = l(627968),
    a = l(64700),
    r = l(110259),
    s = l(17928),
    i = l(793574),
    u = l(688810),
    o = l(139286),
    c = l(594061),
    d = l(763827),
    h = l(935208),
    x = l(796774),
    f = l(209932),
    y = l(536432),
    p = l(933204),
    g = l(805143),
    A = l(735438),
    v = l.n(A),
    m = l(939249);
function _(e, t, l) {
    return (l.y - e.y) * (t.x - e.x) > (t.y - e.y) * (l.x - e.x);
}
function I(e, t, l, n) {
    return _(e, l, n) !== _(t, l, n) && _(e, t, l) !== _(e, t, n);
}
var M = l(985018),
    E = l(740371);
function C(e) {
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
let w = [
        { x: 0.5, y: 0.05 },
        { x: 0.95, y: 0.2 },
        { x: 1, y: 0.5 },
        { x: 0.95, y: 0.8 },
        { x: 0.5, y: 0.95 },
        { x: 0.05, y: 0.8 },
        { x: 0, y: 0.5 },
        { x: 0.05, y: 0.2 },
    ],
    D = w.length;
function N(e, t, l) {
    let n = e * t;
    return e > 0.5 ? n - l : e < 0.5 ? n : n - l / 2;
}
let O = a.memo(function (e) {
    let {
            wheelWidth: t,
            wheelHeight: l,
            itemWidth: r,
            itemHeight: s,
            showDeadZoneIndicator: i,
            activeItem: u,
            onItemSelect: o,
            onItemAction: c,
            interactive: d = !0,
            onClose: h,
            children: x,
        } = e,
        f = a.useRef(null),
        y = a.useRef([]),
        p = a.useRef(!1),
        g = a.useRef(null),
        [_, O] = a.useState(0),
        [T, j] = a.useState({ x: 0, y: 0 }),
        b = Math.abs(T.x) + Math.abs(T.y) > 0,
        S = a.useMemo(() => v().chunk(x, D), [x]),
        k = a.useCallback(
            (e, t) => {
                null == y.current[_] ? (y.current[_] = []) : (y.current[_][t] = e);
            },
            [_],
        ),
        R = a.useCallback(
            (e, t) => {
                (g.current = t), o(D * e + t);
            },
            [o],
        ),
        L = a.useCallback(() => {
            (g.current = null), o(null);
        }, [o]),
        U = a.useCallback(
            (e) => {
                L(), (p.current = e);
            },
            [L],
        ),
        B = a.useCallback((e, t, l) => {
            let n, a, r;
            if (p.current) return void j({ x: 0, y: 0 });
            let s = { x: e.x - t.x, y: e.y - t.y },
                i = s.x < 0,
                u = s.y < 0,
                o =
                    ((n = Math.abs(s.x)),
                    (a = (180 / Math.PI) * Math.atan2(Math.abs(s.y), n)),
                    {
                        x: Math.max((r = l / 2 - 28.8) * Math.cos((2 * Math.PI * a) / 360), 0),
                        y: Math.max(r * Math.sin((2 * Math.PI * a) / 360), 0),
                    });
            j({
                x: (i ? Math.max(s.x, -o.x) : Math.min(s.x, o.x)) / 2,
                y: (u ? Math.max(s.y, -o.y) : Math.min(s.y, o.y)) / 2,
            });
        }, []),
        P = a.useCallback(
            (e) => {
                null != g.current && (e.preventDefault(), e.stopPropagation(), c?.(D * _ + g.current));
            },
            [c, _],
        ),
        V = a.useMemo(
            () =>
                (0, A.throttle)((e) => {
                    var n;
                    let a;
                    if (null == f.current) return;
                    let r = f.current.getBoundingClientRect(),
                        s = { x: r.left + r.width / 2, y: r.top + r.height / 2 },
                        i = { x: e.clientX, y: e.clientY };
                    if ((B(i, s, Math.max(t, l)), p.current)) {
                        null != u && L();
                        return;
                    }
                    let o =
                        ((n = Math.max(t, l)),
                        (a = Math.sqrt(Math.pow(s.x - i.x, 2) + Math.pow(s.y - i.y, 2))),
                        { x: i.x + ((i.x - s.x) / a) * n, y: i.y + ((i.y - s.y) / a) * n });
                    for (let e = 0; e < y.current[_].length; e++) {
                        let t = y.current[_][e];
                        if (
                            null != t &&
                            (function (e, t, l) {
                                let n = { x: l.x, y: l.y },
                                    a = { x: l.x + l.width, y: l.y },
                                    r = { x: l.x, y: l.y + l.height },
                                    s = { x: l.x + l.width, y: l.y + l.height };
                                return I(e, t, n, a) || I(e, t, a, s) || I(e, t, s, r) || I(e, t, r, n);
                            })(s, o, t.getBoundingClientRect())
                        )
                            return void R(_, e);
                    }
                    L();
                }, 16),
            [u, B, L, R, _, l, t],
        ),
        Y = a.useCallback(
            (e) => {
                if (!d) return;
                let t = _ + (e.deltaY > 0 ? 1 : -1);
                t >= 0 &&
                    t < S.length &&
                    (null != g.current && (S[t].length > g.current ? R(t, g.current) : L()), O(t));
            },
            [d, _, S, R, L],
        ),
        F = a.useMemo(
            () =>
                S[_].map((e, a) => {
                    let i = w[a];
                    if (null == i) throw Error(`Too many items supplied ${x.length} expected max of ${w.length}`);
                    let u = N(i.x, t, r),
                        o = N(i.y, l, s);
                    return (0, n.jsx)(
                        "div",
                        {
                            ref: (e) => k(e, a),
                            className: E.Tj,
                            style: { left: u, top: o, width: r, height: s },
                            children: e,
                        },
                        a,
                    );
                }),
            [S, _, t, r, l, s, x.length, k],
        );
    return (0, n.jsx)(m.D, {
        className: E.Pw,
        onMouseMove: V,
        onWheel: Y,
        onClick: P,
        children: (0, n.jsxs)("div", {
            ref: f,
            className: E._$,
            style: { width: t, height: l },
            children: [
                (0, n.jsxs)("svg", {
                    className: E.cA,
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
                                    className: E.cA,
                                    cx: "144",
                                    cy: "144",
                                    r: "103.68",
                                    strokeWidth: "40.32",
                                }),
                                i &&
                                    (0, n.jsx)("circle", {
                                        className: E.u1,
                                        onMouseEnter: () => U(!0),
                                        onMouseLeave: () => U(!1),
                                        cx: 144,
                                        cy: 144,
                                        r: 28.8,
                                    }),
                                b && (0, n.jsx)("circle", { className: E.JV, cx: 144 + T.x, cy: 144 + T.y, r: 28.8 }),
                            ],
                        }),
                        i &&
                            (0, n.jsx)("circle", {
                                className: E.u1,
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
                    className: E.gx,
                    children: [
                        i &&
                            (0, n.jsx)(m.D, {
                                className: E.$2,
                                onClick: h,
                                children: (0, n.jsx)(C, { className: E.$2 }),
                            }),
                        d && S.length > 1
                            ? (0, n.jsx)("div", { className: E.YB, children: M.intl.string(M.t["Xy+S02"]) })
                            : null,
                    ],
                }),
                F,
            ],
        }),
    });
});
var T = l(805945);
l(980504);
var j = l(1986);
function b(e) {
    let {
            guildId: t,
            channel: l,
            width: A,
            height: v,
            keepOpen: m,
            interactive: _ = !0,
            analyticsSource: I,
            onClose: M,
        } = e,
        E = (function (e) {
            let [t, l] = (0, s.yK)([f.A], () => [f.A.getSounds(), f.A.getFavorites()]);
            return a.useMemo(() => {
                let n = [],
                    a = [...e, "0"],
                    r = (e, a) => {
                        for (let r of t.get(e)?.sort((e, t) => h.default.compare(e.soundId, t.soundId)) ?? []) {
                            let e = l.has(r.soundId);
                            ((e && a) || (!e && !a)) && r.available && n.push(r);
                        }
                    };
                return a.forEach((e) => r(e, !0)), a.forEach((e) => r(e, !1)), n;
            }, [t, l, e]);
        })((0, g.Y)(l, !0)),
        C = (0, p.T)(),
        w = a.useRef(null),
        [D, N] = a.useState(void 0),
        b = (0, s.bG)([d.A], () => d.A.getMediaSessionId()),
        { analyticsLocations: S } = (0, u.Ay)(i.A.SOUNDBOARD_WHEEL),
        k = a.useCallback(
            (e) => {
                (0, y.Ak)(e, l.id, S), M();
            },
            [S, l.id, M],
        );
    a.useEffect(() => {
        x.E7(), c.bW.loadIfNecessary();
    }, []),
        a.useEffect(() => {
            0 === E.length && 0 === C.length && M();
        }, [E.length, C, M]),
        a.useEffect(
            () => () => {
                let e = w.current;
                m || null == e || k(e);
            },
            [m, k],
        ),
        (0, o.A)(
            {
                type: r.ImpressionTypes.POPOUT,
                name: r.ImpressionNames.SOUNDBOARD_POPOUT,
                properties: { source: I, guild_id: t, media_session_id: b },
            },
            { disableTrack: !_ },
        );
    let R = a.useCallback((e) => {
            (w.current = e), N(e?.soundId);
        }, []),
        L = a.useCallback(
            (e) => {
                if (null == e) return void R(null);
                let t = E[e];
                null != t && R(t);
            },
            [R, E],
        ),
        U = a.useCallback(
            (e) => {
                if (null == e) return;
                let t = E[e];
                null != t && k(t);
            },
            [E, k],
        ),
        B = a.useMemo(
            () =>
                E.map((e) =>
                    (0, n.jsx)(
                        T.Ay,
                        { interactive: _, className: j.a, sound: e, focused: D === e.soundId, channel: l },
                        e.soundId,
                    ),
                ),
            [D, l, _, E],
        );
    return 0 === E.length
        ? null
        : (0, n.jsx)(u.f5, {
              value: S,
              children: (0, n.jsx)(O, {
                  wheelWidth: A,
                  wheelHeight: v,
                  itemWidth: 96,
                  itemHeight: 52,
                  showDeadZoneIndicator: !m,
                  activeItem: D,
                  onItemSelect: L,
                  onItemAction: U,
                  onClose: M,
                  interactive: _,
                  children: B,
              }),
          });
}
