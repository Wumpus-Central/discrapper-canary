n.d(t, {
    fq: () => C,
    hs: () => _,
    oF: () => E
}),
    n(47120);
var l = n(442837),
    i = n(780384),
    a = n(410030),
    r = n(726542),
    s = n(835473),
    o = n(594190),
    u = n(553795),
    d = n(823379),
    c = n(701488);
function E() {
    let e = (0, l.Wu)([o.ZP], () => o.ZP.getGamesSeen(!1).map((e) => e.id)),
        t = e.length,
        n = e.filter(d.lm).slice(0, t > 4 ? 3 : 4);
    return {
        assets: (0, s.Z)(n)
            .filter(d.lm)
            .map((e) => {
                var t;
                return {
                    src: null !== (t = e.getIconURL(c.Si.LARGE)) && void 0 !== t ? t : '',
                    alt: e.name
                };
            }),
        count: t
    };
}
function _() {
    let e = (0, l.e7)([u.Z], () => u.Z.getAccounts()),
        t = (0, a.ZP)(),
        n = e.length;
    return {
        assets: e.slice(0, n > 4 ? 3 : 4).map((e) => {
            let n = r.Z.get(e.type);
            return {
                src: (0, i.wj)(t) ? n.icon.darkSVG : n.icon.lightSVG,
                alt: n.name
            };
        }),
        count: n
    };
}
function C() {
    let { assets: e, count: t } = E(),
        { assets: n, count: l } = _(),
        i = t + l;
    return {
        assets: [...e, ...n].slice(0, i > 4 ? 3 : 4),
        count: i
    };
}
