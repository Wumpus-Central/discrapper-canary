n.d(t, { N9: () => E, ci: () => u, iN: () => _ });
var i = n(284009),
    a = n.n(i),
    r = n(308528),
    s = n(367513),
    l = n(584682),
    o = n(734057),
    d = n(976860),
    c = n(652215);
function _(e, t) {
    let n = o.A.getChannel(e);
    if (null == n) return;
    let i = (0, l.j)(n);
    r.A.preload(n.guild_id, n.id),
        (0, d.pX)(c.BVt.CHANNEL(i, n.id), { openChannel: !0, ...t }),
        t?.openTextInVoiceIfVoiceChannel && n.isGuildVocal() && s.A.updateChatOpen(n.id, !0);
}
function E(e, t) {
    a()(null != e.parent_id, "Thread must have a parent ID.");
    let n = (0, l.j)(e);
    (0, d.pX)(c.BVt.CHANNEL(n, e.id), { openChannel: !0, ...t });
}
function u(e, t, n) {
    let i = o.A.getChannel(e);
    if (null == i) return;
    let a = (0, l.j)(i);
    (0, d.pX)(c.BVt.CHANNEL(a, i.id, t), { openChannel: !0, ...n });
}
