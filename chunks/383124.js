n.d(t, { Z: () => g });
var r = n(54381),
    i = n(473749),
    l = n(120356),
    s = n.n(l),
    a = n(481060),
    o = n(442837),
    c = n(210753),
    u = n(77498),
    d = n(512622);
function g(e) {
    let { applicationId: t, selected: n, onClick: l, disabled: g } = e,
        { isFetching: m, coverImageUrl: p } = (0, c.$)(t, {
            coverImageHeight: 336,
            coverImageWidth: 252,
        }),
        f = (0, o.e7)([u.Z], () => {
            var e, n;
            return null != (n = null == (e = u.Z.getDetectableGame(t)) ? void 0 : e.name) ? n : "";
        }),
        h = i.useCallback(() => {
            null == l || l(t);
        }, [t, l]),
        x = i.useMemo(
            () =>
                m
                    ? null
                    : null == p
                      ? (0, r.jsx)("div", {
                            className: d.gameUnknownImage,
                            children: (0, r.jsx)(a.IMN, { size: "lg" }),
                        })
                      : (0, r.jsx)("img", {
                            className: d.gameImage,
                            alt: f,
                            src: p,
                        }),
            [p, m, f],
        );
    return (0, r.jsxs)("div", {
        className: s()(d.selectedGame, {
            [d.dimmed]: !n,
            [d.disabled]: g,
        }),
        children: [
            (0, r.jsxs)(a.P3F, {
                "aria-disabled": g,
                tabIndex: g ? -1 : 0,
                onClick: g ? void 0 : h,
                className: s()(d.gameImageBackground, {
                    [d.gameImageLoading]: m,
                    [d.disabled]: g,
                }),
                children: [
                    n &&
                        (0, r.jsx)("div", {
                            className: d.checkBackground,
                            children: (0, r.jsx)(a.FZ5, { checked: n }),
                        }),
                    x,
                ],
            }),
            (0, r.jsx)(a.Text, {
                className: d.gameName,
                variant: "text-xs/medium",
                color: "text-strong",
                children: f,
            }),
        ],
    });
}
