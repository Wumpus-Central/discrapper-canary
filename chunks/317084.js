n.d(t, { A: () => k }), n(321073);
var r = n(627968),
    i = n(64700),
    s = n(562708),
    o = n(17928),
    l = n(793574),
    a = n(688810),
    c = n(139286),
    u = n(594061),
    d = n(763827),
    h = n(935208),
    f = n(796774),
    p = n(209932),
    m = n(813564),
    g = n(933204),
    A = n(805143),
    y = n(435558),
    v = n.n(y),
    x = n(939249);
function w(e, t, n) {
    return (n.y - e.y) * (t.x - e.x) > (t.y - e.y) * (n.x - e.x);
}
function E(e, t, n, r) {
    return w(e, n, r) !== w(t, n, r) && w(e, t, n) !== w(e, t, r);
}
var C = n(375708),
    N = n(740371);
function b(e) {
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
            itemWidth: s,
            itemHeight: o,
            showDeadZoneIndicator: l,
            activeItem: a,
            onItemSelect: c,
            onItemAction: u,
            interactive: d = !0,
            onClose: h,
            children: f,
        } = e,
        p = i.useRef(null),
        m = i.useRef([]),
        g = i.useRef(!1),
        A = i.useRef(null),
        [w, I] = i.useState(0),
        [T, j] = i.useState({ x: 0, y: 0 }),
        k = Math.abs(T.x) + Math.abs(T.y) > 0,
        S = i.useMemo(() => v().chunk(f, _), [f]),
        L = i.useCallback(
            (e, t) => {
                null == m.current[w] ? (m.current[w] = []) : (m.current[w][t] = e);
            },
            [w],
        ),
        P = i.useCallback(
            (e, t) => {
                (A.current = t), c(_ * e + t);
            },
            [c],
        ),
        M = i.useCallback(() => {
            (A.current = null), c(null);
        }, [c]),
        R = i.useCallback(
            (e) => {
                M(), (g.current = e);
            },
            [M],
        ),
        U = i.useCallback((e, t, n) => {
            let r, i, s;
            if (g.current) return void j({ x: 0, y: 0 });
            let o = { x: e.x - t.x, y: e.y - t.y },
                l = o.x < 0,
                a = o.y < 0,
                c =
                    ((r = Math.abs(o.x)),
                    (i = (180 / Math.PI) * Math.atan2(Math.abs(o.y), r)),
                    {
                        x: Math.max((s = n / 2 - 28.8) * Math.cos((2 * Math.PI * i) / 360), 0),
                        y: Math.max(s * Math.sin((2 * Math.PI * i) / 360), 0),
                    });
            j({
                x: (l ? Math.max(o.x, -c.x) : Math.min(o.x, c.x)) / 2,
                y: (a ? Math.max(o.y, -c.y) : Math.min(o.y, c.y)) / 2,
            });
        }, []),
        K = i.useCallback(
            (e) => {
                null != A.current && (e.preventDefault(), e.stopPropagation(), u?.(_ * w + A.current));
            },
            [u, w],
        ),
        G = i.useMemo(
            () =>
                (0, y.throttle)((e) => {
                    var r;
                    let i;
                    if (null == p.current) return;
                    let s = p.current.getBoundingClientRect(),
                        o = { x: s.left + s.width / 2, y: s.top + s.height / 2 },
                        l = { x: e.clientX, y: e.clientY };
                    if ((U(l, o, Math.max(t, n)), g.current)) {
                        null != a && M();
                        return;
                    }
                    let c =
                        ((r = Math.max(t, n)),
                        (i = Math.sqrt(Math.pow(o.x - l.x, 2) + Math.pow(o.y - l.y, 2))),
                        { x: l.x + ((l.x - o.x) / i) * r, y: l.y + ((l.y - o.y) / i) * r });
                    for (let e = 0; e < m.current[w].length; e++) {
                        let t = m.current[w][e];
                        if (
                            null != t &&
                            (function (e, t, n) {
                                let r = { x: n.x, y: n.y },
                                    i = { x: n.x + n.width, y: n.y },
                                    s = { x: n.x, y: n.y + n.height },
                                    o = { x: n.x + n.width, y: n.y + n.height };
                                return E(e, t, r, i) || E(e, t, i, o) || E(e, t, o, s) || E(e, t, s, r);
                            })(o, c, t.getBoundingClientRect())
                        )
                            return void P(w, e);
                    }
                    M();
                }, 16),
            [a, U, M, P, w, n, t],
        ),
        F = i.useCallback(
            (e) => {
                if (!d) return;
                let t = w + (e.deltaY > 0 ? 1 : -1);
                t >= 0 &&
                    t < S.length &&
                    (null != A.current && (S[t].length > A.current ? P(t, A.current) : M()), I(t));
            },
            [d, w, S, P, M],
        ),
        V = i.useMemo(
            () =>
                S[w].map((e, i) => {
                    let l = O[i];
                    if (null == l) throw Error(`Too many items supplied ${f.length} expected max of ${O.length}`);
                    let a = D(l.x, t, s),
                        c = D(l.y, n, o);
                    return (0, r.jsx)(
                        "div",
                        {
                            ref: (e) => L(e, i),
                            className: N.Tj,
                            style: { left: a, top: c, width: s, height: o },
                            children: e,
                        },
                        i,
                    );
                }),
            [S, w, t, s, n, o, f.length, L],
        );
    return (0, r.jsx)(x.D, {
        className: N.Pw,
        onMouseMove: G,
        onWheel: F,
        onClick: K,
        children: (0, r.jsxs)("div", {
            ref: p,
            className: N._$,
            style: { width: t, height: n },
            children: [
                (0, r.jsxs)("svg", {
                    className: N.cA,
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
                                    className: N.cA,
                                    cx: "144",
                                    cy: "144",
                                    r: "103.68",
                                    strokeWidth: "40.32",
                                }),
                                l &&
                                    (0, r.jsx)("circle", {
                                        className: N.u1,
                                        onMouseEnter: () => R(!0),
                                        onMouseLeave: () => R(!1),
                                        cx: 144,
                                        cy: 144,
                                        r: 28.8,
                                    }),
                                k && (0, r.jsx)("circle", { className: N.JV, cx: 144 + T.x, cy: 144 + T.y, r: 28.8 }),
                            ],
                        }),
                        l &&
                            (0, r.jsx)("circle", {
                                className: N.u1,
                                onMouseEnter: () => R(!0),
                                onMouseLeave: () => R(!1),
                                cx: 144,
                                cy: 144,
                                r: 28.8,
                                stroke: "none",
                            }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: N.gx,
                    children: [
                        l &&
                            (0, r.jsx)(x.D, {
                                className: N.$2,
                                onClick: h,
                                children: (0, r.jsx)(b, { className: N.$2 }),
                            }),
                        d && S.length > 1
                            ? (0, r.jsx)("div", { className: N.YB, children: C.intl.string(C.t["Xy+S02"]) })
                            : null,
                    ],
                }),
                V,
            ],
        }),
    });
});
var T = n(805945);
n(980504);
var j = n(1986);
function k(e) {
    let {
            guildId: t,
            channel: n,
            width: y,
            height: v,
            keepOpen: x,
            interactive: w = !0,
            analyticsSource: E,
            onClose: C,
        } = e,
        N = (function (e) {
            let [t, n] = (0, o.yK)([p.A], () => [p.A.getSounds(), p.A.getFavorites()]);
            return i.useMemo(() => {
                let r = [],
                    i = [...e, "0"];
                function s(e, i) {
                    for (let s of t.get(e)?.sort((e, t) => h.default.compare(e.soundId, t.soundId)) ?? []) {
                        let e = n.has(s.soundId);
                        ((e && i) || (!e && !i)) && s.available && r.push(s);
                    }
                }
                return i.forEach((e) => s(e, !0)), i.forEach((e) => s(e, !1)), r;
            }, [t, n, e]);
        })((0, A.Y)(n, !0)),
        b = (0, g.T)(),
        O = i.useRef(null),
        [_, D] = i.useState(void 0),
        k = (0, o.bG)([d.A], () => d.A.getMediaSessionId()),
        { analyticsLocations: S } = (0, a.Ay)(l.A.SOUNDBOARD_WHEEL),
        L = i.useCallback(
            (e) => {
                (0, m.Ak)(e, n.id, S), C();
            },
            [S, n.id, C],
        );
    i.useEffect(() => {
        f.E7(), u.bW.loadIfNecessary();
    }, []),
        i.useEffect(() => {
            0 === N.length && 0 === b.length && C();
        }, [N.length, b, C]),
        i.useEffect(
            () => () => {
                let e = O.current;
                x || null == e || L(e);
            },
            [x, L],
        ),
        (0, c.A)(
            {
                type: s.ImpressionTypes.POPOUT,
                name: s.ImpressionNames.SOUNDBOARD_POPOUT,
                properties: { source: E, guild_id: t, media_session_id: k },
            },
            { disableTrack: !w },
        );
    let P = i.useCallback((e) => {
            (O.current = e), D(e?.soundId);
        }, []),
        M = i.useCallback(
            (e) => {
                if (null == e) return void P(null);
                let t = N[e];
                null != t && P(t);
            },
            [P, N],
        ),
        R = i.useCallback(
            (e) => {
                if (null == e) return;
                let t = N[e];
                null != t && L(t);
            },
            [N, L],
        ),
        U = i.useMemo(
            () =>
                N.map((e) =>
                    (0, r.jsx)(
                        T.Ay,
                        { interactive: w, className: j.a, sound: e, focused: _ === e.soundId, channel: n },
                        e.soundId,
                    ),
                ),
            [_, n, w, N],
        );
    return 0 === N.length
        ? null
        : (0, r.jsx)(a.f5, {
              value: S,
              children: (0, r.jsx)(I, {
                  wheelWidth: y,
                  wheelHeight: v,
                  itemWidth: 96,
                  itemHeight: 52,
                  showDeadZoneIndicator: !x,
                  activeItem: _,
                  onItemSelect: M,
                  onItemAction: R,
                  onClose: C,
                  interactive: w,
                  children: U,
              }),
          });
}
