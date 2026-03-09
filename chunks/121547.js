n.d(t, { A: () => f });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(990078),
    o = n(397927),
    d = n(713517),
    c = n(384377),
    u = n(808247),
    m = n(518477),
    g = n(985018),
    x = n(799559);
function f(e) {
    let { wishlistId: t, sku: n, spec: a, analyticsLocations: f, isHoveringOrFocusing: p, onHoverOrFocusChange: h } = e,
        _ = l.useRef(null),
        { isHoveringOrFocusing: A } = (0, d.A)(_),
        I = l.useRef(h);
    l.useEffect(() => {
        I.current = h;
    }, [h]),
        l.useEffect(() => {
            I.current?.(A);
        }, [A]);
    let j = l.useCallback(async () => {
        if (null != t)
            try {
                await u.A.removeSkuFromWishlist(t, n.id, f);
            } catch (e) {
                (0, c.XA)(m.jM.SOMETHING_WENT_WRONG);
            }
    }, [t, n.id, f]);
    return (0, i.jsx)(r.m, {
        text: g.intl.string(g.t.jTW016),
        children: (0, i.jsx)(o.DUT, {
            innerRef: _,
            onClick: j,
            "aria-label": g.intl.string(g.t.jTW016),
            className: s()(x.vk, { [x.P8]: A || p }),
            style: { top: a.iconInset, insetInlineEnd: a.iconInset },
            children: (0, i.jsx)(o.C3E, { size: "refresh_sm", colorClass: x.Kk }),
        }),
    });
}
