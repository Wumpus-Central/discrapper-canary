r.d(t, { default: () => m });
var a = r(627968),
    n = r(64700),
    l = r(311907),
    s = r(289873),
    d = r(935462),
    i = r(534514),
    o = r(888940),
    c = r(235986),
    u = r(558179),
    h = r(355190),
    g = r(985018),
    p = r(191315);
function m(e) {
    let { eulaId: t, transitionState: r, onClose: m } = e,
        f = (0, l.bG)([h.A], () => h.A.getEULA(t));
    n.useEffect(() => {
        (0, o.E)(t);
    }, [t]);
    let k = f?.name ?? g.intl.string(g.t.ZTNur7),
        x = null != f ? (0, a.jsx)(u.A, { children: f.content, className: p.w }) : (0, a.jsx)(s.y, { className: p.u });
    return (0, a.jsxs)(d.EO, {
        "data-migration-pending": !0,
        transitionState: r,
        size: d.rI.SMALL,
        "aria-label": k,
        parentComponent: "EULA",
        children: [
            (0, a.jsxs)(d.rQ, {
                "data-migration-pending": !0,
                justify: c.A.Justify.BETWEEN,
                children: [
                    (0, a.jsx)(i.D, { variant: "heading-lg/semibold", children: k }),
                    (0, a.jsx)(d.s_, { "data-migration-pending": !0, onClick: m }),
                ],
            }),
            (0, a.jsx)(d.$m, { "data-migration-pending": !0, children: x }),
        ],
    });
}
