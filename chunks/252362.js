n.d(t, {
    A: () => h,
});
var r = n(627968),
    i = n(64700),
    l = n(342494),
    a = n(582754),
    s = n(736653),
    o = n(793574),
    c = n(688810),
    u = n(976860),
    d = n(979286),
    p = n(652215),
    f = n(985018);
let h = (e) => {
    let { displayOptions: t, targetElementRef: n, onRequestClose: h, onClick: A } = e,
        { analyticsLocations: g } = (0, c.Ay)(o.A.HOME_PAGE_SHOP_TAB),
        m = (0, s.Ay)(),
        b = (0, a.Mw)(m) ? t.assetDark : t.assetLight,
        _ = i.useRef(h);
    return (
        (_.current = h),
        i.useEffect(
            () => () => {
                var e;
                null == (e = _.current) || e.call(_);
            },
            [],
        ),
        (0, r.jsx)(l.AM, {
            targetElementRef: n,
            position: "right",
            align: "top",
            size: "md",
            caretConfig: {
                align: "start",
            },
            title: t.title(),
            body: t.body(),
            graphic: {
                type: "image",
                src: b,
            },
            actions: [
                {
                    text: f.intl.string(f.t.fYfGgK),
                    variant: "primary",
                    onClick: () => {
                        null == A || A(),
                            (0, u.pX)(p.BVt.COLLECTIBLES_SHOP),
                            (0, d.Cz)({
                                analyticsLocations: g,
                                analyticsSource: o.A.HOME_PAGE_SHOP_TAB,
                            });
                    },
                },
            ],
            onRequestClose: h,
        })
    );
};
