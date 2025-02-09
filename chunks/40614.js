n.d(t, { V: () => g });
var i = n(200651),
    l = n(481060),
    r = n(230711),
    a = n(100527),
    o = n(906732),
    s = n(667105),
    c = n(695346),
    d = n(316496),
    u = n(981631),
    h = n(46140),
    p = n(388032),
    m = n(737556);
let g = (e) => {
    let { onClick: t } = e,
        { analyticsLocations: n } = (0, o.ZP)(a.Z.NOT_SHARING_LINK),
        { rtcPopoutEnabled: g } = (0, d.S)('not sharing link'),
        f = c.G6.useSetting(),
        _ = (0, s.Ws)({ location: h.dr.CONFLICT_CHECKS });
    return !g || f
        ? null
        : (0, i.jsxs)(l.P3F, {
              onClick: () => {
                  _ ? t() : r.Z.open(u.oAB.ACTIVITY_PRIVACY, null, { analyticsLocations: n });
              },
              className: m.container,
              children: [
                  (0, i.jsx)(l.Text, {
                      variant: 'text-xs/medium',
                      className: m.text,
                      children: p.intl.string(p.t.jfrLLS)
                  }),
                  (0, i.jsx)(l.Fbu, { size: 'xxs' })
              ]
          });
};
