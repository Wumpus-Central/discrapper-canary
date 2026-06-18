s.d(e, { default: () => C });
var n = s(627968),
    a = s(64700),
    i = s(17928),
    l = s(192308),
    o = s(935462),
    r = s(989837),
    d = s(500049),
    p = s(554601),
    c = s(699803),
    h = s(60809),
    u = s(375708),
    A = s(60227);
let C = a.memo(function (t) {
    let { context: e, ...s } = t,
        C = (0, i.bG)([r.A], () => r.A.shouldShowModal());
    a.useEffect(() => {
        C || (0, l.closeModalInAllContexts)(h.gS);
    });
    let g = (0, c.A)();
    return (0, n.jsx)("span", {
        style: h.sK,
        children: (0, n.jsx)(o.EO, {
            className: A.z,
            "aria-label": u.intl.string(u.t.shUONg),
            size: o.rI.DYNAMIC,
            ...s,
            parentComponent: "AppLauncherModal",
            "data-migration-pending": !0,
            children: (0, n.jsx)(p.A, { context: e, entrypoint: d.s4.VOICE, initHistory: g }),
        }),
    });
});
