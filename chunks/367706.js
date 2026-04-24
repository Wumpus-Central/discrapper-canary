e.d(a, { default: () => E });
var r = e(627968),
    i = e(64700),
    d = e(935462),
    n = e(289873),
    s = e(636537),
    o = e(228366),
    c = e(38405),
    p = e(652215);
let l = async () => {
    try {
        let t = (await s.Bo.get({ url: p.Rsh.USER_BADGES, rejectWithError: !0 })).body;
        o.h.dispatch({ type: "BADGE_DIRECTORY_FETCH_SUCCESS", badges: t.badges });
    } catch (t) {
        c.A.captureException(t);
    }
};
var h = e(985018),
    C = e(490308);
function E(t) {
    let { transitionState: a } = t;
    return (
        i.useEffect(() => {
            l();
        }, []),
        (0, r.jsx)(d.EO, {
            "data-migration-pending": !0,
            parentComponent: "BadgeDirectoryModal",
            "aria-label": h.intl.string(h.t.PEjP4L),
            transitionState: a,
            size: d.rI.DYNAMIC,
            hideShadow: !0,
            className: C.C,
            children: (0, r.jsx)(d.$m, { "data-migration-pending": !0, className: C.j, children: (0, r.jsx)(n.y, {}) }),
        })
    );
}
