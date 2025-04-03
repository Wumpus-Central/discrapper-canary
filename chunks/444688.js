n.d(t, { default: () => f });
var r = n(200651);
n(192379);
var i = n(442837),
    o = n(481060),
    s = n(600164),
    l = n(418632),
    c = n(594174),
    a = n(388032),
    u = n(165089);
function d(e) {
    let { onClose: t } = e,
        s = (0, i.e7)([c.default], () => c.default.getCurrentUser());
    function u() {
        null == t || t();
    }
    function d() {
        u(),
            (0, o.ZDy)(async () => {
                let { default: e } = await Promise.all([n.e('9343'), n.e('11564')]).then(n.bind(n, 642298));
                return (t) =>
                    (0, r.jsx)(
                        e,
                        (function (e) {
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
                        })({}, t)
                    );
            });
    }
    return (null == s ? void 0 : s.email) == null
        ? (0, r.jsx)(o.zxk, {
              onClick: d,
              color: o.zxk.Colors.BRAND,
              look: o.zxk.Looks.FILLED,
              children: a.NW.string(a.t.ydw5nZ)
          })
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(o.zxk, {
                      onClick: d,
                      color: o.zxk.Colors.PRIMARY,
                      look: o.zxk.Looks.LINK,
                      children: a.NW.string(a.t.Vm8akJ)
                  }),
                  (0, r.jsx)(l.Z, {
                      color: o.zxk.Colors.BRAND,
                      onClick: u
                  })
              ]
          });
}
let f = function (e) {
    let { onClose: t, transitionState: n } = e;
    return (0, r.jsxs)(o.Y0X, {
        transitionState: n,
        children: [
            (0, r.jsx)(o.xBx, {
                children: (0, r.jsx)(o.vwX, {
                    tag: o.RB0.H4,
                    children: a.NW.string(a.t.UZLrY2)
                })
            }),
            (0, r.jsxs)(o.hzk, {
                children: [
                    (0, r.jsx)('div', { className: u.imageUnverified }),
                    (0, r.jsx)(o.Text, {
                        variant: 'text-md/normal',
                        className: u.message,
                        children: a.NW.string(a.t['0LgOKC'])
                    })
                ]
            }),
            (0, r.jsx)(o.mzw, {
                children: (0, r.jsx)(s.Z, {
                    justify: s.Z.Justify.END,
                    children: (0, r.jsx)(d, { onClose: t })
                })
            })
        ]
    });
};
