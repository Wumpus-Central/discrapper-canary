n.d(t, {
    P9: () => O,
    Uf: () => C,
    b0: () => I,
    s_: () => j
}),
    n(388685);
var o = n(255367),
    r = n(73800),
    i = n(392711),
    c = n(481060),
    a = n(493683),
    l = n(230711),
    s = n(410030),
    d = n(726542),
    u = n(5192),
    f = n(475413),
    p = n(981631),
    m = n(388032),
    b = n(771627);
let _ = [() => m.intl.string(m.t.madJdH), () => m.intl.string(m.t.NYmfoK), () => m.intl.string(m.t.R2PaCg), () => m.intl.string(m.t.laSR8v), () => m.intl.string(m.t.DnsJEx)],
    g = [() => m.intl.string(m.t.nFSbeH), () => m.intl.string(m.t.gTcxOz), () => m.intl.string(m.t['8T0wYm']), () => m.intl.string(m.t.BIHl1t), () => m.intl.string(m.t.jhBm09)],
    h = [() => m.intl.string(m.t.AyMGXF), () => m.intl.string(m.t.aAFW7e), (e) => m.intl.formatToPlainString(m.t.h2g0cH, { name: e }), () => m.intl.string(m.t['rrYh5+']), () => m.intl.string(m.t['HX3K+P']), () => m.intl.string(m.t['/yW3aW']), () => m.intl.string(m.t['PmL/v7']), () => m.intl.string(m.t.IALa3t), () => m.intl.string(m.t.HRcTFB), () => m.intl.string(m.t.NuCqPj), () => m.intl.string(m.t['M1tw+/']), () => m.intl.string(m.t.UBm1y8), () => m.intl.string(m.t.Cu95PT), () => m.intl.string(m.t['R/wFur']), () => m.intl.string(m.t.HQPAVV), () => m.intl.string(m.t.YolGh4)],
    y = [p.ABu.EPIC_GAMES, p.ABu.RIOT_GAMES, p.ABu.XBOX, p.ABu.SPOTIFY, p.ABu.PLAYSTATION, p.ABu.LEAGUE_OF_LEGENDS, p.ABu.STEAM, p.ABu.CRUNCHYROLL, p.ABu.YOUTUBE, p.ABu.REDDIT, p.ABu.BATTLENET, p.ABu.GITHUB, p.ABu.TIKTOK, p.ABu.TWITTER_LEGACY, p.ABu.TWITCH];
function x(e) {
    let { heading: t, bodyText: n, children: r } = e;
    return (0, o.jsxs)('div', {
        className: b.empty,
        children: [
            (0, o.jsxs)('div', {
                className: b.textContainer,
                children: [
                    (0, o.jsx)(c.X6q, {
                        variant: 'heading-md/medium',
                        color: 'header-primary',
                        children: t
                    }),
                    (0, o.jsx)(c.Text, {
                        variant: 'text-sm/normal',
                        color: 'header-secondary',
                        children: n
                    })
                ]
            }),
            r
        ]
    });
}
function j() {
    let e = m.intl.string(m.t.RnD2yc),
        [t] = r.useState(() => {
            var e;
            return (null != (e = (0, i.sample)(_)) ? e : _[0])();
        });
    return (0, o.jsx)(x, {
        heading: e,
        bodyText: t
    });
}
function I() {
    let e = m.intl.string(m.t.bFgqYG),
        [t] = r.useState(() => {
            var e;
            return (null != (e = (0, i.sample)(g)) ? e : g[0])();
        });
    return (0, o.jsx)(x, {
        heading: e,
        bodyText: t
    });
}
function O(e) {
    let { user: t, guildId: n, channelId: l } = e,
        s = u.ZP.getName(n, l, t),
        d = m.intl.formatToPlainString(m.t.sjSitL, { name: s }),
        [p] = r.useState(() => {
            var e;
            return (null != (e = (0, i.sample)(h)) ? e : h[0])(s);
        }),
        _ = r.useCallback(() => {
            a.Z.openPrivateChannel({ recipientIds: t.id });
        }, [t.id]),
        g = r.useCallback(() => {
            a.Z.openPrivateChannel({
                recipientIds: t.id,
                joinCall: !0
            });
        }, [t.id]);
    return (0, o.jsx)(x, {
        heading: d,
        bodyText: p,
        children: (0, o.jsxs)('div', {
            className: b.buttonRow,
            children: [
                (0, o.jsx)(f.tG, {
                    icon: c.kBi,
                    text: m.intl.string(m.t['g33r/P']),
                    onClick: _,
                    themeColor: 'secondary'
                }),
                (0, o.jsx)(f.tG, {
                    icon: c.qWc,
                    text: m.intl.string(m.t.JJogjo),
                    onClick: g,
                    themeColor: 'secondary'
                })
            ]
        })
    });
}
function v() {
    let e = (0, s.ZP)();
    return (0, o.jsx)('div', {
        className: b.connectionPlatforms,
        children: y.map((t, n) => {
            let r = d.Z.get(t);
            if (null == r) return null;
            let i = (0, c.wjy)(e) ? r.icon.darkPNG : r.icon.lightPNG;
            return (0, o.jsx)(
                'img',
                {
                    src: i,
                    alt: r.name,
                    className: b.connectionIcon
                },
                n
            );
        })
    });
}
function C(e) {
    let { onClose: t } = e,
        n = r.useCallback(() => {
            null == t || t(), l.Z.open(p.oAB.CONNECTIONS);
        }, [t]),
        i = r.useCallback(() => {
            null == t || t(), l.Z.open(p.oAB.CONTENT_AND_SOCIAL, 'CONNECTED_GAMES');
        }, [t]);
    return (0, o.jsxs)(x, {
        heading: m.intl.string(m.t.Sc0oWF),
        bodyText: m.intl.string(m.t.m8UJqa),
        children: [
            (0, o.jsx)(v, {}),
            (0, o.jsxs)('div', {
                className: b.buttonRow,
                children: [
                    (0, o.jsx)(f.tG, {
                        text: m.intl.string(m.t['/Hl24e']),
                        onClick: n,
                        themeColor: 'secondary'
                    }),
                    (0, o.jsx)(f.tG, {
                        text: m.intl.string(m.t.GTCx0t),
                        onClick: i,
                        themeColor: 'secondary'
                    })
                ]
            })
        ]
    });
}
