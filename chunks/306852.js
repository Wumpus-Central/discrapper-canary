n.d(t, { A: () => C });
var i = n(477900),
    l = n(582128),
    a = n(503698),
    s = n.n(a),
    r = n(17928),
    o = n(506774),
    c = n(31728),
    d = n(164617),
    u = n(205297),
    h = n(334463),
    p = n(175203),
    m = n(652215),
    A = n(806931),
    f = n(705379),
    x = n(997213);
let g = "CameraPreviewPosition";
function C(e) {
    let { width: t, onContextMenuParticipant: n, height: a, channel: C, participants: y, onSelectParticipant: j } = e,
        [v, E] = (function () {
            let [e, t] = l.useState(() => o.w.get(g, m.CUs.BOTTOM_RIGHT));
            return [
                e,
                l.useCallback((e) => {
                    o.w.set(g, e), t(e);
                }, []),
            ];
        })(),
        N = l.useRef(null),
        I = null == C.getGuildId() ? 70 : 50,
        T = (0, r.bG)([h.A], () => h.A.pipWidth(A.R8.CAMERA_PREVIEW)),
        b = y.length,
        _ = T * b + 8 * (b - 1),
        R = l.useMemo(
            () => ({
                minWidth: A.mn[A.R8.CAMERA_PREVIEW] * b + 8 * (b - 1),
                maxWidth: A.cF[A.R8.CAMERA_PREVIEW] * b + 8 * (b - 1),
            }),
            [b],
        );
    l.useLayoutEffect(() => {
        N.current?.ensureIsInPosition();
    }, [y.length]);
    let S = l.useCallback(
            (e) => {
                let t = 0 === b ? e : (e - 8 * (b - 1)) / b;
                c.EB(t, A.R8.CAMERA_PREVIEW);
            },
            [b],
        ),
        P = l.useCallback(
            (e, t) => {
                E(t);
            },
            [E],
        );
    return (0, i.jsx)("div", {
        className: f.kL,
        children: (0, i.jsx)(u.S, {
            position: v,
            id: 0,
            width: _,
            ref: N,
            onMove: P,
            onResize: S,
            maxX: t,
            maxY: a,
            edgeOffsetTop: I,
            edgeOffsetBottom: 70,
            edgeOffsetLeft: 16,
            edgeOffsetRight: 16,
            resizeConfig: R,
            children: (0, i.jsx)("div", {
                className: f.iA,
                children: y.map((e) =>
                    (0, i.jsx)(
                        p.Ay,
                        {
                            participant: e,
                            channel: C,
                            onContextMenu: n,
                            className: s()(f.Vs, x.a8),
                            fit: p.Yl.COVER,
                            inCall: !0,
                            popoutType: d.N.NO_POPOUT,
                            width: 160,
                            onClick: j,
                        },
                        e.id,
                    ),
                ),
            }),
        }),
    });
}
