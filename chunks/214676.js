s.d(a, { L: () => j, T: () => f });
var r = s(627968),
    t = s(64700),
    n = s(503698),
    o = s.n(n),
    l = s(397927),
    i = s(328006),
    d = s(334840),
    c = s(48736),
    _ = s(610042),
    m = s(29086),
    u = s(203656),
    x = s(525104),
    p = s(176201),
    g = s(178758),
    v = s(652215),
    h = s(743981),
    k = s(985018),
    C = s(429817),
    b = s(28578);
function f() {
    let [e, a] = t.useState(() => {
            let e = Math.floor(Math.random() * g.Oz.length);
            return { primary_color: g.Oz[e].start, secondary_color: g.Oz[e].end, tertiary_color: null };
        }),
        { gradientStyle: s, gradientClassname: n } = (0, l.v5K)({
            colorStrings: (0, p.K3)(e),
            roleStyle: "username",
            includeConvenienceGlow: !0,
            animateGradient: !0,
        });
    return (0, r.jsxs)("div", {
        className: C.kL,
        children: [
            (0, r.jsx)("div", {
                className: C.zC,
                children: (0, r.jsx)(m.V, {
                    avatar: i.A,
                    username: "Cherry",
                    usernameStyle: s,
                    usernameClassName: o()(n, b.q),
                    message: k.intl.string(k.t["6OSasb"]),
                }),
            }),
            (0, r.jsx)(c.default, {
                defaultColor: v.TGz,
                colors: g.Oz,
                value: e.primary_color,
                secondaryValue: e.secondary_color ?? void 0,
                onChange: (s) => a({ ...e, primary_color: s }),
                onChangeGradientColors: (e) => a({ primary_color: e[0], secondary_color: e[1], tertiary_color: null }),
                isGradient: !0,
            }),
        ],
    });
}
function j(e) {
    let { guildId: a } = e,
        [s, n] = t.useState(h.bl.HEART),
        o = (0, x.A)(),
        l = t.useMemo(() => ({ unlockedBadges: o.unlockedBadges.slice(0, 10), lockedBadges: [] }), [o]);
    return (0, r.jsxs)("div", {
        className: C.kL,
        children: [
            (0, r.jsx)("div", {
                className: C.zC,
                children: (0, r.jsx)(m.V, {
                    avatar: d.A,
                    username: "Roka",
                    usernameStyle: { color: "var(--brand-400)" },
                    message: k.intl.string(k.t["6OSasb"]),
                    decorations: (0, r.jsx)(u.M, { guildId: a, tag: "GGEZ", badge: s }),
                }),
            }),
            (0, r.jsx)(_.y, { selectedBadge: s, onBadgeClicked: n, badgeCollection: l }),
        ],
    });
}
