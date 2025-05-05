n.d(t, { Z: () => h }), n(35282), n(388685);
var r = n(255367),
    i = n(73800),
    l = n(873546),
    a = n(481060),
    o = n(358085),
    s = n(289341),
    c = n(981631),
    u = n(186901),
    d = n(388032),
    p = n(278812);
function h(e) {
    let { applicationId: t } = e.match.params,
        [h, f] = i.useState(!1),
        g = i.useRef(!1),
        [m, b] = i.useState(null),
        _ = !o.isPlatformEmbedded && !l.tq && !h;
    return (i.useEffect(() => {
        _ &&
            !0 !== g.current &&
            (Promise.resolve()
                .then(n.bind(n, 536285))
                .then((e) => {
                    let { default: n } = e;
                    n.request(c.Etm.DEEP_LINK, {
                        type: u.jE.ACTIVITIES,
                        params: {
                            applicationId: t,
                            url: location.href
                        }
                    })
                        .then((e) => {
                            b(null != e && e);
                        })
                        .catch(() => b(!1))
                        .then(() => n.disconnect());
                }),
            (g.current = !0));
    }, [t, _]),
    _ && !1 !== m)
        ? !0 === m
            ? (0, r.jsxs)('div', {
                  className: p.container,
                  children: [
                      (0, r.jsx)(a.X6q, {
                          variant: 'heading-xxl/bold',
                          children: d.intl.string(d.t.csrAMD)
                      }),
                      (0, r.jsx)(a.Text, {
                          variant: 'text-xs/semibold',
                          children: d.intl.string(d.t['m1+IBg'])
                      }),
                      (0, r.jsx)(a.zxk, {
                          onClick: () => f(!0),
                          color: a.zxk.Colors.BRAND,
                          children: d.intl.string(d.t.fIv16O)
                      })
                  ]
              })
            : (0, r.jsxs)('div', {
                  className: p.container,
                  children: [
                      (0, r.jsx)(a.X6q, {
                          variant: 'heading-xxl/bold',
                          children: d.intl.string(d.t['Z+hCVV'])
                      }),
                      (0, r.jsx)(a.$jN, {})
                  ]
              })
        : (0, r.jsx)(
              s.Z,
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
              })({}, e)
          );
}
