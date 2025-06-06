n.d(t, { Z: () => c }), n(953529);
var r = n(255367);
n(73800);
var i = n(442837),
    l = n(955415),
    a = n(314897),
    o = n(782605),
    s = n(388032);
function c(e) {
    var t, n;
    let { author: c, inviteError: u } = e,
        d = (0, i.e7)([a.default], () => a.default.getId()) === c.id ? s.intl.string(s.t.C89OLC) : s.intl.string(s.t['YVub5+']),
        p = (0, o.l)(null == u ? void 0 : u.code);
    return (0, r.jsxs)(l.Z, {
        children: [
            (0, r.jsx)(l.Z.Header, { text: d }),
            (0, r.jsxs)(l.Z.Body, {
                children: [
                    (0, r.jsx)(l.Z.Icon, { expired: !0 }),
                    (0, r.jsx)(l.Z.Info, {
                        expired: !0,
                        title: null != (t = null == p ? void 0 : p.title) ? t : s.intl.string(s.t['Jhx/ub']),
                        children: null != (n = null == p ? void 0 : p.description) ? n : null == u ? void 0 : u.message
                    })
                ]
            })
        ]
    });
}
