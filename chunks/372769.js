n.d(t, { Z: () => m }), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(481060),
    l = n(297700),
    u = n(665786),
    c = n(823379),
    d = n(981631),
    f = n(388032),
    _ = n(857562);
function p(e) {
    switch (e) {
        case 2:
            return f.intl.string(f.t.iCehw8);
        case 0:
            return f.intl.string(f.t.hfYfEB);
        case 3:
            return f.intl.string(f.t['TX+iFB']);
        case 4:
            return f.intl.string(f.t.NSYGX1);
        case 5:
            return f.intl.string(f.t.jjUTLy);
        case 1:
            return f.intl.string(f.t['lMrv9/']);
        case 6:
            return null;
        default:
            (0, c.vE)(e);
    }
}
class h extends r.PureComponent {
    renderBadge(e, t, n) {
        let { className: r, badgeStrokeColor: a, tooltipColor: u = o.ua7.Colors.BRAND, tooltipPosition: c, tooltipDelay: d, size: f = 16, badgeColor: h, iconClassName: m, flowerStarClassName: g } = this.props,
            E = p(e);
        return (0, i.jsx)(o.ua7, {
            color: u,
            position: c,
            delay: d,
            text: E,
            children: (o) => {
                if (5 !== e && 4 !== e)
                    return (0, i.jsx)(l.Z, {
                        ...o,
                        className: s()(n, r),
                        flowerStarClassName: g,
                        color: h,
                        stroke: a,
                        size: f,
                        children: (0, i.jsx)(t, {
                            size: 'xxs',
                            className: s()(_.icon, m),
                            color: 'currentColor'
                        })
                    });
                {
                    let e = {
                        width: f,
                        height: f
                    };
                    return (0, i.jsx)('div', {
                        ...o,
                        className: s()(n, r),
                        style: e,
                        children: (0, i.jsx)(t, {
                            className: s()(_.icon, m),
                            color: 'currentColor'
                        })
                    });
                }
            }
        });
    }
    render() {
        let { guild: e } = this.props,
            t = new Set(e.features);
        return t.has(d.oNc.INTERNAL_EMPLOYEE_ONLY) ? this.renderBadge(1, o.Ymb, _.staff) : t.has(d.oNc.VERIFIED) && t.has(d.oNc.HUB) ? this.renderBadge(4, o.aVH, _.verifiedHub) : t.has(d.oNc.HUB) ? this.renderBadge(5, o.aVH, _.hub) : t.has(d.oNc.VERIFIED) && t.has(d.oNc.PARTNERED) ? this.renderBadge(3, o.kmB, _.verified) : t.has(d.oNc.VERIFIED) ? this.renderBadge(2, o.kmB, _.verified) : t.has(d.oNc.PARTNERED) ? this.renderBadge(0, (0, o.GSL)(u.Z), _.partnered) : null;
    }
}
let m = h;
