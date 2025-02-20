n.d(t, { Z: () => c }), n(266796);
var r = n(200651);
n(192379);
var i = n(442837),
    a = n(955415),
    o = n(314897),
    l = n(782605),
    s = n(388032);
function c(e) {
    var t, n;
    let { author: c, inviteError: d } = e,
        u = (0, i.e7)([o.default], () => o.default.getId()) === c.id ? s.NW.string(s.t.C89OLC) : s.NW.string(s.t['YVub5+']),
        p = (0, l.l)(null == d ? void 0 : d.code);
    return (0, r.jsxs)(a.Z, {
        children: [
            (0, r.jsx)(a.Z.Header, { text: u }),
            (0, r.jsxs)(a.Z.Body, {
                children: [
                    (0, r.jsx)(a.Z.Icon, { expired: !0 }),
                    (0, r.jsx)(a.Z.Info, {
                        expired: !0,
                        title: null !== (t = null == p ? void 0 : p.title) && void 0 !== t ? t : s.NW.string(s.t['Jhx/ub']),
                        children: null !== (n = null == p ? void 0 : p.description) && void 0 !== n ? n : null == d ? void 0 : d.message
                    })
                ]
            })
        ]
    });
}
