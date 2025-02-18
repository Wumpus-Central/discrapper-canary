n.d(t, { fq: () => m }), n(47120);
var i = n(913527),
    l = n.n(i),
    r = n(442837),
    o = n(780384),
    a = n(410030),
    s = n(726542),
    c = n(835473),
    d = n(594190),
    u = n(553795),
    h = n(823379),
    p = n(701488);
function m() {
    let { assets: e, count: t } = (function () {
            let e = (0, r.Wu)([d.ZP], () =>
                    d.ZP.getGamesSeen(!1)
                        .filter((e) => null != e.lastLaunched && 30 >= l()().diff(e.lastLaunched, 'days'))
                        .map((e) => e.id)
                ),
                t = e.length,
                n = e.filter(h.lm).slice(0, t > 4 ? 3 : 4);
            return {
                assets: (0, c.Z)(n)
                    .filter(h.lm)
                    .map((e) => {
                        var t;
                        return {
                            src: null !== (t = e.getIconURL(p.Si.LARGE)) && void 0 !== t ? t : '',
                            alt: e.name
                        };
                    }),
                count: t
            };
        })(),
        { assets: n, count: i } = (function () {
            let e = (0, r.e7)([u.Z], () => u.Z.getAccounts()),
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
        m = t + i;
    return {
        assets: [...e, ...n].slice(0, m > 4 ? 3 : 4),
        count: m
    };
}
