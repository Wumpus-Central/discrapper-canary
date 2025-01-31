n.d(t, { Z: () => m }), n(47120), n(653041);
var i = n(192379),
    l = n(149765),
    a = n(442837),
    r = n(902704),
    s = n(592125),
    o = n(720202),
    c = n(271383),
    d = n(700785),
    u = n(231338);
let h = [],
    p = new Set();
function m(e) {
    let { entries: t, channelId: n } = e,
        m = (0, a.e7)([s.Z], () => s.Z.getChannel(n)),
        f = null == m ? void 0 : m.guild_id,
        g = i.useRef(new Set()),
        _ = i.useMemo(() => {
            let e = new Set(null == t ? void 0 : t.map((e) => e.author_id));
            return (0, r.E)([...g.current], [...e]) || (g.current = e), g.current;
        }, [t]);
    i.useEffect(() => {
        null != f &&
            Array.from(_).forEach((e) => {
                o.Z.requestMember(f, e);
            });
    }, [_, f]);
    let C = (0, a.Wu)(
            [c.ZP],
            () => {
                if (null == f) return h;
                let e = [];
                for (let t of _) c.ZP.isMember(f, t) && e.push(t);
                return e;
            },
            [_, f]
        ),
        x = i.useMemo(() => {
            if (null == m || 0 === C.length) return p;
            let e = new Set();
            for (let t of C) {
                let n = d.uB({
                    user: t,
                    context: m
                });
                l.e$(n, u.Pl.VIEW_CHANNEL) && e.add(t);
            }
            return e;
        }, [C, m]);
    return i.useMemo(() => (null == t ? void 0 : t.filter((e) => x.has(e.author_id))), [t, x]);
}
