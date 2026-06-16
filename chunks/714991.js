"use strict";
n.d(t, { A: () => A });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(781696),
    l = n(306471),
    u = n(101277),
    c = n(478016),
    d = n(565787),
    _ = n(814925),
    h = n(816166),
    f = n(403362),
    p = n(652215),
    E = n(375708),
    m = n(708396);
class g extends r.PureComponent {
    renderBadge(e, t, n) {
        let {
                className: r,
                badgeStrokeColor: s,
                tooltipColor: l = o.ST.Colors.BRAND,
                tooltipPosition: u,
                tooltipDelay: c,
                size: d = 16,
                badgeColor: h,
                iconClassName: p,
                flowerStarClassName: g,
            } = this.props,
            A = (function (e) {
                switch (e) {
                    case 2:
                        return E.intl.string(E.t.iCehw9);
                    case 0:
                        return E.intl.string(E.t.hfYfEE);
                    case 3:
                        return E.intl.string(E.t["TX+iFC"]);
                    case 4:
                        return E.intl.string(E.t.NSYGX0);
                    case 5:
                        return E.intl.string(E.t["jjUTL+"]);
                    case 1:
                        return E.intl.string(E.t.lMrv96);
                    case 6:
                        return null;
                    default:
                        (0, f.xb)(e);
                }
            })(e);
        return (0, i.jsx)(o.ST, {
            color: l,
            position: u,
            delay: c,
            text: A,
            children: (o) =>
                5 === e || 4 === e
                    ? (0, i.jsx)("div", {
                          ...o,
                          className: a()(n, r),
                          style: { width: d, height: d },
                          children: (0, i.jsx)(t, { className: a()(m.Kk, p), color: "currentColor" }),
                      })
                    : (0, i.jsx)(_.A, {
                          ...o,
                          className: a()(n, r),
                          flowerStarClassName: g,
                          color: h,
                          stroke: s,
                          size: d,
                          children: (0, i.jsx)(t, { size: "xxs", className: a()(m.Kk, p), color: "currentColor" }),
                      }),
        });
    }
    render() {
        let { guild: e } = this.props,
            t = new Set(e.features);
        return t.has(p.GuildFeatures.INTERNAL_EMPLOYEE_ONLY)
            ? this.renderBadge(1, l.V, m.PF)
            : t.has(p.GuildFeatures.VERIFIED) && t.has(p.GuildFeatures.HUB)
              ? this.renderBadge(4, u.P, m.Il)
              : t.has(p.GuildFeatures.HUB)
                ? this.renderBadge(5, u.P, m.e4)
                : t.has(p.GuildFeatures.VERIFIED) && t.has(p.GuildFeatures.PARTNERED)
                  ? this.renderBadge(3, c.U, m.zr)
                  : t.has(p.GuildFeatures.VERIFIED)
                    ? this.renderBadge(2, c.U, m.zr)
                    : t.has(p.GuildFeatures.PARTNERED)
                      ? this.renderBadge(0, (0, d.k)(h.A), m._I)
                      : null;
    }
}
let A = g;
