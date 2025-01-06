n.d(t, {
    Z: function () {
        return c;
    }
});
var i = n(192379),
    r = n(149765),
    l = n(442837),
    a = n(430824),
    s = n(293810);
let o = n(981631).Plq.VIEW_CHANNEL;
function c(e) {
    let t = (0, l.e7)([a.Z], () => {
            let t = a.Z.getGuild(e);
            return null != t ? a.Z.getRole(t.id, t.getEveryoneRoleId()) : void 0;
        }),
        n = i.useMemo(() => (null == t ? s.e3.SOME_CHANNELS : r.e$(t.permissions, o) ? s.e3.SOME_CHANNELS : s.e3.ALL_CHANNELS), [t]),
        c = n === s.e3.ALL_CHANNELS;
    return {
        format: n,
        isFullServerGating: c
    };
}
