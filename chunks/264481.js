t.d(n, {
    P9: () => I,
    Uf: () => Z,
    b0: () => O,
    s_: () => y,
}),
    t(388685);
var r = t(951288),
    l = t(647438),
    o = t(392711),
    i = t(481060),
    c = t(493683),
    s = t(230711),
    a = t(410030),
    d = t(726542),
    u = t(5192),
    f = t(475413),
    m = t(981631),
    p = t(388032),
    h = t(839468);
let x = [
        () => p.intl.string(p.t.madJdH),
        () => p.intl.string(p.t.NYmfoK),
        () => p.intl.string(p.t.R2PaCg),
        () => p.intl.string(p.t.laSR8v),
        () => p.intl.string(p.t.DnsJEx),
    ],
    b = [
        () => p.intl.string(p.t.nFSbeH),
        () => p.intl.string(p.t.gTcxOz),
        () => p.intl.string(p.t["8T0wYm"]),
        () => p.intl.string(p.t.BIHl1t),
        () => p.intl.string(p.t.jhBm09),
    ],
    j = [
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
    g = [
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
    let { heading: n, bodyText: t, children: l } = e;
    return (0, r.jsxs)("div", {
        className: h.empty,
        children: [
            (0, r.jsxs)("div", {
                className: h.textContainer,
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
            l,
        ],
    });
}
function y() {
    let e = p.intl.string(p.t.RnD2yc),
        [n] = l.useState(() => {
            var e;
            return (null != (e = (0, o.sample)(x)) ? e : x[0])();
        });
    return (0, r.jsx)(v, {
        heading: e,
        bodyText: n,
    });
}
function O() {
    let e = p.intl.string(p.t.bFgqYG),
        [n] = l.useState(() => {
            var e;
            return (null != (e = (0, o.sample)(b)) ? e : b[0])();
        });
    return (0, r.jsx)(v, {
        heading: e,
        bodyText: n,
    });
}
function I(e) {
    let { user: n, guildId: t, channelId: s, onClose: a } = e,
        d = u.ZP.getName(t, s, n),
        m = p.intl.formatToPlainString(p.t.sjSitL, { name: d }),
        [x] = l.useState(() => {
            var e;
            return (null != (e = (0, o.sample)(j)) ? e : j[0])(d);
        }),
        b = l.useCallback(() => {
            c.Z.openPrivateChannel({ recipientIds: n.id }), null == a || a();
        }, [n.id, a]);
    return (0, r.jsx)(v, {
        heading: m,
        bodyText: x,
        children: (0, r.jsx)("div", {
            className: h.buttonRow,
            children: (0, r.jsx)(f.tG, {
                icon: i.kBi,
                text: p.intl.string(p.t["g33r/P"]),
                onClick: b,
                themeColor: "secondary",
            }),
        }),
    });
}
function _() {
    let e = (0, a.ZP)();
    return (0, r.jsx)("div", {
        className: h.connectionPlatforms,
        children: g.map((n, t) => {
            let l = d.Z.get(n);
            if (null == l) return null;
            let o = (0, i.wjy)(e) ? l.icon.darkPNG : l.icon.lightPNG;
            return (0, r.jsx)(
                "img",
                {
                    src: o,
                    alt: l.name,
                    className: h.connectionIcon,
                },
                t,
            );
        }),
    });
}
function Z(e) {
    let { onClose: n } = e,
        t = l.useCallback(() => {
            null == n || n(), s.Z.open(m.oAB.CONNECTIONS);
        }, [n]),
        o = l.useCallback(() => {
            null == n || n(), s.Z.open(m.oAB.CONTENT_AND_SOCIAL, "CONNECTED_GAMES");
        }, [n]);
    return (0, r.jsxs)(v, {
        heading: p.intl.string(p.t.VB6LWV),
        bodyText: p.intl.string(p.t.KpjsU1),
        children: [
            (0, r.jsx)(_, {}),
            (0, r.jsxs)("div", {
                className: h.buttonRow,
                children: [
                    (0, r.jsx)(f.tG, {
                        text: p.intl.string(p.t["/Hl24e"]),
                        onClick: t,
                        themeColor: "secondary",
                    }),
                    (0, r.jsx)(f.tG, {
                        text: p.intl.string(p.t.GTCx0t),
                        onClick: o,
                        themeColor: "secondary",
                    }),
                ],
            }),
        ],
    });
}
