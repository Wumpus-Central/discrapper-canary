n.d(t, {
    CT: () => A,
    Du: () => u,
    Gh: () => W,
    HR: () => D,
    K_: () => U,
    LK: () => y,
    NC: () => Z,
    OH: () => j,
    Sq: () => h,
    TY: () => m,
    U6: () => b,
    Us: () => g,
    WZ: () => C,
    Wy: () => I,
    c4: () => p,
    cG: () => d,
    cm: () => _,
    dM: () => B,
    f4: () => O,
    gh: () => R,
    i1: () => M,
    i6: () => L,
    jK: () => N,
    lt: () => F,
    mv: () => v,
    n1: () => V,
    q2: () => f,
    qC: () => x,
    uw: () => E,
    ym: () => k,
    zv: () => l.z
}),
    n(411104),
    n(47120),
    n(977457),
    n(266796);
var r = n(392711),
    i = n.n(r),
    o = n(913527),
    a = n.n(o),
    s = n(116175),
    l = n(137920),
    c = n(388032);
let u = 200,
    d = 4,
    f = 'ClanSettingsModal',
    _ = 20,
    p = 30,
    h = 24,
    m = 12,
    g = 300,
    E = 3;
a()('2024-01-01T00:00:00');
let b = '',
    y = ['cozy', 'crunchy', 'chaos'];
function v(e) {
    switch (e) {
        case l.z.SOCIAL:
            return c.NW.string(c.t.cxUHv7);
        case l.z.CASUAL:
            return c.NW.string(c.t.IZZoho);
        case l.z.COMPETITIVE:
            return c.NW.string(c.t.Zo1X5u);
        case l.z.VERY_HARDCORE:
            return c.NW.string(c.t.xfySBw);
        case l.z.CREATIVE:
        case l.z.NONE:
            return null;
        default:
            return e;
    }
}
function O() {
    return {
        [l.z.SOCIAL]: {
            type: l.z.SOCIAL,
            emoji: '\uD83D\uDC4B',
            title: c.NW.string(c.t.cxUHv7),
            subtitle: c.NW.string(c.t.Yd1GgY)
        },
        [l.z.CASUAL]: {
            type: l.z.CASUAL,
            emoji: '\uD83C\uDFAE',
            title: c.NW.string(c.t.IZZoho),
            subtitle: c.NW.string(c.t['2Af/ZW'])
        },
        [l.z.COMPETITIVE]: {
            type: l.z.COMPETITIVE,
            emoji: '\u2694️',
            title: c.NW.string(c.t.Zo1X5u),
            subtitle: c.NW.string(c.t['dnOc/v'])
        },
        [l.z.VERY_HARDCORE]: {
            type: l.z.VERY_HARDCORE,
            emoji: '\uD83D\uDC80',
            title: c.NW.string(c.t.xfySBw),
            subtitle: c.NW.string(c.t.rSwwx8)
        }
    };
}
var I = (function (e) {
    return (e[(e.GAMES = 0)] = 'GAMES'), (e[(e.PLAYSTYLE = 1)] = 'PLAYSTYLE'), (e[(e.UTILITY_TRAITS = 2)] = 'UTILITY_TRAITS'), (e[(e.INTERESTS = 3)] = 'INTERESTS'), (e[(e.DESCRIPTION = 4)] = 'DESCRIPTION'), (e[(e.CUSTOMIZE_TAG_BADGE = 5)] = 'CUSTOMIZE_TAG_BADGE'), (e[(e.CUSTOMIZE_BANNER = 6)] = 'CUSTOMIZE_BANNER'), (e[(e.MEMBER_APPLICATION = 7)] = 'MEMBER_APPLICATION'), e;
})({});
if (isNaN(Number(Object.values(I).pop()))) throw Error('Failed to get the last step in the ClanSetupSteps enum');
let S = ['Server: NA', 'Server: EU', 'Server: LATAM', 'Server: KR', 'Server: AP', 'Voice ON', 'Voice OFF', 'Unrated', 'All Ranks', 'Bronze+', 'Silver+', 'Gold+', 'Platinum+', 'Diamond+'],
    T = new Set([...S, 'Server: NA', 'Server: EU', 'Server: Asia', 'Server: TW/HK/MO', 'Mondstadt', 'Liyue', 'Inazuma', 'Sumeru', 'Fontaine', 'F2P', 'Spenders', 'Co-op', 'Support']),
    N = ['20+', '30+', '40+', 'All Ages'],
    A = ['Recurring Events', 'Beginner Friendly', 'PUGs', 'Inclusive', 'Parent Friendly', 'Work-life Balance', 'Competitive', 'Streamer', 'Esports'],
    C = new Set([...S, ...N, ...A]),
    R = new Set(['Bulgarian', 'Chinese (Simplified)', 'Chinese (Traditional)', 'Croatian', 'Czech', 'Danish', 'Dutch', 'English', 'Finnish', 'French', 'German', 'Greek', 'Hindi', 'Hungarian', 'Italian', 'Japanese', 'Korean', 'Lithuanian', 'Norwegian', 'Polish', 'Portuguese', 'Romanian', 'Russian', 'Spanish', 'Swedish', 'Thai', 'Turkish', 'Ukrainian', 'Vietnamese']);
function P(e) {
    return !C.has(e) && !L.has(e) && !R.has(e);
}
function w(e) {
    return (t) => -((+(null != e && !!e.includes(t)) << 4) | (+!!P(t) << 3) | (+!!T.has(t) << 2) | (+!!N.includes(t) << 1) | (+!!A.includes(t) << 0));
}
function D(e, t) {
    return i().sortBy(e, w(t));
}
let L = new Set(['anime', 'fanart', 'venting', 'mudae', 'OwO bot', 'movie nights', 'study together', 'scheduled gaming', 'all day vc', 'slow paced', 'art streams', 'work from home', 'gartic phone', 'fast food reviews', 'dress to impress', 'music production', 'variety shows', 'manga', 'webtoon', 'brainrot', 'topsters', 'dad jokes', 'photography', 'minecraft smp', 'pirate shows', 'skincare', 'microwaved food', 'board games', 'sci-fi books', 'sleeping', 'brunch pics', 'pet pics', 'recipes', 'speedrunning', 'eating on mic', 'k-pop', 'deafened', 'programming', 'study buddies', 'DnD', 'lore dumping', 'sleepy cats', 'podcasts', 'houseplants', 'knitting', 'tech', 'keyboards', 'horses', 'bad movies', 'hiking', 'lo-fi chilling', 'watch together', 'listen alongs', 'late night tacos', 'drip', 'trading', 'travel', 'cups', 'coffee', 'F1', 'roman history', 'ssense doomscrolling', 'skibidi toilet', 'capcut editing', 'tiktok rizz party', 'industrial grade glycine', 'frutiger aero', 'y2k', 'sanrio', 'nuzlockes', 'small form factor pcs', 'esports', 'game modding', 'chiikawa', 'underground rap', 'pc music', 'homestuck', 'horse hoof cleaning', 'analog horror', 'pimple popping', 'asmr', 'ya fiction', 'fanfiction', 'cosplay', 'fanart', 'zines', 'vtubers', 'JRPGs', 'retro gaming', 'collecting', 'coquette', 'true crime', 'critical role', 'cottagecore', 'goblincore', 'renfaire', 'letterboxd', 'tarot readings', 'fortune telling', 'magic tricks', 'ice cold sprite', 'slime', 'soap cutting', 'mukbang', 'premier league', 'NBA', 'hyperpop', 'dance covers', 'photocard trading', 'toploader decorating', 'unboxing', 'decoden', 'jpop', 'mandopop', 'cantopop', 'amapiano', 'ghibli', 'pokemon vgc', 'subway surfers', 'family guy funny moments', 'cranking 90s', 'friday night funkin', 'FNAF']);
var x = (function (e) {
    return (e[(e.NIGHT_SKY = 0)] = 'NIGHT_SKY'), (e[(e.CASTLE = 1)] = 'CASTLE'), (e[(e.WORLD_MAP = 2)] = 'WORLD_MAP'), (e[(e.SEA_FOAM = 3)] = 'SEA_FOAM'), (e[(e.WARP_TUNNEL = 4)] = 'WARP_TUNNEL'), (e[(e.HOUSE = 5)] = 'HOUSE'), (e[(e.HEIGHTMAP = 6)] = 'HEIGHTMAP'), (e[(e.MESH = 7)] = 'MESH'), (e[(e.SPATTER = 8)] = 'SPATTER'), e;
})({});
function M() {
    let e = Object.keys(x).filter((e) => isNaN(Number(e)));
    return x[e[Math.floor(Math.random() * e.length)]];
}
let k = [
        {
            name: 'Boulder',
            primary: '#8c8d8d',
            secondary: '#d0d0d1'
        },
        {
            name: 'Cascade',
            primary: '#43abe9',
            secondary: '#8ad3e8'
        },
        {
            name: 'Thunder',
            primary: '#e8c02f',
            secondary: '#e8d387'
        },
        {
            name: 'Soul',
            primary: '#e72282',
            secondary: '#e875ad'
        },
        {
            name: 'Marsh',
            primary: '#e86e1d',
            secondary: '#e89055'
        },
        {
            name: 'Volcano',
            primary: '#e81d1e',
            secondary: '#e86868'
        },
        {
            name: 'Earth',
            primary: '#406601',
            secondary: '#d3e65e'
        },
        {
            name: 'Zephyr',
            primary: '#4892d5',
            secondary: '#78b6f0'
        }
    ],
    j = k[0].primary,
    U = k[0].secondary;
function G() {
    return k[Math.floor(Math.random() * k.length)];
}
function B(e, t) {
    return null == e || null == t ? e === t : e.identityGuildId === t.identityGuildId && e.identityEnabled === t.identityEnabled && e.tag === t.tag && e.badge === t.badge;
}
function F(e) {
    if (null == e) return null;
    if ('identityGuildId' in e) return e;
    let t = e;
    return {
        identityGuildId: t.identity_guild_id,
        identityEnabled: t.identity_enabled,
        tag: t.tag,
        badge: t.badge
    };
}
function V(e) {
    return { tag: e.tag };
}
Object.fromEntries(
    k.map((e) => [
        e.name,
        {
            primary: e.primary,
            secondary: e.secondary
        }
    ])
),
    ['363445589247131668', '700136079562375258', '356869127241072640', '356875570916753438', '1158877933042143272', '432980957394370572', '356876176465199104', '356875221078245376', '356875988589740042', '356877880938070016', '1149118246826561609', '356873622985506820', '542075586886107149', '762434991303950386', '946609449680908348', '356876590342340608', '1260340082150346932', '1253061774555611238', '1167674267748540516', '359509007423242240', '1257819671114289184', '1116835216464543946', '357607478105604096', '1137125502985961543', '356888738724446208', '356875762940379136', '1121201675240210523', '1205090671527071784', '357607133254254632', '359508713658253318', '363409643973771264', '359509387670192128', '367827983903490050', '742897755160313986', '1215361187684946010', '1247227126416146462', '477175586805252107', '356943499456937984', '614380482620293151', '1256912167685587034', '356888961353908224', '356954277803065354', '643897785271189524', '356879032584896512', '506950362461110273', '1113966530531704943', '356944273133928458', '363447565905166336', '363413743335374859', '356942674672091136', '426526722322726912', '422772752647323649', '905961880789590076', '356888453796986880', '398632010442211348', '535371564850479134', '1124351715618074634', '356888577310851072', '787443973538971748', '1197827812623650866', '1124349969906815007', '356875890958925834', '356889262362329098', '425778010222886912', '428055627030331402', '1224418065295478955', '1263691812338536570', '372438022647578634', '1129504162200166401', '1238113262969557002', '443159611479031808', '615752773690064908', '1182713227491147776', '358421669603311616', '1174041358995042375', '385538724592746496', '1124358970618953818', '428054228511227914', '422169383972896768', '1234262945350025246', '363430548028522496', '359509332490059776', '358420454764969994', '1124353632758939688', '363413834301571072', '1162076274622222346', '359509759642042378', '477152881196269569', '449806905901056012', '569253958967885828', '940810636273795162', '359510095811444736', '1245451463736692857', '356887282982191114', '1124351876033425529', '363411421553360896', '1162151882039504916', '1067554911358832721', '1140238527980916757', '359801269008859136', '1272842103910699040', '1276737795012165766'].map((e, t, n) => [e, n.length - t]);
var Z = (function (e) {
    return (e[(e.SIZE_12 = 12)] = 'SIZE_12'), (e[(e.SIZE_16 = 16)] = 'SIZE_16'), (e[(e.SIZE_24 = 24)] = 'SIZE_24'), (e[(e.SIZE_32 = 32)] = 'SIZE_32'), (e[(e.SIZE_36 = 36)] = 'SIZE_36'), e;
})({});
function H(e, t) {
    return void 0 === e || '' === e ? t : e;
}
function W(e) {
    var t;
    let n = (0, s.yf)(),
        r = G(),
        i = {};
    return (
        null != e.game_activity &&
            (i = Object.keys(e.game_activity).reduce((t, n) => {
                var r;
                let i = null == (r = e.game_activity) ? void 0 : r[n];
                return (
                    null == i ||
                        (t[n] = {
                            level: i.activity_level,
                            score: i.activity_score
                        }),
                    t
                );
            }, {})),
        {
            id: e.id,
            name: e.name,
            icon: e.icon_hash,
            description: e.description,
            memberCount: e.member_count,
            games: e.game_application_ids,
            playstyle: e.play_style,
            traits: e.search_terms,
            tag: e.tag,
            banner: e.banner,
            bannerHash: e.banner_hash,
            badge: {
                badgeKind: e.badge,
                primaryColor: H(e.badge_color_primary, n.primary),
                secondaryColor: H(e.badge_color_secondary, n.secondary),
                imageHash: e.badge_hash
            },
            branding: {
                primaryColor: H(e.brand_color_primary, r.primary),
                secondaryColor: H(e.brand_color_secondary, r.secondary)
            },
            wildcardDescriptors: e.wildcard_descriptors,
            gameActivity: i,
            discoveryProfileFeatures: new Set(null != (t = e.discovery_profile_features) ? t : [])
        }
    );
}
