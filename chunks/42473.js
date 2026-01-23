n.d(t, {
    A: () => g,
});
var r = n(627968),
    l = n(64700),
    i = n(503698),
    s = n.n(i),
    a = n(435371),
    o = n(614820),
    u = n(421380),
    c = n(397927),
    d = n(573435),
    p = n(310945);

function m(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}

function f(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function y(e, t) {
    if (null == e) return {};
    var n,
        r,
        l,
        i = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++)
            (r = n[l]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
        return i;
    }
    if (
        ((i = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                l = {},
                i = Object.getOwnPropertyNames(e);
            for (r = 0; r < i.length; r++)
                (n = i[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
            return l;
        })(e, t)),
        Object.getOwnPropertySymbols)
    )
        for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++)
            (r = n[l]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
    return i;
}
let b = l.forwardRef(function (e, t) {
        let {
                children: n,
                onContextMenu: l,
                onClick: i,
                onMouseDown: a,
                disabled: o,
                icon: c,
                iconForeground: m,
                innerClassName: f,
                className: y,
                redGlow: b,
                onMouseEnter: g,
                onMouseLeave: A,
                "aria-label": x,
                "aria-checked": v,
                role: h,
                plated: O,
            } = e,
            E =
                "function" == typeof c
                    ? (0, r.jsx)(c, {
                          width: 20,
                          height: 20,
                          size: "custom",
                          colorClass: null != m ? m : "",
                          color: "currentColor",
                      })
                    : c;
        return (0, r.jsxs)(u.$n, {
            "data-migration-pending": !0,
            "aria-label": x,
            buttonRef: t,
            look: u.$n.Looks.BLANK,
            size: u.$n.Sizes.NONE,
            disabled: o,
            innerClassName: f,
            wrapperClassName: s()(p.x6, y),
            className: s()(p.x6, y, {
                [p.Xr]: b,
                [p.r9]: o,
                [p.Sn]: !o,
                [p.ZQ]: O,
                [p.OH]: b && O,
            }),
            onClick: (e) => {
                null != i && i(e);
            },
            onMouseDown: a,
            onMouseEnter: g,
            onMouseLeave: A,
            onContextMenu: l,
            role: h,
            "aria-checked": v,
            focusProps: {
                offset: {
                    left: -1,
                    top: -1,
                    right: 1,
                    bottom: 1,
                },
            },
            children: [
                null != n
                    ? (0, r.jsx)(d.Ay, {
                          width: 20,
                          height: 20,
                          mask: d.Ay.Masks.PANEL_BUTTON,
                          children: E,
                      })
                    : E,
                n,
            ],
        });
    }),
    g = l.forwardRef(function (e, t) {
        if (null == e.tooltipType) {
            let {
                    tooltipText: n,
                    tooltipForceOpen: l,
                    tooltipShouldShow: i,
                    tooltipPositionKey: s,
                    "aria-label": u,
                } = e,
                c = y(e, ["tooltipText", "tooltipForceOpen", "tooltipShouldShow", "tooltipPositionKey", "aria-label"]),
                d = (0, o.O)(n);
            return (0, r.jsx)(a.m_, {
                text: n,
                forceOpen: l,
                shouldShow: i,
                positionKey: s,
                children: (0, r.jsx)(
                    b,
                    f(m({}, c), {
                        "aria-label": null != u ? u : d,
                        ref: t,
                    }),
                ),
            });
        }
        {
            let {
                    tooltipText: n,
                    tooltipForceOpen: l,
                    tooltipShouldShow: i,
                    tooltipPositionKey: s,
                    onClick: a,
                    onMouseEnter: o,
                    onMouseLeave: u,
                    onContextMenu: d,
                    onFocus: g,
                    onBlur: A,
                    "aria-label": x,
                } = e,
                v = y(e, [
                    "tooltipText",
                    "tooltipForceOpen",
                    "tooltipShouldShow",
                    "tooltipPositionKey",
                    "onClick",
                    "onMouseEnter",
                    "onMouseLeave",
                    "onContextMenu",
                    "onFocus",
                    "onBlur",
                    "aria-label",
                ]);
            return (0, r.jsx)(c.STz, {
                "data-migration-pending": !0,
                tooltipClassName: p.RF,
                tooltipContentClassName: p.In,
                "aria-label": x,
                forceOpen: l,
                shouldShow: i,
                color: c.oMw.GREEN,
                positionKeyStemOverride: s,
                text: n,
                children: (e) => {
                    let {
                        onClick: n,
                        onMouseEnter: l,
                        onMouseLeave: i,
                        onContextMenu: s,
                        onFocus: c,
                        onBlur: p,
                        "aria-label": y,
                    } = e;
                    return (0, r.jsx)(
                        b,
                        f(
                            m(
                                {
                                    onClick: (e) => {
                                        null == n || n(), null == a || a(e);
                                    },
                                    onMouseEnter: () => {
                                        null == l || l(), null == o || o();
                                    },
                                    onMouseLeave: () => {
                                        null == i || i(), null == u || u();
                                    },
                                    onContextMenu: (e) => {
                                        null == s || s(), null == d || d(e);
                                    },
                                    onFocus: () => {
                                        null == c || c(), null == g || g();
                                    },
                                    onBlur: () => {
                                        null == p || p(), null == A || A();
                                    },
                                    "aria-label": y,
                                },
                                v,
                            ),
                            {
                                ref: t,
                            },
                        ),
                    );
                },
            });
        }
    });
