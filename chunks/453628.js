n.d(t, {
    Z: () => f,
    y: () => p
});
var i,
    r = n(255367);
n(73800);
var l = n(120356),
    o = n.n(l),
    a = n(481060),
    s = n(388032),
    c = n(81206);
function d(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                ((i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = i));
            }));
    }
    return e;
}
function u(e, t) {
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
var p = (((i = {}).DENY = 'DENY'), (i.PASSTHROUGH = 'PASSTHROUGH'), (i.ALLOW = 'ALLOW'), i);
let m = Object.keys(p);
function b(e) {
    let { value: t = 'PASSTHROUGH', onChange: n, labelledBy: i, disabled: l = !1 } = e,
        s = (0, a.arW)({
            orientation: 'horizontal',
            isDisabled: l,
            labelledBy: i
        }),
        { ref: p } = s,
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
                    for (i = 0; i < l.length; i++) ((n = l[i]), t.indexOf(n) >= 0 || (r[n] = e[n]));
                    return r;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (i = 0; i < l.length; i++) ((n = l[i]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]));
            }
            return r;
        })(s, ['ref']);
    return (0, r.jsx)(
        'div',
        u(
            d(
                {
                    className: o()(c.group, { [c.disabled]: l }),
                    ref: p
                },
                b
            ),
            {
                children: m.map((e) =>
                    (0, r.jsx)(
                        g,
                        {
                            type: e,
                            isSelected: t === e,
                            onSelect: (e) => {
                                t === e || l || n(e);
                            }
                        },
                        e
                    )
                )
            }
        )
    );
}
function g(e) {
    let t,
        n,
        i,
        { type: l, onSelect: p, isSelected: m } = e;
    switch (l) {
        case 'DENY':
            ((i = s.intl.string(s.t['6639Oz'])), (t = a.Dio), (n = c.deny));
            break;
        case 'ALLOW':
            ((i = s.intl.string(s.t.RzDfSk)), (t = a.dz2), (n = c.allow));
            break;
        default:
            ((i = s.intl.string(s.t.ujC3ZW)), (t = a.XZC), (n = c.passthrough));
    }
    let b = (0, a.xUy)({
        isSelected: m,
        label: i
    });
    return (0, r.jsx)(
        a.P3F,
        u(
            d(
                {
                    className: o()(c.item, n, { [c.selected]: m }),
                    onClick: () => p(l)
                },
                b
            ),
            {
                children: (0, r.jsx)(t, {
                    color: 'currentColor',
                    size: 'xs'
                })
            }
        )
    );
}
b.Types = p;
let f = b;
