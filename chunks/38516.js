r.d(t, { Z: () => m }), r(411104), r(230036);
var n = r(200651);
r(192379);
var a = r(120356),
    o = r.n(a),
    i = r(643872),
    l = r(481060),
    s = r(810568),
    c = r(388032),
    u = r(263930),
    d = r(242177);
let p = [i.p.OFFICIAL, i.p.TWITTER, i.p.YOUTUBE];
function f(e) {
    let { website: t, trackClick: r } = e,
        {
            action: a,
            icon: o,
            title: u
        } = (function (e) {
            switch (e.category) {
                case i.p.OFFICIAL:
                    return {
                        icon: (0, n.jsx)(l.enf, { colorClass: d.linkIcon }),
                        action: s.as.WebsiteLink,
                        title: c.NW.string(c.t.fOUKvr)
                    };
                case i.p.TWITTER:
                    return {
                        icon: (0, n.jsx)(l.TAi, { colorClass: d.linkIcon }),
                        action: s.as.XLink,
                        title: c.NW.string(c.t['INic4+'])
                    };
                case i.p.YOUTUBE:
                    return {
                        action: s.as.YouTubeLink,
                        icon: (0, n.jsx)(l.$5w, { colorClass: d.linkIcon }),
                        title: c.NW.string(c.t.lNmxbG)
                    };
                default:
                    throw Error('Unknown IGDB website category');
            }
        })(t);
    return (0, n.jsx)(l.ua7, {
        text: t.url,
        tooltipClassName: d.tooltip,
        tooltipContentClassName: d.tooltipContent,
        children: (e) => {
            var i,
                s,
                { onClick: c } = e,
                p = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        a = (function (e, t) {
                            if (null == e) return {};
                            var r,
                                n,
                                a = {},
                                o = Object.keys(e);
                            for (n = 0; n < o.length; n++) (r = o[n]), t.indexOf(r) >= 0 || (a[r] = e[r]);
                            return a;
                        })(e, t);
                    if (Object.getOwnPropertySymbols) {
                        var o = Object.getOwnPropertySymbols(e);
                        for (n = 0; n < o.length; n++) (r = o[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
                    }
                    return a;
                })(e, ['onClick']);
            return (0, n.jsx)(
                l.eee,
                ((i = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        'function' == typeof Object.getOwnPropertySymbols &&
                            (n = n.concat(
                                Object.getOwnPropertySymbols(r).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                })
                            )),
                            n.forEach(function (t) {
                                var n;
                                (n = r[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: n,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0
                                          })
                                        : (e[t] = n);
                            });
                    }
                    return e;
                })({}, p)),
                (s = s =
                    {
                        className: d.linkAnchor,
                        title: u,
                        href: t.url,
                        onClick: () => {
                            r(a), null == c || c();
                        },
                        target: '_blank',
                        children: o
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(s))
                    : (function (e, t) {
                          var r = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var n = Object.getOwnPropertySymbols(e);
                              r.push.apply(r, n);
                          }
                          return r;
                      })(Object(s)).forEach(function (e) {
                          Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(s, e));
                      }),
                i)
            );
        }
    });
}
let m = function (e) {
    let { detectedGame: t, trackClick: r } = e;
    if (null == t.websites) return null;
    let a = t.websites
        .filter((e) => {
            let { category: t } = e;
            return p.includes(t);
        })
        .sort((e, t) => e.category - t.category);
    return 0 === a.length
        ? null
        : (0, n.jsxs)('div', {
              children: [
                  (0, n.jsx)(l.X6q, {
                      className: u.sectionHeader,
                      variant: 'text-xs/semibold',
                      color: 'header-secondary',
                      children: c.NW.string(c.t.Oj3o19)
                  }),
                  (0, n.jsx)('div', {
                      className: o()(u.row, u.gapMd),
                      children: a.map((e) =>
                          (0, n.jsx)(
                              f,
                              {
                                  website: e,
                                  trackClick: r
                              },
                              e.url
                          )
                      )
                  })
              ]
          });
};
