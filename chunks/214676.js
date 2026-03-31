s.d(t, { L: () => v, T: () => C });
var n = s(627968),
    a = s(64700),
    r = s(503698),
    l = s.n(r),
    i = s(397927),
    o = s(328006),
    c = s(334840),
    d = s(48736),
    u = s(610042),
    _ = s(29086),
    m = s(203656),
    x = s(525104),
    g = s(176201),
    b = s(178758),
    f = s(652215),
    p = s(743981),
    h = s(985018),
    j = s(558976),
    k = s(744295);
function C() {
    let [e, t] = a.useState(() => {
            let e = Math.floor(Math.random() * b.Oz.length);
            return { primary_color: b.Oz[e].start, secondary_color: b.Oz[e].end, tertiary_color: null };
        }),
        { gradientStyle: s, gradientClassname: r } = (0, i.v5K)({
            colorStrings: (0, g.K3)(e),
            roleStyle: "username",
            includeConvenienceGlow: !0,
            animateGradient: !0,
        });
    return (0, n.jsxs)("div", {
        className: j.kL,
        children: [
            (0, n.jsx)("div", {
                className: j.zC,
                children: (0, n.jsx)(_.V, {
                    avatar: o.A,
                    username: "Cherry",
                    usernameStyle: s,
                    usernameClassName: l()(r, k.q),
                    message: h.intl.string(h.t["6OSasb"]),
                }),
            }),
            (0, n.jsx)(d.default, {
                defaultColor: f.TGz,
                colors: b.Oz,
                value: e.primary_color,
                secondaryValue: e.secondary_color ?? void 0,
                onChange: (s) => t({ ...e, primary_color: s }),
                onChangeGradientColors: (e) => t({ primary_color: e[0], secondary_color: e[1], tertiary_color: null }),
                isGradient: !0,
            }),
        ],
    });
}
function v(e) {
    let { guildId: t } = e,
        [s, r] = a.useState(p.bl.HEART),
        l = (0, x.A)(),
        i = a.useMemo(() => ({ unlockedBadges: l.unlockedBadges.slice(0, 10), lockedBadges: [] }), [l]);
    return (0, n.jsxs)("div", {
        className: j.kL,
        children: [
            (0, n.jsx)("div", {
                className: j.zC,
                children: (0, n.jsx)(_.V, {
                    avatar: c.A,
                    username: "Roka",
                    usernameStyle: { color: "var(--brand-400)" },
                    message: h.intl.string(h.t["6OSasb"]),
                    decorations: (0, n.jsx)(m.M, { guildId: t, tag: "GGEZ", badge: s }),
                }),
            }),
            (0, n.jsx)(u.y, { selectedBadge: s, onBadgeClicked: r, badgeCollection: i }),
        ],
    });
}
