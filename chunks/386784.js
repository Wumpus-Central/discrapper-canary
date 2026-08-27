n.d(t, { A: () => u });
var l = n(582128),
    r = n(17928),
    i = n(545868),
    s = n(642133);
let a = {};
function u(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        n = (0, r.bG)([s.A], () => s.A.getRoleMemberCount(e));
    return (
        l.useEffect(() => {
            if (null == e) return;
            let n = a[e];
            (null != n && t > 0 && Date.now() - n < t) || ((a[e] = Date.now()), i.L(e));
        }, [e, t]),
        n
    );
}
