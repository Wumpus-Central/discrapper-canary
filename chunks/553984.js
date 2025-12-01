n.d(t, { p: () => m });
var r = n(54381),
    i = n(120356),
    l = n.n(i),
    o = n(692547),
    a = n(28664),
    s = n(481060),
    c = n(804932),
    u = n(725739),
    d = n(370774),
    f = n(334426),
    p = n(982183),
    h = n(388032),
    g = n(567843);
function m(e) {
    let { className: t } = e,
        n = (0, c.fJ)(),
        i = (0, d.ux)(),
        { selectedFilter: m, setSelectedFilter: b } = (0, u.Z)(),
        _ = (0, f.d)((e) => e.setInboxReadState);
    if (!i) return null;
    let y = m === p.V5.ALL ? h.intl.string(h.t["2pAkDA"]) : h.intl.string(h.t.HcoRu0);
    return (0, r.jsx)(a.u, {
        position: "bottom",
        text: y,
        children: (0, r.jsx)(s.P3F, {
            className: l()(t, g.headerButton, { [g.enabled]: m === p.V5.BOOKMARKS }),
            "aria-label": y,
            onClick: () => {
                let e = m === p.V5.ALL ? p.V5.BOOKMARKS : p.V5.ALL;
                b(e),
                    e === p.V5.ALL && _(!1),
                    (0, c.RZ)({
                        section: e,
                        enabled: !0,
                        viewId: n,
                    });
            },
            children:
                m === p.V5.BOOKMARKS
                    ? (0, r.jsx)(s.plf, {
                          size: "xs",
                          color: o.Z.colors.ICON_DEFAULT.css,
                      })
                    : (0, r.jsx)(s.gt9, {
                          size: "xs",
                          color: o.Z.colors.ICON_TERTIARY.css,
                      }),
        }),
    });
}
