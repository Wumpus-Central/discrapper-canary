n.d(t, { Z: () => f }), n(266796);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    a = n.n(l),
    o = n(481060),
    s = n(55935),
    c = n(981631),
    u = n(388032),
    d = n(776761);
let p = (e) => {
        let { IconComponent: t, className: n } = e;
        return (0, r.jsx)('div', {
            className: a()(d.iconCircle, n),
            children: (0, r.jsx)(t, {
                className: d.icon,
                color: 'currentColor'
            })
        });
    },
    h = (e) => {
        let { circle: t, smallHeader: n, text: i, className: l } = e;
        return (0, r.jsxs)('div', {
            className: a()(d.recommendationReason, l),
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
class f extends i.Component {
    render() {
        let { reason: e, className: t } = this.props;
        if (e.type === c.AzA.RECENT_RELEASE_DATE)
            return (0, r.jsx)(h, {
                className: t,
                circle: (0, r.jsx)(p, { IconComponent: o.Que }),
                smallHeader: u.NW.string(u.t.u81aYW),
                text: (0, s.vc)(e.releaseDate, 'LL')
            });
        if (e.type === c.AzA.RELEASE_DATE)
            return (0, r.jsx)(h, {
                className: t,
                circle: (0, r.jsx)(p, { IconComponent: o.Que }),
                smallHeader: u.NW.string(u.t.qpwaNT),
                text: (0, s.vc)(e.releaseDate, 'LL')
            });
        if (e.type === c.AzA.EARLY_ACCESS)
            if (null != e.releaseDate)
                return (0, r.jsx)(h, {
                    className: t,
                    circle: (0, r.jsx)(p, {
                        IconComponent: o.d$P,
                        className: d.earlyAccess
                    }),
                    smallHeader: u.NW.string(u.t.HYys0t),
                    text: (0, s.vc)(e.releaseDate, 'LL')
                });
            else
                return (0, r.jsx)(h, {
                    className: t,
                    circle: (0, r.jsx)(p, {
                        IconComponent: o.d$P,
                        className: d.earlyAccess
                    }),
                    text: u.NW.string(u.t.HYys0t)
                });
        return e.type === c.AzA.FLAVOR_TEXT
            ? (0, r.jsx)(h, {
                  circle: (0, r.jsx)(p, { IconComponent: o.dz2 }),
                  text: e.flavorText,
                  className: t
              })
            : e.type === c.AzA.HAS_FREE_PREMIUM_CONTENT
              ? (0, r.jsx)(h, {
                    className: t,
                    circle: (0, r.jsx)(p, {
                        IconComponent: o.SrA,
                        className: d.premiumCircle
                    }),
                    text: u.NW.string(u.t.R9SwVl)
                })
              : null;
    }
}
