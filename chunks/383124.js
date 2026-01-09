n.d(t, { Z: () => g });
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    s = n(481060),
    o = n(442837),
    c = n(210753),
    d = n(77498),
    u = n(43837);
function g(e) {
    let { applicationId: t, selected: n, onClick: l, disabled: g } = e,
        { isFetching: f, coverImageUrl: m } = (0, c.$)(t, { coverImageSize: 256 }),
        b = (0, o.e7)([d.Z], () => {
            var e, n;
            return null != (n = null == (e = d.Z.getDetectableGame(t)) ? void 0 : e.name) ? n : "";
        }),
        p = i.useCallback(() => {
            null == l || l(t);
        }, [t, l]),
        h = i.useMemo(
            () =>
                f
                    ? null
                    : null == m
                      ? (0, r.jsx)("div", {
                            className: u.gameUnknownImage,
                            children: (0, r.jsx)(s.IMN, { size: "lg" }),
                        })
                      : (0, r.jsx)("img", {
                            className: u.gameImage,
                            alt: b,
                            src: m,
                        }),
            [m, f, b],
        );
    return (0, r.jsxs)("div", {
        className: a()(u.selectedGame, {
            [u.dimmed]: !n,
            [u.disabled]: g,
        }),
        children: [
            (0, r.jsxs)(s.P3F, {
                "aria-disabled": g,
                tabIndex: g ? -1 : 0,
                onClick: g ? void 0 : p,
                className: a()(u.gameImageBackground, {
                    [u.gameImageLoading]: f,
                    [u.disabled]: g,
                }),
                children: [
                    n &&
                        (0, r.jsx)("div", {
                            className: u.checkBackground,
                            children: (0, r.jsx)(s.FZ5, { checked: n }),
                        }),
                    h,
                ],
            }),
            (0, r.jsx)(s.Text, {
                className: u.gameName,
                variant: "text-xs/medium",
                color: "text-strong",
                children: b,
            }),
        ],
    });
}
