n.d(t, {
    P9: () => w,
    Uf: () => S,
    b0: () => P,
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
    g = n(475413),
    p = n(981631),
    b = n(388032),
    m = n(771838);
let h = [
        () => b.intl.string(b.t.madJdE),
        () => b.intl.string(b.t.NYmfoP),
        () => b.intl.string(b.t.R2PaCg),
        () => b.intl.string(b.t.laSR8h),
        () => b.intl.string(b.t.DnsJE8),
    ],
    y = [
        () => b.intl.string(b.t.nFSbeE),
        () => b.intl.string(b.t.gTcxOz),
        () => b.intl.string(b.t["8T0wYj"]),
        () => b.intl.string(b.t.BIHl1g),
        () => b.intl.string(b.t["jhBm0+"]),
    ],
    v = [
        () => b.intl.string(b.t.AyMGXA),
        () => b.intl.string(b.t.aAFW7V),
        (e) => b.intl.formatToPlainString(b.t.h2g0cM, { name: e }),
        () => b.intl.string(b.t.rrYh58),
        () => b.intl.string(b.t["HX3K+F"]),
        () => b.intl.string(b.t["/yW3aY"]),
        () => b.intl.string(b.t["PmL/v0"]),
        () => b.intl.string(b.t.IALa3h),
        () => b.intl.string(b.t.HRcTFL),
        () => b.intl.string(b.t.NuCqPt),
        () => b.intl.string(b.t["M1tw+4"]),
        () => b.intl.string(b.t.UBm1y2),
        () => b.intl.string(b.t.Cu95PQ),
        () => b.intl.string(b.t["R/wFuh"]),
        () => b.intl.string(b.t.HQPAVT),
        () => b.intl.string(b.t.YolGh4),
    ],
    O = [
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
        className: m.empty,
        children: [
            (0, r.jsxs)("div", {
                className: m.textContainer,
                children: [
                    (0, r.jsx)(l.Heading, {
                        variant: "heading-md/medium",
                        color: "text-strong",
                        children: t,
                    }),
                    (0, r.jsx)(l.Text, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        children: n,
                    }),
                ],
            }),
            i,
        ],
    });
}
function x() {
    let e = b.intl.string(b.t.RnD2yZ),
        [t] = i.useState(() => {
            var e;
            return (null != (e = (0, a.sample)(h)) ? e : h[0])();
        });
    return (0, r.jsx)(j, {
        heading: e,
        bodyText: t,
    });
}
function P() {
    let e = b.intl.string(b.t.bFgqYJ),
        [t] = i.useState(() => {
            var e;
            return (null != (e = (0, a.sample)(y)) ? e : y[0])();
        });
    return (0, r.jsx)(j, {
        heading: e,
        bodyText: t,
    });
}
function w(e) {
    let { user: t, guildId: n, channelId: c, onClose: s } = e,
        u = f.ZP.getName(n, c, t),
        d = b.intl.formatToPlainString(b.t.sjSitP, { name: u }),
        [p] = i.useState(() => {
            var e;
            return (null != (e = (0, a.sample)(v)) ? e : v[0])(u);
        }),
        h = i.useCallback(() => {
            o.Z.openPrivateChannel({ recipientIds: t.id }), null == s || s();
        }, [t.id, s]);
    return (0, r.jsx)(j, {
        heading: d,
        bodyText: p,
        children: (0, r.jsx)("div", {
            className: m.buttonRow,
            children: (0, r.jsx)(g.i6, {
                icon: l.kBi,
                text: b.intl.string(b.t["g33r/P"]),
                onClick: h,
            }),
        }),
    });
}
function I() {
    let e = (0, c.ZP)();
    return (0, r.jsx)("div", {
        className: m.connectionPlatforms,
        children: O.map((t, n) => {
            let i = s.Z.get(t);
            if (null == i) return null;
            let a = (0, l.wjy)(e) ? i.icon.darkPNG : i.icon.lightPNG;
            return (0, r.jsx)(
                "img",
                {
                    src: a,
                    alt: i.name,
                    className: m.connectionIcon,
                },
                n,
            );
        }),
    });
}
function S(e) {
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
        heading: b.intl.string(b.t.VB6LWY),
        bodyText: b.intl.string(b.t.KpjsU9),
        children: [
            (0, r.jsx)(I, {}),
            (0, r.jsxs)("div", {
                className: m.buttonRow,
                children: [
                    (0, r.jsx)(g.i6, {
                        text: b.intl.string(b.t["/Hl24U"]),
                        onClick: n,
                    }),
                    (0, r.jsx)(g.i6, {
                        text: b.intl.string(b.t.GTCx0p),
                        onClick: a,
                    }),
                ],
            }),
        ],
    });
}
