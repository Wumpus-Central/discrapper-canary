n.d(t, {
    fq: () => f,
    hs: () => g,
    oF: () => h
}),
    n(47120);
var l = n(442837),
    i = n(780384),
    r = n(410030),
    a = n(726542),
    o = n(835473),
    s = n(594190),
    d = n(553795),
    u = n(823379),
    c = n(701488);
function h() {
    let e = (0, l.Wu)([s.ZP], () => s.ZP.getGamesSeen(!1).map((e) => e.id)),
        t = e.length,
        n = e.filter(u.lm).slice(0, t > 4 ? 3 : 4);
    return {
        assets: (0, o.Z)(n)
            .filter(u.lm)
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
function g() {
    let e = (0, l.e7)([d.Z], () => d.Z.getAccounts()),
        t = (0, r.ZP)(),
        n = e.length;
    return {
        assets: e.slice(0, n > 4 ? 3 : 4).map((e) => {
            let n = a.Z.get(e.type);
            return {
                src: (0, i.wj)(t) ? n.icon.darkSVG : n.icon.lightSVG,
                alt: n.name
            };
        }),
        count: n
    };
}
function f() {
    let { assets: e, count: t } = h(),
        { assets: n, count: l } = g(),
        i = t + l;
    return {
        assets: [...e, ...n].slice(0, i > 4 ? 3 : 4),
        count: i
    };
}
