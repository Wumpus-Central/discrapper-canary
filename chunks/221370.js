n.d(t, { Z: () => p }), n(47120), n(653041);
var r = n(200651),
    a = n(192379),
    i = n(120356),
    o = n.n(i),
    l = n(758713),
    s = n(657707),
    c = n(481060),
    d = n(388032),
    u = n(497329);
let m = [l.z.DESKTOP, l.z.XBOX, l.z.PLAYSTATION, l.z.NINTENDO];
function _(e) {
    let { platform: t, ...n } = e;
    switch (t) {
        case l.z.DESKTOP:
            return (0, r.jsx)(s.pzj, {
                size: 'xs',
                ...n
            });
        case l.z.XBOX:
            return (0, r.jsx)(s.Mko, {
                size: 'xs',
                ...n
            });
        case l.z.PLAYSTATION:
            return (0, r.jsx)(s.Tsp, {
                size: 'xs',
                ...n
            });
        case l.z.NINTENDO:
            return (0, r.jsx)(s.aPH, {
                size: 'xs',
                ...n
            });
        default:
            return null;
    }
}
function g(e) {
    let { platforms: t } = e;
    return (0, r.jsx)('div', {
        className: o()(u.row, u.gapSm),
        style: { alignItems: 'center' },
        children: t.map((e) =>
            (0, r.jsx)(
                c.ua7,
                {
                    text: (function (e) {
                        switch (e) {
                            case l.z.DESKTOP:
                                return d.intl.string(d.t.KT6uCA);
                            case l.z.XBOX:
                                return d.intl.string(d.t.DDWUJi);
                            case l.z.PLAYSTATION:
                                return d.intl.string(d.t.fzMz2t);
                            case l.z.NINTENDO:
                                return d.intl.string(d.t.AMW8jY);
                            default:
                                return null;
                        }
                    })(e),
                    children: (t) =>
                        (0, r.jsx)(_, {
                            ...t,
                            platform: e
                        })
                },
                e
            )
        )
    });
}
function p(e) {
    let { detectedGame: t, className: n } = e,
        i = a.useMemo(() => {
            let e = new Set(t.platforms),
                n = [...e];
            return !e.has(l.z.DESKTOP) && (e.has(l.z.MACOS) || e.has(l.z.LINUX)) && n.push(l.z.DESKTOP), n.filter((e) => m.includes(e));
        }, [t.platforms]);
    return 0 === i.length
        ? null
        : (0, r.jsx)('div', {
              className: o()(u.column, u.gapLg, n),
              children: i.length > 0 && (0, r.jsx)(g, { platforms: i })
          });
}
