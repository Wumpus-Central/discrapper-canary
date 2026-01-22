n.d(t, { A: () => y }), n(896048);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(311907),
    o = n(506774),
    c = n(31728),
    u = n(164617),
    d = n(205297),
    f = n(334463),
    p = n(175203),
    h = n(652215),
    b = n(806931),
    g = n(697166),
    m = n(976092);
let A = "CameraPreviewPosition";
function y(e) {
    let { width: t, onContextMenuParticipant: n, height: i, channel: y, participants: O, onSelectParticipant: j } = e,
        [v, x] = (function () {
            let [e, t] = l.useState(() => o.w.get(A, h.CUs.BOTTOM_RIGHT));
            return [
                e,
                l.useCallback((e) => {
                    o.w.set(A, e), t(e);
                }, []),
            ];
        })(),
        E = l.useRef(null),
        _ = null == y.getGuildId() ? 70 : 50,
        C = (0, s.bG)([f.A], () => f.A.pipWidth(b.R8.CAMERA_PREVIEW)),
        S = O.length,
        I = C * S + 8 * (S - 1),
        N = l.useMemo(
            () => ({
                minWidth: b.mn[b.R8.CAMERA_PREVIEW] * S + 8 * (S - 1),
                maxWidth: b.cF[b.R8.CAMERA_PREVIEW] * S + 8 * (S - 1),
            }),
            [S],
        );
    l.useLayoutEffect(() => {
        var e;
        null == (e = E.current) || e.ensureIsInPosition();
    }, [O.length]);
    let T = l.useCallback(
            (e) => {
                let t = 0 === S ? e : (e - 8 * (S - 1)) / S;
                c.EB(t, b.R8.CAMERA_PREVIEW);
            },
            [S],
        ),
        P = l.useCallback(
            (e, t) => {
                x(t);
            },
            [x],
        );
    return (0, r.jsx)("div", {
        className: g.kL,
        children: (0, r.jsx)(d.S, {
            position: v,
            id: 0,
            width: I,
            ref: E,
            onMove: P,
            onResize: T,
            maxX: t,
            maxY: i,
            edgeOffsetTop: _,
            edgeOffsetBottom: 70,
            edgeOffsetLeft: 16,
            edgeOffsetRight: 16,
            resizeConfig: N,
            children: (0, r.jsx)("div", {
                className: g.iA,
                children: O.map((e) =>
                    (0, r.jsx)(
                        p.Ay,
                        {
                            participant: e,
                            channel: y,
                            onContextMenu: n,
                            className: a()(g.Vs, m.a8),
                            fit: p.Yl.COVER,
                            inCall: !0,
                            popoutType: u.N.NO_POPOUT,
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
