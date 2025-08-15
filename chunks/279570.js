n.d(t, { Q: () => p });
var i = n(951288),
    r = n(647438),
    s = n(120356),
    a = n.n(s),
    l = n(84735),
    o = n(780605),
    c = n(214785),
    d = n(974257);
function u(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = i);
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
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function p(e) {
    var {
            role: t = "button",
            type: n = "button",
            size: s = "md",
            variant: p = "secondary",
            icon: g,
            iconOpticalOffsetMargin: h = 0,
            focusProps: f,
            pressed: b = !1,
            "aria-label": x,
            buttonRef: _,
            disabled: j,
            className: E,
            style: C,
        } = e,
        O = (function (e, t) {
            if (null == e) return {};
            var n,
                i,
                r = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        i,
                        r = {},
                        s = Object.keys(e);
                    for (i = 0; i < s.length; i++) (n = s[i]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                    return r;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(e);
                for (i = 0; i < s.length; i++)
                    (n = s[i]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
            }
            return r;
        })(e, [
            "role",
            "type",
            "size",
            "variant",
            "icon",
            "iconOpticalOffsetMargin",
            "focusProps",
            "pressed",
            "aria-label",
            "buttonRef",
            "disabled",
            "className",
            "style",
        ]);
    let v = r.useRef(null),
        S = null != _ ? _ : v,
        T = (0, i.jsx)(o.E, {
            icon: g,
            iconOpticalOffsetMargin: h,
            iconPosition: "start",
            size: s,
            ref: S,
            disabled: j,
        });
    return (0, i.jsx)(
        l.t,
        m(u({}, f), {
            children: (0, i.jsx)(
                "button",
                m(
                    u(
                        {
                            role: t,
                            type: n,
                            "aria-pressed": b,
                            className: a()(c.button, d.button, c[s], d[p], { [d.pressed]: b }),
                            "aria-label": x,
                            disabled: j,
                            ref: S,
                        },
                        O,
                    ),
                    {
                        children: (0, i.jsx)("div", {
                            className: c.buttonChildrenWrapper,
                            children: T,
                        }),
                    },
                ),
            ),
        }),
    );
}
