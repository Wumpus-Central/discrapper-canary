n.d(t, {
    P9: () => P,
    Uf: () => w,
    b0: () => _,
    s_: () => x,
}),
    n(388685);
var r = n(54381),
    i = n(473749),
    a = n(392711),
    l = n(481060),
    o = n(493683),
    c = n(410030),
    s = n(726542),
    u = n(313789),
    d = n(518596),
    f = n(5192),
    g = n(732380),
    p = n(981631),
    m = n(388032),
    b = n(835540);
let h = [
        () => m.intl.string(m.t.madJdE),
        () => m.intl.string(m.t.NYmfoP),
        () => m.intl.string(m.t.R2PaCg),
        () => m.intl.string(m.t.laSR8h),
        () => m.intl.string(m.t.DnsJE8),
    ],
    y = [
        () => m.intl.string(m.t.nFSbeE),
        () => m.intl.string(m.t.gTcxOz),
        () => m.intl.string(m.t["8T0wYj"]),
        () => m.intl.string(m.t.BIHl1g),
        () => m.intl.string(m.t["jhBm0+"]),
    ],
    O = [
        () => m.intl.string(m.t.AyMGXA),
        () => m.intl.string(m.t.aAFW7V),
        (e) => m.intl.formatToPlainString(m.t.h2g0cM, { name: e }),
        () => m.intl.string(m.t.rrYh58),
        () => m.intl.string(m.t["HX3K+F"]),
        () => m.intl.string(m.t["/yW3aY"]),
        () => m.intl.string(m.t["PmL/v0"]),
        () => m.intl.string(m.t.IALa3h),
        () => m.intl.string(m.t.HRcTFL),
        () => m.intl.string(m.t.NuCqPt),
        () => m.intl.string(m.t["M1tw+4"]),
        () => m.intl.string(m.t.UBm1y2),
        () => m.intl.string(m.t.Cu95PQ),
        () => m.intl.string(m.t["R/wFuh"]),
        () => m.intl.string(m.t.HQPAVT),
        () => m.intl.string(m.t.YolGh4),
    ],
    v = [
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
function j(e) {
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
    let e = m.intl.string(m.t.RnD2yZ),
        [t] = i.useState(() => {
            var e;
            return (null != (e = (0, a.sample)(h)) ? e : h[0])();
        });
    return (0, r.jsx)(j, {
        heading: e,
        bodyText: t,
    });
}
function _() {
    let e = m.intl.string(m.t.bFgqYJ),
        [t] = i.useState(() => {
            var e;
            return (null != (e = (0, a.sample)(y)) ? e : y[0])();
        });
    return (0, r.jsx)(j, {
        heading: e,
        bodyText: t,
    });
}
function P(e) {
    let { user: t, guildId: n, channelId: c, onClose: s } = e,
        u = f.ZP.getName(n, c, t),
        d = m.intl.formatToPlainString(m.t.sjSitP, { name: u }),
        [p] = i.useState(() => {
            var e;
            return (null != (e = (0, a.sample)(O)) ? e : O[0])(u);
        }),
        h = i.useCallback(() => {
            o.Z.openPrivateChannel({ recipientIds: t.id }), null == s || s();
        }, [t.id, s]);
    return (0, r.jsx)(j, {
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
function I() {
    let e = (0, c.ZP)();
    return (0, r.jsx)("div", {
        className: b.connectionPlatforms,
        children: v.map((t, n) => {
            let i = s.Z.get(t);
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
    return (0, r.jsxs)(j, {
        heading: m.intl.string(m.t.VB6LWY),
        bodyText: m.intl.string(m.t.KpjsU9),
        children: [
            (0, r.jsx)(I, {}),
            (0, r.jsxs)("div", {
                className: b.buttonRow,
                children: [
                    (0, r.jsx)(g.O1, {
                        text: m.intl.string(m.t["/Hl24U"]),
                        onClick: n,
                    }),
                    (0, r.jsx)(g.O1, {
                        text: m.intl.string(m.t.GTCx0p),
                        onClick: a,
                    }),
                ],
            }),
        ],
    });
}
