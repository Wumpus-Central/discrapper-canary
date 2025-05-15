n.d(t, { Z: () => _ }), n(388685);
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
    s = n(433517),
    c = n(519938),
    u = n(241915),
    d = n(366050),
    p = n(27457),
    h = n(981631),
    f = n(354459),
    m = n(436992),
    g = n(20795);
let b = 'CameraPreviewPosition';
function _(e) {
    let { width: t, onContextMenuParticipant: n, height: l, channel: _, participants: C, onSelectParticipant: x } = e,
        [y, v] = (function () {
            let [e, t] = i.useState(() => s.K.get(b, h.VD2.BOTTOM_RIGHT));
            return [
                e,
                i.useCallback((e) => {
                    s.K.set(b, e), t(e);
                }, [])
            ];
        })(),
        j = i.useRef(null),
        O = null == _.getGuildId() ? 70 : 50,
        E = (0, o.e7)([d.Z], () => d.Z.pipWidth(f.cL.CAMERA_PREVIEW)),
        I = C.length,
        S = E * I + 8 * (I - 1),
        P = i.useMemo(
            () => ({
                minWidth: f.Rv[f.cL.CAMERA_PREVIEW] * I + 8 * (I - 1),
                maxWidth: f.$i[f.cL.CAMERA_PREVIEW] * I + 8 * (I - 1)
            }),
            [I]
        );
    i.useLayoutEffect(() => {
        var e;
        null == (e = j.current) || e.ensureIsInPosition();
    }, [C.length]);
    let Z = i.useCallback(
            (e) => {
                let t = 0 === I ? e : (e - 8 * (I - 1)) / I;
                c.d7(t, f.cL.CAMERA_PREVIEW);
            },
            [I]
        ),
        N = i.useCallback(
            (e, t) => {
                v(t);
            },
            [v]
        );
    return (0, r.jsx)('div', {
        className: m.container,
        children: (0, r.jsx)(u._, {
            position: y,
            id: 0,
            width: S,
            ref: j,
            onMove: N,
            onResize: Z,
            maxX: t,
            maxY: l,
            edgeOffsetTop: O,
            edgeOffsetBottom: 70,
            edgeOffsetLeft: 16,
            edgeOffsetRight: 16,
            resizeConfig: P,
            children: (0, r.jsx)('div', {
                className: m.tileContainer,
                children: C.map((e) =>
                    (0, r.jsx)(
                        p.ZP,
                        {
                            participant: e,
                            channel: _,
                            onContextMenu: n,
                            className: a()(m.tile, g.elevationHigh),
                            fit: p.BP.COVER,
                            inCall: !0,
                            inPopout: !1,
                            width: 160,
                            onClick: x
                        },
                        e.id
                    )
                )
            })
        })
    });
}
