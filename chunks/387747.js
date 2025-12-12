n.d(t, {
    ZP: () => g,
    nJ: () => h,
    od: () => _,
    rX: () => m,
});
var r = n(54381);
n(473749);
var i = n(410575),
    a = n(100527),
    o = n(906732),
    s = n(89057),
    l = n(625252),
    c = n(921801),
    u = n(541540),
    d = n(29599),
    f = n(726985),
    p = n(981631);
function _() {
    return (0, r.jsx)(i.Z, {
        section: p.jXE.LIBRARY_INVENTORY_CODE_REDEMPTION,
        children: (0, r.jsx)(u.Z, {}),
    });
}
function m(e) {
    let { inOldSettings: t = !1 } = e;
    return (0, r.jsx)(i.Z, {
        section: p.jXE.QUESTS,
        children: (0, r.jsx)(l.Z, { inOldSettings: t }),
    });
}
function h(e) {
    let { inOldSettings: t = !1 } = e;
    return (0, r.jsx)(i.Z, {
        section: p.jXE.LIBRARY_INVENTORY_GIFTS_LIST,
        children: (0, r.jsx)(d.Z, { inOldSettings: t }),
    });
}
function g() {
    let { analyticsLocations: e } = (0, o.ZP)(a.Z.USER_SETTINGS_GIFT_INVENTORY);
    return (0, r.jsxs)(o.Gt, {
        value: e,
        children: [
            (0, r.jsx)(c.F, {
                setting: f.s6.GIFT_CODE_REDEMPTION,
                children: (0, r.jsx)(_, {}),
            }),
            (0, r.jsx)(c.F, {
                setting: f.s6.GIFT_INVENTORY_QUESTS,
                children: (0, r.jsx)(m, { inOldSettings: !0 }),
            }),
            (0, r.jsx)(c.F, {
                setting: f.s6.GIFT_INVENTORY_LIST,
                children: (0, r.jsx)(h, { inOldSettings: !0 }),
            }),
            (0, r.jsx)(c.F, {
                setting: f.s6.GIFT_BLOCKED_PAYMENTS,
                children: (0, r.jsx)(s.c8, {}),
            }),
        ],
    });
}
