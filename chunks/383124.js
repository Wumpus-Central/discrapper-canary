n.d(t, { Z: () => g });
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    s = n(755721),
    o = n(481060),
    c = n(442837),
    d = n(210753),
    u = n(77498),
    m = n(512622);
function g(e) {
    let { applicationId: t, selected: n, onClick: l, disabled: g } = e,
        { isFetching: p, coverImageUrl: f } = (0, d.$)(t, {
            coverImageHeight: 336,
            coverImageWidth: 252,
        }),
        h = (0, c.e7)([u.Z], () => {
            var e, n;
            return null != (n = null == (e = u.Z.getDetectableGame(t)) ? void 0 : e.name) ? n : "";
        }),
        b = i.useCallback(() => {
            null == l || l(t);
        }, [t, l]),
        x = i.useMemo(
            () =>
                p
                    ? null
                    : null == f
                      ? (0, r.jsx)("div", {
                            className: m.gameUnknownImage,
                            children: (0, r.jsx)(o.IMN, { size: "lg" }),
                        })
                      : (0, r.jsx)("img", {
                            className: m.gameImage,
                            alt: h,
                            src: f,
                        }),
            [f, p, h],
        );
    return (0, r.jsxs)("div", {
        className: a()(m.selectedGame, {
            [m.dimmed]: !n,
            [m.disabled]: g,
        }),
        children: [
            (0, r.jsxs)(o.P3F, {
                "aria-disabled": g,
                tabIndex: g ? -1 : 0,
                onClick: g ? void 0 : b,
                className: a()(m.gameImageBackground, {
                    [m.gameImageLoading]: p,
                    [m.disabled]: g,
                }),
                children: [
                    n &&
                        (0, r.jsx)("div", {
                            className: m.checkBackground,
                            children: (0, r.jsx)(s.$q, {
                                displayOnly: !0,
                                value: n,
                            }),
                        }),
                    x,
                ],
            }),
            (0, r.jsx)(o.Text, {
                className: m.gameName,
                variant: "text-xs/medium",
                color: "header-primary",
                children: h,
            }),
        ],
    });
}
