n.d(e, { A: () => o });
var l = n(627968);
n(64700);
var i = n(311907),
    r = n(397927),
    a = n(71393),
    d = n(957565),
    s = n(652215),
    u = n(985018);
function o(t, e, n) {
    let o = null != n;
    if (null == (0, i.bG)([a.A], () => a.A.getGuild(e), [e])) return null;
    function c() {
        let l = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            i = `${location.protocol}//${location.host}${s.BVt.GUILD_EVENT_DETAILS(e, t, l ? null : n)}`;
        (0, d.C)(i, () => (0, r.showToast)((0, r.createToast)(u.intl.string(u.t["L/PwZf"]), r.ToastType.SUCCESS)));
    }
    return (0, l.jsx)(r.Drp, {
        id: u.intl.string(u.t["9o+VKx"]),
        label: u.intl.string(u.t["9o+VKx"]),
        action: o ? void 0 : () => c(!0),
        children:
            o &&
            (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsx)(r.Drp, {
                        id: u.intl.string(u.t.QLtDqP),
                        label: u.intl.string(u.t.QLtDqP),
                        action: () => c(!1),
                    }),
                    (0, l.jsx)(r.Drp, {
                        id: u.intl.string(u.t.AYnhB7),
                        label: u.intl.string(u.t.AYnhB7),
                        action: () => c(!0),
                    }),
                ],
            }),
    });
}
