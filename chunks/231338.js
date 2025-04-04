a.d(e, { pK: () => I }), a(47120), a(290926);
var r,
    n,
    _ = a(149765),
    o = a(860911);
a(674746), a(691324), a(481677), a(722770);
let i = location.protocol + window.GLOBAL_ENV.WEBAPP_ENDPOINT,
    c = location.protocol + '//discord.gg';
Object.freeze({
    HINT_PURPLE: '#c9d2f0',
    DARK_PURPLE: '#697ec4',
    MODAL_GREY: '#EFEFF4',
    ORANGE: '#f57731',
    GUILDS_GREY: '#1e2124',
    ACCOUNT_GREY: '#282b30',
    CHAT_GREY: '#36393e',
    UNREAD_GREY: '#8a8e94',
    HIGHLIGHT_GREY: '#25282c',
    AVATAR_GREY: '#747F8C',
    WHITE2: '#f3f3f3',
    WHITE3: '#f0f0f0',
    WHITE7: '#dbdde1',
    WHITE8: '#cdcdcd',
    GREY1: '#99aab5',
    GREY2: '#87909c',
    GREY3: '#737f8d',
    GREY4: '#949494',
    GREY5: '#535559',
    GREY6: '#4f545c',
    GREY7: '#1c242b',
    GREY9: '#202226'
}),
    Object.freeze({
        1: 'Stripe',
        2: 'Braintree',
        3: 'Apple',
        4: 'Google',
        5: 'Adyen',
        6: 'Apple Partner'
    }),
    Object.freeze({
        BRAINTREE: {
            KEY: window.GLOBAL_ENV.BRAINTREE_KEY,
            PAYMENT_GATEWAY: 'braintree'
        },
        STRIPE: {
            KEY: window.GLOBAL_ENV.STRIPE_KEY,
            PAYMENT_GATEWAY: 'stripe'
        },
        ADYEN: {
            KEY: window.GLOBAL_ENV.ADYEN_KEY,
            PAYMENT_GATEWAY: 'adyen'
        }
    }),
    Object.freeze({
        CONSTANT: 1,
        APPLE_STICKER: 2
    }),
    Object.freeze({
        0: 'subscription',
        1: 'sku'
    });
let s = Object.freeze({
        CREATE_INSTANT_INVITE: _.r0(0),
        KICK_MEMBERS: _.r0(1),
        BAN_MEMBERS: _.r0(2),
        ADMINISTRATOR: _.r0(3),
        MANAGE_CHANNELS: _.r0(4),
        MANAGE_GUILD: _.r0(5),
        CHANGE_NICKNAME: _.r0(26),
        MANAGE_NICKNAMES: _.r0(27),
        MANAGE_ROLES: _.r0(28),
        MANAGE_WEBHOOKS: _.r0(29),
        MANAGE_GUILD_EXPRESSIONS: _.r0(30),
        CREATE_GUILD_EXPRESSIONS: _.r0(43),
        VIEW_AUDIT_LOG: _.r0(7),
        VIEW_CHANNEL: _.r0(10),
        VIEW_GUILD_ANALYTICS: _.r0(19),
        VIEW_CREATOR_MONETIZATION_ANALYTICS: _.r0(41),
        MODERATE_MEMBERS: _.r0(40),
        USE_EMBEDDED_ACTIVITIES: _.r0(39),
        USE_EXTERNAL_APPS: _.r0(50),
        SEND_MESSAGES: _.r0(11),
        SEND_TTS_MESSAGES: _.r0(12),
        MANAGE_MESSAGES: _.r0(13),
        EMBED_LINKS: _.r0(14),
        ATTACH_FILES: _.r0(15),
        READ_MESSAGE_HISTORY: _.r0(16),
        MENTION_EVERYONE: _.r0(17),
        USE_EXTERNAL_EMOJIS: _.r0(18),
        ADD_REACTIONS: _.r0(6),
        USE_APPLICATION_COMMANDS: _.r0(31),
        MANAGE_THREADS: _.r0(34),
        CREATE_PUBLIC_THREADS: _.r0(35),
        CREATE_PRIVATE_THREADS: _.r0(36),
        USE_EXTERNAL_STICKERS: _.r0(37),
        SEND_MESSAGES_IN_THREADS: _.r0(38),
        SEND_VOICE_MESSAGES: _.r0(46),
        USE_CLYDE_AI: _.r0(47),
        SEND_POLLS: _.r0(49),
        CONNECT: _.r0(20),
        SPEAK: _.r0(21),
        MUTE_MEMBERS: _.r0(22),
        DEAFEN_MEMBERS: _.r0(23),
        MOVE_MEMBERS: _.r0(24),
        USE_VAD: _.r0(25),
        PRIORITY_SPEAKER: _.r0(8),
        STREAM: _.r0(9),
        USE_SOUNDBOARD: _.r0(42),
        USE_EXTERNAL_SOUNDS: _.r0(45),
        SET_VOICE_CHANNEL_STATUS: _.r0(48),
        REQUEST_TO_SPEAK: _.r0(32),
        MANAGE_EVENTS: _.r0(33),
        CREATE_EVENTS: _.r0(44)
    }),
    E = [s.KICK_MEMBERS, s.BAN_MEMBERS, s.ADMINISTRATOR, s.MANAGE_CHANNELS, s.MANAGE_GUILD, s.MANAGE_ROLES, s.MANAGE_MESSAGES, s.MANAGE_THREADS, s.MODERATE_MEMBERS];
_.$e(...E),
    Object.freeze({
        TWITTER: Object.freeze({
            default: 'https://twitter.com/discord',
            ja: 'https://twitter.com/discord_jp'
        })
    });
let l = Object.freeze({
    WELCOME: ''.concat(i, '/welcome/'),
    ME: ''.concat(i, '/channels/@me'),
    SETTINGS: (t, e) =>
        ''
            .concat(i, '/settings/')
            .concat(t)
            .concat(e ? '/'.concat(e) : ''),
    CONNECTION: (t) => ''.concat(i, '/connections/').concat(t),
    CHANGELOGS: ''.concat(i, '/settings/changelogs'),
    LOGIN: ''.concat(i, '/login'),
    LOGIN_WITH_REDIRECT: (t) => ''.concat(i, '/login?redirect_to=').concat(t),
    REGISTER: ''.concat(i, '/register'),
    REGISTER_WITH_REDIRECT: (t) => ''.concat(i, '/register?redirect_to=').concat(t),
    CREATE_GUILD: ''.concat(i, '/guilds/create'),
    VANITY_INVITE: (t) => ''.concat(c, '/').concat(t),
    HYPESQUAD_ONLINE: ''.concat(i, '/settings/hypesquad-online'),
    BROWSE_NITRO_TITLES: ''.concat(i, '/store/browse?type=nitro'),
    SKU_DETAILS: (t, e) =>
        ''
            .concat(i, '/store/skus/')
            .concat(t)
            .concat(null != e ? '?store_listing_id='.concat(e) : ''),
    MESSAGE: (t, e, a) => '/channels/'.concat(t, '/').concat(e, '/').concat(a),
    CHANNEL: (t, e) => '/channels/'.concat(t, '/').concat(e),
    REPORT: ''.concat(i, '/report')
});
var u = (((r = u || {}).INDEX = '/'), (r.INDEX_WORD = '/index'), (r.INDEX_BUCKET = '/index/:bucketId'), (r.CHANGELOGS = '/changelogs/:date'), (r.COMMUNITY = '/community'), (r.COMPANY = '/company'), (r.COMPANY_INFORMATION = '/company-information'), (r.CREATORS = '/creators'), (r.DOWNLOADS = '/downloads'), (r.DOWNLOAD = '/download'), (r.GAMING = '/gaming'), (r.PRIVACY = '/privacy'), (r.TOS = '/tos'), (r.TERMS = '/terms'), (r.STORE_TERMS = '/store-terms'), (r.ACKNOWLEDGEMENTS = '/acknowledgements'), (r.LICENSES = '/licenses'), (r.PARTNERS = '/partners'), (r.HYPESQUAD = '/hypesquad'), (r.HYPESQUAD_RIOT = '/hypesquad-riot'), (r.BRANDING = '/branding'), (r.ERROR_404 = '/404'), (r.JOBS = '/jobs'), (r.JOB = '/jobs/:jobId'), (r.STREAMKIT = '/streamkit'), (r.SECURITY = '/security'), (r.NITRO = '/nitro'), (r.DISCOVER = '/servers'), (r.QUESTS = '/ads/quests'), (r.GUIDELINES = '/guidelines'), (r.RICH_PRESENCE = '/rich-presence'), (r.VERIFICATION = '/verification'), (r.OPEN_SOURCE = '/open-source'), (r.WARFRAME = '/warframe'), (r.REMOTE_AUTH = '/ra/:remoteAuthFingerprint'), (r.SAFETY_LANDING = '/safetycenter'), (r.SAFETY_ARTICLE_ROOT = '/safety'), (r.SAFETY_ARTICLE = '/safety/:article'), (r.NEWSROOM = '/newsroom'), (r.INSPIRATION = '/inspiration'), (r.MOD_ACADEMY_LANDING = '/moderation'), (r.MOD_ACADEMY_EXAM = '/moderation/exam'), (r.MOD_ACADEMY_ARTICLE = '/moderation/:article'), (r.BLOG = '/blog'), (r.BUILD = '/build'), (r.DEVELOPERS = '/developers'), (r.APP_DIRECTORY = '/application-directory'), (r.REFRESH_INDEX = '/new'), (r.REFRESH_INDEX_WORD = '/new/index'), (r.REFRESH_COMPANY = '/new/company'), (r.REFRESH_DOWNLOAD = '/new/download'), (r.REFRESH_PRIVACY = '/new/privacy'), (r.REFRESH_TERMS = '/new/terms'), (r.REFRESH_ACKNOWLEDGEMENTS = '/new/acknowledgements'), (r.REFRESH_LICENSES = '/new/licenses'), (r.REFRESH_BRANDING = '/new/branding'), (r.REFRESH_JOBS = '/new/jobs'), (r.REFRESH_JOB = '/new/jobs/:jobId'), (r.REFRESH_STREAMKIT = '/new/streamkit'), (r.REFRESH_NITRO = '/new/nitro'), (r.REFRESH_GUIDELINES = '/new/guidelines'), (r.REFRESH_SAFETY_LANDING = '/new/safety'), (r.REFRESH_SAFETY_ARTICLE = '/new/safety/:article'), (r.COLLEGE = '/college'), (r.LEAGUE_CLUBS = '/league-communities'), (r.DISCORD_RECRUITING_SCAMS = '/discord-recruitment-scams'), (r.DEV_NEWSLETTER_SIGNUP = '/dev-newsletter'), (r.LEGACY_DEV_NEWSLETTER = '/newsletter'), (r.LEGAL_ARCHIVE = '/archive/'), (r.TERMS_MAY_2020 = '/archive/terms/may-2020'), (r.PRIVACY_JUNE_2020 = '/archive/privacy/june-2020'), (r.GUIDELINES_MAY_2020 = '/archive/guidelines/may-2020'), (r.FALL_RELEASE_2023 = '/fallrelease'), (r.MOBILE_REDESIGN_2023 = '/mobile'), (r.REFRESH_XBOX_OFFER = '/new/discord-xbox-offer-2019'), (r.REFRESH_WHY_DISCORD = '/why-discord-is-different'), (r.WHY_DISCORD = '/why-discord'), (r.XBOX_OFFER = '/discord-xbox-offer-2020'), (r.COLLEGE_BRUINS = '/bruins'), (r.COLLEGE_ANTEATERS = '/anteaters'), (r.COLLEGE_GAUCHOS = '/gauchos'), (r.COLLEGE_BEARS = '/bears'), (r.COLLEGE_SLUGS = '/slugs'), (r.BACK_TO_SCHOOL_GIVEAWAY_INSTAGRAM = '/terms/back-to-school-2020/instagram'), (r.BACK_TO_SCHOOL_GIVEAWAY_TWITTER = '/terms/back-to-school-2020/twitter'), (r.SNOWSGIVING_GIVEAWAY_INSTAGRAM = '/terms/snowsgiving-2020/instagram'), (r.SNOWSGIVING_GIVEAWAY_TWITTER = '/terms/snowsgiving-2020/twitter'), r);
(0, o.Ft)(l),
    (0, o.Ft)(u),
    Object.freeze({
        FACEBOOK_URL: 'https://www.facebook.com/discord/',
        INSTAGRAM_URL: 'https://www.instagram.com/discord/',
        YOUTUBE_URL: 'https://www.youtube.com/discord/',
        TIKTOK_URL: 'https://www.tiktok.com/@discord'
    });
var I = (((n = {}).AED = 'aed'), (n.AFN = 'afn'), (n.ALL = 'all'), (n.AMD = 'amd'), (n.ANG = 'ang'), (n.AOA = 'aoa'), (n.ARS = 'ars'), (n.AUD = 'aud'), (n.AWG = 'awg'), (n.AZN = 'azn'), (n.BAM = 'bam'), (n.BBD = 'bbd'), (n.BDT = 'bdt'), (n.BGN = 'bgn'), (n.BHD = 'bhd'), (n.BIF = 'bif'), (n.BMD = 'bmd'), (n.BND = 'bnd'), (n.BOB = 'bob'), (n.BOV = 'bov'), (n.BRL = 'brl'), (n.BSD = 'bsd'), (n.BTN = 'btn'), (n.BWP = 'bwp'), (n.BYN = 'byn'), (n.BYR = 'byr'), (n.BZD = 'bzd'), (n.CAD = 'cad'), (n.CDF = 'cdf'), (n.CHE = 'che'), (n.CHF = 'chf'), (n.CHW = 'chw'), (n.CLF = 'clf'), (n.CLP = 'clp'), (n.CNY = 'cny'), (n.COP = 'cop'), (n.COU = 'cou'), (n.CRC = 'crc'), (n.CUC = 'cuc'), (n.CUP = 'cup'), (n.CVE = 'cve'), (n.CZK = 'czk'), (n.DJF = 'djf'), (n.DKK = 'dkk'), (n.DOP = 'dop'), (n.DZD = 'dzd'), (n.EGP = 'egp'), (n.ERN = 'ern'), (n.ETB = 'etb'), (n.EUR = 'eur'), (n.FJD = 'fjd'), (n.FKP = 'fkp'), (n.GBP = 'gbp'), (n.GEL = 'gel'), (n.GHS = 'ghs'), (n.GIP = 'gip'), (n.GMD = 'gmd'), (n.GNF = 'gnf'), (n.GTQ = 'gtq'), (n.GYD = 'gyd'), (n.HKD = 'hkd'), (n.HNL = 'hnl'), (n.HRK = 'hrk'), (n.HTG = 'htg'), (n.HUF = 'huf'), (n.IDR = 'idr'), (n.ILS = 'ils'), (n.INR = 'inr'), (n.IQD = 'iqd'), (n.IRR = 'irr'), (n.ISK = 'isk'), (n.JMD = 'jmd'), (n.JOD = 'jod'), (n.JPY = 'jpy'), (n.KES = 'kes'), (n.KGS = 'kgs'), (n.KHR = 'khr'), (n.KMF = 'kmf'), (n.KPW = 'kpw'), (n.KRW = 'krw'), (n.KWD = 'kwd'), (n.KYD = 'kyd'), (n.KZT = 'kzt'), (n.LAK = 'lak'), (n.LBP = 'lbp'), (n.LKR = 'lkr'), (n.LRD = 'lrd'), (n.LSL = 'lsl'), (n.LTL = 'ltl'), (n.LVL = 'lvl'), (n.LYD = 'lyd'), (n.MAD = 'mad'), (n.MDL = 'mdl'), (n.MGA = 'mga'), (n.MKD = 'mkd'), (n.MMK = 'mmk'), (n.MNT = 'mnt'), (n.MOP = 'mop'), (n.MRO = 'mro'), (n.MUR = 'mur'), (n.MVR = 'mvr'), (n.MWK = 'mwk'), (n.MXN = 'mxn'), (n.MXV = 'mxv'), (n.MYR = 'myr'), (n.MZN = 'mzn'), (n.NAD = 'nad'), (n.NGN = 'ngn'), (n.NIO = 'nio'), (n.NOK = 'nok'), (n.NPR = 'npr'), (n.NZD = 'nzd'), (n.OMR = 'omr'), (n.PAB = 'pab'), (n.PEN = 'pen'), (n.PGK = 'pgk'), (n.PHP = 'php'), (n.PKR = 'pkr'), (n.PLN = 'pln'), (n.PYG = 'pyg'), (n.QAR = 'qar'), (n.RON = 'ron'), (n.RSD = 'rsd'), (n.RUB = 'rub'), (n.RWF = 'rwf'), (n.SAR = 'sar'), (n.SBD = 'sbd'), (n.SCR = 'scr'), (n.SDG = 'sdg'), (n.SEK = 'sek'), (n.SGD = 'sgd'), (n.SHP = 'shp'), (n.SLL = 'sll'), (n.SOS = 'sos'), (n.SRD = 'srd'), (n.SSP = 'ssp'), (n.STD = 'std'), (n.SVC = 'svc'), (n.SYP = 'syp'), (n.SZL = 'szl'), (n.THB = 'thb'), (n.TJS = 'tjs'), (n.TMT = 'tmt'), (n.TND = 'tnd'), (n.TOP = 'top'), (n.TRY = 'try'), (n.TTD = 'ttd'), (n.TWD = 'twd'), (n.TZS = 'tzs'), (n.UAH = 'uah'), (n.UGX = 'ugx'), (n.USD = 'usd'), (n.USN = 'usn'), (n.USS = 'uss'), (n.UYI = 'uyi'), (n.UYU = 'uyu'), (n.UZS = 'uzs'), (n.VEF = 'vef'), (n.VND = 'vnd'), (n.VUV = 'vuv'), (n.WST = 'wst'), (n.XAF = 'xaf'), (n.XAG = 'xag'), (n.XAU = 'xau'), (n.XBA = 'xba'), (n.XBB = 'xbb'), (n.XBC = 'xbc'), (n.XBD = 'xbd'), (n.XCD = 'xcd'), (n.XDR = 'xdr'), (n.XFU = 'xfu'), (n.XOF = 'xof'), (n.XPD = 'xpd'), (n.XPF = 'xpf'), (n.XPT = 'xpt'), (n.XSU = 'xsu'), (n.XTS = 'xts'), (n.XUA = 'xua'), (n.YER = 'yer'), (n.ZAR = 'zar'), (n.ZMW = 'zmw'), (n.ZWL = 'zwl'), (n.DISCORD_ORB = 'discord_orb'), n);
