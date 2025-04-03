n.d(t, { Z: () => c }), n(266796);
var r = n(200651);
n(192379);
var i = n(442837),
    a = n(955415),
    l = n(314897),
    o = n(782605),
    s = n(388032);
function c(e) {
    var t, n;
    let { author: c, inviteError: u } = e,
        d = (0, i.e7)([l.default], () => l.default.getId()) === c.id ? s.NW.string(s.t.C89OLC) : s.NW.string(s.t['YVub5+']),
        p = (0, o.l)(null == u ? void 0 : u.code);
    return (0, r.jsxs)(a.Z, {
        children: [
            (0, r.jsx)(a.Z.Header, { text: d }),
            (0, r.jsxs)(a.Z.Body, {
                children: [
                    (0, r.jsx)(a.Z.Icon, { expired: !0 }),
                    (0, r.jsx)(a.Z.Info, {
                        expired: !0,
                        title: null != (t = null == p ? void 0 : p.title) ? t : s.NW.string(s.t['Jhx/ub']),
                        children: null != (n = null == p ? void 0 : p.description) ? n : null == u ? void 0 : u.message
                    })
                ]
            })
        ]
    });
}
