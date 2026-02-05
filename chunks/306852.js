n.d(t, { A: () => f });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(311907),
    o = n(506774),
    d = n(31728),
    c = n(164617),
    u = n(205297),
    h = n(334463),
    A = n(175203),
    g = n(652215),
    m = n(806931),
    p = n(697166),
    _ = n(976092);
let x = "CameraPreviewPosition";
function f(e) {
    let { width: t, onContextMenuParticipant: n, height: s, channel: f, participants: E, onSelectParticipant: C } = e,
        [I, S] = (function () {
            let [e, t] = l.useState(() => o.w.get(x, g.CUs.BOTTOM_RIGHT));
            return [
                e,
                l.useCallback((e) => {
                    o.w.set(x, e), t(e);
                }, []),
            ];
        })(),
        b = l.useRef(null),
        N = null == f.getGuildId() ? 70 : 50,
        T = (0, r.bG)([h.A], () => h.A.pipWidth(m.R8.CAMERA_PREVIEW)),
        j = E.length,
        v = T * j + 8 * (j - 1),
        y = l.useMemo(
            () => ({
                minWidth: m.mn[m.R8.CAMERA_PREVIEW] * j + 8 * (j - 1),
                maxWidth: m.cF[m.R8.CAMERA_PREVIEW] * j + 8 * (j - 1),
            }),
            [j],
        );
    l.useLayoutEffect(() => {
        b.current?.ensureIsInPosition();
    }, [E.length]);
    let R = l.useCallback(
            (e) => {
                let t = 0 === j ? e : (e - 8 * (j - 1)) / j;
                d.EB(t, m.R8.CAMERA_PREVIEW);
            },
            [j],
        ),
        O = l.useCallback(
            (e, t) => {
                S(t);
            },
            [S],
        );
    return (0, i.jsx)("div", {
        className: p.kL,
        children: (0, i.jsx)(u.S, {
            position: I,
            id: 0,
            width: v,
            ref: b,
            onMove: O,
            onResize: R,
            maxX: t,
            maxY: s,
            edgeOffsetTop: N,
            edgeOffsetBottom: 70,
            edgeOffsetLeft: 16,
            edgeOffsetRight: 16,
            resizeConfig: y,
            children: (0, i.jsx)("div", {
                className: p.iA,
                children: E.map((e) =>
                    (0, i.jsx)(
                        A.Ay,
                        {
                            participant: e,
                            channel: f,
                            onContextMenu: n,
                            className: a()(p.Vs, _.a8),
                            fit: A.Yl.COVER,
                            inCall: !0,
                            popoutType: c.N.NO_POPOUT,
                            width: 160,
                            onClick: C,
                        },
                        e.id,
                    ),
                ),
            }),
        }),
    });
}
