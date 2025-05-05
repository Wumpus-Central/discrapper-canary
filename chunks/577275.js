n.d(t, { Z: () => l }), n(388685);
var r = n(73800),
    i = n(586739);
let l = function () {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        { refreshOnDepChange: t } = e,
        [n, l] = r.useState([]),
        [s, a] = r.useState(!0),
        o = async () => {
            a(!0);
            try {
                let e = await i.Z.fetchTeams(!0);
                l(e.body);
            } catch (e) {}
            a(!1);
        },
        c = r.useRef(!0);
    return (
        r.useEffect(() => {
            (c.current || t) && ((c.current = !1), o());
        }, [t]),
        {
            teams: n,
            loading: s,
            refresh: o
        }
    );
};
