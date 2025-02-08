n.d(t, { Z: () => v }), n(47120);
var i = n(192379),
    l = n(166516),
    r = n.n(l),
    a = n(525654),
    s = n.n(a),
    o = n(442837),
    c = n(91896),
    d = n(849862),
    u = n(888369),
    h = n(292959),
    m = n(699516),
    p = n(340895),
    g = n(358085),
    _ = n(998502),
    f = n(252618),
    E = n(981631),
    I = n(388032);
let C = new Set(['Blink', 'Gecko', 'WebKit']),
    N = E.dG4;
if (g.isPlatformEmbedded) N = (e) => _.ZP.setBadge(e);
else if (C.has(s().layout)) {
    let e = new (r())({ animation: 'none' });
    N = (t) => {
        try {
            (0, f.PR)(t), e.badge(-1 === t ? '\u2022' : t);
        } catch (e) {}
    };
}
function v() {
    let e = (0, o.e7)([p.Z], () => p.Z.hasIncomingCalls()),
        t = (0, o.e7)([u.default, m.Z, h.Z, c.Z], () => {
            let e = u.default.getTotalMentionCount(),
                t = (0, d.m$)([m.Z, c.Z]),
                n = u.default.hasAnyUnread(),
                i = h.Z.getDisableUnreadBadge(),
                l = e + t;
            return 0 === l && n && !i && (l = -1), l;
        });
    i.useEffect(() => {
        if (!e) return;
        let t = _.ZP.bounceDock('critical'),
            n = (0, f.EM)({
                messages: [I.intl.string(I.t['fk1/bW'])],
                count: 50
            });
        return () => {
            null == t || t(), n();
        };
    }, [e]),
        i.useEffect(() => {
            N(t);
        }, [t]),
        i.useEffect(() => () => N(0), []);
}
