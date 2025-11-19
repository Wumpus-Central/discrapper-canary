n.d(t, { Z: () => C }), n(388685);
var i = n(54381),
    r = n(473749),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
    s = n(433517),
    c = n(519938),
    u = n(598006),
    d = n(241915),
    p = n(366050),
    h = n(27457),
    f = n(981631),
    m = n(354459),
    g = n(468032),
    b = n(285236);
let y = "CameraPreviewPosition";
function C(e) {
    let { width: t, onContextMenuParticipant: n, height: l, channel: C, participants: v, onSelectParticipant: _ } = e,
        [x, j] = (function () {
            let [e, t] = r.useState(() => s.K.get(y, f.VD2.BOTTOM_RIGHT));
            return [
                e,
                r.useCallback((e) => {
                    s.K.set(y, e), t(e);
                }, []),
            ];
        })(),
        O = r.useRef(null),
        E = null == C.getGuildId() ? 70 : 50,
        S = (0, o.e7)([p.Z], () => p.Z.pipWidth(m.cL.CAMERA_PREVIEW)),
        P = v.length,
        I = S * P + 8 * (P - 1),
        Z = r.useMemo(
            () => ({
                minWidth: m.Rv[m.cL.CAMERA_PREVIEW] * P + 8 * (P - 1),
                maxWidth: m.$i[m.cL.CAMERA_PREVIEW] * P + 8 * (P - 1),
            }),
            [P],
        );
    r.useLayoutEffect(() => {
        var e;
        null == (e = O.current) || e.ensureIsInPosition();
    }, [v.length]);
    let T = r.useCallback(
            (e) => {
                let t = 0 === P ? e : (e - 8 * (P - 1)) / P;
                c.d7(t, m.cL.CAMERA_PREVIEW);
            },
            [P],
        ),
        N = r.useCallback(
            (e, t) => {
                j(t);
            },
            [j],
        );
    return (0, i.jsx)("div", {
        className: g.container,
        children: (0, i.jsx)(d._, {
            position: x,
            id: 0,
            width: I,
            ref: O,
            onMove: N,
            onResize: T,
            maxX: t,
            maxY: l,
            edgeOffsetTop: E,
            edgeOffsetBottom: 70,
            edgeOffsetLeft: 16,
            edgeOffsetRight: 16,
            resizeConfig: Z,
            children: (0, i.jsx)("div", {
                className: g.tileContainer,
                children: v.map((e) =>
                    (0, i.jsx)(
                        h.ZP,
                        {
                            participant: e,
                            channel: C,
                            onContextMenu: n,
                            className: a()(g.tile, b.elevationHigh),
                            fit: h.BP.COVER,
                            inCall: !0,
                            popoutType: u.P.NO_POPOUT,
                            width: 160,
                            onClick: _,
                        },
                        e.id,
                    ),
                ),
            }),
        }),
    });
}
