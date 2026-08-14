n.d(t, { A: () => u });
var l = n(582128),
    r = n(17928),
    s = n(545868),
    i = n(642133);
let a = {};
function u(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        n = (0, r.bG)([i.A], () => i.A.getRoleMemberCount(e));
    return (
        l.useEffect(() => {
            if (null == e) return;
            let n = a[e];
            (null != n && t > 0 && Date.now() - n < t) || ((a[e] = Date.now()), s.L(e));
        }, [e, t]),
        n
    );
}
