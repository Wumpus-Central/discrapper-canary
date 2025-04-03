n.d(t, { Z: () => p });
var r = n(200651);
n(192379);
var l = n(120356),
    o = n.n(l),
    i = n(481060),
    a = n(55935),
    s = n(543388),
    c = n(223021),
    u = n(388032),
    d = n(848697);
function m(e) {
    var t, n;
    let { tooltipProps: l, timeFormatted: o, children: i, compact: a, timestamp: s, id: c } = e;
    return (0, r.jsx)(
        'time',
        ((t = (function (e) {
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
        })({}, l)),
        (n = n =
            {
                id: c,
                dateTime: s.toISOString(),
                children:
                    null != i
                        ? i
                        : (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)('i', {
                                      className: d.separator,
                                      'aria-hidden': !0,
                                      children: a ? '[' : ' \u2014 '
                                  }),
                                  o,
                                  a &&
                                      (0, r.jsxs)('i', {
                                          className: d.separator,
                                          'aria-hidden': !0,
                                          children: [']', ' ']
                                      })
                              ]
                          })
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
        t)
    );
}
let p = function (e) {
    let { children: t, className: n, compact: l = !1, timestamp: p, isVisibleOnlyOnHover: f = !1, cozyAlt: g = !1, isInline: b = !0, id: y, isEdited: O = !1, application: v, tooltipPosition: h } = e,
        j = new Date(p),
        x = (0, a.Hg)(j),
        S = l ? (0, a.vc)(j, 'LT') : (0, a.Y4)(j, !0),
        P = l ? (0, c.Z)(S) : null,
        N = O ? u.NW.formatToPlainString(u.t.CDzOFR, { timeFormatted: x }) : x;
    return (0, r.jsx)('span', {
        className: o()(n, P, {
            [d.timestamp]: !0,
            [d.timestampVisibleOnHover]: f,
            [d.timestampInline]: b,
            [d.alt]: g
        }),
        children:
            null == v
                ? (0, r.jsx)(i.ua7, {
                      text: (0, a.vc)(j, 'LLLL'),
                      'aria-label': N,
                      tooltipClassName: d.timestampTooltip,
                      position: h,
                      delay: 750,
                      children: (e) =>
                          (0, r.jsx)(m, {
                              tooltipProps: e,
                              timeFormatted: S,
                              timestamp: j,
                              id: y,
                              compact: l,
                              children: t
                          })
                  })
                : (0, r.jsx)(s.Z, {
                      application: v,
                      timestamp: j,
                      compact: l,
                      children: (0, r.jsx)(m, {
                          timeFormatted: S,
                          timestamp: j,
                          id: y,
                          compact: l,
                          children: t
                      })
                  })
    });
};
