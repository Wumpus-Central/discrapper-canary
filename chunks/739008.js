"use strict";
n.d(t, { P: () => u });
var i = n(493336),
    r = n(567035),
    a = n(458294),
    s = n(232835),
    l = n(309010),
    o = n(967198),
    d = n(625494),
    c = n(652215);
let u = {
    binds: ["shift+esc"],
    comboKeysBindGlobal: !0,
    action() {
        let e = o.A.getGuildId();
        if (null == e || !a.default.getGuildHasUnreadIgnoreMuted(e)) return;
        (0, r.A)([e]);
        let t = l.Ay.getChannelId(e);
        null == t ||
            (s.A.getMessages(t).hasMoreAfter ? i.A.jumpToPresent(t, c.EMb) : d._.dispatch(c.jej.SCROLLTO_PRESENT));
    },
};
