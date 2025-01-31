n.d(t, { Z: () => c });
var i = n(192379),
    o = n(442837),
    a = n(480608),
    r = n(243730);
let _ = {};
function c(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        n = (0, o.e7)([r.Z], () => r.Z.getRoleMemberCount(e));
    return (
        i.useEffect(() => {
            if (null == e) return;
            let n = _[e];
            (null != n && t > 0 && Date.now() - n < t) || ((_[e] = Date.now()), a.E(e));
        }, [e, t]),
        n
    );
}
