n.d(t, { Z: () => j });
var i = n(200651),
    r = n(608787),
    s = n(793030),
    l = n(442837),
    a = n(481060),
    o = n(607070),
    c = n(522474),
    d = n(788983),
    u = n(668826),
    m = n(120421),
    p = n(324815),
    g = n(763283),
    h = n(981631),
    f = n(622802),
    b = n(388032),
    _ = n(753514),
    x = n(450890),
    E = n(145133);
let C = (0, r.Un)({
    createPromise: () => Promise.all([n.e('3589'), n.e('67544')]).then(n.bind(n, 894308)),
    webpackId: 894308,
    name: 'ClickerGamePopoutWindow'
});
function j() {
    let e = (0, l.e7)([m.Z], () => m.Z.lifetimePoints > 0),
        t = (0, l.e7)([c.Z], () => c.Z.getWindowOpen(h.KJ3.CLICKER_GAME)),
        r = () => {
            d.bA(h.KJ3.CLICKER_GAME, (e) => (0, i.jsx)(C, { windowKey: e }), {
                defaultWidth: 854,
                defaultHeight: 768
            });
        },
        j = () => {
            o.Z.useReducedMotion
                ? (0, a.ZDy)(async () => {
                      let { ConfirmModal: e } = await Promise.resolve().then(n.bind(n, 481060));
                      return (t) => {
                          var n, l;
                          return (0, i.jsx)(
                              e,
                              ((n = (function (e) {
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
                              })({}, t)),
                              (l = l =
                                  {
                                      header: b.intl.string(f.default.SvQ1xM),
                                      confirmText: b.intl.string(f.default.vLz9lJ),
                                      cancelText: b.intl.string(f.default['+Mgv5O']),
                                      onConfirm: r,
                                      confirmButtonColor: a.zxk.Colors.GREEN,
                                      children: (0, i.jsx)(s.xv, {
                                          variant: 'text-md/normal',
                                          children: b.intl.string(f.default['v6v/BQ'])
                                      })
                                  }),
                              Object.getOwnPropertyDescriptors
                                  ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(l))
                                  : (function (e, t) {
                                        var n = Object.keys(e);
                                        if (Object.getOwnPropertySymbols) {
                                            var i = Object.getOwnPropertySymbols(e);
                                            n.push.apply(n, i);
                                        }
                                        return n;
                                    })(Object(l)).forEach(function (e) {
                                        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(l, e));
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
                        src: x,
                        alt: b.intl.string(f.default['7qZdOz'])
                    }),
                    (0, i.jsxs)(p.Z, {
                        muted: !0,
                        className: _.playButton,
                        color: 'white',
                        disabled: t,
                        onClick: j,
                        children: [
                            (0, i.jsx)(g.Z, {
                                color: 'always-white',
                                variant: 'text-lg/bold',
                                children: e ? b.intl.string(f.default.ziFxys) : b.intl.string(f.default.vLz9lJ)
                            }),
                            (0, i.jsx)(g.Z, {
                                color: 'always-white',
                                variant: 'text-xxs/medium',
                                children: b.intl.string(f.default['10J8k5'])
                            })
                        ]
                    }),
                    (0, i.jsx)(p.Z, {
                        muted: !0,
                        className: _.resetButton,
                        color: 'white',
                        disabled: t || !e,
                        onClick: () => {
                            (0, u.yW)(), j();
                        },
                        children: (0, i.jsx)(g.Z, {
                            color: 'always-white',
                            variant: 'text-xs/bold',
                            children: b.intl.string(f.default['/A+1UF'])
                        })
                    })
                ]
            }),
            (0, i.jsxs)('div', {
                className: _.footer,
                children: [
                    (0, i.jsx)(g.Z, {
                        className: _.availability,
                        color: 'always-white',
                        variant: 'text-xxs/medium',
                        children: b.intl.string(f.default.eZleys)
                    }),
                    (0, i.jsx)('div', {
                        className: _.footerCenter,
                        children: (0, i.jsx)(p.Z, {
                            muted: !0,
                            color: 'white',
                            href: 'https://www.youtube.com/watch?v=h-9SUgIeJnY',
                            tag: 'a',
                            target: '_blank',
                            children: (0, i.jsx)(g.Z, {
                                color: 'always-white',
                                variant: 'text-xs/bold',
                                children: b.intl.string(f.default.CQXsEh)
                            })
                        })
                    }),
                    (0, i.jsx)('img', {
                        src: E,
                        alt: b.intl.string(f.default.ABYTMz)
                    })
                ]
            })
        ]
    });
}
