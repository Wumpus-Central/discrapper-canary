"use strict";
n.d(t, { A: () => r });
var s = n(64700),
    i = n(425587);
let r = function () {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        { refreshOnDepChange: t } = e,
        [n, r] = s.useState([]),
        [l, a] = s.useState(!0),
        o = async () => {
            a(!0);
            try {
                let e = await i.A.fetchTeams(!0);
                r(e.body);
            } catch (e) {}
            a(!1);
        },
        d = s.useRef(!0);
    return (
        s.useEffect(() => {
            (d.current || t) && ((d.current = !1), o());
        }, [t]),
        { teams: n, loading: l, refresh: o }
    );
};
