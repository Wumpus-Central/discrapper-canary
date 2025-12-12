n.d(t, { Z: () => y }), n(388685);
var i = n(54381),
    r = n(473749),
    o = n(913527),
    l = n.n(o),
    s = n(442837),
    a = n(28664),
    c = n(481060),
    u = n(11769),
    d = n(300429),
    p = n(585483),
    f = n(70956),
    O = n(923664),
    b = n(981631),
    h = n(388032),
    m = n(45038);
function g(e) {
    let t,
        { isEnabled: n, rateLimitPerUser: o, isBypassSlowmode: s, slowmodeCooldownGuess: d } = e,
        [O, g] = r.useState(!1);
    if (
        (r.useEffect(() => {
            function e() {
                g(!0),
                    setTimeout(() => {
                        g(!1);
                    }, 1000);
            }
            return (
                p.S.subscribe(b.CkL.EMPHASIZE_SLOWMODE_COOLDOWN, e),
                () => {
                    p.S.unsubscribe(b.CkL.EMPHASIZE_SLOWMODE_COOLDOWN, e);
                }
            );
        }, []),
        !n)
    )
        return null;
    let y = (0, u.k)(o);
    if (!s && d > 0) {
        let e = l().duration(d);
        if (d > f.Z.Millis.HOUR) {
            let n = "".concat(e.minutes()).padStart(2, "0"),
                i = "".concat(e.seconds()).padStart(2, "0");
            t = "".concat(e.hours(), ":").concat(n, ":").concat(i);
        } else {
            let n = "".concat(e.seconds()).padStart(2, "0");
            t = "".concat(e.minutes(), ":").concat(n);
        }
    } else t = s ? h.intl.string(h.t["8+NidX"]) : h.intl.string(h.t.Icu3bf);
    let v = (0, i.jsxs)(c.Text, {
        className: m.cooldownText,
        variant: "text-xs/medium",
        color: O ? "text-feedback-critical" : "text-muted",
        tabularNumbers: !0,
        children: [
            (0, i.jsx)(c.ANZ, {
                size: "xxs",
                color: "currentColor",
                className: m.slowModeIcon,
            }),
            t,
        ],
    });
    return (0, i.jsx)(a.u, {
        text: y,
        children: (0, i.jsx)("div", {
            className: m.cooldownWrapper,
            children: v,
        }),
    });
}
function y(e) {
    let { channel: t, isThreadCreation: n = !1 } = e,
        r = (0, s.e7)([d.Z], () => d.Z.getSlowmodeCooldownGuess(t.id, n ? d.S.CreateThread : d.S.SendMessage)),
        o = (0, O.w)(t, n ? d.S.CreateThread : d.S.SendMessage),
        { rateLimitPerUser: l } = t;
    return (0, i.jsx)(g, {
        isEnabled: l > 0,
        rateLimitPerUser: l,
        isBypassSlowmode: o,
        slowmodeCooldownGuess: r,
    });
}
