t.d(n, {
    P9: () => I,
    Uf: () => P,
    b0: () => y,
    s_: () => _,
}),
    t(388685);
var r = t(951288),
    o = t(647438),
    l = t(392711),
    i = t(481060),
    c = t(493683),
    a = t(230711),
    s = t(410030),
    d = t(726542),
    u = t(5192),
    f = t(475413),
    m = t(981631),
    p = t(388032),
    b = t(839468);
let g = [
        () => p.intl.string(p.t.madJdH),
        () => p.intl.string(p.t.NYmfoK),
        () => p.intl.string(p.t.R2PaCg),
        () => p.intl.string(p.t.laSR8v),
        () => p.intl.string(p.t.DnsJEx),
    ],
    x = [
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
    j = [
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
function v(e) {
    let { heading: n, bodyText: t, children: o } = e;
    return (0, r.jsxs)("div", {
        className: b.empty,
        children: [
            (0, r.jsxs)("div", {
                className: b.textContainer,
                children: [
                    (0, r.jsx)(i.X6q, {
                        variant: "heading-md/medium",
                        color: "header-primary",
                        children: n,
                    }),
                    (0, r.jsx)(i.Text, {
                        variant: "text-sm/normal",
                        color: "header-secondary",
                        children: t,
                    }),
                ],
            }),
            o,
        ],
    });
}
function _() {
    let e = p.intl.string(p.t.RnD2yc),
        [n] = o.useState(() => {
            var e;
            return (null != (e = (0, l.sample)(g)) ? e : g[0])();
        });
    return (0, r.jsx)(v, {
        heading: e,
        bodyText: n,
    });
}
function y() {
    let e = p.intl.string(p.t.bFgqYG),
        [n] = o.useState(() => {
            var e;
            return (null != (e = (0, l.sample)(x)) ? e : x[0])();
        });
    return (0, r.jsx)(v, {
        heading: e,
        bodyText: n,
    });
}
function I(e) {
    let { user: n, guildId: t, channelId: a, onClose: s } = e,
        d = u.ZP.getName(t, a, n),
        m = p.intl.formatToPlainString(p.t.sjSitL, { name: d }),
        [g] = o.useState(() => {
            var e;
            return (null != (e = (0, l.sample)(h)) ? e : h[0])(d);
        }),
        x = o.useCallback(() => {
            c.Z.openPrivateChannel({ recipientIds: n.id }), null == s || s();
        }, [n.id, s]);
    return (0, r.jsx)(v, {
        heading: m,
        bodyText: g,
        children: (0, r.jsx)("div", {
            className: b.buttonRow,
            children: (0, r.jsx)(f.tG, {
                icon: i.kBi,
                text: p.intl.string(p.t["g33r/P"]),
                onClick: x,
                themeColor: "secondary",
            }),
        }),
    });
}
function O() {
    let e = (0, s.ZP)();
    return (0, r.jsx)("div", {
        className: b.connectionPlatforms,
        children: j.map((n, t) => {
            let o = d.Z.get(n);
            if (null == o) return null;
            let l = (0, i.wjy)(e) ? o.icon.darkPNG : o.icon.lightPNG;
            return (0, r.jsx)(
                "img",
                {
                    src: l,
                    alt: o.name,
                    className: b.connectionIcon,
                },
                t,
            );
        }),
    });
}
function P(e) {
    let { onClose: n } = e,
        t = o.useCallback(() => {
            null == n || n(), a.Z.open(m.oAB.CONNECTIONS);
        }, [n]),
        l = o.useCallback(() => {
            null == n || n(), a.Z.open(m.oAB.CONTENT_AND_SOCIAL, "CONNECTED_GAMES");
        }, [n]);
    return (0, r.jsxs)(v, {
        heading: p.intl.string(p.t.VB6LWV),
        bodyText: p.intl.string(p.t.KpjsU1),
        children: [
            (0, r.jsx)(O, {}),
            (0, r.jsxs)("div", {
                className: b.buttonRow,
                children: [
                    (0, r.jsx)(f.tG, {
                        text: p.intl.string(p.t["/Hl24e"]),
                        onClick: t,
                        themeColor: "secondary",
                    }),
                    (0, r.jsx)(f.tG, {
                        text: p.intl.string(p.t.GTCx0t),
                        onClick: l,
                        themeColor: "secondary",
                    }),
                ],
            }),
        ],
    });
}
