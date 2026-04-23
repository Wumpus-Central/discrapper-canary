n.d(t, { Ay: () => h, e9: () => m, qd: () => f });
var i = n(627968),
    l = n(64700),
    a = n(735438),
    r = n(451988),
    s = n(964486),
    o = n(652896),
    d = n(834757),
    c = n(290863),
    u = n(954571),
    _ = n(652215);
let f = { x: 0, y: 0 },
    m = l.createContext({
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
        panOffset: f,
        setPanOffset: () => {},
        clampPanOffset: () => f,
        doZoom: () => {},
        wrapperRef: l.createRef(),
    }),
    p = (0, a.debounce)((e, t, n) => {
        let i = null,
            l = null;
        if (null != n && (0, o.wL)(n)) {
            let e = (0, o.Iy)(n),
                t = (0, d.Ee)(e, c.A);
            (i = t?.name ?? null), (l = t?.id ?? null);
        }
        u.default.track(_.HAw.VIDEO_STREAM_ZOOM_CHANGED, {
            zoom_level: e,
            method: t,
            share_application_name: i,
            share_application_id: l,
        });
    }, 2e3),
    g = l.memo(function (e) {
        let { streamKey: t, minZoom: n = 1, maxZoom: o = 5, children: d } = e,
            [c, u] = l.useState(n),
            [_, g] = l.useState(!1),
            [h, A] = l.useState(!1),
            [x, v] = l.useState(!1),
            [I, E] = l.useState(!1),
            [C, j] = l.useState(16 / 9),
            [N, y] = l.useState({ x: 0, y: 0 }),
            b = l.useRef(null),
            S = l.useRef(null);
        (0, s.l0)(() => {
            S.current?.stop();
        });
        let w = l.useCallback(
                (e, t) => {
                    if (null == b.current) return f;
                    let n = t ?? c,
                        i = b.current.clientWidth,
                        l = b.current.clientHeight,
                        r = (i * (n - 1)) / 2,
                        s = (l * (n - 1)) / 2;
                    return { x: (0, a.clamp)(e.x, -r, r), y: (0, a.clamp)(e.y, -s, s) };
                },
                [c],
            ),
            T = l.useCallback(
                (e, i, l) => {
                    let s = (0, a.clamp)(e, n, o);
                    if (null == i || s === c) return;
                    g(!0);
                    let d = s / c;
                    y((e) => w({ x: (e.x - i.x) * d + i.x, y: (e.y - i.y) * d + i.y }, s)),
                        u(s),
                        p(s, l, t),
                        null == S.current && (S.current = new r.Ep()),
                        S.current.start(2e3, () => {
                            g(!1);
                        });
                },
                [w, o, n, t, c],
            ),
            k = l.useMemo(
                () => ({
                    enabled: !0,
                    zoomLevel: c,
                    minZoom: n,
                    maxZoom: o,
                    setZoomLevel: u,
                    isZooming: _,
                    setIsZooming: g,
                    isDragging: h,
                    setIsDragging: A,
                    isWheeling: x,
                    setIsWheeling: v,
                    isSlidering: I,
                    setIsSlidering: E,
                    videoAspectRatio: C,
                    setVideoAspectRatio: j,
                    doZoom: T,
                    panOffset: N,
                    setPanOffset: y,
                    wrapperRef: b,
                    clampPanOffset: w,
                }),
                [w, T, h, I, x, _, o, n, N, C, c],
            );
        return (0, i.jsx)(m.Provider, { value: k, children: d });
    });
function h(e) {
    return e.enableZoom ? (0, i.jsx)(g, { ...e }) : e.children;
}
