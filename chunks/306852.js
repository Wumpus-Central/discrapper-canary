n.d(t, { A: () => x });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(311907),
    o = n(506774),
    c = n(31728),
    d = n(164617),
    u = n(205297),
    h = n(334463),
    A = n(175203),
    _ = n(652215),
    m = n(806931),
    g = n(143275),
    p = n(778437);
let f = "CameraPreviewPosition";
function x(e) {
    let { width: t, onContextMenuParticipant: n, height: s, channel: x, participants: E, onSelectParticipant: I } = e,
        [C, N] = (function () {
            let [e, t] = l.useState(() => o.w.get(f, _.CUs.BOTTOM_RIGHT));
            return [
                e,
                l.useCallback((e) => {
                    o.w.set(f, e), t(e);
                }, []),
            ];
        })(),
        T = l.useRef(null),
        S = null == x.getGuildId() ? 70 : 50,
        b = (0, r.bG)([h.A], () => h.A.pipWidth(m.R8.CAMERA_PREVIEW)),
        y = E.length,
        v = b * y + 8 * (y - 1),
        j = l.useMemo(
            () => ({
                minWidth: m.mn[m.R8.CAMERA_PREVIEW] * y + 8 * (y - 1),
                maxWidth: m.cF[m.R8.CAMERA_PREVIEW] * y + 8 * (y - 1),
            }),
            [y],
        );
    l.useLayoutEffect(() => {
        T.current?.ensureIsInPosition();
    }, [E.length]);
    let R = l.useCallback(
            (e) => {
                let t = 0 === y ? e : (e - 8 * (y - 1)) / y;
                c.EB(t, m.R8.CAMERA_PREVIEW);
            },
            [y],
        ),
        O = l.useCallback(
            (e, t) => {
                N(t);
            },
            [N],
        );
    return (0, i.jsx)("div", {
        className: g.kL,
        children: (0, i.jsx)(u.S, {
            position: C,
            id: 0,
            width: v,
            ref: T,
            onMove: O,
            onResize: R,
            maxX: t,
            maxY: s,
            edgeOffsetTop: S,
            edgeOffsetBottom: 70,
            edgeOffsetLeft: 16,
            edgeOffsetRight: 16,
            resizeConfig: j,
            children: (0, i.jsx)("div", {
                className: g.iA,
                children: E.map((e) =>
                    (0, i.jsx)(
                        A.Ay,
                        {
                            participant: e,
                            channel: x,
                            onContextMenu: n,
                            className: a()(g.Vs, p.a8),
                            fit: A.Yl.COVER,
                            inCall: !0,
                            popoutType: d.N.NO_POPOUT,
                            width: 160,
                            onClick: I,
                        },
                        e.id,
                    ),
                ),
            }),
        }),
    });
}
