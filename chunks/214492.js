n.d(t, { fq: () => b }), n(47120);
var r = n(913527),
    i = n.n(r),
    l = n(442837),
    o = n(780384),
    a = n(410030),
    s = n(726542),
    c = n(835473),
    u = n(594190),
    d = n(553795),
    p = n(77498),
    h = n(283595),
    f = n(823379),
    g = n(981631),
    m = n(701488);
function b() {
    let { assets: e, count: t } = (function () {
            let e = (0, l.Wu)([u.ZP, p.Z, h.Z], () =>
                    u.ZP.getGamesSeen(!1)
                        .filter((e) => !!(0, u.FZ)(e, [u.ZP, p.Z, h.Z]).detectable && null != e.lastLaunched && 30 >= i()().diff(e.lastLaunched, 'days'))
                        .map((e) => e.id)
                ),
                t = e.length,
                n = e.filter(f.lm).slice(0, t > 4 ? 3 : 4);
            return {
                assets: (0, c.Z)(n)
                    .filter(f.lm)
                    .map((e) => {
                        var t;
                        return {
                            src: null !== (t = e.getIconURL(m.Si.LARGE)) && void 0 !== t ? t : '',
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
                assets: e
                    .filter((e) => g.vbS.has(e.type) && e.showActivity)
                    .slice(0, n > 4 ? 3 : 4)
                    .map((e) => {
                        let n = s.Z.get(e.type);
                        return {
                            src: (0, o.wj)(t) ? n.icon.darkSVG : n.icon.lightSVG,
                            alt: n.name
                        };
                    }),
                count: n
            };
        })(),
        b = t + r;
    return {
        assets: [...e, ...n].slice(0, b > 4 ? 3 : 4),
        count: b
    };
}
