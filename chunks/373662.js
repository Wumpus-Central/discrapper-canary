r.d(t, {
    ZP: () => S,
    fO: () => m,
    sF: () => g
});
var n = r(255367),
    s = r(73800),
    l = r(120356),
    a = r.n(l),
    i = r(481060),
    o = r(377171),
    c = r(951394),
    u = r(407477),
    h = r(388032),
    d = r(852747);
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
    var { label: r, ariaLabel: s, tooltipText: l, tooltipColor: g, icon: m, iconProps: S, onClick: _, onTooltipShow: y, onTooltipHide: b, disabled: x, dangerous: E, separator: O, sparkle: v, showNewBadge: C, buttonClassName: j, children: R } = e,
        I = f(e, ['label', 'ariaLabel', 'tooltipText', 'tooltipColor', 'icon', 'iconProps', 'onClick', 'onTooltipShow', 'onTooltipHide', 'disabled', 'dangerous', 'separator', 'sparkle', 'showNewBadge', 'buttonClassName', 'children']);
    let { canShowReactionsOnMessageHover: T } = u.ZP.useExperiment({ location: 'HoverBarButton' }, { autoTrackExposure: !0 });
    return (
        u.Xb.useExperiment({ location: 'HoverBarButton' }, { autoTrackExposure: !0 }),
        (0, n.jsx)(i.ua7, {
            text: null != l ? l : r,
            color: null != g ? g : i.FGA.PRIMARY,
            'aria-label': r,
            onTooltipShow: y,
            onTooltipHide: b,
            hideOnClick: !0,
            tooltipClassName: d.tooltip,
            children: (e) => {
                var l, u;
                let { onMouseEnter: f, onMouseLeave: g, onClick: y } = e;
                return (0, n.jsxs)(n.Fragment, {
                    children: [
                        (0, n.jsxs)(
                            c.zx,
                            ((l = p(
                                {
                                    ref: t,
                                    className: a()(j, { [d.hoverBarButton]: T }),
                                    onMouseEnter: f,
                                    onMouseLeave: g,
                                    onClick: (e) => {
                                        (null == y || y(), _(e));
                                    },
                                    'aria-label': null != s ? s : r,
                                    disabled: x,
                                    dangerous: E
                                },
                                I
                            )),
                            (u = u =
                                {
                                    children: [
                                        null != m
                                            ? (0, n.jsx)(
                                                  m,
                                                  p(
                                                      {
                                                          className: d.icon,
                                                          color: 'currentColor'
                                                      },
                                                      S
                                                  )
                                              )
                                            : null,
                                        null != R
                                            ? (0, n.jsx)('div', {
                                                  className: a()(d.icon, d.buttonContent),
                                                  children: R
                                              })
                                            : null,
                                        v && (0, n.jsx)(i.K1N, {}),
                                        C &&
                                            (0, n.jsx)(i.IGR, {
                                                text: h.intl.string(h.t.y2b7CA),
                                                color: o.Z.BG_BRAND,
                                                className: d.newBadge
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
                        O && (0, n.jsx)(c.Z0, {})
                    ]
                });
            }
        })
    );
});
function m(e) {
    let { className: t } = e;
    return (0, n.jsx)('div', { className: a()(d.separator, t) });
}
function S(e) {
    var { children: t } = e,
        r = f(e, ['children']);
    let { canShowReactionsOnMessageHover: s } = u.ZP.useExperiment({ location: 'HoverBar' }, { autoTrackExposure: !0 });
    return (
        u.Xb.useExperiment({ location: 'HoverBar' }, { autoTrackExposure: !0 }),
        (0, n.jsx)(c.ZP, {
            className: a()(r.className, d.popover, { [d.popoverReactionHoverBar]: s }),
            children: t
        })
    );
}
