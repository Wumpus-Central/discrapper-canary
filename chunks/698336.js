r.d(t, { default: () => p });
var l = r(627968),
    n = r(64700),
    a = r(311907),
    s = r(289873),
    c = r(935462),
    o = r(534514),
    i = r(888940),
    d = r(235986),
    u = r(558179),
    _ = r(355190),
    h = r(985018),
    g = r(191315);
function p(e) {
    let { eulaId: t, transitionState: r, onClose: p } = e,
        b = (0, a.bG)([_.A], () => _.A.getEULA(t));
    n.useEffect(() => {
        (0, i.E)(t);
    }, [t]);
    let f = b?.name ?? h.intl.string(h.t.ZTNur7),
        m = null != b ? (0, l.jsx)(u.A, { children: b.content, className: g.w }) : (0, l.jsx)(s.y, { className: g.u });
    return (0, l.jsxs)(c.EO, {
        "data-migration-pending": !0,
        transitionState: r,
        size: c.rI.SMALL,
        "aria-label": f,
        parentComponent: "EULA",
        children: [
            (0, l.jsxs)(c.rQ, {
                "data-migration-pending": !0,
                justify: d.A.Justify.BETWEEN,
                children: [
                    (0, l.jsx)(o.D, { variant: "heading-lg/semibold", children: f }),
                    (0, l.jsx)(c.s_, { "data-migration-pending": !0, onClick: p }),
                ],
            }),
            (0, l.jsx)(c.$m, { "data-migration-pending": !0, children: m }),
        ],
    });
}
