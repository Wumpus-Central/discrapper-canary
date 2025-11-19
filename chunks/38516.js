n.d(t, { Z: () => p }), n(415506), n(642613);
var i = n(54381);
n(473749);
var l = n(120356),
    r = n.n(l),
    a = n(643872),
    s = n(28664),
    o = n(481060),
    c = n(810568),
    d = n(388032),
    u = n(456486),
    m = n(234891);
let f = [a.p.OFFICIAL, a.p.TWITTER, a.p.YOUTUBE];
function g(e) {
    let { website: t, trackClick: n } = e,
        {
            action: l,
            icon: r,
            title: u,
        } = (function (e) {
            switch (e.category) {
                case a.p.OFFICIAL:
                    return {
                        icon: (0, i.jsx)(o.enf, { colorClass: m.linkIcon }),
                        action: c.as.WebsiteLink,
                        title: d.intl.string(d.t.fOUKvg),
                    };
                case a.p.TWITTER:
                    return {
                        icon: (0, i.jsx)(o.TAi, { colorClass: m.linkIcon }),
                        action: c.as.XLink,
                        title: d.intl.string(d.t.INic4y),
                    };
                case a.p.YOUTUBE:
                    return {
                        action: c.as.YouTubeLink,
                        icon: (0, i.jsx)(o.$5w, { colorClass: m.linkIcon }),
                        title: d.intl.string(d.t.lNmxbE),
                    };
                default:
                    throw Error("Unknown IGDB website category");
            }
        })(t);
    return (0, i.jsx)(s.u, {
        __unsupportedReactNodeAsText: t.url,
        children: (0, i.jsx)(o.Anchor, {
            onClick: () => {
                n(l);
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
    let l = t.websites
        .filter((e) => {
            let { category: t } = e;
            return f.includes(t);
        })
        .sort((e, t) => e.category - t.category);
    return 0 === l.length
        ? null
        : (0, i.jsxs)("div", {
              children: [
                  (0, i.jsx)(o.Heading, {
                      className: u.sectionHeader,
                      variant: "text-xs/semibold",
                      color: "header-secondary",
                      children: d.intl.string(d.t["Oj3o1/"]),
                  }),
                  (0, i.jsx)("div", {
                      className: r()(u.row, u.gapMd),
                      children: l.map((e) =>
                          (0, i.jsx)(
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
