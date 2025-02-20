n.d(t, { fq: () => f }), n(47120);
var r = n(913527),
    i = n.n(r),
    l = n(442837),
    o = n(780384),
    a = n(410030),
    s = n(726542),
    c = n(835473),
    u = n(594190),
    d = n(553795),
    p = n(823379),
    h = n(701488);
function f() {
    let { assets: e, count: t } = (function () {
            let e = (0, l.Wu)([u.ZP], () =>
                    u.ZP.getGamesSeen(!1)
                        .filter((e) => null != e.lastLaunched && 30 >= i()().diff(e.lastLaunched, 'days'))
                        .map((e) => e.id)
                ),
                t = e.length,
                n = e.filter(p.lm).slice(0, t > 4 ? 3 : 4);
            return {
                assets: (0, c.Z)(n)
                    .filter(p.lm)
                    .map((e) => {
                        var t;
                        return {
                            src: null !== (t = e.getIconURL(h.Si.LARGE)) && void 0 !== t ? t : '',
                            alt: e.name
                        };
                    }),
                count: t
            };
        })(),
        { assets: n, count: r } = (function () {
            let e = (0, l.e7)([d.Z], () => d.Z.getAccounts()),
                t = (0, a.ZP)(),
                n = e.length;
            return {
                assets: e.slice(0, n > 4 ? 3 : 4).map((e) => {
                    let n = s.Z.get(e.type);
                    return {
                        src: (0, o.wj)(t) ? n.icon.darkSVG : n.icon.lightSVG,
                        alt: n.name
                    };
                }),
                count: n
            };
        })(),
        f = t + r;
    return {
        assets: [...e, ...n].slice(0, f > 4 ? 3 : 4),
        count: f
    };
}
