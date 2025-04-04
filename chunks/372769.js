n.d(t, { Z: () => y }), n(47120);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(481060),
    l = n(297700),
    c = n(665786),
    u = n(823379),
    d = n(981631),
    f = n(388032),
    _ = n(602192);
function p(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function h(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                p(e, t, n[t]);
            });
    }
    return e;
}
function m(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function g(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : m(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function E(e) {
    switch (e) {
        case 2:
            return f.NW.string(f.t.iCehw8);
        case 0:
            return f.NW.string(f.t.hfYfEB);
        case 3:
            return f.NW.string(f.t['TX+iFB']);
        case 4:
            return f.NW.string(f.t.NSYGX1);
        case 5:
            return f.NW.string(f.t.jjUTLy);
        case 1:
            return f.NW.string(f.t['lMrv9/']);
        case 6:
            return null;
        default:
            (0, u.vE)(e);
    }
}
class b extends i.PureComponent {
    renderBadge(e, t, n) {
        let { className: i, badgeStrokeColor: o, tooltipColor: c = s.ua7.Colors.BRAND, tooltipPosition: u, tooltipDelay: d, size: f = 16, badgeColor: p, iconClassName: m, flowerStarClassName: b } = this.props,
            y = E(e);
        return (0, r.jsx)(s.ua7, {
            color: c,
            position: u,
            delay: d,
            text: y,
            children: (s) => {
                if (5 !== e && 4 !== e)
                    return (0, r.jsx)(
                        l.Z,
                        g(h({}, s), {
                            className: a()(n, i),
                            flowerStarClassName: b,
                            color: p,
                            stroke: o,
                            size: f,
                            children: (0, r.jsx)(t, {
                                size: 'xxs',
                                className: a()(_.icon, m),
                                color: 'currentColor'
                            })
                        })
                    );
                {
                    let e = {
                        width: f,
                        height: f
                    };
                    return (0, r.jsx)(
                        'div',
                        g(h({}, s), {
                            className: a()(n, i),
                            style: e,
                            children: (0, r.jsx)(t, {
                                className: a()(_.icon, m),
                                color: 'currentColor'
                            })
                        })
                    );
                }
            }
        });
    }
    render() {
        let { guild: e } = this.props,
            t = new Set(e.features);
        return t.has(d.oNc.INTERNAL_EMPLOYEE_ONLY) ? this.renderBadge(1, s.Ymb, _.staff) : t.has(d.oNc.VERIFIED) && t.has(d.oNc.HUB) ? this.renderBadge(4, s.aVH, _.verifiedHub) : t.has(d.oNc.HUB) ? this.renderBadge(5, s.aVH, _.hub) : t.has(d.oNc.VERIFIED) && t.has(d.oNc.PARTNERED) ? this.renderBadge(3, s.kmB, _.verified) : t.has(d.oNc.VERIFIED) ? this.renderBadge(2, s.kmB, _.verified) : t.has(d.oNc.PARTNERED) ? this.renderBadge(0, (0, s.GSL)(c.Z), _.partnered) : null;
    }
}
let y = b;
