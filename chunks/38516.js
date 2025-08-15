r.d(t, { Z: () => g }), r(415506), r(642613);
var n = r(951288);
r(647438);
var a = r(120356),
    i = r.n(a),
    l = r(643872),
    o = r(481060),
    s = r(810568),
    c = r(388032),
    u = r(226788),
    d = r(803351);
let m = [l.p.OFFICIAL, l.p.TWITTER, l.p.YOUTUBE];
function f(e) {
    let { website: t, trackClick: r } = e,
        {
            action: a,
            icon: i,
            title: u,
        } = (function (e) {
            switch (e.category) {
                case l.p.OFFICIAL:
                    return {
                        icon: (0, n.jsx)(o.enf, { colorClass: d.linkIcon }),
                        action: s.as.WebsiteLink,
                        title: c.intl.string(c.t.fOUKvr),
                    };
                case l.p.TWITTER:
                    return {
                        icon: (0, n.jsx)(o.TAi, { colorClass: d.linkIcon }),
                        action: s.as.XLink,
                        title: c.intl.string(c.t["INic4+"]),
                    };
                case l.p.YOUTUBE:
                    return {
                        action: s.as.YouTubeLink,
                        icon: (0, n.jsx)(o.$5w, { colorClass: d.linkIcon }),
                        title: c.intl.string(c.t.lNmxbG),
                    };
                default:
                    throw Error("Unknown IGDB website category");
            }
        })(t);
    return (0, n.jsx)(o.ua7, {
        text: t.url,
        tooltipClassName: d.tooltip,
        tooltipContentClassName: d.tooltipContent,
        children: (e) => {
            var l,
                s,
                { onClick: c } = e,
                m = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        a = (function (e, t) {
                            if (null == e) return {};
                            var r,
                                n,
                                a = {},
                                i = Object.keys(e);
                            for (n = 0; n < i.length; n++) (r = i[n]), t.indexOf(r) >= 0 || (a[r] = e[r]);
                            return a;
                        })(e, t);
                    if (Object.getOwnPropertySymbols) {
                        var i = Object.getOwnPropertySymbols(e);
                        for (n = 0; n < i.length; n++)
                            (r = i[n]),
                                !(t.indexOf(r) >= 0) &&
                                    Object.prototype.propertyIsEnumerable.call(e, r) &&
                                    (a[r] = e[r]);
                    }
                    return a;
                })(e, ["onClick"]);
            return (0, n.jsx)(
                o.eee,
                ((l = (function (e) {
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
                (s = s =
                    {
                        className: d.linkAnchor,
                        title: u,
                        href: t.url,
                        onClick: () => {
                            r(a), null == c || c();
                        },
                        target: "_blank",
                        children: i,
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(s))
                    : (function (e, t) {
                          var r = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var n = Object.getOwnPropertySymbols(e);
                              r.push.apply(r, n);
                          }
                          return r;
                      })(Object(s)).forEach(function (e) {
                          Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(s, e));
                      }),
                l),
            );
        },
    });
}
let g = function (e) {
    let { detectedGame: t, trackClick: r } = e;
    if (null == t.websites) return null;
    let a = t.websites
        .filter((e) => {
            let { category: t } = e;
            return m.includes(t);
        })
        .sort((e, t) => e.category - t.category);
    return 0 === a.length
        ? null
        : (0, n.jsxs)("div", {
              children: [
                  (0, n.jsx)(o.X6q, {
                      className: u.sectionHeader,
                      variant: "text-xs/semibold",
                      color: "header-secondary",
                      children: c.intl.string(c.t.Oj3o19),
                  }),
                  (0, n.jsx)("div", {
                      className: i()(u.row, u.gapMd),
                      children: a.map((e) =>
                          (0, n.jsx)(
                              f,
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
