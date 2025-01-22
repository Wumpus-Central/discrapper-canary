n.d(t, {
    ZP: function () {
        return f;
    },
    fO: function () {
        return h;
    },
    sF: function () {
        return m;
    }
});
var i = n(200651),
    r = n(120356),
    l = n.n(r),
    a = n(481060),
    o = n(377171),
    s = n(951394),
    c = n(407477),
    u = n(388032),
    d = n(604643);
function m(e) {
    let { label: t, ariaLabel: n, tooltipText: r, tooltipColor: m, icon: h, iconProps: f, onClick: p, onTooltipShow: _, onTooltipHide: g, disabled: E, dangerous: C, separator: I, sparkle: x, showNewBadge: N, buttonClassName: v, children: T, ...S } = e,
        { canShowReactionsOnMessageHover: A } = c.ZP.useExperiment({ location: 'HoverBarButton' }, { autoTrackExposure: !0 });
    return (
        c.Xb.useExperiment({ location: 'HoverBarButton' }, { autoTrackExposure: !0 }),
        (0, i.jsx)(a.Tooltip, {
            text: null != r ? r : t,
            color: null != m ? m : a.TooltipColors.PRIMARY,
            'aria-label': t,
            onTooltipShow: _,
            onTooltipHide: g,
            hideOnClick: !0,
            tooltipClassName: d.tooltip,
            children: (e) => {
                let { onMouseEnter: r, onMouseLeave: c, onClick: m } = e;
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsxs)(s.zx, {
                            className: l()(v, { [d.hoverBarButton]: A }),
                            onMouseEnter: r,
                            onMouseLeave: c,
                            onClick: (e) => {
                                null == m || m(), p(e);
                            },
                            'aria-label': null != n ? n : t,
                            disabled: E,
                            dangerous: C,
                            ...S,
                            children: [
                                null != h
                                    ? (0, i.jsx)(h, {
                                          className: d.icon,
                                          color: 'currentColor',
                                          ...f
                                      })
                                    : null,
                                null != T
                                    ? (0, i.jsx)('div', {
                                          className: l()(d.icon, d.buttonContent),
                                          children: T
                                      })
                                    : null,
                                x && (0, i.jsx)(a.LottieSparkle, {}),
                                N &&
                                    (0, i.jsx)(a.TextBadge, {
                                        text: u.intl.string(u.t.y2b7CA),
                                        color: o.Z.BG_BRAND,
                                        className: d.newBadge
                                    })
                            ]
                        }),
                        I && (0, i.jsx)(s.Z0, {})
                    ]
                });
            }
        })
    );
}
function h(e) {
    let { className: t } = e;
    return (0, i.jsx)('div', { className: l()(d.separator, t) });
}
function f(e) {
    let { children: t, ...n } = e,
        { canShowReactionsOnMessageHover: r } = c.ZP.useExperiment({ location: 'HoverBar' }, { autoTrackExposure: !0 });
    return (
        c.Xb.useExperiment({ location: 'HoverBar' }, { autoTrackExposure: !0 }),
        (0, i.jsx)(s.ZP, {
            className: l()(n.className, d.popover, { [d.popoverReactionHoverBar]: r }),
            children: t
        })
    );
}
