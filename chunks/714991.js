"use strict";
n.d(t, { A: () => T });
var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(900002),
    o = n(306471),
    d = n(101277),
    c = n(478016),
    u = n(565787),
    _ = n(814925),
    E = n(816166),
    A = n(403362),
    h = n(652215),
    I = n(375708),
    f = n(687652);
class p extends r.PureComponent {
    renderBadge(e, t, n) {
        let {
                className: r,
                badgeStrokeColor: a,
                tooltipColor: o = l.ST.Colors.BRAND,
                tooltipPosition: d,
                tooltipDelay: c,
                size: u = 16,
                badgeColor: E,
                iconClassName: h,
                flowerStarClassName: p,
            } = this.props,
            T = (function (e) {
                switch (e) {
                    case 2:
                        return I.intl.string(I.t.iCehw9);
                    case 0:
                        return I.intl.string(I.t.hfYfEE);
                    case 3:
                        return I.intl.string(I.t["TX+iFC"]);
                    case 4:
                        return I.intl.string(I.t.NSYGX0);
                    case 5:
                        return I.intl.string(I.t["jjUTL+"]);
                    case 1:
                        return I.intl.string(I.t.lMrv96);
                    case 6:
                        return null;
                    default:
                        (0, A.xb)(e);
                }
            })(e);
        return (0, i.jsx)(l.ST, {
            color: o,
            position: d,
            delay: c,
            text: T,
            children: (l) =>
                5 === e || 4 === e
                    ? (0, i.jsx)("div", {
                          ...l,
                          className: s()(n, r),
                          style: { width: u, height: u },
                          children: (0, i.jsx)(t, { className: s()(f.Kk, h), color: "currentColor" }),
                      })
                    : (0, i.jsx)(_.A, {
                          ...l,
                          className: s()(n, r),
                          flowerStarClassName: p,
                          color: E,
                          stroke: a,
                          size: u,
                          children: (0, i.jsx)(t, { size: "xxs", className: s()(f.Kk, h), color: "currentColor" }),
                      }),
        });
    }
    render() {
        let { guild: e } = this.props,
            t = new Set(e.features);
        return t.has(h.GuildFeatures.INTERNAL_EMPLOYEE_ONLY)
            ? this.renderBadge(1, o.V, f.PF)
            : t.has(h.GuildFeatures.VERIFIED) && t.has(h.GuildFeatures.HUB)
              ? this.renderBadge(4, d.P, f.Il)
              : t.has(h.GuildFeatures.HUB)
                ? this.renderBadge(5, d.P, f.e4)
                : t.has(h.GuildFeatures.VERIFIED) && t.has(h.GuildFeatures.PARTNERED)
                  ? this.renderBadge(3, c.U, f.zr)
                  : t.has(h.GuildFeatures.VERIFIED)
                    ? this.renderBadge(2, c.U, f.zr)
                    : t.has(h.GuildFeatures.PARTNERED)
                      ? this.renderBadge(0, (0, u.k)(E.A), f._I)
                      : null;
    }
}
let T = p;
