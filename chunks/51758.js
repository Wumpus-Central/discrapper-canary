var i = n(855986),
    r = n(696451),
    a = n(71393),
    s = n(287809),
    l = n(709977);
function o(e) {
    let [t, n, i] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [a.A, s.default, r.Ay];
    if (null == e) return !1;
    let o = t.getGuild(e),
        d = n.getCurrentUser(),
        c = !1;
    return (null != d && (c = i.getMember(e, d.id)?.isPending ?? !1), c && !!(0, l.Qd)(o));
}
n.d(
    t,
    {},
    {
        H: function (e) {
            return (0, i.bG)([a.A, s.default, r.Ay], () => null != e && o(e, [a.A, s.default, r.Ay]), [e]);
        },
        V: o,
    },
);
