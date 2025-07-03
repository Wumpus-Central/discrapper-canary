n.d(t, { Z: () => g });
var i = n(255367);
n(73800);
var r = n(120356),
    s = n.n(r),
    l = n(793030),
    a = n(302221),
    o = n(553896),
    c = n(848572),
    d = n(787528),
    u = n(388032),
    m = n(536564);
let p = (e, t) =>
        (null == e ? void 0 : e.status) === c.Vq.EARNED
            ? u.intl.format(u.t.Hu4jfn, { date: null != t ? t : new Date() })
            : (null == e ? void 0 : e.status) === c.Vq.UPCOMING
              ? u.intl.format(u.t.E85flp, {
                    date: null != t ? t : new Date(),
                    days: e.daysLeft
                })
              : null,
    g = () => {
        var e;
        let t = (0, c.Rw)(),
            n = null != (e = (0, c.GG)()) ? e : new Date(),
            r = (0, d.u)(null == t ? void 0 : t.id);
        if (null == t || null == r) return null;
        let { id: g, nameUnformatted: h, tenureReqNumMonths: f, hasWideArt: b } = t,
            x = u.intl.string(h),
            _ = (0, o.q)(g, f),
            E = { '--custom-badge-glow-color': (0, a.rj)(t.glowColor, 0.5) };
        return (0, i.jsxs)('div', {
            className: m.container,
            style: E,
            children: [
                (0, i.jsx)('div', {}),
                ' ',
                (0, i.jsx)('img', {
                    src: r,
                    alt: x,
                    className: s()(m.badgeImage, {
                        [m.upcomingBadge]: t.status === c.Vq.UPCOMING,
                        [m.wide]: b
                    })
                }),
                (0, i.jsxs)('div', {
                    className: m.textColumn,
                    children: [
                        (0, i.jsx)(l.xv, {
                            variant: 'text-lg/semibold',
                            className: m.badgeText,
                            children: x
                        }),
                        (0, i.jsx)(l.xv, {
                            variant: 'text-md/normal',
                            className: m.badgeText,
                            children: _
                        }),
                        (0, i.jsx)(l.xv, {
                            variant: 'text-xs/normal',
                            children: p(t, n)
                        })
                    ]
                })
            ]
        });
    };
