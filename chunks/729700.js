n.d(t, { Z: () => g });
var r = n(255367),
    i = n(73800),
    l = n(907862),
    a = n(780384),
    o = n(410030),
    s = n(100527),
    c = n(906732),
    u = n(703656),
    d = n(335131),
    p = n(981631),
    h = n(388032),
    f = n(20080);
let g = (e) => {
    let { displayOptions: t, targetElementRef: n, onRequestClose: g, onClick: m } = e,
        { analyticsLocations: b } = (0, c.ZP)(s.Z.HOME_PAGE_SHOP_TAB),
        _ = (0, o.ZP)(),
        O = (0, a.wj)(_) ? t.assetDark : t.assetLight,
        E = i.useRef(g);
    return (
        (E.current = g),
        i.useEffect(
            () => () => {
                var e;
                null == (e = E.current) || e.call(E);
            },
            []
        ),
        (0, r.jsx)(l.J2, {
            targetElementRef: n,
            position: 'right',
            align: 'top',
            size: 'md',
            caretConfig: {
                position: 'left',
                align: 'start'
            },
            title: t.title(),
            body: t.body(),
            asset: (0, r.jsx)('img', {
                className: f.art,
                src: O,
                alt: ''
            }),
            actions: [
                {
                    text: h.intl.string(h.t.fYfGgI),
                    variant: 'primary',
                    onClick: () => {
                        (null == m || m(),
                            (0, u.uL)(p.Z5c.COLLECTIBLES_SHOP),
                            (0, d.mK)({
                                openInLayer: !1,
                                analyticsLocations: b,
                                analyticsSource: s.Z.HOME_PAGE_SHOP_TAB
                            }));
                    }
                }
            ],
            onRequestClose: g
        })
    );
};
