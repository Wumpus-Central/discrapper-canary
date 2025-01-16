var i,
    a = r(47120);
var s = r(200651),
    o = r(192379),
    l = r(120356),
    u = r.n(l),
    c = r(481060),
    d = r(297700),
    f = r(665786),
    _ = r(823379),
    h = r(981631),
    p = r(388032),
    m = r(736455);
function g(e) {
    switch (e) {
        case 2:
            return p.intl.string(p.t.iCehw8);
        case 0:
            return p.intl.string(p.t.hfYfEB);
        case 3:
            return p.intl.string(p.t['TX+iFB']);
        case 4:
            return p.intl.string(p.t.NSYGX1);
        case 5:
            return p.intl.string(p.t.jjUTLy);
        case 1:
            return p.intl.string(p.t['lMrv9/']);
        case 6:
            return null;
        default:
            (0, _.vE)(e);
    }
}
!(function (e) {
    (e[(e.PARTNERED = 0)] = 'PARTNERED'), (e[(e.STAFF = 1)] = 'STAFF'), (e[(e.VERIFIED = 2)] = 'VERIFIED'), (e[(e.VERIFIED_AND_PARTNERED = 3)] = 'VERIFIED_AND_PARTNERED'), (e[(e.VERIFIED_AND_HUB = 4)] = 'VERIFIED_AND_HUB'), (e[(e.HUB = 5)] = 'HUB'), (e[(e.NONE = 6)] = 'NONE');
})(i || (i = {}));
class E extends o.PureComponent {
    renderBadge(e, n, r) {
        let { className: i, badgeStrokeColor: a, tooltipColor: o = c.Tooltip.Colors.BRAND, tooltipPosition: l, tooltipDelay: f, size: _ = 16, badgeColor: h, iconClassName: p, flowerStarClassName: E } = this.props,
            v = g(e);
        return (0, s.jsx)(c.Tooltip, {
            color: o,
            position: l,
            delay: f,
            text: v,
            children: (o) => {
                if (5 !== e && 4 !== e)
                    return (0, s.jsx)(d.Z, {
                        ...o,
                        className: u()(r, i),
                        flowerStarClassName: E,
                        color: h,
                        stroke: a,
                        size: _,
                        children: (0, s.jsx)(n, {
                            size: 'xxs',
                            className: u()(m.icon, p),
                            color: 'currentColor'
                        })
                    });
                {
                    let e = {
                        width: _,
                        height: _
                    };
                    return (0, s.jsx)('div', {
                        ...o,
                        className: u()(r, i),
                        style: e,
                        children: (0, s.jsx)(n, {
                            className: u()(m.icon, p),
                            color: 'currentColor'
                        })
                    });
                }
            }
        });
    }
    render() {
        let { guild: e } = this.props,
            n = new Set(e.features);
        return n.has(h.oNc.INTERNAL_EMPLOYEE_ONLY) ? this.renderBadge(1, c.StaffBadgeIcon, m.staff) : n.has(h.oNc.VERIFIED) && n.has(h.oNc.HUB) ? this.renderBadge(4, c.HubIcon, m.verifiedHub) : n.has(h.oNc.HUB) ? this.renderBadge(5, c.HubIcon, m.hub) : n.has(h.oNc.VERIFIED) && n.has(h.oNc.PARTNERED) ? this.renderBadge(3, c.CheckmarkSmallIcon, m.verified) : n.has(h.oNc.VERIFIED) ? this.renderBadge(2, c.CheckmarkSmallIcon, m.verified) : n.has(h.oNc.PARTNERED) ? this.renderBadge(0, (0, c.makeIconCompat)(f.Z), m.partnered) : null;
    }
}
n.Z = E;
