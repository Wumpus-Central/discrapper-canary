n.d(t, { default: () => p });
var a = n(627968),
    i = n(64700),
    r = n(311907),
    s = n(397927),
    l = n(888940),
    d = n(235986),
    o = n(558179),
    c = n(355190),
    u = n(985018),
    E = n(592738);
function p(e) {
    var t;
    let { eulaId: n, transitionState: p, onClose: g } = e,
        h = (0, r.bG)([c.A], () => c.A.getEULA(n));
    i.useEffect(() => {
        (0, l.E)(n);
    }, [n]);
    let A = null != (t = null == h ? void 0 : h.name) ? t : u.intl.string(u.t.ZTNur7),
        m =
            null != h
                ? (0, a.jsx)(o.A, {
                      children: h.content,
                      className: E.w,
                  })
                : (0, a.jsx)(s.y$y, { className: E.u });
    return (0, a.jsxs)(s.EOs, {
        "data-migration-pending": !0,
        transitionState: p,
        size: s.rIJ.SMALL,
        "aria-label": A,
        parentComponent: "EULA",
        children: [
            (0, a.jsxs)(s.rQ0, {
                "data-migration-pending": !0,
                justify: d.A.Justify.BETWEEN,
                children: [
                    (0, a.jsx)(s.Heading, {
                        variant: "heading-lg/semibold",
                        children: A,
                    }),
                    (0, a.jsx)(s.s_y, {
                        "data-migration-pending": !0,
                        onClick: g,
                    }),
                ],
            }),
            (0, a.jsx)(s.$mQ, {
                "data-migration-pending": !0,
                children: m,
            }),
        ],
    });
}
