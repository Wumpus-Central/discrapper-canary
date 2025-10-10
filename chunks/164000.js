n.d(t, { Z: () => d });
var r = n(647438),
    i = n(442837),
    l = n(345162),
    s = n(485386),
    a = n(430824),
    o = n(293810),
    c = n(981631);
function d(e) {
    let t = (0, i.e7)([a.Z, s.Z], () => {
            let t = a.Z.getGuild(e);
            return null != t ? s.Z.getEveryoneRole(t) : void 0;
        }),
        n = r.useMemo(
            () => (null == t || (0, l.Fs)(t, c.Plq.VIEW_CHANNEL) ? o.e3.SOME_CHANNELS : o.e3.ALL_CHANNELS),
            [t],
        ),
        d = n === o.e3.ALL_CHANNELS;
    return {
        format: n,
        isFullServerGating: d,
    };
}
