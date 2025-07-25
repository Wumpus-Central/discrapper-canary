e.d(n, { Z: () => u });
var l = e(255367);
e(73800);
var i = e(481060),
    r = e(572004),
    o = e(592126),
    a = e(981631),
    c = e(388032);
function u(t, n, e) {
    let u = null != e,
        { isMember: s } = (0, o.Z)(n, t);
    if (!s) return null;
    function d() {
        let l = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            o = ''
                .concat(location.protocol, '//')
                .concat(location.host)
                .concat(a.Z5c.GUILD_EVENT_DETAILS(n, t, l ? null : e));
        (0, r.JG)(o, () => (0, i.showToast)((0, i.createToast)(c.intl.string(c.t['L/PwZW']), i.ToastType.SUCCESS)));
    }
    return (0, l.jsx)(i.sNh, {
        id: c.intl.string(c.t['9o+VKy']),
        label: c.intl.string(c.t['9o+VKy']),
        action: u ? void 0 : () => d(!0),
        children:
            u &&
            (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsx)(i.sNh, {
                        id: c.intl.string(c.t.QLtDqK),
                        label: c.intl.string(c.t.QLtDqK),
                        action: () => d(!1)
                    }),
                    (0, l.jsx)(i.sNh, {
                        id: c.intl.string(c.t.AYnhBw),
                        label: c.intl.string(c.t.AYnhBw),
                        action: () => d(!0)
                    })
                ]
            })
    });
}
