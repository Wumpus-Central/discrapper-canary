n.d(t, {
    $7: () => k,
    $8: () => eC,
    $e: () => p,
    $n: () => eQ,
    A5: () => G,
    AU: () => z,
    Bo: () => e2,
    C2: () => X,
    CL: () => _,
    CR: () => eo,
    Cj: () => eG,
    Cn: () => Y,
    Cx: () => te,
    EA: () => A,
    ET: () => $,
    EZ: () => ej,
    F_: () => u,
    GP: () => C,
    HO: () => eP,
    Hk: () => Q,
    IW: () => I,
    JN: () => e3,
    Lw: () => eO,
    M_: () => e1,
    Nl: () => e_,
    No: () => S,
    OT: () => es,
    Ph: () => e6,
    QI: () => eY,
    QP: () => eD,
    RQ: () => eK,
    RU: () => ec,
    Rg: () => H,
    Rr: () => x,
    Rt: () => en,
    Se: () => e9,
    Si: () => h,
    T7: () => eF,
    TD: () => eB,
    TL: () => q,
    Tp: () => eH,
    UA: () => M,
    UD: () => b,
    Ue: () => j,
    Uq: () => eI,
    Wt: () => e$,
    X2: () => eJ,
    Xh: () => E,
    Y1: () => ew,
    YQ: () => m,
    Z1: () => y,
    Zh: () => d,
    _k: () => eR,
    a$: () => e8,
    a1: () => eZ,
    a7: () => J,
    b6: () => f,
    bg: () => ek,
    cb: () => L,
    cd: () => ev,
    dB: () => ed,
    dJ: () => v,
    dO: () => ee,
    dT: () => eu,
    eZ: () => eq,
    ee: () => eg,
    ff: () => V,
    fz: () => eV,
    gW: () => eh,
    gh: () => B,
    h1: () => ex,
    h8: () => ea,
    hX: () => eX,
    hs: () => el,
    i_: () => W,
    ih: () => ep,
    in: () => eb,
    jy: () => eW,
    jz: () => ei,
    kJ: () => ez,
    m8: () => Z,
    mn: () => T,
    n5: () => em,
    nG: () => eE,
    nH: () => eL,
    nL: () => eU,
    np: () => e7,
    o4: () => O,
    p9: () => c,
    pH: () => eA,
    pj: () => R,
    q4: () => e5,
    rB: () => ef,
    rV: () => N,
    rX: () => F,
    rt: () => e0,
    vL: () => ey,
    w7: () => e4,
    wh: () => K,
    xT: () => et,
    y7: () => g,
    ys: () => eM,
    zp: () => U
}),
    n(47120);
var r = n(314794),
    i = n(981631),
    o = n(185923),
    a = n(388032);
function s(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function l(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                s(e, t, n[t]);
            });
    }
    return e;
}
var c = (function (e) {
    return (e[(e.TIER_1 = 1)] = 'TIER_1'), (e[(e.TIER_2 = 2)] = 'TIER_2'), (e[(e.TIER_0 = 3)] = 'TIER_0'), e;
})({});
let u = void 0,
    d = void 0,
    f = [
        {
            value: null,
            label: 'Non-Nitro'
        },
        {
            value: 3,
            label: 'Basic'
        },
        {
            value: 1,
            label: 'Classic'
        },
        {
            value: 2,
            label: 'Standard'
        }
    ],
    p = Object.freeze({
        3: 0,
        1: 1,
        2: 2
    }),
    _ = '521842831262875670';
var h = (function (e) {
    return (e.NONE = '628379670982688768'), (e.TIER_0 = '978380684370378762'), (e.TIER_1 = '521846918637420545'), (e.TIER_2 = '521847234246082599'), (e.GUILD = '590663762298667008'), (e.LEGACY = '521842865731534868'), e;
})({});
let m = ['628379670982688768', '978380684370378762', '521846918637420545', '521847234246082599', '590663762298667008'],
    g = Object.freeze({
        '978380684370378762': 3,
        '521846918637420545': 1,
        '521847234246082599': 2,
        '628379670982688768': 2,
        '521842865731534868': 2
    });
var E = (function (e) {
    return (e.NONE_MONTH = '628379151761408000'), (e.NONE_YEAR = '628381571568631808'), (e.PREMIUM_MONTH_TIER_0 = '978380692553465866'), (e.PREMIUM_YEAR_TIER_0 = '1024422698568122368'), (e.PREMIUM_MONTH_TIER_1 = '511651871736201216'), (e.PREMIUM_YEAR_TIER_1 = '511651876987469824'), (e.PREMIUM_MONTH_TIER_2 = '511651880837840896'), (e.PREMIUM_YEAR_TIER_2 = '511651885459963904'), (e.PREMIUM_MONTH_GUILD = '590665532894740483'), (e.PREMIUM_YEAR_GUILD = '590665538238152709'), (e.NONE_3_MONTH = '944265614527037440'), (e.NONE_6_MONTH = '944265636643602432'), (e.PREMIUM_3_MONTH_TIER_2 = '642251038925127690'), (e.PREMIUM_6_MONTH_TIER_2 = '944037208325619722'), (e.PREMIUM_3_MONTH_GUILD = '944037355453415424'), (e.PREMIUM_6_MONTH_GUILD = '944037391444738048'), (e.PREMIUM_MONTH_LEGACY = '511651856145973248'), (e.PREMIUM_YEAR_LEGACY = '511651860671627264'), e;
})({});
let v = new Set(['978380692553465866', '1024422698568122368', '511651871736201216', '511651876987469824', '511651880837840896', '642251038925127690', '944037208325619722', '511651885459963904', '511651856145973248', '511651860671627264']),
    b = new Set(['511651880837840896', '642251038925127690', '944037208325619722', '511651885459963904']),
    y = new Set(['590665532894740483', '944037355453415424', '944037391444738048', '590665538238152709']),
    O = new Set(['642251038925127690', '944037208325619722', '944037355453415424', '944037391444738048']),
    S = new Set(['978380692553465866', '511651871736201216', '511651880837840896']),
    I = Object.freeze({
        '978380684370378762': '978380692553465866',
        '521846918637420545': '511651871736201216',
        '521847234246082599': '511651880837840896',
        '628379670982688768': void 0,
        '590663762298667008': void 0,
        '521842865731534868': void 0
    }),
    T = Object.freeze({
        '978380684370378762': '1024422698568122368',
        '521846918637420545': '511651876987469824',
        '521847234246082599': '511651885459963904',
        '628379670982688768': void 0,
        '590663762298667008': void 0,
        '521842865731534868': void 0
    });
var N = (function (e) {
        return (e[(e.MONTH = 1)] = 'MONTH'), (e[(e.YEAR = 2)] = 'YEAR'), (e[(e.DAY = 3)] = 'DAY'), e;
    })({}),
    A = (function (e) {
        return (e[(e.DAY = 1)] = 'DAY'), (e[(e.WEEK = 2)] = 'WEEK'), (e[(e.MONTH = 3)] = 'MONTH'), (e[(e.YEAR = 4)] = 'YEAR'), e;
    })({});
let C = Object.freeze({
        628379151761408000: {
            id: '628379151761408000',
            name: 'None Monthly',
            skuId: '628379670982688768',
            interval: 1,
            intervalCount: 1
        },
        '628381571568631808': {
            id: '628381571568631808',
            name: 'None Yearly',
            skuId: '628379670982688768',
            interval: 2,
            intervalCount: 1
        },
        '978380692553465866': {
            id: '978380692553465866',
            name: 'Nitro Basic Monthly',
            premiumType: 3,
            skuId: '978380684370378762',
            interval: 1,
            intervalCount: 1
        },
        '1024422698568122368': {
            id: '1024422698568122368',
            name: 'Nitro Basic Yearly',
            premiumType: 3,
            skuId: '978380684370378762',
            interval: 2,
            intervalCount: 1
        },
        '511651871736201216': {
            id: '511651871736201216',
            name: 'Nitro Classic Monthly',
            premiumType: 1,
            skuId: '521846918637420545',
            interval: 1,
            intervalCount: 1
        },
        '511651876987469824': {
            id: '511651876987469824',
            name: 'Nitro Classic Yearly',
            premiumType: 1,
            skuId: '521846918637420545',
            interval: 2,
            intervalCount: 1
        },
        '511651880837840896': {
            id: '511651880837840896',
            name: 'Nitro Monthly',
            premiumType: 2,
            skuId: '521847234246082599',
            interval: 1,
            intervalCount: 1
        },
        '511651885459963904': {
            id: '511651885459963904',
            name: 'Nitro Yearly',
            premiumType: 2,
            skuId: '521847234246082599',
            interval: 2,
            intervalCount: 1
        },
        '590665532894740483': {
            id: '590665532894740483',
            name: 'Nitro Server Boost Monthly',
            skuId: '590663762298667008',
            interval: 1,
            intervalCount: 1
        },
        '590665538238152709': {
            id: '590665538238152709',
            name: 'Nitro Server Boost Yearly',
            skuId: '590663762298667008',
            interval: 2,
            intervalCount: 1
        },
        '642251038925127690': {
            id: '642251038925127690',
            name: 'Nitro Three Month',
            premiumType: 2,
            skuId: '521847234246082599',
            interval: 1,
            intervalCount: 3
        },
        '944037208325619722': {
            id: '944037208325619722',
            name: 'Nitro Six Month',
            premiumType: 2,
            skuId: '521847234246082599',
            interval: 1,
            intervalCount: 6
        },
        '944037355453415424': {
            id: '944037355453415424',
            name: 'Nitro Server Boost Three Month',
            skuId: '590663762298667008',
            interval: 1,
            intervalCount: 3
        },
        '944037391444738048': {
            id: '944037391444738048',
            name: 'Nitro Server Boost Six Month',
            skuId: '590663762298667008',
            interval: 1,
            intervalCount: 6
        },
        '944265614527037440': {
            id: '944265614527037440',
            name: 'None Three Month',
            skuId: '628379670982688768',
            interval: 1,
            intervalCount: 3
        },
        '944265636643602432': {
            id: '944265636643602432',
            name: 'None Six Month',
            skuId: '628379670982688768',
            interval: 1,
            intervalCount: 6
        },
        '511651856145973248': {
            id: '511651856145973248',
            name: 'Nitro Monthly (Legacy)',
            premiumType: 2,
            skuId: '521842865731534868',
            interval: 1,
            intervalCount: 1
        },
        '511651860671627264': {
            id: '511651860671627264',
            name: 'Nitro Classic Yearly (Legacy)',
            premiumType: 2,
            skuId: '521842865731534868',
            interval: 2,
            intervalCount: 1
        }
    }),
    R = new Set(['511651880837840896']),
    P = 16,
    w = 8,
    D = 5,
    x = 30,
    L = 2,
    M = 3,
    k = 28,
    j = 30,
    U = 7,
    G = 7,
    B = 30,
    Z = '775514091874680832',
    F = '845031178288889946',
    V = 432000000,
    H = 14,
    W = '520373071933079552',
    Y = '902329034132684800',
    K = '983601860436819968',
    z = '983601860436819969',
    q = '984244797441048577',
    Q = '1215818925846036480',
    X = '1004850445463584768',
    J = '1073698058383917056',
    $ = '1070132870233980928',
    ee = '1267968635301789696',
    et = '1267969164312576000',
    en = '1268347360493174784',
    er = '1271484512081285191',
    ei = '1161363847311785984',
    eo = [W, Y, K, z, q, Q, X, J, $, ee, et, en, er, ei],
    ea = [ee, et, er],
    es = [ee, er],
    el = '1150904354090532864',
    ec = '1199128659810582528',
    eu = '1204865493622587392',
    ed = '1204867673024888832',
    ef = '1215346678383509504',
    ep = '1215366184820539392',
    e_ = '1223319122125783040',
    eh = '1223380890109870080',
    em = '1265748546523762828',
    eg = [e_, eh],
    eE = Object.freeze({
        [W]: {
            id: W,
            skus: ['521847234246082599']
        },
        [Y]: {
            id: Y,
            skus: ['521847234246082599']
        },
        [K]: {
            id: K,
            skus: ['521847234246082599']
        },
        [z]: {
            id: z,
            skus: ['521847234246082599']
        },
        [q]: {
            id: q,
            skus: ['521847234246082599']
        },
        [X]: {
            id: X,
            skus: ['521847234246082599']
        },
        [$]: {
            id: $,
            skus: ['978380684370378762']
        },
        [J]: {
            id: J,
            skus: ['521847234246082599']
        },
        [Q]: {
            id: Q,
            skus: ['521847234246082599']
        },
        [en]: {
            id: en,
            skus: ['521847234246082599']
        },
        [ei]: {
            id: ei,
            skus: ['521847234246082599']
        }
    });
var ev = (function (e) {
        return (
            (e.ANIMATED_GUILD_BANNER_TOOLTIP = 'animated_guild_banner_tooltip'),
            (e.EMOJI_PICKER_SEARCH = 'emoji_picker_search'),
            (e.EMOJI_PICKER_EMOJI_CLICKED = 'emoji_picker_emoji_clicked'),
            (e.EMOJI_PICKER_STICKER_CLICKED = 'emoji_picker_sticker_clicked'),
            (e.EMOJI_PICKER_REACTION_EMOJI_CLICKED = 'emoji_picker_reaction_emoji_clicked'),
            (e.EMOJI_PICKER_SUPER_REACTION_EMOJI_CLICKED = 'emoji_picker_super_reaction_emoji_clicked'),
            (e.EMOJI_PICKER_STATUS_EMOJI_CLICKED = 'emoji_picker_status_emoji_clicked'),
            (e.EMOJI_PICKER_TOP_SERVER_EMOJI_CLICKED = 'emoji_picker_top_server_emoji_clicked'),
            (e.EMOJI_PICKER_NEWLY_ADDED_EMOJI_CLICKED = 'emoji_picker_newly_added_emoji_clicked'),
            (e.EMOJI_AUTOSUGGEST_CLICKED = 'emoji_autosuggest_clicked'),
            (e.EMOJI_AUTOCOMPLETE_INLINE = 'emoji_autocomplete_inline'),
            (e.EMOJI_AUTOCOMPLETE_MODAL = 'emoji_autocomplete_modal'),
            (e.EMOJI_IN_MESSAGE_HOVER = 'emoji_in_message_hover'),
            (e.EMOJI_IN_REACTION_HOVER = 'emoji_in_reaction_hover'),
            (e.EMOJI_IN_BURST_REACTION_HOVER = 'emoji_in_burst_reaction_hover'),
            (e.EMOJI_IN_BURST_REACTION_HOVER_UPSELL = 'emoji_in_burst_reaction_hover_upsell'),
            (e.EMOJI_PICKER_FLOATING_UPSELL = 'emoji_picker_floating_upsell'),
            (e.STICKER_IN_MESSAGE_HOVER = 'sticker_in_message_hover'),
            (e.EMPTY_STICKER_PICKER_UPSELL = 'empty_sticker_picker_upsell'),
            (e.STREAM_QUALITY_INDICATOR = 'stream_quality_indicator'),
            (e.GIFT_STREAM_QUALITY_INDICATOR = 'gift_stream_quality_indicator'),
            (e.STREAM_QUALITY_UPSELL = 'stream_quality_upsell'),
            (e.MESSAGE_LENGTH_UPSELL = 'message_length_upsell'),
            (e.MESSAGE_LENGTH_IN_EDITOR_UPSELL = 'message_length_in_editor_upsell'),
            (e.CUSTOM_PROFILE_UPSELL = 'custom profiles upsell modal'),
            (e.CUSTOM_PROFILE_TRY_OUT_UPSELL = 'try out custom profile in settings upsell'),
            (e.VIDEO_BACKGROUNDS_MODAL = 'video backgrounds modal'),
            (e.VIDEO_BACKGROUNDS_INLINE = 'video backgrounds inline'),
            (e.GUILD_CAP_INLINE_SERVER_LIST = 'guild_cap_inline_server_list'),
            (e.GUILD_PREMIUM_UPSELL_MODAL = 'premium guild premium upsell modal'),
            (e.GUILD_CAP_INLINE_INVITE_MODAL = 'guild_cap_inline_invite_modal'),
            (e.GUILD_CAP_MODAL_UPSELL = 'guild_cap_modal_upsell'),
            (e.PREMIUM_GUILD_IDENTITY_MODAL = 'premium guild identity upsell alert'),
            (e.CUSTOM_PROFILE_SETTINGS_BANNER_BUTTON = 'custom profiles settings banner upsell'),
            (e.STICKER_PICKER_UPSELL = 'sticker_picker_upsell'),
            (e.ANIMATED_AVATAR_PREVIEW_GIF_MODAL = 'animated avatar preview gif modal'),
            (e.PREMIUM_PROGRESS_BAR = 'premium_progress_bar_tooltip'),
            (e.INVITE_SPLASH_UPSELL = 'premium_invite_splash_upsell'),
            (e.ANIMATED_USER_AVATAR_MODAL = 'animated user avatar upsell modal'),
            (e.UPLOAD_ERROR_UPSELL = 'upload error upsell'),
            (e.PREMIUM_GUILD_MEMBER_PROFILE_UPSELL_INLINE = 'premium guild member profile upsell inline'),
            (e.CONCURRENT_ACTIVITIES = 'Concurrent Activities'),
            (e.PREMIUM_UNCANCEL_WINBACK_MODAL_VIEWED = 'premium_uncancel_winback_modal_viewed'),
            (e.ANIMATED_VIDEO_BACKGROUND_NEW_PRESET = 'animated_video_background_new_preset'),
            (e.LOW_PRICE_EXPERIMENT_TOOLTIP = 'low_price_experiment_tooltip'),
            (e.PREMIUM_PROFILE_BADGE_UPSELL = 'premium_profile_badge_upsell'),
            (e.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_EMOJI = 'emoji'),
            (e.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_PROFILE_CUSTOMIZATION = 'profile customization'),
            (e.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_HD_STREAMING = 'hd streaming'),
            (e.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_LARGER_FILE_UPLOADS = 'larger file uploads'),
            (e.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_BOGO = 'bogo'),
            (e.VOICE_CHANNEL_EFFECTS_UPSELL = 'voice_channel_effects_upsell'),
            (e.VOICE_CHANNEL_EFFECTS_BAR_EMOJI_UPSELL = 'Voice Channel Effect Bar Emoji Upsell'),
            (e.VOICE_CHANNEL_EFFECTS_TOGGLE_CLICKED = 'voice_channel_effects_toggle_clicked'),
            (e.VOICE_CHANNEL_EFFECTS_TOGGLE_CLICKED_EXPANDED = 'voice_channel_effects_toggle_clicked_expanded'),
            (e.PROFILE_EFFECTS_INLINE_SETTINGS = 'profile_effects_inline_settings'),
            (e.PROFILE_EFFECTS_INLINE_SETTINGS_MOBILE = 'profile_effects_inline_settings_mobile'),
            (e.HIGH_VIDEO_QUALITY_UPSELL = 'high_video_quality_upsell'),
            (e.PREMIUM_PROFILE_TRY_IT_OUT = 'premium_profile_try_it_out'),
            (e.BURST_REACTION_RAIL_UPSELL = 'burst_reaction_rail_upsell'),
            (e.BURST_REACTION_UPSELL = 'burst_reaction_upsell'),
            (e.BURST_REACTION_QUICK_ACTION_UPSELL = 'burst_reaction_quick_action_upsell'),
            (e.BURST_REACTION_CONTEXT_MENU_UPSELL = 'burst_reaction_context_menu_upsell'),
            (e.PREMIUM_CLIENT_THEME_TRY_IT_OUT = 'premium_client_theme_try_it_out'),
            (e.PREMIUM_CLIENT_THEME_SETTINGS_UPSELL = 'premium_client_theme_settings_upsell'),
            (e.VIDEO_STAGE_LIMIT = 'video_stage_limit'),
            (e.SOUND_PICKER_SOUND_CLICKED = 'sound_picker_sound_clicked'),
            (e.APP_ICON_UPSELL = 'app_icon_upsell'),
            (e.COLLECTIBLES_SHOP = 'collectibles_shop'),
            (e.COLLECTIBLES_PROFILE_SETTINGS_UPSELL = 'collectibles_profile_settings_upsell'),
            (e.COLLECTIBLES_PREMIUM_MARKETING_PAGE_UPSELL = 'collectibles_premium_marketing_page_upsell'),
            (e.CLIPS_GUILD_SIDEBAR_COACHMARK_PREMIUM_EARLY_ACCESS_UPSELL = 'clips_guild_sidebar_coachmark_premium_early_access_upsell'),
            (e.CLIPS_GO_LIVE_PREMIUM_EARLY_ACCESS_ROADBLOCK_UPSELL = 'clips_go_live_premium_early_access_roadblock_upsell'),
            (e.CUSTOM_NOTIFICATION_SOUNDS_UPSELL = 'custom_notification_sounds_upsell'),
            (e.CUSTOM_NOTIFICATION_SOUNDS_SETTINGS_UPSELL = 'custom_notification_sounds_settings_inline_upsell'),
            (e.HD_STREAMING_VIEWER_UPSELL = 'hd_streaming_viewer_upsell'),
            (e.REVERSE_TRIAL_ENDED_UPSELL = 'reverse_trial_ended_upsell'),
            (e.REVERSE_TRIAL_FOLLOWUP_UPSELL = 'reverse_trial_followup_upsell'),
            (e.FOR_LATER_MODAL_UPSELL = 'for_later_modal_upsell'),
            (e.TRY_IT_OUT_MODAL_UPSELL = 'try_it_out_modal_upsell'),
            (e.ANIMATED_BANNER_MODAL_UPSELL = 'animated_banner_modal_upsell'),
            (e.ANIMATED_AVATAR_MODAL_UPSELL = 'animated_avatar_modal_upsell'),
            (e.PROFILE_EFFECT_MODAL_UPSELL = 'profile_effect_modal_upsell'),
            (e.AVATAR_DECORATION_MODAL_UPSELL = 'avatar_decoration_modal_upsell'),
            (e.VOICE_FILTERS_UPSELL = 'voice_filters_upsell'),
            (e.EMOJI_EVERYWHERE_INLINE_UPSELL = 'emoji_everywhere_inline_upsell'),
            (e.EMOJI_EVERYWHERE_UPSELL = 'emoji_everywhere_upsell'),
            (e.SOUNDBOARD_EVERYWHERE_INLINE_UPSELL = 'soundboard_everywhere_inline_upsell'),
            (e.SOUNDBOARD_EVERYWHERE_UPSELL = 'soundboard_everywhere_upsell'),
            (e.LARGER_FILE_UPLOAD_INLINE_UPSELL = 'larger_file_upload_inline_upsell'),
            (e.LARGER_FILE_UPLOAD_UPSELL = 'larger_file_upload_upsell'),
            (e.ANIMATED_EMOJI_UPSELL = 'animated_emoji_upsell'),
            (e.CLIENT_THEMES_UPSELL = 'client_themes_upsell'),
            (e.APP_ICON_INLINE_UPSELL = 'app_icons_inline_upsell'),
            e
        );
    })({}),
    eb = (function (e) {
        return (e[(e.PREMIUM_TIER_1 = 1)] = 'PREMIUM_TIER_1'), (e[(e.PREMIUM_TIER_2 = 2)] = 'PREMIUM_TIER_2'), (e[(e.GUILD_BOOST = 4)] = 'GUILD_BOOST'), (e[(e.PREMIUM_TIER_0 = 8)] = 'PREMIUM_TIER_0'), (e[(e.ON_REVERSE_TRIAL = 16)] = 'ON_REVERSE_TRIAL'), e;
    })({});
let ey = Object.freeze({
        '978380684370378762': 8,
        '521846918637420545': 1,
        '521847234246082599': 2,
        '590663762298667008': 4
    }),
    eO = 52428800,
    eS = 52428800,
    eI = 524288000,
    eT = 52428800,
    eN = 104857600,
    eA = {
        [i.Eu4.NONE]: 5,
        [i.Eu4.TIER_1]: 10,
        [i.Eu4.TIER_2]: 15,
        [i.Eu4.TIER_3]: 30
    },
    eC = {
        [i.Eu4.NONE]: eA[i.Eu4.NONE],
        [i.Eu4.TIER_1]: eA[i.Eu4.NONE] + eA[i.Eu4.TIER_1],
        [i.Eu4.TIER_2]: eA[i.Eu4.NONE] + eA[i.Eu4.TIER_1] + eA[i.Eu4.TIER_2],
        [i.Eu4.TIER_3]: eA[i.Eu4.NONE] + eA[i.Eu4.TIER_1] + eA[i.Eu4.TIER_2] + eA[i.Eu4.TIER_3]
    },
    eR = {
        [i.Eu4.NONE]: 8,
        [i.Eu4.TIER_1]: 24,
        [i.Eu4.TIER_2]: 36,
        [i.Eu4.TIER_3]: 48
    },
    eP = Object.freeze({
        [i.Eu4.NONE]: {
            features: [],
            limits: {
                emoji: o.jZ,
                bitrate: i.eWB,
                fileSize: i.mBz,
                screenShareQualityFramerate: 30,
                screenShareQualityResolution: '720p',
                soundboardSounds: eR[i.Eu4.NONE],
                maxConcurrentActivities: 2,
                stickers: eC[i.Eu4.NONE],
                stageVideoUsers: i.B9o
            }
        },
        [i.Eu4.TIER_1]: {
            features: [i.oNc.INVITE_SPLASH, i.oNc.ANIMATED_ICON],
            limits: {
                emoji: 100,
                bitrate: 128000,
                fileSize: i.mBz,
                screenShareQualityFramerate: 60,
                screenShareQualityResolution: '720p',
                soundboardSounds: eR[i.Eu4.TIER_1],
                maxConcurrentActivities: 3,
                stickers: eC[i.Eu4.TIER_1],
                stageVideoUsers: i.B9o
            }
        },
        [i.Eu4.TIER_2]: {
            features: [i.oNc.INVITE_SPLASH, i.oNc.ANIMATED_ICON, i.oNc.BANNER, i.oNc.ROLE_ICONS],
            limits: {
                emoji: 150,
                bitrate: 256000,
                fileSize: eT,
                screenShareQualityFramerate: 60,
                screenShareQualityResolution: '1080p',
                soundboardSounds: eR[i.Eu4.TIER_2],
                maxConcurrentActivities: 5,
                stickers: eC[i.Eu4.TIER_2],
                stageVideoUsers: i.eez
            }
        },
        [i.Eu4.TIER_3]: {
            features: [i.oNc.INVITE_SPLASH, i.oNc.ANIMATED_ICON, i.oNc.BANNER, i.oNc.ANIMATED_BANNER, i.oNc.VANITY_URL, i.oNc.ROLE_ICONS],
            limits: {
                emoji: 250,
                bitrate: 384000,
                fileSize: eN,
                screenShareQualityFramerate: 60,
                screenShareQualityResolution: '1080p',
                soundboardSounds: eR[i.Eu4.TIER_3],
                maxConcurrentActivities: Number.MAX_SAFE_INTEGER,
                stickers: eC[i.Eu4.TIER_3],
                stageVideoUsers: i.RcX
            }
        }
    }),
    ew = ['978380692553465866', '1024422698568122368', '511651871736201216', '511651876987469824', '511651880837840896', '642251038925127690', '944037208325619722', '511651885459963904'];
var eD = (function (e) {
        return (e.SOUNDBOARD_PLAY = 'soundboard play'), (e.PROFILE_THEME_COLOR = 'profile_theme_color'), (e.PROFILE_BANNER = 'profile_banner'), (e.ANIMATED_AVATAR = 'animated_avatar'), (e.AVATAR_DECORATION = 'avatar_decoration'), (e.CLIENT_THEME = 'client_theme'), (e.SHARED_CANVAS = 'shared_canvas'), (e.PROFILE_EFFECT = 'profile_effect'), (e.PRESET = 'preset'), e;
    })({}),
    ex = (function (e) {
        return (e.FREE = 'free'), (e.PREMIUM_STANDARD = 'premium-standard'), e;
    })({});
let eL = {
    '1024422698568122368': P,
    '511651876987469824': P,
    '511651885459963904': P,
    '944037208325619722': w,
    '642251038925127690': D
};
var eM = (function (e) {
    return (e.HIGH_STREAMING_QUALITY = 'high_streaming_quality'), (e.MID_STREAMING_QUALITY = 'mid_streaming_quality'), e;
})({});
let ek = Object.freeze({
    high_streaming_quality: 2,
    mid_streaming_quality: 1
});
var ej = (function (e) {
        return (e[(e.UserSettings = 0)] = 'UserSettings'), (e[(e.ApplicationStoreHome = 1)] = 'ApplicationStoreHome'), e;
    })({}),
    eU = (function (e) {
        return (e[(e.DEFAULT = 0)] = 'DEFAULT'), (e[(e.WINTER = 1)] = 'WINTER'), e;
    })({}),
    eG = (function (e) {
        return (e[(e.SNOWGLOBE = 1)] = 'SNOWGLOBE'), (e[(e.BOX = 2)] = 'BOX'), (e[(e.CUP = 3)] = 'CUP'), (e[(e.STANDARD_BOX = 4)] = 'STANDARD_BOX'), (e[(e.CAKE = 5)] = 'CAKE'), (e[(e.CHEST = 6)] = 'CHEST'), (e[(e.COFFEE = 7)] = 'COFFEE'), (e[(e.SEASONAL_STANDARD_BOX = 8)] = 'SEASONAL_STANDARD_BOX'), (e[(e.SEASONAL_CAKE = 9)] = 'SEASONAL_CAKE'), (e[(e.SEASONAL_CHEST = 10)] = 'SEASONAL_CHEST'), (e[(e.SEASONAL_COFFEE = 11)] = 'SEASONAL_COFFEE'), (e[(e.NITROWEEN_STANDARD = 12)] = 'NITROWEEN_STANDARD'), e;
    })({});
let eB = Object.freeze({
        IS_BLOCKED_IOS: 32,
        IS_OUTBOUND_REDEEMABLE_BY_TRIAL_USERS: 64,
        SUPPRESS_NOTIFICATION: 128
    }),
    eZ = Object.freeze({
        3: { fileSize: eO },
        1: { fileSize: eS },
        2: { fileSize: eI }
    });
var eF = (function (e) {
        return (e.BOOST = 'boost'), (e.DISMISS = 'dismiss'), e;
    })({}),
    eV = (function (e) {
        return (e.BADGE_TOOLTIP_VIEWED = 'share_nitro_bagde_tooltip_viewed'), (e.BADGE_CLICKED = 'share_nitro_badge_clicked'), (e.FLOW_STARTED = 'share_nitro_flow_started'), (e.FLOW_COMPLETED = 'share_nitro_flow_completed'), e;
    })({});
let eH = new Set(['PL', 'TR']),
    eW = [1, 2, 3],
    eY = [4, 5, 7, 6],
    eK = [12, 5, 7, 6],
    ez = [8, 9, 11, 10],
    eq = ez.concat(eW),
    eQ = 190;
var eX = (function (e) {
        return (e[(e.FRIEND_ANNIVERSARY = 0)] = 'FRIEND_ANNIVERSARY'), e;
    })({}),
    eJ = (function (e) {
        return (e.VIEW_ALL = 'view_all'), (e.SEND_MESSAGE = 'send_message'), e;
    })({}),
    e$ = (function (e) {
        return (e[(e.DM_CHANNEL = 0)] = 'DM_CHANNEL'), (e[(e.SHOP_PAGE = 1)] = 'SHOP_PAGE'), e;
    })({});
let e0 = 3,
    e1 = 30,
    e2 = 20;
var e3 = (function (e) {
        return (e.PREMIUM_TENURE_1_MONTH = 'premium_tenure_1_month'), (e.PREMIUM_TENURE_3_MONTH = 'premium_tenure_3_month'), (e.PREMIUM_TENURE_6_MONTH = 'premium_tenure_6_month'), (e.PREMIUM_TENURE_12_MONTH = 'premium_tenure_12_month'), (e.PREMIUM_TENURE_24_MONTH = 'premium_tenure_24_month'), (e.PREMIUM_TENURE_36_MONTH = 'premium_tenure_36_month'), (e.PREMIUM_TENURE_60_MONTH = 'premium_tenure_60_month'), (e.PREMIUM_TENURE_72_MONTH = 'premium_tenure_72_month'), e;
    })({}),
    e4 = (function (e) {
        return (e.PREMIUM_TENURE_1_MONTH = 'premium_tenure_1_month_v2'), (e.PREMIUM_TENURE_3_MONTH = 'premium_tenure_3_month_v2'), (e.PREMIUM_TENURE_6_MONTH = 'premium_tenure_6_month_v2'), (e.PREMIUM_TENURE_12_MONTH = 'premium_tenure_12_month_v2'), (e.PREMIUM_TENURE_24_MONTH = 'premium_tenure_24_month_v2'), (e.PREMIUM_TENURE_36_MONTH = 'premium_tenure_36_month_v2'), (e.PREMIUM_TENURE_60_MONTH = 'premium_tenure_60_month_v2'), (e.PREMIUM_TENURE_72_MONTH = 'premium_tenure_72_month_v2'), e;
    })({});
let e6 = {
        premium_tenure_1_month: {
            id: 'premium_tenure_1_month',
            badgeVersion: 1,
            nameUnformatted: a.t.LR1C0d,
            tenureReqNumMonths: 1,
            hasWideArt: !1
        },
        premium_tenure_3_month: {
            id: 'premium_tenure_3_month',
            badgeVersion: 1,
            nameUnformatted: a.t['rI1/3N'],
            tenureReqNumMonths: 3,
            hasWideArt: !1
        },
        premium_tenure_6_month: {
            id: 'premium_tenure_6_month',
            badgeVersion: 1,
            nameUnformatted: a.t.VkhVKS,
            tenureReqNumMonths: 6,
            hasWideArt: !1
        },
        premium_tenure_12_month: {
            id: 'premium_tenure_12_month',
            badgeVersion: 1,
            nameUnformatted: a.t.gzUfNT,
            tenureReqNumMonths: 12,
            hasWideArt: !1
        },
        premium_tenure_24_month: {
            id: 'premium_tenure_24_month',
            badgeVersion: 1,
            nameUnformatted: a.t.fuwTPj,
            tenureReqNumMonths: 24,
            hasWideArt: !1
        },
        premium_tenure_36_month: {
            id: 'premium_tenure_36_month',
            badgeVersion: 1,
            nameUnformatted: a.t.qNhNk5,
            tenureReqNumMonths: 36,
            hasWideArt: !1
        },
        premium_tenure_60_month: {
            id: 'premium_tenure_60_month',
            badgeVersion: 1,
            nameUnformatted: a.t['wvX+eH'],
            tenureReqNumMonths: 60,
            hasWideArt: !1
        },
        premium_tenure_72_month: {
            id: 'premium_tenure_72_month',
            badgeVersion: 1,
            nameUnformatted: a.t.Wu9WJi,
            tenureReqNumMonths: 72,
            hasWideArt: !1
        }
    },
    e5 = {
        premium_tenure_1_month_v2: {
            id: 'premium_tenure_1_month_v2',
            badgeVersion: 2,
            nameUnformatted: a.t.LR1C0d,
            tenureReqNumMonths: 1,
            hasWideArt: !1
        },
        premium_tenure_3_month_v2: {
            id: 'premium_tenure_3_month_v2',
            badgeVersion: 2,
            nameUnformatted: a.t['rI1/3N'],
            tenureReqNumMonths: 3,
            hasWideArt: !1
        },
        premium_tenure_6_month_v2: {
            id: 'premium_tenure_6_month_v2',
            badgeVersion: 2,
            nameUnformatted: a.t.VkhVKS,
            tenureReqNumMonths: 6,
            hasWideArt: !1
        },
        premium_tenure_12_month_v2: {
            id: 'premium_tenure_12_month_v2',
            badgeVersion: 2,
            nameUnformatted: a.t.gzUfNT,
            tenureReqNumMonths: 12,
            hasWideArt: !1
        },
        premium_tenure_24_month_v2: {
            id: 'premium_tenure_24_month_v2',
            badgeVersion: 2,
            nameUnformatted: a.t.fuwTPj,
            tenureReqNumMonths: 24,
            hasWideArt: !1
        },
        premium_tenure_36_month_v2: {
            id: 'premium_tenure_36_month_v2',
            badgeVersion: 2,
            nameUnformatted: a.t.qNhNk5,
            tenureReqNumMonths: 36,
            hasWideArt: !1
        },
        premium_tenure_60_month_v2: {
            id: 'premium_tenure_60_month_v2',
            badgeVersion: 2,
            nameUnformatted: a.t['wvX+eH'],
            tenureReqNumMonths: 60,
            hasWideArt: !0
        },
        premium_tenure_72_month_v2: {
            id: 'premium_tenure_72_month_v2',
            badgeVersion: 2,
            nameUnformatted: a.t['/menIy'],
            tenureReqNumMonths: 72,
            hasWideArt: !0
        }
    },
    e7 = l({}, e6, e5);
var e8 = (function (e) {
        return (e[(e.NONE = 0)] = 'NONE'), (e[(e.FP_ONLY = 1)] = 'FP_ONLY'), (e[(e.FP_SUB_PAUSED = 2)] = 'FP_SUB_PAUSED'), e;
    })({}),
    e9 = (function (e) {
        return (e[(e.HOUR = 1)] = 'HOUR'), (e[(e.DAY = 2)] = 'DAY'), e;
    })({});
let te = {
    [r.a.PREMIUM_TIER_2_1_HOUR]: [1, 1],
    [r.a.PREMIUM_TIER_2_1_DAY]: [2, 1],
    [r.a.PREMIUM_TIER_2_3_DAY]: [2, 3]
};
