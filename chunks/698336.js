n.d(e, { default: () => p });
var a = n(627968),
    i = n(64700),
    r = n(311907),
    s = n(397927),
    d = n(888940),
    l = n(235986),
    o = n(558179),
    c = n(355190),
    E = n(985018),
    u = n(592738);
function p(t) {
    let { eulaId: e, transitionState: n, onClose: p } = t,
        h = (0, r.bG)([c.A], () => c.A.getEULA(e));
    i.useEffect(() => {
        (0, d.E)(e);
    }, [e]);
    let g = h?.name ?? E.intl.string(E.t.ZTNur7),
        A =
            null != h
                ? (0, a.jsx)(o.A, { children: h.content, className: u.w })
                : (0, a.jsx)(s.y$y, { className: u.u });
    return (0, a.jsxs)(s.EOs, {
        "data-migration-pending": !0,
        transitionState: n,
        size: s.rIJ.SMALL,
        "aria-label": g,
        parentComponent: "EULA",
        children: [
            (0, a.jsxs)(s.rQ0, {
                "data-migration-pending": !0,
                justify: l.A.Justify.BETWEEN,
                children: [
                    (0, a.jsx)(s.Heading, { variant: "heading-lg/semibold", children: g }),
                    (0, a.jsx)(s.s_y, { "data-migration-pending": !0, onClick: p }),
                ],
            }),
            (0, a.jsx)(s.$mQ, { "data-migration-pending": !0, children: A }),
        ],
    });
}
