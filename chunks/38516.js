n.d(t, { Z: () => g }), n(415506), n(642613);
var i = n(951288);
n(647438);
var r = n(120356),
    l = n.n(r),
    a = n(643872),
    s = n(28664),
    o = n(481060),
    c = n(810568),
    d = n(388032),
    u = n(226788),
    m = n(803351);
let f = [a.p.OFFICIAL, a.p.TWITTER, a.p.YOUTUBE];
function p(e) {
    let { website: t, trackClick: n } = e,
        {
            action: r,
            icon: l,
            title: u,
        } = (function (e) {
            switch (e.category) {
                case a.p.OFFICIAL:
                    return {
                        icon: (0, i.jsx)(o.enf, { colorClass: m.linkIcon }),
                        action: c.as.WebsiteLink,
                        title: d.intl.string(d.t.fOUKvr),
                    };
                case a.p.TWITTER:
                    return {
                        icon: (0, i.jsx)(o.TAi, { colorClass: m.linkIcon }),
                        action: c.as.XLink,
                        title: d.intl.string(d.t["INic4+"]),
                    };
                case a.p.YOUTUBE:
                    return {
                        action: c.as.YouTubeLink,
                        icon: (0, i.jsx)(o.$5w, { colorClass: m.linkIcon }),
                        title: d.intl.string(d.t.lNmxbG),
                    };
                default:
                    throw Error("Unknown IGDB website category");
            }
        })(t);
    return (0, i.jsx)(s.u, {
        __unsupportedReactNodeAsText: t.url,
        children: (0, i.jsx)(o.Anchor, {
            onClick: () => {
                n(r);
            },
            className: m.linkAnchor,
            title: u,
            href: t.url,
            target: "_blank",
            children: l,
        }),
    });
}
let g = function (e) {
    let { detectedGame: t, trackClick: n } = e;
    if (null == t.websites) return null;
    let r = t.websites
        .filter((e) => {
            let { category: t } = e;
            return f.includes(t);
        })
        .sort((e, t) => e.category - t.category);
    return 0 === r.length
        ? null
        : (0, i.jsxs)("div", {
              children: [
                  (0, i.jsx)(o.Heading, {
                      className: u.sectionHeader,
                      variant: "text-xs/semibold",
                      color: "header-secondary",
                      children: d.intl.string(d.t.Oj3o19),
                  }),
                  (0, i.jsx)("div", {
                      className: l()(u.row, u.gapMd),
                      children: r.map((e) =>
                          (0, i.jsx)(
                              p,
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
