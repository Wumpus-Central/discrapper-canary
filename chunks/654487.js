"use strict";
n.d(t, {
    A6: () => N,
    B3: () => G,
    BQ: () => Y,
    CI: () => R,
    Fw: () => M,
    GD: () => O,
    J6: () => U,
    K3: () => B,
    Ko: () => S,
    Li: () => _.L,
    Ls: () => F,
    Pc: () => j,
    TY: () => m.T,
    Tz: () => A,
    WQ: () => W,
    ZV: () => T,
    aA: () => y,
    aJ: () => P,
    eA: () => w,
    ej: () => D,
    fO: () => v,
    fP: () => b,
    gB: () => x,
    hK: () => k,
    kL: () => H,
    mg: () => L,
    pc: () => $,
    rE: () => g,
    tZ: () => I,
    zO: () => V,
});
var r,
    i,
    s,
    a,
    o,
    l,
    u,
    c = n(735438),
    d = n(412703),
    _ = n(902173),
    f = n(257280),
    p = n(562465),
    h = n(927813),
    E = n(341915),
    m = n(557567),
    g =
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
        r);
let A = new Set([_.L.NITRO_CONTROL_CTA, _.L.NITRO_2_POINT_0_CTA]),
    I = h.A.Millis.MINUTE * f.K.ConsecutiveHeartbeatPeriodMinutes,
    T = { tension: 900, friction: 45, clamp: !0 },
    S = { tension: 360, friction: 30, clamp: !0 },
    y = 6,
    N = 2;
var v = (((i = {}).CONSOLE = "CONSOLE"), (i.DESKTOP = "DESKTOP"), i);
let C = (0, p.TP)(),
    O =
        -1 !== C.indexOf("localhost") || -1 !== C.indexOf("127.0.0.1")
            ? `${C}/_cdn_storage/`
            : "https://cdn.discordapp.com/",
    R = O + "quests/";
var b =
    (((s = {}).COLLAPSED = "collapsed"),
    (s.EXPANDED = "expanded"),
    (s.CLOSED = "closed"),
    (s.SOFT_DISMISSED = "soft-dismissed"),
    (s.RESET_TO_PREVIOUS = "reset-to-previous"),
    s);
let D = "545364944258990091",
    L = "{reward_code}";
var w =
    (((a = {}).EXCLUDED_QUEST = "excluded_quest"),
    (a.UNKNOWN_QUEST = "unknown_quest"),
    (a.NOT_SHAREABLE_QUEST = "not_shareable_quest"),
    a);
let M = "1333839522189938740",
    P = "1410358070831480904",
    x = "1420556874629251124",
    k = "1402418703554842694",
    U = new Set([E.yW.DESKTOP_ACCOUNT_PANEL_AREA, E.yW.MOBILE_HOME_DOCK_AREA, E.yW.QUEST_HOME_BANNER_DESKTOP]),
    G = new Set([
        d.n.STREAM_ON_DESKTOP,
        d.n.PLAY_ON_DESKTOP,
        d.n.PLAY_ON_XBOX,
        d.n.PLAY_ON_PLAYSTATION,
        d.n.PLAY_ACTIVITY,
    ]),
    F = new Set([
        d.n.STREAM_ON_DESKTOP,
        d.n.PLAY_ON_DESKTOP,
        d.n.PLAY_ON_XBOX,
        d.n.PLAY_ON_PLAYSTATION,
        d.n.PLAY_ACTIVITY,
    ]),
    V = new Set([
        d.n.STREAM_ON_DESKTOP,
        d.n.PLAY_ON_DESKTOP,
        d.n.PLAY_ON_XBOX,
        d.n.PLAY_ON_PLAYSTATION,
        d.n.PLAY_ACTIVITY,
    ]),
    B = { is_targeted: !1 };
var H =
        (((o = {}).SUGGESTED = "suggested"),
        (o.MOST_RECENT = "most_recent"),
        (o.EXPIRING_SOON = "expiring_soon"),
        (o.RECENTLY_ENROLLED = "recently_enrolled"),
        o),
    j = (((l = {}).VIDEO = "task_video"), (l.PLAY = "task_play"), l),
    Y =
        (((u = {}).VIRTUAL_CURRENCY = "reward_virtual_currency"),
        (u.COLLECTIBLE = "reward_collectible"),
        (u.IN_GAME = "reward_in_game"),
        u);
function W(e) {
    return Object.values(j).includes(e)
        ? { group: "task", filter: e }
        : Object.values(Y).includes(e)
          ? { group: "reward", filter: e }
          : null;
}
let K = ["reward", "task"],
    $ = Object.entries(
        (0, c.groupBy)(
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
        let n = K.indexOf(e[0]),
            r = K.indexOf(t[0]);
        return n < r ? -1 : +(r < n);
    });
Object.entries(
    (0, c.groupBy)(
        [
            { group: "reward", filter: "reward_virtual_currency" },
            { group: "reward", filter: "reward_collectible" },
            { group: "reward", filter: "reward_in_game" },
        ],
        "group",
    ),
);
