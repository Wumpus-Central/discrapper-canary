n.d(t, { Z: () => f }), n(388685), n(539854);
var r = n(473749),
    i = n(149765),
    l = n(442837),
    a = n(902704),
    s = n(592125),
    o = n(720202),
    c = n(271383),
    d = n(700785),
    u = n(231338);
let p = [],
    h = new Set();
function f(e) {
    let { entries: t, channelId: n } = e,
        f = (0, l.e7)([s.Z], () => s.Z.getChannel(n)),
        g = null == f ? void 0 : f.guild_id,
        m = r.useRef(new Set()),
        b = r.useMemo(() => {
            let e = new Set(null == t ? void 0 : t.map((e) => e.author_id));
            return (0, a.E)([...m.current], [...e]) || (m.current = e), m.current;
        }, [t]);
    r.useEffect(() => {
        null != g &&
            Array.from(b).forEach((e) => {
                o.Z.requestMember(g, e);
            });
    }, [b, g]);
    let _ = (0, l.Wu)([c.ZP], () => {
            if (null == g) return p;
            let e = [];
            for (let t of b) c.ZP.isMember(g, t) && e.push(t);
            return e;
        }, [b, g]),
        y = r.useMemo(() => {
            if (null == f || 0 === _.length) return h;
            let e = new Set();
            for (let t of _) {
                let n = d.uB({
                    user: t,
                    context: f,
                });
                i.e$(n, u.Pl.VIEW_CHANNEL) && e.add(t);
            }
            return e;
        }, [_, f]);
    return r.useMemo(() => (null == t ? void 0 : t.filter((e) => y.has(e.author_id))), [t, y]);
}
