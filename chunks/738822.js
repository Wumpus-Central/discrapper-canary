"use strict";
n.d(t, { Yg: () => E, p9: () => d.p, uF: () => o.u, tb: () => c, pY: () => l, xv: () => u, X0: () => _ });
var i,
    r,
    a,
    s,
    l =
        (((i = {})[(i.CROSS_PLATFORM = 0)] = "CROSS_PLATFORM"),
        (i[(i.XBOX = 1)] = "XBOX"),
        (i[(i.PLAYSTATION = 2)] = "PLAYSTATION"),
        (i[(i.SWITCH = 3)] = "SWITCH"),
        (i[(i.PC = 4)] = "PC"),
        i),
    o = n(696292),
    d = n(252313);
let c = new Set(Object.values(l).filter((e) => "number" == typeof e));
var u = (((r = {}).GENERIC = "generic"), (r.RATE_LIMITED = "rate_limited"), r),
    _ = (((a = {}).DESKTOP = "desktop"), (a.CONSOLE = "console"), (a.SELECT = "select"), a),
    E =
        (((s = {}).PAUSE_BUTTON = "PAUSE_BUTTON"),
        (s.LOST_FOCUS = "LOST_FOCUS"),
        (s.MODAL_CLOSED = "MODAL_CLOSED"),
        (s.ANOTHER_MODAL_OPENED = "ANOTHER_MODAL_OPENED"),
        (s.PICTURE_IN_PICTURE = "PICTURE_IN_PICTURE"),
        s);
