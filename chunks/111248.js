n.d(t, { Z: () => I }), n(388685);
var r = n(255367),
    i = n(73800),
    o = n(120356),
    a = n.n(o),
    s = n(442837),
    l = n(433517),
    c = n(519938),
    u = n(241915),
    d = n(366050),
    f = n(27457),
    _ = n(981631),
    p = n(354459),
    h = n(436992),
    m = n(20795);
let g = "CameraPreviewPosition",
    E = 160,
    b = 8;
function y() {
    let [e, t] = i.useState(() => l.K.get(g, _.VD2.BOTTOM_RIGHT));
    return [
        e,
        i.useCallback((e) => {
            l.K.set(g, e), t(e);
        }, []),
    ];
}
function O(e, t) {
    return e * t + b * (t - 1);
}
function v(e, t) {
    return 0 === t ? e : (e - b * (t - 1)) / t;
}
function I(e) {
    let { width: t, onContextMenuParticipant: n, height: o, channel: l, participants: _, onSelectParticipant: g } = e,
        [b, I] = y(),
        T = i.useRef(null),
        S = null == l.getGuildId() ? 70 : 50,
        A = (0, s.e7)([d.Z], () => d.Z.pipWidth(p.cL.CAMERA_PREVIEW)),
        N = _.length,
        C = O(A, N),
        R = i.useMemo(
            () => ({
                minWidth: O(p.Rv[p.cL.CAMERA_PREVIEW], N),
                maxWidth: O(p.$i[p.cL.CAMERA_PREVIEW], N),
            }),
            [N],
        );
    i.useLayoutEffect(() => {
        var e;
        null == (e = T.current) || e.ensureIsInPosition();
    }, [_.length]);
    let P = i.useCallback(
            (e) => {
                let t = v(e, N);
                c.d7(t, p.cL.CAMERA_PREVIEW);
            },
            [N],
        ),
        w = i.useCallback(
            (e, t) => {
                I(t);
            },
            [I],
        );
    return (0, r.jsx)("div", {
        className: h.container,
        children: (0, r.jsx)(u._, {
            position: b,
            id: 0,
            width: C,
            ref: T,
            onMove: w,
            onResize: P,
            maxX: t,
            maxY: o,
            edgeOffsetTop: S,
            edgeOffsetBottom: 70,
            edgeOffsetLeft: 16,
            edgeOffsetRight: 16,
            resizeConfig: R,
            children: (0, r.jsx)("div", {
                className: h.tileContainer,
                children: _.map((e) =>
                    (0, r.jsx)(
                        f.ZP,
                        {
                            participant: e,
                            channel: l,
                            onContextMenu: n,
                            className: a()(h.tile, m.elevationHigh),
                            fit: f.BP.COVER,
                            inCall: !0,
                            inPopout: !1,
                            width: E,
                            onClick: g,
                        },
                        e.id,
                    ),
                ),
            }),
        }),
    });
}
