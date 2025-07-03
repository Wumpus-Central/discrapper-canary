n.d(t, { Z: () => d });
var r = n(73800),
    i = n(149765),
    l = n(442837),
    s = n(485386),
    a = n(430824),
    o = n(293810);
let c = n(981631).Plq.VIEW_CHANNEL;
function d(e) {
    let t = (0, l.e7)([a.Z, s.Z], () => {
            let t = a.Z.getGuild(e);
            return null != t ? s.Z.getEveryoneRole(t) : void 0;
        }),
        n = r.useMemo(() => (null == t || i.e$(t.permissions, c) ? o.e3.SOME_CHANNELS : o.e3.ALL_CHANNELS), [t]),
        d = n === o.e3.ALL_CHANNELS;
    return {
        format: n,
        isFullServerGating: d
    };
}
