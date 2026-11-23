var e = n(477900);
n(582128);
var s = n(855986),
    a = n(165862),
    l = n(477782),
    r = n(442433),
    o = n(114129),
    d = n(442325),
    c = n(792996);
n.d(
    i,
    {},
    {
        default: function (t) {
            let { tab: i, onSelect: n, onRequestClose: b } = t,
                { closeOtherTabsCount: h, closeTabsToRightCount: u } = (0, s.cf)([d.A], () => ({
                    closeOtherTabsCount: d.A.getCloseOtherTabsCount(i.id),
                    closeTabsToRightCount: d.A.getCloseTabsToRightCount(i.id),
                }));
            return (0, e.jsxs)(a.W, {
                "data-menu-migrated": !0,
                navId: "channel-tab-context",
                onClose: r.Z_,
                "aria-label": c.intl.string(c.t.dd5Eyn),
                onSelect: n,
                children: [
                    (0, e.jsx)(l.rX, {
                        children: i.pinned
                            ? (0, e.jsx)(l.Dr, {
                                  id: "unpin-tab",
                                  label: c.intl.string(c.t.LvKSA8),
                                  action: () => (0, o.RL)(i.id, !1, "context_menu"),
                              })
                            : (0, e.jsx)(l.Dr, {
                                  id: "pin-tab",
                                  label: c.intl.string(c.t.Aiucjd),
                                  action: () => (0, o.RL)(i.id, !0, "context_menu"),
                              }),
                    }),
                    (0, e.jsxs)(l.rX, {
                        children: [
                            (0, e.jsx)(l.Dr, { id: "close-tab", label: c.intl.string(c.t.In6PEK), action: b }),
                            h > 0 &&
                                (0, e.jsx)(l.Dr, {
                                    id: "close-other-tabs",
                                    label: c.intl.string(c.t.zYSR6A),
                                    action: () => (0, o.Qg)(i.id, "all"),
                                }),
                            u > 0 &&
                                (0, e.jsx)(l.Dr, {
                                    id: "close-tabs-to-right",
                                    label: c.intl.string(c.t["0rIskX"]),
                                    action: () => (0, o.Qg)(i.id, "right"),
                                }),
                        ],
                    }),
                ],
            });
        },
    },
);
