n.d(t, { A: () => s });
var u = n(582128),
    l = n(17928),
    r = n(545868),
    i = n(642133);
let o = {};
function s(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        n = (0, l.bG)([i.A], () => i.A.getRoleMemberCount(e));
    return (
        u.useEffect(() => {
            if (null == e) return;
            let n = o[e];
            (null != n && t > 0 && Date.now() - n < t) || ((o[e] = Date.now()), r.L(e));
        }, [e, t]),
        n
    );
}
