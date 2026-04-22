n.d(t, { A: () => c });
var i = n(64700),
    l = n(311907),
    s = n(34457),
    r = n(317525),
    a = n(71393),
    o = n(2242),
    d = n(652215);
function c(e) {
    let t = (0, l.bG)([a.A, r.A], () => {
            let t = a.A.getGuild(e);
            return null != t ? r.A.getEveryoneRole(t) : void 0;
        }),
        n = i.useMemo(
            () => (null == t || (0, s._m)(t, d.xBc.VIEW_CHANNEL) ? o.c4.SOME_CHANNELS : o.c4.ALL_CHANNELS),
            [t],
        ),
        c = n === o.c4.ALL_CHANNELS;
    return { format: n, isFullServerGating: c };
}
