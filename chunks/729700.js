n.d(t, { Z: () => h });
var r = n(951288),
    i = n(647438),
    l = n(907862),
    a = n(780384),
    o = n(410030),
    s = n(100527),
    c = n(906732),
    u = n(703656),
    d = n(335131),
    p = n(981631),
    f = n(388032);
let h = (e) => {
    let { displayOptions: t, targetElementRef: n, onRequestClose: h, onClick: g } = e,
        { analyticsLocations: m } = (0, c.ZP)(s.Z.HOME_PAGE_SHOP_TAB),
        b = (0, o.ZP)(),
        _ = (0, a.wj)(b) ? t.assetDark : t.assetLight,
        O = i.useRef(h);
    return (
        (O.current = h),
        i.useEffect(
            () => () => {
                var e;
                null == (e = O.current) || e.call(O);
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
                src: _,
            },
            actions: [
                {
                    text: f.intl.string(f.t.fYfGgI),
                    variant: "primary",
                    onClick: () => {
                        null == g || g(),
                            (0, u.uL)(p.Z5c.COLLECTIBLES_SHOP),
                            (0, d.mK)({
                                openInLayer: !1,
                                analyticsLocations: m,
                                analyticsSource: s.Z.HOME_PAGE_SHOP_TAB,
                            });
                    },
                },
            ],
            onRequestClose: h,
        })
    );
};
