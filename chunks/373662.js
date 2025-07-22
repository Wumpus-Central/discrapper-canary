n.d(t, {
    ZP: () => _,
    fO: () => m,
    sF: () => g
});
var r = n(255367),
    s = n(73800),
    l = n(120356),
    a = n.n(l),
    i = n(481060),
    o = n(377171),
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
    var { label: n, ariaLabel: s, tooltipText: l, tooltipColor: g, icon: m, iconProps: _, onClick: S, onTooltipShow: y, onTooltipHide: b, disabled: x, dangerous: E, separator: C, sparkle: O, showNewBadge: v, buttonClassName: I, children: j } = e,
        R = f(e, ['label', 'ariaLabel', 'tooltipText', 'tooltipColor', 'icon', 'iconProps', 'onClick', 'onTooltipShow', 'onTooltipHide', 'disabled', 'dangerous', 'separator', 'sparkle', 'showNewBadge', 'buttonClassName', 'children']);
    let { canShowReactionsOnMessageHover: T } = u.ZP.useExperiment({ location: 'HoverBarButton' }, { autoTrackExposure: !0 });
    return (
        u.Xb.useExperiment({ location: 'HoverBarButton' }, { autoTrackExposure: !0 }),
        (0, r.jsx)(i.ua7, {
            text: null != l ? l : n,
            color: null != g ? g : i.FGA.PRIMARY,
            'aria-label': n,
            onTooltipShow: y,
            onTooltipHide: b,
            hideOnClick: !0,
            tooltipClassName: h.tooltip,
            children: (e) => {
                var l, u;
                let { onMouseEnter: f, onMouseLeave: g, onClick: y } = e;
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsxs)(
                            c.zx,
                            ((l = p(
                                {
                                    ref: t,
                                    className: a()(I, { [h.hoverBarButton]: T }),
                                    onMouseEnter: f,
                                    onMouseLeave: g,
                                    onClick: (e) => {
                                        (null == y || y(), S(e));
                                    },
                                    'aria-label': null != s ? s : n,
                                    disabled: x,
                                    dangerous: E
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
                                                      _
                                                  )
                                              )
                                            : null,
                                        null != j
                                            ? (0, r.jsx)('div', {
                                                  className: a()(h.icon, h.buttonContent),
                                                  children: j
                                              })
                                            : null,
                                        O && (0, r.jsx)(i.K1N, {}),
                                        v &&
                                            (0, r.jsx)(i.IGR, {
                                                text: d.intl.string(d.t.y2b7CA),
                                                color: o.Z.BG_BRAND,
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
                        C && (0, r.jsx)(c.Z0, {})
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
function _(e) {
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
