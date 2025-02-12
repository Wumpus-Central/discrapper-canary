n.d(t, { Z: () => C }), n(47120);
var i = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
    s = n(442837),
    o = n(433517),
    c = n(519938),
    d = n(241915),
    u = n(366050),
    h = n(27457),
    p = n(981631),
    m = n(354459),
    f = n(705135),
    g = n(60412);
let _ = 'CameraPreviewPosition';
function C(e) {
    let { width: t, onContextMenuParticipant: n, height: a, channel: C, participants: x } = e,
        [v, E] = (function () {
            let [e, t] = l.useState(() => o.K.get(_, p.VD2.BOTTOM_RIGHT));
            return [
                e,
                l.useCallback((e) => {
                    o.K.set(_, e), t(e);
                }, [])
            ];
        })(),
        I = l.useRef(null),
        b = null == C.getGuildId() ? 70 : 50,
        Z = (0, s.e7)([u.Z], () => u.Z.pipWidth(m.cL.CAMERA_PREVIEW)),
        N = x.length,
        T = Z * N + 8 * (N - 1),
        S = l.useMemo(
            () => ({
                minWidth: m.Rv[m.cL.CAMERA_PREVIEW] * N + 8 * (N - 1),
                maxWidth: m.$i[m.cL.CAMERA_PREVIEW] * N + 8 * (N - 1)
            }),
            [N]
        );
    l.useLayoutEffect(() => {
        var e;
        null === (e = I.current) || void 0 === e || e.ensureIsInPosition();
    }, [x.length]);
    let j = l.useCallback(
            (e) => {
                let t = 0 === N ? e : (e - 8 * (N - 1)) / N;
                c.d7(t, m.cL.CAMERA_PREVIEW);
            },
            [N]
        ),
        y = l.useCallback(
            (e, t) => {
                E(t);
            },
            [E]
        );
    return (0, i.jsx)('div', {
        className: f.container,
        children: (0, i.jsx)(d._, {
            position: v,
            id: 0,
            width: T,
            ref: I,
            onMove: y,
            onResize: j,
            maxX: t,
            maxY: a,
            edgeOffsetTop: b,
            edgeOffsetBottom: 70,
            edgeOffsetLeft: 16,
            edgeOffsetRight: 16,
            resizeConfig: S,
            children: (0, i.jsx)('div', {
                className: f.tileContainer,
                children: x.map((e) =>
                    (0, i.jsx)(
                        h.ZP,
                        {
                            participant: e,
                            channel: C,
                            onContextMenu: n,
                            className: r()(f.tile, g.elevationHigh),
                            fit: h.BP.COVER,
                            inCall: !0,
                            inPopout: !1,
                            width: 160
                        },
                        e.id
                    )
                )
            })
        })
    });
}
