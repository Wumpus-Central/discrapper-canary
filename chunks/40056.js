n.d(t, { Ay: () => x, e9: () => g, qd: () => p });
var i = n(477900),
    l = n(582128),
    s = n(435558),
    r = n(451988),
    a = n(964486),
    o = n(652896),
    u = n(834757),
    c = n(290863),
    d = n(174459),
    m = n(652215);
let p = { x: 0, y: 0 },
    g = l.createContext({
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
        wrapperRef: l.createRef(),
    }),
    f = (0, s.debounce)((e, t, n) => {
        let i = null,
            l = null;
        if (null != n && (0, o.wL)(n)) {
            let e = (0, o.Iy)(n),
                t = (0, u.Ee)(e, c.A);
            ((i = t?.name ?? null), (l = t?.id ?? null));
        }
        d.default.track(m.HAw.VIDEO_STREAM_ZOOM_CHANGED, {
            zoom_level: e,
            method: t,
            share_application_name: i,
            share_application_id: l,
        });
    }, 2e3),
    h = l.memo(function (e) {
        let { streamKey: t, minZoom: n = 1, maxZoom: o = 5, children: u } = e,
            [c, d] = l.useState(n),
            [m, h] = l.useState(!1),
            [x, A] = l.useState(!1),
            [v, E] = l.useState(!1),
            [C, j] = l.useState(!1),
            [I, S] = l.useState(16 / 9),
            [_, b] = l.useState({ x: 0, y: 0 }),
            N = l.useRef(null),
            y = l.useRef(null);
        (0, a.l0)(() => {
            y.current?.stop();
        });
        let T = l.useCallback(
                (e, t) => {
                    if (null == N.current) return p;
                    let n = t ?? c,
                        i = N.current.clientWidth,
                        l = N.current.clientHeight,
                        r = (i * (n - 1)) / 2,
                        a = (l * (n - 1)) / 2;
                    return { x: (0, s.clamp)(e.x, -r, r), y: (0, s.clamp)(e.y, -a, a) };
                },
                [c],
            ),
            L = l.useCallback(
                (e, i, l) => {
                    let a = (0, s.clamp)(e, n, o);
                    if (null == i || a === c) return;
                    h(!0);
                    let u = a / c;
                    (b((e) => T({ x: (e.x - i.x) * u + i.x, y: (e.y - i.y) * u + i.y }, a)),
                        d(a),
                        f(a, l, t),
                        null == y.current && (y.current = new r.Ep()),
                        y.current.start(2e3, () => {
                            h(!1);
                        }));
                },
                [T, o, n, t, c],
            ),
            D = l.useMemo(
                () => ({
                    enabled: !0,
                    zoomLevel: c,
                    minZoom: n,
                    maxZoom: o,
                    setZoomLevel: d,
                    isZooming: m,
                    setIsZooming: h,
                    isDragging: x,
                    setIsDragging: A,
                    isWheeling: v,
                    setIsWheeling: E,
                    isSlidering: C,
                    setIsSlidering: j,
                    videoAspectRatio: I,
                    setVideoAspectRatio: S,
                    doZoom: L,
                    panOffset: _,
                    setPanOffset: b,
                    wrapperRef: N,
                    clampPanOffset: T,
                }),
                [T, L, x, C, v, m, o, n, _, I, c],
            );
        return (0, i.jsx)(g.Provider, { value: D, children: u });
    });
function x(e) {
    return e.enableZoom ? (0, i.jsx)(h, { ...e }) : e.children;
}
