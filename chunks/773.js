t.d(n, { Z: () => u });
var i = t(200651),
    r = t(120356),
    a = t.n(r),
    o = t(481060),
    s = t(413335),
    c = t(783684),
    l = t(388032),
    d = t(96629);
function u(e) {
    let { className: n, active: t, onPrimaryClick: r, onSecondaryClick: u } = e;
    return (0, i.jsxs)('div', {
        className: a()(d.container, n),
        children: [
            t &&
                (0, i.jsx)(o.ua7, {
                    text: l.NW.string(c.Z.R3ZG5O),
                    children: (e) => {
                        var n, t;
                        return (0, i.jsx)(
                            o.zxk,
                            ((n = (function (e) {
                                for (var n = 1; n < arguments.length; n++) {
                                    var t = null != arguments[n] ? arguments[n] : {},
                                        i = Object.keys(t);
                                    'function' == typeof Object.getOwnPropertySymbols &&
                                        (i = i.concat(
                                            Object.getOwnPropertySymbols(t).filter(function (e) {
                                                return Object.getOwnPropertyDescriptor(t, e).enumerable;
                                            })
                                        )),
                                        i.forEach(function (n) {
                                            var i;
                                            (i = t[n]),
                                                n in e
                                                    ? Object.defineProperty(e, n, {
                                                          value: i,
                                                          enumerable: !0,
                                                          configurable: !0,
                                                          writable: !0
                                                      })
                                                    : (e[n] = i);
                                        });
                                }
                                return e;
                            })({}, e)),
                            (t = t =
                                {
                                    className: d.secondaryButton,
                                    color: o.Ttl.PRIMARY,
                                    'aria-label': l.NW.string(c.Z.R3ZG5O),
                                    grow: !1,
                                    onClick: u,
                                    children: (0, i.jsx)(s.Z, {})
                                }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t))
                                : (function (e, n) {
                                      var t = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var i = Object.getOwnPropertySymbols(e);
                                          t.push.apply(t, i);
                                      }
                                      return t;
                                  })(Object(t)).forEach(function (e) {
                                      Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(t, e));
                                  }),
                            n)
                        );
                    }
                }),
            (0, i.jsx)(o.zxk, {
                className: d.primaryButton,
                grow: !0,
                onClick: r,
                children: t ? l.NW.string(c.Z['g5Ds6+']) : l.NW.string(c.Z.adzkaW)
            })
        ]
    });
}
