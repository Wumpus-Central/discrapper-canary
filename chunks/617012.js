n.d(t, { Z: () => b });
var i = n(54381),
    r = n(473749),
    l = n(120356),
    a = n.n(l),
    o = n(755721),
    s = n(481060),
    c = n(388032),
    d = n(376585);
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
function p(e, t) {
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
let m = [!1, !0];
function b(e) {
    let { isDisabled: t, currentValue: n, onChange: l } = e,
        s = (0, o.Jb)({
            orientation: "horizontal",
            isDisabled: t,
        }),
        { ref: c } = s,
        b = (function (e, t) {
            if (null == e) return {};
            var n,
                i,
                r = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        i,
                        r = {},
                        l = Object.keys(e);
                    for (i = 0; i < l.length; i++) (n = l[i]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                    return r;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (i = 0; i < l.length; i++)
                    (n = l[i]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
            }
            return r;
        })(s, ["ref"]),
        f = r.useCallback(
            (e) => {
                t || e === n || l(e);
            },
            [t, n, l],
        );
    return (0, i.jsx)(
        "div",
        p(
            u(
                {
                    className: a()(d.group, { [d.disabled]: t }),
                    ref: c,
                },
                b,
            ),
            {
                children: m.map((e) =>
                    (0, i.jsx)(
                        g,
                        {
                            isSelected: n === e,
                            itemValue: e,
                            onClick: () => f(e),
                        },
                        e.toString(),
                    ),
                ),
            },
        ),
    );
}
function g(e) {
    let { isSelected: t, itemValue: n, onClick: r } = e,
        l = n ? d.allow : d.deny,
        m = n ? s.dz2 : s.Dio,
        b = n ? c.intl.string(c.t.RzDfSk) : c.intl.string(c.t["6639O5"]),
        g = (0, o.jm)({
            isSelected: t,
            label: b,
        });
    return (0, i.jsx)(
        s.P3F,
        p(
            u(
                {
                    className: a()(d.item, l, { [d.selected]: t }),
                    onClick: r,
                },
                g,
            ),
            {
                children: (0, i.jsx)(m, {
                    size: "xs",
                    color: "currentColor",
                }),
            },
        ),
    );
}
