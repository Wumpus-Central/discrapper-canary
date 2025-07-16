(n.d(t, { Z: () => s }), n(388685));
var r = n(73800),
    i = n(586739);
let s = function () {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        { refreshOnDepChange: t } = e,
        [n, s] = r.useState([]),
        [l, o] = r.useState(!0),
        a = async () => {
            o(!0);
            try {
                let e = await i.Z.fetchTeams(!0);
                s(e.body);
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
