var e = u(855986),
    i = u(840387),
    l = u(253932),
    r = u(994500);
function s() {
    let t = l.Zd.useSetting(),
        n = (0, i.Z)();
    return null != t ? t : n;
}
u.d(
    n,
    {},
    {
        q: s,
        z: function (t) {
            let n = s(),
                u = (0, e.bG)([r.A], () => r.A.getNote(t));
            return n || null == u || "" === u ? null : u;
        },
    },
);
