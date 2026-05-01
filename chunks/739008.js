"use strict";
n.d(t, { P: () => d });
var i = n(720149),
    r = n(567035),
    s = n(458294),
    a = n(232835),
    o = n(309010),
    l = n(967198),
    u = n(625494),
    c = n(652215);
let d = {
    binds: ["shift+esc"],
    comboKeysBindGlobal: !0,
    action() {
        let e = l.A.getGuildId();
        if (null == e || !s.default.getGuildHasUnreadIgnoreMuted(e)) return;
        (0, r.A)([e]);
        let t = o.A.getChannelId(e);
        null == t ||
            (a.A.getMessages(t).hasMoreAfter ? i.A.jumpToPresent(t, c.EMb) : u._.dispatch(c.jej.SCROLLTO_PRESENT));
    },
};
