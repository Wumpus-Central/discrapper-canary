"use strict";
n.d(t, {
    Yg: () => f,
    pY: () => _,
    gh: () => g,
    uF: () => u.u,
    X0: () => m,
    tb: () => E,
    xv: () => h,
    yW: () => c,
    vg: () => p,
});
var i,
    r,
    s,
    a,
    o,
    l,
    d,
    _ =
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
        r);
let E = new Set(Object.values(_).filter((e) => "number" == typeof e));
var h = (((s = {}).GENERIC = "generic"), (s.RATE_LIMITED = "rate_limited"), s),
    m = (((a = {}).DESKTOP = "desktop"), (a.CONSOLE = "console"), (a.SELECT = "select"), a),
    f =
        (((o = {}).PAUSE_BUTTON = "PAUSE_BUTTON"),
        (o.LOST_FOCUS = "LOST_FOCUS"),
        (o.MODAL_CLOSED = "MODAL_CLOSED"),
        (o.ANOTHER_MODAL_OPENED = "ANOTHER_MODAL_OPENED"),
        o),
    g = (((l = {}).QUEST_HOME_BANNER = "quest_home_banner"), l),
    p =
        (((d = {}).IOS = "ios"),
        (d.ANDROID = "android"),
        (d.DESKTOP = "desktop"),
        (d.WEB = "web"),
        (d.WEB_MOBILE = "web_mobile"),
        (d.WEB_TABLET = "web_tablet"),
        d);
