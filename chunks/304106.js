n.d(t, { Z: () => p });
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    s = n(481060),
    o = n(55935),
    d = n(981631),
    c = n(388032),
    u = n(25671);
let h = (e) => {
        let { IconComponent: t, className: n } = e;
        return (0, i.jsx)('div', {
            className: a()(u.iconCircle, n),
            children: (0, i.jsx)(t, {
                className: u.icon,
                color: 'currentColor'
            })
        });
    },
    m = (e) => {
        let { circle: t, smallHeader: n, text: l, className: r } = e;
        return (0, i.jsxs)('div', {
            className: a()(u.recommendationReason, r),
            children: [
                t,
                (0, i.jsxs)('div', {
                    className: u.description,
                    children: [
                        null != n
                            ? (0, i.jsx)('div', {
                                  className: u.smallHeader,
                                  children: n
                              })
                            : null,
                        (0, i.jsx)('div', {
                            className: u.text,
                            children: l
                        })
                    ]
                })
            ]
        });
    };
class p extends l.Component {
    render() {
        let { reason: e, className: t } = this.props;
        return e.type === d.AzA.RECENT_RELEASE_DATE
            ? (0, i.jsx)(m, {
                  className: t,
                  circle: (0, i.jsx)(h, { IconComponent: s.Que }),
                  smallHeader: c.intl.string(c.t.u81aYW),
                  text: (0, o.vc)(e.releaseDate, 'LL')
              })
            : e.type === d.AzA.RELEASE_DATE
              ? (0, i.jsx)(m, {
                    className: t,
                    circle: (0, i.jsx)(h, { IconComponent: s.Que }),
                    smallHeader: c.intl.string(c.t.qpwaNT),
                    text: (0, o.vc)(e.releaseDate, 'LL')
                })
              : e.type === d.AzA.EARLY_ACCESS
                ? null != e.releaseDate
                    ? (0, i.jsx)(m, {
                          className: t,
                          circle: (0, i.jsx)(h, {
                              IconComponent: s.d$P,
                              className: u.earlyAccess
                          }),
                          smallHeader: c.intl.string(c.t.HYys0t),
                          text: (0, o.vc)(e.releaseDate, 'LL')
                      })
                    : (0, i.jsx)(m, {
                          className: t,
                          circle: (0, i.jsx)(h, {
                              IconComponent: s.d$P,
                              className: u.earlyAccess
                          }),
                          text: c.intl.string(c.t.HYys0t)
                      })
                : e.type === d.AzA.FLAVOR_TEXT
                  ? (0, i.jsx)(m, {
                        circle: (0, i.jsx)(h, { IconComponent: s.dz2 }),
                        text: e.flavorText,
                        className: t
                    })
                  : e.type === d.AzA.HAS_FREE_PREMIUM_CONTENT
                    ? (0, i.jsx)(m, {
                          className: t,
                          circle: (0, i.jsx)(h, {
                              IconComponent: s.SrA,
                              className: u.premiumCircle
                          }),
                          text: c.intl.string(c.t.R9SwVl)
                      })
                    : null;
    }
}
