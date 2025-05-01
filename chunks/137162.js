n.d(t, { E: () => p }), n(953529);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(481060),
    l = n(562558),
    c = n(464647),
    u = n(723776),
    d = n(248217);
function f(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function _(e) {
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
                f(e, t, n[t]);
            });
    }
    return e;
}
function p(e) {
    let { profile: t, className: n } = e,
        { gamesToDisplay: o, lastGameToDisplay: f, remainingGames: p } = (0, l.Z)(t),
        h = i.useMemo(() => t.traits.map((e, t) => _({ key: 'trait-'.concat(t) }, e)).filter((e) => e.label.length > 0), [t]),
        m = t.description.length > 0;
    return m || o.length > 0 || h.length > 0
        ? (0, r.jsxs)('div', {
              className: a()(d.body, n),
              children: [
                  m
                      ? (0, r.jsx)(s.Text, {
                            variant: 'text-sm/normal',
                            color: 'text-secondary',
                            children: t.description
                        })
                      : null,
                  (0, r.jsx)(c.Z, {
                      gamesToDisplay: o,
                      lastGameToDisplay: f,
                      remainingGames: p,
                      activity: t.gameActivity
                  }),
                  (0, r.jsx)(u.F, { items: h })
              ]
          })
        : null;
}
