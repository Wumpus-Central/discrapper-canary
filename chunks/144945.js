n.d(t, { A: () => C });
var i = n(627968),
    l = n(64700),
    a = n(989349),
    s = n.n(a),
    r = n(311907),
    o = n(990078),
    c = n(834730),
    d = n(291747),
    u = n(943330),
    h = n(101392),
    m = n(203982),
    A = n(927813),
    g = n(960850),
    _ = n(652215),
    p = n(985018),
    f = n(743586);
function E(e) {
    let t,
        { isEnabled: n, rateLimitPerUser: a, isBypassSlowmode: r, slowmodeCooldownGuess: h } = e,
        [g, E] = l.useState(!1);
    if (
        (l.useEffect(() => {
            function e() {
                E(!0),
                    setTimeout(() => {
                        E(!1);
                    }, 1e3);
            }
            return (
                m._.subscribe(_.jej.EMPHASIZE_SLOWMODE_COOLDOWN, e),
                () => {
                    m._.unsubscribe(_.jej.EMPHASIZE_SLOWMODE_COOLDOWN, e);
                }
            );
        }, []),
        !n)
    )
        return null;
    let C = (0, u.L)(a);
    if (!r && h > 0) {
        let e = s().duration(h);
        if (h > A.A.Millis.HOUR) {
            let n = `${e.minutes()}`.padStart(2, "0"),
                i = `${e.seconds()}`.padStart(2, "0");
            t = `${e.hours()}:${n}:${i}`;
        } else {
            let n = `${e.seconds()}`.padStart(2, "0");
            t = `${e.minutes()}:${n}`;
        }
    } else t = r ? p.intl.string(p.t["8+NidX"]) : p.intl.string(p.t.Icu3bf);
    let x = (0, i.jsxs)(c.E, {
        className: f.rk,
        variant: "text-xs/medium",
        color: g ? "text-feedback-critical" : "text-muted",
        tabularNumbers: !0,
        children: [(0, i.jsx)(d.x, { size: "xxs", color: "currentColor", className: f.Eq }), t],
    });
    return (0, i.jsx)(o.m, { text: C, children: (0, i.jsx)("div", { className: f.ns, children: x }) });
}
function C(e) {
    let { channel: t, isThreadCreation: n = !1 } = e,
        l = (0, r.bG)([h.A], () => h.A.getSlowmodeCooldownGuess(t.id, n ? h.R.CreateThread : h.R.SendMessage)),
        a = (0, g._)(t, n ? h.R.CreateThread : h.R.SendMessage),
        { rateLimitPerUser: s } = t;
    return (0, i.jsx)(E, { isEnabled: s > 0, rateLimitPerUser: s, isBypassSlowmode: a, slowmodeCooldownGuess: l });
}
