n.d(t, { Z: () => l });
var r = n(192379),
    i = n(442837),
    o = n(480608),
    a = n(243730);
let s = {};
function l(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        n = (0, i.e7)([a.Z], () => a.Z.getRoleMemberCount(e));
    return (
        r.useEffect(() => {
            if (null == e) return;
            let n = s[e];
            (null != n && t > 0 && Date.now() - n < t) || ((s[e] = Date.now()), o.E(e));
        }, [e, t]),
        n
    );
}
