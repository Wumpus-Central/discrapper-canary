r.d(t, { Z: () => d });
var n = r(200651);
r(192379);
var i = r(120356),
    a = r.n(i),
    l = r(481060),
    o = r(55935),
    c = r(543388),
    s = r(223021),
    u = r(388032),
    m = r(456536);
function p(e) {
    var t, r;
    let { tooltipProps: i, timeFormatted: a, children: l, compact: o, timestamp: c, id: s } = e;
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
        })({}, i)),
        (r = r =
            {
                id: s,
                dateTime: c.toISOString(),
                children:
                    null != l
                        ? l
                        : (0, n.jsxs)(n.Fragment, {
                              children: [
                                  (0, n.jsx)('i', {
                                      className: m.separator,
                                      'aria-hidden': !0,
                                      children: o ? '[' : ' \u2014 '
                                  }),
                                  a,
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
    let { children: t, className: r, compact: i = !1, timestamp: d, isVisibleOnlyOnHover: f = !1, cozyAlt: b = !1, isInline: y = !0, id: g, isEdited: O = !1, application: j, tooltipPosition: h } = e,
        x = new Date(d),
        v = (0, o.Hg)(x),
        P = i ? (0, o.vc)(x, 'LT') : (0, o.Y4)(x),
        S = i ? (0, s.Z)(P) : null,
        w = O ? u.NW.formatToPlainString(u.t.CDzOFR, { timeFormatted: v }) : v;
    return (0, n.jsx)('span', {
        className: a()(r, S, {
            [m.timestamp]: !0,
            [m.timestampVisibleOnHover]: f,
            [m.timestampInline]: y,
            [m.alt]: b
        }),
        children:
            null == j
                ? (0, n.jsx)(l.ua7, {
                      text: (0, o.vc)(x, 'LLLL'),
                      'aria-label': w,
                      tooltipClassName: m.timestampTooltip,
                      position: h,
                      delay: 750,
                      children: (e) =>
                          (0, n.jsx)(p, {
                              tooltipProps: e,
                              timeFormatted: P,
                              timestamp: x,
                              id: g,
                              compact: i,
                              children: t
                          })
                  })
                : (0, n.jsx)(c.Z, {
                      application: j,
                      timestamp: x,
                      compact: i,
                      children: (0, n.jsx)(p, {
                          timeFormatted: P,
                          timestamp: x,
                          id: g,
                          compact: i,
                          children: t
                      })
                  })
    });
};
