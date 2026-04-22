e.d(n, { default: () => c });
var i = e(627968);
e(64700);
var a = e(861672),
    d = e(477782),
    r = e(442433),
    o = e(987384),
    l = e(965162),
    s = e(985018);
function c(t) {
    let { onSelect: n, backgroundOption: e, optionIsInUse: c } = t;
    return (0, i.jsx)(a.W, {
        "data-menu-migrated-auto": !0,
        navId: "video-background-context",
        onClose: r.Z_,
        onSelect: n,
        "aria-label": s.intl.string(s.t.ptxALO),
        children: (0, i.jsx)(d.Dr, {
            id: "remove",
            action: () => {
                (0, l.d1)(e) && ((0, o.pW)(e), (0, l.Eo)(e));
            },
            label: (0, l.d1)(e)
                ? c
                    ? s.intl.string(s.t["xh/P/8"])
                    : s.intl.string(s.t.oKuPwe)
                : s.intl.string(s.t.hFYUDN),
            disabled: !(0, l.d1)(e) || c,
            color: "danger",
        }),
    });
}
