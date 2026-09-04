n.d(t, { A: () => i });
var l = n(582128),
    u = n(17928),
    E = n(545868),
    r = n(642133);
let _ = {};
function i(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        n = (0, u.bG)([r.A], () => r.A.getRoleMemberCount(e));
    return (
        l.useEffect(() => {
            if (null == e) return;
            let n = _[e];
            (null != n && t > 0 && Date.now() - n < t) || ((_[e] = Date.now()), E.L(e));
        }, [e, t]),
        n
    );
}
