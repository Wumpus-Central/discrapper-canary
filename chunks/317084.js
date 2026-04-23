l.d(t, { A: () => j }), l(321073);
var n = l(627968),
    r = l(64700),
    a = l(110259),
    s = l(17928),
    i = l(793574),
    u = l(688810),
    c = l(139286),
    o = l(594061),
    d = l(763827),
    h = l(935208),
    x = l(796774),
    f = l(209932),
    y = l(536432),
    p = l(933204),
    g = l(805143),
    A = l(735438),
    m = l.n(A),
    _ = l(939249);
function I(e, t, l) {
    return (l.y - e.y) * (t.x - e.x) > (t.y - e.y) * (l.x - e.x);
}
function v(e, t, l, n) {
    return I(e, l, n) !== I(t, l, n) && I(e, t, l) !== I(e, t, n);
}
var E = l(985018),
    M = l(740371);
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
let D = [
        { x: 0.5, y: 0.05 },
        { x: 0.95, y: 0.2 },
        { x: 1, y: 0.5 },
        { x: 0.95, y: 0.8 },
        { x: 0.5, y: 0.95 },
        { x: 0.05, y: 0.8 },
        { x: 0, y: 0.5 },
        { x: 0.05, y: 0.2 },
    ],
    N = D.length;
function w(e, t, l) {
    let n = e * t;
    return e > 0.5 ? n - l : e < 0.5 ? n : n - l / 2;
}
let O = r.memo(function (e) {
    let {
            wheelWidth: t,
            wheelHeight: l,
            itemWidth: a,
            itemHeight: s,
            showDeadZoneIndicator: i,
            activeItem: u,
            onItemSelect: c,
            onItemAction: o,
            interactive: d = !0,
            onClose: h,
            children: x,
        } = e,
        f = r.useRef(null),
        y = r.useRef([]),
        p = r.useRef(!1),
        g = r.useRef(null),
        [I, O] = r.useState(0),
        [T, b] = r.useState({ x: 0, y: 0 }),
        j = Math.abs(T.x) + Math.abs(T.y) > 0,
        S = r.useMemo(() => m().chunk(x, N), [x]),
        k = r.useCallback(
            (e, t) => {
                null == y.current[I] ? (y.current[I] = []) : (y.current[I][t] = e);
            },
            [I],
        ),
        R = r.useCallback(
            (e, t) => {
                (g.current = t), c(N * e + t);
            },
            [c],
        ),
        L = r.useCallback(() => {
            (g.current = null), c(null);
        }, [c]),
        U = r.useCallback(
            (e) => {
                L(), (p.current = e);
            },
            [L],
        ),
        P = r.useCallback((e, t, l) => {
            let n, r, a;
            if (p.current) return void b({ x: 0, y: 0 });
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
                null != g.current && (e.preventDefault(), e.stopPropagation(), o?.(N * I + g.current));
            },
            [o, I],
        ),
        V = r.useMemo(
            () =>
                (0, A.throttle)((e) => {
                    var n;
                    let r;
                    if (null == f.current) return;
                    let a = f.current.getBoundingClientRect(),
                        s = { x: a.left + a.width / 2, y: a.top + a.height / 2 },
                        i = { x: e.clientX, y: e.clientY };
                    if ((P(i, s, Math.max(t, l)), p.current)) {
                        null != u && L();
                        return;
                    }
                    let c =
                        ((n = Math.max(t, l)),
                        (r = Math.sqrt(Math.pow(s.x - i.x, 2) + Math.pow(s.y - i.y, 2))),
                        { x: i.x + ((i.x - s.x) / r) * n, y: i.y + ((i.y - s.y) / r) * n });
                    for (let e = 0; e < y.current[I].length; e++) {
                        let t = y.current[I][e];
                        if (
                            null != t &&
                            (function (e, t, l) {
                                let n = { x: l.x, y: l.y },
                                    r = { x: l.x + l.width, y: l.y },
                                    a = { x: l.x, y: l.y + l.height },
                                    s = { x: l.x + l.width, y: l.y + l.height };
                                return v(e, t, n, r) || v(e, t, r, s) || v(e, t, s, a) || v(e, t, a, n);
                            })(s, c, t.getBoundingClientRect())
                        )
                            return void R(I, e);
                    }
                    L();
                }, 16),
            [u, P, L, R, I, l, t],
        ),
        Y = r.useCallback(
            (e) => {
                if (!d) return;
                let t = I + (e.deltaY > 0 ? 1 : -1);
                t >= 0 &&
                    t < S.length &&
                    (null != g.current && (S[t].length > g.current ? R(t, g.current) : L()), O(t));
            },
            [d, I, S, R, L],
        ),
        F = r.useMemo(
            () =>
                S[I].map((e, r) => {
                    let i = D[r];
                    if (null == i) throw Error(`Too many items supplied ${x.length} expected max of ${D.length}`);
                    let u = w(i.x, t, a),
                        c = w(i.y, l, s);
                    return (0, n.jsx)(
                        "div",
                        {
                            ref: (e) => k(e, r),
                            className: M.Tj,
                            style: { left: u, top: c, width: a, height: s },
                            children: e,
                        },
                        r,
                    );
                }),
            [S, I, t, a, l, s, x.length, k],
        );
    return (0, n.jsx)(_.D, {
        className: M.Pw,
        onMouseMove: V,
        onWheel: Y,
        onClick: B,
        children: (0, n.jsxs)("div", {
            ref: f,
            className: M._$,
            style: { width: t, height: l },
            children: [
                (0, n.jsxs)("svg", {
                    className: M.cA,
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
                                    className: M.cA,
                                    cx: "144",
                                    cy: "144",
                                    r: "103.68",
                                    strokeWidth: "40.32",
                                }),
                                i &&
                                    (0, n.jsx)("circle", {
                                        className: M.u1,
                                        onMouseEnter: () => U(!0),
                                        onMouseLeave: () => U(!1),
                                        cx: 144,
                                        cy: 144,
                                        r: 28.8,
                                    }),
                                j && (0, n.jsx)("circle", { className: M.JV, cx: 144 + T.x, cy: 144 + T.y, r: 28.8 }),
                            ],
                        }),
                        i &&
                            (0, n.jsx)("circle", {
                                className: M.u1,
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
                    className: M.gx,
                    children: [
                        i &&
                            (0, n.jsx)(_.D, {
                                className: M.$2,
                                onClick: h,
                                children: (0, n.jsx)(C, { className: M.$2 }),
                            }),
                        d && S.length > 1
                            ? (0, n.jsx)("div", { className: M.YB, children: E.intl.string(E.t["Xy+S02"]) })
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
var b = l(1986);
function j(e) {
    let {
            guildId: t,
            channel: l,
            width: A,
            height: m,
            keepOpen: _,
            interactive: I = !0,
            analyticsSource: v,
            onClose: E,
        } = e,
        M = (function (e) {
            let [t, l] = (0, s.yK)([f.A], () => [f.A.getSounds(), f.A.getFavorites()]);
            return r.useMemo(() => {
                let n = [],
                    r = [...e, "0"],
                    a = (e, r) => {
                        for (let a of t.get(e)?.sort((e, t) => h.default.compare(e.soundId, t.soundId)) ?? []) {
                            let e = l.has(a.soundId);
                            ((e && r) || (!e && !r)) && a.available && n.push(a);
                        }
                    };
                return r.forEach((e) => a(e, !0)), r.forEach((e) => a(e, !1)), n;
            }, [t, l, e]);
        })((0, g.Y)(l, !0)),
        C = (0, p.T)(),
        D = r.useRef(null),
        [N, w] = r.useState(void 0),
        j = (0, s.bG)([d.A], () => d.A.getMediaSessionId()),
        { analyticsLocations: S } = (0, u.Ay)(i.A.SOUNDBOARD_WHEEL),
        k = r.useCallback(
            (e) => {
                (0, y.Ak)(e, l.id, S), E();
            },
            [S, l.id, E],
        );
    r.useEffect(() => {
        x.E7(), o.bW.loadIfNecessary();
    }, []),
        r.useEffect(() => {
            0 === M.length && 0 === C.length && E();
        }, [M.length, C, E]),
        r.useEffect(
            () => () => {
                let e = D.current;
                _ || null == e || k(e);
            },
            [_, k],
        ),
        (0, c.A)(
            {
                type: a.ImpressionTypes.POPOUT,
                name: a.ImpressionNames.SOUNDBOARD_POPOUT,
                properties: { source: v, guild_id: t, media_session_id: j },
            },
            { disableTrack: !I },
        );
    let R = r.useCallback((e) => {
            (D.current = e), w(e?.soundId);
        }, []),
        L = r.useCallback(
            (e) => {
                if (null == e) return void R(null);
                let t = M[e];
                null != t && R(t);
            },
            [R, M],
        ),
        U = r.useCallback(
            (e) => {
                if (null == e) return;
                let t = M[e];
                null != t && k(t);
            },
            [M, k],
        ),
        P = r.useMemo(
            () =>
                M.map((e) =>
                    (0, n.jsx)(
                        T.Ay,
                        { interactive: I, className: b.a, sound: e, focused: N === e.soundId, channel: l },
                        e.soundId,
                    ),
                ),
            [N, l, I, M],
        );
    return 0 === M.length
        ? null
        : (0, n.jsx)(u.f5, {
              value: S,
              children: (0, n.jsx)(O, {
                  wheelWidth: A,
                  wheelHeight: m,
                  itemWidth: 96,
                  itemHeight: 52,
                  showDeadZoneIndicator: !_,
                  activeItem: N,
                  onItemSelect: L,
                  onItemAction: U,
                  onClose: E,
                  interactive: I,
                  children: P,
              }),
          });
}
