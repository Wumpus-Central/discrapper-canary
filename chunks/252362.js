n.d(t, { A: () => _ });
var i = n(627968),
    r = n(64700),
    a = n(342494),
    l = n(582754),
    s = n(736653),
    o = n(793574),
    d = n(688810),
    c = n(976860),
    u = n(979286),
    A = n(652215),
    h = n(985018);
let _ = (e) => {
    let { displayOptions: t, targetElementRef: n, onRequestClose: _, onClick: m } = e,
        { analyticsLocations: p } = (0, d.Ay)(o.A.HOME_PAGE_SHOP_TAB),
        g = (0, s.Ay)(),
        E = (0, l.Mw)(g) ? t.assetDark : t.assetLight,
        f = r.useRef(_);
    return (
        (f.current = _),
        r.useEffect(
            () => () => {
                f.current?.();
            },
            [],
        ),
        (0, i.jsx)(a.AM, {
            targetElementRef: n,
            position: "right",
            align: "top",
            size: "md",
            caretConfig: { align: "start" },
            title: t.title(),
            body: t.body(),
            graphic: { type: "image", src: E },
            actions: [
                {
                    text: h.intl.string(h.t.fYfGgK),
                    variant: "primary",
                    onClick: () => {
                        m?.(),
                            (0, c.pX)(A.BVt.COLLECTIBLES_SHOP),
                            (0, u.Cz)({ analyticsLocations: p, analyticsSource: o.A.HOME_PAGE_SHOP_TAB });
                    },
                },
            ],
            onRequestClose: _,
        })
    );
};
