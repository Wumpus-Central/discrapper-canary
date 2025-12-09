n.d(e, { Z: () => s });
var l = n(54381);
n(473749);
var r = n(442837),
    i = n(481060),
    o = n(430824),
    u = n(572004),
    c = n(981631),
    a = n(388032);
function s(t, e, n) {
    let s = null != n;
    if (null == (0, r.e7)([o.Z], () => o.Z.getGuild(e), [e])) return null;
    function d() {
        let l = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            r = ""
                .concat(location.protocol, "//")
                .concat(location.host)
                .concat(c.Z5c.GUILD_EVENT_DETAILS(e, t, l ? null : n));
        (0, u.JG)(r, () => (0, i.showToast)((0, i.createToast)(a.intl.string(a.t["L/PwZf"]), i.ToastType.SUCCESS)));
    }
    return (0, l.jsx)(i.sNh, {
        id: a.intl.string(a.t["9o+VKx"]),
        label: a.intl.string(a.t["9o+VKx"]),
        action: s ? void 0 : () => d(!0),
        children:
            s &&
            (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsx)(i.sNh, {
                        id: a.intl.string(a.t.QLtDqP),
                        label: a.intl.string(a.t.QLtDqP),
                        action: () => d(!1),
                    }),
                    (0, l.jsx)(i.sNh, {
                        id: a.intl.string(a.t.AYnhB7),
                        label: a.intl.string(a.t.AYnhB7),
                        action: () => d(!0),
                    }),
                ],
            }),
    });
}
