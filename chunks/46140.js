n.d(t, {
    Dp: () => b,
    Jp: () => A,
    Lv: () => T,
    NH: () => g,
    Ot: () => d,
    R4: () => _,
    S7: () => c.S,
    Ts: () => E,
    V6: () => O,
    V_: () => y,
    XJ: () => N,
    XZ: () => f,
    a_: () => l.a,
    cd: () => p,
    dr: () => u,
    l$: () => I,
    tD: () => m,
    tt: () => S,
    v6: () => v,
    vy: () => R,
    yq: () => C,
}),
    n(388685);
var r = n(754700),
    i = n(758846),
    a = n(544891),
    o = n(70956),
    s = n(497505),
    l = n(438954),
    c = n(670081),
    u = (function (e) {
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
            e
        );
    })({});
let d = o.Z.Millis.MINUTE * i.c.ConsecutiveHeartbeatPeriodMinutes,
    f = {
        tension: 900,
        friction: 45,
        clamp: !0,
    },
    _ = {
        tension: 360,
        friction: 30,
        clamp: !0,
    };
var p = (function (e) {
    return (e.CONSOLE = "CONSOLE"), (e.DESKTOP = "DESKTOP"), e;
})({});
let h = (0, a.K0)(),
    m =
        -1 !== h.indexOf("localhost") || -1 !== h.indexOf("127.0.0.1")
            ? "".concat(h, "/_cdn_storage/quests/")
            : "https://cdn.discordapp.com/quests/";
var g = (function (e) {
    return (
        (e.COLLAPSED = "collapsed"),
        (e.EXPANDED = "expanded"),
        (e.CLOSED = "closed"),
        (e.SOFT_DISMISSED = "soft-dismissed"),
        (e.RESET_TO_PREVIOUS = "reset-to-previous"),
        e
    );
})({});
let E = "545364944258990091",
    b = "{reward_code}";
var y = (function (e) {
    return (
        (e.EXCLUDED_QUEST = "excluded_quest"),
        (e.UNKNOWN_QUEST = "unknown_quest"),
        (e.NOT_SHAREABLE_QUEST = "not_shareable_quest"),
        e
    );
})({});
let O = "1333839522189938740",
    v = new Set([s.Ok.DESKTOP_ACCOUNT_PANEL_AREA, s.Ok.MOBILE_HOME_DOCK_AREA]),
    I = new Set([
        r.X.STREAM_ON_DESKTOP,
        r.X.PLAY_ON_DESKTOP,
        r.X.PLAY_ON_XBOX,
        r.X.PLAY_ON_PLAYSTATION,
        r.X.PLAY_ON_DESKTOP_V2,
    ]),
    T = new Set([
        r.X.STREAM_ON_DESKTOP,
        r.X.PLAY_ON_DESKTOP,
        r.X.PLAY_ON_XBOX,
        r.X.PLAY_ON_PLAYSTATION,
        r.X.PLAY_ON_DESKTOP_V2,
    ]),
    S = new Set([
        r.X.STREAM_ON_DESKTOP,
        r.X.PLAY_ON_DESKTOP,
        r.X.PLAY_ON_XBOX,
        r.X.PLAY_ON_PLAYSTATION,
        r.X.PLAY_ON_DESKTOP_V2,
    ]),
    A = { is_targeted: !1 };
var C = (function (e) {
        return (
            (e.SUGGESTED = "suggested"),
            (e.MOST_RECENT = "most_recent"),
            (e.EXPIRING_SOON = "expiring_soon"),
            (e.RECENTLY_ENROLLED = "recently_enrolled"),
            e
        );
    })({}),
    N = (function (e) {
        return (
            (e.REWARD_VIRTUAL_CURRENCY = "reward_virtual_currency"),
            (e.REWARD_COLLECTIBLE = "reward_collectible"),
            (e.REWARD_IN_GAME = "reward_in_game"),
            (e.TASK_VIDEO = "task_video"),
            (e.TASK_PLAY = "task_play"),
            e
        );
    })({});
let R = [
    {
        group: "task",
        filter: "task_play",
    },
    {
        group: "task",
        filter: "task_video",
    },
    {
        group: "reward",
        filter: "reward_virtual_currency",
    },
    {
        group: "reward",
        filter: "reward_collectible",
    },
    {
        group: "reward",
        filter: "reward_in_game",
    },
];
