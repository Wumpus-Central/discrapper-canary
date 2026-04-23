n.d(t, { A: () => g });
var i = n(627968),
    a = n(64700),
    l = n(503698),
    s = n.n(l),
    r = n(311907),
    o = n(506774),
    c = n(31728),
    d = n(164617),
    u = n(205297),
    p = n(334463),
    h = n(175203),
    _ = n(652215),
    m = n(806931),
    A = n(566555),
    x = n(604949);
let f = "CameraPreviewPosition";
function g(e) {
    let { width: t, onContextMenuParticipant: n, height: l, channel: g, participants: C, onSelectParticipant: y } = e,
        [v, E] = (function () {
            let [e, t] = a.useState(() => o.w.get(f, _.CUs.BOTTOM_RIGHT));
            return [
                e,
                a.useCallback((e) => {
                    o.w.set(f, e), t(e);
                }, []),
            ];
        })(),
        N = a.useRef(null),
        I = null == g.getGuildId() ? 70 : 50,
        j = (0, r.bG)([p.A], () => p.A.pipWidth(m.R8.CAMERA_PREVIEW)),
        T = C.length,
        b = j * T + 8 * (T - 1),
        S = a.useMemo(
            () => ({
                minWidth: m.mn[m.R8.CAMERA_PREVIEW] * T + 8 * (T - 1),
                maxWidth: m.cF[m.R8.CAMERA_PREVIEW] * T + 8 * (T - 1),
            }),
            [T],
        );
    a.useLayoutEffect(() => {
        N.current?.ensureIsInPosition();
    }, [C.length]);
    let R = a.useCallback(
            (e) => {
                let t = 0 === T ? e : (e - 8 * (T - 1)) / T;
                c.EB(t, m.R8.CAMERA_PREVIEW);
            },
            [T],
        ),
        P = a.useCallback(
            (e, t) => {
                E(t);
            },
            [E],
        );
    return (0, i.jsx)("div", {
        className: A.kL,
        children: (0, i.jsx)(u.S, {
            position: v,
            id: 0,
            width: b,
            ref: N,
            onMove: P,
            onResize: R,
            maxX: t,
            maxY: l,
            edgeOffsetTop: I,
            edgeOffsetBottom: 70,
            edgeOffsetLeft: 16,
            edgeOffsetRight: 16,
            resizeConfig: S,
            children: (0, i.jsx)("div", {
                className: A.iA,
                children: C.map((e) =>
                    (0, i.jsx)(
                        h.Ay,
                        {
                            participant: e,
                            channel: g,
                            onContextMenu: n,
                            className: s()(A.Vs, x.a8),
                            fit: h.Yl.COVER,
                            inCall: !0,
                            popoutType: d.N.NO_POPOUT,
                            width: 160,
                            onClick: y,
                        },
                        e.id,
                    ),
                ),
            }),
        }),
    });
}
