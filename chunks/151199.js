"use strict";
n.d(t, { y: () => l });
var i = n(914430),
    r = n(924985),
    s = n(808728),
    a = n(967198),
    o = n(652215);
let l = {
    binds: ["mod+shift+a"],
    comboKeysBindGlobal: !0,
    action() {
        let e = a.A.getGuildId();
        return (
            null != e &&
            (s.Ay.getChannels(e)[o.rbe.GUILD_CATEGORY].some((e) => {
                let { channel: t } = e;
                return "null" !== t.id && !r.A.isCollapsed(t.id);
            })
                ? (0, i.rZ)(e)
                : (0, i.Al)(e),
            !1)
        );
    },
};
