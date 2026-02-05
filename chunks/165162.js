"use strict";
n.d(t, { A: () => d }), n(938796);
var r = n(627968),
    i = n(665260),
    a = n(397927),
    s = n(735991),
    o = n(287809),
    l = n(957565),
    u = n(342384),
    c = n(652215);
function d(e) {
    let { application: t, label: n, onSuccess: d, showIconFirst: _ } = e;
    if (__OVERLAY__ || !l.p5 || null == t) return null;
    let f = o.default.getCurrentUser(),
        p = (0, s.EF)(t);
    function h() {
        if (null == t) return;
        let e = (0, i.Lt)(t.flags ?? 0, c.gfo.EMBEDDED)
            ? (0, u.W)({ applicationId: t.id, referrerId: f?.id })
            : (0, u.V)({ id: t.id, ...p });
        null != e && (0, l.C)(e, d);
    }
    let m = `copy-app-link-${t.id}`;
    return (0, r.jsx)(
        a.Drp,
        {
            id: m,
            label: n,
            action: h,
            icon: _ ? void 0 : a.qYV,
            iconLeft: _ ? a.qYV : void 0,
            leadingAccessory: { type: "icon", icon: a.qYV },
        },
        m,
    );
}
