n.d(t, {
    A: () => f,
});
var r = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(397927),
    c = n(311907),
    o = n(585958),
    d = n(760751),
    u = n(677230);

function f(e) {
    let { applicationId: t, selected: n, onClick: l, disabled: f } = e,
        { isFetching: g, coverImageUrl: b } = (0, o.n)(t, {
            coverImageSize: 256,
        }),
        m = (0, c.bG)([d.A], () => {
            var e, n;
            return null != (e = null == (n = d.A.getDetectableGame(t)) ? void 0 : n.name) ? e : "";
        }),
        p = i.useCallback(() => {
            null == l || l(t);
        }, [t, l]),
        x = i.useMemo(
            () =>
                g
                    ? null
                    : null == b
                      ? (0, r.jsx)("div", {
                            className: u.gP,
                            children: (0, r.jsx)(a._7Z, {
                                size: "lg",
                            }),
                        })
                      : (0, r.jsx)("img", {
                            className: u.Su,
                            alt: m,
                            src: b,
                        }),
            [b, g, m],
        );
    return (0, r.jsxs)("div", {
        className: s()(u.id, {
            [u.rX]: !n,
            [u.r9]: f,
        }),
        children: [
            (0, r.jsxs)(a.DUT, {
                "aria-disabled": f,
                tabIndex: f ? -1 : 0,
                onClick: f ? void 0 : p,
                className: s()(u.a8, {
                    [u.AL]: g,
                    [u.r9]: f,
                }),
                children: [
                    n &&
                        (0, r.jsx)("div", {
                            className: u.jK,
                            children: (0, r.jsx)(a.P7L, {
                                checked: n,
                            }),
                        }),
                    x,
                ],
            }),
            (0, r.jsx)(a.Text, {
                className: u.mO,
                variant: "text-xs/medium",
                color: "text-strong",
                children: m,
            }),
        ],
    });
}
