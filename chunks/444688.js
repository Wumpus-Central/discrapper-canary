n.d(t, { default: () => m });
var r = n(255367);
n(73800);
var i = n(442837),
    s = n(755721),
    o = n(481060),
    l = n(600164),
    a = n(418632),
    c = n(594174),
    u = n(388032),
    d = n(165089);
function f(e) {
    let { onClose: t } = e,
        l = (0, i.e7)([c.default], () => c.default.getCurrentUser());
    function d() {
        null == t || t();
    }
    function f() {
        (d(),
            (0, o.ZDy)(async () => {
                let { default: e } = await Promise.all([n.e('9343'), n.e('11564')]).then(n.bind(n, 642298));
                return (t) =>
                    (0, r.jsx)(
                        e,
                        (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {},
                                    r = Object.keys(n);
                                ('function' == typeof Object.getOwnPropertySymbols &&
                                    (r = r.concat(
                                        Object.getOwnPropertySymbols(n).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                        })
                                    )),
                                    r.forEach(function (t) {
                                        var r;
                                        ((r = n[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: r,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0
                                                  })
                                                : (e[t] = r));
                                    }));
                            }
                            return e;
                        })({}, t)
                    );
            }));
    }
    return (null == l ? void 0 : l.email) == null
        ? (0, r.jsx)(o.zxk, {
              variant: 'primary',
              text: u.intl.string(u.t.ydw5nZ),
              onClick: f
          })
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(o.zxk, {
                      variant: 'secondary',
                      text: u.intl.string(u.t.Vm8akJ),
                      onClick: f
                  }),
                  (0, r.jsx)(a.Z, {
                      color: s.zx.Colors.BRAND,
                      onClick: d
                  })
              ]
          });
}
let m = function (e) {
    let { onClose: t, transitionState: n } = e;
    return (0, r.jsxs)(o.Y0X, {
        transitionState: n,
        parentComponent: 'UnverifiedEmailModal',
        children: [
            (0, r.jsx)(o.xBx, {
                children: (0, r.jsx)(o.vwX, {
                    tag: o.RB0.H4,
                    children: u.intl.string(u.t.UZLrY2)
                })
            }),
            (0, r.jsxs)(o.hzk, {
                children: [
                    (0, r.jsx)('div', { className: d.imageUnverified }),
                    (0, r.jsx)(o.Text, {
                        variant: 'text-md/normal',
                        className: d.message,
                        children: u.intl.string(u.t['0LgOKC'])
                    })
                ]
            }),
            (0, r.jsx)(o.mzw, {
                children: (0, r.jsx)(l.Z, {
                    justify: l.Z.Justify.END,
                    children: (0, r.jsx)(f, { onClose: t })
                })
            })
        ]
    });
};
