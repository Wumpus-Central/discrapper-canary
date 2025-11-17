i.d(n, { default: () => d });
var r = i(54381);
i(473749);
var e = i(481060),
    a = i(239091),
    s = i(716161),
    l = i(647177),
    o = i(388032);
function d(t) {
    let { onSelect: n, backgroundOption: i, optionIsInUse: d } = t;
    return (0, r.jsx)(e.v2r, {
        navId: "video-background-context",
        onClose: a.Zy,
        onSelect: n,
        "aria-label": o.intl.string(o.t.ptxALO),
        children: (0, r.jsx)(e.sNh, {
            id: "remove",
            action: () => {
                (0, l.rD)(i) && ((0, s.KH)(i), (0, l.$w)(i));
            },
            label: (0, l.rD)(i)
                ? d
                    ? o.intl.string(o.t["xh/P/8"])
                    : o.intl.string(o.t.oKuPwe)
                : o.intl.string(o.t.hFYUDN),
            disabled: !(0, l.rD)(i) || d,
            color: "danger",
        }),
    });
}
