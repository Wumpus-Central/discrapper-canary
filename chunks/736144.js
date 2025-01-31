n.d(t, { Z: () => d });
var i = n(200651),
    r = n(192379),
    a = n(442837),
    s = n(451478),
    o = n(576125),
    l = n(465858),
    u = n(112843);
function c(e) {
    let { confettiSpawnRef: t, shouldFire: n } = e,
        i = (0, a.e7)([s.Z], () => s.Z.isFocused()),
        o = (0, u.Z)(),
        c = (0, l.Z)(t);
    return (
        r.useEffect(() => {
            i && n && null != c && o.fire(c.x, c.y);
        }, [o, i, c, n]),
        null
    );
}
function d(e) {
    return (0, i.jsx)(o.Z, {
        confettiLocation: e.confettiLocation,
        children: (0, i.jsx)(c, { ...e })
    });
}
