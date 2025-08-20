n.d(t, { Z: () => y }), n(388685);
var r = n(951288),
    i = n(647438),
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
function y(e) {
    let { width: t, onContextMenuParticipant: n, height: l, channel: y, participants: _, onSelectParticipant: C } = e,
        [x, v] = (function () {
            let [e, t] = i.useState(() => s.K.get(b, h.VD2.BOTTOM_RIGHT));
            return [
                e,
                i.useCallback((e) => {
                    s.K.set(b, e), t(e);
                }, []),
            ];
        })(),
        O = i.useRef(null),
        j = null == y.getGuildId() ? 70 : 50,
        E = (0, o.e7)([d.Z], () => d.Z.pipWidth(f.cL.CAMERA_PREVIEW)),
        S = _.length,
        P = E * S + 8 * (S - 1),
        I = i.useMemo(
            () => ({
                minWidth: f.Rv[f.cL.CAMERA_PREVIEW] * S + 8 * (S - 1),
                maxWidth: f.$i[f.cL.CAMERA_PREVIEW] * S + 8 * (S - 1),
            }),
            [S],
        );
    i.useLayoutEffect(() => {
        var e;
        null == (e = O.current) || e.ensureIsInPosition();
    }, [_.length]);
    let Z = i.useCallback(
            (e) => {
                let t = 0 === S ? e : (e - 8 * (S - 1)) / S;
                c.d7(t, f.cL.CAMERA_PREVIEW);
            },
            [S],
        ),
        T = i.useCallback(
            (e, t) => {
                v(t);
            },
            [v],
        );
    return (0, r.jsx)("div", {
        className: m.container,
        children: (0, r.jsx)(u._, {
            position: x,
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
            children: (0, r.jsx)("div", {
                className: m.tileContainer,
                children: _.map((e) =>
                    (0, r.jsx)(
                        p.ZP,
                        {
                            participant: e,
                            channel: y,
                            onContextMenu: n,
                            className: a()(m.tile, g.elevationHigh),
                            fit: p.BP.COVER,
                            inCall: !0,
                            inPopout: !1,
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
