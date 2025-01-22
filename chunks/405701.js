r.d(n, {
    Z: function () {
        return b;
    }
});
var i = r(47120);
var a = r(200651),
    o = r(192379),
    s = r(913527),
    l = r.n(s),
    u = r(442837),
    c = r(481060),
    d = r(11769),
    f = r(540059),
    p = r(496675),
    h = r(300429),
    _ = r(585483),
    m = r(70956),
    g = r(981631),
    E = r(388032),
    v = r(200263);
function y(e) {
    let n,
        { isEnabled: r, rateLimitPerUser: i, isBypassSlowmode: s, slowmodeCooldownGuess: u, isRefreshChatInputEnabled: f, isRefreshEnabled: p } = e,
        [h, y] = o.useState(!1);
    if (
        (o.useEffect(() => {
            function e() {
                y(!0),
                    setTimeout(() => {
                        y(!1);
                    }, 1000);
            }
            return (
                _.S.subscribe(g.CkL.EMPHASIZE_SLOWMODE_COOLDOWN, e),
                () => {
                    _.S.unsubscribe(g.CkL.EMPHASIZE_SLOWMODE_COOLDOWN, e);
                }
            );
        }, []),
        !r)
    )
        return null;
    let b = (0, d.k)(i);
    if (!s && u > 0) {
        let e = l().duration(u);
        if (u > m.Z.Millis.HOUR) {
            let r = ''.concat(e.minutes()).padStart(2, '0'),
                i = ''.concat(e.seconds()).padStart(2, '0');
            n = ''.concat(e.hours(), ':').concat(r, ':').concat(i);
        } else {
            let r = ''.concat(e.seconds()).padStart(2, '0');
            n = ''.concat(e.minutes(), ':').concat(r);
        }
    } else n = s ? (f ? E.intl.string(E.t['8+NidX']) : E.intl.string(E.t.SSzXvb)) : f ? '' : E.intl.string(E.t.Icu3bW);
    return (0, a.jsx)(c.Tooltip, {
        text: b,
        children: (e) =>
            (0, a.jsx)('div', {
                className: v.cooldownWrapper,
                ...e,
                children: (0, a.jsxs)(c.Text, {
                    className: v.cooldownText,
                    variant: f ? 'text-xs/medium' : 'text-sm/medium',
                    color: p ? (h ? 'text-danger' : 'text-muted') : 'interactive-normal',
                    tabularNumbers: !0,
                    children: [
                        n,
                        (0, a.jsx)(c.TimerIcon, {
                            size: 'xs',
                            color: 'currentColor',
                            className: v.slowModeIcon
                        })
                    ]
                })
            })
    });
}
function b(e) {
    let { channel: n, isThreadCreation: r = !1 } = e,
        i = (0, u.e7)([h.Z], () => h.Z.getSlowmodeCooldownGuess(n.id, r ? h.S.CreateThread : h.S.SendMessage)),
        o = (0, u.e7)([p.Z], () => (r ? p.Z.can(g.Plq.MANAGE_THREADS, n) : p.Z.can(g.Plq.MANAGE_CHANNELS, n) || p.Z.can(g.Plq.MANAGE_MESSAGES, n))),
        { rateLimitPerUser: s } = n,
        l = s > 0,
        c = (0, f.R6)('SlowmodeIndicator'),
        d = (0, f.Q3)('SlowmodeIndicator');
    return (0, a.jsx)(y, {
        isEnabled: l,
        rateLimitPerUser: s,
        isBypassSlowmode: o,
        slowmodeCooldownGuess: i,
        isRefreshChatInputEnabled: c,
        isRefreshEnabled: d
    });
}
