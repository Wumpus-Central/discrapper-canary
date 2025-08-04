(n.d(t, {
    P9: () => v,
    Uf: () => P,
    b0: () => _,
    s_: () => h
}),
    n(388685));
var r = n(255367),
    o = n(73800),
    i = n(392711),
    l = n(481060),
    a = n(493683),
    c = n(230711),
    s = n(410030),
    u = n(726542),
    d = n(5192),
    f = n(475413),
    p = n(981631),
    m = n(388032),
    b = n(771627);
let g = [() => m.intl.string(m.t.madJdH), () => m.intl.string(m.t.NYmfoK), () => m.intl.string(m.t.R2PaCg), () => m.intl.string(m.t.laSR8v), () => m.intl.string(m.t.DnsJEx)],
    y = [() => m.intl.string(m.t.nFSbeH), () => m.intl.string(m.t.gTcxOz), () => m.intl.string(m.t['8T0wYm']), () => m.intl.string(m.t.BIHl1t), () => m.intl.string(m.t.jhBm09)],
    j = [() => m.intl.string(m.t.AyMGXF), () => m.intl.string(m.t.aAFW7e), (e) => m.intl.formatToPlainString(m.t.h2g0cH, { name: e }), () => m.intl.string(m.t['rrYh5+']), () => m.intl.string(m.t['HX3K+P']), () => m.intl.string(m.t['/yW3aW']), () => m.intl.string(m.t['PmL/v7']), () => m.intl.string(m.t.IALa3t), () => m.intl.string(m.t.HRcTFB), () => m.intl.string(m.t.NuCqPj), () => m.intl.string(m.t['M1tw+/']), () => m.intl.string(m.t.UBm1y8), () => m.intl.string(m.t.Cu95PT), () => m.intl.string(m.t['R/wFur']), () => m.intl.string(m.t.HQPAVV), () => m.intl.string(m.t.YolGh4)],
    O = [p.ABu.STEAM, p.ABu.PLAYSTATION, p.ABu.XBOX, p.ABu.TWITCH, p.ABu.BATTLENET, p.ABu.LEAGUE_OF_LEGENDS, p.ABu.EPIC_GAMES, p.ABu.RIOT_GAMES, p.ABu.ROBLOX, p.ABu.SPOTIFY, p.ABu.YOUTUBE, p.ABu.CRUNCHYROLL, p.ABu.BUNGIE];
function x(e) {
    let { heading: t, bodyText: n, children: o } = e;
    return (0, r.jsxs)('div', {
        className: b.empty,
        children: [
            (0, r.jsxs)('div', {
                className: b.textContainer,
                children: [
                    (0, r.jsx)(l.X6q, {
                        variant: 'heading-md/medium',
                        color: 'header-primary',
                        children: t
                    }),
                    (0, r.jsx)(l.Text, {
                        variant: 'text-sm/normal',
                        color: 'header-secondary',
                        children: n
                    })
                ]
            }),
            o
        ]
    });
}
function h() {
    let e = m.intl.string(m.t.RnD2yc),
        [t] = o.useState(() => {
            var e;
            return (null != (e = (0, i.sample)(g)) ? e : g[0])();
        });
    return (0, r.jsx)(x, {
        heading: e,
        bodyText: t
    });
}
function _() {
    let e = m.intl.string(m.t.bFgqYG),
        [t] = o.useState(() => {
            var e;
            return (null != (e = (0, i.sample)(y)) ? e : y[0])();
        });
    return (0, r.jsx)(x, {
        heading: e,
        bodyText: t
    });
}
function v(e) {
    let { user: t, guildId: n, channelId: c, onClose: s } = e,
        u = d.ZP.getName(n, c, t),
        p = m.intl.formatToPlainString(m.t.sjSitL, { name: u }),
        [g] = o.useState(() => {
            var e;
            return (null != (e = (0, i.sample)(j)) ? e : j[0])(u);
        }),
        y = o.useCallback(() => {
            (a.Z.openPrivateChannel({ recipientIds: t.id }), null == s || s());
        }, [t.id, s]);
    return (0, r.jsx)(x, {
        heading: p,
        bodyText: g,
        children: (0, r.jsx)('div', {
            className: b.buttonRow,
            children: (0, r.jsx)(f.tG, {
                icon: l.kBi,
                text: m.intl.string(m.t['g33r/P']),
                onClick: y,
                themeColor: 'secondary'
            })
        })
    });
}
function I() {
    let e = (0, s.ZP)();
    return (0, r.jsx)('div', {
        className: b.connectionPlatforms,
        children: O.map((t, n) => {
            let o = u.Z.get(t);
            if (null == o) return null;
            let i = (0, l.wjy)(e) ? o.icon.darkPNG : o.icon.lightPNG;
            return (0, r.jsx)(
                'img',
                {
                    src: i,
                    alt: o.name,
                    className: b.connectionIcon
                },
                n
            );
        })
    });
}
function P(e) {
    let { onClose: t } = e,
        n = o.useCallback(() => {
            (null == t || t(), c.Z.open(p.oAB.CONNECTIONS));
        }, [t]),
        i = o.useCallback(() => {
            (null == t || t(), c.Z.open(p.oAB.CONTENT_AND_SOCIAL, 'CONNECTED_GAMES'));
        }, [t]);
    return (0, r.jsxs)(x, {
        heading: m.intl.string(m.t.VB6LWV),
        bodyText: m.intl.string(m.t.KpjsU1),
        children: [
            (0, r.jsx)(I, {}),
            (0, r.jsxs)('div', {
                className: b.buttonRow,
                children: [
                    (0, r.jsx)(f.tG, {
                        text: m.intl.string(m.t['/Hl24e']),
                        onClick: n,
                        themeColor: 'secondary'
                    }),
                    (0, r.jsx)(f.tG, {
                        text: m.intl.string(m.t.GTCx0t),
                        onClick: i,
                        themeColor: 'secondary'
                    })
                ]
            })
        ]
    });
}
