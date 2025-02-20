n.d(t, { Z: () => u }), n(47120);
var r = n(192379),
    l = n(442837),
    i = n(951539),
    a = n(592125),
    s = n(356685),
    o = n(75666),
    c = n(981631);
let d = { can_broadcast: !1 };
function u(e, t, n) {
    let [u, m] = r.useState(d),
        [x, g] = r.useState(!1),
        h = r.useRef(!1),
        v = null == e ? void 0 : e.id,
        f = null == e ? void 0 : e.hasFeature(c.oNc.HAS_DIRECTORY_ENTRY);
    r.useEffect(() => {
        if (!f) {
            m(d);
            return;
        }
        !h.current &&
            null != v &&
            (async () => {
                h.current = !0;
                try {
                    let e = await (0, s.X)(v, o.C2.GUILD_SCHEDULED_EVENT, t);
                    m(e);
                } catch (e) {
                    m(d);
                }
                h.current = !1;
            })();
    }, [v, f, t]),
        r.useEffect(() => {
            var e;
            if (!u.can_broadcast) {
                g(!1);
                return;
            }
            g(null === (e = u.has_broadcast) || void 0 === e || e);
        }, [u]);
    let p = (0, l.e7)([a.Z], () => (0, i.wg)(n, [a.Z]));
    return {
        broadcastInfo: u,
        broadcastToDirectoryChannels: p && x,
        setBroadcastToDirectoryChannels: g,
        canEveryoneRoleViewEvent: p
    };
}
