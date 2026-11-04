l.d(n, { m: () => g, v: () => f });
var t = l(582128),
    i = l(554146),
    a = l(826673),
    r = l(263775),
    u = l(542744),
    s = l(885902),
    d = l(677166),
    c = l(410310),
    o = l(84877);
function h(e, n) {
    let l = (0, s.F)(e, n),
        t = (0, d.Hg)(null != l ? e?.guild_id : null, n),
        i = (0, d.ao)(n),
        { locked: a, optedOut: r } = (0, c.p)(),
        u = (0, o.Z)(e);
    return null != l && u && t && i && !a && !0;
}
function f(e, n) {
    let l = h(e, n),
        a = (0, s.F)(e, n),
        [d, c] = (0, r.kn)(l ? [i.M.PINOT_MEMBER_COACHMARK] : [], { bypassAutoDismiss: !0 }),
        o = t.useCallback(
            (e) => {
                (c(e), null != a && (0, u.G)(a));
            },
            [c, a],
        );
    return { visible: d === i.M.PINOT_MEMBER_COACHMARK, markAsDismissed: o };
}
function g(e, n) {
    let l = h(e, n),
        t = (0, a.HX)(i.M.PINOT_MEMBER_COACHMARK);
    return l && !t;
}
