n.d(t, { Z: () => s }), n(388685);
var i = n(647438),
    r = n(586739);
let s = function () {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        { refreshOnDepChange: t } = e,
        [n, s] = i.useState([]),
        [l, o] = i.useState(!0),
        a = async () => {
            o(!0);
            try {
                let e = await r.Z.fetchTeams(!0);
                s(e.body);
            } catch (e) {}
            o(!1);
        },
        c = i.useRef(!0);
    return (
        i.useEffect(() => {
            (c.current || t) && ((c.current = !1), a());
        }, [t]),
        {
            teams: n,
            loading: l,
            refresh: a,
        }
    );
};
