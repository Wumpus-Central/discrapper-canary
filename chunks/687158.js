n.d(t, {
    Of: () => _,
    ZP: () => u,
    le: () => d,
}),
    n(388685);
var r = n(647438),
    i = n(442837),
    a = n(594174),
    o = n(251625),
    s = n(255564),
    l = n(621853),
    c = n(484459);
function u(e, t) {
    return (0, i.e7)([a.default, l.Z], () => (null == e ? null : _(e, t, [a.default, l.Z])));
}
function d(e, t) {
    return (
        r.useEffect(() => {
            (0, c.Z)(e, void 0, { guildId: null != t ? t : void 0 });
        }, [t, e]),
        u(e, t)
    );
}
let f = (0, o.oH)((e, t) => new s.Z(e, t));
function _(e, t) {
    let [n, r] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [a.default, l.Z];
    if (null === e) return null;
    let i = n.getUser(e),
        o = r.getUserProfile(e),
        s = r.getGuildMemberProfile(e, t);
    return null == i || null == o ? null : f(o, s);
}
