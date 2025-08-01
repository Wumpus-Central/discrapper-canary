(n.d(t, { Z: () => d }), n(388685));
var r = n(73800),
    l = n(442837),
    i = n(951539),
    a = n(592125),
    s = n(356685),
    o = n(75666),
    c = n(981631);
let u = { can_broadcast: !1 };
function d(e, t, n) {
    let [d, x] = r.useState(u),
        [m, g] = r.useState(!1),
        v = r.useRef(!1),
        h = null == e ? void 0 : e.id,
        f = null == e ? void 0 : e.features.has(c.oNc.HAS_DIRECTORY_ENTRY);
    (r.useEffect(() => {
        if (!f) return void x(u);
        v.current ||
            null == h ||
            (async () => {
                v.current = !0;
                try {
                    let e = await (0, s.X)(h, o.C2.GUILD_SCHEDULED_EVENT, t);
                    x(e);
                } catch (e) {
                    x(u);
                }
                v.current = !1;
            })();
    }, [h, f, t]),
        r.useEffect(() => {
            var e;
            if (!d.can_broadcast) return void g(!1);
            g(null == (e = d.has_broadcast) || e);
        }, [d]));
    let p = (0, l.e7)([a.Z], () => (0, i.wg)(n, [a.Z]));
    return {
        broadcastInfo: d,
        broadcastToDirectoryChannels: p && m,
        setBroadcastToDirectoryChannels: g,
        canEveryoneRoleViewEvent: p
    };
}
