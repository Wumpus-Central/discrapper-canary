n.d(t, { A: () => f });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    r = n.n(a),
    s = n(990078),
    o = n(397927),
    d = n(713517),
    c = n(384377),
    u = n(808247),
    g = n(518477),
    m = n(985018),
    x = n(799559);
function f(e) {
    let { wishlistId: t, sku: n, analyticsLocations: a, isHoveringOrFocusing: f, onHoverOrFocusChange: h } = e,
        p = l.useRef(null),
        { isHoveringOrFocusing: _ } = (0, d.A)(p),
        A = l.useRef(h);
    l.useEffect(() => {
        A.current = h;
    }, [h]),
        l.useEffect(() => {
            A.current?.(_);
        }, [_]);
    let I = l.useCallback(async () => {
        if (null != t)
            try {
                await u.A.removeSkuFromWishlist(t, n.id, a);
            } catch (e) {
                (0, c.XA)(g.jM.SOMETHING_WENT_WRONG);
            }
    }, [t, n.id, a]);
    return (0, i.jsx)(s.m, {
        text: m.intl.string(m.t.jTW016),
        children: (0, i.jsx)(o.DUT, {
            innerRef: p,
            onClick: I,
            "aria-label": m.intl.string(m.t.jTW016),
            className: r()(x.vk, { [x.P8]: _ || f }),
            children: (0, i.jsx)(o.ucK, {
                size: "refresh_sm",
                className: x.Kk,
                color: o.LU0.colors.ICON_FEEDBACK_CRITICAL,
            }),
        }),
    });
}
