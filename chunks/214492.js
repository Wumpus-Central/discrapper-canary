n.d(t, {
    hs: () => _,
    oF: () => b
}),
    n(388685);
var i = n(913527),
    r = n.n(i),
    s = n(442837),
    l = n(780384),
    a = n(410030),
    o = n(726542),
    c = n(835473),
    d = n(594190),
    u = n(553795),
    m = n(77498),
    p = n(283595),
    g = n(823379),
    h = n(981631),
    f = n(701488);
function b() {
    let e = (0, s.Wu)([d.ZP, m.Z, p.Z], () =>
            d.ZP.getGamesSeen(!1)
                .filter((e) => !!(0, d.FZ)(e, [d.ZP, m.Z, p.Z]).detectable && null != e.lastLaunched && 30 >= r()().diff(e.lastLaunched, 'days'))
                .map((e) => {
                    var t, n;
                    return null != (n = e.id) ? n : null == (t = m.Z.getGameByGameData(e)) ? void 0 : t.id;
                })
        ),
        t = e.length,
        n = e.filter(g.lm).slice(0, t > 4 ? 3 : 4);
    return {
        assets: (0, c.Z)(n)
            .filter(g.lm)
            .map((e) => {
                var t;
                return {
                    src: null != (t = e.getIconURL(f.Si.LARGE)) ? t : '',
                    alt: e.name
                };
            }),
        count: t
    };
}
function _() {
    let e = (0, s.e7)([u.Z], () => u.Z.getAccounts()),
        t = (0, a.ZP)(),
        n = e.length;
    return {
        assets: e
            .filter((e) => h.vbS.has(e.type) && e.showActivity)
            .slice(0, n > 4 ? 3 : 4)
            .map((e) => {
                let n = o.Z.get(e.type);
                return {
                    src: (0, l.wj)(t) ? n.icon.darkSVG : n.icon.lightSVG,
                    alt: n.name
                };
            }),
        count: n
    };
}
