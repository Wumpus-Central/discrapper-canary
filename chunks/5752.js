var e = i(477900);
i(582128);
var a = i(165862),
    d = i(477782),
    r = i(442433),
    o = i(352430),
    l = i(965162),
    s = i(792996);
i.d(
    n,
    {},
    {
        default: function (t) {
            let { onSelect: n, backgroundOption: i, optionIsInUse: c } = t;
            return (0, e.jsx)(a.W, {
                "data-menu-migrated-auto": !0,
                navId: "video-background-context",
                onClose: r.Z_,
                onSelect: n,
                "aria-label": s.intl.string(s.t.ptxALO),
                children: (0, e.jsx)(d.Dr, {
                    id: "remove",
                    action: function () {
                        (0, l.d1)(i) && ((0, o.pW)(i), (0, l.Eo)(i));
                    },
                    label: (0, l.d1)(i)
                        ? c
                            ? s.intl.string(s.t["xh/P/8"])
                            : s.intl.string(s.t.oKuPwe)
                        : s.intl.string(s.t.hFYUDN),
                    disabled: !(0, l.d1)(i) || c,
                    color: "danger",
                }),
            });
        },
    },
);
