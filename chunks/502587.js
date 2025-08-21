r.d(t, { Z: () => p });
var n = r(951288),
    l = r(647438),
    i = r(481060),
    a = r(239091),
    o = r(314897),
    c = r(86419),
    s = r(872269),
    u = r(228168),
    d = r(388032);
function f(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        "function" == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                }),
            )),
            n.forEach(function (t) {
                var n;
                (n = r[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = n);
            });
    }
    return e;
}
function g(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var r = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      r.push.apply(r, n);
                  }
                  return r;
              })(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
              }),
        e
    );
}
function p(e) {
    let { widget: t } = e,
        p = l.useRef(null),
        b = (e) => {
            if (e.shiftKey) {
                (0, c.y8)(t.type), (0, s.L$)(u.qb.WIDGET_REMOVED);
                return;
            }
            (0, i.ZDy)(
                async () => {
                    let { default: e } = await r.e("70887").then(r.bind(r, 37668));
                    return (r) =>
                        (0, n.jsx)(
                            e,
                            g(f({}, r), {
                                userId: o.default.getId(),
                                widget: t,
                            }),
                        );
                },
                { stackingBehavior: "stack" },
            );
        };
    return (0, n.jsx)(i.yRy, {
        targetElementRef: p,
        align: "top",
        position: "right",
        disablePointerEvents: !1,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, n.jsx)(i.v2r, {
                navId: "user-profile-widget-context-menu",
                onClose: () => {
                    (0, a.Zy)(), t();
                },
                onSelect: () => {},
                "aria-label": d.intl.string(d.t.xpSHSk),
                children: (0, n.jsx)(i.kSQ, {
                    children: (0, n.jsx)(i.sNh, {
                        id: "remove-widget",
                        label: d.intl.string(d.t.Mm07YW),
                        action: b,
                        color: "danger",
                        icon: i.XHJ,
                    }),
                }),
            });
        },
        children: (e) =>
            (0, n.jsx)(
                i.hU,
                g(f({}, e), {
                    buttonRef: p,
                    icon: i.xhG,
                    variant: "secondary",
                    "aria-label": d.intl.string(d.t.xpSHSk),
                    size: "sm",
                }),
            ),
    });
}
