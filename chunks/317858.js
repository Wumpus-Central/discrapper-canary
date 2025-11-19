n.d(t, { Z: () => v }), n(388685);
var r = n(473749),
    i = n(166516),
    l = n.n(i),
    a = n(525654),
    s = n.n(a),
    o = n(442837),
    c = n(91896),
    u = n(849862),
    d = n(888369),
    p = n(292959),
    f = n(699516),
    h = n(340895),
    g = n(358085),
    m = n(998502),
    _ = n(252618),
    b = n(981631),
    E = n(388032);
let O = new Set(["Blink", "Gecko", "WebKit"]),
    y = b.dG4;
if (g.isPlatformEmbedded) y = (e) => m.ZP.setBadge(e);
else if (O.has(s().layout)) {
    let e = new (l())({ animation: "none" });
    y = (t) => {
        try {
            (0, _.PR)(t), e.badge(-1 === t ? "\u2022" : t);
        } catch (e) {}
    };
}
function v() {
    let e = (0, o.e7)([h.Z], () => h.Z.hasIncomingCalls()),
        t = (0, o.e7)([d.default, f.Z, p.Z, c.Z], () => {
            let e = d.default.getTotalMentionCount(),
                t = (0, u.m$)([f.Z, c.Z]),
                n = d.default.hasAnyUnread(),
                r = p.Z.getDisableUnreadBadge(),
                i = e + t;
            return 0 === i && n && !r && (i = -1), i;
        });
    r.useEffect(() => {
        if (!e) return;
        let t = m.ZP.bounceDock("critical"),
            n = (0, _.EM)({
                messages: [E.intl.string(E.t["fk1/bX"])],
                count: 50,
            });
        return () => {
            null == t || t(), n();
        };
    }, [e]),
        r.useEffect(() => {
            y(t);
        }, [t]),
        r.useEffect(() => () => y(0), []);
}
