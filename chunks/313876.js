(n.d(t, { Z: () => c }), n(953529));
var r = n(255367);
n(73800);
var i = n(442837),
    o = n(955415),
    a = n(314897),
    s = n(782605),
    l = n(388032);
function c(e) {
    var t, n;
    let { author: c, inviteError: u } = e,
        d = (0, i.e7)([a.default], () => a.default.getId()) === c.id ? l.intl.string(l.t.C89OLC) : l.intl.string(l.t['YVub5+']),
        f = (0, s.l)(null == u ? void 0 : u.code);
    return (0, r.jsxs)(o.Z, {
        children: [
            (0, r.jsx)(o.Z.Header, { text: d }),
            (0, r.jsxs)(o.Z.Body, {
                children: [
                    (0, r.jsx)(o.Z.Icon, { expired: !0 }),
                    (0, r.jsx)(o.Z.Info, {
                        expired: !0,
                        title: null != (t = null == f ? void 0 : f.title) ? t : l.intl.string(l.t['Jhx/ub']),
                        children: null != (n = null == f ? void 0 : f.description) ? n : null == u ? void 0 : u.message
                    })
                ]
            })
        ]
    });
}
