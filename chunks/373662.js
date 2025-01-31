n.d(t, {
    ZP: () => _,
    fO: () => h,
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
    u = n(604643);
function m(e) {
    let { label: t, ariaLabel: n, tooltipText: l, tooltipColor: m, icon: h, iconProps: _, onClick: p, onTooltipShow: g, onTooltipHide: f, disabled: x, dangerous: E, separator: C, sparkle: v, showNewBadge: I, buttonClassName: N, children: S, ...T } = e,
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
                            dangerous: E,
                            ...T,
                            children: [
                                null != h
                                    ? (0, i.jsx)(h, {
                                          className: u.icon,
                                          color: 'currentColor',
                                          ..._
                                      })
                                    : null,
                                null != S
                                    ? (0, i.jsx)('div', {
                                          className: a()(u.icon, u.buttonContent),
                                          children: S
                                      })
                                    : null,
                                v && (0, i.jsx)(r.K1N, {}),
                                I &&
                                    (0, i.jsx)(r.IGR, {
                                        text: d.intl.string(d.t.y2b7CA),
                                        color: s.Z.BG_BRAND,
                                        className: u.newBadge
                                    })
                            ]
                        }),
                        C && (0, i.jsx)(o.Z0, {})
                    ]
                });
            }
        })
    );
}
function h(e) {
    let { className: t } = e;
    return (0, i.jsx)('div', { className: a()(u.separator, t) });
}
function _(e) {
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
