var i,
    a = r(47120);
var o = r(200651),
    s = r(192379),
    l = r(120356),
    u = r.n(l),
    c = r(481060),
    d = r(297700),
    f = r(665786),
    p = r(823379),
    h = r(981631),
    _ = r(388032),
    m = r(736455);
function g(e) {
    switch (e) {
        case 2:
            return _.intl.string(_.t.iCehw8);
        case 0:
            return _.intl.string(_.t.hfYfEB);
        case 3:
            return _.intl.string(_.t['TX+iFB']);
        case 4:
            return _.intl.string(_.t.NSYGX1);
        case 5:
            return _.intl.string(_.t.jjUTLy);
        case 1:
            return _.intl.string(_.t['lMrv9/']);
        case 6:
            return null;
        default:
            (0, p.vE)(e);
    }
}
!(function (e) {
    (e[(e.PARTNERED = 0)] = 'PARTNERED'), (e[(e.STAFF = 1)] = 'STAFF'), (e[(e.VERIFIED = 2)] = 'VERIFIED'), (e[(e.VERIFIED_AND_PARTNERED = 3)] = 'VERIFIED_AND_PARTNERED'), (e[(e.VERIFIED_AND_HUB = 4)] = 'VERIFIED_AND_HUB'), (e[(e.HUB = 5)] = 'HUB'), (e[(e.NONE = 6)] = 'NONE');
})(i || (i = {}));
class E extends s.PureComponent {
    renderBadge(e, n, r) {
        let { className: i, badgeStrokeColor: a, tooltipColor: s = c.Tooltip.Colors.BRAND, tooltipPosition: l, tooltipDelay: f, size: p = 16, badgeColor: h, iconClassName: _, flowerStarClassName: E } = this.props,
            v = g(e);
        return (0, o.jsx)(c.Tooltip, {
            color: s,
            position: l,
            delay: f,
            text: v,
            children: (s) => {
                if (5 !== e && 4 !== e)
                    return (0, o.jsx)(d.Z, {
                        ...s,
                        className: u()(r, i),
                        flowerStarClassName: E,
                        color: h,
                        stroke: a,
                        size: p,
                        children: (0, o.jsx)(n, {
                            size: 'xxs',
                            className: u()(m.icon, _),
                            color: 'currentColor'
                        })
                    });
                {
                    let e = {
                        width: p,
                        height: p
                    };
                    return (0, o.jsx)('div', {
                        ...s,
                        className: u()(r, i),
                        style: e,
                        children: (0, o.jsx)(n, {
                            className: u()(m.icon, _),
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
