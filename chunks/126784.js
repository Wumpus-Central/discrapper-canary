var n = s(477900),
    a = s(582128),
    i = s(855986),
    r = s(935462),
    l = s(192308),
    o = s(989837),
    p = s(500049),
    d = s(621377),
    c = s(699803),
    h = s(60809),
    u = s(792996),
    A = s(886720);
let C = a.memo(function (t) {
    let { context: e, ...s } = t,
        C = (0, i.bG)([o.A], () => o.A.shouldShowModal());
    a.useEffect(() => {
        C || (0, l.CT)(h.gS);
    });
    let g = (0, c.A)();
    return (0, n.jsx)("span", {
        style: h.sK,
        children: (0, n.jsx)(r.EO, {
            className: A.z,
            "aria-label": u.intl.string(u.t.shUONg),
            size: r.rI.DYNAMIC,
            ...s,
            parentComponent: "AppLauncherModal",
            "data-migration-pending": !0,
            children: (0, n.jsx)(d.A, { context: e, entrypoint: p.s4.VOICE, initHistory: g }),
        }),
    });
});
s.d(e, {}, { default: C });
