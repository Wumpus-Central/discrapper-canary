var i = r(200651);
r(192379);
var a = r(120356),
    o = r.n(a),
    s = r(481060),
    l = r(55935),
    u = r(543388),
    c = r(223021),
    d = r(388032),
    f = r(507304);
function p(e) {
    return new Date(e);
}
function h(e) {
    let { children: n, className: r, compact: a = !1, timestamp: h, isVisibleOnlyOnHover: m = !1, cozyAlt: g = !1, isInline: E = !0, id: v, isEdited: y = !1, application: b } = e,
        I = p(h),
        T = (0, l.Hg)(I),
        S = a ? (0, l.vc)(I, 'LT') : (0, l.Y4)(I),
        A = a ? (0, c.Z)(S) : null,
        C = y ? d.intl.formatToPlainString(d.t.CDzOFR, { timeFormatted: T }) : T;
    return (0, i.jsx)('span', {
        className: o()(r, A, {
            [f.timestamp]: !0,
            [f.timestampVisibleOnHover]: m,
            [f.timestampInline]: E,
            [f.alt]: g
        }),
        children:
            null == b
                ? (0, i.jsx)(s.Tooltip, {
                      text: (0, l.vc)(I, 'LLLL'),
                      'aria-label': C,
                      tooltipClassName: f.timestampTooltip,
                      delay: 750,
                      children: (e) =>
                          (0, i.jsx)(_, {
                              tooltipProps: e,
                              timeFormatted: S,
                              timestamp: I,
                              id: v,
                              compact: a,
                              children: n
                          })
                  })
                : (0, i.jsx)(u.Z, {
                      application: b,
                      timestamp: I,
                      compact: a,
                      children: (0, i.jsx)(_, {
                          timeFormatted: S,
                          timestamp: I,
                          id: v,
                          compact: a,
                          children: n
                      })
                  })
    });
}
function _(e) {
    let { tooltipProps: n, timeFormatted: r, children: a, compact: o, timestamp: s, id: l } = e;
    return (0, i.jsx)('time', {
        ...n,
        id: l,
        dateTime: s.toISOString(),
        children:
            null != a
                ? a
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)('i', {
                              className: f.separator,
                              'aria-hidden': !0,
                              children: o ? '[' : ' \u2014 '
                          }),
                          r,
                          o &&
                              (0, i.jsxs)('i', {
                                  className: f.separator,
                                  'aria-hidden': !0,
                                  children: [']', ' ']
                              })
                      ]
                  })
    });
}
n.Z = h;
