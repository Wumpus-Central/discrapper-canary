n.d(t, { A: () => p });
var r = n(627968),
    i = n(64700),
    l = n(342494),
    a = n(793574),
    s = n(688810),
    o = n(979286),
    c = n(758836),
    u = n(985018),
    d = n(166805);
let p = (e) => {
    let { targetElementRef: t, onRequestClose: n, onClick: p } = e,
        { analyticsLocations: f } = (0, s.Ay)(a.A.HOME_PAGE_SHOP_TAB),
        h = i.useRef(n);
    return (
        (h.current = n),
        i.useEffect(
            () => () => {
                var e;
                null == (e = h.current) || e.call(h);
            },
            [],
        ),
        (0, r.jsx)(l.AM, {
            targetElementRef: t,
            position: "right",
            size: "md",
            alignmentStrategy: "edge",
            align: "top",
            caretConfig: { align: "start" },
            title: u.intl.string(u.t.epBu6F),
            body: u.intl.string(u.t["o8+3AX"]),
            graphic: {
                type: "image",
                src: d.A,
            },
            gradientColor: "blue",
            actions: [
                {
                    text: u.intl.string(u.t.dp9qDi),
                    variant: "primary",
                    onClick: () => {
                        null == p || p(),
                            (0, o.Cz)({
                                analyticsLocations: f,
                                analyticsSource: a.A.HOME_PAGE_SHOP_TAB,
                                tab: c.G2.HOME,
                            });
                    },
                },
            ],
            onRequestClose: n,
        })
    );
};
