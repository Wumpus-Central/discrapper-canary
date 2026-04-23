"use strict";
n.d(t, { Gk: () => l, Kn: () => o, QY: () => s, Uu: () => u, Zq: () => a });
var r = n(136722),
    i = n(652215);
let s = r.kg(i.xBc.MANAGE_CHANNELS, i.xBc.MUTE_MEMBERS, i.xBc.MOVE_MEMBERS);
r.kg(i.xBc.MANAGE_CHANNELS, i.xBc.MANAGE_ROLES);
let a = new Set([i.xBc.SPEAK, i.xBc.REQUEST_TO_SPEAK, i.xBc.USE_VAD]),
    o = r.kg(s, i.xBc.MANAGE_ROLES),
    l = r.kg(i.xBc.CONNECT, i.xBc.VIEW_CHANNEL),
    u = r.kg(l, i.xBc.READ_MESSAGE_HISTORY, i.xBc.REQUEST_TO_SPEAK, i.xBc.SPEAK, i.xBc.USE_VAD);
