n.d(t, {
    ZP: () => h,
    fO: () => _,
    sF: () => m
});
var i = n(200651),
    l = n(120356),
    a = n.n(l),
    r = n(481060),
    s = n(377171),
    o = n(951394),
    c = n(407477),
    d = n(388032),
    u = n(403420);
function m(e) {
    let { label: t, ariaLabel: n, tooltipText: l, tooltipColor: m, icon: _, iconProps: h, onClick: p, onTooltipShow: g, onTooltipHide: f, disabled: x, dangerous: C, separator: v, sparkle: E, showNewBadge: I, buttonClassName: N, children: S, ...T } = e,
        { canShowReactionsOnMessageHover: b } = c.ZP.useExperiment({ location: 'HoverBarButton' }, { autoTrackExposure: !0 });
    return (
        c.Xb.useExperiment({ location: 'HoverBarButton' }, { autoTrackExposure: !0 }),
        (0, i.jsx)(r.ua7, {
            text: null != l ? l : t,
            color: null != m ? m : r.FGA.PRIMARY,
            'aria-label': t,
            onTooltipShow: g,
            onTooltipHide: f,
            hideOnClick: !0,
            tooltipClassName: u.tooltip,
            children: (e) => {
                let { onMouseEnter: l, onMouseLeave: c, onClick: m } = e;
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsxs)(o.zx, {
                            className: a()(N, { [u.hoverBarButton]: b }),
                            onMouseEnter: l,
                            onMouseLeave: c,
                            onClick: (e) => {
                                null == m || m(), p(e);
                            },
                            'aria-label': null != n ? n : t,
                            disabled: x,
                            dangerous: C,
                            ...T,
                            children: [
                                null != _
                                    ? (0, i.jsx)(_, {
                                          className: u.icon,
                                          color: 'currentColor',
                                          ...h
                                      })
                                    : null,
                                null != S
                                    ? (0, i.jsx)('div', {
                                          className: a()(u.icon, u.buttonContent),
                                          children: S
                                      })
                                    : null,
                                E && (0, i.jsx)(r.K1N, {}),
                                I &&
                                    (0, i.jsx)(r.IGR, {
                                        text: d.intl.string(d.t.y2b7CA),
                                        color: s.Z.BG_BRAND,
                                        className: u.newBadge
                                    })
                            ]
                        }),
                        v && (0, i.jsx)(o.Z0, {})
                    ]
                });
            }
        })
    );
}
function _(e) {
    let { className: t } = e;
    return (0, i.jsx)('div', { className: a()(u.separator, t) });
}
function h(e) {
    let { children: t, ...n } = e,
        { canShowReactionsOnMessageHover: l } = c.ZP.useExperiment({ location: 'HoverBar' }, { autoTrackExposure: !0 });
    return (
        c.Xb.useExperiment({ location: 'HoverBar' }, { autoTrackExposure: !0 }),
        (0, i.jsx)(o.ZP, {
            className: a()(n.className, u.popover, { [u.popoverReactionHoverBar]: l }),
            children: t
        })
    );
}
