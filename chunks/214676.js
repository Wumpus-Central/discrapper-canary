s.d(a, { L: () => j, T: () => k });
var r = s(627968),
    n = s(64700),
    l = s(503698),
    t = s.n(l),
    o = s(36075),
    i = s(328006),
    d = s(334840),
    c = s(48736),
    _ = s(610042),
    u = s(29086),
    m = s(203656),
    p = s(525104),
    g = s(176201),
    x = s(178758),
    h = s(652215),
    f = s(743981),
    b = s(985018),
    v = s(252137),
    C = s(979282);
function k() {
    let [e, a] = n.useState(() => {
            let e = Math.floor(Math.random() * x.Oz.length);
            return { primary_color: x.Oz[e].start, secondary_color: x.Oz[e].end, tertiary_color: null };
        }),
        { gradientStyle: s, gradientClassname: l } = (0, o.v5)({
            colorStrings: (0, g.K3)(e),
            roleStyle: "username",
            includeConvenienceGlow: !0,
            animateGradient: !0,
        });
    return (0, r.jsxs)("div", {
        className: v.kL,
        children: [
            (0, r.jsx)("div", {
                className: v.zC,
                children: (0, r.jsx)(u.V, {
                    avatar: i.A,
                    username: "Cherry",
                    usernameStyle: s,
                    usernameClassName: t()(l, C.q),
                    message: b.intl.string(b.t["6OSasb"]),
                }),
            }),
            (0, r.jsx)(c.default, {
                defaultColor: h.TGz,
                colors: x.Oz,
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
        [s, l] = n.useState(f.bl.HEART),
        t = (0, p.A)(),
        o = n.useMemo(() => ({ unlockedBadges: t.unlockedBadges.slice(0, 10), lockedBadges: [] }), [t]);
    return (0, r.jsxs)("div", {
        className: v.kL,
        children: [
            (0, r.jsx)("div", {
                className: v.zC,
                children: (0, r.jsx)(u.V, {
                    avatar: d.A,
                    username: "Roka",
                    usernameStyle: { color: "var(--brand-400)" },
                    message: b.intl.string(b.t["6OSasb"]),
                    decorations: (0, r.jsx)(m.M, { guildId: a, tag: "GGEZ", badge: s }),
                }),
            }),
            (0, r.jsx)(_.y, { selectedBadge: s, onBadgeClicked: l, badgeCollection: o }),
        ],
    });
}
