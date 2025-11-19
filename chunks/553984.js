n.d(t, { p: () => m });
var r = n(54381),
    i = n(120356),
    l = n.n(i),
    o = n(28664),
    a = n(481060),
    s = n(377171),
    c = n(804932),
    u = n(725739),
    d = n(370774),
    p = n(334426),
    h = n(982183),
    f = n(388032),
    g = n(567843);
function m(e) {
    let { className: t } = e,
        n = (0, c.fJ)(),
        i = (0, d.ux)(),
        { selectedFilter: m, setSelectedFilter: b } = (0, u.Z)(),
        _ = (0, p.d)((e) => e.setInboxReadState);
    if (!i) return null;
    let y = m === h.V5.ALL ? f.intl.string(f.t["2pAkDA"]) : f.intl.string(f.t.HcoRu0);
    return (0, r.jsx)(o.u, {
        position: "bottom",
        text: y,
        children: (0, r.jsx)(a.P3F, {
            className: l()(t, g.headerButton, { [g.enabled]: m === h.V5.BOOKMARKS }),
            "aria-label": y,
            onClick: () => {
                let e = m === h.V5.ALL ? h.V5.BOOKMARKS : h.V5.ALL;
                b(e),
                    e === h.V5.ALL && _(!1),
                    (0, c.RZ)({
                        section: e,
                        enabled: !0,
                        viewId: n,
                    });
            },
            children:
                m === h.V5.BOOKMARKS
                    ? (0, r.jsx)(a.plf, {
                          size: "xs",
                          color: s.Z.ICON_DEFAULT,
                      })
                    : (0, r.jsx)(a.gt9, {
                          size: "xs",
                          color: s.Z.ICON_TERTIARY,
                      }),
        }),
    });
}
