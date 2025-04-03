n.d(t, { Z: () => _ }), n(47120);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(442837),
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
    let { width: t, onContextMenuParticipant: n, height: l, channel: _, participants: C, onSelectParticipant: y } = e,
        [x, v] = (function () {
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
        E = (0, a.e7)([d.Z], () => d.Z.pipWidth(f.cL.CAMERA_PREVIEW)),
        N = C.length,
        I = E * N + 8 * (N - 1),
        P = i.useMemo(
            () => ({
                minWidth: f.Rv[f.cL.CAMERA_PREVIEW] * N + 8 * (N - 1),
                maxWidth: f.$i[f.cL.CAMERA_PREVIEW] * N + 8 * (N - 1)
            }),
            [N]
        );
    i.useLayoutEffect(() => {
        var e;
        null == (e = j.current) || e.ensureIsInPosition();
    }, [C.length]);
    let S = i.useCallback(
            (e) => {
                let t = 0 === N ? e : (e - 8 * (N - 1)) / N;
                c.d7(t, f.cL.CAMERA_PREVIEW);
            },
            [N]
        ),
        Z = i.useCallback(
            (e, t) => {
                v(t);
            },
            [v]
        );
    return (0, r.jsx)('div', {
        className: m.container,
        children: (0, r.jsx)(u._, {
            position: x,
            id: 0,
            width: I,
            ref: j,
            onMove: Z,
            onResize: S,
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
                            className: o()(m.tile, g.elevationHigh),
                            fit: p.BP.COVER,
                            inCall: !0,
                            inPopout: !1,
                            width: 160,
                            onClick: y
                        },
                        e.id
                    )
                )
            })
        })
    });
}
