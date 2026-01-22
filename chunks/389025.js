n.d(t, { A: () => d });
var r = n(64700),
    i = n(311907),
    l = n(34457),
    s = n(317525),
    a = n(71393),
    c = n(2242),
    o = n(652215);
function d(e) {
    let t = (0, i.bG)([a.A, s.A], () => {
            let t = a.A.getGuild(e);
            return null != t ? s.A.getEveryoneRole(t) : void 0;
        }),
        n = r.useMemo(
            () => (null == t || (0, l._m)(t, o.xBc.VIEW_CHANNEL) ? c.c4.SOME_CHANNELS : c.c4.ALL_CHANNELS),
            [t],
        ),
        d = n === c.c4.ALL_CHANNELS;
    return {
        format: n,
        isFullServerGating: d,
    };
}
