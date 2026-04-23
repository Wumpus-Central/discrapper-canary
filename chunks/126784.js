s.d(e, { default: () => x });
var n = s(627968),
    a = s(64700),
    o = s(17928),
    i = s(192308),
    l = s(935462),
    r = s(989837),
    c = s(500049),
    p = s(554601),
    d = s(699803),
    h = s(60809),
    u = s(985018),
    A = s(60227);
let x = a.memo(function (t) {
    let { context: e, ...s } = t,
        x = (0, o.bG)([r.A], () => r.A.shouldShowModal());
    a.useEffect(() => {
        x || (0, i.closeModalInAllContexts)(h.gS);
    });
    let C = (0, d.A)();
    return (0, n.jsx)("span", {
        style: h.sK,
        children: (0, n.jsx)(l.EO, {
            className: A.z,
            "aria-label": u.intl.string(u.t.shUONg),
            size: l.rI.DYNAMIC,
            ...s,
            parentComponent: "AppLauncherModal",
            "data-migration-pending": !0,
            children: (0, n.jsx)(p.A, { context: e, entrypoint: c.s4.VOICE, initHistory: C }),
        }),
    });
});
