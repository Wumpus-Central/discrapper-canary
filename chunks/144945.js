n.d(t, {
    A: () => A,
}),
    n(896048);
var i = n(627968),
    s = n(64700),
    r = n(989349),
    l = n.n(r),
    a = n(311907),
    o = n(990078),
    c = n(397927),
    d = n(943330),
    u = n(101392),
    h = n(203982),
    g = n(927813),
    m = n(960850),
    p = n(652215),
    f = n(985018),
    v = n(244317);

function b(e) {
    let t,
        { isEnabled: n, rateLimitPerUser: r, isBypassSlowmode: a, slowmodeCooldownGuess: u } = e,
        [m, b] = s.useState(!1);
    if (
        (s.useEffect(() => {
            function e() {
                b(!0),
                    setTimeout(() => {
                        b(!1);
                    }, 1e3);
            }
            return (
                h._.subscribe(p.jej.EMPHASIZE_SLOWMODE_COOLDOWN, e),
                () => {
                    h._.unsubscribe(p.jej.EMPHASIZE_SLOWMODE_COOLDOWN, e);
                }
            );
        }, []),
        !n)
    )
        return null;
    let A = (0, d.L)(r);
    if (!a && u > 0) {
        let e = l().duration(u);
        if (u > g.A.Millis.HOUR) {
            let n = "".concat(e.minutes()).padStart(2, "0"),
                i = "".concat(e.seconds()).padStart(2, "0");
            t = "".concat(e.hours(), ":").concat(n, ":").concat(i);
        } else {
            let n = "".concat(e.seconds()).padStart(2, "0");
            t = "".concat(e.minutes(), ":").concat(n);
        }
    } else t = a ? f.intl.string(f.t["8+NidX"]) : f.intl.string(f.t.Icu3bf);
    let O = (0, i.jsxs)(c.Text, {
        className: v.rk,
        variant: "text-xs/medium",
        color: m ? "text-feedback-critical" : "text-muted",
        tabularNumbers: !0,
        children: [
            (0, i.jsx)(c.xbX, {
                size: "xxs",
                color: "currentColor",
                className: v.Eq,
            }),
            t,
        ],
    });
    return (0, i.jsx)(o.m, {
        text: A,
        children: (0, i.jsx)("div", {
            className: v.ns,
            children: O,
        }),
    });
}

function A(e) {
    let { channel: t, isThreadCreation: n = !1 } = e,
        s = (0, a.bG)([u.A], () => u.A.getSlowmodeCooldownGuess(t.id, n ? u.R.CreateThread : u.R.SendMessage)),
        r = (0, m._)(t, n ? u.R.CreateThread : u.R.SendMessage),
        { rateLimitPerUser: l } = t;
    return (0, i.jsx)(b, {
        isEnabled: l > 0,
        rateLimitPerUser: l,
        isBypassSlowmode: r,
        slowmodeCooldownGuess: s,
    });
}
