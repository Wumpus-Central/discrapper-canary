n.d(t, { Z: () => j });
var r = n(200651),
    i = n(608787),
    s = n(793030),
    a = n(442837),
    l = n(481060),
    o = n(607070),
    c = n(522474),
    d = n(788983),
    u = n(668826),
    m = n(120421),
    g = n(324815),
    p = n(763283),
    h = n(981631),
    f = n(622802),
    b = n(388032),
    N = n(753514),
    x = n(450890),
    _ = n(145133);
let E = (0, i.Un)({
    createPromise: () => Promise.all([n.e('3589'), n.e('67544')]).then(n.bind(n, 894308)),
    webpackId: 894308,
    name: 'ClickerGamePopoutWindow'
});
function j() {
    let e = (0, a.e7)([m.Z], () => m.Z.lifetimePoints > 0),
        t = (0, a.e7)([c.Z], () => c.Z.getWindowOpen(h.KJ3.CLICKER_GAME)),
        i = () => {
            d.bA(h.KJ3.CLICKER_GAME, (e) => (0, r.jsx)(E, { windowKey: e }), {
                defaultWidth: 854,
                defaultHeight: 768
            });
        },
        j = () => {
            o.Z.useReducedMotion
                ? (0, l.ZDy)(async () => {
                      let { ConfirmModal: e } = await Promise.resolve().then(n.bind(n, 481060));
                      return (t) => {
                          var n, a;
                          return (0, r.jsx)(
                              e,
                              ((n = (function (e) {
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
                              })({}, t)),
                              (a = a =
                                  {
                                      header: b.NW.string(f.Z.SvQ1xM),
                                      confirmText: b.NW.string(f.Z.vLz9lJ),
                                      cancelText: b.NW.string(f.Z['+Mgv5O']),
                                      onConfirm: i,
                                      confirmButtonColor: l.zxk.Colors.GREEN,
                                      children: (0, r.jsx)(s.xv, {
                                          variant: 'text-md/normal',
                                          children: b.NW.string(f.Z['v6v/BQ'])
                                      })
                                  }),
                              Object.getOwnPropertyDescriptors
                                  ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(a))
                                  : (function (e, t) {
                                        var n = Object.keys(e);
                                        if (Object.getOwnPropertySymbols) {
                                            var r = Object.getOwnPropertySymbols(e);
                                            n.push.apply(n, r);
                                        }
                                        return n;
                                    })(Object(a)).forEach(function (e) {
                                        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(a, e));
                                    }),
                              n)
                          );
                      };
                  })
                : i();
        };
    return (0, r.jsxs)('div', {
        className: N.container,
        children: [
            (0, r.jsx)('div', { className: N.backgroundOverlay }),
            (0, r.jsxs)('div', {
                className: N.mainContent,
                children: [
                    (0, r.jsx)('img', {
                        src: x,
                        alt: b.NW.string(f.Z['7qZdOz'])
                    }),
                    (0, r.jsxs)(g.Z, {
                        muted: !0,
                        className: N.playButton,
                        color: 'white',
                        disabled: t,
                        onClick: j,
                        children: [
                            (0, r.jsx)(p.Z, {
                                color: 'always-white',
                                variant: 'text-lg/bold',
                                children: e ? b.NW.string(f.Z.ziFxys) : b.NW.string(f.Z.vLz9lJ)
                            }),
                            (0, r.jsx)(p.Z, {
                                color: 'always-white',
                                variant: 'text-xxs/medium',
                                children: b.NW.string(f.Z['10J8k5'])
                            })
                        ]
                    }),
                    (0, r.jsx)(g.Z, {
                        muted: !0,
                        className: N.resetButton,
                        color: 'white',
                        disabled: t || !e,
                        onClick: () => {
                            (0, u.yW)(), j();
                        },
                        children: (0, r.jsx)(p.Z, {
                            color: 'always-white',
                            variant: 'text-xs/bold',
                            children: b.NW.string(f.Z['/A+1UF'])
                        })
                    })
                ]
            }),
            (0, r.jsxs)('div', {
                className: N.footer,
                children: [
                    (0, r.jsx)(p.Z, {
                        className: N.availability,
                        color: 'always-white',
                        variant: 'text-xxs/medium',
                        children: b.NW.string(f.Z.eZleys)
                    }),
                    (0, r.jsx)('div', {
                        className: N.footerCenter,
                        children: (0, r.jsx)(g.Z, {
                            muted: !0,
                            color: 'white',
                            href: 'https://www.youtube.com/watch?v=h-9SUgIeJnY',
                            tag: 'a',
                            target: '_blank',
                            children: (0, r.jsx)(p.Z, {
                                color: 'always-white',
                                variant: 'text-xs/bold',
                                children: b.NW.string(f.Z.CQXsEh)
                            })
                        })
                    }),
                    (0, r.jsx)('img', {
                        src: _,
                        alt: b.NW.string(f.Z.ABYTMz)
                    })
                ]
            })
        ]
    });
}
