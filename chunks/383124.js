n.d(t, { Z: () => m });
var r = n(951288),
    i = n(647438),
    l = n(120356),
    s = n.n(l),
    a = n(755721),
    o = n(481060),
    c = n(442837),
    d = n(210753),
    u = n(77498),
    g = n(512622);
function m(e) {
    let { applicationId: t, selected: n, onClick: l, disabled: m } = e,
        { isFetching: p, coverImageUrl: f } = (0, d.$)(t, {
            coverImageHeight: 336,
            coverImageWidth: 252,
        }),
        h = (0, c.e7)([u.Z], () => {
            var e, n;
            return null != (n = null == (e = u.Z.getDetectableGame(t)) ? void 0 : e.name) ? n : "";
        }),
        x = i.useCallback(() => {
            null == l || l(t);
        }, [t, l]),
        b = i.useMemo(
            () =>
                p
                    ? null
                    : null == f
                      ? (0, r.jsx)("div", {
                            className: g.gameUnknownImage,
                            children: (0, r.jsx)(o.IMN, { size: "lg" }),
                        })
                      : (0, r.jsx)("img", {
                            className: g.gameImage,
                            alt: h,
                            src: f,
                        }),
            [f, p, h],
        );
    return (0, r.jsxs)("div", {
        className: s()(g.selectedGame, {
            [g.dimmed]: !n,
            [g.disabled]: m,
        }),
        children: [
            (0, r.jsxs)(o.P3F, {
                "aria-disabled": m,
                tabIndex: m ? -1 : 0,
                onClick: m ? void 0 : x,
                className: s()(g.gameImageBackground, {
                    [g.gameImageLoading]: p,
                    [g.disabled]: m,
                }),
                children: [
                    n &&
                        (0, r.jsx)("div", {
                            className: g.checkBackground,
                            children: (0, r.jsx)(a.$q, {
                                displayOnly: !0,
                                value: n,
                            }),
                        }),
                    b,
                ],
            }),
            (0, r.jsx)(o.Text, {
                className: g.gameName,
                variant: "text-xs/medium",
                color: "header-primary",
                children: h,
            }),
        ],
    });
}
