n.d(t, {
    P9: () => I,
    Uf: () => N,
    b0: () => O,
    s_: () => j
}),
    n(388685);
var r = n(255367),
    o = n(73800),
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
    y = [() => m.intl.string(m.t.nFSbeH), () => m.intl.string(m.t.gTcxOz), () => m.intl.string(m.t['8T0wYm']), () => m.intl.string(m.t.BIHl1t), () => m.intl.string(m.t.jhBm09)],
    x = [() => m.intl.string(m.t.AyMGXF), () => m.intl.string(m.t.aAFW7e), (e) => m.intl.formatToPlainString(m.t.h2g0cH, { name: e }), () => m.intl.string(m.t['rrYh5+']), () => m.intl.string(m.t['HX3K+P']), () => m.intl.string(m.t['/yW3aW']), () => m.intl.string(m.t['PmL/v7']), () => m.intl.string(m.t.IALa3t), () => m.intl.string(m.t.HRcTFB), () => m.intl.string(m.t.NuCqPj), () => m.intl.string(m.t['M1tw+/']), () => m.intl.string(m.t.UBm1y8), () => m.intl.string(m.t.Cu95PT), () => m.intl.string(m.t['R/wFur']), () => m.intl.string(m.t.HQPAVV), () => m.intl.string(m.t.YolGh4)],
    h = [p.ABu.EPIC_GAMES, p.ABu.RIOT_GAMES, p.ABu.XBOX, p.ABu.SPOTIFY, p.ABu.PLAYSTATION, p.ABu.LEAGUE_OF_LEGENDS, p.ABu.STEAM, p.ABu.CRUNCHYROLL, p.ABu.YOUTUBE, p.ABu.REDDIT, p.ABu.BATTLENET, p.ABu.GITHUB, p.ABu.TIKTOK, p.ABu.TWITTER, p.ABu.TWITCH];
function g(e) {
    let { heading: t, bodyText: n, children: o } = e;
    return (0, r.jsxs)('div', {
        className: b.empty,
        children: [
            (0, r.jsxs)('div', {
                className: b.textContainer,
                children: [
                    (0, r.jsx)(c.X6q, {
                        variant: 'heading-md/medium',
                        color: 'header-primary',
                        children: t
                    }),
                    (0, r.jsx)(c.Text, {
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
function j() {
    let e = m.intl.string(m.t.RnD2yc),
        [t] = o.useState(() => {
            var e;
            return (null != (e = (0, i.sample)(_)) ? e : _[0])();
        });
    return (0, r.jsx)(g, {
        heading: e,
        bodyText: t
    });
}
function O() {
    let e = m.intl.string(m.t.bFgqYG),
        [t] = o.useState(() => {
            var e;
            return (null != (e = (0, i.sample)(y)) ? e : y[0])();
        });
    return (0, r.jsx)(g, {
        heading: e,
        bodyText: t
    });
}
function I(e) {
    let { user: t, guildId: n, channelId: l, onClose: s } = e,
        d = u.ZP.getName(n, l, t),
        p = m.intl.formatToPlainString(m.t.sjSitL, { name: d }),
        [_] = o.useState(() => {
            var e;
            return (null != (e = (0, i.sample)(x)) ? e : x[0])(d);
        }),
        y = o.useCallback(() => {
            a.Z.openPrivateChannel({ recipientIds: t.id }), null == s || s();
        }, [t.id, s]),
        h = o.useCallback(() => {
            a.Z.openPrivateChannel({
                recipientIds: t.id,
                joinCall: !0
            }),
                null == s || s();
        }, [t.id, s]);
    return (0, r.jsx)(g, {
        heading: p,
        bodyText: _,
        children: (0, r.jsxs)('div', {
            className: b.buttonRow,
            children: [
                (0, r.jsx)(f.tG, {
                    icon: c.kBi,
                    text: m.intl.string(m.t['g33r/P']),
                    onClick: y,
                    themeColor: 'secondary'
                }),
                (0, r.jsx)(f.tG, {
                    icon: c.qWc,
                    text: m.intl.string(m.t.JJogjo),
                    onClick: h,
                    themeColor: 'secondary'
                })
            ]
        })
    });
}
function v() {
    let e = (0, s.ZP)();
    return (0, r.jsx)('div', {
        className: b.connectionPlatforms,
        children: h.map((t, n) => {
            let o = d.Z.get(t);
            if (null == o) return null;
            let i = (0, c.wjy)(e) ? o.icon.darkPNG : o.icon.lightPNG;
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
function N(e) {
    let { onClose: t } = e,
        n = o.useCallback(() => {
            null == t || t(), l.Z.open(p.oAB.CONNECTIONS);
        }, [t]),
        i = o.useCallback(() => {
            null == t || t(), l.Z.open(p.oAB.CONTENT_AND_SOCIAL, 'CONNECTED_GAMES');
        }, [t]);
    return (0, r.jsxs)(g, {
        heading: m.intl.string(m.t.Sc0oWF),
        bodyText: m.intl.string(m.t.m8UJqa),
        children: [
            (0, r.jsx)(v, {}),
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
