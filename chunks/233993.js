n.d(t, { Gk: () => o, Kn: () => l, QY: () => r, Uu: () => d, Zq: () => s });
var i = n(136722),
    a = n(652215);
let r = i.kg(a.xBc.MANAGE_CHANNELS, a.xBc.MUTE_MEMBERS, a.xBc.MOVE_MEMBERS);
i.kg(a.xBc.MANAGE_CHANNELS, a.xBc.MANAGE_ROLES);
let s = new Set([a.xBc.SPEAK, a.xBc.REQUEST_TO_SPEAK, a.xBc.USE_VAD]),
    l = i.kg(r, a.xBc.MANAGE_ROLES),
    o = i.kg(a.xBc.CONNECT, a.xBc.VIEW_CHANNEL),
    d = i.kg(o, a.xBc.READ_MESSAGE_HISTORY, a.xBc.REQUEST_TO_SPEAK, a.xBc.SPEAK, a.xBc.USE_VAD);
