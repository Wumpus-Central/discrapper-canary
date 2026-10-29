i.d(t, { default: () => c });
var a = i(477900);
i(582128);
var e = i(980707),
    d = i(477782),
    r = i(442433),
    l = i(114129),
    s = i(105292);
function c(n) {
    let { tab: t, onSelect: i, onRequestClose: c } = n;
    return (0, a.jsxs)(e.W, {
        "data-menu-migrated": !0,
        navId: "channel-tab-context",
        onClose: r.Z_,
        "aria-label": s.intl.string(s.t.dd5Eyn),
        onSelect: i,
        children: [
            (0, a.jsx)(d.rX, {
                children: (0, a.jsx)(d.Dr, {
                    id: t.pinned ? "unpin-tab" : "pin-tab",
                    label: t.pinned ? s.intl.string(s.t.LvKSA8) : s.intl.string(s.t.Aiucjd),
                    action: () => (0, l.RL)(t.id, !t.pinned),
                }),
            }),
            (0, a.jsx)(d.rX, {
                children: (0, a.jsx)(d.Dr, { id: "close-tab", label: s.intl.string(s.t.In6PEK), action: c }),
            }),
        ],
    });
}
