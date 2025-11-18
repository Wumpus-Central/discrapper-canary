i.d(n, { default: () => u }), i(388685);
var e = i(54381),
    l = i(473749),
    a = i(793030),
    s = i(481060),
    r = i(455708),
    o = i(388032);
function u(t) {
    let {
            transitionState: n,
            onClose: i,
            onGIFSelected: u,
            onSend: c,
            hideFavorites: d = !1,
            defaultText: p = o.intl.string(o.t.OrwKgi),
        } = t,
        [h, C] = l.useState(null),
        [k, g] = l.useState(p),
        x = l.useCallback(
            (t) => {
                C(t), null == u || u(t);
            },
            [u],
        ),
        S = l.useCallback(() => {
            null != h && (null == c || c(h, k), i());
        }, [h, k, c, i]);
    return (0, e.jsx)(a.Modal, {
        transitionState: n,
        onClose: i,
        title: o.intl.string(o.t["0VinIJ"]),
        input: (0, e.jsx)(s.Kx8, {
            value: k,
            onChange: (t) => g(t),
            placeholder: p,
        }),
        actions: [
            {
                variant: "secondary",
                text: o.intl.string(o.t["ETE/oC"]),
                onClick: i,
            },
            {
                variant: "primary",
                text: o.intl.string(o.t.TXNS7S),
                onClick: S,
                loading: !1,
            },
        ],
        children: (0, e.jsx)(r.Z, {
            hideFavorites: d,
            onSelectGIF: x,
            selectedGIF: h,
        }),
    });
}
