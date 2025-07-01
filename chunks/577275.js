(n.d(t, { Z: () => i }), n(388685));
var r = n(73800),
    s = n(586739);
let i = function () {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        { refreshOnDepChange: t } = e,
        [n, i] = r.useState([]),
        [l, o] = r.useState(!0),
        a = async () => {
            o(!0);
            try {
                let e = await s.Z.fetchTeams(!0);
                i(e.body);
            } catch (e) {}
            o(!1);
        },
        c = r.useRef(!0);
    return (
        r.useEffect(() => {
            (c.current || t) && ((c.current = !1), a());
        }, [t]),
        {
            teams: n,
            loading: l,
            refresh: a
        }
    );
};
