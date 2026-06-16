"use strict";
n.d(t, { Gk: () => l, Kn: () => o, QY: () => s, Uu: () => u, Zq: () => a });
var i = n(136722),
    r = n(652215);
let s = i.kg(r.xBc.MANAGE_CHANNELS, r.xBc.MUTE_MEMBERS, r.xBc.MOVE_MEMBERS);
i.kg(r.xBc.MANAGE_CHANNELS, r.xBc.MANAGE_ROLES);
let a = new Set([r.xBc.SPEAK, r.xBc.REQUEST_TO_SPEAK, r.xBc.USE_VAD]),
    o = i.kg(s, r.xBc.MANAGE_ROLES),
    l = i.kg(r.xBc.CONNECT, r.xBc.VIEW_CHANNEL),
    u = i.kg(l, r.xBc.READ_MESSAGE_HISTORY, r.xBc.REQUEST_TO_SPEAK, r.xBc.SPEAK, r.xBc.USE_VAD);
