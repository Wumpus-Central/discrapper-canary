e.d(n, { default: () => s });
var i = e(627968);
e(64700);
var a = e(397927),
    d = e(442433),
    r = e(987384),
    o = e(965162),
    l = e(985018);
function s(t) {
    let { onSelect: n, backgroundOption: e, optionIsInUse: s } = t;
    return (0, i.jsx)(a.W1t, {
        "data-menu-migrated-auto": !0,
        navId: "video-background-context",
        onClose: d.Z_,
        onSelect: n,
        "aria-label": l.intl.string(l.t.ptxALO),
        children: (0, i.jsx)(a.Drp, {
            id: "remove",
            action: () => {
                (0, o.d1)(e) && ((0, r.pW)(e), (0, o.Eo)(e));
            },
            label: (0, o.d1)(e)
                ? s
                    ? l.intl.string(l.t["xh/P/8"])
                    : l.intl.string(l.t.oKuPwe)
                : l.intl.string(l.t.hFYUDN),
            disabled: !(0, o.d1)(e) || s,
            color: "danger",
        }),
    });
}
