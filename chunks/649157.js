n.d(t, { Z: () => m }), n(388685);
var i = n(200651),
    r = n(192379),
    s = n(442837),
    l = n(481060),
    a = n(153867),
    o = n(706454),
    c = n(388032),
    d = n(353857),
    u = n(444675);
function m() {
    let e = (0, s.e7)([o.default], () => o.default.locale),
        [t, m] = r.useState(e),
        [p] = r.useState(() =>
            (0, c.getAvailableLocales)().map((e) => {
                var t, r;
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
                                i = Object.keys(n);
                            'function' == typeof Object.getOwnPropertySymbols &&
                                (i = i.concat(
                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                    })
                                )),
                                i.forEach(function (t) {
                                    var i;
                                    (i = n[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: i,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0
                                              })
                                            : (e[t] = i);
                                });
                        }
                        return e;
                    })({}, e)),
                    (r = r =
                        {
                            name: (0, i.jsxs)('div', {
                                className: d.option,
                                children: [
                                    (0, i.jsx)('span', {
                                        className: d.localeName,
                                        children: e.name
                                    }),
                                    (0, i.jsx)('span', {
                                        className: d.localizedName,
                                        children: c.intl.string(e.localizedName)
                                    }),
                                    (0, i.jsx)('div', {
                                        className: d.flag,
                                        'aria-hidden': !0,
                                        children: (0, i.jsx)('img', {
                                            alt: '',
                                            src: s,
                                            className: d.flagImage
                                        })
                                    })
                                ]
                            })
                        }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var i = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, i);
                              }
                              return n;
                          })(Object(r)).forEach(function (e) {
                              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
                          }),
                    t
                );
            })
        ),
        g = r.useCallback((e) => {
            let { value: t } = e;
            m(t), u.nextTick(() => a.ZP.updateLocale(t));
        }, []);
    return (0, i.jsx)(l.hjN, {
        tag: l.RB0.H1,
        title: c.intl.string(c.t.IHMsPj),
        children: (0, i.jsx)(l.hjN, {
            children: (0, i.jsx)(l.xJW, {
                title: c.intl.string(c.t['mx+sp6']),
                children: (0, i.jsx)(l.FXm, {
                    onChange: g,
                    options: p,
                    value: t
                })
            })
        })
    });
}
