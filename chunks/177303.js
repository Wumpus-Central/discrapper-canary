(n.d(t, { A: () => k }), n(321073));
var r = n(477900),
    i = n(582128),
    l = n(613412),
    s = n(855986),
    o = n(793574),
    a = n(688810),
    u = n(139286),
    d = n(594061),
    c = n(495867),
    h = n(811091),
    f = n(796774),
    g = n(209932),
    p = n(458976),
    m = n(933204),
    A = n(805143),
    y = n(435558),
    v = n.n(y),
    E = n(939249);
function x(e, t, n) {
    return (n.y - e.y) * (t.x - e.x) > (t.y - e.y) * (n.x - e.x);
}
function w(e, t, n, r) {
    return x(e, n, r) !== x(t, n, r) && x(e, t, n) !== x(e, t, r);
}
var b = n(792996),
    C = n(229834);
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
            onItemSelect: u,
            onItemAction: d,
            interactive: c = !0,
            onClose: h,
            children: f,
        } = e,
        g = i.useRef(null),
        p = i.useRef([]),
        m = i.useRef(!1),
        A = i.useRef(null),
        [x, I] = i.useState(0),
        [S, j] = i.useState({ x: 0, y: 0 }),
        T = Math.abs(S.x) + Math.abs(S.y) > 0,
        k = i.useMemo(() => v().chunk(f, _), [f]),
        R = i.useCallback(
            (e, t) => {
                null == p.current[x] ? (p.current[x] = []) : (p.current[x][t] = e);
            },
            [x],
        ),
        P = i.useCallback(
            (e, t) => {
                ((A.current = t), u(_ * e + t));
            },
            [u],
        ),
        L = i.useCallback(() => {
            ((A.current = null), u(null));
        }, [u]),
        M = i.useCallback(
            (e) => {
                (L(), (m.current = e));
            },
            [L],
        ),
        G = i.useCallback((e, t, n) => {
            let r, i, l;
            if (m.current) return void j({ x: 0, y: 0 });
            let s = { x: e.x - t.x, y: e.y - t.y },
                o = s.x < 0,
                a = s.y < 0,
                u =
                    ((r = Math.abs(s.x)),
                    (i = (180 / Math.PI) * Math.atan2(Math.abs(s.y), r)),
                    {
                        x: Math.max((l = n / 2 - 28.8) * Math.cos((2 * Math.PI * i) / 360), 0),
                        y: Math.max(l * Math.sin((2 * Math.PI * i) / 360), 0),
                    });
            j({
                x: (o ? Math.max(s.x, -u.x) : Math.min(s.x, u.x)) / 2,
                y: (a ? Math.max(s.y, -u.y) : Math.min(s.y, u.y)) / 2,
            });
        }, []),
        U = i.useCallback(
            (e) => {
                null != A.current && (e.preventDefault(), e.stopPropagation(), d?.(_ * x + A.current));
            },
            [d, x],
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
                    if ((G(o, s, Math.max(t, n)), m.current)) {
                        null != a && L();
                        return;
                    }
                    let u =
                        ((r = Math.max(t, n)),
                        (i = Math.sqrt(Math.pow(s.x - o.x, 2) + Math.pow(s.y - o.y, 2))),
                        { x: o.x + ((o.x - s.x) / i) * r, y: o.y + ((o.y - s.y) / i) * r });
                    for (let e = 0; e < p.current[x].length; e++) {
                        let t = p.current[x][e];
                        if (
                            null != t &&
                            (function (e, t, n) {
                                let r = { x: n.x, y: n.y },
                                    i = { x: n.x + n.width, y: n.y },
                                    l = { x: n.x, y: n.y + n.height },
                                    s = { x: n.x + n.width, y: n.y + n.height };
                                return w(e, t, r, i) || w(e, t, i, s) || w(e, t, s, l) || w(e, t, l, r);
                            })(s, u, t.getBoundingClientRect())
                        )
                            return void P(x, e);
                    }
                    L();
                }, 16),
            [a, G, L, P, x, n, t],
        ),
        W = i.useCallback(
            (e) => {
                if (!c) return;
                let t = x + (e.deltaY > 0 ? 1 : -1);
                t >= 0 &&
                    t < k.length &&
                    (null != A.current && (k[t].length > A.current ? P(t, A.current) : L()), I(t));
            },
            [c, x, k, P, L],
        ),
        B = i.useMemo(
            () =>
                k[x].map((e, i) => {
                    let o = O[i];
                    if (null == o) throw Error(`Too many items supplied ${f.length} expected max of ${O.length}`);
                    let a = D(o.x, t, l),
                        u = D(o.y, n, s);
                    return (0, r.jsx)(
                        "div",
                        {
                            ref: (e) => R(e, i),
                            className: C.Tj,
                            style: { left: a, top: u, width: l, height: s },
                            children: e,
                        },
                        i,
                    );
                }),
            [k, x, t, l, n, s, f.length, R],
        );
    return (0, r.jsx)(E.D, {
        className: C.Pw,
        onMouseMove: K,
        onWheel: W,
        onClick: U,
        children: (0, r.jsxs)("div", {
            ref: g,
            className: C._$,
            style: { width: t, height: n },
            children: [
                (0, r.jsxs)("svg", {
                    className: C.cA,
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
                                    className: C.cA,
                                    cx: "144",
                                    cy: "144",
                                    r: "103.68",
                                    strokeWidth: "40.32",
                                }),
                                o &&
                                    (0, r.jsx)("circle", {
                                        className: C.u1,
                                        onMouseEnter: () => M(!0),
                                        onMouseLeave: () => M(!1),
                                        cx: 144,
                                        cy: 144,
                                        r: 28.8,
                                    }),
                                T && (0, r.jsx)("circle", { className: C.JV, cx: 144 + S.x, cy: 144 + S.y, r: 28.8 }),
                            ],
                        }),
                        o &&
                            (0, r.jsx)("circle", {
                                className: C.u1,
                                onMouseEnter: () => M(!0),
                                onMouseLeave: () => M(!1),
                                cx: 144,
                                cy: 144,
                                r: 28.8,
                                stroke: "none",
                            }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: C.gx,
                    children: [
                        o &&
                            (0, r.jsx)(E.D, {
                                className: C.$2,
                                onClick: h,
                                children: (0, r.jsx)(N, { className: C.$2 }),
                            }),
                        c && k.length > 1
                            ? (0, r.jsx)("div", { className: C.YB, children: b.intl.string(b.t["Xy+S02"]) })
                            : null,
                    ],
                }),
                B,
            ],
        }),
    });
});
var S = n(533491),
    j = n(980504),
    T = n(613967);
function k(e) {
    let {
            guildId: t,
            channel: n,
            width: y,
            height: v,
            keepOpen: E,
            interactive: x = !0,
            analyticsSource: w,
            onClose: b,
        } = e,
        C = (function (e) {
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
        N = (0, m.T)(),
        O = i.useRef(null),
        [_, D] = i.useState(void 0),
        k = (0, s.bG)([c.A], () => c.A.getMediaSessionId()),
        { analyticsLocations: R } = (0, a.Ay)(o.A.SOUNDBOARD_WHEEL),
        P = i.useCallback(
            (e) => {
                ((0, p.Ak)(e, n.id, R), b());
            },
            [R, n.id, b],
        );
    (i.useEffect(() => {
        (f.E7(), d.bW.loadIfNecessary());
    }, []),
        i.useEffect(() => {
            0 === C.length && 0 === N.length && b();
        }, [C.length, N, b]),
        i.useEffect(
            () => () => {
                let e = O.current;
                E || null == e || P(e);
            },
            [E, P],
        ),
        (0, u.A)(
            {
                type: l.ImpressionTypes.POPOUT,
                name: l.ImpressionNames.SOUNDBOARD_POPOUT,
                properties: { source: w, guild_id: t, media_session_id: k, type: j.c4.WHEEL },
            },
            { disableTrack: !x },
        ));
    let L = i.useCallback((e) => {
            ((O.current = e), D(e?.soundId));
        }, []),
        M = i.useCallback(
            (e) => {
                if (null == e) return void L(null);
                let t = C[e];
                null != t && L(t);
            },
            [L, C],
        ),
        G = i.useCallback(
            (e) => {
                if (null == e) return;
                let t = C[e];
                null != t && P(t);
            },
            [C, P],
        ),
        U = i.useMemo(
            () =>
                C.map((e) =>
                    (0, r.jsx)(
                        S.Ay,
                        { interactive: x, className: T.a, sound: e, focused: _ === e.soundId, channel: n },
                        e.soundId,
                    ),
                ),
            [_, n, x, C],
        );
    return 0 === C.length
        ? null
        : (0, r.jsx)(a.f5, {
              value: R,
              children: (0, r.jsx)(I, {
                  wheelWidth: y,
                  wheelHeight: v,
                  itemWidth: 96,
                  itemHeight: 52,
                  showDeadZoneIndicator: !E,
                  activeItem: _,
                  onItemSelect: M,
                  onItemAction: G,
                  onClose: b,
                  interactive: x,
                  children: U,
              }),
          });
}
