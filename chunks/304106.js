n.d(t, { Z: () => g }), n(266796);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(481060),
    s = n(55935),
    c = n(981631),
    u = n(388032),
    d = n(330910);
let p = (e) => {
        let { IconComponent: t, className: n } = e;
        return (0, r.jsx)('div', {
            className: o()(d.iconCircle, n),
            children: (0, r.jsx)(t, {
                className: d.icon,
                color: 'currentColor'
            })
        });
    },
    h = (e) => {
        let { circle: t, smallHeader: n, text: i, className: l } = e;
        return (0, r.jsxs)('div', {
            className: o()(d.recommendationReason, l),
            children: [
                t,
                (0, r.jsxs)('div', {
                    className: d.description,
                    children: [
                        null != n
                            ? (0, r.jsx)('div', {
                                  className: d.smallHeader,
                                  children: n
                              })
                            : null,
                        (0, r.jsx)('div', {
                            className: d.text,
                            children: i
                        })
                    ]
                })
            ]
        });
    };
class g extends i.Component {
    render() {
        let { reason: e, className: t } = this.props;
        return e.type === c.AzA.RECENT_RELEASE_DATE
            ? (0, r.jsx)(h, {
                  className: t,
                  circle: (0, r.jsx)(p, { IconComponent: a.Que }),
                  smallHeader: u.NW.string(u.t.u81aYW),
                  text: (0, s.vc)(e.releaseDate, 'LL')
              })
            : e.type === c.AzA.RELEASE_DATE
              ? (0, r.jsx)(h, {
                    className: t,
                    circle: (0, r.jsx)(p, { IconComponent: a.Que }),
                    smallHeader: u.NW.string(u.t.qpwaNT),
                    text: (0, s.vc)(e.releaseDate, 'LL')
                })
              : e.type === c.AzA.EARLY_ACCESS
                ? null != e.releaseDate
                    ? (0, r.jsx)(h, {
                          className: t,
                          circle: (0, r.jsx)(p, {
                              IconComponent: a.d$P,
                              className: d.earlyAccess
                          }),
                          smallHeader: u.NW.string(u.t.HYys0t),
                          text: (0, s.vc)(e.releaseDate, 'LL')
                      })
                    : (0, r.jsx)(h, {
                          className: t,
                          circle: (0, r.jsx)(p, {
                              IconComponent: a.d$P,
                              className: d.earlyAccess
                          }),
                          text: u.NW.string(u.t.HYys0t)
                      })
                : e.type === c.AzA.FLAVOR_TEXT
                  ? (0, r.jsx)(h, {
                        circle: (0, r.jsx)(p, { IconComponent: a.dz2 }),
                        text: e.flavorText,
                        className: t
                    })
                  : e.type === c.AzA.HAS_FREE_PREMIUM_CONTENT
                    ? (0, r.jsx)(h, {
                          className: t,
                          circle: (0, r.jsx)(p, {
                              IconComponent: a.SrA,
                              className: d.premiumCircle
                          }),
                          text: u.NW.string(u.t.R9SwVl)
                      })
                    : null;
    }
}
