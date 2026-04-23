n.d(t, { Gk: () => l, Kn: () => _, QY: () => a, Uu: () => o, Zq: () => s });
var i = n(136722),
    r = n(652215);
let a = i.kg(r.xBc.MANAGE_CHANNELS, r.xBc.MUTE_MEMBERS, r.xBc.MOVE_MEMBERS);
i.kg(r.xBc.MANAGE_CHANNELS, r.xBc.MANAGE_ROLES);
let s = new Set([r.xBc.SPEAK, r.xBc.REQUEST_TO_SPEAK, r.xBc.USE_VAD]),
    _ = i.kg(a, r.xBc.MANAGE_ROLES),
    l = i.kg(r.xBc.CONNECT, r.xBc.VIEW_CHANNEL),
    o = i.kg(l, r.xBc.READ_MESSAGE_HISTORY, r.xBc.REQUEST_TO_SPEAK, r.xBc.SPEAK, r.xBc.USE_VAD);
