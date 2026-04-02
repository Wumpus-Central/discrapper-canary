"use strict";
n.d(t, { A: () => m });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(397927),
    l = n(496885),
    u = n(816166),
    c = n(403362),
    d = n(652215),
    _ = n(985018),
    f = n(829308);
function p(e) {
    switch (e) {
        case 2:
            return _.intl.string(_.t.iCehw9);
        case 0:
            return _.intl.string(_.t.hfYfEE);
        case 3:
            return _.intl.string(_.t["TX+iFC"]);
        case 4:
            return _.intl.string(_.t.NSYGX0);
        case 5:
            return _.intl.string(_.t["jjUTL+"]);
        case 1:
            return _.intl.string(_.t.lMrv96);
        case 6:
            return null;
        default:
            (0, c.xb)(e);
    }
}
class h extends i.PureComponent {
    renderBadge(e, t, n) {
        let {
                className: i,
                badgeStrokeColor: s,
                tooltipColor: u = o.STz.Colors.BRAND,
                tooltipPosition: c,
                tooltipDelay: d,
                size: _ = 16,
                badgeColor: h,
                iconClassName: m,
                flowerStarClassName: E,
            } = this.props,
            g = p(e);
        return (0, r.jsx)(o.STz, {
            color: u,
            position: c,
            delay: d,
            text: g,
            children: (o) => {
                if (5 !== e && 4 !== e)
                    return (0, r.jsx)(l.A, {
                        ...o,
                        className: a()(n, i),
                        flowerStarClassName: E,
                        color: h,
                        stroke: s,
                        size: _,
                        children: (0, r.jsx)(t, { size: "xxs", className: a()(f.Kk, m), color: "currentColor" }),
                    });
                {
                    let e = { width: _, height: _ };
                    return (0, r.jsx)("div", {
                        ...o,
                        className: a()(n, i),
                        style: e,
                        children: (0, r.jsx)(t, { className: a()(f.Kk, m), color: "currentColor" }),
                    });
                }
            },
        });
    }
    render() {
        let { guild: e } = this.props,
            t = new Set(e.features);
        return t.has(d.GuildFeatures.INTERNAL_EMPLOYEE_ONLY)
            ? this.renderBadge(1, o.VaJ, f.PF)
            : t.has(d.GuildFeatures.VERIFIED) && t.has(d.GuildFeatures.HUB)
              ? this.renderBadge(4, o.Pfh, f.Il)
              : t.has(d.GuildFeatures.HUB)
                ? this.renderBadge(5, o.Pfh, f.e4)
                : t.has(d.GuildFeatures.VERIFIED) && t.has(d.GuildFeatures.PARTNERED)
                  ? this.renderBadge(3, o.Uzd, f.zr)
                  : t.has(d.GuildFeatures.VERIFIED)
                    ? this.renderBadge(2, o.Uzd, f.zr)
                    : t.has(d.GuildFeatures.PARTNERED)
                      ? this.renderBadge(0, (0, o.kHD)(u.A), f._I)
                      : null;
    }
}
let m = h;
