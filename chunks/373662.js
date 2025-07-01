n.d(t, {
    ZP: () => _,
    fO: () => b,
    sF: () => g
});
var r = n(255367),
    i = n(73800),
    l = n(120356),
    o = n.n(l),
    a = n(481060),
    s = n(377171),
    c = n(951394),
    u = n(407477),
    d = n(388032),
    p = n(852747);
function f(e) {
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
    var { label: n, ariaLabel: i, tooltipText: l, tooltipColor: g, icon: b, iconProps: _, onClick: v, onTooltipShow: h, onTooltipHide: y, disabled: O, dangerous: j, separator: S, sparkle: x, showNewBadge: I, buttonClassName: P, children: C } = e,
        E = m(e, ['label', 'ariaLabel', 'tooltipText', 'tooltipColor', 'icon', 'iconProps', 'onClick', 'onTooltipShow', 'onTooltipHide', 'disabled', 'dangerous', 'separator', 'sparkle', 'showNewBadge', 'buttonClassName', 'children']);
    let { canShowReactionsOnMessageHover: w } = u.ZP.useExperiment({ location: 'HoverBarButton' }, { autoTrackExposure: !0 });
    return (
        u.Xb.useExperiment({ location: 'HoverBarButton' }, { autoTrackExposure: !0 }),
        (0, r.jsx)(a.ua7, {
            text: null != l ? l : n,
            color: null != g ? g : a.FGA.PRIMARY,
            'aria-label': n,
            onTooltipShow: h,
            onTooltipHide: y,
            hideOnClick: !0,
            tooltipClassName: p.tooltip,
            children: (e) => {
                var l, u;
                let { onMouseEnter: m, onMouseLeave: g, onClick: h } = e;
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsxs)(
                            c.zx,
                            ((l = f(
                                {
                                    ref: t,
                                    className: o()(P, { [p.hoverBarButton]: w }),
                                    onMouseEnter: m,
                                    onMouseLeave: g,
                                    onClick: (e) => {
                                        (null == h || h(), v(e));
                                    },
                                    'aria-label': null != i ? i : n,
                                    disabled: O,
                                    dangerous: j
                                },
                                E
                            )),
                            (u = u =
                                {
                                    children: [
                                        null != b
                                            ? (0, r.jsx)(
                                                  b,
                                                  f(
                                                      {
                                                          className: p.icon,
                                                          color: 'currentColor'
                                                      },
                                                      _
                                                  )
                                              )
                                            : null,
                                        null != C
                                            ? (0, r.jsx)('div', {
                                                  className: o()(p.icon, p.buttonContent),
                                                  children: C
                                              })
                                            : null,
                                        x && (0, r.jsx)(a.K1N, {}),
                                        I &&
                                            (0, r.jsx)(a.IGR, {
                                                text: d.intl.string(d.t.y2b7CA),
                                                color: s.Z.BG_BRAND,
                                                className: p.newBadge
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
                        S && (0, r.jsx)(c.Z0, {})
                    ]
                });
            }
        })
    );
});
function b(e) {
    let { className: t } = e;
    return (0, r.jsx)('div', { className: o()(p.separator, t) });
}
function _(e) {
    var { children: t } = e,
        n = m(e, ['children']);
    let { canShowReactionsOnMessageHover: i } = u.ZP.useExperiment({ location: 'HoverBar' }, { autoTrackExposure: !0 });
    return (
        u.Xb.useExperiment({ location: 'HoverBar' }, { autoTrackExposure: !0 }),
        (0, r.jsx)(c.ZP, {
            className: o()(n.className, p.popover, { [p.popoverReactionHoverBar]: i }),
            children: t
        })
    );
}
