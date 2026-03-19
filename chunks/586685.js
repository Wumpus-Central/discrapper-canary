n.d(t, { Ay: () => h, SB: () => A, VD: () => g, b0: () => x });
var i = n(627968);
n(64700);
var s = n(820284),
    l = n(793574),
    a = n(688810),
    r = n(459793),
    o = n(980545),
    d = n(195043),
    c = n(326911),
    u = n(265729),
    _ = n(531525),
    m = n(652215);
function g() {
    return (0, i.jsx)(s.A, { section: m.JJy.LIBRARY_INVENTORY_CODE_REDEMPTION, children: (0, i.jsx)(c.A, {}) });
}
function A(e) {
    let { inOldSettings: t = !1 } = e;
    return (0, i.jsx)(s.A, { section: m.JJy.QUESTS, children: (0, i.jsx)(o.A, { inOldSettings: t }) });
}
function x(e) {
    let { inOldSettings: t = !1 } = e;
    return (0, i.jsx)(s.A, {
        section: m.JJy.LIBRARY_INVENTORY_GIFTS_LIST,
        children: (0, i.jsx)(u.A, { inOldSettings: t }),
    });
}
function h() {
    let { analyticsLocations: e } = (0, a.Ay)(l.A.USER_SETTINGS_GIFT_INVENTORY);
    return (0, i.jsxs)(a.f5, {
        value: e,
        children: [
            (0, i.jsx)(d.x, { setting: _.H.GIFT_CODE_REDEMPTION, children: (0, i.jsx)(g, {}) }),
            (0, i.jsx)(d.x, { setting: _.H.GIFT_INVENTORY_QUESTS, children: (0, i.jsx)(A, { inOldSettings: !0 }) }),
            (0, i.jsx)(d.x, { setting: _.H.GIFT_INVENTORY_LIST, children: (0, i.jsx)(x, { inOldSettings: !0 }) }),
            (0, i.jsx)(d.x, { setting: _.H.GIFT_BLOCKED_PAYMENTS, children: (0, i.jsx)(r.uK, {}) }),
        ],
    });
}
