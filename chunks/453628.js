n.d(t, {
    Z: () => h,
    y: () => m,
});
var i,
    r = n(951288);
n(647438);
var l = n(120356),
    a = n.n(l),
    o = n(755721),
    s = n(481060),
    c = n(388032),
    d = n(114284);
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
var m = (((i = {}).DENY = "DENY"), (i.PASSTHROUGH = "PASSTHROUGH"), (i.ALLOW = "ALLOW"), i);
let b = Object.keys(m);
function g(e) {
    let { value: t = "PASSTHROUGH", onChange: n, labelledBy: i, disabled: l = !1, id: s } = e,
        c = (0, o.Jb)({
            orientation: "horizontal",
            isDisabled: l,
            labelledBy: i,
        }),
        { ref: m } = c,
        g = (function (e, t) {
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
        })(c, ["ref"]);
    return (0, r.jsx)(
        "div",
        p(
            u(
                {
                    className: a()(d.group, { [d.disabled]: l }),
                    ref: m,
                    id: s,
                },
                g,
            ),
            {
                children: b.map((e) =>
                    (0, r.jsx)(
                        f,
                        {
                            type: e,
                            isSelected: t === e,
                            onSelect: (e) => {
                                t === e || l || n(e);
                            },
                        },
                        e,
                    ),
                ),
            },
        ),
    );
}
function f(e) {
    let t,
        n,
        i,
        { type: l, onSelect: m, isSelected: b } = e;
    switch (l) {
        case "DENY":
            (i = c.intl.string(c.t["6639O5"])), (t = s.Dio), (n = d.deny);
            break;
        case "ALLOW":
            (i = c.intl.string(c.t.RzDfSk)), (t = s.dz2), (n = d.allow);
            break;
        default:
            (i = c.intl.string(c.t.ujC3ZS)), (t = s.XZC), (n = d.passthrough);
    }
    let g = (0, o.jm)({
        isSelected: b,
        label: i,
    });
    return (0, r.jsx)(
        s.P3F,
        p(
            u(
                {
                    className: a()(d.item, n, { [d.selected]: b }),
                    onClick: () => m(l),
                },
                g,
            ),
            {
                children: (0, r.jsx)(t, {
                    color: "currentColor",
                    size: "xs",
                }),
            },
        ),
    );
}
g.Types = m;
let h = g;
