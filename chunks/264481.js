n.d(t, {
    P9: () => _,
    Uf: () => P,
    b0: () => O,
    s_: () => v,
}),
    n(388685);
var r = n(255367),
    l = n(73800),
    i = n(392711),
    o = n(481060),
    a = n(493683),
    c = n(230711),
    s = n(410030),
    d = n(726542),
    u = n(5192),
    f = n(475413),
    m = n(981631),
    p = n(388032),
    g = n(771627);
let b = [
        () => p.intl.string(p.t.madJdH),
        () => p.intl.string(p.t.NYmfoK),
        () => p.intl.string(p.t.R2PaCg),
        () => p.intl.string(p.t.laSR8v),
        () => p.intl.string(p.t.DnsJEx),
    ],
    j = [
        () => p.intl.string(p.t.nFSbeH),
        () => p.intl.string(p.t.gTcxOz),
        () => p.intl.string(p.t["8T0wYm"]),
        () => p.intl.string(p.t.BIHl1t),
        () => p.intl.string(p.t.jhBm09),
    ],
    h = [
        () => p.intl.string(p.t.AyMGXF),
        () => p.intl.string(p.t.aAFW7e),
        (e) => p.intl.formatToPlainString(p.t.h2g0cH, { name: e }),
        () => p.intl.string(p.t["rrYh5+"]),
        () => p.intl.string(p.t["HX3K+P"]),
        () => p.intl.string(p.t["/yW3aW"]),
        () => p.intl.string(p.t["PmL/v7"]),
        () => p.intl.string(p.t.IALa3t),
        () => p.intl.string(p.t.HRcTFB),
        () => p.intl.string(p.t.NuCqPj),
        () => p.intl.string(p.t["M1tw+/"]),
        () => p.intl.string(p.t.UBm1y8),
        () => p.intl.string(p.t.Cu95PT),
        () => p.intl.string(p.t["R/wFur"]),
        () => p.intl.string(p.t.HQPAVV),
        () => p.intl.string(p.t.YolGh4),
    ],
    x = [
        m.ABu.STEAM,
        m.ABu.PLAYSTATION,
        m.ABu.XBOX,
        m.ABu.TWITCH,
        m.ABu.BATTLENET,
        m.ABu.LEAGUE_OF_LEGENDS,
        m.ABu.EPIC_GAMES,
        m.ABu.RIOT_GAMES,
        m.ABu.ROBLOX,
        m.ABu.SPOTIFY,
        m.ABu.YOUTUBE,
        m.ABu.CRUNCHYROLL,
        m.ABu.BUNGIE,
    ];
function y(e) {
    let { heading: t, bodyText: n, children: l } = e;
    return (0, r.jsxs)("div", {
        className: g.empty,
        children: [
            (0, r.jsxs)("div", {
                className: g.textContainer,
                children: [
                    (0, r.jsx)(o.X6q, {
                        variant: "heading-md/medium",
                        color: "header-primary",
                        children: t,
                    }),
                    (0, r.jsx)(o.Text, {
                        variant: "text-sm/normal",
                        color: "header-secondary",
                        children: n,
                    }),
                ],
            }),
            l,
        ],
    });
}
function v() {
    let e = p.intl.string(p.t.RnD2yc),
        [t] = l.useState(() => {
            var e;
            return (null != (e = (0, i.sample)(b)) ? e : b[0])();
        });
    return (0, r.jsx)(y, {
        heading: e,
        bodyText: t,
    });
}
function O() {
    let e = p.intl.string(p.t.bFgqYG),
        [t] = l.useState(() => {
            var e;
            return (null != (e = (0, i.sample)(j)) ? e : j[0])();
        });
    return (0, r.jsx)(y, {
        heading: e,
        bodyText: t,
    });
}
function _(e) {
    let { user: t, guildId: n, channelId: c, onClose: s } = e,
        d = u.ZP.getName(n, c, t),
        m = p.intl.formatToPlainString(p.t.sjSitL, { name: d }),
        [b] = l.useState(() => {
            var e;
            return (null != (e = (0, i.sample)(h)) ? e : h[0])(d);
        }),
        j = l.useCallback(() => {
            a.Z.openPrivateChannel({ recipientIds: t.id }), null == s || s();
        }, [t.id, s]);
    return (0, r.jsx)(y, {
        heading: m,
        bodyText: b,
        children: (0, r.jsx)("div", {
            className: g.buttonRow,
            children: (0, r.jsx)(f.tG, {
                icon: o.kBi,
                text: p.intl.string(p.t["g33r/P"]),
                onClick: j,
                themeColor: "secondary",
            }),
        }),
    });
}
function I() {
    let e = (0, s.ZP)();
    return (0, r.jsx)("div", {
        className: g.connectionPlatforms,
        children: x.map((t, n) => {
            let l = d.Z.get(t);
            if (null == l) return null;
            let i = (0, o.wjy)(e) ? l.icon.darkPNG : l.icon.lightPNG;
            return (0, r.jsx)(
                "img",
                {
                    src: i,
                    alt: l.name,
                    className: g.connectionIcon,
                },
                n,
            );
        }),
    });
}
function P(e) {
    let { onClose: t } = e,
        n = l.useCallback(() => {
            null == t || t(), c.Z.open(m.oAB.CONNECTIONS);
        }, [t]),
        i = l.useCallback(() => {
            null == t || t(), c.Z.open(m.oAB.CONTENT_AND_SOCIAL, "CONNECTED_GAMES");
        }, [t]);
    return (0, r.jsxs)(y, {
        heading: p.intl.string(p.t.VB6LWV),
        bodyText: p.intl.string(p.t.KpjsU1),
        children: [
            (0, r.jsx)(I, {}),
            (0, r.jsxs)("div", {
                className: g.buttonRow,
                children: [
                    (0, r.jsx)(f.tG, {
                        text: p.intl.string(p.t["/Hl24e"]),
                        onClick: n,
                        themeColor: "secondary",
                    }),
                    (0, r.jsx)(f.tG, {
                        text: p.intl.string(p.t.GTCx0t),
                        onClick: i,
                        themeColor: "secondary",
                    }),
                ],
            }),
        ],
    });
}
