"use strict";
n.d(t, { F5: () => _, Se: () => u, W8: () => d, s4: () => l, wg: () => c, yK: () => o });
var i,
    r,
    a,
    s,
    l = (((i = {}).NONE = "NONE"), (i.TEXT = "TEXT"), (i.VOICE = "VOICE"), i);
let o = {
        SEARCH: "search",
        RECENT: "recent",
        INSTALLED: "installed",
        ACTIVITIES: "activities",
        RECENT_APPS: "recent_apps",
        RECENT_COMMANDS: "recent_commands",
        NEW_TO_APPS: "new_to_apps",
        APPS_IN_THIS_SERVER: "apps_in_this_server",
    },
    d = { HOME: "home", APP_DETAIL: "app_detail" };
var c =
        (((r = {}).HOME_EMPTY = "home_empty"),
        (r.SEARCH_EMPTY = "search_empty"),
        (r.HOME_NO_PERMISSIONS = "home_no_permissions"),
        (r.COMMAND_NO_PERMISSIONS = "command_no_permissions"),
        (r.COMMAND_NOT_FOUND = "command_not_found"),
        r),
    u =
        (((a = {})[(a.DISMISSED = 0)] = "DISMISSED"),
        (a[(a.COMMAND = 1)] = "COMMAND"),
        (a[(a.ACTIVITY = 2)] = "ACTIVITY"),
        a),
    _ = (((s = {}).OPEN_APP_DM = "open_app_dm"), (s.USE_APP_COMMAND = "use_app_command"), s);
