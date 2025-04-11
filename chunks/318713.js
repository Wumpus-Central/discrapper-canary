r.d(t, { Z: () => d });
var n = r(200651);
r(192379);
var l = r(120356),
    i = r.n(l),
    a = r(481060),
    o = r(55935),
    c = r(543388),
    s = r(223021),
    u = r(388032),
    m = r(848697);
function p(e) {
    var t, r;
    let { tooltipProps: l, timeFormatted: i, children: a, compact: o, timestamp: c, id: s } = e;
    return (0, n.jsx)(
        'time',
        ((t = (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {},
                    n = Object.keys(r);
                'function' == typeof Object.getOwnPropertySymbols &&
                    (n = n.concat(
                        Object.getOwnPropertySymbols(r).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable;
                        })
                    )),
                    n.forEach(function (t) {
                        var n;
                        (n = r[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: n,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0
                                  })
                                : (e[t] = n);
                    });
            }
            return e;
        })({}, l)),
        (r = r =
            {
                id: s,
                dateTime: c.toISOString(),
                children:
                    null != a
                        ? a
                        : (0, n.jsxs)(n.Fragment, {
                              children: [
                                  (0, n.jsx)('i', {
                                      className: m.separator,
                                      'aria-hidden': !0,
                                      children: o ? '[' : ' \u2014 '
                                  }),
                                  i,
                                  o &&
                                      (0, n.jsxs)('i', {
                                          className: m.separator,
                                          'aria-hidden': !0,
                                          children: [']', ' ']
                                      })
                              ]
                          })
            }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : (function (e, t) {
                  var r = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      r.push.apply(r, n);
                  }
                  return r;
              })(Object(r)).forEach(function (e) {
                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
              }),
        t)
    );
}
let d = function (e) {
    let { children: t, className: r, compact: l = !1, timestamp: d, timestampFormat: f, isVisibleOnlyOnHover: b = !1, cozyAlt: y = !1, isInline: g = !0, id: O, isEdited: j = !1, application: v, tooltipPosition: h } = e,
        x = new Date(d),
        P = (0, o.Hg)(x),
        S = null != f ? (0, o.vc)(x, f) : l ? (0, o.vc)(x, 'LT') : (0, o.Y4)(x, !0),
        N = l ? (0, s.Z)(S) : null,
        w = j ? u.NW.formatToPlainString(u.t.CDzOFR, { timeFormatted: P }) : P;
    return (0, n.jsx)('span', {
        className: i()(r, N, {
            [m.timestamp]: !0,
            [m.timestampVisibleOnHover]: b,
            [m.timestampInline]: g,
            [m.alt]: y
        }),
        children:
            null == v
                ? (0, n.jsx)(a.ua7, {
                      text: (0, o.vc)(x, 'LLLL'),
                      'aria-label': w,
                      tooltipClassName: m.timestampTooltip,
                      position: h,
                      delay: 750,
                      children: (e) =>
                          (0, n.jsx)(p, {
                              tooltipProps: e,
                              timeFormatted: S,
                              timestamp: x,
                              id: O,
                              compact: l,
                              children: t
                          })
                  })
                : (0, n.jsx)(c.Z, {
                      application: v,
                      timestamp: x,
                      compact: l,
                      children: (0, n.jsx)(p, {
                          timeFormatted: S,
                          timestamp: x,
                          id: O,
                          compact: l,
                          children: t
                      })
                  })
    });
};
