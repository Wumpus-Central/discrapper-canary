n.d(t, { A: () => k }), n(321073);
var r = n(477900),
    i = n(582128),
    s = n(562708),
    o = n(17928),
    l = n(793574),
    a = n(688810),
    c = n(139286),
    d = n(594061),
    u = n(763827),
    h = n(935208),
    f = n(796774),
    g = n(209932),
    p = n(813564),
    m = n(933204),
    A = n(805143),
    v = n(435558),
    y = n.n(v),
    x = n(939249);
function w(e, t, n) {
    return (n.y - e.y) * (t.x - e.x) > (t.y - e.y) * (n.x - e.x);
}
function E(e, t, n, r) {
    return w(e, n, r) !== w(t, n, r) && w(e, t, n) !== w(e, t, r);
}
var C = n(375708),
    b = n(824795);
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
            itemWidth: s,
            itemHeight: o,
            showDeadZoneIndicator: l,
            activeItem: a,
            onItemSelect: c,
            onItemAction: d,
            interactive: u = !0,
            onClose: h,
            children: f,
        } = e,
        g = i.useRef(null),
        p = i.useRef([]),
        m = i.useRef(!1),
        A = i.useRef(null),
        [w, I] = i.useState(0),
        [T, j] = i.useState({ x: 0, y: 0 }),
        k = Math.abs(T.x) + Math.abs(T.y) > 0,
        S = i.useMemo(() => y().chunk(f, _), [f]),
        P = i.useCallback(
            (e, t) => {
                null == p.current[w] ? (p.current[w] = []) : (p.current[w][t] = e);
            },
            [w],
        ),
        L = i.useCallback(
            (e, t) => {
                (A.current = t), c(_ * e + t);
            },
            [c],
        ),
        R = i.useCallback(() => {
            (A.current = null), c(null);
        }, [c]),
        M = i.useCallback(
            (e) => {
                R(), (m.current = e);
            },
            [R],
        ),
        U = i.useCallback((e, t, n) => {
            let r, i, s;
            if (m.current) return void j({ x: 0, y: 0 });
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
                null != A.current && (e.preventDefault(), e.stopPropagation(), d?.(_ * w + A.current));
            },
            [d, w],
        ),
        G = i.useMemo(
            () =>
                (0, v.throttle)((e) => {
                    var r;
                    let i;
                    if (null == g.current) return;
                    let s = g.current.getBoundingClientRect(),
                        o = { x: s.left + s.width / 2, y: s.top + s.height / 2 },
                        l = { x: e.clientX, y: e.clientY };
                    if ((U(l, o, Math.max(t, n)), m.current)) {
                        null != a && R();
                        return;
                    }
                    let c =
                        ((r = Math.max(t, n)),
                        (i = Math.sqrt(Math.pow(o.x - l.x, 2) + Math.pow(o.y - l.y, 2))),
                        { x: l.x + ((l.x - o.x) / i) * r, y: l.y + ((l.y - o.y) / i) * r });
                    for (let e = 0; e < p.current[w].length; e++) {
                        let t = p.current[w][e];
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
                            return void L(w, e);
                    }
                    R();
                }, 16),
            [a, U, R, L, w, n, t],
        ),
        F = i.useCallback(
            (e) => {
                if (!u) return;
                let t = w + (e.deltaY > 0 ? 1 : -1);
                t >= 0 &&
                    t < S.length &&
                    (null != A.current && (S[t].length > A.current ? L(t, A.current) : R()), I(t));
            },
            [u, w, S, L, R],
        ),
        B = i.useMemo(
            () =>
                S[w].map((e, i) => {
                    let l = O[i];
                    if (null == l) throw Error(`Too many items supplied ${f.length} expected max of ${O.length}`);
                    let a = D(l.x, t, s),
                        c = D(l.y, n, o);
                    return (0, r.jsx)(
                        "div",
                        {
                            ref: (e) => P(e, i),
                            className: b.Tj,
                            style: { left: a, top: c, width: s, height: o },
                            children: e,
                        },
                        i,
                    );
                }),
            [S, w, t, s, n, o, f.length, P],
        );
    return (0, r.jsx)(x.D, {
        className: b.Pw,
        onMouseMove: G,
        onWheel: F,
        onClick: K,
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
                                l &&
                                    (0, r.jsx)("circle", {
                                        className: b.u1,
                                        onMouseEnter: () => M(!0),
                                        onMouseLeave: () => M(!1),
                                        cx: 144,
                                        cy: 144,
                                        r: 28.8,
                                    }),
                                k && (0, r.jsx)("circle", { className: b.JV, cx: 144 + T.x, cy: 144 + T.y, r: 28.8 }),
                            ],
                        }),
                        l &&
                            (0, r.jsx)("circle", {
                                className: b.u1,
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
                    className: b.gx,
                    children: [
                        l &&
                            (0, r.jsx)(x.D, {
                                className: b.$2,
                                onClick: h,
                                children: (0, r.jsx)(N, { className: b.$2 }),
                            }),
                        u && S.length > 1
                            ? (0, r.jsx)("div", { className: b.YB, children: C.intl.string(C.t["Xy+S02"]) })
                            : null,
                    ],
                }),
                B,
            ],
        }),
    });
});
var T = n(805945);
n(980504);
var j = n(641386);
function k(e) {
    let {
            guildId: t,
            channel: n,
            width: v,
            height: y,
            keepOpen: x,
            interactive: w = !0,
            analyticsSource: E,
            onClose: C,
        } = e,
        b = (function (e) {
            let [t, n] = (0, o.yK)([g.A], () => [g.A.getSounds(), g.A.getFavorites()]);
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
        N = (0, m.T)(),
        O = i.useRef(null),
        [_, D] = i.useState(void 0),
        k = (0, o.bG)([u.A], () => u.A.getMediaSessionId()),
        { analyticsLocations: S } = (0, a.Ay)(l.A.SOUNDBOARD_WHEEL),
        P = i.useCallback(
            (e) => {
                (0, p.Ak)(e, n.id, S), C();
            },
            [S, n.id, C],
        );
    i.useEffect(() => {
        f.E7(), d.bW.loadIfNecessary();
    }, []),
        i.useEffect(() => {
            0 === b.length && 0 === N.length && C();
        }, [b.length, N, C]),
        i.useEffect(
            () => () => {
                let e = O.current;
                x || null == e || P(e);
            },
            [x, P],
        ),
        (0, c.A)(
            {
                type: s.ImpressionTypes.POPOUT,
                name: s.ImpressionNames.SOUNDBOARD_POPOUT,
                properties: { source: E, guild_id: t, media_session_id: k },
            },
            { disableTrack: !w },
        );
    let L = i.useCallback((e) => {
            (O.current = e), D(e?.soundId);
        }, []),
        R = i.useCallback(
            (e) => {
                if (null == e) return void L(null);
                let t = b[e];
                null != t && L(t);
            },
            [L, b],
        ),
        M = i.useCallback(
            (e) => {
                if (null == e) return;
                let t = b[e];
                null != t && P(t);
            },
            [b, P],
        ),
        U = i.useMemo(
            () =>
                b.map((e) =>
                    (0, r.jsx)(
                        T.Ay,
                        { interactive: w, className: j.a, sound: e, focused: _ === e.soundId, channel: n },
                        e.soundId,
                    ),
                ),
            [_, n, w, b],
        );
    return 0 === b.length
        ? null
        : (0, r.jsx)(a.f5, {
              value: S,
              children: (0, r.jsx)(I, {
                  wheelWidth: v,
                  wheelHeight: y,
                  itemWidth: 96,
                  itemHeight: 52,
                  showDeadZoneIndicator: !x,
                  activeItem: _,
                  onItemSelect: R,
                  onItemAction: M,
                  onClose: C,
                  interactive: w,
                  children: U,
              }),
          });
}
