a.d(l, { A: () => v });
var t = a(627968),
    s = a(64700),
    i = a(265486),
    n = a(793574),
    c = a(688810),
    h = a(979286),
    r = a(758836),
    o = a(985018),
    d = a(166805);
let v = (e) => {
    let { targetElementRef: l, onRequestClose: a, onClick: v } = e,
        { analyticsLocations: g } = (0, c.Ay)(n.A.HOME_PAGE_SHOP_TAB),
        p = s.useRef(a);
    return (
        (p.current = a),
        s.useEffect(
            () => () => {
                p.current?.();
            },
            [],
        ),
        (0, t.jsx)(i.A, {
            targetElementRef: l,
            position: "right",
            size: "md",
            alignmentStrategy: "edge",
            align: "top",
            caretConfig: { align: "start" },
            title: o.intl.string(o.t.epBu6F),
            body: o.intl.string(o.t["o8+3AX"]),
            graphic: { type: "image", src: d.A },
            gradientColor: "blue",
            actions: [
                {
                    text: o.intl.string(o.t.dp9qDi),
                    variant: "primary",
                    onClick: () => {
                        v?.(),
                            (0, h.Cz)({
                                analyticsLocations: g,
                                analyticsSource: n.A.HOME_PAGE_SHOP_TAB,
                                tab: r.G2.HOME,
                            });
                    },
                },
            ],
            onRequestClose: a,
        })
    );
};
