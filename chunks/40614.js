n.d(t, { V: () => g });
var r = n(200651),
    i = n(481060),
    l = n(230711),
    o = n(100527),
    a = n(906732),
    s = n(667105),
    c = n(695346),
    u = n(316496),
    d = n(981631),
    p = n(46140),
    h = n(388032),
    f = n(675277);
let g = (e) => {
    let { onClick: t } = e,
        { analyticsLocations: n } = (0, a.ZP)(o.Z.NOT_SHARING_LINK),
        { rtcPopoutEnabled: g } = (0, u.S)('not sharing link'),
        m = c.G6.useSetting(),
        b = (0, s.Ws)({ location: p.dr.CONFLICT_CHECKS });
    return !g || m
        ? null
        : (0, r.jsx)(i.P3F, {
              onClick: () => {
                  b ? t() : l.Z.open(d.oAB.ACTIVITY_PRIVACY, null, { analyticsLocations: n });
              },
              className: f.container,
              children: (0, r.jsxs)(i.Text, {
                  variant: 'text-xs/medium',
                  className: f.text,
                  color: 'header-secondary',
                  children: [
                      (0, r.jsx)(i.kZF, {
                          size: 'xxs',
                          color: 'currentColor',
                          className: f.iconEye
                      }),
                      h.NW.string(h.t.jfrLLS),
                      (0, r.jsx)(i.Fbu, {
                          size: 'xxs',
                          color: 'currentColor'
                      })
                  ]
              })
          });
};
