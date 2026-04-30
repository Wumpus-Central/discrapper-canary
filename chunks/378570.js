"use strict";
n.d(t, { N9: () => _, ci: () => f, iN: () => d });
var i = n(284009),
    r = n.n(i),
    s = n(308528),
    a = n(367513),
    o = n(584682),
    l = n(734057),
    u = n(976860),
    c = n(652215);
function d(e, t) {
    let n = l.A.getChannel(e);
    if (null == n) return;
    let i = (0, o.j)(n);
    s.A.preload(n.guild_id, n.id),
        (0, u.pX)(c.BVt.CHANNEL(i, n.id), { openChannel: !0, ...t }),
        t?.openTextInVoiceIfVoiceChannel && n.isGuildVocal() && a.A.updateChatOpen(n.id, !0);
}
function _(e, t) {
    r()(null != e.parent_id, "Thread must have a parent ID.");
    let n = (0, o.j)(e);
    (0, u.pX)(c.BVt.CHANNEL(n, e.id), { openChannel: !0, ...t });
}
function f(e, t, n) {
    let i = l.A.getChannel(e);
    if (null == i) return;
    let r = (0, o.j)(i);
    (0, u.pX)(c.BVt.CHANNEL(r, i.id, t), { openChannel: !0, ...n });
}
