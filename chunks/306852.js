var i = n(477900),
    l = n(582128),
    a = n(503698),
    s = n.n(a),
    r = n(855986),
    o = n(506774),
    c = n(31728),
    d = n(164617),
    u = n(457864),
    h = n(334463),
    p = n(175203),
    m = n(652215),
    A = n(806931),
    f = n(366700),
    g = n(969426);
let x = "CameraPreviewPosition";
n.d(
    t,
    {},
    {
        A: function (e) {
            let {
                    width: t,
                    onContextMenuParticipant: n,
                    height: a,
                    channel: C,
                    participants: y,
                    onSelectParticipant: I,
                } = e,
                [j, v] = (function () {
                    let [e, t] = l.useState(() => o.w.get(x, m.CUs.BOTTOM_RIGHT));
                    return [
                        e,
                        l.useCallback((e) => {
                            (o.w.set(x, e), t(e));
                        }, []),
                    ];
                })(),
                N = l.useRef(null),
                E = null == C.getGuildId() ? 70 : 50,
                b = (0, r.bG)([h.A], () => h.A.pipWidth(A.R8.CAMERA_PREVIEW)),
                S = y.length,
                T = b * S + 8 * (S - 1),
                _ = l.useMemo(
                    () => ({
                        minWidth: A.mn[A.R8.CAMERA_PREVIEW] * S + 8 * (S - 1),
                        maxWidth: A.cF[A.R8.CAMERA_PREVIEW] * S + 8 * (S - 1),
                    }),
                    [S],
                );
            l.useLayoutEffect(() => {
                N.current?.ensureIsInPosition();
            }, [y.length]);
            let R = l.useCallback(
                    (e) => {
                        let t = 0 === S ? e : (e - 8 * (S - 1)) / S;
                        c.EB(t, A.R8.CAMERA_PREVIEW);
                    },
                    [S],
                ),
                O = l.useCallback(
                    (e, t) => {
                        v(t);
                    },
                    [v],
                );
            return (0, i.jsx)("div", {
                className: f.kL,
                children: (0, i.jsx)(u.S8, {
                    position: j,
                    id: 0,
                    width: T,
                    ref: N,
                    onMove: O,
                    onResize: R,
                    maxX: t,
                    maxY: a,
                    edgeOffsetTop: E,
                    edgeOffsetBottom: 70,
                    edgeOffsetLeft: 16,
                    edgeOffsetRight: 16,
                    resizeConfig: _,
                    children: (0, i.jsx)("div", {
                        className: f.iA,
                        children: y.map((e) =>
                            (0, i.jsx)(
                                p.Ay,
                                {
                                    participant: e,
                                    channel: C,
                                    onContextMenu: n,
                                    className: s()(f.Vs, g.a8),
                                    fit: p.Yl.COVER,
                                    inCall: !0,
                                    popoutType: d.N.NO_POPOUT,
                                    width: 160,
                                    onClick: I,
                                },
                                e.id,
                            ),
                        ),
                    }),
                }),
            });
        },
    },
);
