var r = n(582128),
    E = n(855986),
    _ = n(545868),
    h = n(642133);
let l = {};
n.d(
    t,
    {},
    {
        A: function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                n = (0, E.bG)([h.A], () => h.A.getRoleMemberCount(e));
            return (
                r.useEffect(() => {
                    if (null == e) return;
                    let n = l[e];
                    (null != n && t > 0 && Date.now() - n < t) || ((l[e] = Date.now()), _.L(e));
                }, [e, t]),
                n
            );
        },
    },
);
