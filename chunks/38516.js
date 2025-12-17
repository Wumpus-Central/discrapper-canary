n.d(t, { Z: () => p }), n(415506), n(642613);
var a = n(54381);
n(473749);
var i = n(120356),
    r = n.n(i),
    l = n(643872),
    o = n(28664),
    s = n(481060),
    c = n(810568),
    d = n(388032),
    u = n(452379),
    m = n(922522);
let f = [l.p.OFFICIAL, l.p.TWITTER, l.p.YOUTUBE];
function g(e) {
    let { website: t, trackClick: n } = e,
        {
            action: i,
            icon: r,
            title: u,
        } = (function (e) {
            switch (e.category) {
                case l.p.OFFICIAL:
                    return {
                        icon: (0, a.jsx)(s.enf, { colorClass: m.linkIcon }),
                        action: c.as.WebsiteLink,
                        title: d.intl.string(d.t.fOUKvg),
                    };
                case l.p.TWITTER:
                    return {
                        icon: (0, a.jsx)(s.TAi, { colorClass: m.linkIcon }),
                        action: c.as.XLink,
                        title: d.intl.string(d.t.INic4y),
                    };
                case l.p.YOUTUBE:
                    return {
                        action: c.as.YouTubeLink,
                        icon: (0, a.jsx)(s.$5w, { colorClass: m.linkIcon }),
                        title: d.intl.string(d.t.lNmxbE),
                    };
                default:
                    throw Error("Unknown IGDB website category");
            }
        })(t);
    return (0, a.jsx)(o.u, {
        __unsupportedReactNodeAsText: t.url,
        children: (0, a.jsx)(s.Anchor, {
            onClick: () => {
                n(i);
            },
            className: m.linkAnchor,
            title: u,
            href: t.url,
            target: "_blank",
            children: r,
        }),
    });
}
let p = function (e) {
    let { detectedGame: t, trackClick: n } = e;
    if (null == t.websites) return null;
    let i = t.websites
        .filter((e) => {
            let { category: t } = e;
            return f.includes(t);
        })
        .sort((e, t) => e.category - t.category);
    return 0 === i.length
        ? null
        : (0, a.jsxs)("div", {
              children: [
                  (0, a.jsx)(s.Heading, {
                      className: u.sectionHeader,
                      variant: "text-xs/semibold",
                      color: "text-default",
                      children: d.intl.string(d.t["Oj3o1/"]),
                  }),
                  (0, a.jsx)("div", {
                      className: r()(u.row, u.gapMd),
                      children: i.map((e) =>
                          (0, a.jsx)(
                              g,
                              {
                                  website: e,
                                  trackClick: n,
                              },
                              e.url,
                          ),
                      ),
                  }),
              ],
          });
};
