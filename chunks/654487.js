n.d(t, {
    A6: () => m,
    B3: () => H,
    BQ: () => K,
    CI: () => g,
    Fw: () => y,
    GD: () => h,
    J6: () => V,
    K3: () => W,
    Ko: () => C,
    Li: () => c.L,
    Ls: () => k,
    Pc: () => j,
    TY: () => S.T,
    Tz: () => O,
    WQ: () => $,
    ZV: () => f,
    aA: () => p,
    aJ: () => G,
    eA: () => M,
    ej: () => U,
    fO: () => L,
    fP: () => b,
    gB: () => v,
    hK: () => B,
    kL: () => Y,
    mg: () => P,
    pc: () => q,
    rE: () => N,
    tZ: () => R,
    uz: () => F,
    yr: () => w,
    zO: () => x,
});
var i,
    r,
    a,
    s,
    _,
    l,
    o,
    E = n(735438),
    d = n(412703),
    c = n(902173),
    u = n(257280),
    I = n(636537),
    A = n(927813),
    T = n(507107),
    S = n(557567),
    N =
        (((i = {}).ACTIVITY_PANEL = "quests_bar_activity_panel"),
        (i.QUESTS_MANAGER = "quests_manager"),
        (i.QUESTS_CONSOLE_OPTIMISTIC_UPDATES_MANAGER = "quests_console_optimistic_updates_manager"),
        (i.USER_SETTINGS_GIFT_INVENTORY = "user_settings_gift_inventory"),
        (i.USER_SETTINGS_SEARCH_GIFT_INVENTORY = "user_settings_search_gift_inventory"),
        (i.USE_QUESTS = "use_quests"),
        (i.STREAM_SOURCE_SELECT = "stream_source_select"),
        (i.MEMBERS_LIST = "members_list"),
        (i.QUESTS_BAR = "quests_bar"),
        (i.QUESTS_BAR_MOBILE = "quests_bar_mobile"),
        (i.REWARD_CODE_MODAL = "reward_code_modal"),
        (i.INGAME_REWARD_MODAL = "ingame_reward_modal"),
        (i.COLLECTIBLE_REWARD_MODAL = "collectible_reward_modal"),
        (i.ORBS_REWARD_MODAL = "orbs_reward_modal"),
        (i.QUESTS_MINOR_REWARD_CAPPING_CONFIG = "QUESTS_MINOR_REWARD_CAPPING_CONFIG"),
        (i.QUESTS_CARD = "quests_card"),
        (i.QUESTS_STORE = "quests_store"),
        (i.QUEST_CHANNEL_CALL_HEADER = "quests_channel_call_header"),
        (i.QUEST_HOME_DESKTOP = "quest_home_desktop"),
        (i.QUEST_HOME_MOBILE = "quest_home_mobile"),
        (i.QUEST_PROGRESS_BAR = "quest_progress_bar"),
        (i.EMBED_MOBILE = "embed_mobile"),
        (i.EMBED_DESKTOP = "embed_desktop"),
        (i.QUEST_CONTEXT_MENU = "context_menu"),
        (i.CODED_LINK = "coded_link"),
        (i.QUEST_DISCLOSURE_MODAL = "quest_disclosure_modal"),
        (i.DISCOVERY_SIDEBAR = "discovery_sidebar"),
        (i.DISCOVERY_COMPASS = "discovery_compass"),
        (i.BADGE = "badge"),
        (i.COLLECTIBLES_SHOP_HEADER_BAR = "collectibles_shop_header_bar"),
        (i.ORBS_ANNOUNCEMENT_MODAL = "orbs_announcement_modal"),
        (i.CONFLICT_CHECKS = "conflict_checks"),
        (i.VIDEO_MODAL = "video_modal"),
        (i.VIDEO_MODAL_MOBILE = "video_modal_mobile"),
        (i.GAME_WIDGETS_POPOVER = "game_widgets_popover"),
        (i.PRIVATE_CHANNELS_LIST = "private_channels_list"),
        (i.INTERNAL_TOOLING = "internal_tooling"),
        (i.QUEST_HOME_MOVED_CALLOUT = "quest_home_moved_callout"),
        (i.IN_APP_NAVIGATION = "in_app_navigation"),
        (i.QUEST_DEEP_LINK_UTIL = "quest_deep_link_util"),
        (i.YOU_TAB_PROFILE_HEADER = "you_tab_profile_header"),
        (i.QUEST_INSTRUCTIONS = "quest_instructions"),
        (i.QUEST_ACTIVITY_BOTTOM_SHEET = "quest_activity_bottom_sheet"),
        (i.QUEST_PRIMARY_CTA = "quest_primary_cta"),
        (i.QUEST_ACTIVITY_HEADER = "quest_activity_header"),
        (i.QUEST_ACTIVITY_UNENROLLED_MODAL = "quest_activity_unenrolled_modal"),
        (i.NITRO_HOME_MARKETING = "nitro_home_marketing"),
        (i.NITRO_HOME_TAB = "nitro_home_tab"),
        i);
let O = new Set([c.L.NITRO_CONTROL_CTA, c.L.NITRO_2_POINT_0_CTA]),
    R = A.A.Millis.MINUTE * u.K.ConsecutiveHeartbeatPeriodMinutes,
    f = { tension: 900, friction: 45, clamp: !0 },
    C = { tension: 360, friction: 30, clamp: !0 },
    p = 6,
    m = 2;
var L = (((r = {}).CONSOLE = "CONSOLE"), (r.DESKTOP = "DESKTOP"), r);
let D = (0, I.TP)(),
    h =
        -1 !== D.indexOf("localhost") || -1 !== D.indexOf("127.0.0.1")
            ? `${D}/_cdn_storage/`
            : "https://cdn.discordapp.com/",
    g = h + "quests/";
var b =
    (((a = {}).COLLAPSED = "collapsed"),
    (a.EXPANDED = "expanded"),
    (a.CLOSED = "closed"),
    (a.SOFT_DISMISSED = "soft-dismissed"),
    (a.RESET_TO_PREVIOUS = "reset-to-previous"),
    a);
let U = "545364944258990091",
    P = "{reward_code}";
var M =
    (((s = {}).EXCLUDED_QUEST = "excluded_quest"),
    (s.UNKNOWN_QUEST = "unknown_quest"),
    (s.NOT_SHAREABLE_QUEST = "not_shareable_quest"),
    s);
let y = "1333839522189938740",
    G = "1410358070831480904",
    v = "1420556874629251124",
    B = "1402418703554842694",
    w = "1496993616537587813",
    F = "1496993616537587812",
    V = new Set([
        T.yW.DESKTOP_ACCOUNT_PANEL_AREA,
        T.yW.MOBILE_HOME_DOCK_AREA,
        T.yW.QUEST_HOME_BANNER_DESKTOP,
        T.yW.QUEST_HOME_MOBILE_CAROUSEL,
    ]),
    H = new Set([
        d.n.STREAM_ON_DESKTOP,
        d.n.PLAY_ON_DESKTOP,
        d.n.PLAY_ON_XBOX,
        d.n.PLAY_ON_PLAYSTATION,
        d.n.PLAY_ACTIVITY,
    ]),
    k = new Set([
        d.n.STREAM_ON_DESKTOP,
        d.n.PLAY_ON_DESKTOP,
        d.n.PLAY_ON_XBOX,
        d.n.PLAY_ON_PLAYSTATION,
        d.n.PLAY_ACTIVITY,
    ]),
    x = new Set([
        d.n.STREAM_ON_DESKTOP,
        d.n.PLAY_ON_DESKTOP,
        d.n.PLAY_ON_XBOX,
        d.n.PLAY_ON_PLAYSTATION,
        d.n.PLAY_ACTIVITY,
    ]),
    W = { is_targeted: !1 };
var Y =
        (((_ = {}).SUGGESTED = "suggested"),
        (_.MOST_RECENT = "most_recent"),
        (_.EXPIRING_SOON = "expiring_soon"),
        (_.RECENTLY_ENROLLED = "recently_enrolled"),
        _),
    j = (((l = {}).VIDEO = "task_video"), (l.PLAY = "task_play"), l),
    K =
        (((o = {}).VIRTUAL_CURRENCY = "reward_virtual_currency"),
        (o.COLLECTIBLE = "reward_collectible"),
        (o.IN_GAME = "reward_in_game"),
        o);
function $(e) {
    return Object.values(j).includes(e)
        ? { group: "task", filter: e }
        : Object.values(K).includes(e)
          ? { group: "reward", filter: e }
          : null;
}
let Q = ["reward", "task"],
    q = Object.entries(
        (0, E.groupBy)(
            [
                { group: "task", filter: "task_play" },
                { group: "task", filter: "task_video" },
                { group: "reward", filter: "reward_virtual_currency" },
                { group: "reward", filter: "reward_collectible" },
                { group: "reward", filter: "reward_in_game" },
            ],
            "group",
        ),
    ).sort((e, t) => {
        let n = Q.indexOf(e[0]),
            i = Q.indexOf(t[0]);
        return n < i ? -1 : +(i < n);
    });
Object.entries(
    (0, E.groupBy)(
        [
            { group: "reward", filter: "reward_virtual_currency" },
            { group: "reward", filter: "reward_collectible" },
            { group: "reward", filter: "reward_in_game" },
        ],
        "group",
    ),
);
