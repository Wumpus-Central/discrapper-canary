n.d(t, {
    Z: function () {
        return c;
    }
});
var i = n(200651);
n(192379);
var r = n(442837),
    l = n(955415),
    a = n(314897),
    o = n(782605),
    s = n(388032);
function c(e) {
    var t, n;
    let { author: c, inviteError: u } = e,
        d = (0, r.e7)([a.default], () => a.default.getId()) === c.id ? s.intl.string(s.t.C89OLC) : s.intl.string(s.t['YVub5+']),
        m = (0, o.l)(null == u ? void 0 : u.code);
    return (0, i.jsxs)(l.Z, {
        children: [
            (0, i.jsx)(l.Z.Header, { text: d }),
            (0, i.jsxs)(l.Z.Body, {
                children: [
                    (0, i.jsx)(l.Z.Icon, { expired: !0 }),
                    (0, i.jsx)(l.Z.Info, {
                        expired: !0,
                        title: null !== (t = null == m ? void 0 : m.title) && void 0 !== t ? t : s.intl.string(s.t['Jhx/ub']),
                        children: null !== (n = null == m ? void 0 : m.description) && void 0 !== n ? n : null == u ? void 0 : u.message
                    })
                ]
            })
        ]
    });
}
