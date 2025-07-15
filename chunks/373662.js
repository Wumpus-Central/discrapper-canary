r.d(t, {
    ZP: () => b,
    fO: () => m,
    sF: () => g
});
var n = r(255367),
    s = r(73800),
    l = r(120356),
    a = r.n(l),
    o = r(481060),
    i = r(377171),
    c = r(951394),
    u = r(407477),
    d = r(388032),
    h = r(852747);
function p(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                })
            )),
            n.forEach(function (t) {
                var n;
                ((n = r[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = n));
            }));
    }
    return e;
}
function f(e, t) {
    if (null == e) return {};
    var r,
        n,
        s = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                s = {},
                l = Object.keys(e);
            for (n = 0; n < l.length; n++) ((r = l[n]), t.indexOf(r) >= 0 || (s[r] = e[r]));
            return s;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var l = Object.getOwnPropertySymbols(e);
        for (n = 0; n < l.length; n++) ((r = l[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (s[r] = e[r]));
    }
    return s;
}
let g = s.forwardRef(function (e, t) {
    var { label: r, ariaLabel: s, tooltipText: l, tooltipColor: g, icon: m, iconProps: b, onClick: y, onTooltipShow: S, onTooltipHide: x, disabled: O, dangerous: j, separator: v, sparkle: _, showNewBadge: E, buttonClassName: C, children: I } = e,
        R = f(e, ['label', 'ariaLabel', 'tooltipText', 'tooltipColor', 'icon', 'iconProps', 'onClick', 'onTooltipShow', 'onTooltipHide', 'disabled', 'dangerous', 'separator', 'sparkle', 'showNewBadge', 'buttonClassName', 'children']);
    let { canShowReactionsOnMessageHover: P } = u.ZP.useExperiment({ location: 'HoverBarButton' }, { autoTrackExposure: !0 });
    return (
        u.Xb.useExperiment({ location: 'HoverBarButton' }, { autoTrackExposure: !0 }),
        (0, n.jsx)(o.ua7, {
            text: null != l ? l : r,
            color: null != g ? g : o.FGA.PRIMARY,
            'aria-label': r,
            onTooltipShow: S,
            onTooltipHide: x,
            hideOnClick: !0,
            tooltipClassName: h.tooltip,
            children: (e) => {
                var l, u;
                let { onMouseEnter: f, onMouseLeave: g, onClick: S } = e;
                return (0, n.jsxs)(n.Fragment, {
                    children: [
                        (0, n.jsxs)(
                            c.zx,
                            ((l = p(
                                {
                                    ref: t,
                                    className: a()(C, { [h.hoverBarButton]: P }),
                                    onMouseEnter: f,
                                    onMouseLeave: g,
                                    onClick: (e) => {
                                        (null == S || S(), y(e));
                                    },
                                    'aria-label': null != s ? s : r,
                                    disabled: O,
                                    dangerous: j
                                },
                                R
                            )),
                            (u = u =
                                {
                                    children: [
                                        null != m
                                            ? (0, n.jsx)(
                                                  m,
                                                  p(
                                                      {
                                                          className: h.icon,
                                                          color: 'currentColor'
                                                      },
                                                      b
                                                  )
                                              )
                                            : null,
                                        null != I
                                            ? (0, n.jsx)('div', {
                                                  className: a()(h.icon, h.buttonContent),
                                                  children: I
                                              })
                                            : null,
                                        _ && (0, n.jsx)(o.K1N, {}),
                                        E &&
                                            (0, n.jsx)(o.IGR, {
                                                text: d.intl.string(d.t.y2b7CA),
                                                color: i.Z.BG_BRAND,
                                                className: h.newBadge
                                            })
                                    ]
                                }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(u))
                                : (function (e, t) {
                                      var r = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var n = Object.getOwnPropertySymbols(e);
                                          r.push.apply(r, n);
                                      }
                                      return r;
                                  })(Object(u)).forEach(function (e) {
                                      Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(u, e));
                                  }),
                            l)
                        ),
                        v && (0, n.jsx)(c.Z0, {})
                    ]
                });
            }
        })
    );
});
function m(e) {
    let { className: t } = e;
    return (0, n.jsx)('div', { className: a()(h.separator, t) });
}
function b(e) {
    var { children: t } = e,
        r = f(e, ['children']);
    let { canShowReactionsOnMessageHover: s } = u.ZP.useExperiment({ location: 'HoverBar' }, { autoTrackExposure: !0 });
    return (
        u.Xb.useExperiment({ location: 'HoverBar' }, { autoTrackExposure: !0 }),
        (0, n.jsx)(c.ZP, {
            className: a()(r.className, h.popover, { [h.popoverReactionHoverBar]: s }),
            children: t
        })
    );
}
