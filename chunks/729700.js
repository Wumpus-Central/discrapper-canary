n.d(t, { Z: () => m });
var r = n(951288),
    i = n(647438),
    l = n(907862),
    a = n(780384),
    s = n(410030),
    o = n(100527),
    c = n(906732),
    u = n(703656),
    d = n(335131),
    p = n(981631),
    f = n(388032);
let m = (e) => {
    let { displayOptions: t, targetElementRef: n, onRequestClose: m, onClick: h } = e,
        { analyticsLocations: g } = (0, c.ZP)(o.Z.HOME_PAGE_SHOP_TAB),
        _ = (0, s.ZP)(),
        b = (0, a.wj)(_) ? t.assetDark : t.assetLight,
        E = i.useRef(m);
    return (
        (E.current = m),
        i.useEffect(
            () => () => {
                var e;
                null == (e = E.current) || e.call(E);
            },
            [],
        ),
        (0, r.jsx)(l.J2, {
            targetElementRef: n,
            position: "right",
            align: "top",
            size: "md",
            caretConfig: { align: "start" },
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
                        null == h || h(),
                            (0, u.uL)(p.Z5c.COLLECTIBLES_SHOP),
                            (0, d.mK)({
                                analyticsLocations: g,
                                analyticsSource: o.Z.HOME_PAGE_SHOP_TAB,
                            });
                    },
                },
            ],
            onRequestClose: m,
        })
    );
};
