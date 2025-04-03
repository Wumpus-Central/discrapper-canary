n.d(t, { Z: () => m }), n(47120);
var r = n(200651),
    i = n(192379),
    s = n(442837),
    a = n(481060),
    l = n(153867),
    o = n(706454),
    c = n(388032),
    d = n(353857),
    u = n(444675);
function m() {
    let e = (0, s.e7)([o.default], () => o.default.locale),
        [t, m] = i.useState(e),
        [g] = i.useState(() =>
            (0, c.u5)().map((e) => {
                var t, i;
                let s;
                try {
                    s = n(621287)('./'.concat(e.value, '.png'));
                } catch (e) {
                    s = n(1474);
                }
                return (
                    (t = (function (e) {
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
                    })({}, e)),
                    (i = i =
                        {
                            name: (0, r.jsxs)('div', {
                                className: d.option,
                                children: [
                                    (0, r.jsx)('span', {
                                        className: d.localeName,
                                        children: e.name
                                    }),
                                    (0, r.jsx)('span', {
                                        className: d.localizedName,
                                        children: c.NW.string(e.localizedName)
                                    }),
                                    (0, r.jsx)('div', {
                                        className: d.flag,
                                        'aria-hidden': !0,
                                        children: (0, r.jsx)('img', {
                                            alt: '',
                                            src: s,
                                            className: d.flagImage
                                        })
                                    })
                                ]
                            })
                        }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var r = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, r);
                              }
                              return n;
                          })(Object(i)).forEach(function (e) {
                              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e));
                          }),
                    t
                );
            })
        ),
        p = i.useCallback((e) => {
            let { value: t } = e;
            m(t), u.nextTick(() => l.ZP.updateLocale(t));
        }, []);
    return (0, r.jsx)(a.hjN, {
        tag: a.RB0.H1,
        title: c.NW.string(c.t.IHMsPj),
        children: (0, r.jsx)(a.hjN, {
            children: (0, r.jsx)(a.xJW, {
                title: c.NW.string(c.t['mx+sp6']),
                children: (0, r.jsx)(a.FXm, {
                    onChange: p,
                    options: g,
                    value: t
                })
            })
        })
    });
}
