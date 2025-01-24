n.d(t, {
    Mv: function () {
        return h;
    },
    PB: function () {
        return m;
    },
    eq: function () {
        return p;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(25441),
    a = n(91192),
    s = n(657707),
    o = n(481060),
    c = n(209613),
    d = n(475413),
    u = n(602654);
function h(e) {
    let { id: t, label: n, icon: c, hint: h, renderSubmenu: m, ...p } = e,
        { onFocus: g, ...f } = (0, a.JA)(t),
        { id: _ } = (0, a.f$)(),
        [E, I] = r.useState(!1),
        C = null != m;
    r.useLayoutEffect(() => {
        if (!!C)
            return (0, l.N)(_, (e) => {
                I(e === t);
            });
    }, [t, _, C]);
    let v = (e) =>
        (0, i.jsxs)(d.kF, {
            ...e,
            ...f,
            ...p,
            role: 'button',
            look: o.Button.Looks.BLANK,
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
        ? (0, i.jsx)(o.Popout, {
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
        r = (0, c.Z)(t);
    return (0, i.jsx)(a.bG, {
        navigator: r,
        children: (0, i.jsx)(a.SJ, {
            children: (e) => {
                let { ref: t, ...l } = e;
                return (0, i.jsx)('div', {
                    ...l,
                    ref: t,
                    onMouseLeave: () => r.setFocus(null),
                    children: n
                });
            }
        })
    });
}
function p(e) {
    return (0, i.jsx)('div', {
        className: u.submenuPaddingContainer,
        children: (0, i.jsx)(o.Menu, {
            variant: 'fixed',
            hideScroller: !0,
            onSelect: void 0,
            ...e
        })
    });
}
