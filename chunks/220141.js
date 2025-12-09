n.d(t, { Z: () => p });
var a = n(54381),
    r = n(473749),
    i = n(371286),
    l = n(785717),
    s = n(836197),
    o = n(299560),
    c = n(247397),
    d = n(921944),
    u = n(388032),
    m = n(285932);
function p(e) {
    var t,
        n,
        { handleOpenUserProfileModal: p, markAsDismissed: h } = e,
        x = (function (e, t) {
            if (null == e) return {};
            var n,
                a,
                r = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        a,
                        r = {},
                        i = Object.keys(e);
                    for (a = 0; a < i.length; a++) (n = i[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                    return r;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (a = 0; a < i.length; a++)
                    (n = i[a]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
            }
            return r;
        })(e, ["handleOpenUserProfileModal", "markAsDismissed"]);
    let { trackUserProfileEditAction: f } = (0, l.KZ)(),
        g = c.rR.filter((e) => s.Ki.includes(e)),
        b = r.useCallback(() => {
            h(d.L.TAKE_ACTION), f({ action: "PRESS_ADD_WIDGET" }), p();
        }, [p, h, f]);
    return (0, a.jsx)(
        i.Z,
        ((t = (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    a = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols &&
                    (a = a.concat(
                        Object.getOwnPropertySymbols(n).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                        }),
                    )),
                    a.forEach(function (t) {
                        var a;
                        (a = n[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: a,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0,
                                  })
                                : (e[t] = a);
                    });
            }
            return e;
        })(
            {
                heading: u.intl.string(u.t["oqalC+"]),
                subheading: u.intl.string(u.t.O9SQ1c),
                markAsDismissed: h,
            },
            x,
        )),
        (n = n =
            {
                children: (0, a.jsx)("ul", {
                    "aria-label": u.intl.string(u.t["+EIBSA"]),
                    className: m.options,
                    children: g.map((e) =>
                        (0, a.jsx)(
                            o.Z,
                            {
                                widgetType: e,
                                size: "medium",
                                onAddWidget: b,
                                trackUserProfileEditAction: f,
                            },
                            e,
                        ),
                    ),
                }),
            }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var a = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, a);
                  }
                  return n;
              })(Object(n)).forEach(function (e) {
                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
              }),
        t),
    );
}
