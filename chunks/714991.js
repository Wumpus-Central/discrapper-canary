n.d(t, { A: () => y }), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(397927),
    l = n(496885),
    c = n(816166),
    u = n(403362),
    d = n(652215),
    f = n(985018),
    p = n(813055);
function _(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function h(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                _(e, t, n[t]);
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
            (0, u.xb)(e);
    }
}
class b extends i.PureComponent {
    renderBadge(e, t, n) {
        let {
                className: i,
                badgeStrokeColor: a,
                tooltipColor: c = o.STz.Colors.BRAND,
                tooltipPosition: u,
                tooltipDelay: d,
                size: f = 16,
                badgeColor: _,
                iconClassName: m,
                flowerStarClassName: b,
            } = this.props,
            y = E(e);
        return (0, r.jsx)(o.STz, {
            color: c,
            position: u,
            delay: d,
            text: y,
            children: (o) => {
                if (5 !== e && 4 !== e)
                    return (0, r.jsx)(
                        l.A,
                        g(h({}, o), {
                            className: s()(n, i),
                            flowerStarClassName: b,
                            color: _,
                            stroke: a,
                            size: f,
                            children: (0, r.jsx)(t, {
                                size: "xxs",
                                className: s()(p.Kk, m),
                                color: "currentColor",
                            }),
                        }),
                    );
                {
                    let e = {
                        width: f,
                        height: f,
                    };
                    return (0, r.jsx)(
                        "div",
                        g(h({}, o), {
                            className: s()(n, i),
                            style: e,
                            children: (0, r.jsx)(t, {
                                className: s()(p.Kk, m),
                                color: "currentColor",
                            }),
                        }),
                    );
                }
            },
        });
    }
    render() {
        let { guild: e } = this.props,
            t = new Set(e.features);
        return t.has(d.GuildFeatures.INTERNAL_EMPLOYEE_ONLY)
            ? this.renderBadge(1, o.VaJ, p.PF)
            : t.has(d.GuildFeatures.VERIFIED) && t.has(d.GuildFeatures.HUB)
              ? this.renderBadge(4, o.Pfh, p.Il)
              : t.has(d.GuildFeatures.HUB)
                ? this.renderBadge(5, o.Pfh, p.e4)
                : t.has(d.GuildFeatures.VERIFIED) && t.has(d.GuildFeatures.PARTNERED)
                  ? this.renderBadge(3, o.Uzd, p.zr)
                  : t.has(d.GuildFeatures.VERIFIED)
                    ? this.renderBadge(2, o.Uzd, p.zr)
                    : t.has(d.GuildFeatures.PARTNERED)
                      ? this.renderBadge(0, (0, o.kHD)(c.A), p._I)
                      : null;
    }
}
let y = b;
