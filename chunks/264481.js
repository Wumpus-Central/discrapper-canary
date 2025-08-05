(n.d(t, {
    P9: () => v,
    Uf: () => P,
    b0: () => h,
    s_: () => x
}),
    n(388685));
var r = n(255367),
    o = n(73800),
    l = n(392711),
    i = n(481060),
    a = n(493683),
    c = n(230711),
    s = n(410030),
    d = n(726542),
    u = n(5192),
    f = n(475413),
    p = n(981631),
    m = n(388032),
    b = n(771627);
let g = [() => m.intl.string(m.t.madJdH), () => m.intl.string(m.t.NYmfoK), () => m.intl.string(m.t.R2PaCg), () => m.intl.string(m.t.laSR8v), () => m.intl.string(m.t.DnsJEx)],
    y = [() => m.intl.string(m.t.nFSbeH), () => m.intl.string(m.t.gTcxOz), () => m.intl.string(m.t['8T0wYm']), () => m.intl.string(m.t.BIHl1t), () => m.intl.string(m.t.jhBm09)],
    O = [() => m.intl.string(m.t.AyMGXF), () => m.intl.string(m.t.aAFW7e), (e) => m.intl.formatToPlainString(m.t.h2g0cH, { name: e }), () => m.intl.string(m.t['rrYh5+']), () => m.intl.string(m.t['HX3K+P']), () => m.intl.string(m.t['/yW3aW']), () => m.intl.string(m.t['PmL/v7']), () => m.intl.string(m.t.IALa3t), () => m.intl.string(m.t.HRcTFB), () => m.intl.string(m.t.NuCqPj), () => m.intl.string(m.t['M1tw+/']), () => m.intl.string(m.t.UBm1y8), () => m.intl.string(m.t.Cu95PT), () => m.intl.string(m.t['R/wFur']), () => m.intl.string(m.t.HQPAVV), () => m.intl.string(m.t.YolGh4)],
    j = [p.ABu.STEAM, p.ABu.PLAYSTATION, p.ABu.XBOX, p.ABu.TWITCH, p.ABu.BATTLENET, p.ABu.LEAGUE_OF_LEGENDS, p.ABu.EPIC_GAMES, p.ABu.RIOT_GAMES, p.ABu.ROBLOX, p.ABu.SPOTIFY, p.ABu.YOUTUBE, p.ABu.CRUNCHYROLL, p.ABu.BUNGIE];
function _(e) {
    let { heading: t, bodyText: n, children: o } = e;
    return (0, r.jsxs)('div', {
        className: b.empty,
        children: [
            (0, r.jsxs)('div', {
                className: b.textContainer,
                children: [
                    (0, r.jsx)(i.X6q, {
                        variant: 'heading-md/medium',
                        color: 'header-primary',
                        children: t
                    }),
                    (0, r.jsx)(i.Text, {
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
function x() {
    let e = m.intl.string(m.t.RnD2yc),
        [t] = o.useState(() => {
            var e;
            return (null != (e = (0, l.sample)(g)) ? e : g[0])();
        });
    return (0, r.jsx)(_, {
        heading: e,
        bodyText: t
    });
}
function h() {
    let e = m.intl.string(m.t.bFgqYG),
        [t] = o.useState(() => {
            var e;
            return (null != (e = (0, l.sample)(y)) ? e : y[0])();
        });
    return (0, r.jsx)(_, {
        heading: e,
        bodyText: t
    });
}
function v(e) {
    let { user: t, guildId: n, channelId: c, onClose: s } = e,
        d = u.ZP.getName(n, c, t),
        p = m.intl.formatToPlainString(m.t.sjSitL, { name: d }),
        [g] = o.useState(() => {
            var e;
            return (null != (e = (0, l.sample)(O)) ? e : O[0])(d);
        }),
        y = o.useCallback(() => {
            (a.Z.openPrivateChannel({ recipientIds: t.id }), null == s || s());
        }, [t.id, s]);
    return (0, r.jsx)(_, {
        heading: p,
        bodyText: g,
        children: (0, r.jsx)('div', {
            className: b.buttonRow,
            children: (0, r.jsx)(f.tG, {
                icon: i.kBi,
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
        children: j.map((t, n) => {
            let o = d.Z.get(t);
            if (null == o) return null;
            let l = (0, i.wjy)(e) ? o.icon.darkPNG : o.icon.lightPNG;
            return (0, r.jsx)(
                'img',
                {
                    src: l,
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
        l = o.useCallback(() => {
            (null == t || t(), c.Z.open(p.oAB.CONTENT_AND_SOCIAL, 'CONNECTED_GAMES'));
        }, [t]);
    return (0, r.jsxs)(_, {
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
                        onClick: l,
                        themeColor: 'secondary'
                    })
                ]
            })
        ]
    });
}
