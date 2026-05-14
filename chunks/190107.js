"use strict";
n.d(t, {
    yr: () => G,
    Fw: () => P,
    Ko: () => N,
    ej: () => L,
    K3: () => Y,
    hK: () => k,
    ZV: () => S,
    J6: () => V,
    zO: () => j,
    rE: () => A,
    eA: () => M,
    tZ: () => T,
    Ls: () => H,
    Li: () => f.L,
    BQ: () => z,
    fP: () => D,
    B3: () => B,
    gB: () => U,
    A6: () => C,
    fO: () => v,
    Pc: () => K,
    mg: () => w,
    uz: () => F,
    Tz: () => I,
    aA: () => y,
    WQ: () => $,
    aJ: () => x,
    CI: () => b,
    pc: () => Z,
    GD: () => R,
    kL: () => W,
    TY: () => g,
});
var i,
    r,
    s,
    a,
    o,
    l,
    u,
    c,
    d = n(735438),
    _ = n(412703),
    f = n(902173),
    h =
        (((i = {})[(i.ConsecutiveHeartbeatPeriodMinutes = 2)] = "ConsecutiveHeartbeatPeriodMinutes"),
        (i[(i.StatusLookbackPeriodDays = 30)] = "StatusLookbackPeriodDays"),
        i),
    p = n(636537),
    E = n(927813),
    m = n(507107);
let g = {
    GIFT_INVENTORY_SETTINGS_BADGE: 1,
    QUEST_BAR: 2,
    QUEST_BAR_V2: 2,
    QUEST_BAR_MOBILE: 2,
    ACTIVITY_PANEL: 4,
    QUEST_LIVE_STREAM: 8,
};
var A =
    (((r = {}).ACTIVITY_PANEL = "quests_bar_activity_panel"),
    (r.QUESTS_MANAGER = "quests_manager"),
    (r.QUESTS_CONSOLE_OPTIMISTIC_UPDATES_MANAGER = "quests_console_optimistic_updates_manager"),
    (r.USER_SETTINGS_GIFT_INVENTORY = "user_settings_gift_inventory"),
    (r.USER_SETTINGS_SEARCH_GIFT_INVENTORY = "user_settings_search_gift_inventory"),
    (r.USE_QUESTS = "use_quests"),
    (r.STREAM_SOURCE_SELECT = "stream_source_select"),
    (r.MEMBERS_LIST = "members_list"),
    (r.QUESTS_BAR = "quests_bar"),
    (r.QUESTS_BAR_MOBILE = "quests_bar_mobile"),
    (r.REWARD_CODE_MODAL = "reward_code_modal"),
    (r.INGAME_REWARD_MODAL = "ingame_reward_modal"),
    (r.COLLECTIBLE_REWARD_MODAL = "collectible_reward_modal"),
    (r.ORBS_REWARD_MODAL = "orbs_reward_modal"),
    (r.QUESTS_MINOR_REWARD_CAPPING_CONFIG = "QUESTS_MINOR_REWARD_CAPPING_CONFIG"),
    (r.QUESTS_CARD = "quests_card"),
    (r.QUESTS_STORE = "quests_store"),
    (r.QUEST_CHANNEL_CALL_HEADER = "quests_channel_call_header"),
    (r.QUEST_HOME_DESKTOP = "quest_home_desktop"),
    (r.QUEST_HOME_MOBILE = "quest_home_mobile"),
    (r.QUEST_PROGRESS_BAR = "quest_progress_bar"),
    (r.EMBED_MOBILE = "embed_mobile"),
    (r.EMBED_DESKTOP = "embed_desktop"),
    (r.QUEST_CONTEXT_MENU = "context_menu"),
    (r.CODED_LINK = "coded_link"),
    (r.QUEST_DISCLOSURE_MODAL = "quest_disclosure_modal"),
    (r.DISCOVERY_SIDEBAR = "discovery_sidebar"),
    (r.DISCOVERY_COMPASS = "discovery_compass"),
    (r.BADGE = "badge"),
    (r.COLLECTIBLES_SHOP_HEADER_BAR = "collectibles_shop_header_bar"),
    (r.ORBS_ANNOUNCEMENT_MODAL = "orbs_announcement_modal"),
    (r.CONFLICT_CHECKS = "conflict_checks"),
    (r.VIDEO_MODAL = "video_modal"),
    (r.VIDEO_MODAL_MOBILE = "video_modal_mobile"),
    (r.GAME_WIDGETS_POPOVER = "game_widgets_popover"),
    (r.PRIVATE_CHANNELS_LIST = "private_channels_list"),
    (r.INTERNAL_TOOLING = "internal_tooling"),
    (r.QUEST_HOME_MOVED_CALLOUT = "quest_home_moved_callout"),
    (r.IN_APP_NAVIGATION = "in_app_navigation"),
    (r.QUEST_DEEP_LINK_UTIL = "quest_deep_link_util"),
    (r.YOU_TAB_PROFILE_HEADER = "you_tab_profile_header"),
    (r.QUEST_INSTRUCTIONS = "quest_instructions"),
    (r.QUEST_ACTIVITY_BOTTOM_SHEET = "quest_activity_bottom_sheet"),
    (r.QUEST_PRIMARY_CTA = "quest_primary_cta"),
    (r.QUEST_ACTIVITY_HEADER = "quest_activity_header"),
    (r.QUEST_ACTIVITY_UNENROLLED_MODAL = "quest_activity_unenrolled_modal"),
    (r.NITRO_HOME_MARKETING = "nitro_home_marketing"),
    (r.NITRO_HOME_TAB = "nitro_home_tab"),
    (r.QUEST_ORB_MULTIPLIER_TAB_TOOLTIP = "quest_orb_multiplier_tab_tooltip"),
    r);
let I = new Set([f.L.NITRO_2_POINT_0_CTA]),
    T = E.A.Millis.MINUTE * h.ConsecutiveHeartbeatPeriodMinutes,
    S = { tension: 900, friction: 45, clamp: !0 },
    N = { tension: 360, friction: 30, clamp: !0 },
    y = 6,
    C = 2;
var v = (((s = {}).CONSOLE = "CONSOLE"), (s.DESKTOP = "DESKTOP"), s);
let O = (0, p.TP)(),
    R =
        -1 !== O.indexOf("localhost") || -1 !== O.indexOf("127.0.0.1")
            ? `${O}/_cdn_storage/`
            : "https://cdn.discordapp.com/",
    b = R + "quests/";
var D =
    (((a = {}).COLLAPSED = "collapsed"),
    (a.EXPANDED = "expanded"),
    (a.CLOSED = "closed"),
    (a.SOFT_DISMISSED = "soft-dismissed"),
    (a.RESET_TO_PREVIOUS = "reset-to-previous"),
    a);
let L = "545364944258990091",
    w = "{reward_code}";
var M =
    (((o = {}).EXCLUDED_QUEST = "excluded_quest"),
    (o.UNKNOWN_QUEST = "unknown_quest"),
    (o.NOT_SHAREABLE_QUEST = "not_shareable_quest"),
    o);
let P = "1333839522189938740",
    x = "1410358070831480904",
    U = "1420556874629251124",
    k = "1402418703554842694",
    G = "1496993616537587813",
    F = "1496993616537587812",
    V = new Set([
        m.yW.DESKTOP_ACCOUNT_PANEL_AREA,
        m.yW.MOBILE_HOME_DOCK_AREA,
        m.yW.QUEST_HOME_BANNER_DESKTOP,
        m.yW.QUEST_HOME_MOBILE_CAROUSEL,
    ]),
    B = new Set([
        _.n.STREAM_ON_DESKTOP,
        _.n.PLAY_ON_DESKTOP,
        _.n.PLAY_ON_XBOX,
        _.n.PLAY_ON_PLAYSTATION,
        _.n.PLAY_ACTIVITY,
    ]),
    H = new Set([
        _.n.STREAM_ON_DESKTOP,
        _.n.PLAY_ON_DESKTOP,
        _.n.PLAY_ON_XBOX,
        _.n.PLAY_ON_PLAYSTATION,
        _.n.PLAY_ACTIVITY,
    ]),
    j = new Set([
        _.n.STREAM_ON_DESKTOP,
        _.n.PLAY_ON_DESKTOP,
        _.n.PLAY_ON_XBOX,
        _.n.PLAY_ON_PLAYSTATION,
        _.n.PLAY_ACTIVITY,
    ]),
    Y = { is_targeted: !1 };
var W =
        (((l = {}).SUGGESTED = "suggested"),
        (l.MOST_RECENT = "most_recent"),
        (l.EXPIRING_SOON = "expiring_soon"),
        (l.RECENTLY_ENROLLED = "recently_enrolled"),
        l),
    K = (((u = {}).VIDEO = "task_video"), (u.PLAY = "task_play"), u),
    z =
        (((c = {}).VIRTUAL_CURRENCY = "reward_virtual_currency"),
        (c.COLLECTIBLE = "reward_collectible"),
        (c.IN_GAME = "reward_in_game"),
        c);
function $(e) {
    return Object.values(K).includes(e)
        ? { group: "task", filter: e }
        : Object.values(z).includes(e)
          ? { group: "reward", filter: e }
          : null;
}
let q = ["reward", "task"],
    Z = Object.entries(
        (0, d.groupBy)(
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
        let n = q.indexOf(e[0]),
            i = q.indexOf(t[0]);
        return n < i ? -1 : +(i < n);
    });
