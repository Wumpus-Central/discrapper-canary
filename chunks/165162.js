n.d(t, { A: () => h });
var i = n(627968),
    l = n(477782),
    s = n(173936),
    a = n(735991),
    r = n(287809),
    o = n(957565),
    d = n(342384),
    c = n(20015),
    u = n(652215);
function h(e) {
    let { application: t, label: n, onSuccess: h, showIconFirst: A } = e;
    if (__OVERLAY__ || !o.p5 || null == t) return null;
    let _ = r.default.getCurrentUser(),
        m = (0, a.EF)(t),
        g = `copy-app-link-${t.id}`;
    return (0, i.jsx)(
        l.Dr,
        {
            id: g,
            label: n,
            action: function () {
                if (null == t) return;
                let e = (0, c.n)(t, u.gfo.EMBEDDED)
                    ? (0, d.W)({ applicationId: t.id, referrerId: _?.id })
                    : (0, d.V)({ id: t.id, ...m });
                null != e && (0, o.C)(e, h);
            },
            icon: A ? void 0 : s.q,
            iconLeft: A ? s.q : void 0,
            leadingAccessory: { type: "icon", icon: s.q },
        },
        g,
    );
}
