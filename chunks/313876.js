n.d(t, { Z: () => c }), n(953529);
var r = n(54381);
n(473749);
var i = n(442837),
    a = n(955415),
    o = n(314897),
    s = n(782605),
    l = n(388032);
function c(e) {
    var t, n;
    let { author: c, inviteError: u } = e,
        d =
            (0, i.e7)([o.default], () => o.default.getId()) === c.id
                ? l.intl.string(l.t.C89OLE)
                : l.intl.string(l.t.YVub5y),
        f = (0, s.l)(null == u ? void 0 : u.code);
    return (0, r.jsxs)(a.Z, {
        children: [
            (0, r.jsx)(a.Z.Header, { text: d }),
            (0, r.jsxs)(a.Z.Body, {
                children: [
                    (0, r.jsx)(a.Z.Icon, { expired: !0 }),
                    (0, r.jsx)(a.Z.Info, {
                        expired: !0,
                        title: null != (t = null == f ? void 0 : f.title) ? t : l.intl.string(l.t["Jhx/ud"]),
                        children: null != (n = null == f ? void 0 : f.description) ? n : null == u ? void 0 : u.message,
                    }),
                ],
            }),
        ],
    });
}
