r.d(t, { Z: () => f }), r(415506), r(642613);
var n = r(951288);
r(647438);
var i = r(120356),
    l = r.n(i),
    a = r(643872),
    s = r(481060),
    o = r(810568),
    c = r(388032),
    u = r(226788),
    d = r(803351);
let m = [a.p.OFFICIAL, a.p.TWITTER, a.p.YOUTUBE];
function p(e) {
    let { website: t, trackClick: r } = e,
        {
            action: i,
            icon: l,
            title: u,
        } = (function (e) {
            switch (e.category) {
                case a.p.OFFICIAL:
                    return {
                        icon: (0, n.jsx)(s.enf, { colorClass: d.linkIcon }),
                        action: o.as.WebsiteLink,
                        title: c.intl.string(c.t.fOUKvr),
                    };
                case a.p.TWITTER:
                    return {
                        icon: (0, n.jsx)(s.TAi, { colorClass: d.linkIcon }),
                        action: o.as.XLink,
                        title: c.intl.string(c.t["INic4+"]),
                    };
                case a.p.YOUTUBE:
                    return {
                        action: o.as.YouTubeLink,
                        icon: (0, n.jsx)(s.$5w, { colorClass: d.linkIcon }),
                        title: c.intl.string(c.t.lNmxbG),
                    };
                default:
                    throw Error("Unknown IGDB website category");
            }
        })(t);
    return (0, n.jsx)(s.ua7, {
        text: t.url,
        tooltipClassName: d.tooltip,
        tooltipContentClassName: d.tooltipContent,
        children: (e) => {
            var a,
                o,
                { onClick: c } = e,
                m = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        i = (function (e, t) {
                            if (null == e) return {};
                            var r,
                                n,
                                i = {},
                                l = Object.keys(e);
                            for (n = 0; n < l.length; n++) (r = l[n]), t.indexOf(r) >= 0 || (i[r] = e[r]);
                            return i;
                        })(e, t);
                    if (Object.getOwnPropertySymbols) {
                        var l = Object.getOwnPropertySymbols(e);
                        for (n = 0; n < l.length; n++)
                            (r = l[n]),
                                !(t.indexOf(r) >= 0) &&
                                    Object.prototype.propertyIsEnumerable.call(e, r) &&
                                    (i[r] = e[r]);
                    }
                    return i;
                })(e, ["onClick"]);
            return (0, n.jsx)(
                s.eee,
                ((a = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols &&
                            (n = n.concat(
                                Object.getOwnPropertySymbols(r).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                }),
                            )),
                            n.forEach(function (t) {
                                var n;
                                (n = r[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: n,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0,
                                          })
                                        : (e[t] = n);
                            });
                    }
                    return e;
                })({}, m)),
                (o = o =
                    {
                        className: d.linkAnchor,
                        title: u,
                        href: t.url,
                        onClick: () => {
                            r(i), null == c || c();
                        },
                        target: "_blank",
                        children: l,
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(o))
                    : (function (e, t) {
                          var r = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var n = Object.getOwnPropertySymbols(e);
                              r.push.apply(r, n);
                          }
                          return r;
                      })(Object(o)).forEach(function (e) {
                          Object.defineProperty(a, e, Object.getOwnPropertyDescriptor(o, e));
                      }),
                a),
            );
        },
    });
}
let f = function (e) {
    let { detectedGame: t, trackClick: r } = e;
    if (null == t.websites) return null;
    let i = t.websites
        .filter((e) => {
            let { category: t } = e;
            return m.includes(t);
        })
        .sort((e, t) => e.category - t.category);
    return 0 === i.length
        ? null
        : (0, n.jsxs)("div", {
              children: [
                  (0, n.jsx)(s.X6q, {
                      className: u.sectionHeader,
                      variant: "text-xs/semibold",
                      color: "header-secondary",
                      children: c.intl.string(c.t.Oj3o19),
                  }),
                  (0, n.jsx)("div", {
                      className: l()(u.row, u.gapMd),
                      children: i.map((e) =>
                          (0, n.jsx)(
                              p,
                              {
                                  website: e,
                                  trackClick: r,
                              },
                              e.url,
                          ),
                      ),
                  }),
              ],
          });
};
