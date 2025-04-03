n.d(t, { Z: () => p });
var r = n(200651),
    a = n(192379),
    o = n(120356),
    l = n.n(o),
    i = n(263568),
    s = n(481060),
    c = n(388032),
    u = n(564755);
function d(e) {
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
function m(e) {
    let { label: t, isSelected: n, onClick: a, children: o } = e,
        i = (0, s.xUy)({
            isSelected: n,
            label: t
        });
    return (0, r.jsx)(
        s.P3F,
        f(d({}, i), {
            onClick: a,
            className: l()(u.option, n && u.optionSelected),
            children: o
        })
    );
}
let p = function (e) {
    let { selectedLayoutType: t, onSelectedLayoutType: n } = e,
        o = (0, s.arW)({ orientation: 'horizontal' }),
        l = a.useMemo(
            () => [
                {
                    name: i.C.DEFAULT,
                    label: c.NW.string(c.t.GhK6X1),
                    icon: s.jE$
                },
                {
                    name: i.C.IMAGE_ONLY_ANSWERS,
                    label: c.NW.string(c.t.an4GKS),
                    icon: s.XBm
                }
            ],
            []
        ),
        p = (e) => {
            n(e);
        };
    return (0, r.jsx)(
        'div',
        f(
            d(
                {
                    className: u.container,
                    'aria-label': c.NW.string(c.t.e9hWx8)
                },
                o
            ),
            {
                children: l.map((e) => {
                    let n = e.icon;
                    return (0, r.jsx)(
                        m,
                        {
                            label: e.label,
                            isSelected: e.name === t,
                            onClick: () => p(e.name),
                            children: (0, r.jsx)(n, { className: u.icon })
                        },
                        e.name
                    );
                })
            }
        )
    );
};
