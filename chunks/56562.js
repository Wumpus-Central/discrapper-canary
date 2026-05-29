"use strict";
n.d(t, { US: () => a, YL: () => l, aI: () => o, gH: () => u }), n(873298);
var i,
    r,
    s,
    a = (((i = {}).ANIMATED = "ANIMATED"), (i.INSTANT = "INSTANT"), i),
    o =
        (((r = {})[(r.UNKNOWN = 0)] = "UNKNOWN"),
        (r[(r.WINDOWED = 1)] = "WINDOWED"),
        (r[(r.MAXIMIZED = 2)] = "MAXIMIZED"),
        (r[(r.BORDERLESS_FULLSCREEN = 3)] = "BORDERLESS_FULLSCREEN"),
        (r[(r.FULLSCREEN = 4)] = "FULLSCREEN"),
        (r[(r.MINIMIZED = 5)] = "MINIMIZED"),
        r),
    l =
        (((s = {})[(s.QUNS_UNKNOWN = -1)] = "QUNS_UNKNOWN"),
        (s[(s.QUNS_NOT_PRESENT = 1)] = "QUNS_NOT_PRESENT"),
        (s[(s.QUNS_BUSY = 2)] = "QUNS_BUSY"),
        (s[(s.QUNS_RUNNING_D3D_FULL_SCREEN = 3)] = "QUNS_RUNNING_D3D_FULL_SCREEN"),
        (s[(s.QUNS_PRESENTATION_MODE = 4)] = "QUNS_PRESENTATION_MODE"),
        (s[(s.QUNS_ACCEPTS_NOTIFICATIONS = 5)] = "QUNS_ACCEPTS_NOTIFICATIONS"),
        (s[(s.QUNS_QUIET_TIME = 6)] = "QUNS_QUIET_TIME"),
        (s[(s.QUNS_APP = 7)] = "QUNS_APP"),
        s);
let u = {
    compatibilityHook: !1,
    warn: !1,
    enabled: !1,
    enabledOOP: !1,
    allowHook: !0,
    supportsOutOfProcessOverlay: !1,
};
