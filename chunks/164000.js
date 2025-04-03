n.d(t, { Z: () => c });
var r = n(192379),
    i = n(149765),
    s = n(442837),
    a = n(430824),
    l = n(293810);
let o = n(981631).Plq.VIEW_CHANNEL;
function c(e) {
    let t = (0, s.e7)([a.Z], () => {
            let t = a.Z.getGuild(e);
            return null != t ? a.Z.getRole(t.id, t.getEveryoneRoleId()) : void 0;
        }),
        n = r.useMemo(() => (null == t || i.e$(t.permissions, o) ? l.e3.SOME_CHANNELS : l.e3.ALL_CHANNELS), [t]),
        c = n === l.e3.ALL_CHANNELS;
    return {
        format: n,
        isFullServerGating: c
    };
}
