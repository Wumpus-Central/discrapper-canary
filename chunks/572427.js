n.d(e, { Z: () => s });
var l = n(951288);
n(647438);
var r = n(442837),
    i = n(481060),
    u = n(430824),
    o = n(572004),
    c = n(981631),
    a = n(388032);
function s(t, e, n) {
    let s = null != n;
    if (null == (0, r.e7)([u.Z], () => u.Z.getGuild(e), [e])) return null;
    function d() {
        let l = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            r = ""
                .concat(location.protocol, "//")
                .concat(location.host)
                .concat(c.Z5c.GUILD_EVENT_DETAILS(e, t, l ? null : n));
        (0, o.JG)(r, () => (0, i.showToast)((0, i.createToast)(a.intl.string(a.t["L/PwZW"]), i.ToastType.SUCCESS)));
    }
    return (0, l.jsx)(i.sNh, {
        id: a.intl.string(a.t["9o+VKy"]),
        label: a.intl.string(a.t["9o+VKy"]),
        action: s ? void 0 : () => d(!0),
        children:
            s &&
            (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsx)(i.sNh, {
                        id: a.intl.string(a.t.QLtDqK),
                        label: a.intl.string(a.t.QLtDqK),
                        action: () => d(!1),
                    }),
                    (0, l.jsx)(i.sNh, {
                        id: a.intl.string(a.t.AYnhBw),
                        label: a.intl.string(a.t.AYnhBw),
                        action: () => d(!0),
                    }),
                ],
            }),
    });
}
