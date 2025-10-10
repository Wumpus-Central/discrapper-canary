n.d(t, { Z: () => C }), n(388685);
var i = n(951288),
    r = n(647438),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
    s = n(433517),
    c = n(523238),
    u = n(241915),
    d = n(366050),
    p = n(27457),
    h = n(981631),
    f = n(354459),
    m = n(330831),
    g = n(315091);
let b = "CameraPreviewPosition";
function C(e) {
    let { width: t, onContextMenuParticipant: n, height: l, channel: C, participants: y, onSelectParticipant: _ } = e,
        [v, x] = (function () {
            let [e, t] = r.useState(() => s.K.get(b, h.VD2.BOTTOM_RIGHT));
            return [
                e,
                r.useCallback((e) => {
                    s.K.set(b, e), t(e);
                }, []),
            ];
        })(),
        O = r.useRef(null),
        j = null == C.getGuildId() ? 70 : 50,
        E = (0, o.e7)([d.Z], () => d.Z.pipWidth(f.cL.CAMERA_PREVIEW)),
        S = y.length,
        P = E * S + 8 * (S - 1),
        I = r.useMemo(
            () => ({
                minWidth: f.Rv[f.cL.CAMERA_PREVIEW] * S + 8 * (S - 1),
                maxWidth: f.$i[f.cL.CAMERA_PREVIEW] * S + 8 * (S - 1),
            }),
            [S],
        );
    r.useLayoutEffect(() => {
        var e;
        null == (e = O.current) || e.ensureIsInPosition();
    }, [y.length]);
    let Z = r.useCallback(
            (e) => {
                let t = 0 === S ? e : (e - 8 * (S - 1)) / S;
                c.d7(t, f.cL.CAMERA_PREVIEW);
            },
            [S],
        ),
        T = r.useCallback(
            (e, t) => {
                x(t);
            },
            [x],
        );
    return (0, i.jsx)("div", {
        className: m.container,
        children: (0, i.jsx)(u._, {
            position: v,
            id: 0,
            width: P,
            ref: O,
            onMove: T,
            onResize: Z,
            maxX: t,
            maxY: l,
            edgeOffsetTop: j,
            edgeOffsetBottom: 70,
            edgeOffsetLeft: 16,
            edgeOffsetRight: 16,
            resizeConfig: I,
            children: (0, i.jsx)("div", {
                className: m.tileContainer,
                children: y.map((e) =>
                    (0, i.jsx)(
                        p.ZP,
                        {
                            participant: e,
                            channel: C,
                            onContextMenu: n,
                            className: a()(m.tile, g.elevationHigh),
                            fit: p.BP.COVER,
                            inCall: !0,
                            inPopout: !1,
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
