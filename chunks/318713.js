r.d(t, { Z: () => d });
var n = r(200651);
r(192379);
var l = r(120356),
    i = r.n(l),
    o = r(481060),
    a = r(55935),
    c = r(543388),
    s = r(223021),
    u = r(388032),
    p = r(848697);
function m(e) {
    var t, r;
    let { tooltipProps: l, timeFormatted: i, children: o, compact: a, timestamp: c, id: s } = e;
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
                    null != o
                        ? o
                        : (0, n.jsxs)(n.Fragment, {
                              children: [
                                  (0, n.jsx)('i', {
                                      className: p.separator,
                                      'aria-hidden': !0,
                                      children: a ? '[' : ' \u2014 '
                                  }),
                                  i,
                                  a &&
                                      (0, n.jsxs)('i', {
                                          className: p.separator,
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
    let { children: t, className: r, compact: l = !1, timestamp: d, timestampFormat: f, isVisibleOnlyOnHover: b = !1, cozyAlt: y = !1, isInline: g = !0, id: O, isEdited: j = !1, application: h, tooltipPosition: v } = e,
        x = new Date(d),
        P = (0, a.Hg)(x),
        S = null != f ? (0, a.vc)(x, f) : l ? (0, a.vc)(x, 'LT') : (0, a.Y4)(x, !0),
        N = l ? (0, s.Z)(S) : null,
        w = j ? u.NW.formatToPlainString(u.t.CDzOFR, { timeFormatted: P }) : P;
    return (0, n.jsx)('span', {
        className: i()(r, N, {
            [p.timestamp]: !0,
            [p.timestampVisibleOnHover]: b,
            [p.timestampInline]: g,
            [p.alt]: y
        }),
        children:
            null == h
                ? (0, n.jsx)(o.ua7, {
                      text: (0, a.vc)(x, 'LLLL'),
                      'aria-label': w,
                      tooltipClassName: p.timestampTooltip,
                      position: v,
                      delay: 750,
                      children: (e) =>
                          (0, n.jsx)(m, {
                              tooltipProps: e,
                              timeFormatted: S,
                              timestamp: x,
                              id: O,
                              compact: l,
                              children: t
                          })
                  })
                : (0, n.jsx)(c.Z, {
                      application: h,
                      timestamp: x,
                      compact: l,
                      children: (0, n.jsx)(m, {
                          timeFormatted: S,
                          timestamp: x,
                          id: O,
                          compact: l,
                          children: t
                      })
                  })
    });
};
