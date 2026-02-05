n.d(t, { Ay: () => _, SB: () => m, VD: () => g, b0: () => p });
var i = n(627968);
n(64700);
var l = n(820284),
    s = n(793574),
    a = n(688810),
    r = n(459793),
    o = n(980545),
    d = n(195043),
    c = n(326911),
    u = n(265729),
    h = n(531525),
    A = n(652215);
function g() {
    return (0, i.jsx)(l.A, { section: A.JJy.LIBRARY_INVENTORY_CODE_REDEMPTION, children: (0, i.jsx)(c.A, {}) });
}
function m(e) {
    let { inOldSettings: t = !1 } = e;
    return (0, i.jsx)(l.A, { section: A.JJy.QUESTS, children: (0, i.jsx)(o.A, { inOldSettings: t }) });
}
function p(e) {
    let { inOldSettings: t = !1 } = e;
    return (0, i.jsx)(l.A, {
        section: A.JJy.LIBRARY_INVENTORY_GIFTS_LIST,
        children: (0, i.jsx)(u.A, { inOldSettings: t }),
    });
}
function _() {
    let { analyticsLocations: e } = (0, a.Ay)(s.A.USER_SETTINGS_GIFT_INVENTORY);
    return (0, i.jsxs)(a.f5, {
        value: e,
        children: [
            (0, i.jsx)(d.x, { setting: h.H.GIFT_CODE_REDEMPTION, children: (0, i.jsx)(g, {}) }),
            (0, i.jsx)(d.x, { setting: h.H.GIFT_INVENTORY_QUESTS, children: (0, i.jsx)(m, { inOldSettings: !0 }) }),
            (0, i.jsx)(d.x, { setting: h.H.GIFT_INVENTORY_LIST, children: (0, i.jsx)(p, { inOldSettings: !0 }) }),
            (0, i.jsx)(d.x, { setting: h.H.GIFT_BLOCKED_PAYMENTS, children: (0, i.jsx)(r.uK, {}) }),
        ],
    });
}
