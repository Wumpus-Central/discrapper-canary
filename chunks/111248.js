n.d(t, {
    Z: function () {
        return v;
    }
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    s = n(442837),
    o = n(433517),
    c = n(519938),
    d = n(241915),
    u = n(366050),
    h = n(27457),
    p = n(981631),
    m = n(354459),
    f = n(186895),
    g = n(616926);
let C = 'CameraPreviewPosition';
function x(e, t) {
    return e * t + 8 * (t - 1);
}
function v(e) {
    var t;
    let { width: n, onContextMenuParticipant: r, height: x, channel: v, participants: _ } = e,
        [I, E] = (function () {
            let [e, t] = l.useState(() => o.K.get(C, p.VD2.BOTTOM_RIGHT));
            return [
                e,
                l.useCallback((e) => {
                    o.K.set(C, e), t(e);
                }, [])
            ];
        })(),
        b = l.useRef(null),
        Z = null == v.getGuildId() ? 70 : 50,
        N = (0, s.e7)([u.Z], () => u.Z.pipWidth(m.cL.CAMERA_PREVIEW)),
        S = _.length;
    let T = N * (t = S) + 8 * (t - 1),
        j = l.useMemo(() => {
            var e, t, n, i;
            return {
                minWidth: ((e = m.Rv[m.cL.CAMERA_PREVIEW]), e * (t = S) + 8 * (t - 1)),
                maxWidth: ((n = m.$i[m.cL.CAMERA_PREVIEW]), n * (i = S) + 8 * (i - 1))
            };
        }, [S]);
    l.useLayoutEffect(() => {
        var e;
        null === (e = b.current) || void 0 === e || e.ensureIsInPosition();
    }, [_.length]);
    let A = l.useCallback(
            (e) => {
                var t, n;
                let i = ((t = e), 0 === (n = S) ? t : (t - 8 * (n - 1)) / n);
                c.d7(i, m.cL.CAMERA_PREVIEW);
            },
            [S]
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
            position: I,
            id: 0,
            width: T,
            ref: b,
            onMove: y,
            onResize: A,
            maxX: n,
            maxY: x,
            edgeOffsetTop: Z,
            edgeOffsetBottom: 70,
            edgeOffsetLeft: 16,
            edgeOffsetRight: 16,
            resizeConfig: j,
            children: (0, i.jsx)('div', {
                className: f.tileContainer,
                children: _.map((e) =>
                    (0, i.jsx)(
                        h.ZP,
                        {
                            participant: e,
                            channel: v,
                            onContextMenu: r,
                            className: a()(f.tile, g.elevationHigh),
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
