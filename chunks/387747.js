n.d(t, { Z: () => f });
var i = n(255367);
n(73800);
var r = n(410575),
    s = n(100527),
    l = n(906732),
    a = n(89057),
    o = n(347475),
    c = n(625252),
    d = n(921801),
    u = n(541540),
    m = n(29599),
    g = n(726985),
    p = n(981631),
    h = n(159628);
function f() {
    let { analyticsLocations: e } = (0, l.ZP)(s.Z.USER_SETTINGS_GIFT_INVENTORY);
    return (0, i.jsxs)(l.Gt, {
        value: e,
        children: [
            (0, i.jsx)(d.F, {
                setting: g.s6.GIFT_NITRO,
                children: (0, i.jsx)(o.Z, {
                    location: s.Z.USER_SETTINGS_GIFT_INVENTORY,
                    className: h.giftNitro,
                    imageClassName: h.giftNitroImage,
                    textContainerOverrideStyles: {
                        padding: '32px',
                        width: '360px'
                    },
                    analyticsLocation: {
                        page: p.ZY5.GIFTING_SETTINGS,
                        section: p.jXE.GIFT_BANNER
                    }
                })
            }),
            (0, i.jsx)(d.F, {
                setting: g.s6.GIFT_CODE_REDEMPTION,
                children: (0, i.jsx)(r.Z, {
                    section: p.jXE.LIBRARY_INVENTORY_CODE_REDEMPTION,
                    children: (0, i.jsx)(u.Z, {})
                })
            }),
            (0, i.jsx)(d.F, {
                setting: g.s6.GIFT_INVENTORY_QUESTS,
                children: (0, i.jsx)(r.Z, {
                    section: p.jXE.QUESTS,
                    children: (0, i.jsx)(c.Z, {})
                })
            }),
            (0, i.jsx)(d.F, {
                setting: g.s6.GIFT_INVENTORY_LIST,
                children: (0, i.jsx)(r.Z, {
                    section: p.jXE.LIBRARY_INVENTORY_GIFTS_LIST,
                    children: (0, i.jsx)(m.Z, {})
                })
            }),
            (0, i.jsx)(d.F, {
                setting: g.s6.GIFT_BLOCKED_PAYMENTS,
                children: (0, i.jsx)(a.c8, {})
            })
        ]
    });
}
