n.d(e, { Z: () => u });
var l = n(200651);
n(192379);
var r = n(481060),
    i = n(572004),
    o = n(592126),
    c = n(981631),
    a = n(388032);
function u(t, e, n) {
    let u = null != n,
        { isMember: s } = (0, o.Z)(e, t);
    if (!s) return null;
    function d() {
        let l = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            o = ''
                .concat(location.protocol, '//')
                .concat(location.host)
                .concat(c.Z5c.GUILD_EVENT_DETAILS(e, t, l ? null : n));
        (0, i.JG)(o, () => (0, r.showToast)((0, r.createToast)(a.intl.string(a.t['L/PwZW']), r.ToastType.SUCCESS)));
    }
    return (0, l.jsx)(r.sNh, {
        id: a.intl.string(a.t['9o+VKy']),
        label: a.intl.string(a.t['9o+VKy']),
        action: u ? void 0 : () => d(!0),
        children:
            u &&
            (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsx)(r.sNh, {
                        id: a.intl.string(a.t.QLtDqK),
                        label: a.intl.string(a.t.QLtDqK),
                        action: () => d(!1)
                    }),
                    (0, l.jsx)(r.sNh, {
                        id: a.intl.string(a.t.AYnhBw),
                        label: a.intl.string(a.t.AYnhBw),
                        action: () => d(!0)
                    })
                ]
            })
    });
}
