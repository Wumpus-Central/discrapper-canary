s.d(e, { default: () => C });
var n = s(477900),
    a = s(582128),
    i = s(17928),
    l = s(935462),
    o = s(192308),
    r = s(989837),
    d = s(500049),
    p = s(554601),
    c = s(699803),
    h = s(60809),
    u = s(375708),
    A = s(854075);
let C = a.memo(function (t) {
    let { context: e, ...s } = t,
        C = (0, i.bG)([r.A], () => r.A.shouldShowModal());
    a.useEffect(() => {
        C || (0, o.closeModalInAllContexts)(h.gS);
    });
    let g = (0, c.A)();
    return (0, n.jsx)("span", {
        style: h.sK,
        children: (0, n.jsx)(l.EO, {
            className: A.z,
            "aria-label": u.intl.string(u.t.shUONg),
            size: l.rI.DYNAMIC,
            ...s,
            parentComponent: "AppLauncherModal",
            "data-migration-pending": !0,
            children: (0, n.jsx)(p.A, { context: e, entrypoint: d.s4.VOICE, initHistory: g }),
        }),
    });
});
