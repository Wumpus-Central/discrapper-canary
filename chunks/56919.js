t.d(n, { m: () => m, v: () => f });
var l = t(582128),
    i = t(554146),
    a = t(826673),
    r = t(263775),
    s = t(542744),
    d = t(885902),
    u = t(677166),
    c = t(410310),
    o = t(84877);
function h(e, n) {
    let t = (0, d.F)(e, n),
        l = (0, u.Hg)(null != t ? e?.guild_id : null, n),
        i = (0, u.ao)(n),
        { locked: a, optedOut: r } = (0, c.p)(),
        s = (0, o.Z)(e);
    return null != t && s && l && i && !a && !0;
}
function f(e, n) {
    let t = h(e, n),
        a = (0, d.F)(e, n),
        [u, c] = (0, r.kn)(t ? [i.M.PINOT_MEMBER_COACHMARK] : [], { bypassAutoDismiss: !0 }),
        o = l.useCallback(
            (e) => {
                (c(e), null != a && (0, s.G)(a));
            },
            [c, a],
        );
    return { visible: u === i.M.PINOT_MEMBER_COACHMARK, markAsDismissed: o };
}
function m(e, n) {
    let t = h(e, n),
        l = (0, a.HX)(i.M.PINOT_MEMBER_COACHMARK);
    return t && !l;
}
