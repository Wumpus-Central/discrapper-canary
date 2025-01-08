var i = r(200651);
r(192379);
var a = r(120356),
    s = r.n(a),
    o = r(481060),
    l = r(55935),
    u = r(543388),
    c = r(223021),
    d = r(388032),
    f = r(507304);
function _(e) {
    return new Date(e);
}
function h(e) {
    let { children: n, className: r, compact: a = !1, timestamp: h, isVisibleOnlyOnHover: m = !1, cozyAlt: g = !1, isInline: E = !0, id: v, isEdited: I = !1, application: T } = e,
        b = _(h),
        y = (0, l.Hg)(b),
        S = a ? (0, l.vc)(b, 'LT') : (0, l.Y4)(b),
        A = a ? (0, c.Z)(S) : null,
        N = I ? d.intl.formatToPlainString(d.t.CDzOFR, { timeFormatted: y }) : y;
    return (0, i.jsx)('span', {
        className: s()(r, A, {
            [f.timestamp]: !0,
            [f.timestampVisibleOnHover]: m,
            [f.timestampInline]: E,
            [f.alt]: g
        }),
        children:
            null == T
                ? (0, i.jsx)(o.Tooltip, {
                      text: (0, l.vc)(b, 'LLLL'),
                      'aria-label': N,
                      tooltipClassName: f.timestampTooltip,
                      delay: 750,
                      children: (e) =>
                          (0, i.jsx)(p, {
                              tooltipProps: e,
                              timeFormatted: S,
                              timestamp: b,
                              id: v,
                              compact: a,
                              children: n
                          })
                  })
                : (0, i.jsx)(u.Z, {
                      application: T,
                      timestamp: b,
                      compact: a,
                      children: (0, i.jsx)(p, {
                          timeFormatted: S,
                          timestamp: b,
                          id: v,
                          compact: a,
                          children: n
                      })
                  })
    });
}
function p(e) {
    let { tooltipProps: n, timeFormatted: r, children: a, compact: s, timestamp: o, id: l } = e;
    return (0, i.jsx)('time', {
        ...n,
        id: l,
        dateTime: o.toISOString(),
        children:
            null != a
                ? a
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)('i', {
                              className: f.separator,
                              'aria-hidden': !0,
                              children: s ? '[' : ' \u2014 '
                          }),
                          r,
                          s &&
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
