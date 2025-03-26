n.d(t, {
    ZP: () => _,
    fO: () => g,
    sF: () => h
});
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    l = n(481060),
    s = n(377171),
    c = n(951394),
    u = n(407477),
    d = n(388032),
    p = n(321968);
function m(e) {
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
        i = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = {},
                o = Object.keys(e);
            for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
let h = i.forwardRef(function (e, t) {
    var { label: n, ariaLabel: i, tooltipText: o, tooltipColor: h, icon: g, iconProps: _, onClick: b, onTooltipShow: v, onTooltipHide: x, disabled: y, dangerous: E, separator: O, sparkle: N, showNewBadge: j, buttonClassName: C, children: I } = e,
        S = f(e, ['label', 'ariaLabel', 'tooltipText', 'tooltipColor', 'icon', 'iconProps', 'onClick', 'onTooltipShow', 'onTooltipHide', 'disabled', 'dangerous', 'separator', 'sparkle', 'showNewBadge', 'buttonClassName', 'children']);
    let { canShowReactionsOnMessageHover: T } = u.ZP.useExperiment({ location: 'HoverBarButton' }, { autoTrackExposure: !0 });
    return (
        u.Xb.useExperiment({ location: 'HoverBarButton' }, { autoTrackExposure: !0 }),
        (0, r.jsx)(l.ua7, {
            text: null != o ? o : n,
            color: null != h ? h : l.FGA.PRIMARY,
            'aria-label': n,
            onTooltipShow: v,
            onTooltipHide: x,
            hideOnClick: !0,
            tooltipClassName: p.tooltip,
            children: (e) => {
                var o, u;
                let { onMouseEnter: f, onMouseLeave: h, onClick: v } = e;
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsxs)(
                            c.zx,
                            ((o = m(
                                {
                                    ref: t,
                                    className: a()(C, { [p.hoverBarButton]: T }),
                                    onMouseEnter: f,
                                    onMouseLeave: h,
                                    onClick: (e) => {
                                        null == v || v(), b(e);
                                    },
                                    'aria-label': null != i ? i : n,
                                    disabled: y,
                                    dangerous: E
                                },
                                S
                            )),
                            (u = u =
                                {
                                    children: [
                                        null != g
                                            ? (0, r.jsx)(
                                                  g,
                                                  m(
                                                      {
                                                          className: p.icon,
                                                          color: 'currentColor'
                                                      },
                                                      _
                                                  )
                                              )
                                            : null,
                                        null != I
                                            ? (0, r.jsx)('div', {
                                                  className: a()(p.icon, p.buttonContent),
                                                  children: I
                                              })
                                            : null,
                                        N && (0, r.jsx)(l.K1N, {}),
                                        j &&
                                            (0, r.jsx)(l.IGR, {
                                                text: d.NW.string(d.t.y2b7CA),
                                                color: s.Z.BG_BRAND,
                                                className: p.newBadge
                                            })
                                    ]
                                }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(u))
                                : (function (e, t) {
                                      var n = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var r = Object.getOwnPropertySymbols(e);
                                          n.push.apply(n, r);
                                      }
                                      return n;
                                  })(Object(u)).forEach(function (e) {
                                      Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(u, e));
                                  }),
                            o)
                        ),
                        O && (0, r.jsx)(c.Z0, {})
                    ]
                });
            }
        })
    );
});
function g(e) {
    let { className: t } = e;
    return (0, r.jsx)('div', { className: a()(p.separator, t) });
}
function _(e) {
    var { children: t } = e,
        n = f(e, ['children']);
    let { canShowReactionsOnMessageHover: i } = u.ZP.useExperiment({ location: 'HoverBar' }, { autoTrackExposure: !0 });
    return (
        u.Xb.useExperiment({ location: 'HoverBar' }, { autoTrackExposure: !0 }),
        (0, r.jsx)(c.ZP, {
            className: a()(n.className, p.popover, { [p.popoverReactionHoverBar]: i }),
            children: t
        })
    );
}
