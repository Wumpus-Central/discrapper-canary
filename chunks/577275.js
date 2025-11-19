n.d(t, { Z: () => a }), n(388685);
var r = n(473749),
    i = n(586739);
let a = function () {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        { refreshOnDepChange: t } = e,
        [n, a] = r.useState([]),
        [o, s] = r.useState(!0),
        l = async () => {
            s(!0);
            try {
                let e = await i.Z.fetchTeams(!0);
                a(e.body);
            } catch (e) {}
            s(!1);
        },
        c = r.useRef(!0);
    return (
        r.useEffect(() => {
            (c.current || t) && ((c.current = !1), l());
        }, [t]),
        {
            teams: n,
            loading: o,
            refresh: l,
        }
    );
};
