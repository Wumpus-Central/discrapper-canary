n.d(t, {
    Mv: () => h,
    PB: () => m,
    eq: () => p
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    r = n(25441),
    a = n(91192),
    s = n(657707),
    o = n(481060),
    c = n(209613),
    d = n(475413),
    u = n(602654);
function h(e) {
    let { id: t, label: n, icon: c, hint: h, renderSubmenu: m, ...p } = e,
        { onFocus: g, ..._ } = (0, a.JA)(t),
        { id: f } = (0, a.f$)(),
        [E, I] = l.useState(!1),
        C = null != m;
    l.useLayoutEffect(() => {
        if (C)
            return (0, r.N)(f, (e) => {
                I(e === t);
            });
    }, [t, f, C]);
    let v = (e) =>
        (0, i.jsxs)(d.kF, {
            ...e,
            ..._,
            ...p,
            role: 'button',
            look: o.zxk.Looks.BLANK,
            innerClassName: u.menuItemInner,
            color: u.menuItemColor,
            themeColor: 'none',
            fullWidth: !0,
            onMouseEnter: () => {
                var t;
                null == e || null === (t = e.onMouseEnter) || void 0 === t || t.call(e), g();
            },
            children: [
                (0, i.jsx)(c, {
                    size: 'xs',
                    color: 'currentColor'
                }),
                (0, i.jsxs)('div', {
                    className: u.menuItemLabel,
                    children: [n, h]
                }),
                C &&
                    (0, i.jsx)(s.Fbu, {
                        size: 'xs',
                        color: 'currentColor'
                    })
            ]
        });
    return C
        ? (0, i.jsx)(o.yRy, {
              spacing: 0,
              renderPopout: m,
              shouldShow: E,
              onRequestClose: () => I(!1),
              children: v
          })
        : v();
}
function m(e) {
    let { id: t, children: n } = e,
        l = (0, c.Z)(t);
    return (0, i.jsx)(a.bG, {
        navigator: l,
        children: (0, i.jsx)(a.SJ, {
            children: (e) => {
                let { ref: t, ...r } = e;
                return (0, i.jsx)('div', {
                    ...r,
                    ref: t,
                    onMouseLeave: () => l.setFocus(null),
                    children: n
                });
            }
        })
    });
}
function p(e) {
    return (0, i.jsx)('div', {
        className: u.submenuPaddingContainer,
        children: (0, i.jsx)(o.v2r, {
            variant: 'fixed',
            hideScroller: !0,
            onSelect: void 0,
            ...e
        })
    });
}
