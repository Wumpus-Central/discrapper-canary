i.d(n, {
    default: () => s,
});
var e = i(627968);
i(64700);
var a = i(397927),
    r = i(442433),
    d = i(987384),
    o = i(965162),
    l = i(985018);

function s(t) {
    let { onSelect: n, backgroundOption: i, optionIsInUse: s } = t;
    return (0, e.jsx)(a.W1t, {
        "data-menu-migration-ready": !0,
        navId: "video-background-context",
        onClose: r.Z_,
        onSelect: n,
        "aria-label": l.intl.string(l.t.ptxALO),
        children: (0, e.jsx)(a.Drp, {
            id: "remove",
            action: () => {
                (0, o.d1)(i) && ((0, d.pW)(i), (0, o.Eo)(i));
            },
            label: (0, o.d1)(i)
                ? s
                    ? l.intl.string(l.t["xh/P/8"])
                    : l.intl.string(l.t.oKuPwe)
                : l.intl.string(l.t.hFYUDN),
            disabled: !(0, o.d1)(i) || s,
            color: "danger",
        }),
    });
}
