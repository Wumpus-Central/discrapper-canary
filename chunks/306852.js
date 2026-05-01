n.d(t, { A: () => f });
var i = n(627968),
    l = n(64700),
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
    x = n(566555),
    g = n(604949);
let C = "CameraPreviewPosition";
function f(e) {
    let { width: t, onContextMenuParticipant: n, height: a, channel: f, participants: E, onSelectParticipant: y } = e,
        [N, j] = (function () {
            let [e, t] = l.useState(() => o.w.get(C, m.CUs.BOTTOM_RIGHT));
            return [
                e,
                l.useCallback((e) => {
                    o.w.set(C, e), t(e);
                }, []),
            ];
        })(),
        v = l.useRef(null),
        I = null == f.getGuildId() ? 70 : 50,
        T = (0, r.bG)([h.A], () => h.A.pipWidth(A.R8.CAMERA_PREVIEW)),
        _ = E.length,
        R = T * _ + 8 * (_ - 1),
        S = l.useMemo(
            () => ({
                minWidth: A.mn[A.R8.CAMERA_PREVIEW] * _ + 8 * (_ - 1),
                maxWidth: A.cF[A.R8.CAMERA_PREVIEW] * _ + 8 * (_ - 1),
            }),
            [_],
        );
    l.useLayoutEffect(() => {
        v.current?.ensureIsInPosition();
    }, [E.length]);
    let P = l.useCallback(
            (e) => {
                let t = 0 === _ ? e : (e - 8 * (_ - 1)) / _;
                c.EB(t, A.R8.CAMERA_PREVIEW);
            },
            [_],
        ),
        O = l.useCallback(
            (e, t) => {
                j(t);
            },
            [j],
        );
    return (0, i.jsx)("div", {
        className: x.kL,
        children: (0, i.jsx)(u.S, {
            position: N,
            id: 0,
            width: R,
            ref: v,
            onMove: O,
            onResize: P,
            maxX: t,
            maxY: a,
            edgeOffsetTop: I,
            edgeOffsetBottom: 70,
            edgeOffsetLeft: 16,
            edgeOffsetRight: 16,
            resizeConfig: S,
            children: (0, i.jsx)("div", {
                className: x.iA,
                children: E.map((e) =>
                    (0, i.jsx)(
                        p.Ay,
                        {
                            participant: e,
                            channel: f,
                            onContextMenu: n,
                            className: s()(x.Vs, g.a8),
                            fit: p.Yl.COVER,
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
