"use strict";
n.d(t, { A: () => x });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(311907),
    o = n(506774),
    c = n(31728),
    d = n(164617),
    u = n(205297),
    h = n(334463),
    A = n(175203),
    p = n(652215),
    g = n(806931),
    m = n(697166),
    _ = n(976092);
let f = "CameraPreviewPosition";
function x(e) {
    let { width: t, onContextMenuParticipant: n, height: l, channel: x, participants: C, onSelectParticipant: E } = e,
        [I, b] = (function () {
            let [e, t] = s.useState(() => o.w.get(f, p.CUs.BOTTOM_RIGHT));
            return [
                e,
                s.useCallback((e) => {
                    o.w.set(f, e), t(e);
                }, []),
            ];
        })(),
        N = s.useRef(null),
        S = null == x.getGuildId() ? 70 : 50,
        T = (0, a.bG)([h.A], () => h.A.pipWidth(g.R8.CAMERA_PREVIEW)),
        v = C.length,
        y = T * v + 8 * (v - 1),
        j = s.useMemo(
            () => ({
                minWidth: g.mn[g.R8.CAMERA_PREVIEW] * v + 8 * (v - 1),
                maxWidth: g.cF[g.R8.CAMERA_PREVIEW] * v + 8 * (v - 1),
            }),
            [v],
        );
    s.useLayoutEffect(() => {
        N.current?.ensureIsInPosition();
    }, [C.length]);
    let R = s.useCallback(
            (e) => {
                let t = 0 === v ? e : (e - 8 * (v - 1)) / v;
                c.EB(t, g.R8.CAMERA_PREVIEW);
            },
            [v],
        ),
        O = s.useCallback(
            (e, t) => {
                b(t);
            },
            [b],
        );
    return (0, i.jsx)("div", {
        className: m.kL,
        children: (0, i.jsx)(u.S, {
            position: I,
            id: 0,
            width: y,
            ref: N,
            onMove: O,
            onResize: R,
            maxX: t,
            maxY: l,
            edgeOffsetTop: S,
            edgeOffsetBottom: 70,
            edgeOffsetLeft: 16,
            edgeOffsetRight: 16,
            resizeConfig: j,
            children: (0, i.jsx)("div", {
                className: m.iA,
                children: C.map((e) =>
                    (0, i.jsx)(
                        A.Ay,
                        {
                            participant: e,
                            channel: x,
                            onContextMenu: n,
                            className: r()(m.Vs, _.a8),
                            fit: A.Yl.COVER,
                            inCall: !0,
                            popoutType: d.N.NO_POPOUT,
                            width: 160,
                            onClick: E,
                        },
                        e.id,
                    ),
                ),
            }),
        }),
    });
}
