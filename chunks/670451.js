r.d(n, {
    Z: function () {
        return u;
    }
});
var i = r(200651);
r(192379);
var a = r(481060),
    s = r(386019),
    o = r(388032),
    l = r(249942);
function u(e) {
    return (0, i.jsx)(s.Z, {
        ...e,
        children: (e) =>
            (0, i.jsx)(a.Tooltip, {
                text: o.intl.string(o.t.UKOtz8),
                'aria-label': !1,
                children: (n) =>
                    (0, i.jsx)(a.Clickable, {
                        ...n,
                        ...e,
                        'aria-label': o.intl.string(o.t.UKOtz8),
                        onClick: (r) => {
                            var i;
                            r.stopPropagation(), null === (i = n.onClick) || void 0 === i || i.call(n), e.onClick(r);
                        },
                        onContextMenu: (r) => {
                            var i;
                            r.preventDefault(), null === (i = n.onClick) || void 0 === i || i.call(n), e.onClick(r);
                        },
                        className: l.contextMenu,
                        children: (0, i.jsx)(a.MoreHorizontalIcon, {
                            color: a.tokens.colors.INTERACTIVE_NORMAL,
                            size: 'xs'
                        })
                    })
            })
    });
}
