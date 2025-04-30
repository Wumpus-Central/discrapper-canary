n.d(t, { Z: () => d }), n(388685);
var l = n(192379),
    r = n(442837),
    i = n(951539),
    a = n(592125),
    s = n(356685),
    o = n(75666),
    c = n(981631);
let u = { can_broadcast: !1 };
function d(e, t, n) {
    let [d, m] = l.useState(u),
        [x, g] = l.useState(!1),
        h = l.useRef(!1),
        v = null == e ? void 0 : e.id,
        f = null == e ? void 0 : e.hasFeature(c.oNc.HAS_DIRECTORY_ENTRY);
    l.useEffect(() => {
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
        l.useEffect(() => {
            var e;
            if (!d.can_broadcast) return void g(!1);
            g(null == (e = d.has_broadcast) || e);
        }, [d]);
    let p = (0, r.e7)([a.Z], () => (0, i.wg)(n, [a.Z]));
    return {
        broadcastInfo: d,
        broadcastToDirectoryChannels: p && x,
        setBroadcastToDirectoryChannels: g,
        canEveryoneRoleViewEvent: p
    };
}
