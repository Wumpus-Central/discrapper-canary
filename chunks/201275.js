n.d(t, {
    $7: () => c,
    ox: () => l,
    qE: () => u,
});
var r = n(64700),
    i = n(311907),
    a = n(317525),
    s = n(71393),
    o = n(376304);

function l(e, t) {
    var n;
    if (null == e) return;
    let { customIconSrc: r, unicodeEmoji: i } = null != (n = (0, o.sE)(e, t)) ? n : {};
    if (null != r || null != i)
        return {
            src: r,
            name: e.name,
            roleId: e.id,
            size: t,
            unicodeEmoji: i,
        };
}

function c(e) {
    let { guildId: t, roleId: n, size: c = 20, role: u, guild: d } = e,
        { guild: f, role: p } = (0, i.cf)(
            [s.A, a.A],
            () => ({
                guild: null == d ? s.A.getGuild(t) : void 0,
                role: null == u && null != n ? a.A.getRole(t, n) : void 0,
            }),
            [t, n, u, d],
        ),
        _ = null != d ? d : f,
        h = null != u ? u : p;
    return r.useMemo(() => {
        if (null != _ && null != h && (0, o.fm)(_, h)) return l(h, c);
    }, [_, h, c]);
}

function u(e, t) {
    let n = (0, i.bG)([s.A], () => s.A.getGuild(e));
    if (null != n && (0, o.fm)(n, t)) return l(t);
}
