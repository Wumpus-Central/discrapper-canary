n.d(t, { Ay: () => h, e9: () => g, qd: () => p });
var l = n(477900),
    i = n(582128),
    s = n(435558),
    r = n(451988),
    a = n(964486),
    o = n(652896),
    u = n(834757),
    c = n(290863),
    d = n(174459),
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
    f = (0, s.debounce)((e, t, n) => {
        let l = null,
            i = null;
        if (null != n && (0, o.wL)(n)) {
            let e = (0, o.Iy)(n),
                t = (0, u.Ee)(e, c.A);
            (l = t?.name ?? null), (i = t?.id ?? null);
        }
        d.default.track(m.HAw.VIDEO_STREAM_ZOOM_CHANGED, {
            zoom_level: e,
            method: t,
            share_application_name: l,
            share_application_id: i,
        });
    }, 2e3),
    x = i.memo(function (e) {
        let { streamKey: t, minZoom: n = 1, maxZoom: o = 5, children: u } = e,
            [c, d] = i.useState(n),
            [m, x] = i.useState(!1),
            [h, A] = i.useState(!1),
            [v, E] = i.useState(!1),
            [C, j] = i.useState(!1),
            [I, S] = i.useState(16 / 9),
            [_, N] = i.useState({ x: 0, y: 0 }),
            b = i.useRef(null),
            y = i.useRef(null);
        (0, a.l0)(() => {
            y.current?.stop();
        });
        let R = i.useCallback(
                (e, t) => {
                    if (null == b.current) return p;
                    let n = t ?? c,
                        l = b.current.clientWidth,
                        i = b.current.clientHeight,
                        r = (l * (n - 1)) / 2,
                        a = (i * (n - 1)) / 2;
                    return { x: (0, s.clamp)(e.x, -r, r), y: (0, s.clamp)(e.y, -a, a) };
                },
                [c],
            ),
            k = i.useCallback(
                (e, l, i) => {
                    let a = (0, s.clamp)(e, n, o);
                    if (null == l || a === c) return;
                    x(!0);
                    let u = a / c;
                    N((e) => R({ x: (e.x - l.x) * u + l.x, y: (e.y - l.y) * u + l.y }, a)),
                        d(a),
                        f(a, i, t),
                        null == y.current && (y.current = new r.Ep()),
                        y.current.start(2e3, () => {
                            x(!1);
                        });
                },
                [R, o, n, t, c],
            ),
            D = i.useMemo(
                () => ({
                    enabled: !0,
                    zoomLevel: c,
                    minZoom: n,
                    maxZoom: o,
                    setZoomLevel: d,
                    isZooming: m,
                    setIsZooming: x,
                    isDragging: h,
                    setIsDragging: A,
                    isWheeling: v,
                    setIsWheeling: E,
                    isSlidering: C,
                    setIsSlidering: j,
                    videoAspectRatio: I,
                    setVideoAspectRatio: S,
                    doZoom: k,
                    panOffset: _,
                    setPanOffset: N,
                    wrapperRef: b,
                    clampPanOffset: R,
                }),
                [R, k, h, C, v, m, o, n, _, I, c],
            );
        return (0, l.jsx)(g.Provider, { value: D, children: u });
    });
function h(e) {
    return e.enableZoom ? (0, l.jsx)(x, { ...e }) : e.children;
}
