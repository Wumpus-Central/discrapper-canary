n.d(t, { Z: () => E });
var i = n(255367),
    r = n(608787),
    s = n(793030),
    a = n(442837),
    l = n(755721),
    o = n(481060),
    c = n(607070),
    d = n(522474),
    u = n(788983),
    m = n(668826),
    p = n(120421),
    g = n(324815),
    h = n(763283),
    f = n(981631),
    b = n(603571),
    x = n(388032),
    _ = n(753514),
    j = n(450890),
    C = n(145133);
let O = (0, r.Un)({
    createPromise: () => n.e('67544').then(n.bind(n, 894308)),
    webpackId: 894308,
    name: 'ClickerGamePopoutWindow'
});
function E() {
    let e = (0, a.e7)([p.Z], () => p.Z.lifetimePoints > 0),
        t = (0, a.e7)([d.Z], () => d.Z.getWindowOpen(f.KJ3.CLICKER_GAME)),
        r = () => {
            u.bA(f.KJ3.CLICKER_GAME, (e) => (0, i.jsx)(O, { windowKey: e }), {
                defaultWidth: 854,
                defaultHeight: 768
            });
        },
        E = () => {
            c.Z.useReducedMotion
                ? (0, o.ZDy)(async () => {
                      let { ConfirmModal: e } = await Promise.resolve().then(n.bind(n, 481060));
                      return (t) => {
                          var n, a;
                          return (0, i.jsx)(
                              e,
                              ((n = (function (e) {
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
                              })({}, t)),
                              (a = a =
                                  {
                                      header: x.intl.string(b.default.SvQ1xM),
                                      confirmText: x.intl.string(b.default.vLz9lJ),
                                      cancelText: x.intl.string(b.default['+Mgv5O']),
                                      onConfirm: r,
                                      confirmButtonColor: l.zx.Colors.GREEN,
                                      children: (0, i.jsx)(s.xv, {
                                          variant: 'text-md/normal',
                                          children: x.intl.string(b.default['v6v/BQ'])
                                      })
                                  }),
                              Object.getOwnPropertyDescriptors
                                  ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(a))
                                  : (function (e, t) {
                                        var n = Object.keys(e);
                                        if (Object.getOwnPropertySymbols) {
                                            var i = Object.getOwnPropertySymbols(e);
                                            n.push.apply(n, i);
                                        }
                                        return n;
                                    })(Object(a)).forEach(function (e) {
                                        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(a, e));
                                    }),
                              n)
                          );
                      };
                  })
                : r();
        };
    return (0, i.jsxs)('div', {
        className: _.container,
        children: [
            (0, i.jsx)('div', { className: _.backgroundOverlay }),
            (0, i.jsxs)('div', {
                className: _.mainContent,
                children: [
                    (0, i.jsx)('img', {
                        src: j,
                        alt: x.intl.string(b.default['7qZdOz'])
                    }),
                    (0, i.jsxs)(g.Z, {
                        muted: !0,
                        className: _.playButton,
                        color: 'white',
                        disabled: t,
                        onClick: E,
                        children: [
                            (0, i.jsx)(h.Z, {
                                color: 'always-white',
                                variant: 'text-lg/bold',
                                children: e ? x.intl.string(b.default.ziFxys) : x.intl.string(b.default.vLz9lJ)
                            }),
                            (0, i.jsx)(h.Z, {
                                color: 'always-white',
                                variant: 'text-xxs/medium',
                                children: x.intl.string(b.default['10J8k5'])
                            })
                        ]
                    }),
                    (0, i.jsx)(g.Z, {
                        muted: !0,
                        className: _.resetButton,
                        color: 'white',
                        disabled: t || !e,
                        onClick: () => {
                            ((0, m.yW)(), E());
                        },
                        children: (0, i.jsx)(h.Z, {
                            color: 'always-white',
                            variant: 'text-xs/bold',
                            children: x.intl.string(b.default['/A+1UF'])
                        })
                    })
                ]
            }),
            (0, i.jsxs)('div', {
                className: _.footer,
                children: [
                    (0, i.jsx)(h.Z, {
                        className: _.availability,
                        color: 'always-white',
                        variant: 'text-xxs/medium',
                        children: x.intl.string(b.default.eZleys)
                    }),
                    (0, i.jsx)('div', {
                        className: _.footerCenter,
                        children: (0, i.jsx)(g.Z, {
                            muted: !0,
                            color: 'white',
                            href: 'https://www.youtube.com/watch?v=h-9SUgIeJnY',
                            tag: 'a',
                            target: '_blank',
                            children: (0, i.jsx)(h.Z, {
                                color: 'always-white',
                                variant: 'text-xs/bold',
                                children: x.intl.string(b.default.CQXsEh)
                            })
                        })
                    }),
                    (0, i.jsx)('img', {
                        src: C,
                        alt: x.intl.string(b.default.ABYTMz)
                    })
                ]
            })
        ]
    });
}
