n.d(t, { Z: () => f }), n(47120), n(653041);
var r = n(192379),
    i = n(149765),
    l = n(442837),
    o = n(902704),
    a = n(592125),
    s = n(720202),
    c = n(271383),
    u = n(700785),
    d = n(231338);
let p = [],
    h = new Set();
function f(e) {
    let { entries: t, channelId: n } = e,
        f = (0, l.e7)([a.Z], () => a.Z.getChannel(n)),
        m = null == f ? void 0 : f.guild_id,
        g = r.useRef(new Set()),
        b = r.useMemo(() => {
            let e = new Set(null == t ? void 0 : t.map((e) => e.author_id));
            return (0, o.E)([...g.current], [...e]) || (g.current = e), g.current;
        }, [t]);
    r.useEffect(() => {
        null != m &&
            Array.from(b).forEach((e) => {
                s.Z.requestMember(m, e);
            });
    }, [b, m]);
    let _ = (0, l.Wu)(
            [c.ZP],
            () => {
                if (null == m) return p;
                let e = [];
                for (let t of b) c.ZP.isMember(m, t) && e.push(t);
                return e;
            },
            [b, m]
        ),
        C = r.useMemo(() => {
            if (null == f || 0 === _.length) return h;
            let e = new Set();
            for (let t of _) {
                let n = u.uB({
                    user: t,
                    context: f
                });
                i.e$(n, d.Pl.VIEW_CHANNEL) && e.add(t);
            }
            return e;
        }, [_, f]);
    return r.useMemo(() => (null == t ? void 0 : t.filter((e) => C.has(e.author_id))), [t, C]);
}
