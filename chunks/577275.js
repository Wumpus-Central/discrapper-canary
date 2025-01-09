n(47120);
var i = n(192379),
    r = n(586739);
t.Z = function () {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        { refreshOnDepChange: t } = e,
        [n, l] = i.useState([]),
        [s, a] = i.useState(!0),
        o = async () => {
            a(!0);
            try {
                let e = await r.Z.fetchTeams(!0);
                l(e.body);
            } catch (e) {}
            a(!1);
        },
        c = i.useRef(!0);
    return (
        i.useEffect(() => {
            (c.current || t) && ((c.current = !1), o());
        }, [t]),
        {
            teams: n,
            loading: s,
            refresh: o
        }
    );
};
