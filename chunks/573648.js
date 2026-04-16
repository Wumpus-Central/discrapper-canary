"use strict";
n.d(t, { A: () => _ });
var r = n(735438),
    i = n.n(r),
    s = n(374994),
    a = n(998218),
    o = n(652215),
    l = n(534952);
let u = [
        {
            type: o.fg2.TWITCH,
            name: "Twitch",
            color: (0, s.dE)("PLATFORM_TWITCH"),
            icon: {
                lightPNG: n(491679),
                darkPNG: n(491679),
                whitePNG: n(147327),
                lightSVG: n(319952),
                darkSVG: n(319952),
                whiteSVG: n(924016),
            },
            enabled: !0,
            getPlatformUserUrl: (e) => {
                let { name: t } = e;
                return `https://www.twitch.tv/${encodeURIComponent(t)}`;
            },
            domains: ["twitch.tv", "twitch.com"],
        },
        {
            type: o.fg2.YOUTUBE,
            name: "YouTube",
            color: (0, s.dE)("PLATFORM_YOUTUBE"),
            icon: {
                lightPNG: n(913027),
                darkPNG: n(913027),
                whitePNG: n(562771),
                lightSVG: n(366644),
                darkSVG: n(366644),
                whiteSVG: n(76324),
            },
            enabled: !0,
            getPlatformUserUrl: (e) => {
                let { id: t } = e;
                return `https://www.youtube.com/channel/${encodeURIComponent(t)}`;
            },
            domains: ["youtube.com", "youtu.be"],
        },
        {
            type: o.fg2.BATTLENET,
            name: "Battle.net",
            color: (0, s.dE)("PLATFORM_BATTLENET"),
            icon: {
                lightPNG: n(560623),
                darkPNG: n(560623),
                whitePNG: n(20847),
                lightSVG: n(794368),
                darkSVG: n(794368),
                whiteSVG: n(254592),
            },
            enabled: !0,
        },
        {
            type: o.fg2.BLUESKY,
            name: "Bluesky",
            icon: {
                lightPNG: n(419075),
                darkPNG: n(419075),
                whitePNG: n(450259),
                lightSVG: n(872692),
                darkSVG: n(872692),
                whiteSVG: n(480164),
            },
            enabled: !0,
            getPlatformUserUrl: (e) => {
                let { id: t } = e;
                return `https://bsky.app/profile/${encodeURIComponent(t).replaceAll("%3A", ":")}`;
            },
            isFederated: !0,
            hasMetadata: !0,
        },
        {
            type: o.fg2.BUNGIE,
            name: "Bungie.net",
            color: (0, s.dE)("PLATFORM_BUNGIE"),
            icon: {
                lightPNG: n(788439),
                darkPNG: n(664471),
                whitePNG: n(356556),
                lightSVG: n(624632),
                darkSVG: n(500664),
                whiteSVG: n(752987),
            },
            enabled: !0,
        },
        {
            type: o.fg2.SKYPE,
            name: "Skype",
            color: (0, s.dE)("PLATFORM_SKYPE"),
            icon: {
                lightPNG: n(2016),
                darkPNG: n(2016),
                whitePNG: n(915782),
                lightSVG: n(831151),
                darkSVG: n(831151),
                whiteSVG: n(205809),
            },
            enabled: !1,
            getPlatformUserUrl: (e) => {
                let { id: t } = e;
                return `skype:${encodeURIComponent(t)}?userinfo`;
            },
        },
        {
            type: o.fg2.LEAGUE_OF_LEGENDS,
            name: "League of Legends",
            color: (0, s.dE)("PLATFORM_LOL"),
            icon: {
                lightPNG: n(17096),
                darkPNG: n(17096),
                whitePNG: n(801294),
                lightSVG: n(604199),
                darkSVG: n(604199),
                whiteSVG: n(415369),
            },
            enabled: !0,
            replacedBy: l.OW.RIOT_GAMES,
        },
        {
            type: o.fg2.STEAM,
            name: "Steam",
            color: (0, s.dE)("PLATFORM_STEAM"),
            icon: {
                lightPNG: n(123775),
                darkPNG: n(601156),
                whitePNG: n(601156),
                lightSVG: n(384112),
                darkSVG: n(329219),
                whiteSVG: n(329219),
            },
            enabled: !0,
            getPlatformUserUrl: (e) => {
                let { id: t } = e;
                return `https://steamcommunity.com/profiles/${encodeURIComponent(t)}`;
            },
            hasMetadata: !0,
        },
        {
            type: o.fg2.REDDIT,
            name: "Reddit",
            color: (0, s.dE)("PLATFORM_REDDIT"),
            icon: {
                lightPNG: n(393027),
                darkPNG: n(393027),
                whitePNG: n(60662),
                lightSVG: n(605023),
                darkSVG: n(605023),
                whiteSVG: n(561921),
            },
            enabled: !0,
            domains: ["reddit.com"],
            getPlatformUserUrl: (e) => {
                let { name: t } = e;
                return `https://www.reddit.com/u/${encodeURIComponent(t)}`;
            },
            hasMetadata: !0,
        },
        {
            type: o.fg2.FACEBOOK,
            name: "Facebook",
            color: (0, s.dE)("PLATFORM_FACEBOOK"),
            icon: {
                lightPNG: n(427788),
                darkPNG: n(427788),
                whitePNG: n(994546),
                lightSVG: n(340571),
                darkSVG: n(340571),
                whiteSVG: n(709693),
            },
            domains: ["facebook.com"],
            enabled: !0,
        },
        {
            type: o.fg2.TWITTER_LEGACY,
            name: "Twitter",
            color: (0, s.dE)("PLATFORM_TWITTER"),
            icon: {
                lightPNG: n(482585),
                darkPNG: n(482585),
                whitePNG: n(244241),
                lightSVG: n(928014),
                darkSVG: n(928014),
                whiteSVG: n(221238),
            },
            enabled: !1,
            getPlatformUserUrl: (e) => {
                let { name: t } = e;
                return `https://twitter.com/${encodeURIComponent(t)}`;
            },
            domains: ["twitter.com"],
            hasMetadata: !0,
        },
        {
            type: o.fg2.TWITTER,
            name: "X",
            color: (0, s.dE)("PLATFORM_TWITTER"),
            icon: {
                lightPNG: n(311891),
                darkPNG: n(49515),
                whitePNG: n(284888),
                lightSVG: n(341796),
                darkSVG: n(65516),
                whiteSVG: n(266583),
            },
            enabled: !0,
            getPlatformUserUrl: (e) => {
                let { name: t } = e;
                return `https://x.com/${encodeURIComponent(t)}`;
            },
            domains: ["x.com"],
            hasMetadata: !0,
        },
        {
            type: o.fg2.SPOTIFY,
            name: "Spotify",
            color: (0, s.dE)("PLATFORM_SPOTIFY"),
            icon: {
                lightPNG: n(223184),
                darkPNG: n(223184),
                whitePNG: n(227926),
                lightSVG: n(305855),
                darkSVG: n(305855),
                whiteSVG: n(416353),
            },
            enabled: !0,
            getPlatformUserUrl: (e) => {
                let { id: t } = e;
                return `https://open.spotify.com/user/${encodeURIComponent(t)}`;
            },
        },
        {
            type: o.fg2.XBOX,
            name: "Xbox",
            color: (0, s.dE)("PLATFORM_XBOX"),
            icon: {
                lightPNG: n(443770),
                darkPNG: n(254485),
                whitePNG: n(254485),
                lightSVG: n(817301),
                darkSVG: n(278922),
                whiteSVG: n(278922),
                customPNG: n(783197),
            },
            enabled: !0,
        },
        {
            type: o.fg2.SAMSUNG,
            name: "Samsung Galaxy",
            color: (0, s.dE)("PLATFORM_SAMSUNG"),
            icon: {
                lightPNG: n(609106),
                darkPNG: n(609106),
                whitePNG: n(293472),
                lightSVG: n(365725),
                darkSVG: n(365725),
                whiteSVG: n(122607),
            },
            enabled: !1,
        },
        {
            type: o.fg2.GITHUB,
            name: "GitHub",
            color: (0, s.dE)("PLATFORM_GITHUB"),
            icon: {
                lightPNG: n(442932),
                darkPNG: n(325031),
                whitePNG: n(325031),
                lightSVG: n(514003),
                darkSVG: n(911272),
                whiteSVG: n(911272),
            },
            enabled: !0,
            getPlatformUserUrl: (e) => {
                let { name: t } = e;
                return `https://github.com/${encodeURIComponent(t)}`;
            },
            domains: ["github.com"],
        },
        {
            type: o.fg2.PLAYSTATION,
            name: "PlayStation Network",
            color: (0, s.dE)("PLATFORM_PLAYSTATION"),
            icon: {
                lightPNG: n(695973),
                darkPNG: n(346058),
                whitePNG: n(346058),
                lightSVG: n(287930),
                darkSVG: n(512069),
                whiteSVG: n(512069),
            },
            enabled: !0,
        },
        {
            type: o.fg2.PLAYSTATION_STAGING,
            name: "PlayStation Network (Staging)",
            color: (0, s.dE)("PLATFORM_PLAYSTATION"),
            icon: {
                lightPNG: n(346058),
                darkPNG: n(695973),
                whitePNG: n(695973),
                lightSVG: n(512069),
                darkSVG: n(287930),
                whiteSVG: n(287930),
            },
            enabled: !1,
        },
        {
            type: o.fg2.EPIC_GAMES,
            name: "Epic Games",
            icon: {
                lightPNG: n(350794),
                darkPNG: n(179544),
                whitePNG: n(179544),
                lightSVG: n(490629),
                darkSVG: n(161239),
                whiteSVG: n(161239),
            },
            enabled: !0,
        },
        {
            type: o.fg2.RIOT_GAMES,
            name: "Riot Games",
            icon: {
                lightPNG: n(625906),
                darkPNG: n(625906),
                whitePNG: n(853504),
                lightSVG: n(891581),
                darkSVG: n(891581),
                whiteSVG: n(198991),
                blackSVG: n(135577),
            },
            enabled: !0,
            replacedBy: l.OW.RIOT_GAMES,
        },
        {
            type: o.fg2.ROBLOX,
            name: "Roblox",
            icon: {
                lightPNG: n(685701),
                darkPNG: n(358717),
                whitePNG: n(786602),
                lightSVG: n(905946),
                darkSVG: n(152962),
                whiteSVG: n(952613),
            },
            enabled: !0,
            getPlatformUserUrl: (e) => {
                let { id: t } = e;
                return `https://roblox.com/users/${encodeURIComponent(t)}/profile`;
            },
        },
        {
            type: o.fg2.PAYPAL,
            name: "PayPal",
            icon: {
                lightPNG: n(365083),
                darkPNG: n(365083),
                whitePNG: n(127787),
                lightSVG: n(753212),
                darkSVG: n(753212),
                whiteSVG: n(143788),
            },
            enabled: !0,
            hasMetadata: !0,
        },
        {
            type: o.fg2.EBAY,
            name: "eBay",
            icon: {
                lightPNG: n(139673),
                darkPNG: n(139673),
                whitePNG: n(941265),
                lightSVG: n(127630),
                darkSVG: n(127630),
                whiteSVG: n(978614),
            },
            enabled: !0,
            hasMetadata: !0,
            getPlatformUserUrl: (e) => {
                let { name: t } = e;
                return `https://www.ebay.com/usr/${encodeURIComponent(t)}`;
            },
        },
        {
            type: o.fg2.TIKTOK,
            name: "TikTok",
            icon: {
                lightPNG: n(996319),
                darkPNG: n(393903),
                whitePNG: n(393903),
                lightSVG: n(824592),
                darkSVG: n(627648),
                whiteSVG: n(627648),
            },
            enabled: !0,
            hasMetadata: !0,
            domains: ["tiktok.com"],
            getPlatformUserUrl: (e) => {
                let { name: t } = e;
                return `https://www.tiktok.com/@${encodeURIComponent(t)}`;
            },
        },
        {
            type: o.fg2.INSTAGRAM,
            name: "Instagram",
            icon: {
                lightPNG: n(833070),
                darkPNG: n(833070),
                whitePNG: n(767148),
                lightSVG: n(23849),
                darkSVG: n(23849),
                whiteSVG: n(137403),
            },
            enabled: !1,
            domains: ["instagram.com"],
            getPlatformUserUrl: (e) => {
                let { name: t } = e;
                return `https://www.instagram.com/${encodeURIComponent(t)}`;
            },
        },
        {
            type: o.fg2.MASTODON,
            name: "Mastodon",
            icon: {
                lightPNG: n(947839),
                darkPNG: n(947839),
                whitePNG: n(749023),
                lightSVG: n(724528),
                darkSVG: n(724528),
                whiteSVG: n(60944),
            },
            enabled: !1,
            getPlatformUserUrl: (e) => {
                let { id: t } = e;
                return t;
            },
            isFederated: !0,
            hasMetadata: !0,
        },
        {
            type: o.fg2.CRUNCHYROLL,
            name: "Crunchyroll",
            color: (0, s.dE)("PLATFORM_CRUNCHYROLL"),
            icon: {
                lightPNG: n(405921),
                darkPNG: n(405921),
                whitePNG: n(405921),
                lightSVG: n(700518),
                darkSVG: n(700518),
                whiteSVG: n(415662),
            },
            enabled: !0,
        },
        {
            type: o.fg2.DOMAIN,
            name: "Domain",
            icon: {
                lightPNG: n(647951),
                darkPNG: n(490431),
                whitePNG: n(490431),
                lightSVG: n(475808),
                darkSVG: n(267120),
                whiteSVG: n(267120),
            },
            getPlatformUserUrl: (e) => {
                let { id: t } = e;
                return `https://${t}/`;
            },
            enabled: !0,
        },
        {
            type: o.fg2.AMAZON_MUSIC,
            name: "Amazon Music",
            icon: {
                lightPNG: n(922946),
                darkPNG: n(922946),
                whitePNG: n(922946),
                lightSVG: n(730733),
                darkSVG: n(730733),
                whiteSVG: n(730733),
            },
            enabled: !0,
        },
        {
            type: o.fg2.META_QUEST_OR_HORIZON,
            name: "Meta Quest",
            icon: {
                lightPNG: n(218003),
                darkPNG: n(544427),
                whitePNG: n(788504),
                lightSVG: n(731556),
                darkSVG: n(983724),
                whiteSVG: n(736023),
            },
            enabled: !1,
        },
    ],
    c = i().keyBy(u, "type"),
    d = {};
u.forEach((e) => {
    e.domains?.forEach((t) => {
        d[t] = e;
    });
});
let _ = {
    get: (e) => c[e] ?? null,
    getByUrl(e) {
        let t = a.A.toURLSafe(e);
        if (null == t) return;
        let n = t.hostname;
        return d[n.startsWith("www.") ? n.slice(4) : n];
    },
    isSupported: (e) => Object.prototype.hasOwnProperty.call(c, e),
    map: (e) => u.map(e),
    filter(e) {
        let t = u.filter(e);
        return (
            t.sort((e, t) => {
                let { name: n } = e,
                    { name: r } = t;
                return n.localeCompare(r);
            }),
            t
        );
    },
    find: (e) => u.find(e),
};
