var e = i(477900);
i(582128);
var a = i(165862),
    d = i(477782),
    l = i(442433),
    r = i(114129),
    s = i(792996);
i.d(
    t,
    {},
    {
        default: function (n) {
            let { tab: t, onSelect: i, onRequestClose: c } = n;
            return (0, e.jsxs)(a.W, {
                "data-menu-migrated": !0,
                navId: "channel-tab-context",
                onClose: l.Z_,
                "aria-label": s.intl.string(s.t.dd5Eyn),
                onSelect: i,
                children: [
                    (0, e.jsx)(d.rX, {
                        children: t.pinned
                            ? (0, e.jsx)(d.Dr, {
                                  id: "unpin-tab",
                                  label: s.intl.string(s.t.LvKSA8),
                                  action: () => (0, r.RL)(t.id, !1, "context_menu"),
                              })
                            : (0, e.jsx)(d.Dr, {
                                  id: "pin-tab",
                                  label: s.intl.string(s.t.Aiucjd),
                                  action: () => (0, r.RL)(t.id, !0, "context_menu"),
                              }),
                    }),
                    (0, e.jsx)(d.rX, {
                        children: (0, e.jsx)(d.Dr, { id: "close-tab", label: s.intl.string(s.t.In6PEK), action: c }),
                    }),
                ],
            });
        },
    },
);
