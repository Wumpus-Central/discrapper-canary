s.d(e, { default: () => A });
var n = s(627968),
    a = s(64700),
    i = s(311907),
    r = s(397927),
    o = s(989837),
    p = s(500049),
    c = s(7691),
    l = s(699803),
    d = s(60809),
    h = s(985018),
    u = s(60227);
let A = a.memo(function (t) {
    let { context: e, ...s } = t,
        A = (0, i.bG)([o.A], () => o.A.shouldShowModal());
    a.useEffect(() => {
        A || (0, r.CT7)(d.gS);
    });
    let C = (0, l.A)();
    return (0, n.jsx)("span", {
        style: d.sK,
        children: (0, n.jsx)(r.EOs, {
            className: u.z,
            "aria-label": h.intl.string(h.t.shUONg),
            size: r.rIJ.DYNAMIC,
            ...s,
            parentComponent: "AppLauncherModal",
            "data-migration-pending": !0,
            children: (0, n.jsx)(c.A, { context: e, entrypoint: p.s4.VOICE, initHistory: C }),
        }),
    });
});
