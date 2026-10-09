(n.d(t, { A: () => k }), n(321073));
var r = n(477900),
    i = n(582128),
    l = n(562708),
    s = n(17928),
    o = n(793574),
    a = n(688810),
    d = n(139286),
    u = n(594061),
    c = n(763827),
    h = n(935208),
    f = n(796774),
    g = n(209932),
    m = n(813564),
    p = n(933204),
    A = n(805143),
    y = n(435558),
    v = n.n(y),
    w = n(939249);
function x(e, t, n) {
    return (n.y - e.y) * (t.x - e.x) > (t.y - e.y) * (n.x - e.x);
}
function E(e, t, n, r) {
    return x(e, n, r) !== x(t, n, r) && x(e, t, n) !== x(e, t, r);
}
var C = n(660183),
    b = n(229834);
function N(e) {
    let { className: t } = e;
    return (0, r.jsxs)("svg", {
        className: t,
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 48 48",
        children: [
            (0, r.jsx)("g", {
                filter: "url(#a)",
                children: (0, r.jsx)("path", {
                    d: "M30.4 8 24 14.4 17.6 8 16 9.6l6.4 6.4-6.4 6.4 1.6 1.6 6.4-6.4 6.4 6.4 1.6-1.6-6.4-6.4L32 9.6 30.4 8Z",
                    fill: "currentColor",
                }),
            }),
            (0, r.jsx)("defs", {
                children: (0, r.jsxs)("filter", {
                    id: "a",
                    x: "0",
                    y: "0",
                    width: "48",
                    height: "48",
                    filterUnits: "userSpaceOnUse",
                    colorInterpolationFilters: "sRGB",
                    children: [
                        (0, r.jsx)("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                        (0, r.jsx)("feColorMatrix", {
                            in: "SourceAlpha",
                            values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                            result: "hardAlpha",
                        }),
                        (0, r.jsx)("feOffset", { dy: "8" }),
                        (0, r.jsx)("feGaussianBlur", { stdDeviation: "8" }),
                        (0, r.jsx)("feColorMatrix", { values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0" }),
                        (0, r.jsx)("feBlend", { in2: "BackgroundImageFix", result: "effect1_dropShadow_605_72103" }),
                        (0, r.jsx)("feBlend", {
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
    _ = O.length;
function D(e, t, n) {
    let r = e * t;
    return e > 0.5 ? r - n : e < 0.5 ? r : r - n / 2;
}
let I = i.memo(function (e) {
    let {
            wheelWidth: t,
            wheelHeight: n,
            itemWidth: l,
            itemHeight: s,
            showDeadZoneIndicator: o,
            activeItem: a,
            onItemSelect: d,
            onItemAction: u,
            interactive: c = !0,
            onClose: h,
            children: f,
        } = e,
        g = i.useRef(null),
        m = i.useRef([]),
        p = i.useRef(!1),
        A = i.useRef(null),
        [x, I] = i.useState(0),
        [S, T] = i.useState({ x: 0, y: 0 }),
        j = Math.abs(S.x) + Math.abs(S.y) > 0,
        k = i.useMemo(() => v().chunk(f, _), [f]),
        M = i.useCallback(
            (e, t) => {
                null == m.current[x] ? (m.current[x] = []) : (m.current[x][t] = e);
            },
            [x],
        ),
        L = i.useCallback(
            (e, t) => {
                ((A.current = t), d(_ * e + t));
            },
            [d],
        ),
        R = i.useCallback(() => {
            ((A.current = null), d(null));
        }, [d]),
        P = i.useCallback(
            (e) => {
                (R(), (p.current = e));
            },
            [R],
        ),
        U = i.useCallback((e, t, n) => {
            let r, i, l;
            if (p.current) return void T({ x: 0, y: 0 });
            let s = { x: e.x - t.x, y: e.y - t.y },
                o = s.x < 0,
                a = s.y < 0,
                d =
                    ((r = Math.abs(s.x)),
                    (i = (180 / Math.PI) * Math.atan2(Math.abs(s.y), r)),
                    {
                        x: Math.max((l = n / 2 - 28.8) * Math.cos((2 * Math.PI * i) / 360), 0),
                        y: Math.max(l * Math.sin((2 * Math.PI * i) / 360), 0),
                    });
            T({
                x: (o ? Math.max(s.x, -d.x) : Math.min(s.x, d.x)) / 2,
                y: (a ? Math.max(s.y, -d.y) : Math.min(s.y, d.y)) / 2,
            });
        }, []),
        G = i.useCallback(
            (e) => {
                null != A.current && (e.preventDefault(), e.stopPropagation(), u?.(_ * x + A.current));
            },
            [u, x],
        ),
        K = i.useMemo(
            () =>
                (0, y.throttle)((e) => {
                    var r;
                    let i;
                    if (null == g.current) return;
                    let l = g.current.getBoundingClientRect(),
                        s = { x: l.left + l.width / 2, y: l.top + l.height / 2 },
                        o = { x: e.clientX, y: e.clientY };
                    if ((U(o, s, Math.max(t, n)), p.current)) {
                        null != a && R();
                        return;
                    }
                    let d =
                        ((r = Math.max(t, n)),
                        (i = Math.sqrt(Math.pow(s.x - o.x, 2) + Math.pow(s.y - o.y, 2))),
                        { x: o.x + ((o.x - s.x) / i) * r, y: o.y + ((o.y - s.y) / i) * r });
                    for (let e = 0; e < m.current[x].length; e++) {
                        let t = m.current[x][e];
                        if (
                            null != t &&
                            (function (e, t, n) {
                                let r = { x: n.x, y: n.y },
                                    i = { x: n.x + n.width, y: n.y },
                                    l = { x: n.x, y: n.y + n.height },
                                    s = { x: n.x + n.width, y: n.y + n.height };
                                return E(e, t, r, i) || E(e, t, i, s) || E(e, t, s, l) || E(e, t, l, r);
                            })(s, d, t.getBoundingClientRect())
                        )
                            return void L(x, e);
                    }
                    R();
                }, 16),
            [a, U, R, L, x, n, t],
        ),
        F = i.useCallback(
            (e) => {
                if (!c) return;
                let t = x + (e.deltaY > 0 ? 1 : -1);
                t >= 0 &&
                    t < k.length &&
                    (null != A.current && (k[t].length > A.current ? L(t, A.current) : R()), I(t));
            },
            [c, x, k, L, R],
        ),
        W = i.useMemo(
            () =>
                k[x].map((e, i) => {
                    let o = O[i];
                    if (null == o) throw Error(`Too many items supplied ${f.length} expected max of ${O.length}`);
                    let a = D(o.x, t, l),
                        d = D(o.y, n, s);
                    return (0, r.jsx)(
                        "div",
                        {
                            ref: (e) => M(e, i),
                            className: b.Tj,
                            style: { left: a, top: d, width: l, height: s },
                            children: e,
                        },
                        i,
                    );
                }),
            [k, x, t, l, n, s, f.length, M],
        );
    return (0, r.jsx)(w.D, {
        className: b.Pw,
        onMouseMove: K,
        onWheel: F,
        onClick: G,
        children: (0, r.jsxs)("div", {
            ref: g,
            className: b._$,
            style: { width: t, height: n },
            children: [
                (0, r.jsxs)("svg", {
                    className: b.cA,
                    viewBox: "0 0 288 288",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [
                        (0, r.jsxs)("filter", {
                            id: "soundboard-wheel-background-shadow",
                            x: "0",
                            y: "0",
                            width: "288",
                            height: "288",
                            filterUnits: "userSpaceOnUse",
                            colorInterpolationFilters: "sRGB",
                            children: [
                                (0, r.jsx)("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                                (0, r.jsx)("feColorMatrix", {
                                    in: "SourceAlpha",
                                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                    result: "hardAlpha",
                                }),
                                (0, r.jsx)("feOffset", { dy: "8" }),
                                (0, r.jsx)("feGaussianBlur", { stdDeviation: "8" }),
                                (0, r.jsx)("feColorMatrix", { values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0" }),
                                (0, r.jsx)("feBlend", {
                                    in2: "BackgroundImageFix",
                                    result: "effect1_dropShadow_489_60382",
                                }),
                                (0, r.jsx)("feBlend", {
                                    in: "SourceGraphic",
                                    in2: "effect1_dropShadow_489_60382",
                                    result: "shape",
                                }),
                            ],
                        }),
                        (0, r.jsxs)("g", {
                            filter: "url(#soundboard-wheel-background-shadow)",
                            children: [
                                (0, r.jsx)("circle", {
                                    className: b.cA,
                                    cx: "144",
                                    cy: "144",
                                    r: "103.68",
                                    strokeWidth: "40.32",
                                }),
                                o &&
                                    (0, r.jsx)("circle", {
                                        className: b.u1,
                                        onMouseEnter: () => P(!0),
                                        onMouseLeave: () => P(!1),
                                        cx: 144,
                                        cy: 144,
                                        r: 28.8,
                                    }),
                                j && (0, r.jsx)("circle", { className: b.JV, cx: 144 + S.x, cy: 144 + S.y, r: 28.8 }),
                            ],
                        }),
                        o &&
                            (0, r.jsx)("circle", {
                                className: b.u1,
                                onMouseEnter: () => P(!0),
                                onMouseLeave: () => P(!1),
                                cx: 144,
                                cy: 144,
                                r: 28.8,
                                stroke: "none",
                            }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: b.gx,
                    children: [
                        o &&
                            (0, r.jsx)(w.D, {
                                className: b.$2,
                                onClick: h,
                                children: (0, r.jsx)(N, { className: b.$2 }),
                            }),
                        c && k.length > 1
                            ? (0, r.jsx)("div", { className: b.YB, children: C.intl.string(C.t["Xy+S02"]) })
                            : null,
                    ],
                }),
                W,
            ],
        }),
    });
});
var S = n(817232),
    T = n(980504),
    j = n(613967);
function k(e) {
    let {
            guildId: t,
            channel: n,
            width: y,
            height: v,
            keepOpen: w,
            interactive: x = !0,
            analyticsSource: E,
            onClose: C,
        } = e,
        b = (function (e) {
            let [t, n] = (0, s.yK)([g.A], () => [g.A.getSounds(), g.A.getFavorites()]);
            return i.useMemo(() => {
                let r = [],
                    i = [...e, "0"];
                function l(e, i) {
                    for (let l of t.get(e)?.sort((e, t) => h.default.compare(e.soundId, t.soundId)) ?? []) {
                        let e = n.has(l.soundId);
                        ((e && i) || (!e && !i)) && l.available && r.push(l);
                    }
                }
                return (i.forEach((e) => l(e, !0)), i.forEach((e) => l(e, !1)), r);
            }, [t, n, e]);
        })((0, A.Y)(n, !0)),
        N = (0, p.T)(),
        O = i.useRef(null),
        [_, D] = i.useState(void 0),
        k = (0, s.bG)([c.A], () => c.A.getMediaSessionId()),
        { analyticsLocations: M } = (0, a.Ay)(o.A.SOUNDBOARD_WHEEL),
        L = i.useCallback(
            (e) => {
                ((0, m.Ak)(e, n.id, M), C());
            },
            [M, n.id, C],
        );
    (i.useEffect(() => {
        (f.E7(), u.bW.loadIfNecessary());
    }, []),
        i.useEffect(() => {
            0 === b.length && 0 === N.length && C();
        }, [b.length, N, C]),
        i.useEffect(
            () => () => {
                let e = O.current;
                w || null == e || L(e);
            },
            [w, L],
        ),
        (0, d.A)(
            {
                type: l.ImpressionTypes.POPOUT,
                name: l.ImpressionNames.SOUNDBOARD_POPOUT,
                properties: { source: E, guild_id: t, media_session_id: k, type: T.c4.WHEEL },
            },
            { disableTrack: !x },
        ));
    let R = i.useCallback((e) => {
            ((O.current = e), D(e?.soundId));
        }, []),
        P = i.useCallback(
            (e) => {
                if (null == e) return void R(null);
                let t = b[e];
                null != t && R(t);
            },
            [R, b],
        ),
        U = i.useCallback(
            (e) => {
                if (null == e) return;
                let t = b[e];
                null != t && L(t);
            },
            [b, L],
        ),
        G = i.useMemo(
            () =>
                b.map((e) =>
                    (0, r.jsx)(
                        S.Ay,
                        { interactive: x, className: j.a, sound: e, focused: _ === e.soundId, channel: n },
                        e.soundId,
                    ),
                ),
            [_, n, x, b],
        );
    return 0 === b.length
        ? null
        : (0, r.jsx)(a.f5, {
              value: M,
              children: (0, r.jsx)(I, {
                  wheelWidth: y,
                  wheelHeight: v,
                  itemWidth: 96,
                  itemHeight: 52,
                  showDeadZoneIndicator: !w,
                  activeItem: _,
                  onItemSelect: P,
                  onItemAction: U,
                  onClose: C,
                  interactive: x,
                  children: G,
              }),
          });
}
