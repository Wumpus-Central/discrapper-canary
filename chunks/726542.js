var i = r(627494);
var a = r(757143);
var o = r(392711),
    s = r.n(o),
    l = r(692547),
    u = r(591759),
    c = r(981631);
let d = [
        {
            type: c.ABu.TWITCH,
            name: 'Twitch',
            color: l.Z.unsafe_rawColors.TWITCH.css,
            icon: {
                lightPNG: r(635643),
                darkPNG: r(635643),
                whitePNG: r(800346),
                lightSVG: r(160050),
                darkSVG: r(160050),
                whiteSVG: r(235779)
            },
            enabled: !0,
            getPlatformUserUrl: (e) => {
                let { name: n } = e;
                return 'https://www.twitch.tv/'.concat(encodeURIComponent(n));
            },
            domains: ['twitch.tv', 'twitch.com']
        },
        {
            type: c.ABu.YOUTUBE,
            name: 'YouTube',
            color: l.Z.unsafe_rawColors.YOUTUBE.css,
            icon: {
                lightPNG: r(459862),
                darkPNG: r(459862),
                whitePNG: r(934689),
                lightSVG: r(529923),
                darkSVG: r(529923),
                whiteSVG: r(141989)
            },
            enabled: !0,
            getPlatformUserUrl: (e) => {
                let { id: n } = e;
                return 'https://www.youtube.com/channel/'.concat(encodeURIComponent(n));
            },
            domains: ['youtube.com', 'youtu.be']
        },
        {
            type: c.ABu.BATTLENET,
            name: 'Battle.net',
            color: l.Z.unsafe_rawColors.BATTLENET.css,
            icon: {
                lightPNG: r(414680),
                darkPNG: r(414680),
                whitePNG: r(573103),
                lightSVG: r(424160),
                darkSVG: r(424160),
                whiteSVG: r(929858)
            },
            enabled: !0
        },
        {
            type: c.ABu.BLUESKY,
            name: 'Bluesky',
            icon: {
                lightPNG: r(618780),
                darkPNG: r(618780),
                whitePNG: r(566961),
                lightSVG: r(387793),
                darkSVG: r(387793),
                whiteSVG: r(148052)
            },
            enabled: !0,
            getPlatformUserUrl: (e) => {
                let { id: n } = e;
                return 'https://bsky.app/profile/'.concat(encodeURIComponent(n).replaceAll('%3A', ':'));
            },
            isFederated: !0,
            hasMetadata: !0
        },
        {
            type: c.ABu.BUNGIE,
            name: 'Bungie.net',
            color: l.Z.unsafe_rawColors.BUNGIE.css,
            icon: {
                lightPNG: r(953522),
                darkPNG: r(706264),
                whitePNG: r(610891),
                lightSVG: r(459293),
                darkSVG: r(970714),
                whiteSVG: r(891049)
            },
            enabled: !0
        },
        {
            type: c.ABu.SKYPE,
            name: 'Skype',
            color: l.Z.unsafe_rawColors.SKYPE.css,
            icon: {
                lightPNG: r(575439),
                darkPNG: r(575439),
                whitePNG: r(27163),
                lightSVG: r(721782),
                darkSVG: r(721782),
                whiteSVG: r(144578)
            },
            enabled: !1,
            getPlatformUserUrl: (e) => {
                let { id: n } = e;
                return 'skype:'.concat(encodeURIComponent(n), '?userinfo');
            }
        },
        {
            type: c.ABu.LEAGUE_OF_LEGENDS,
            name: 'League of Legends',
            color: l.Z.unsafe_rawColors.LOL.css,
            icon: {
                lightPNG: r(275556),
                darkPNG: r(275556),
                whitePNG: r(26963),
                lightSVG: r(153711),
                darkSVG: r(153711),
                whiteSVG: r(327574)
            },
            enabled: !0
        },
        {
            type: c.ABu.STEAM,
            name: 'Steam',
            color: l.Z.unsafe_rawColors.STEAM.css,
            icon: {
                lightPNG: r(929234),
                darkPNG: r(170131),
                whitePNG: r(170131),
                lightSVG: r(227304),
                darkSVG: r(763613),
                whiteSVG: r(763613)
            },
            enabled: !0,
            getPlatformUserUrl: (e) => {
                let { id: n } = e;
                return 'https://steamcommunity.com/profiles/'.concat(encodeURIComponent(n));
            },
            hasMetadata: !0
        },
        {
            type: c.ABu.REDDIT,
            name: 'Reddit',
            color: l.Z.unsafe_rawColors.REDDIT.css,
            icon: {
                lightPNG: r(211434),
                darkPNG: r(211434),
                whitePNG: r(682170),
                lightSVG: r(592358),
                darkSVG: r(592358),
                whiteSVG: r(972428)
            },
            enabled: !0,
            domains: ['reddit.com'],
            getPlatformUserUrl: (e) => {
                let { name: n } = e;
                return 'https://www.reddit.com/u/'.concat(encodeURIComponent(n));
            },
            hasMetadata: !0
        },
        {
            type: c.ABu.FACEBOOK,
            name: 'Facebook',
            color: l.Z.unsafe_rawColors.FACEBOOK.css,
            icon: {
                lightPNG: r(762019),
                darkPNG: r(762019),
                whitePNG: r(620530),
                lightSVG: r(589232),
                darkSVG: r(589232),
                whiteSVG: r(318049)
            },
            domains: ['facebook.com'],
            enabled: !0
        },
        {
            type: c.ABu.TWITTER_LEGACY,
            name: 'Twitter',
            color: l.Z.unsafe_rawColors.TWITTER.css,
            icon: {
                lightPNG: r(954549),
                darkPNG: r(954549),
                whitePNG: r(550886),
                lightSVG: r(90961),
                darkSVG: r(90961),
                whiteSVG: r(819273)
            },
            enabled: !1,
            getPlatformUserUrl: (e) => {
                let { name: n } = e;
                return 'https://twitter.com/'.concat(encodeURIComponent(n));
            },
            domains: ['twitter.com'],
            hasMetadata: !0
        },
        {
            type: c.ABu.TWITTER,
            name: 'X',
            color: l.Z.unsafe_rawColors.TWITTER.css,
            icon: {
                lightPNG: r(327555),
                darkPNG: r(126776),
                whitePNG: r(778385),
                lightSVG: r(257325),
                darkSVG: r(451168),
                whiteSVG: r(580927)
            },
            enabled: !0,
            getPlatformUserUrl: (e) => {
                let { name: n } = e;
                return 'https://x.com/'.concat(encodeURIComponent(n));
            },
            domains: ['x.com'],
            hasMetadata: !0
        },
        {
            type: c.ABu.SPOTIFY,
            name: 'Spotify',
            color: l.Z.unsafe_rawColors.SPOTIFY.css,
            icon: {
                lightPNG: r(182553),
                darkPNG: r(182553),
                whitePNG: r(955852),
                lightSVG: r(545734),
                darkSVG: r(545734),
                whiteSVG: r(136142)
            },
            enabled: !0,
            getPlatformUserUrl: (e) => {
                let { id: n } = e;
                return 'https://open.spotify.com/user/'.concat(encodeURIComponent(n));
            }
        },
        {
            type: c.ABu.XBOX,
            name: 'Xbox',
            color: l.Z.unsafe_rawColors.XBOX.css,
            icon: {
                lightPNG: r(979660),
                darkPNG: r(157981),
                whitePNG: r(157981),
                lightSVG: r(66992),
                darkSVG: r(158173),
                whiteSVG: r(158173),
                customPNG: r(436740)
            },
            enabled: !0
        },
        {
            type: c.ABu.SAMSUNG,
            name: 'Samsung Galaxy',
            color: l.Z.unsafe_rawColors.SAMSUNG.css,
            icon: {
                lightPNG: r(664982),
                darkPNG: r(664982),
                whitePNG: r(442123),
                lightSVG: r(601568),
                darkSVG: r(601568),
                whiteSVG: r(7007)
            },
            enabled: !1
        },
        {
            type: c.ABu.GITHUB,
            name: 'GitHub',
            color: l.Z.unsafe_rawColors.GITHUB.css,
            icon: {
                lightPNG: r(843605),
                darkPNG: r(789822),
                whitePNG: r(789822),
                lightSVG: r(247519),
                darkSVG: r(184887),
                whiteSVG: r(184887)
            },
            enabled: !0,
            getPlatformUserUrl: (e) => {
                let { name: n } = e;
                return 'https://github.com/'.concat(encodeURIComponent(n));
            },
            domains: ['github.com']
        },
        {
            type: c.ABu.PLAYSTATION,
            name: 'PlayStation Network',
            color: l.Z.unsafe_rawColors.PLAYSTATION.css,
            icon: {
                lightPNG: r(385751),
                darkPNG: r(399592),
                whitePNG: r(399592),
                lightSVG: r(223434),
                darkSVG: r(350379),
                whiteSVG: r(350379)
            },
            enabled: !0
        },
        {
            type: c.ABu.PLAYSTATION_STAGING,
            name: 'PlayStation Network (Staging)',
            color: l.Z.unsafe_rawColors.PLAYSTATION.css,
            icon: {
                lightPNG: r(399592),
                darkPNG: r(385751),
                whitePNG: r(385751),
                lightSVG: r(350379),
                darkSVG: r(223434),
                whiteSVG: r(223434)
            },
            enabled: !1
        },
        {
            type: c.ABu.EPIC_GAMES,
            name: 'Epic Games',
            icon: {
                lightPNG: r(707873),
                darkPNG: r(549727),
                whitePNG: r(549727),
                lightSVG: r(769582),
                darkSVG: r(532293),
                whiteSVG: r(532293)
            },
            enabled: !0
        },
        {
            type: c.ABu.RIOT_GAMES,
            name: 'Riot Games',
            icon: {
                lightPNG: r(406818),
                darkPNG: r(406818),
                whitePNG: r(451192),
                lightSVG: r(596001),
                darkSVG: r(596001),
                whiteSVG: r(641169)
            },
            enabled: !0
        },
        {
            type: c.ABu.ROBLOX,
            name: 'Roblox',
            icon: {
                lightPNG: r(670423),
                darkPNG: r(414773),
                whitePNG: r(731596),
                lightSVG: r(553715),
                darkSVG: r(678922),
                whiteSVG: r(752561)
            },
            enabled: !0,
            getPlatformUserUrl: (e) => {
                let { id: n } = e;
                return 'https://roblox.com/users/'.concat(encodeURIComponent(n), '/profile');
            }
        },
        {
            type: c.ABu.PAYPAL,
            name: 'PayPal',
            icon: {
                lightPNG: r(501001),
                darkPNG: r(501001),
                whitePNG: r(219389),
                lightSVG: r(698946),
                darkSVG: r(698946),
                whiteSVG: r(737531)
            },
            enabled: !0,
            hasMetadata: !0
        },
        {
            type: c.ABu.EBAY,
            name: 'eBay',
            icon: {
                lightPNG: r(215741),
                darkPNG: r(215741),
                whitePNG: r(463728),
                lightSVG: r(519515),
                darkSVG: r(519515),
                whiteSVG: r(98668)
            },
            enabled: !0,
            hasMetadata: !0,
            getPlatformUserUrl: (e) => {
                let { name: n } = e;
                return 'https://www.ebay.com/usr/'.concat(encodeURIComponent(n));
            }
        },
        {
            type: c.ABu.TIKTOK,
            name: 'TikTok',
            icon: {
                lightPNG: r(699308),
                darkPNG: r(137181),
                whitePNG: r(137181),
                lightSVG: r(890849),
                darkSVG: r(155885),
                whiteSVG: r(155885)
            },
            enabled: !0,
            hasMetadata: !0,
            domains: ['tiktok.com'],
            getPlatformUserUrl: (e) => {
                let { name: n } = e;
                return 'https://www.tiktok.com/@'.concat(encodeURIComponent(n));
            }
        },
        {
            type: c.ABu.INSTAGRAM,
            name: 'Instagram',
            icon: {
                lightPNG: r(232720),
                darkPNG: r(232720),
                whitePNG: r(71996),
                lightSVG: r(526659),
                darkSVG: r(526659),
                whiteSVG: r(326720)
            },
            enabled: !1,
            domains: ['instagram.com'],
            getPlatformUserUrl: (e) => {
                let { name: n } = e;
                return 'https://www.instagram.com/'.concat(encodeURIComponent(n));
            }
        },
        {
            type: c.ABu.MASTODON,
            name: 'Mastodon',
            icon: {
                lightPNG: r(913883),
                darkPNG: r(913883),
                whitePNG: r(744387),
                lightSVG: r(692552),
                darkSVG: r(692552),
                whiteSVG: r(49722)
            },
            enabled: !1,
            getPlatformUserUrl: (e) => {
                let { id: n } = e;
                return n;
            },
            isFederated: !0,
            hasMetadata: !0
        },
        {
            type: c.ABu.CRUNCHYROLL,
            name: 'Crunchyroll',
            color: l.Z.unsafe_rawColors.CRUNCHYROLL.css,
            icon: {
                lightPNG: r(469024),
                darkPNG: r(469024),
                whitePNG: r(469024),
                lightSVG: r(654009),
                darkSVG: r(654009),
                whiteSVG: r(670618)
            },
            enabled: !0
        },
        {
            type: c.ABu.DOMAIN,
            name: 'Domain',
            icon: {
                lightPNG: r(476735),
                darkPNG: r(561036),
                whitePNG: r(561036),
                lightSVG: r(329074),
                darkSVG: r(664935),
                whiteSVG: r(664935)
            },
            getPlatformUserUrl: (e) => {
                let { id: n } = e;
                return 'https://'.concat(n, '/');
            },
            enabled: !0
        },
        {
            type: c.ABu.AMAZON_MUSIC,
            name: 'Amazon Music',
            icon: {
                lightPNG: r(495036),
                darkPNG: r(495036),
                whitePNG: r(495036),
                lightSVG: r(605098),
                darkSVG: r(605098),
                whiteSVG: r(605098)
            },
            enabled: !0
        }
    ],
    f = s().keyBy(d, 'type'),
    p = {};
d.forEach((e) => {
    var n;
    null === (n = e.domains) ||
        void 0 === n ||
        n.forEach((n) => {
            p[n] = e;
        });
}),
    (n.Z = {
        get(e) {
            var n;
            return null !== (n = f[e]) && void 0 !== n ? n : null;
        },
        getByUrl(e) {
            let n = u.Z.toURLSafe(e);
            if (null == n) return;
            let r = n.hostname;
            return p[r.startsWith('www.') ? r.slice(4) : r];
        },
        isSupported: (e) => Object.prototype.hasOwnProperty.call(f, e),
        map: (e) => d.map(e),
        filter(e) {
            let n = d.filter(e);
            return (
                n.sort((e, n) => {
                    let { name: r } = e,
                        { name: i } = n;
                    return r.localeCompare(i);
                }),
                n
            );
        },
        find: (e) => d.find(e)
    });
