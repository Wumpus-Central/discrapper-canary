n.d(t, { A: () => f });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(990078),
    o = n(397927),
    c = n(713517),
    d = n(384377),
    u = n(808247),
    g = n(518477),
    m = n(985018),
    x = n(24917);
function f(e) {
    let { wishlistId: t, sku: n, analyticsLocations: a, isHoveringOrFocusing: f, onHoverOrFocusChange: p } = e,
        h = l.useRef(null),
        { isHoveringOrFocusing: _ } = (0, c.A)(h),
        A = l.useRef(p);
    l.useEffect(() => {
        A.current = p;
    }, [p]),
        l.useEffect(() => {
            A.current?.(_);
        }, [_]);
    let I = l.useCallback(async () => {
        if (null != t)
            try {
                await u.A.removeSkuFromWishlist(t, n.id, a);
            } catch (e) {
                (0, d.XA)(g.jM.SOMETHING_WENT_WRONG);
            }
    }, [t, n.id, a]);
    return (0, i.jsx)(r.m, {
        text: m.intl.string(m.t.jTW016),
        children: (0, i.jsx)(o.DUT, {
            innerRef: h,
            onClick: I,
            "aria-label": m.intl.string(m.t.jTW016),
            className: s()(x.vk, { [x.P8]: _ || f }),
            children: (0, i.jsx)(o.ucK, {
                size: "refresh_sm",
                className: x.Kk,
                color: o.LU0.colors.ICON_FEEDBACK_CRITICAL,
            }),
        }),
    });
}
