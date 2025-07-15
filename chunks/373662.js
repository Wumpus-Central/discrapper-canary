n.d(t, {
    ZP: () => b,
    fO: () => m,
    sF: () => g
});
var r = n(255367),
    s = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(481060),
    i = n(377171),
    c = n(951394),
    u = n(407477),
    d = n(388032),
    h = n(852747);
function p(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
    }
    return e;
}
function f(e, t) {
    if (null == e) return {};
    var n,
        r,
        s = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                s = {},
                l = Object.keys(e);
            for (r = 0; r < l.length; r++) ((n = l[r]), t.indexOf(n) >= 0 || (s[n] = e[n]));
            return s;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var l = Object.getOwnPropertySymbols(e);
        for (r = 0; r < l.length; r++) ((n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (s[n] = e[n]));
    }
    return s;
}
let g = s.forwardRef(function (e, t) {
    var { label: n, ariaLabel: s, tooltipText: l, tooltipColor: g, icon: m, iconProps: b, onClick: y, onTooltipShow: S, onTooltipHide: x, disabled: j, dangerous: O, separator: v, sparkle: _, showNewBadge: E, buttonClassName: C, children: I } = e,
        R = f(e, ['label', 'ariaLabel', 'tooltipText', 'tooltipColor', 'icon', 'iconProps', 'onClick', 'onTooltipShow', 'onTooltipHide', 'disabled', 'dangerous', 'separator', 'sparkle', 'showNewBadge', 'buttonClassName', 'children']);
    let { canShowReactionsOnMessageHover: P } = u.ZP.useExperiment({ location: 'HoverBarButton' }, { autoTrackExposure: !0 });
    return (
        u.Xb.useExperiment({ location: 'HoverBarButton' }, { autoTrackExposure: !0 }),
        (0, r.jsx)(o.ua7, {
            text: null != l ? l : n,
            color: null != g ? g : o.FGA.PRIMARY,
            'aria-label': n,
            onTooltipShow: S,
            onTooltipHide: x,
            hideOnClick: !0,
            tooltipClassName: h.tooltip,
            children: (e) => {
                var l, u;
                let { onMouseEnter: f, onMouseLeave: g, onClick: S } = e;
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsxs)(
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
                                    'aria-label': null != s ? s : n,
                                    disabled: j,
                                    dangerous: O
                                },
                                R
                            )),
                            (u = u =
                                {
                                    children: [
                                        null != m
                                            ? (0, r.jsx)(
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
                                            ? (0, r.jsx)('div', {
                                                  className: a()(h.icon, h.buttonContent),
                                                  children: I
                                              })
                                            : null,
                                        _ && (0, r.jsx)(o.K1N, {}),
                                        E &&
                                            (0, r.jsx)(o.IGR, {
                                                text: d.intl.string(d.t.y2b7CA),
                                                color: i.Z.BG_BRAND,
                                                className: h.newBadge
                                            })
                                    ]
                                }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(u))
                                : (function (e, t) {
                                      var n = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var r = Object.getOwnPropertySymbols(e);
                                          n.push.apply(n, r);
                                      }
                                      return n;
                                  })(Object(u)).forEach(function (e) {
                                      Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(u, e));
                                  }),
                            l)
                        ),
                        v && (0, r.jsx)(c.Z0, {})
                    ]
                });
            }
        })
    );
});
function m(e) {
    let { className: t } = e;
    return (0, r.jsx)('div', { className: a()(h.separator, t) });
}
function b(e) {
    var { children: t } = e,
        n = f(e, ['children']);
    let { canShowReactionsOnMessageHover: s } = u.ZP.useExperiment({ location: 'HoverBar' }, { autoTrackExposure: !0 });
    return (
        u.Xb.useExperiment({ location: 'HoverBar' }, { autoTrackExposure: !0 }),
        (0, r.jsx)(c.ZP, {
            className: a()(n.className, h.popover, { [h.popoverReactionHoverBar]: s }),
            children: t
        })
    );
}
