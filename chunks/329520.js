n.d(t, { Z: () => l });
var r = n(200651);
n(192379);
var i = n(481060),
    o = n(170187),
    a = n(937008),
    s = n(388032);
function l(e) {
    let { game: t, textVariant: n, textClassName: l, hideIcon: c = !1, hideText: u = !1, hideTooltip: d = !1 } = e;
    if (c && u) return null;
    let f = (null == t ? void 0 : t.name) === '' ? null : null == t ? void 0 : t.name,
        p = null != f ? s.NW.format(s.t['0wJXSk'], { name: f }) : s.NW.string(s.t.eXan7O),
        _ = null != f ? s.NW.formatToPlainString(s.t['0wJXSk'], { name: f }) : s.NW.string(s.t.eXan7O);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            !c &&
                (0, r.jsx)(a.Z, {
                    icon: i.ARS,
                    tooltip: u && !d ? _ : void 0
                }),
            !u &&
                (0, r.jsx)(o.Z, {
                    variant: n,
                    className: l,
                    children: p
                })
        ]
    });
}
