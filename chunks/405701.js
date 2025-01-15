r.d(n, {
    Z: function () {
        return T;
    }
});
var i = r(47120);
var a = r(200651),
    s = r(192379),
    o = r(913527),
    l = r.n(o),
    u = r(442837),
    c = r(481060),
    d = r(11769),
    f = r(540059),
    _ = r(496675),
    h = r(300429),
    p = r(585483),
    m = r(70956),
    g = r(981631),
    E = r(388032),
    v = r(533254);
function I(e) {
    let n,
        { isEnabled: r, rateLimitPerUser: i, isBypassSlowmode: o, slowmodeCooldownGuess: u, isRefreshChatInputEnabled: f } = e,
        [_, h] = s.useState(!1);
    if (
        (s.useEffect(() => {
            function e() {
                h(!0),
                    setTimeout(() => {
                        h(!1);
                    }, 1000);
            }
            return (
                p.S.subscribe(g.CkL.EMPHASIZE_SLOWMODE_COOLDOWN, e),
                () => {
                    p.S.unsubscribe(g.CkL.EMPHASIZE_SLOWMODE_COOLDOWN, e);
                }
            );
        }, []),
        !r)
    )
        return null;
    let I = (0, d.k)(i);
    if (!o && u > 0) {
        let e = l().duration(u);
        if (u > m.Z.Millis.HOUR) {
            let r = ''.concat(e.minutes()).padStart(2, '0'),
                i = ''.concat(e.seconds()).padStart(2, '0');
            n = ''.concat(e.hours(), ':').concat(r, ':').concat(i);
        } else {
            let r = ''.concat(e.seconds()).padStart(2, '0');
            n = ''.concat(e.minutes(), ':').concat(r);
        }
    } else n = o ? (f ? E.intl.string(E.t['8+NidX']) : E.intl.string(E.t.SSzXvb)) : f ? '' : E.intl.string(E.t.Icu3bW);
    return (0, a.jsx)(c.Tooltip, {
        text: I,
        children: (e) =>
            (0, a.jsx)('div', {
                className: v.cooldownWrapper,
                ...e,
                children: (0, a.jsxs)(c.Text, {
                    className: v.cooldownText,
                    variant: f ? 'text-xs/medium' : 'text-sm/medium',
                    color: f ? (_ ? 'text-danger' : 'text-muted') : 'interactive-normal',
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
function T(e) {
    let { channel: n, isThreadCreation: r = !1 } = e,
        i = (0, u.e7)([h.Z], () => h.Z.getSlowmodeCooldownGuess(n.id, r ? h.S.CreateThread : h.S.SendMessage)),
        s = (0, u.e7)([_.Z], () => (r ? _.Z.can(g.Plq.MANAGE_THREADS, n) : _.Z.can(g.Plq.MANAGE_CHANNELS, n) || _.Z.can(g.Plq.MANAGE_MESSAGES, n))),
        { rateLimitPerUser: o } = n,
        l = o > 0,
        c = (0, f.R6)('SlowmodeIndicator');
    return (0, a.jsx)(I, {
        isEnabled: l,
        rateLimitPerUser: o,
        isBypassSlowmode: s,
        slowmodeCooldownGuess: i,
        isRefreshChatInputEnabled: c
    });
}
