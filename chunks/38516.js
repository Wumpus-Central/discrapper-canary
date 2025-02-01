n.d(t, { Z: () => g }), n(411104);
var i = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    l = n(643872),
    o = n(481060),
    s = n(810568),
    c = n(388032),
    d = n(561526),
    u = n(731483);
let m = [l.p.OFFICIAL, l.p.TWITTER, l.p.YOUTUBE];
function p(e) {
    let { website: t, trackClick: n } = e,
        {
            action: r,
            icon: a,
            title: d
        } = (function (e) {
            switch (e.category) {
                case l.p.OFFICIAL:
                    return {
                        icon: (0, i.jsx)(o.enf, { colorClass: u.linkIcon }),
                        action: s.as.WebsiteLink,
                        title: c.intl.string(c.t.fOUKvr)
                    };
                case l.p.TWITTER:
                    return {
                        icon: (0, i.jsx)(o.TAi, { colorClass: u.linkIcon }),
                        action: s.as.XLink,
                        title: c.intl.string(c.t['INic4+'])
                    };
                case l.p.YOUTUBE:
                    return {
                        action: s.as.YouTubeLink,
                        icon: (0, i.jsx)(o.$5w, { colorClass: u.linkIcon }),
                        title: c.intl.string(c.t.lNmxbG)
                    };
                default:
                    throw Error('Unknown IGDB website category');
            }
        })(t);
    return (0, i.jsx)(o.ua7, {
        text: t.url,
        tooltipClassName: u.tooltip,
        tooltipContentClassName: u.tooltipContent,
        children: (e) => {
            let { onClick: l, ...s } = e;
            return (0, i.jsx)(o.eee, {
                ...s,
                className: u.linkAnchor,
                title: d,
                href: t.url,
                onClick: () => {
                    n(r), null == l || l();
                },
                target: '_blank',
                children: a
            });
        }
    });
}
let g = function (e) {
    let { detectedGame: t, trackClick: n } = e;
    if (null == t.websites) return null;
    let r = t.websites
        .filter((e) => {
            let { category: t } = e;
            return m.includes(t);
        })
        .sort((e, t) => e.category - t.category);
    return 0 === r.length
        ? null
        : (0, i.jsxs)('div', {
              children: [
                  (0, i.jsx)(o.X6q, {
                      className: d.sectionHeader,
                      variant: 'text-xs/semibold',
                      color: 'header-secondary',
                      children: c.intl.string(c.t.Oj3o19)
                  }),
                  (0, i.jsx)('div', {
                      className: a()(d.row, d.gapMd),
                      children: r.map((e) =>
                          (0, i.jsx)(
                              p,
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
