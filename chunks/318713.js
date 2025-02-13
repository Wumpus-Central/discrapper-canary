i.d(t, { Z: () => p });
var n = i(200651);
i(192379);
var a = i(120356),
    l = i.n(a),
    r = i(481060),
    s = i(55935),
    o = i(543388),
    c = i(223021),
    u = i(388032),
    m = i(732175);
function d(e) {
    let { tooltipProps: t, timeFormatted: i, children: a, compact: l, timestamp: r, id: s } = e;
    return (0, n.jsx)('time', {
        ...t,
        id: s,
        dateTime: r.toISOString(),
        children:
            null != a
                ? a
                : (0, n.jsxs)(n.Fragment, {
                      children: [
                          (0, n.jsx)('i', {
                              className: m.separator,
                              'aria-hidden': !0,
                              children: l ? '[' : ' \u2014 '
                          }),
                          i,
                          l &&
                              (0, n.jsxs)('i', {
                                  className: m.separator,
                                  'aria-hidden': !0,
                                  children: [']', ' ']
                              })
                      ]
                  })
    });
}
let p = function (e) {
    let { children: t, className: i, compact: a = !1, timestamp: p, isVisibleOnlyOnHover: x = !1, cozyAlt: h = !1, isInline: g = !0, id: f, isEdited: N = !1, application: S } = e,
        T = new Date(p),
        v = (0, s.Hg)(T),
        R = a ? (0, s.vc)(T, 'LT') : (0, s.Y4)(T),
        j = a ? (0, c.Z)(R) : null,
        A = N ? u.intl.formatToPlainString(u.t.CDzOFR, { timeFormatted: v }) : v;
    return (0, n.jsx)('span', {
        className: l()(i, j, {
            [m.timestamp]: !0,
            [m.timestampVisibleOnHover]: x,
            [m.timestampInline]: g,
            [m.alt]: h
        }),
        children:
            null == S
                ? (0, n.jsx)(r.ua7, {
                      text: (0, s.vc)(T, 'LLLL'),
                      'aria-label': A,
                      tooltipClassName: m.timestampTooltip,
                      delay: 750,
                      children: (e) =>
                          (0, n.jsx)(d, {
                              tooltipProps: e,
                              timeFormatted: R,
                              timestamp: T,
                              id: f,
                              compact: a,
                              children: t
                          })
                  })
                : (0, n.jsx)(o.Z, {
                      application: S,
                      timestamp: T,
                      compact: a,
                      children: (0, n.jsx)(d, {
                          timeFormatted: R,
                          timestamp: T,
                          id: f,
                          compact: a,
                          children: t
                      })
                  })
    });
};
