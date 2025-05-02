n.d(t, { Z: () => m });
var r = n(200651),
    i = n(192379),
    l = n(120356),
    s = n.n(l),
    a = n(481060),
    o = n(442837),
    c = n(210753),
    u = n(77498),
    d = n(686964);
function m(e) {
    let { applicationId: t, selected: n, onClick: l, disabled: m } = e,
        { isFetching: g, coverImageUrl: p } = (0, c.$)(t, {
            coverImageHeight: 336,
            coverImageWidth: 252
        }),
        f = (0, o.e7)([u.Z], () => {
            var e, n;
            return null != (n = null == (e = u.Z.getDetectableGame(t)) ? void 0 : e.name) ? n : '';
        }),
        h = i.useCallback(() => {
            null == l || l(t);
        }, [t, l]),
        x = i.useMemo(
            () =>
                g
                    ? null
                    : null == p
                      ? (0, r.jsx)('div', {
                            className: d.gameUnknownImage,
                            children: (0, r.jsx)(a.IMN, { size: 'lg' })
                        })
                      : (0, r.jsx)('img', {
                            className: d.gameImage,
                            alt: f,
                            src: p
                        }),
            [p, g, f]
        );
    return (0, r.jsxs)('div', {
        className: s()(d.selectedGame, {
            [d.dimmed]: !n,
            [d.disabled]: m
        }),
        children: [
            (0, r.jsxs)(a.P3F, {
                'aria-disabled': m,
                tabIndex: m ? -1 : 0,
                onClick: m ? void 0 : h,
                className: s()(d.gameImageBackground, {
                    [d.gameImageLoading]: g,
                    [d.disabled]: m
                }),
                children: [
                    n &&
                        (0, r.jsx)('div', {
                            className: d.checkBackground,
                            children: (0, r.jsx)(a.XZJ, {
                                displayOnly: !0,
                                value: n
                            })
                        }),
                    x
                ]
            }),
            (0, r.jsx)(a.Text, {
                className: d.gameName,
                variant: 'text-xs/medium',
                color: 'header-primary',
                children: f
            })
        ]
    });
}
