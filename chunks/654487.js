"use strict";
n.d(t, {
    B3: () => R,
    BQ: () => M,
    CI: () => g,
    Fw: () => y,
    GD: () => E,
    J6: () => b,
    K3: () => L,
    Ko: () => p,
    Li: () => c.L,
    Ls: () => O,
    Pc: () => x,
    TY: () => u.T,
    WQ: () => k,
    ZV: () => f,
    aJ: () => v,
    eA: () => S,
    ej: () => I,
    fO: () => h,
    fP: () => A,
    gB: () => N,
    hK: () => C,
    kL: () => w,
    mg: () => T,
    pc: () => G,
    rE: () => d,
    tZ: () => _,
    zO: () => D,
});
var r = n(735438),
    i = n(412703),
    s = n(257280),
    a = n(562465),
    o = n(927813),
    l = n(341915),
    u = n(557567),
    c = n(902173),
    d = (function (e) {
        return (
            (e.ACTIVITY_PANEL = "quests_bar_activity_panel"),
            (e.QUESTS_MANAGER = "quests_manager"),
            (e.QUESTS_CONSOLE_OPTIMISTIC_UPDATES_MANAGER = "quests_console_optimistic_updates_manager"),
            (e.USER_SETTINGS_GIFT_INVENTORY = "user_settings_gift_inventory"),
            (e.USER_SETTINGS_SEARCH_GIFT_INVENTORY = "user_settings_search_gift_inventory"),
            (e.USE_QUESTS = "use_quests"),
            (e.STREAM_SOURCE_SELECT = "stream_source_select"),
            (e.MEMBERS_LIST = "members_list"),
            (e.QUESTS_BAR = "quests_bar"),
            (e.QUESTS_BAR_MOBILE = "quests_bar_mobile"),
            (e.REWARD_CODE_MODAL = "reward_code_modal"),
            (e.INGAME_REWARD_MODAL = "ingame_reward_modal"),
            (e.COLLECTIBLE_REWARD_MODAL = "collectible_reward_modal"),
            (e.ORBS_REWARD_MODAL = "orbs_reward_modal"),
            (e.QUEST_PREVIEW_TOOL = "quest_preview_tool"),
            (e.QUEST_PREVIEW_TOOL_2 = "quest_preview_tool_2"),
            (e.QUESTS_MINOR_REWARD_CAPPING_CONFIG = "QUESTS_MINOR_REWARD_CAPPING_CONFIG"),
            (e.QUESTS_CARD = "quests_card"),
            (e.QUESTS_STORE = "quests_store"),
            (e.QUEST_CHANNEL_CALL_HEADER = "quests_channel_call_header"),
            (e.QUEST_HOME_DESKTOP = "quest_home_desktop"),
            (e.QUEST_HOME_MOBILE = "quest_home_mobile"),
            (e.QUEST_PROGRESS_BAR = "quest_progress_bar"),
            (e.EMBED_MOBILE = "embed_mobile"),
            (e.EMBED_DESKTOP = "embed_desktop"),
            (e.QUEST_CONTEXT_MENU = "context_menu"),
            (e.CODED_LINK = "coded_link"),
            (e.QUEST_DISCLOSURE_MODAL = "quest_disclosure_modal"),
            (e.DISCOVERY_SIDEBAR = "discovery_sidebar"),
            (e.DISCOVERY_COMPASS = "discovery_compass"),
            (e.BADGE = "badge"),
            (e.COLLECTIBLES_SHOP_HEADER_BAR = "collectibles_shop_header_bar"),
            (e.ORBS_ANNOUNCEMENT_MODAL = "orbs_announcement_modal"),
            (e.CONFLICT_CHECKS = "conflict_checks"),
            (e.VIDEO_MODAL = "video_modal"),
            (e.VIDEO_MODAL_MOBILE = "video_modal_mobile"),
            (e.GAME_WIDGETS_POPOVER = "game_widgets_popover"),
            (e.PRIVATE_CHANNELS_LIST = "private_channels_list"),
            (e.INTERNAL_TOOLING = "internal_tooling"),
            (e.QUEST_HOME_MOVED_CALLOUT = "quest_home_moved_callout"),
            (e.IN_APP_NAVIGATION = "in_app_navigation"),
            (e.NAVIGATE_TO_QUEST_HOME_UTIL = "navigate_to_quest_home_util"),
            (e.QUEST_DEEP_LINK_UTIL = "quest_deep_link_util"),
            (e.YOU_TAB_PROFILE_HEADER = "you_tab_profile_header"),
            (e.QUEST_INSTRUCTIONS = "quest_instructions"),
            (e.QUEST_ACTIVITY_BOTTOM_SHEET = "quest_activity_bottom_sheet"),
            (e.QUEST_PRIMARY_CTA = "quest_primary_cta"),
            (e.QUEST_LEARN_MORE_CTA = "quest_learn_more_cta"),
            (e.QUEST_ACTIVITY_HEADER = "quest_activity_header"),
            (e.QUEST_ACTIVITY_UNENROLLED_MODAL = "quest_activity_unenrolled_modal"),
            e
        );
    })({});
let _ = o.A.Millis.MINUTE * s.K.ConsecutiveHeartbeatPeriodMinutes,
    f = { tension: 900, friction: 45, clamp: !0 },
    p = { tension: 360, friction: 30, clamp: !0 };
var h = (function (e) {
    return (e.CONSOLE = "CONSOLE"), (e.DESKTOP = "DESKTOP"), e;
})({});
let m = (0, a.TP)(),
    E =
        -1 !== m.indexOf("localhost") || -1 !== m.indexOf("127.0.0.1")
            ? `${m}/_cdn_storage/`
            : "https://cdn.discordapp.com/",
    g = E + "quests/";
var A = (function (e) {
    return (
        (e.COLLAPSED = "collapsed"),
        (e.EXPANDED = "expanded"),
        (e.CLOSED = "closed"),
        (e.SOFT_DISMISSED = "soft-dismissed"),
        (e.RESET_TO_PREVIOUS = "reset-to-previous"),
        e
    );
})({});
let I = "545364944258990091",
    T = "{reward_code}";
var S = (function (e) {
    return (
        (e.EXCLUDED_QUEST = "excluded_quest"),
        (e.UNKNOWN_QUEST = "unknown_quest"),
        (e.NOT_SHAREABLE_QUEST = "not_shareable_quest"),
        e
    );
})({});
let y = "1333839522189938740",
    v = "1410358070831480904",
    N = "1420556874629251124",
    C = "1402418703554842694",
    b = new Set([l.yW.DESKTOP_ACCOUNT_PANEL_AREA, l.yW.MOBILE_HOME_DOCK_AREA]),
    R = new Set([
        i.n.STREAM_ON_DESKTOP,
        i.n.PLAY_ON_DESKTOP,
        i.n.PLAY_ON_XBOX,
        i.n.PLAY_ON_PLAYSTATION,
        i.n.PLAY_ON_DESKTOP_V2,
        i.n.PLAY_ACTIVITY,
    ]),
    O = new Set([
        i.n.STREAM_ON_DESKTOP,
        i.n.PLAY_ON_DESKTOP,
        i.n.PLAY_ON_XBOX,
        i.n.PLAY_ON_PLAYSTATION,
        i.n.PLAY_ON_DESKTOP_V2,
        i.n.PLAY_ACTIVITY,
    ]),
    D = new Set([
        i.n.STREAM_ON_DESKTOP,
        i.n.PLAY_ON_DESKTOP,
        i.n.PLAY_ON_XBOX,
        i.n.PLAY_ON_PLAYSTATION,
        i.n.PLAY_ON_DESKTOP_V2,
        i.n.PLAY_ACTIVITY,
    ]),
    L = { is_targeted: !1 };
var w = (function (e) {
        return (
            (e.SUGGESTED = "suggested"),
            (e.MOST_RECENT = "most_recent"),
            (e.EXPIRING_SOON = "expiring_soon"),
            (e.RECENTLY_ENROLLED = "recently_enrolled"),
            e
        );
    })({}),
    x = (function (e) {
        return (e.VIDEO = "task_video"), (e.PLAY = "task_play"), e;
    })({}),
    M = (function (e) {
        return (
            (e.VIRTUAL_CURRENCY = "reward_virtual_currency"),
            (e.COLLECTIBLE = "reward_collectible"),
            (e.IN_GAME = "reward_in_game"),
            e
        );
    })({});
let P = [
    { group: "task", filter: "task_play" },
    { group: "task", filter: "task_video" },
    { group: "reward", filter: "reward_virtual_currency" },
    { group: "reward", filter: "reward_collectible" },
    { group: "reward", filter: "reward_in_game" },
];
function k(e) {
    return Object.values(x).includes(e)
        ? { group: "task", filter: e }
        : Object.values(M).includes(e)
          ? { group: "reward", filter: e }
          : null;
}
let U = ["reward", "task"],
    G = Object.entries((0, r.groupBy)(P, "group")).sort((e, t) => {
        let n = U.indexOf(e[0]),
            r = U.indexOf(t[0]);
        return n < r ? -1 : +(r < n);
    });
