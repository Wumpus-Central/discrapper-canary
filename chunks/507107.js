"use strict";
n.d(t, { Yg: () => f, uF: () => u.u, X0: () => h, tb: () => d, pY: () => l, xv: () => _, yW: () => c });
var i,
    r,
    s,
    a,
    o,
    l =
        (((i = {})[(i.CROSS_PLATFORM = 0)] = "CROSS_PLATFORM"),
        (i[(i.XBOX = 1)] = "XBOX"),
        (i[(i.PLAYSTATION = 2)] = "PLAYSTATION"),
        (i[(i.SWITCH = 3)] = "SWITCH"),
        (i[(i.PC = 4)] = "PC"),
        i),
    u = n(696292),
    c =
        (((r = {})[(r.INVALID_PLACEMENT = 0)] = "INVALID_PLACEMENT"),
        (r[(r.DESKTOP_ACCOUNT_PANEL_AREA = 1)] = "DESKTOP_ACCOUNT_PANEL_AREA"),
        (r[(r.MOBILE_HOME_DOCK_AREA = 2)] = "MOBILE_HOME_DOCK_AREA"),
        (r[(r.QUEST_HOME_BANNER_DESKTOP = 3)] = "QUEST_HOME_BANNER_DESKTOP"),
        (r[(r.QUEST_HOME_MOBILE_CAROUSEL = 4)] = "QUEST_HOME_MOBILE_CAROUSEL"),
        (r[(r.VIDEO_MODAL_MOBILE = 5)] = "VIDEO_MODAL_MOBILE"),
        r);
let d = new Set(Object.values(l).filter((e) => "number" == typeof e));
var _ = (((s = {}).GENERIC = "generic"), (s.RATE_LIMITED = "rate_limited"), s),
    h = (((a = {}).DESKTOP = "desktop"), (a.CONSOLE = "console"), (a.SELECT = "select"), a),
    f =
        (((o = {}).PAUSE_BUTTON = "PAUSE_BUTTON"),
        (o.LOST_FOCUS = "LOST_FOCUS"),
        (o.MODAL_CLOSED = "MODAL_CLOSED"),
        (o.ANOTHER_MODAL_OPENED = "ANOTHER_MODAL_OPENED"),
        (o.PICTURE_IN_PICTURE = "PICTURE_IN_PICTURE"),
        o);
