n.d(t, {
    Z: function () {
        return p;
    }
});
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    s = n(481060),
    o = n(55935),
    c = n(981631),
    d = n(388032),
    u = n(409367);
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
        let { circle: t, smallHeader: n, text: r, className: l } = e;
        return (0, i.jsxs)('div', {
            className: a()(u.recommendationReason, l),
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
                            children: r
                        })
                    ]
                })
            ]
        });
    };
class p extends r.Component {
    render() {
        let { reason: e, className: t } = this.props;
        if (e.type === c.AzA.RECENT_RELEASE_DATE)
            return (0, i.jsx)(m, {
                className: t,
                circle: (0, i.jsx)(h, { IconComponent: s.CalendarIcon }),
                smallHeader: d.intl.string(d.t.u81aYW),
                text: (0, o.vc)(e.releaseDate, 'LL')
            });
        if (e.type === c.AzA.RELEASE_DATE)
            return (0, i.jsx)(m, {
                className: t,
                circle: (0, i.jsx)(h, { IconComponent: s.CalendarIcon }),
                smallHeader: d.intl.string(d.t.qpwaNT),
                text: (0, o.vc)(e.releaseDate, 'LL')
            });
        if (e.type === c.AzA.EARLY_ACCESS)
            return null != e.releaseDate
                ? (0, i.jsx)(m, {
                      className: t,
                      circle: (0, i.jsx)(h, {
                          IconComponent: s.LockUnlockedIcon,
                          className: u.earlyAccess
                      }),
                      smallHeader: d.intl.string(d.t.HYys0t),
                      text: (0, o.vc)(e.releaseDate, 'LL')
                  })
                : (0, i.jsx)(m, {
                      className: t,
                      circle: (0, i.jsx)(h, {
                          IconComponent: s.LockUnlockedIcon,
                          className: u.earlyAccess
                      }),
                      text: d.intl.string(d.t.HYys0t)
                  });
        return e.type === c.AzA.FLAVOR_TEXT
            ? (0, i.jsx)(m, {
                  circle: (0, i.jsx)(h, { IconComponent: s.CheckmarkLargeIcon }),
                  text: e.flavorText,
                  className: t
              })
            : e.type === c.AzA.HAS_FREE_PREMIUM_CONTENT
              ? (0, i.jsx)(m, {
                    className: t,
                    circle: (0, i.jsx)(h, {
                        IconComponent: s.NitroWheelIcon,
                        className: u.premiumCircle
                    }),
                    text: d.intl.string(d.t.R9SwVl)
                })
              : null;
    }
}
