n.d(t, { A: () => s });
var i = n(582128),
    l = n(425587);
let s = function () {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        { refreshOnDepChange: t } = e,
        [n, s] = i.useState([]),
        [a, r] = i.useState(!0);
    async function o() {
        r(!0);
        try {
            let e = await l.A.fetchTeams(!0);
            s(e.body);
        } catch (e) {}
        r(!1);
    }
    let d = i.useRef(!0);
    return (
        i.useEffect(() => {
            (d.current || t) && ((d.current = !1), o());
        }, [t]),
        { teams: n, loading: a, refresh: o }
    );
};
