n.d(t, { A: () => A });
var i = n(627968),
    r = n(64700),
    a = n(342494),
    l = n(793574),
    s = n(688810),
    o = n(979286),
    d = n(758836),
    c = n(985018),
    u = n(166805);
let A = (e) => {
    let { targetElementRef: t, onRequestClose: n, onClick: A } = e,
        { analyticsLocations: h } = (0, s.Ay)(l.A.HOME_PAGE_SHOP_TAB),
        _ = r.useRef(n);
    return (
        (_.current = n),
        r.useEffect(
            () => () => {
                _.current?.();
            },
            [],
        ),
        (0, i.jsx)(a.AM, {
            targetElementRef: t,
            position: "right",
            size: "md",
            alignmentStrategy: "edge",
            align: "top",
            caretConfig: { align: "start" },
            title: c.intl.string(c.t.epBu6F),
            body: c.intl.string(c.t["o8+3AX"]),
            graphic: { type: "image", src: u.A },
            gradientColor: "blue",
            actions: [
                {
                    text: c.intl.string(c.t.dp9qDi),
                    variant: "primary",
                    onClick: () => {
                        A?.(),
                            (0, o.Cz)({
                                analyticsLocations: h,
                                analyticsSource: l.A.HOME_PAGE_SHOP_TAB,
                                tab: d.G2.HOME,
                            });
                    },
                },
            ],
            onRequestClose: n,
        })
    );
};
