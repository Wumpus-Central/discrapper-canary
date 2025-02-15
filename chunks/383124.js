n.d(t, { Z: () => m });
var i = n(200651),
    r = n(192379),
    l = n(120356),
    s = n.n(l),
    a = n(481060),
    o = n(442837),
    c = n(210753),
    d = n(77498),
    u = n(371233);
function m(e) {
    let { applicationId: t, selected: n, onClick: l } = e,
        { isFetching: m, coverImageUrl: h } = (0, c.$)(t, {
            coverImageHeight: 336,
            coverImageWidth: 252
        }),
        g = (0, o.e7)([d.Z], () => {
            var e, n;
            return null !== (n = null === (e = d.Z.getDetectableGame(t)) || void 0 === e ? void 0 : e.name) && void 0 !== n ? n : '';
        }),
        x = r.useCallback(() => {
            null == l || l(t);
        }, [t, l]),
        p = r.useMemo(
            () =>
                m
                    ? null
                    : null == h
                      ? (0, i.jsx)('div', {
                            className: u.gameUnknownImage,
                            children: (0, i.jsx)(a.IMN, { size: 'lg' })
                        })
                      : (0, i.jsx)('img', {
                            className: u.gameImage,
                            alt: g,
                            src: h
                        }),
            [h, m, g]
        );
    return (0, i.jsxs)('div', {
        className: u.selectedGame,
        children: [
            (0, i.jsxs)(a.P3F, {
                onClick: x,
                className: s()(u.gameImageBackground, { [u.gameImageLoading]: m }),
                children: [
                    n &&
                        (0, i.jsx)('div', {
                            className: u.checkBackground,
                            children: (0, i.jsx)(a.XZJ, {
                                displayOnly: !0,
                                value: n
                            })
                        }),
                    p
                ]
            }),
            (0, i.jsx)(a.Text, {
                className: u.gameName,
                variant: 'text-xs/normal',
                color: 'header-primary',
                children: g
            })
        ]
    });
}
