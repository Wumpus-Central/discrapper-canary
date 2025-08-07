n.d(t, {
    P9: () => _,
    Uf: () => P,
    b0: () => v,
    s_: () => x,
}),
    n(388685);
var r = n(255367),
    l = n(73800),
    o = n(392711),
    i = n(481060),
    a = n(493683),
    c = n(230711),
    s = n(410030),
    d = n(726542),
    u = n(5192),
    f = n(475413),
    p = n(981631),
    m = n(388032),
    g = n(771627);
let b = [
        () => m.intl.string(m.t.madJdH),
        () => m.intl.string(m.t.NYmfoK),
        () => m.intl.string(m.t.R2PaCg),
        () => m.intl.string(m.t.laSR8v),
        () => m.intl.string(m.t.DnsJEx),
    ],
    j = [
        () => m.intl.string(m.t.nFSbeH),
        () => m.intl.string(m.t.gTcxOz),
        () => m.intl.string(m.t["8T0wYm"]),
        () => m.intl.string(m.t.BIHl1t),
        () => m.intl.string(m.t.jhBm09),
    ],
    h = [
        () => m.intl.string(m.t.AyMGXF),
        () => m.intl.string(m.t.aAFW7e),
        (e) => m.intl.formatToPlainString(m.t.h2g0cH, { name: e }),
        () => m.intl.string(m.t["rrYh5+"]),
        () => m.intl.string(m.t["HX3K+P"]),
        () => m.intl.string(m.t["/yW3aW"]),
        () => m.intl.string(m.t["PmL/v7"]),
        () => m.intl.string(m.t.IALa3t),
        () => m.intl.string(m.t.HRcTFB),
        () => m.intl.string(m.t.NuCqPj),
        () => m.intl.string(m.t["M1tw+/"]),
        () => m.intl.string(m.t.UBm1y8),
        () => m.intl.string(m.t.Cu95PT),
        () => m.intl.string(m.t["R/wFur"]),
        () => m.intl.string(m.t.HQPAVV),
        () => m.intl.string(m.t.YolGh4),
    ],
    y = [
        p.ABu.STEAM,
        p.ABu.PLAYSTATION,
        p.ABu.XBOX,
        p.ABu.TWITCH,
        p.ABu.BATTLENET,
        p.ABu.LEAGUE_OF_LEGENDS,
        p.ABu.EPIC_GAMES,
        p.ABu.RIOT_GAMES,
        p.ABu.ROBLOX,
        p.ABu.SPOTIFY,
        p.ABu.YOUTUBE,
        p.ABu.CRUNCHYROLL,
        p.ABu.BUNGIE,
    ];
function O(e) {
    let { heading: t, bodyText: n, children: l } = e;
    return (0, r.jsxs)("div", {
        className: g.empty,
        children: [
            (0, r.jsxs)("div", {
                className: g.textContainer,
                children: [
                    (0, r.jsx)(i.X6q, {
                        variant: "heading-md/medium",
                        color: "header-primary",
                        children: t,
                    }),
                    (0, r.jsx)(i.Text, {
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
function x() {
    let e = m.intl.string(m.t.RnD2yc),
        [t] = l.useState(() => {
            var e;
            return (null != (e = (0, o.sample)(b)) ? e : b[0])();
        });
    return (0, r.jsx)(O, {
        heading: e,
        bodyText: t,
    });
}
function v() {
    let e = m.intl.string(m.t.bFgqYG),
        [t] = l.useState(() => {
            var e;
            return (null != (e = (0, o.sample)(j)) ? e : j[0])();
        });
    return (0, r.jsx)(O, {
        heading: e,
        bodyText: t,
    });
}
function _(e) {
    let { user: t, guildId: n, channelId: c, onClose: s } = e,
        d = u.ZP.getName(n, c, t),
        p = m.intl.formatToPlainString(m.t.sjSitL, { name: d }),
        [b] = l.useState(() => {
            var e;
            return (null != (e = (0, o.sample)(h)) ? e : h[0])(d);
        }),
        j = l.useCallback(() => {
            a.Z.openPrivateChannel({ recipientIds: t.id }), null == s || s();
        }, [t.id, s]);
    return (0, r.jsx)(O, {
        heading: p,
        bodyText: b,
        children: (0, r.jsx)("div", {
            className: g.buttonRow,
            children: (0, r.jsx)(f.tG, {
                icon: i.kBi,
                text: m.intl.string(m.t["g33r/P"]),
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
        children: y.map((t, n) => {
            let l = d.Z.get(t);
            if (null == l) return null;
            let o = (0, i.wjy)(e) ? l.icon.darkPNG : l.icon.lightPNG;
            return (0, r.jsx)(
                "img",
                {
                    src: o,
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
            null == t || t(), c.Z.open(p.oAB.CONNECTIONS);
        }, [t]),
        o = l.useCallback(() => {
            null == t || t(), c.Z.open(p.oAB.CONTENT_AND_SOCIAL, "CONNECTED_GAMES");
        }, [t]);
    return (0, r.jsxs)(O, {
        heading: m.intl.string(m.t.VB6LWV),
        bodyText: m.intl.string(m.t.KpjsU1),
        children: [
            (0, r.jsx)(I, {}),
            (0, r.jsxs)("div", {
                className: g.buttonRow,
                children: [
                    (0, r.jsx)(f.tG, {
                        text: m.intl.string(m.t["/Hl24e"]),
                        onClick: n,
                        themeColor: "secondary",
                    }),
                    (0, r.jsx)(f.tG, {
                        text: m.intl.string(m.t.GTCx0t),
                        onClick: o,
                        themeColor: "secondary",
                    }),
                ],
            }),
        ],
    });
}
