n.d(t, {
    Ay: () => g,
    SB: () => h,
    VD: () => _,
    b0: () => m,
});
var r = n(627968);
n(64700);
var i = n(820284),
    a = n(793574),
    s = n(688810),
    o = n(459793),
    l = n(980545),
    c = n(195043),
    u = n(326911),
    d = n(265729),
    f = n(531525),
    p = n(652215);
function _() {
    return (0, r.jsx)(i.A, {
        section: p.JJy.LIBRARY_INVENTORY_CODE_REDEMPTION,
        children: (0, r.jsx)(u.A, {}),
    });
}
function h(e) {
    let { inOldSettings: t = !1 } = e;
    return (0, r.jsx)(i.A, {
        section: p.JJy.QUESTS,
        children: (0, r.jsx)(l.A, { inOldSettings: t }),
    });
}
function m(e) {
    let { inOldSettings: t = !1 } = e;
    return (0, r.jsx)(i.A, {
        section: p.JJy.LIBRARY_INVENTORY_GIFTS_LIST,
        children: (0, r.jsx)(d.A, { inOldSettings: t }),
    });
}
function g() {
    let { analyticsLocations: e } = (0, s.Ay)(a.A.USER_SETTINGS_GIFT_INVENTORY);
    return (0, r.jsxs)(s.f5, {
        value: e,
        children: [
            (0, r.jsx)(c.x, {
                setting: f.H.GIFT_CODE_REDEMPTION,
                children: (0, r.jsx)(_, {}),
            }),
            (0, r.jsx)(c.x, {
                setting: f.H.GIFT_INVENTORY_QUESTS,
                children: (0, r.jsx)(h, { inOldSettings: !0 }),
            }),
            (0, r.jsx)(c.x, {
                setting: f.H.GIFT_INVENTORY_LIST,
                children: (0, r.jsx)(m, { inOldSettings: !0 }),
            }),
            (0, r.jsx)(c.x, {
                setting: f.H.GIFT_BLOCKED_PAYMENTS,
                children: (0, r.jsx)(o.uK, {}),
            }),
        ],
    });
}
