n.d(t, { Z: () => v }), n(47120);
var r = n(192379),
    i = n(166516),
    l = n.n(i),
    o = n(525654),
    a = n.n(o),
    s = n(442837),
    c = n(91896),
    u = n(849862),
    d = n(888369),
    p = n(292959),
    h = n(699516),
    g = n(340895),
    f = n(358085),
    m = n(998502),
    b = n(252618),
    _ = n(981631),
    E = n(388032);
let O = new Set(['Blink', 'Gecko', 'WebKit']),
    N = _.dG4;
if (f.isPlatformEmbedded) N = (e) => m.ZP.setBadge(e);
else if (O.has(a().layout)) {
    let e = new (l())({ animation: 'none' });
    N = (t) => {
        try {
            (0, b.PR)(t), e.badge(-1 === t ? '\u2022' : t);
        } catch (e) {}
    };
}
function v() {
    let e = (0, s.e7)([g.Z], () => g.Z.hasIncomingCalls()),
        t = (0, s.e7)([d.default, h.Z, p.Z, c.Z], () => {
            let e = d.default.getTotalMentionCount(),
                t = (0, u.m$)([h.Z, c.Z]),
                n = d.default.hasAnyUnread(),
                r = p.Z.getDisableUnreadBadge(),
                i = e + t;
            return 0 === i && n && !r && (i = -1), i;
        });
    r.useEffect(() => {
        if (!e) return;
        let t = m.ZP.bounceDock('critical'),
            n = (0, b.EM)({
                messages: [E.NW.string(E.t['fk1/bW'])],
                count: 50
            });
        return () => {
            null == t || t(), n();
        };
    }, [e]),
        r.useEffect(() => {
            N(t);
        }, [t]),
        r.useEffect(() => () => N(0), []);
}
