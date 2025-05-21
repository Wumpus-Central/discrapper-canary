t.d(n, {
    P9: () => O,
    Uf: () => P,
    b0: () => I,
    s_: () => j
}),
    t(388685);
var o = t(255367),
    r = t(73800),
    c = t(392711),
    i = t(481060),
    a = t(493683),
    l = t(230711),
    s = t(410030),
    d = t(726542),
    u = t(5192),
    f = t(475413),
    p = t(981631),
    m = t(388032),
    b = t(771627);
let _ = [() => m.intl.string(m.t.madJdH), () => m.intl.string(m.t.NYmfoK), () => m.intl.string(m.t.R2PaCg), () => m.intl.string(m.t.laSR8v), () => m.intl.string(m.t.DnsJEx)],
    y = [() => m.intl.string(m.t.nFSbeH), () => m.intl.string(m.t.gTcxOz), () => m.intl.string(m.t['8T0wYm']), () => m.intl.string(m.t.BIHl1t), () => m.intl.string(m.t.jhBm09)],
    h = [() => m.intl.string(m.t.AyMGXF), () => m.intl.string(m.t.aAFW7e), (e) => m.intl.formatToPlainString(m.t.h2g0cH, { name: e }), () => m.intl.string(m.t['rrYh5+']), () => m.intl.string(m.t['HX3K+P']), () => m.intl.string(m.t['/yW3aW']), () => m.intl.string(m.t['PmL/v7']), () => m.intl.string(m.t.IALa3t), () => m.intl.string(m.t.HRcTFB), () => m.intl.string(m.t.NuCqPj), () => m.intl.string(m.t['M1tw+/']), () => m.intl.string(m.t.UBm1y8), () => m.intl.string(m.t.Cu95PT), () => m.intl.string(m.t['R/wFur']), () => m.intl.string(m.t.HQPAVV), () => m.intl.string(m.t.YolGh4)],
    g = [p.ABu.EPIC_GAMES, p.ABu.RIOT_GAMES, p.ABu.XBOX, p.ABu.SPOTIFY, p.ABu.PLAYSTATION, p.ABu.LEAGUE_OF_LEGENDS, p.ABu.STEAM, p.ABu.CRUNCHYROLL, p.ABu.YOUTUBE, p.ABu.REDDIT, p.ABu.BATTLENET, p.ABu.GITHUB, p.ABu.TIKTOK, p.ABu.TWITTER_LEGACY, p.ABu.TWITCH];
function x(e) {
    let { heading: n, bodyText: t, children: r } = e;
    return (0, o.jsxs)('div', {
        className: b.empty,
        children: [
            (0, o.jsxs)('div', {
                className: b.textContainer,
                children: [
                    (0, o.jsx)(i.X6q, {
                        variant: 'heading-md/medium',
                        color: 'header-primary',
                        children: n
                    }),
                    (0, o.jsx)(i.Text, {
                        variant: 'text-sm/normal',
                        color: 'header-secondary',
                        children: t
                    })
                ]
            }),
            r
        ]
    });
}
function j() {
    let e = m.intl.string(m.t.RnD2yc),
        [n] = r.useState(() => {
            var e;
            return (null != (e = (0, c.sample)(_)) ? e : _[0])();
        });
    return (0, o.jsx)(x, {
        heading: e,
        bodyText: n
    });
}
function I() {
    let e = m.intl.string(m.t.bFgqYG),
        [n] = r.useState(() => {
            var e;
            return (null != (e = (0, c.sample)(y)) ? e : y[0])();
        });
    return (0, o.jsx)(x, {
        heading: e,
        bodyText: n
    });
}
function O(e) {
    let { user: n, guildId: t, channelId: l, onClose: s } = e,
        d = u.ZP.getName(t, l, n),
        p = m.intl.formatToPlainString(m.t.sjSitL, { name: d }),
        [_] = r.useState(() => {
            var e;
            return (null != (e = (0, c.sample)(h)) ? e : h[0])(d);
        }),
        y = r.useCallback(() => {
            a.Z.openPrivateChannel({ recipientIds: n.id }), null == s || s();
        }, [n.id, s]),
        g = r.useCallback(() => {
            a.Z.openPrivateChannel({
                recipientIds: n.id,
                joinCall: !0
            }),
                null == s || s();
        }, [n.id, s]);
    return (0, o.jsx)(x, {
        heading: p,
        bodyText: _,
        children: (0, o.jsxs)('div', {
            className: b.buttonRow,
            children: [
                (0, o.jsx)(f.tG, {
                    icon: i.kBi,
                    text: m.intl.string(m.t['g33r/P']),
                    onClick: y,
                    themeColor: 'secondary'
                }),
                (0, o.jsx)(f.tG, {
                    icon: i.qWc,
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
        children: g.map((n, t) => {
            let r = d.Z.get(n);
            if (null == r) return null;
            let c = (0, i.wjy)(e) ? r.icon.darkPNG : r.icon.lightPNG;
            return (0, o.jsx)(
                'img',
                {
                    src: c,
                    alt: r.name,
                    className: b.connectionIcon
                },
                t
            );
        })
    });
}
function P(e) {
    let { onClose: n } = e,
        t = r.useCallback(() => {
            null == n || n(), l.Z.open(p.oAB.CONNECTIONS);
        }, [n]),
        c = r.useCallback(() => {
            null == n || n(), l.Z.open(p.oAB.CONTENT_AND_SOCIAL, 'CONNECTED_GAMES');
        }, [n]);
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
                        onClick: t,
                        themeColor: 'secondary'
                    }),
                    (0, o.jsx)(f.tG, {
                        text: m.intl.string(m.t.GTCx0t),
                        onClick: c,
                        themeColor: 'secondary'
                    })
                ]
            })
        ]
    });
}
