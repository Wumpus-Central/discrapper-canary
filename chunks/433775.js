l.d(n, { Z: () => u }), l(47120);
var t = l(192379),
    i = l(442837),
    a = l(951539),
    r = l(592125),
    s = l(356685),
    o = l(75666),
    d = l(981631);
let c = { can_broadcast: !1 };
function u(e, n, l) {
    let [u, x] = t.useState(c),
        [m, h] = t.useState(!1),
        v = t.useRef(!1),
        g = null == e ? void 0 : e.id,
        j = null == e ? void 0 : e.hasFeature(d.oNc.HAS_DIRECTORY_ENTRY);
    t.useEffect(() => {
        if (!j) {
            x(c);
            return;
        }
        !v.current &&
            null != g &&
            (async () => {
                v.current = !0;
                try {
                    let e = await (0, s.X)(g, o.C2.GUILD_SCHEDULED_EVENT, n);
                    x(e);
                } catch (e) {
                    x(c);
                }
                v.current = !1;
            })();
    }, [g, j, n]),
        t.useEffect(() => {
            var e;
            if (!u.can_broadcast) {
                h(!1);
                return;
            }
            h(null === (e = u.has_broadcast) || void 0 === e || e);
        }, [u]);
    let N = (0, i.e7)([r.Z], () => (0, a.wg)(l, [r.Z]));
    return {
        broadcastInfo: u,
        broadcastToDirectoryChannels: N && m,
        setBroadcastToDirectoryChannels: h,
        canEveryoneRoleViewEvent: N
    };
}
