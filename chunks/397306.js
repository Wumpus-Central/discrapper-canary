t.d(n, { m: () => g, v: () => f });
var l = t(582128),
    i = t(554146),
    a = t(826673),
    r = t(131607),
    u = t(542744),
    s = t(885902),
    c = t(677166),
    d = t(410310),
    o = t(84877);
function h(e, n) {
    let t = (0, s.F)(e, n),
        l = (0, c.Hg)(null != t ? e?.guild_id : null, n),
        i = (0, c.ao)(n),
        { locked: a, optedOut: r } = (0, d.p)(),
        u = (0, o.Z)(e);
    return null != t && u && l && i && !a && !0;
}
function f(e, n) {
    let t = h(e, n),
        a = (0, s.F)(e, n),
        [c, d] = (0, r.kn)(t ? [i.M.PINOT_MEMBER_COACHMARK] : [], { bypassAutoDismiss: !0 }),
        o = l.useCallback(
            (e) => {
                (d(e), null != a && (0, u.G)(a));
            },
            [d, a],
        );
    return { visible: c === i.M.PINOT_MEMBER_COACHMARK, markAsDismissed: o };
}
function g(e, n) {
    let t = h(e, n),
        l = (0, a.HX)(i.M.PINOT_MEMBER_COACHMARK);
    return t && !l;
}
