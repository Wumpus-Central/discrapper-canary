"use strict";
n.d(t, { F5: () => _, Se: () => c, W8: () => u, s4: () => o, wg: () => d, yK: () => l });
var r,
    i,
    s,
    a,
    o = (((r = {}).NONE = "NONE"), (r.TEXT = "TEXT"), (r.VOICE = "VOICE"), r);
let l = {
        SEARCH: "search",
        RECENT: "recent",
        INSTALLED: "installed",
        ACTIVITIES: "activities",
        RECENT_APPS: "recent_apps",
        RECENT_COMMANDS: "recent_commands",
        NEW_TO_APPS: "new_to_apps",
        APPS_IN_THIS_SERVER: "apps_in_this_server",
    },
    u = { HOME: "home", APP_DETAIL: "app_detail" };
var d =
        (((i = {}).HOME_EMPTY = "home_empty"),
        (i.SEARCH_EMPTY = "search_empty"),
        (i.HOME_NO_PERMISSIONS = "home_no_permissions"),
        (i.COMMAND_NO_PERMISSIONS = "command_no_permissions"),
        (i.COMMAND_NOT_FOUND = "command_not_found"),
        i),
    c =
        (((s = {})[(s.DISMISSED = 0)] = "DISMISSED"),
        (s[(s.COMMAND = 1)] = "COMMAND"),
        (s[(s.ACTIVITY = 2)] = "ACTIVITY"),
        s),
    _ = (((a = {}).OPEN_APP_DM = "open_app_dm"), (a.USE_APP_COMMAND = "use_app_command"), a);
