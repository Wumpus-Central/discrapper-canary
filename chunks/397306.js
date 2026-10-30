t.d(n, { m: () => g, v: () => h });
var l = t(582128),
    i = t(554146),
    a = t(826673),
    r = t(131607),
    u = t(542744),
    s = t(885902),
    d = t(677166),
    c = t(410310),
    o = t(84877);
function f(e, n) {
    let t = (0, s.F)(e, n),
        l = (0, d.Hg)(null != t ? e?.guild_id : null, n),
        i = (0, d.ao)(n),
        { locked: a, optedOut: r } = (0, c.p)(),
        u = (0, o.Z)(e);
    return null != t && u && l && i && !a && !0;
}
function h(e, n) {
    let t = f(e, n),
        a = (0, s.F)(e, n),
        [d, c] = (0, r.kn)(t ? [i.M.PINOT_MEMBER_COACHMARK] : [], { bypassAutoDismiss: !0 }),
        o = l.useCallback(
            (e) => {
                (c(e), null != a && (0, u.G)(a));
            },
            [c, a],
        );
    return { visible: d === i.M.PINOT_MEMBER_COACHMARK, markAsDismissed: o };
}
function g(e, n) {
    let t = f(e, n),
        l = (0, a.HX)(i.M.PINOT_MEMBER_COACHMARK);
    return t && !l;
}
