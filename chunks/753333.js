n.d(e, { A: () => A });
var l = n(627968);
n(64700);
var i = n(311907),
    r = n(691540),
    a = n(857250),
    d = n(97483),
    s = n(477782),
    u = n(71393),
    o = n(957565),
    c = n(652215),
    g = n(985018);
function A(t, e, n) {
    let A = null != n;
    if (null == (0, i.bG)([u.A], () => u.A.getGuild(e), [e])) return null;
    function E() {
        let l = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            i = `${location.protocol}//${location.host}${c.BVt.GUILD_EVENT_DETAILS(e, t, l ? null : n)}`;
        (0, o.C)(i, () => (0, r.P0)((0, a.o)(g.intl.string(g.t["L/PwZf"]), d.Ck.SUCCESS)));
    }
    return (0, l.jsx)(s.Dr, {
        id: g.intl.string(g.t["9o+VKx"]),
        label: g.intl.string(g.t["9o+VKx"]),
        action: A ? void 0 : () => E(!0),
        children:
            A &&
            (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsx)(s.Dr, {
                        id: g.intl.string(g.t.QLtDqP),
                        label: g.intl.string(g.t.QLtDqP),
                        action: () => E(!1),
                    }),
                    (0, l.jsx)(s.Dr, {
                        id: g.intl.string(g.t.AYnhB7),
                        label: g.intl.string(g.t.AYnhB7),
                        action: () => E(!0),
                    }),
                ],
            }),
    });
}
