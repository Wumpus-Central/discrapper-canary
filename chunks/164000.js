n.d(t, {
    Z: function () {
        return c;
    }
});
var i = n(192379),
    r = n(149765),
    l = n(442837),
    s = n(430824),
    a = n(293810);
let o = n(981631).Plq.VIEW_CHANNEL;
function c(e) {
    let t = (0, l.e7)([s.Z], () => {
            let t = s.Z.getGuild(e);
            return null != t ? s.Z.getRole(t.id, t.getEveryoneRoleId()) : void 0;
        }),
        n = i.useMemo(() => (null == t ? a.e3.SOME_CHANNELS : r.e$(t.permissions, o) ? a.e3.SOME_CHANNELS : a.e3.ALL_CHANNELS), [t]),
        c = n === a.e3.ALL_CHANNELS;
    return {
        format: n,
        isFullServerGating: c
    };
}
