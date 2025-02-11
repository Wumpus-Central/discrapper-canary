n.d(t, { Z: () => l });
var i = n(200651);
n(192379);
var r = n(481060),
    a = n(170187),
    s = n(937008),
    o = n(388032);
function l(e) {
    let { game: t, textVariant: n, textClassName: l, hideIcon: u = !1, hideText: c = !1, hideTooltip: d = !1 } = e;
    if (u && c) return null;
    let f = (null == t ? void 0 : t.name) === '' ? null : null == t ? void 0 : t.name,
        _ = null != f ? o.intl.format(o.t['0wJXSk'], { name: f }) : o.intl.string(o.t.eXan7O),
        p = null != f ? o.intl.formatToPlainString(o.t['0wJXSk'], { name: f }) : o.intl.string(o.t.eXan7O);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            !u &&
                (0, i.jsx)(s.Z, {
                    icon: r.m3e,
                    tooltip: c && !d ? p : void 0
                }),
            !c &&
                (0, i.jsx)(a.Z, {
                    variant: n,
                    className: l,
                    children: _
                })
        ]
    });
}
