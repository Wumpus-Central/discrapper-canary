n(411104);
var r = n(200651);
n(192379);
var i = n(120356),
    a = n.n(i),
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
            action: i,
            icon: a,
            title: d
        } = (function (e) {
            switch (e.category) {
                case l.p.OFFICIAL:
                    return {
                        icon: (0, r.jsx)(o.GlobeEarthIcon, { colorClass: u.linkIcon }),
                        action: s.as.WebsiteLink,
                        title: c.intl.string(c.t.fOUKvr)
                    };
                case l.p.TWITTER:
                    return {
                        icon: (0, r.jsx)(o.XNeutralIcon, { colorClass: u.linkIcon }),
                        action: s.as.XLink,
                        title: c.intl.string(c.t['INic4+'])
                    };
                case l.p.YOUTUBE:
                    return {
                        action: s.as.YouTubeLink,
                        icon: (0, r.jsx)(o.YoutubeNeutralIcon, { colorClass: u.linkIcon }),
                        title: c.intl.string(c.t.lNmxbG)
                    };
                default:
                    throw Error('Unknown IGDB website category');
            }
        })(t);
    return (0, r.jsx)(o.Tooltip, {
        text: t.url,
        tooltipClassName: u.tooltip,
        tooltipContentClassName: u.tooltipContent,
        children: (e) => {
            let { onClick: l, ...s } = e;
            return (0, r.jsx)(o.Anchor, {
                ...s,
                className: u.linkAnchor,
                title: d,
                href: t.url,
                onClick: () => {
                    n(i), null == l || l();
                },
                target: '_blank',
                children: a
            });
        }
    });
}
t.Z = function (e) {
    let { detectedGame: t, trackClick: n } = e;
    if (null == t.websites) return null;
    let i = t.websites
        .filter((e) => {
            let { category: t } = e;
            return m.includes(t);
        })
        .sort((e, t) => e.category - t.category);
    return 0 === i.length
        ? null
        : (0, r.jsxs)('div', {
              children: [
                  (0, r.jsx)(o.Heading, {
                      className: d.sectionHeader,
                      variant: 'text-xs/semibold',
                      color: 'header-secondary',
                      children: c.intl.string(c.t.Oj3o19)
                  }),
                  (0, r.jsx)('div', {
                      className: a()(d.row, d.gapMd),
                      children: i.map((e) =>
                          (0, r.jsx)(
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
