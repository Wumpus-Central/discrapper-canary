n.d(e, { Z: () => s });
var i = n(192379),
    l = n(442837),
    d = n(480608),
    r = n(243730);
let a = {};
function s(t) {
    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        n = (0, l.e7)([r.Z], () => r.Z.getRoleMemberCount(t));
    return (
        i.useEffect(() => {
            if (null == t) return;
            let n = a[t];
            (null != n && e > 0 && Date.now() - n < e) || ((a[t] = Date.now()), d.E(t));
        }, [t, e]),
        n
    );
}
