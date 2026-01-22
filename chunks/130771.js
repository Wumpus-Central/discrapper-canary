n.d(t, {
    A: () => a,
}),
    n(896048);
var r = n(64700),
    i = n(425587);
let a = function () {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        { refreshOnDepChange: t } = e,
        [n, a] = r.useState([]),
        [s, o] = r.useState(!0),
        l = async () => {
            o(!0);
            try {
                let e = await i.A.fetchTeams(!0);
                a(e.body);
            } catch (e) {}
            o(!1);
        },
        c = r.useRef(!0);
    return (
        r.useEffect(() => {
            (c.current || t) && ((c.current = !1), l());
        }, [t]),
        {
            teams: n,
            loading: s,
            refresh: l,
        }
    );
};
