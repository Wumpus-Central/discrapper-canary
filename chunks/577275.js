n.d(t, { Z: () => l }), n(388685);
var r = n(73800),
    i = n(586739);
let l = function () {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        { refreshOnDepChange: t } = e,
        [n, l] = r.useState([]),
        [o, s] = r.useState(!0),
        c = async () => {
            s(!0);
            try {
                let e = await i.Z.fetchTeams(!0);
                l(e.body);
            } catch (e) {}
            s(!1);
        },
        a = r.useRef(!0);
    return (
        r.useEffect(() => {
            (a.current || t) && ((a.current = !1), c());
        }, [t]),
        {
            teams: n,
            loading: o,
            refresh: c,
        }
    );
};
