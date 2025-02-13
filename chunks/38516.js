n.d(t, { Z: () => g }), n(411104);
var r = n(200651);
n(192379);
var a = n(120356),
    i = n.n(a),
    o = n(643872),
    l = n(481060),
    s = n(810568),
    c = n(388032),
    d = n(497329),
    u = n(186333);
let m = [o.p.OFFICIAL, o.p.TWITTER, o.p.YOUTUBE];
function _(e) {
    let { website: t, trackClick: n } = e,
        {
            action: a,
            icon: i,
            title: d
        } = (function (e) {
            switch (e.category) {
                case o.p.OFFICIAL:
                    return {
                        icon: (0, r.jsx)(l.enf, { colorClass: u.linkIcon }),
                        action: s.as.WebsiteLink,
                        title: c.intl.string(c.t.fOUKvr)
                    };
                case o.p.TWITTER:
                    return {
                        icon: (0, r.jsx)(l.TAi, { colorClass: u.linkIcon }),
                        action: s.as.XLink,
                        title: c.intl.string(c.t['INic4+'])
                    };
                case o.p.YOUTUBE:
                    return {
                        action: s.as.YouTubeLink,
                        icon: (0, r.jsx)(l.$5w, { colorClass: u.linkIcon }),
                        title: c.intl.string(c.t.lNmxbG)
                    };
                default:
                    throw Error('Unknown IGDB website category');
            }
        })(t);
    return (0, r.jsx)(l.ua7, {
        text: t.url,
        tooltipClassName: u.tooltip,
        tooltipContentClassName: u.tooltipContent,
        children: (e) => {
            let { onClick: o, ...s } = e;
            return (0, r.jsx)(l.eee, {
                ...s,
                className: u.linkAnchor,
                title: d,
                href: t.url,
                onClick: () => {
                    n(a), null == o || o();
                },
                target: '_blank',
                children: i
            });
        }
    });
}
let g = function (e) {
    let { detectedGame: t, trackClick: n } = e;
    if (null == t.websites) return null;
    let a = t.websites
        .filter((e) => {
            let { category: t } = e;
            return m.includes(t);
        })
        .sort((e, t) => e.category - t.category);
    return 0 === a.length
        ? null
        : (0, r.jsxs)('div', {
              children: [
                  (0, r.jsx)(l.X6q, {
                      className: d.sectionHeader,
                      variant: 'text-xs/semibold',
                      color: 'header-secondary',
                      children: c.intl.string(c.t.Oj3o19)
                  }),
                  (0, r.jsx)('div', {
                      className: i()(d.row, d.gapMd),
                      children: a.map((e) =>
                          (0, r.jsx)(
                              _,
                              {
                                  website: e,
                                  trackClick: n
                              },
                              e.url
                          )
                      )
                  })
              ]
          });
};
