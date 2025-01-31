n.d(t, { Z: () => c });
var i = n(200651);
n(192379);
var l = n(442837),
    a = n(955415),
    r = n(314897),
    s = n(782605),
    o = n(388032);
function c(e) {
    var t, n;
    let { author: c, inviteError: d } = e,
        u = (0, l.e7)([r.default], () => r.default.getId()) === c.id ? o.intl.string(o.t.C89OLC) : o.intl.string(o.t['YVub5+']),
        m = (0, s.l)(null == d ? void 0 : d.code);
    return (0, i.jsxs)(a.Z, {
        children: [
            (0, i.jsx)(a.Z.Header, { text: u }),
            (0, i.jsxs)(a.Z.Body, {
                children: [
                    (0, i.jsx)(a.Z.Icon, { expired: !0 }),
                    (0, i.jsx)(a.Z.Info, {
                        expired: !0,
                        title: null !== (t = null == m ? void 0 : m.title) && void 0 !== t ? t : o.intl.string(o.t['Jhx/ub']),
                        children: null !== (n = null == m ? void 0 : m.description) && void 0 !== n ? n : null == d ? void 0 : d.message
                    })
                ]
            })
        ]
    });
}
