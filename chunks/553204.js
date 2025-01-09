n.d(t, {
    Z: function () {
        return p;
    }
});
var i = n(200651),
    r = n(192379),
    l = n(120356),
    s = n.n(l),
    a = n(477690),
    o = n(481060),
    c = n(91218),
    d = n(518738),
    u = n(208567),
    m = n(624138),
    h = n(388032),
    g = n(129720);
let x = (0, m.Mg)(a.Z.ROLE_ICON_UPLOADER_ICON_SIZE);
function p(e) {
    let { role: t, 'aria-label': n = h.intl.string(h.t['MsUY/f']), className: l, onClick: a, disabled: m = !1 } = e,
        p = r.useRef(null),
        f = r.useMemo(() => (null != t ? (0, d.Kz)(t, x) : null), [t]),
        C =
            null != f
                ? (0, i.jsx)(c.Z, {
                      enableTooltip: !1,
                      className: g.icon,
                      ...f
                  })
                : (0, i.jsx)(o.ImagePlusIcon, {
                      size: 'md',
                      color: 'currentColor',
                      className: g.icon
                  });
    return (0, i.jsx)(o.FocusRing, {
        ringTarget: p,
        children: (0, i.jsxs)(o.Clickable, {
            'aria-label': n,
            className: s()(g.container, l, { [g.disabled]: m }),
            onClick: m ? void 0 : a,
            'aria-disabled': m,
            children: [
                (0, i.jsx)('div', {
                    ref: p,
                    className: g.preview,
                    children: C
                }),
                null != f ? (0, i.jsx)(u.S, { className: g.uploaderIcon }) : null
            ]
        })
    });
}
