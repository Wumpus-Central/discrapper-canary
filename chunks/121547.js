n.d(t, {
    A: () => m,
});
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    o = n(990078),
    s = n(397927),
    c = n(713517),
    u = n(384377),
    d = n(808247),
    f = n(518477),
    p = n(985018),
    g = n(799559);

function m(e) {
    let { wishlistId: t, sku: n, analyticsLocations: i, isHoveringOrFocusing: m, onHoverOrFocusChange: b } = e,
        y = l.useRef(null),
        { isHoveringOrFocusing: O } = (0, c.A)(y),
        j = l.useRef(b);
    l.useEffect(() => {
        j.current = b;
    }, [b]),
        l.useEffect(() => {
            var e;
            null == (e = j.current) || e.call(j, O);
        }, [O]);
    let h = l.useCallback(async () => {
        if (null != t)
            try {
                await d.A.removeSkuFromWishlist(t, n.id, i);
            } catch (e) {
                (0, u.XA)(f.jM.SOMETHING_WENT_WRONG);
            }
    }, [t, n.id, i]);
    return (0, r.jsx)(o.m, {
        text: p.intl.string(p.t.jTW016),
        children: (0, r.jsx)(s.DUT, {
            innerRef: y,
            onClick: h,
            "aria-label": p.intl.string(p.t.jTW016),
            className: a()(g.vk, {
                [g.P8]: O || m,
            }),
            children: (0, r.jsx)(s.ucK, {
                size: "refresh_sm",
                className: g.Kk,
                color: s.LU0.colors.ICON_FEEDBACK_CRITICAL,
            }),
        }),
    });
}
