n.d(t, {
    ZP: () => g,
    fO: () => h,
    sF: () => f
});
var r = n(200651),
    i = n(120356),
    a = n.n(i),
    o = n(481060),
    l = n(377171),
    s = n(951394),
    c = n(407477),
    d = n(388032),
    u = n(316584);
function p(e) {
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
function m(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = {},
                a = Object.keys(e);
            for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function f(e) {
    var { label: t, ariaLabel: n, tooltipText: i, tooltipColor: f, icon: h, iconProps: g, onClick: _, onTooltipShow: b, onTooltipHide: v, disabled: y, dangerous: x, separator: O, sparkle: E, showNewBadge: j, buttonClassName: N, children: C } = e,
        I = m(e, ['label', 'ariaLabel', 'tooltipText', 'tooltipColor', 'icon', 'iconProps', 'onClick', 'onTooltipShow', 'onTooltipHide', 'disabled', 'dangerous', 'separator', 'sparkle', 'showNewBadge', 'buttonClassName', 'children']);
    let { canShowReactionsOnMessageHover: S } = c.ZP.useExperiment({ location: 'HoverBarButton' }, { autoTrackExposure: !0 });
    return (
        c.Xb.useExperiment({ location: 'HoverBarButton' }, { autoTrackExposure: !0 }),
        (0, r.jsx)(o.ua7, {
            text: null != i ? i : t,
            color: null != f ? f : o.FGA.PRIMARY,
            'aria-label': t,
            onTooltipShow: b,
            onTooltipHide: v,
            hideOnClick: !0,
            tooltipClassName: u.tooltip,
            children: (e) => {
                var i, c;
                let { onMouseEnter: m, onMouseLeave: f, onClick: b } = e;
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsxs)(
                            s.zx,
                            ((i = p(
                                {
                                    className: a()(N, { [u.hoverBarButton]: S }),
                                    onMouseEnter: m,
                                    onMouseLeave: f,
                                    onClick: (e) => {
                                        null == b || b(), _(e);
                                    },
                                    'aria-label': null != n ? n : t,
                                    disabled: y,
                                    dangerous: x
                                },
                                I
                            )),
                            (c = c =
                                {
                                    children: [
                                        null != h
                                            ? (0, r.jsx)(
                                                  h,
                                                  p(
                                                      {
                                                          className: u.icon,
                                                          color: 'currentColor'
                                                      },
                                                      g
                                                  )
                                              )
                                            : null,
                                        null != C
                                            ? (0, r.jsx)('div', {
                                                  className: a()(u.icon, u.buttonContent),
                                                  children: C
                                              })
                                            : null,
                                        E && (0, r.jsx)(o.K1N, {}),
                                        j &&
                                            (0, r.jsx)(o.IGR, {
                                                text: d.NW.string(d.t.y2b7CA),
                                                color: l.Z.BG_BRAND,
                                                className: u.newBadge
                                            })
                                    ]
                                }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(c))
                                : (function (e, t) {
                                      var n = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var r = Object.getOwnPropertySymbols(e);
                                          n.push.apply(n, r);
                                      }
                                      return n;
                                  })(Object(c)).forEach(function (e) {
                                      Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(c, e));
                                  }),
                            i)
                        ),
                        O && (0, r.jsx)(s.Z0, {})
                    ]
                });
            }
        })
    );
}
function h(e) {
    let { className: t } = e;
    return (0, r.jsx)('div', { className: a()(u.separator, t) });
}
function g(e) {
    var { children: t } = e,
        n = m(e, ['children']);
    let { canShowReactionsOnMessageHover: i } = c.ZP.useExperiment({ location: 'HoverBar' }, { autoTrackExposure: !0 });
    return (
        c.Xb.useExperiment({ location: 'HoverBar' }, { autoTrackExposure: !0 }),
        (0, r.jsx)(s.ZP, {
            className: a()(n.className, u.popover, { [u.popoverReactionHoverBar]: i }),
            children: t
        })
    );
}
