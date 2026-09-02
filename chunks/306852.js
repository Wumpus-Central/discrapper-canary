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
    f = n(366700),
    x = n(969426);
let g = "CameraPreviewPosition";
function C(e) {
    let { width: t, onContextMenuParticipant: n, height: a, channel: C, participants: y, onSelectParticipant: j } = e,
        [I, N] = (function () {
            let [e, t] = l.useState(() => o.w.get(g, m.CUs.BOTTOM_RIGHT));
            return [
                e,
                l.useCallback((e) => {
                    o.w.set(g, e), t(e);
                }, []),
            ];
        })(),
        v = l.useRef(null),
        E = null == C.getGuildId() ? 70 : 50,
        b = (0, r.bG)([h.A], () => h.A.pipWidth(A.R8.CAMERA_PREVIEW)),
        _ = y.length,
        T = b * _ + 8 * (_ - 1),
        S = l.useMemo(
            () => ({
                minWidth: A.mn[A.R8.CAMERA_PREVIEW] * _ + 8 * (_ - 1),
                maxWidth: A.cF[A.R8.CAMERA_PREVIEW] * _ + 8 * (_ - 1),
            }),
            [_],
        );
    l.useLayoutEffect(() => {
        v.current?.ensureIsInPosition();
    }, [y.length]);
    let R = l.useCallback(
            (e) => {
                let t = 0 === _ ? e : (e - 8 * (_ - 1)) / _;
                c.EB(t, A.R8.CAMERA_PREVIEW);
            },
            [_],
        ),
        L = l.useCallback(
            (e, t) => {
                N(t);
            },
            [N],
        );
    return (0, i.jsx)("div", {
        className: f.kL,
        children: (0, i.jsx)(u.S, {
            position: I,
            id: 0,
            width: T,
            ref: v,
            onMove: L,
            onResize: R,
            maxX: t,
            maxY: a,
            edgeOffsetTop: E,
            edgeOffsetBottom: 70,
            edgeOffsetLeft: 16,
            edgeOffsetRight: 16,
            resizeConfig: S,
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
