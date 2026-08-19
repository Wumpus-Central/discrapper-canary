"use strict";
n.d(t, { Yg: () => A, p9: () => c, uF: () => d.u, tb: () => u, pY: () => o, xv: () => _, X0: () => E });
var i,
    r,
    a,
    s,
    l,
    o =
        (((i = {})[(i.CROSS_PLATFORM = 0)] = "CROSS_PLATFORM"),
        (i[(i.XBOX = 1)] = "XBOX"),
        (i[(i.PLAYSTATION = 2)] = "PLAYSTATION"),
        (i[(i.SWITCH = 3)] = "SWITCH"),
        (i[(i.PC = 4)] = "PC"),
        i),
    d = n(696292),
    c =
        (((r = {})[(r.INVALID_PLACEMENT = 0)] = "INVALID_PLACEMENT"),
        (r[(r.DESKTOP_ACCOUNT_PANEL_AREA = 1)] = "DESKTOP_ACCOUNT_PANEL_AREA"),
        (r[(r.MOBILE_HOME_DOCK_AREA = 2)] = "MOBILE_HOME_DOCK_AREA"),
        (r[(r.QUEST_HOME_BANNER_DESKTOP = 3)] = "QUEST_HOME_BANNER_DESKTOP"),
        (r[(r.QUEST_HOME_MOBILE_CAROUSEL = 4)] = "QUEST_HOME_MOBILE_CAROUSEL"),
        (r[(r.VIDEO_MODAL_MOBILE = 5)] = "VIDEO_MODAL_MOBILE"),
        r);
let u = new Set(Object.values(o).filter((e) => "number" == typeof e));
var _ = (((a = {}).GENERIC = "generic"), (a.RATE_LIMITED = "rate_limited"), a),
    E = (((s = {}).DESKTOP = "desktop"), (s.CONSOLE = "console"), (s.SELECT = "select"), s),
    A =
        (((l = {}).PAUSE_BUTTON = "PAUSE_BUTTON"),
        (l.LOST_FOCUS = "LOST_FOCUS"),
        (l.MODAL_CLOSED = "MODAL_CLOSED"),
        (l.ANOTHER_MODAL_OPENED = "ANOTHER_MODAL_OPENED"),
        (l.PICTURE_IN_PICTURE = "PICTURE_IN_PICTURE"),
        l);
