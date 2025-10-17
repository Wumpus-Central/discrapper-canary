n.d(t, {
    P9: () => I,
    Uf: () => w,
    b0: () => _,
    s_: () => x,
}),
    n(388685);
var r = n(951288),
    i = n(647438),
    a = n(392711),
    l = n(481060),
    o = n(493683),
    s = n(410030),
    c = n(726542),
    u = n(313789),
    d = n(518596),
    f = n(5192),
    g = n(732380),
    p = n(981631),
    m = n(388032),
    b = n(839468);
let h = [
        () => m.intl.string(m.t.madJdH),
        () => m.intl.string(m.t.NYmfoK),
        () => m.intl.string(m.t.R2PaCg),
        () => m.intl.string(m.t.laSR8v),
        () => m.intl.string(m.t.DnsJEx),
    ],
    v = [
        () => m.intl.string(m.t.nFSbeH),
        () => m.intl.string(m.t.gTcxOz),
        () => m.intl.string(m.t["8T0wYm"]),
        () => m.intl.string(m.t.BIHl1t),
        () => m.intl.string(m.t.jhBm09),
    ],
    y = [
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
    j = [
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
    let { heading: t, bodyText: n, children: i } = e;
    return (0, r.jsxs)("div", {
        className: b.empty,
        children: [
            (0, r.jsxs)("div", {
                className: b.textContainer,
                children: [
                    (0, r.jsx)(l.Heading, {
                        variant: "heading-md/medium",
                        color: "header-primary",
                        children: t,
                    }),
                    (0, r.jsx)(l.Text, {
                        variant: "text-sm/normal",
                        color: "header-secondary",
                        children: n,
                    }),
                ],
            }),
            i,
        ],
    });
}
function x() {
    let e = m.intl.string(m.t.RnD2yc),
        [t] = i.useState(() => {
            var e;
            return (null != (e = (0, a.sample)(h)) ? e : h[0])();
        });
    return (0, r.jsx)(O, {
        heading: e,
        bodyText: t,
    });
}
function _() {
    let e = m.intl.string(m.t.bFgqYG),
        [t] = i.useState(() => {
            var e;
            return (null != (e = (0, a.sample)(v)) ? e : v[0])();
        });
    return (0, r.jsx)(O, {
        heading: e,
        bodyText: t,
    });
}
function I(e) {
    let { user: t, guildId: n, channelId: s, onClose: c } = e,
        u = f.ZP.getName(n, s, t),
        d = m.intl.formatToPlainString(m.t.sjSitL, { name: u }),
        [p] = i.useState(() => {
            var e;
            return (null != (e = (0, a.sample)(y)) ? e : y[0])(u);
        }),
        h = i.useCallback(() => {
            o.Z.openPrivateChannel({ recipientIds: t.id }), null == c || c();
        }, [t.id, c]);
    return (0, r.jsx)(O, {
        heading: d,
        bodyText: p,
        children: (0, r.jsx)("div", {
            className: b.buttonRow,
            children: (0, r.jsx)(g.O1, {
                icon: l.kBi,
                text: m.intl.string(m.t["g33r/P"]),
                onClick: h,
            }),
        }),
    });
}
function P() {
    let e = (0, s.ZP)();
    return (0, r.jsx)("div", {
        className: b.connectionPlatforms,
        children: j.map((t, n) => {
            let i = c.Z.get(t);
            if (null == i) return null;
            let a = (0, l.wjy)(e) ? i.icon.darkPNG : i.icon.lightPNG;
            return (0, r.jsx)(
                "img",
                {
                    src: a,
                    alt: i.name,
                    className: b.connectionIcon,
                },
                n,
            );
        }),
    });
}
function w(e) {
    let { onClose: t } = e,
        n = i.useCallback(() => {
            null == t || t(), (0, d.openUserSettings)(u.n.CONNECTIONS_PANEL, { section: p.oAB.CONNECTIONS });
        }, [t]),
        a = i.useCallback(() => {
            null == t || t(),
                (0, d.openUserSettings)(u.n.CONTENT_AND_SOCIAL_PANEL, {
                    section: p.oAB.CONTENT_AND_SOCIAL,
                    subsection: "CONNECTED_GAMES",
                });
        }, [t]);
    return (0, r.jsxs)(O, {
        heading: m.intl.string(m.t.VB6LWV),
        bodyText: m.intl.string(m.t.KpjsU1),
        children: [
            (0, r.jsx)(P, {}),
            (0, r.jsxs)("div", {
                className: b.buttonRow,
                children: [
                    (0, r.jsx)(g.O1, {
                        text: m.intl.string(m.t["/Hl24e"]),
                        onClick: n,
                    }),
                    (0, r.jsx)(g.O1, {
                        text: m.intl.string(m.t.GTCx0t),
                        onClick: a,
                    }),
                ],
            }),
        ],
    });
}
