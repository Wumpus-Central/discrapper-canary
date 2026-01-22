i.d(n, { default: () => s });
var e = i(627968);
i(64700);
var r = i(397927),
    d = i(442433),
    a = i(987384),
    l = i(965162),
    o = i(985018);
function s(t) {
    let { onSelect: n, backgroundOption: i, optionIsInUse: s } = t;
    return (0, e.jsx)(r.W1t, {
        navId: "video-background-context",
        onClose: d.Z_,
        onSelect: n,
        "aria-label": o.intl.string(o.t.ptxALO),
        children: (0, e.jsx)(r.Drp, {
            id: "remove",
            action: () => {
                (0, l.d1)(i) && ((0, a.pW)(i), (0, l.Eo)(i));
            },
            label: (0, l.d1)(i)
                ? s
                    ? o.intl.string(o.t["xh/P/8"])
                    : o.intl.string(o.t.oKuPwe)
                : o.intl.string(o.t.hFYUDN),
            disabled: !(0, l.d1)(i) || s,
            color: "danger",
        }),
    });
}
