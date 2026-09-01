"use strict";
n.d(t, { G2: () => o, Qr: () => l, yZ: () => s });
var i = n(136722),
    r = n(652215);
let a = [
        r.xBc.VIEW_CHANNEL,
        r.xBc.SEND_MESSAGES,
        r.xBc.EMBED_LINKS,
        r.xBc.ATTACH_FILES,
        r.xBc.READ_MESSAGE_HISTORY,
        r.xBc.ADD_REACTIONS,
        r.xBc.USE_EXTERNAL_EMOJIS,
    ],
    s = i.kg(...a),
    l = [r.xBc.MANAGE_CHANNELS, r.xBc.MANAGE_ROLES, ...a],
    o = i.kg(...l);
