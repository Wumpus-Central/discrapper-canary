n.d(t, {
    ZP: () => b,
    fO: () => h,
    sF: () => g
});
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(481060),
    s = n(377171),
    c = n(951394),
    u = n(407477),
    d = n(388032),
    f = n(852747);
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
function m(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = {},
                l = Object.keys(e);
            for (r = 0; r < l.length; r++) ((n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
            return i;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var l = Object.getOwnPropertySymbols(e);
        for (r = 0; r < l.length; r++) ((n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
    }
    return i;
}
let g = i.forwardRef(function (e, t) {
    var { label: n, ariaLabel: i, tooltipText: l, tooltipColor: g, icon: h, iconProps: b, onClick: v, onTooltipShow: _, onTooltipHide: y, disabled: O, dangerous: S, separator: I, sparkle: j, showNewBadge: x, buttonClassName: E, children: P } = e,
        C = m(e, ['label', 'ariaLabel', 'tooltipText', 'tooltipColor', 'icon', 'iconProps', 'onClick', 'onTooltipShow', 'onTooltipHide', 'disabled', 'dangerous', 'separator', 'sparkle', 'showNewBadge', 'buttonClassName', 'children']);
    let { canShowReactionsOnMessageHover: T } = u.ZP.useExperiment({ location: 'HoverBarButton' }, { autoTrackExposure: !0 });
    return (
        u.Xb.useExperiment({ location: 'HoverBarButton' }, { autoTrackExposure: !0 }),
        (0, r.jsx)(o.ua7, {
            text: null != l ? l : n,
            color: null != g ? g : o.FGA.PRIMARY,
            'aria-label': n,
            onTooltipShow: _,
            onTooltipHide: y,
            hideOnClick: !0,
            tooltipClassName: f.tooltip,
            children: (e) => {
                var l, u;
                let { onMouseEnter: m, onMouseLeave: g, onClick: _ } = e;
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsxs)(
                            c.zx,
                            ((l = p(
                                {
                                    ref: t,
                                    className: a()(E, { [f.hoverBarButton]: T }),
                                    onMouseEnter: m,
                                    onMouseLeave: g,
                                    onClick: (e) => {
                                        (null == _ || _(), v(e));
                                    },
                                    'aria-label': null != i ? i : n,
                                    disabled: O,
                                    dangerous: S
                                },
                                C
                            )),
                            (u = u =
                                {
                                    children: [
                                        null != h
                                            ? (0, r.jsx)(
                                                  h,
                                                  p(
                                                      {
                                                          className: f.icon,
                                                          color: 'currentColor'
                                                      },
                                                      b
                                                  )
                                              )
                                            : null,
                                        null != P
                                            ? (0, r.jsx)('div', {
                                                  className: a()(f.icon, f.buttonContent),
                                                  children: P
                                              })
                                            : null,
                                        j && (0, r.jsx)(o.K1N, {}),
                                        x &&
                                            (0, r.jsx)(o.IGR, {
                                                text: d.intl.string(d.t.y2b7CA),
                                                color: s.Z.BG_BRAND,
                                                className: f.newBadge
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
                        I && (0, r.jsx)(c.Z0, {})
                    ]
                });
            }
        })
    );
});
function h(e) {
    let { className: t } = e;
    return (0, r.jsx)('div', { className: a()(f.separator, t) });
}
function b(e) {
    var { children: t } = e,
        n = m(e, ['children']);
    let { canShowReactionsOnMessageHover: i } = u.ZP.useExperiment({ location: 'HoverBar' }, { autoTrackExposure: !0 });
    return (
        u.Xb.useExperiment({ location: 'HoverBar' }, { autoTrackExposure: !0 }),
        (0, r.jsx)(c.ZP, {
            className: a()(n.className, f.popover, { [f.popoverReactionHoverBar]: i }),
            children: t
        })
    );
}
