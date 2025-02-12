t.d(n, { Z: () => u }), t(47120);
var l = t(192379),
    i = t(442837),
    r = t(951539),
    s = t(592125),
    a = t(356685),
    o = t(75666),
    d = t(981631);
let c = { can_broadcast: !1 };
function u(e, n, t) {
    let [u, x] = l.useState(c),
        [h, m] = l.useState(!1),
        v = l.useRef(!1),
        g = null == e ? void 0 : e.id,
        j = null == e ? void 0 : e.hasFeature(d.oNc.HAS_DIRECTORY_ENTRY);
    l.useEffect(() => {
        if (!j) {
            x(c);
            return;
        }
        !v.current &&
            null != g &&
            (async () => {
                v.current = !0;
                try {
                    let e = await (0, a.X)(g, o.C2.GUILD_SCHEDULED_EVENT, n);
                    x(e);
                } catch (e) {
                    x(c);
                }
                v.current = !1;
            })();
    }, [g, j, n]),
        l.useEffect(() => {
            var e;
            if (!u.can_broadcast) {
                m(!1);
                return;
            }
            m(null === (e = u.has_broadcast) || void 0 === e || e);
        }, [u]);
    let N = (0, i.e7)([s.Z], () => (0, r.wg)(t, [s.Z]));
    return {
        broadcastInfo: u,
        broadcastToDirectoryChannels: N && h,
        setBroadcastToDirectoryChannels: m,
        canEveryoneRoleViewEvent: N
    };
}
