n.d(t, { Z: () => d }), n(47120);
var r = n(192379),
    l = n(442837),
    a = n(951539),
    i = n(592125),
    s = n(356685),
    o = n(75666),
    c = n(981631);
let u = { can_broadcast: !1 };
function d(e, t, n) {
    let [d, m] = r.useState(u),
        [x, g] = r.useState(!1),
        h = r.useRef(!1),
        v = null == e ? void 0 : e.id,
        f = null == e ? void 0 : e.hasFeature(c.oNc.HAS_DIRECTORY_ENTRY);
    r.useEffect(() => {
        if (!f) return void m(u);
        h.current ||
            null == v ||
            (async () => {
                h.current = !0;
                try {
                    let e = await (0, s.X)(v, o.C2.GUILD_SCHEDULED_EVENT, t);
                    m(e);
                } catch (e) {
                    m(u);
                }
                h.current = !1;
            })();
    }, [v, f, t]),
        r.useEffect(() => {
            var e;
            if (!d.can_broadcast) return void g(!1);
            g(null == (e = d.has_broadcast) || e);
        }, [d]);
    let p = (0, l.e7)([i.Z], () => (0, a.wg)(n, [i.Z]));
    return {
        broadcastInfo: d,
        broadcastToDirectoryChannels: p && x,
        setBroadcastToDirectoryChannels: g,
        canEveryoneRoleViewEvent: p
    };
}
