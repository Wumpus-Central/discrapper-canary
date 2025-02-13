n.d(t, {
    fq: () => I,
    hs: () => h,
    oF: () => _
}),
    n(47120);
var l = n(913527),
    i = n.n(l),
    a = n(442837),
    r = n(780384),
    s = n(410030),
    o = n(726542),
    u = n(835473),
    d = n(594190),
    c = n(553795),
    E = n(823379),
    C = n(701488);
function _() {
    let e = (0, a.Wu)([d.ZP], () =>
            d.ZP.getGamesSeen(!1)
                .filter((e) => null != e.lastLaunched && 30 >= i()().diff(e.lastLaunched, 'days'))
                .map((e) => e.id)
        ),
        t = e.length,
        n = e.filter(E.lm).slice(0, t > 4 ? 3 : 4);
    return {
        assets: (0, u.Z)(n)
            .filter(E.lm)
            .map((e) => {
                var t;
                return {
                    src: null !== (t = e.getIconURL(C.Si.LARGE)) && void 0 !== t ? t : '',
                    alt: e.name
                };
            }),
        count: t
    };
}
function h() {
    let e = (0, a.e7)([c.Z], () => c.Z.getAccounts()),
        t = (0, s.ZP)(),
        n = e.length;
    return {
        assets: e.slice(0, n > 4 ? 3 : 4).map((e) => {
            let n = o.Z.get(e.type);
            return {
                src: (0, r.wj)(t) ? n.icon.darkSVG : n.icon.lightSVG,
                alt: n.name
            };
        }),
        count: n
    };
}
function I() {
    let { assets: e, count: t } = _(),
        { assets: n, count: l } = h(),
        i = t + l;
    return {
        assets: [...e, ...n].slice(0, i > 4 ? 3 : 4),
        count: i
    };
}
