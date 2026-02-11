"use strict";
n.d(t, { A: () => d });
var r = n(627968),
    i = n(397927),
    a = n(735991),
    s = n(287809),
    o = n(957565),
    l = n(342384),
    u = n(20015),
    c = n(652215);
function d(e) {
    let { application: t, label: n, onSuccess: d, showIconFirst: _ } = e;
    if (__OVERLAY__ || !o.p5 || null == t) return null;
    let f = s.default.getCurrentUser(),
        p = (0, a.EF)(t);
    function h() {
        if (null == t) return;
        let e = (0, u.n)(t, c.gfo.EMBEDDED)
            ? (0, l.W)({ applicationId: t.id, referrerId: f?.id })
            : (0, l.V)({ id: t.id, ...p });
        null != e && (0, o.C)(e, d);
    }
    let m = `copy-app-link-${t.id}`;
    return (0, r.jsx)(
        i.Drp,
        {
            id: m,
            label: n,
            action: h,
            icon: _ ? void 0 : i.qYV,
            iconLeft: _ ? i.qYV : void 0,
            leadingAccessory: { type: "icon", icon: i.qYV },
        },
        m,
    );
}
