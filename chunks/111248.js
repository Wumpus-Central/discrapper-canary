n.d(t, { Z: () => y }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
    s = n(433517),
    c = n(519938),
    u = n(598006),
    d = n(241915),
    p = n(366050),
    f = n(27457),
    h = n(981631),
    m = n(354459),
    g = n(330831),
    b = n(315091);
let _ = "CameraPreviewPosition";
function y(e) {
    let { width: t, onContextMenuParticipant: n, height: l, channel: y, participants: C, onSelectParticipant: v } = e,
        [O, x] = (function () {
            let [e, t] = i.useState(() => s.K.get(_, h.VD2.BOTTOM_RIGHT));
            return [
                e,
                i.useCallback((e) => {
                    s.K.set(_, e), t(e);
                }, []),
            ];
        })(),
        E = i.useRef(null),
        j = null == y.getGuildId() ? 70 : 50,
        S = (0, o.e7)([p.Z], () => p.Z.pipWidth(m.cL.CAMERA_PREVIEW)),
        P = C.length,
        I = S * P + 8 * (P - 1),
        Z = i.useMemo(
            () => ({
                minWidth: m.Rv[m.cL.CAMERA_PREVIEW] * P + 8 * (P - 1),
                maxWidth: m.$i[m.cL.CAMERA_PREVIEW] * P + 8 * (P - 1),
            }),
            [P],
        );
    i.useLayoutEffect(() => {
        var e;
        null == (e = E.current) || e.ensureIsInPosition();
    }, [C.length]);
    let T = i.useCallback(
            (e) => {
                let t = 0 === P ? e : (e - 8 * (P - 1)) / P;
                c.d7(t, m.cL.CAMERA_PREVIEW);
            },
            [P],
        ),
        N = i.useCallback(
            (e, t) => {
                x(t);
            },
            [x],
        );
    return (0, r.jsx)("div", {
        className: g.container,
        children: (0, r.jsx)(d._, {
            position: O,
            id: 0,
            width: I,
            ref: E,
            onMove: N,
            onResize: T,
            maxX: t,
            maxY: l,
            edgeOffsetTop: j,
            edgeOffsetBottom: 70,
            edgeOffsetLeft: 16,
            edgeOffsetRight: 16,
            resizeConfig: Z,
            children: (0, r.jsx)("div", {
                className: g.tileContainer,
                children: C.map((e) =>
                    (0, r.jsx)(
                        f.ZP,
                        {
                            participant: e,
                            channel: y,
                            onContextMenu: n,
                            className: a()(g.tile, b.elevationHigh),
                            fit: f.BP.COVER,
                            inCall: !0,
                            popoutType: u.P.NO_POPOUT,
                            width: 160,
                            onClick: v,
                        },
                        e.id,
                    ),
                ),
            }),
        }),
    });
}
