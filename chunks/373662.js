n.d(t, {
    ZP: () => T,
    fO: () => E,
    sF: () => N
});
var r = n(200651),
    l = n(192379),
    a = n(120356),
    i = n.n(a),
    o = n(481060),
    u = n(377171),
    s = n(951394),
    c = n(407477),
    p = n(388032),
    m = n(852747);
function d(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function f(e, t) {
    if (null == e) return {};
    var n,
        r,
        l = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                l = {},
                a = Object.keys(e);
            for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (l[n] = e[n]);
            return l;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
    }
    return l;
}
let N = l.forwardRef(function (e, t) {
    var { label: n, ariaLabel: l, tooltipText: a, tooltipColor: N, icon: E, iconProps: T, onClick: O, onTooltipShow: I, onTooltipHide: h, disabled: _, dangerous: R, separator: g, sparkle: C, showNewBadge: P, buttonClassName: A, children: L } = e,
        b = f(e, ['label', 'ariaLabel', 'tooltipText', 'tooltipColor', 'icon', 'iconProps', 'onClick', 'onTooltipShow', 'onTooltipHide', 'disabled', 'dangerous', 'separator', 'sparkle', 'showNewBadge', 'buttonClassName', 'children']);
    let { canShowReactionsOnMessageHover: G } = c.ZP.useExperiment({ location: 'HoverBarButton' }, { autoTrackExposure: !0 });
    return (
        c.Xb.useExperiment({ location: 'HoverBarButton' }, { autoTrackExposure: !0 }),
        (0, r.jsx)(o.ua7, {
            text: null != a ? a : n,
            color: null != N ? N : o.FGA.PRIMARY,
            'aria-label': n,
            onTooltipShow: I,
            onTooltipHide: h,
            hideOnClick: !0,
            tooltipClassName: m.tooltip,
            children: (e) => {
                var a, c;
                let { onMouseEnter: f, onMouseLeave: N, onClick: I } = e;
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsxs)(
                            s.zx,
                            ((a = d(
                                {
                                    ref: t,
                                    className: i()(A, { [m.hoverBarButton]: G }),
                                    onMouseEnter: f,
                                    onMouseLeave: N,
                                    onClick: (e) => {
                                        null == I || I(), O(e);
                                    },
                                    'aria-label': null != l ? l : n,
                                    disabled: _,
                                    dangerous: R
                                },
                                b
                            )),
                            (c = c =
                                {
                                    children: [
                                        null != E
                                            ? (0, r.jsx)(
                                                  E,
                                                  d(
                                                      {
                                                          className: m.icon,
                                                          color: 'currentColor'
                                                      },
                                                      T
                                                  )
                                              )
                                            : null,
                                        null != L
                                            ? (0, r.jsx)('div', {
                                                  className: i()(m.icon, m.buttonContent),
                                                  children: L
                                              })
                                            : null,
                                        C && (0, r.jsx)(o.K1N, {}),
                                        P &&
                                            (0, r.jsx)(o.IGR, {
                                                text: p.intl.string(p.t.y2b7CA),
                                                color: u.Z.BG_BRAND,
                                                className: m.newBadge
                                            })
                                    ]
                                }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(c))
                                : (function (e, t) {
                                      var n = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var r = Object.getOwnPropertySymbols(e);
                                          n.push.apply(n, r);
                                      }
                                      return n;
                                  })(Object(c)).forEach(function (e) {
                                      Object.defineProperty(a, e, Object.getOwnPropertyDescriptor(c, e));
                                  }),
                            a)
                        ),
                        g && (0, r.jsx)(s.Z0, {})
                    ]
                });
            }
        })
    );
});
function E(e) {
    let { className: t } = e;
    return (0, r.jsx)('div', { className: i()(m.separator, t) });
}
function T(e) {
    var { children: t } = e,
        n = f(e, ['children']);
    let { canShowReactionsOnMessageHover: l } = c.ZP.useExperiment({ location: 'HoverBar' }, { autoTrackExposure: !0 });
    return (
        c.Xb.useExperiment({ location: 'HoverBar' }, { autoTrackExposure: !0 }),
        (0, r.jsx)(s.ZP, {
            className: i()(n.className, m.popover, { [m.popoverReactionHoverBar]: l }),
            children: t
        })
    );
}
