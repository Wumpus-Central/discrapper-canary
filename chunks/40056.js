var l = n(477900),
    i = n(582128),
    r = n(435558),
    s = n(451988),
    a = n(964486),
    o = n(652896),
    u = n(834757),
    c = n(290863),
    d = n(129230),
    m = n(652215);
let p = { x: 0, y: 0 },
    g = i.createContext({
        enabled: !1,
        zoomLevel: 1,
        minZoom: 1,
        maxZoom: 5,
        setZoomLevel: () => {},
        isZooming: !1,
        setIsZooming: () => {},
        isDragging: !1,
        setIsDragging: () => {},
        isWheeling: !1,
        setIsWheeling: () => {},
        isSlidering: !1,
        setIsSlidering: () => {},
        videoAspectRatio: 16 / 9,
        setVideoAspectRatio: () => {},
        panOffset: p,
        setPanOffset: () => {},
        clampPanOffset: () => p,
        doZoom: () => {},
        wrapperRef: i.createRef(),
    }),
    f = (0, r.debounce)((e, t, n) => {
        let l = null,
            i = null;
        if (null != n && (0, o.wL)(n)) {
            let e = (0, o.Iy)(n),
                t = (0, u.Ee)(e, c.A);
            ((l = t?.name ?? null), (i = t?.id ?? null));
        }
        d.default.track(m.HAw.VIDEO_STREAM_ZOOM_CHANGED, {
            zoom_level: e,
            method: t,
            share_application_name: l,
            share_application_id: i,
        });
    }, 2e3),
    h = i.memo(function (e) {
        let { streamKey: t, minZoom: n = 1, maxZoom: o = 5, children: u } = e,
            [c, d] = i.useState(n),
            [m, h] = i.useState(!1),
            [A, x] = i.useState(!1),
            [v, E] = i.useState(!1),
            [C, j] = i.useState(!1),
            [S, b] = i.useState(16 / 9),
            [I, y] = i.useState({ x: 0, y: 0 }),
            _ = i.useRef(null),
            N = i.useRef(null);
        (0, a.l0)(() => {
            N.current?.stop();
        });
        let w = i.useCallback(
                (e, t) => {
                    if (null == _.current) return p;
                    let n = t ?? c,
                        l = _.current.clientWidth,
                        i = _.current.clientHeight,
                        s = (l * (n - 1)) / 2,
                        a = (i * (n - 1)) / 2;
                    return { x: (0, r.clamp)(e.x, -s, s), y: (0, r.clamp)(e.y, -a, a) };
                },
                [c],
            ),
            k = i.useCallback(
                (e, l, i) => {
                    let a = (0, r.clamp)(e, n, o);
                    if (null == l || a === c) return;
                    h(!0);
                    let u = a / c;
                    (y((e) => w({ x: (e.x - l.x) * u + l.x, y: (e.y - l.y) * u + l.y }, a)),
                        d(a),
                        f(a, i, t),
                        null == N.current && (N.current = new s.Ep()),
                        N.current.start(2e3, () => {
                            h(!1);
                        }));
                },
                [w, o, n, t, c],
            ),
            R = i.useMemo(
                () => ({
                    enabled: !0,
                    zoomLevel: c,
                    minZoom: n,
                    maxZoom: o,
                    setZoomLevel: d,
                    isZooming: m,
                    setIsZooming: h,
                    isDragging: A,
                    setIsDragging: x,
                    isWheeling: v,
                    setIsWheeling: E,
                    isSlidering: C,
                    setIsSlidering: j,
                    videoAspectRatio: S,
                    setVideoAspectRatio: b,
                    doZoom: k,
                    panOffset: I,
                    setPanOffset: y,
                    wrapperRef: _,
                    clampPanOffset: w,
                }),
                [w, k, A, C, v, m, o, n, I, S, c],
            );
        return (0, l.jsx)(g.Provider, { value: R, children: u });
    });
n.d(
    t,
    {},
    {
        Ay: function (e) {
            return e.enableZoom ? (0, l.jsx)(h, { ...e }) : e.children;
        },
        e9: g,
        qd: p,
    },
);
