n.d(t, { Z: () => h }), n(47120), n(653041);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    l = n.n(a),
    o = n(758713),
    s = n(657707),
    c = n(481060),
    d = n(388032),
    u = n(561526);
let m = [o.z.DESKTOP, o.z.XBOX, o.z.PLAYSTATION, o.z.NINTENDO];
function p(e) {
    let { platform: t, ...n } = e;
    switch (t) {
        case o.z.DESKTOP:
            return (0, i.jsx)(s.pzj, {
                size: 'xs',
                ...n
            });
        case o.z.XBOX:
            return (0, i.jsx)(s.Mko, {
                size: 'xs',
                ...n
            });
        case o.z.PLAYSTATION:
            return (0, i.jsx)(s.Tsp, {
                size: 'xs',
                ...n
            });
        case o.z.NINTENDO:
            return (0, i.jsx)(s.aPH, {
                size: 'xs',
                ...n
            });
        default:
            return null;
    }
}
function g(e) {
    let { platforms: t } = e;
    return (0, i.jsx)('div', {
        className: l()(u.row, u.gapSm),
        style: { alignItems: 'center' },
        children: t.map((e) =>
            (0, i.jsx)(
                c.ua7,
                {
                    text: (function (e) {
                        switch (e) {
                            case o.z.DESKTOP:
                                return d.intl.string(d.t.KT6uCA);
                            case o.z.XBOX:
                                return d.intl.string(d.t.DDWUJi);
                            case o.z.PLAYSTATION:
                                return d.intl.string(d.t.fzMz2t);
                            case o.z.NINTENDO:
                                return d.intl.string(d.t.AMW8jY);
                            default:
                                return null;
                        }
                    })(e),
                    children: (t) =>
                        (0, i.jsx)(p, {
                            ...t,
                            platform: e
                        })
                },
                e
            )
        )
    });
}
function h(e) {
    let { detectedGame: t, className: n } = e,
        a = r.useMemo(() => {
            let e = new Set(t.platforms),
                n = [...e];
            return !e.has(o.z.DESKTOP) && (e.has(o.z.MACOS) || e.has(o.z.LINUX)) && n.push(o.z.DESKTOP), n.filter((e) => m.includes(e));
        }, [t.platforms]);
    return 0 === a.length
        ? null
        : (0, i.jsx)('div', {
              className: l()(u.column, u.gapLg, n),
              children: a.length > 0 && (0, i.jsx)(g, { platforms: a })
          });
}
