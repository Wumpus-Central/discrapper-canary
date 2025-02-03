n.d(t, { Z: () => p });
var i = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    s = n(481060),
    o = n(55935),
    l = n(543388),
    u = n(223021),
    c = n(388032),
    d = n(507304);
function f(e) {
    return new Date(e);
}
function _(e) {
    let { tooltipProps: t, timeFormatted: n, children: r, compact: a, timestamp: s, id: o } = e;
    return (0, i.jsx)('time', {
        ...t,
        id: o,
        dateTime: s.toISOString(),
        children:
            null != r
                ? r
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)('i', {
                              className: d.separator,
                              'aria-hidden': !0,
                              children: a ? '[' : ' \u2014 '
                          }),
                          n,
                          a &&
                              (0, i.jsxs)('i', {
                                  className: d.separator,
                                  'aria-hidden': !0,
                                  children: [']', ' ']
                              })
                      ]
                  })
    });
}
let p = function (e) {
    let { children: t, className: n, compact: r = !1, timestamp: p, isVisibleOnlyOnHover: h = !1, cozyAlt: m = !1, isInline: g = !0, id: E, isEdited: v = !1, application: y } = e,
        I = f(p),
        b = (0, o.Hg)(I),
        T = r ? (0, o.vc)(I, 'LT') : (0, o.Y4)(I),
        S = r ? (0, u.Z)(T) : null,
        A = v ? c.intl.formatToPlainString(c.t.CDzOFR, { timeFormatted: b }) : b;
    return (0, i.jsx)('span', {
        className: a()(n, S, {
            [d.timestamp]: !0,
            [d.timestampVisibleOnHover]: h,
            [d.timestampInline]: g,
            [d.alt]: m
        }),
        children:
            null == y
                ? (0, i.jsx)(s.ua7, {
                      text: (0, o.vc)(I, 'LLLL'),
                      'aria-label': A,
                      tooltipClassName: d.timestampTooltip,
                      delay: 750,
                      children: (e) =>
                          (0, i.jsx)(_, {
                              tooltipProps: e,
                              timeFormatted: T,
                              timestamp: I,
                              id: E,
                              compact: r,
                              children: t
                          })
                  })
                : (0, i.jsx)(l.Z, {
                      application: y,
                      timestamp: I,
                      compact: r,
                      children: (0, i.jsx)(_, {
                          timeFormatted: T,
                          timestamp: I,
                          id: E,
                          compact: r,
                          children: t
                      })
                  })
    });
};
