n.d(t, { Z: () => l });
var i = n(200651);
n(192379);
var r = n(481060),
    a = n(386019),
    s = n(388032),
    o = n(249942);
function l(e) {
    return (0, i.jsx)(a.Z, {
        ...e,
        children: (e) =>
            (0, i.jsx)(r.ua7, {
                text: s.intl.string(s.t.UKOtz8),
                'aria-label': !1,
                children: (t) =>
                    (0, i.jsx)(r.P3F, {
                        ...t,
                        ...e,
                        'aria-label': s.intl.string(s.t.UKOtz8),
                        onClick: (n) => {
                            var i;
                            n.stopPropagation(), null === (i = t.onClick) || void 0 === i || i.call(t), e.onClick(n);
                        },
                        onContextMenu: (n) => {
                            var i;
                            n.preventDefault(), null === (i = t.onClick) || void 0 === i || i.call(t), e.onClick(n);
                        },
                        className: o.contextMenu,
                        children: (0, i.jsx)(r.xhG, {
                            color: r.TVs.colors.INTERACTIVE_NORMAL,
                            size: 'xs'
                        })
                    })
            })
    });
}
