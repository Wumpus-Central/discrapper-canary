n.d(t, { Z: () => v }), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(913527),
    s = n.n(a),
    o = n(442837),
    l = n(481060),
    u = n(11769),
    c = n(540059),
    d = n(496675),
    f = n(300429),
    _ = n(585483),
    p = n(70956),
    h = n(981631),
    m = n(388032),
    g = n(2462);
function E(e) {
    let t,
        { isEnabled: n, rateLimitPerUser: a, isBypassSlowmode: o, slowmodeCooldownGuess: c, isRefreshChatInputEnabled: d, isRefreshEnabled: f } = e,
        [E, v] = r.useState(!1);
    if (
        (r.useEffect(() => {
            function e() {
                v(!0),
                    setTimeout(() => {
                        v(!1);
                    }, 1000);
            }
            return (
                _.S.subscribe(h.CkL.EMPHASIZE_SLOWMODE_COOLDOWN, e),
                () => {
                    _.S.unsubscribe(h.CkL.EMPHASIZE_SLOWMODE_COOLDOWN, e);
                }
            );
        }, []),
        !n)
    )
        return null;
    let y = (0, u.k)(a);
    if (!o && c > 0) {
        let e = s().duration(c);
        if (c > p.Z.Millis.HOUR) {
            let n = ''.concat(e.minutes()).padStart(2, '0'),
                i = ''.concat(e.seconds()).padStart(2, '0');
            t = ''.concat(e.hours(), ':').concat(n, ':').concat(i);
        } else {
            let n = ''.concat(e.seconds()).padStart(2, '0');
            t = ''.concat(e.minutes(), ':').concat(n);
        }
    } else t = o ? (d ? m.intl.string(m.t['8+NidX']) : m.intl.string(m.t.SSzXvb)) : d ? '' : m.intl.string(m.t.Icu3bW);
    return (0, i.jsx)(l.ua7, {
        text: y,
        children: (e) =>
            (0, i.jsx)('div', {
                className: g.cooldownWrapper,
                ...e,
                children: (0, i.jsxs)(l.Text, {
                    className: g.cooldownText,
                    variant: d ? 'text-xs/medium' : 'text-sm/medium',
                    color: f ? (E ? 'text-danger' : 'text-muted') : 'interactive-normal',
                    tabularNumbers: !0,
                    children: [
                        t,
                        (0, i.jsx)(l.ANZ, {
                            size: 'xs',
                            color: 'currentColor',
                            className: g.slowModeIcon
                        })
                    ]
                })
            })
    });
}
function v(e) {
    let { channel: t, isThreadCreation: n = !1 } = e,
        r = (0, o.e7)([f.Z], () => f.Z.getSlowmodeCooldownGuess(t.id, n ? f.S.CreateThread : f.S.SendMessage)),
        a = (0, o.e7)([d.Z], () => (n ? d.Z.can(h.Plq.MANAGE_THREADS, t) : d.Z.can(h.Plq.MANAGE_CHANNELS, t) || d.Z.can(h.Plq.MANAGE_MESSAGES, t))),
        { rateLimitPerUser: s } = t,
        l = s > 0,
        u = (0, c.R6)('SlowmodeIndicator'),
        _ = (0, c.Q3)('SlowmodeIndicator');
    return (0, i.jsx)(E, {
        isEnabled: l,
        rateLimitPerUser: s,
        isBypassSlowmode: a,
        slowmodeCooldownGuess: r,
        isRefreshChatInputEnabled: u,
        isRefreshEnabled: _
    });
}
