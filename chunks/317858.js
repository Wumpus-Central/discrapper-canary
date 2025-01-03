n.d(t, {
    Z: function () {
        return C;
    }
}),
    n(47120);
var i = n(192379),
    r = n(166516),
    l = n.n(r),
    a = n(525654),
    s = n.n(a),
    o = n(442837),
    c = n(888369),
    d = n(292959),
    u = n(699516),
    h = n(340895),
    m = n(358085),
    p = n(998502),
    g = n(252618),
    f = n(981631),
    _ = n(388032);
let E = new Set(['Blink', 'Gecko', 'WebKit']),
    I = f.dG4;
if (m.isPlatformEmbedded) I = (e) => p.ZP.setBadge(e);
else if (E.has(s().layout)) {
    let e = new (l())({ animation: 'none' });
    I = (t) => {
        try {
            (0, g.PR)(t), e.badge(-1 === t ? '\u2022' : t);
        } catch (e) {}
    };
}
function C() {
    let e = (0, o.e7)([h.Z], () => h.Z.hasIncomingCalls()),
        t = (0, o.e7)([c.default, u.Z, d.Z], () => {
            let e = c.default.getTotalMentionCount(),
                t = u.Z.getPendingCount(),
                n = c.default.hasAnyUnread(),
                i = d.Z.getDisableUnreadBadge(),
                r = e + t;
            return 0 === r && n && !i && (r = -1), r;
        });
    i.useEffect(() => {
        if (!e) return;
        let t = p.ZP.bounceDock('critical'),
            n = (0, g.EM)({
                messages: [_.intl.string(_.t['fk1/bW'])],
                count: 50
            });
        return () => {
            null == t || t(), n();
        };
    }, [e]),
        i.useEffect(() => {
            I(t);
        }, [t]),
        i.useEffect(() => () => I(0), []);
}
