n.d(t, { Z: () => c });
var r = n(192379),
    i = n(149765),
    s = n(442837),
    l = n(430824),
    a = n(293810);
let o = n(981631).Plq.VIEW_CHANNEL;
function c(e) {
    let t = (0, s.e7)([l.Z], () => {
            let t = l.Z.getGuild(e);
            return null != t ? l.Z.getRole(t.id, t.getEveryoneRoleId()) : void 0;
        }),
        n = r.useMemo(() => (null == t || i.e$(t.permissions, o) ? a.e3.SOME_CHANNELS : a.e3.ALL_CHANNELS), [t]),
        c = n === a.e3.ALL_CHANNELS;
    return {
        format: n,
        isFullServerGating: c
    };
}
