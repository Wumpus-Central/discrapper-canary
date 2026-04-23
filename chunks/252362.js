a.d(l, { A: () => p });
var t = a(627968),
    s = a(64700),
    i = a(265486),
    n = a(462887),
    c = a(736653),
    h = a(793574),
    r = a(688810),
    o = a(976860),
    d = a(979286),
    v = a(652215),
    g = a(985018);
let p = (e) => {
    let { displayOptions: l, targetElementRef: a, onRequestClose: p, onClick: m } = e,
        { analyticsLocations: f } = (0, r.Ay)(h.A.HOME_PAGE_SHOP_TAB),
        w = (0, c.Ay)(),
        x = (0, n.M)(w) ? l.assetDark : l.assetLight,
        u = s.useRef(p);
    return (
        (u.current = p),
        s.useEffect(
            () => () => {
                u.current?.();
            },
            [],
        ),
        (0, t.jsx)(i.A, {
            targetElementRef: a,
            position: "right",
            align: "top",
            size: "md",
            caretConfig: { align: "start" },
            title: l.title(),
            body: l.body(),
            graphic: { type: "image", src: x },
            actions: [
                {
                    text: g.intl.string(g.t.fYfGgK),
                    variant: "primary",
                    onClick: () => {
                        m?.(),
                            (0, o.pX)(v.BVt.COLLECTIBLES_SHOP),
                            (0, d.Cz)({ analyticsLocations: f, analyticsSource: h.A.HOME_PAGE_SHOP_TAB });
                    },
                },
            ],
            onRequestClose: p,
        })
    );
};
