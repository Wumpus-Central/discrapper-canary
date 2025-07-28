n.d(t, { Z: () => d });
var r = n(73800),
    i = n(442837),
    l = n(345162),
    a = n(485386),
    s = n(430824),
    o = n(293810),
    c = n(981631);
function d(e) {
    let t = (0, i.e7)([s.Z, a.Z], () => {
            let t = s.Z.getGuild(e);
            return null != t ? a.Z.getEveryoneRole(t) : void 0;
        }),
        n = r.useMemo(() => (null == t || (0, l.Fs)(t, c.Plq.VIEW_CHANNEL) ? o.e3.SOME_CHANNELS : o.e3.ALL_CHANNELS), [t]),
        d = n === o.e3.ALL_CHANNELS;
    return {
        format: n,
        isFullServerGating: d
    };
}
