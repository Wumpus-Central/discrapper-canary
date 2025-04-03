n.d(t, { Z: () => m });
var r = n(200651),
    i = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(481060),
    o = n(442837),
    c = n(210753),
    d = n(77498),
    u = n(686964);
function m(e) {
    let { applicationId: t, selected: n, onClick: s, disabled: m } = e,
        { isFetching: g, coverImageUrl: p } = (0, c.$)(t, {
            coverImageHeight: 336,
            coverImageWidth: 252
        }),
        h = (0, o.e7)([d.Z], () => {
            var e, n;
            return null != (n = null == (e = d.Z.getDetectableGame(t)) ? void 0 : e.name) ? n : '';
        }),
        f = i.useCallback(() => {
            null == s || s(t);
        }, [t, s]),
        b = i.useMemo(
            () =>
                g
                    ? null
                    : null == p
                      ? (0, r.jsx)('div', {
                            className: u.gameUnknownImage,
                            children: (0, r.jsx)(l.IMN, { size: 'lg' })
                        })
                      : (0, r.jsx)('img', {
                            className: u.gameImage,
                            alt: h,
                            src: p
                        }),
            [p, g, h]
        );
    return (0, r.jsxs)('div', {
        className: a()(u.selectedGame, {
            [u.dimmed]: !n,
            [u.disabled]: m
        }),
        children: [
            (0, r.jsxs)(l.P3F, {
                'aria-disabled': m,
                tabIndex: m ? -1 : 0,
                onClick: m ? void 0 : f,
                className: a()(u.gameImageBackground, {
                    [u.gameImageLoading]: g,
                    [u.disabled]: m
                }),
                children: [
                    n &&
                        (0, r.jsx)('div', {
                            className: u.checkBackground,
                            children: (0, r.jsx)(l.XZJ, {
                                displayOnly: !0,
                                value: n
                            })
                        }),
                    b
                ]
            }),
            (0, r.jsx)(l.Text, {
                className: u.gameName,
                variant: 'text-xs/medium',
                color: 'header-primary',
                children: h
            })
        ]
    });
}
