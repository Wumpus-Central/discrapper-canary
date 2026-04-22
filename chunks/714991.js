"use strict";
n.d(t, { A: () => A });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(781696),
    l = n(306471),
    u = n(101277),
    d = n(478016),
    c = n(565787),
    _ = n(496885),
    f = n(816166),
    E = n(403362),
    h = n(652215),
    p = n(985018),
    m = n(708396);
class g extends i.PureComponent {
    renderBadge(e, t, n) {
        let {
                className: i,
                badgeStrokeColor: s,
                tooltipColor: l = o.ST.Colors.BRAND,
                tooltipPosition: u,
                tooltipDelay: d,
                size: c = 16,
                badgeColor: f,
                iconClassName: h,
                flowerStarClassName: g,
            } = this.props,
            A = (function (e) {
                switch (e) {
                    case 2:
                        return p.intl.string(p.t.iCehw9);
                    case 0:
                        return p.intl.string(p.t.hfYfEE);
                    case 3:
                        return p.intl.string(p.t["TX+iFC"]);
                    case 4:
                        return p.intl.string(p.t.NSYGX0);
                    case 5:
                        return p.intl.string(p.t["jjUTL+"]);
                    case 1:
                        return p.intl.string(p.t.lMrv96);
                    case 6:
                        return null;
                    default:
                        (0, E.xb)(e);
                }
            })(e);
        return (0, r.jsx)(o.ST, {
            color: l,
            position: u,
            delay: d,
            text: A,
            children: (o) =>
                5 === e || 4 === e
                    ? (0, r.jsx)("div", {
                          ...o,
                          className: a()(n, i),
                          style: { width: c, height: c },
                          children: (0, r.jsx)(t, { className: a()(m.Kk, h), color: "currentColor" }),
                      })
                    : (0, r.jsx)(_.A, {
                          ...o,
                          className: a()(n, i),
                          flowerStarClassName: g,
                          color: f,
                          stroke: s,
                          size: c,
                          children: (0, r.jsx)(t, { size: "xxs", className: a()(m.Kk, h), color: "currentColor" }),
                      }),
        });
    }
    render() {
        let { guild: e } = this.props,
            t = new Set(e.features);
        return t.has(h.GuildFeatures.INTERNAL_EMPLOYEE_ONLY)
            ? this.renderBadge(1, l.V, m.PF)
            : t.has(h.GuildFeatures.VERIFIED) && t.has(h.GuildFeatures.HUB)
              ? this.renderBadge(4, u.P, m.Il)
              : t.has(h.GuildFeatures.HUB)
                ? this.renderBadge(5, u.P, m.e4)
                : t.has(h.GuildFeatures.VERIFIED) && t.has(h.GuildFeatures.PARTNERED)
                  ? this.renderBadge(3, d.U, m.zr)
                  : t.has(h.GuildFeatures.VERIFIED)
                    ? this.renderBadge(2, d.U, m.zr)
                    : t.has(h.GuildFeatures.PARTNERED)
                      ? this.renderBadge(0, (0, c.k)(f.A), m._I)
                      : null;
    }
}
let A = g;
