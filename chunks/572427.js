n.d(t, { Z: () => u });
var r = n(200651);
n(192379);
var l = n(481060),
    i = n(572004),
    o = n(592126),
    c = n(981631),
    a = n(388032);
function u(e, t, n) {
    let u = null != n,
        { isMember: s } = (0, o.Z)(t, e);
    if (!s) return null;
    function d() {
        let r = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        (0, i.JG)(
            ''
                .concat(location.protocol, '//')
                .concat(location.host)
                .concat(c.Z5c.GUILD_EVENT_DETAILS(t, e, r ? null : n))
        ),
            (0, l.showToast)((0, l.createToast)(a.NW.string(a.t['L/PwZW']), l.ToastType.SUCCESS));
    }
    return (0, r.jsx)(l.sNh, {
        id: a.NW.string(a.t['9o+VKy']),
        label: a.NW.string(a.t['9o+VKy']),
        action: u ? void 0 : () => d(!0),
        children:
            u &&
            (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(l.sNh, {
                        id: a.NW.string(a.t.QLtDqK),
                        label: a.NW.string(a.t.QLtDqK),
                        action: () => d(!1)
                    }),
                    (0, r.jsx)(l.sNh, {
                        id: a.NW.string(a.t.AYnhBw),
                        label: a.NW.string(a.t.AYnhBw),
                        action: () => d(!0)
                    })
                ]
            })
    });
}
