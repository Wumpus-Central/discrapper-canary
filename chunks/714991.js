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
    f = n(375708),
    I = n(559141);
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
                        return f.intl.string(f.t.iCehw9);
                    case 0:
                        return f.intl.string(f.t.hfYfEE);
                    case 3:
                        return f.intl.string(f.t["TX+iFC"]);
                    case 4:
                        return f.intl.string(f.t.NSYGX0);
                    case 5:
                        return f.intl.string(f.t["jjUTL+"]);
                    case 1:
                        return f.intl.string(f.t.lMrv96);
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
                          children: (0, i.jsx)(t, { className: s()(I.Kk, h), color: "currentColor" }),
                      })
                    : (0, i.jsx)(_.A, {
                          ...l,
                          className: s()(n, r),
                          flowerStarClassName: p,
                          color: E,
                          stroke: a,
                          size: u,
                          children: (0, i.jsx)(t, { size: "xxs", className: s()(I.Kk, h), color: "currentColor" }),
                      }),
        });
    }
    render() {
        let { guild: e } = this.props,
            t = new Set(e.features);
        return t.has(h.GuildFeatures.INTERNAL_EMPLOYEE_ONLY)
            ? this.renderBadge(1, o.V, I.PF)
            : t.has(h.GuildFeatures.VERIFIED) && t.has(h.GuildFeatures.HUB)
              ? this.renderBadge(4, d.P, I.Il)
              : t.has(h.GuildFeatures.HUB)
                ? this.renderBadge(5, d.P, I.e4)
                : t.has(h.GuildFeatures.VERIFIED) && t.has(h.GuildFeatures.PARTNERED)
                  ? this.renderBadge(3, c.U, I.zr)
                  : t.has(h.GuildFeatures.VERIFIED)
                    ? this.renderBadge(2, c.U, I.zr)
                    : t.has(h.GuildFeatures.PARTNERED)
                      ? this.renderBadge(0, (0, u.k)(E.A), I._I)
                      : null;
    }
}
let T = p;
