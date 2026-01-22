n.d(t, {
    A: () => g,
});
var r = n(627968),
    l = n(64700),
    i = n(503698),
    s = n.n(i),
    a = n(435371),
    o = n(421380),
    u = n(397927),
    c = n(573435),
    d = n(310945);

function p(e) {
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

function m(e, t) {
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

function f(e, t) {
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
let y = l.forwardRef(function (e, t) {
        let {
                children: n,
                onContextMenu: l,
                onClick: i,
                onMouseDown: a,
                disabled: u,
                icon: p,
                iconForeground: m,
                innerClassName: f,
                className: y,
                redGlow: g,
                onMouseEnter: b,
                onMouseLeave: A,
                "aria-label": x,
                "aria-checked": v,
                role: h,
                plated: E,
            } = e,
            O =
                "function" == typeof p
                    ? (0, r.jsx)(p, {
                          width: 20,
                          height: 20,
                          size: "custom",
                          colorClass: null != m ? m : "",
                          color: "currentColor",
                      })
                    : p;
        return (0, r.jsxs)(o.$n, {
            "data-migration-pending": !0,
            "aria-label": x,
            buttonRef: t,
            look: o.$n.Looks.BLANK,
            size: o.$n.Sizes.NONE,
            disabled: u,
            innerClassName: f,
            wrapperClassName: s()(d.x6, y),
            className: s()(d.x6, y, {
                [d.Xr]: g,
                [d.r9]: u,
                [d.Sn]: !u,
                [d.ZQ]: E,
                [d.OH]: g && E,
            }),
            onClick: (e) => {
                null != i && i(e);
            },
            onMouseDown: a,
            onMouseEnter: b,
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
                    ? (0, r.jsx)(c.Ay, {
                          width: 20,
                          height: 20,
                          mask: c.Ay.Masks.PANEL_BUTTON,
                          children: O,
                      })
                    : O,
                n,
            ],
        });
    }),
    g = l.forwardRef(function (e, t) {
        if (null == e.tooltipType) {
            let { tooltipText: n, tooltipForceOpen: l, tooltipShouldShow: i, tooltipPositionKey: s } = e,
                o = f(e, ["tooltipText", "tooltipForceOpen", "tooltipShouldShow", "tooltipPositionKey"]);
            return (0, r.jsx)(a.m_, {
                text: n,
                forceOpen: l,
                shouldShow: i,
                positionKey: s,
                children: (0, r.jsx)(
                    y,
                    m(p({}, o), {
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
                    onMouseLeave: c,
                    onContextMenu: g,
                    onFocus: b,
                    onBlur: A,
                    "aria-label": x,
                } = e,
                v = f(e, [
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
            return (0, r.jsx)(u.STz, {
                "data-migration-pending": !0,
                tooltipClassName: d.RF,
                tooltipContentClassName: d.In,
                "aria-label": x,
                forceOpen: l,
                shouldShow: i,
                color: u.oMw.GREEN,
                positionKeyStemOverride: s,
                text: n,
                children: (e) => {
                    let {
                        onClick: n,
                        onMouseEnter: l,
                        onMouseLeave: i,
                        onContextMenu: s,
                        onFocus: u,
                        onBlur: d,
                        "aria-label": f,
                    } = e;
                    return (0, r.jsx)(
                        y,
                        m(
                            p(
                                {
                                    onClick: (e) => {
                                        null == n || n(), null == a || a(e);
                                    },
                                    onMouseEnter: () => {
                                        null == l || l(), null == o || o();
                                    },
                                    onMouseLeave: () => {
                                        null == i || i(), null == c || c();
                                    },
                                    onContextMenu: (e) => {
                                        null == s || s(), null == g || g(e);
                                    },
                                    onFocus: () => {
                                        null == u || u(), null == b || b();
                                    },
                                    onBlur: () => {
                                        null == d || d(), null == A || A();
                                    },
                                    "aria-label": f,
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
