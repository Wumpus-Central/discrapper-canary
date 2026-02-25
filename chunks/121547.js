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
    let { wishlistId: t, sku: n, spec: a, analyticsLocations: f, isHoveringOrFocusing: p, onHoverOrFocusChange: h } = e,
        _ = l.useRef(null),
        { isHoveringOrFocusing: A } = (0, c.A)(_),
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
                (0, d.XA)(g.jM.SOMETHING_WENT_WRONG);
            }
    }, [t, n.id, f]);
    return (0, i.jsx)(r.m, {
        text: m.intl.string(m.t.jTW016),
        children: (0, i.jsx)(o.DUT, {
            innerRef: _,
            onClick: j,
            "aria-label": m.intl.string(m.t.jTW016),
            className: s()(x.vk, { [x.P8]: A || p }),
            style: { top: a.iconInset, insetInlineEnd: a.iconInset },
            children: (0, i.jsx)(o.C3E, { size: "refresh_sm", colorClass: x.Kk }),
        }),
    });
}
