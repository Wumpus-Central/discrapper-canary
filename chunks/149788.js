n.d(t, { Z: () => b });
var r = n(200651),
    i = n(192379),
    l = n(481060),
    a = n(749210),
    o = n(322665),
    s = n(17845),
    c = n(374939),
    u = n(283293),
    d = n(469988),
    p = n(526383),
    h = n(294330),
    f = n(388032),
    g = n(849781),
    m = n(795576);
let b = function (e) {
    let { onScroll: t } = e,
        n = (0, p.Z)(),
        b = i.useMemo(
            () =>
                n.map((e) => {
                    var t, n;
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
                        (n = n =
                            {
                                presenceCount: void 0,
                                memberCount: void 0,
                                premiumSubscriptionCount: void 0,
                                emojis: void 0
                            }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var r = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, r);
                                  }
                                  return n;
                              })(Object(n)).forEach(function (e) {
                                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                              }),
                        t
                    );
                }),
            [n]
        );
    return (0, r.jsxs)(u.Z, {
        onScroll: t,
        children: [
            (0, r.jsx)(s.Z, {
                title: f.NW.string(f.t.X5xPlZ),
                description: f.NW.string(f.t['F/IQCA']),
                children: (0, r.jsx)(o.Z, {})
            }),
            (0, r.jsxs)(c.Z, {
                children: [
                    n.length > 0
                        ? (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)(l.X6q, {
                                      className: g.sectionTitle,
                                      variant: 'heading-lg/semibold',
                                      color: 'header-primary',
                                      children: f.NW.string(f.t['2DfZIS'])
                                  }),
                                  (0, r.jsxs)('div', {
                                      className: g.content,
                                      children: [
                                          b.map((e) =>
                                              (0, r.jsx)(
                                                  h.VD,
                                                  {
                                                      guild: e,
                                                      onClick: () => a.Z.transitionToGuildSync(e.id)
                                                  },
                                                  e.id
                                              )
                                          ),
                                          (0, r.jsx)(d.Z, { hasHub: !0 })
                                      ]
                                  })
                              ]
                          })
                        : (0, r.jsx)('div', {
                              className: g.content,
                              children: (0, r.jsx)(d.Z, { hasHub: !1 })
                          }),
                    (0, r.jsx)('div', { className: m.divider }),
                    (0, r.jsxs)('div', {
                        className: m.disclaimer,
                        children: [
                            (0, r.jsxs)(l.Text, {
                                className: m.text,
                                variant: 'text-sm/medium',
                                color: 'header-secondary',
                                children: [f.NW.string(f.t.O1k9XV), ' ']
                            }),
                            (0, r.jsx)(l.Text, {
                                className: m.text,
                                variant: 'text-sm/medium',
                                color: 'header-secondary',
                                children: f.NW.string(f.t.FV5dvr)
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
