e.d(n, { Z: () => s });
var l = e(200651);
e(192379);
var i = e(481060),
    r = e(572004),
    u = e(592126),
    d = e(981631),
    a = e(388032);
function s(t, n, e) {
    let s = null != e,
        { isMember: o } = (0, u.Z)(n, t);
    if (!o) return null;
    function c() {
        let l = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        (0, r.JG)(
            ''
                .concat(location.protocol, '//')
                .concat(location.host)
                .concat(d.Z5c.GUILD_EVENT_DETAILS(n, t, l ? null : e))
        ),
            (0, i.showToast)((0, i.createToast)(a.intl.string(a.t['L/PwZW']), i.ToastType.SUCCESS));
    }
    return (0, l.jsx)(i.sNh, {
        id: a.intl.string(a.t['9o+VKy']),
        label: a.intl.string(a.t['9o+VKy']),
        action: s ? void 0 : () => c(!0),
        children:
            s &&
            (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsx)(i.sNh, {
                        id: a.intl.string(a.t.QLtDqK),
                        label: a.intl.string(a.t.QLtDqK),
                        action: () => c(!1)
                    }),
                    (0, l.jsx)(i.sNh, {
                        id: a.intl.string(a.t.AYnhBw),
                        label: a.intl.string(a.t.AYnhBw),
                        action: () => c(!0)
                    })
                ]
            })
    });
}
