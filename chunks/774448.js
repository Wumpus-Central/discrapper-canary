t.d(i, { default: () => c });
var a = t(477900);
t(582128);
var e = t(980707),
    d = t(477782),
    r = t(442433),
    l = t(114129),
    s = t(375708);
function c(n) {
    let { tab: i, onSelect: t } = n;
    return (0, a.jsxs)(e.W, {
        "data-menu-migrated": !0,
        navId: "channel-tab-context",
        onClose: r.Z_,
        "aria-label": s.intl.string(s.t.dd5Eyn),
        onSelect: t,
        children: [
            (0, a.jsx)(d.rX, {
                children: (0, a.jsx)(d.Dr, {
                    id: i.pinned ? "unpin-tab" : "pin-tab",
                    label: i.pinned ? s.intl.string(s.t.LvKSA8) : s.intl.string(s.t.Aiucjd),
                    action: () => (0, l.RL)(i.id, !i.pinned),
                }),
            }),
            (0, a.jsx)(d.rX, {
                children: (0, a.jsx)(d.Dr, {
                    id: "close-tab",
                    label: s.intl.string(s.t.In6PEK),
                    action: () => (0, l.f5)(i.id),
                }),
            }),
        ],
    });
}
