n.d(t, { p: () => b });
var r = n(54381),
    i = n(120356),
    l = n.n(i),
    a = n(692547),
    o = n(28664),
    s = n(481060),
    c = n(804932),
    u = n(725739),
    d = n(370774),
    f = n(334426),
    h = n(982183),
    p = n(388032),
    g = n(627758);
function b(e) {
    let { className: t } = e,
        n = (0, c.fJ)(),
        i = (0, d.ux)(),
        { selectedFilter: b, setSelectedFilter: m } = (0, u.Z)(),
        y = (0, f.d)((e) => e.setInboxReadState);
    if (!i) return null;
    let O = b === h.V5.ALL ? p.intl.string(p.t["2pAkDA"]) : p.intl.string(p.t.HcoRu0);
    return (0, r.jsx)(o.u, {
        position: "bottom",
        text: O,
        children: (0, r.jsx)(s.P3F, {
            className: l()(t, g.headerButton, { [g.enabled]: b === h.V5.BOOKMARKS }),
            "aria-label": O,
            onClick: () => {
                let e = b === h.V5.ALL ? h.V5.BOOKMARKS : h.V5.ALL;
                m(e),
                    e === h.V5.ALL && y(!1),
                    (0, c.RZ)({
                        section: e,
                        enabled: !0,
                        viewId: n,
                    });
            },
            children:
                b === h.V5.BOOKMARKS
                    ? (0, r.jsx)(s.plf, {
                          size: "xs",
                          color: a.Z.colors.ICON_DEFAULT.css,
                      })
                    : (0, r.jsx)(s.gt9, {
                          size: "xs",
                          color: a.Z.colors.ICON_MUTED.css,
                      }),
        }),
    });
}
