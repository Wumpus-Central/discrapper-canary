n.d(t, { N9: () => c, ci: () => u, iN: () => d });
var i = n(284009),
    r = n.n(i),
    a = n(308528),
    s = n(367513),
    _ = n(584682),
    l = n(734057),
    o = n(976860),
    E = n(652215);
function d(e, t) {
    let n = l.A.getChannel(e);
    if (null == n) return;
    let i = (0, _.j)(n);
    a.A.preload(n.guild_id, n.id),
        (0, o.pX)(E.BVt.CHANNEL(i, n.id), { openChannel: !0, ...t }),
        t?.openTextInVoiceIfVoiceChannel && n.isGuildVocal() && s.A.updateChatOpen(n.id, !0);
}
function c(e, t) {
    r()(null != e.parent_id, "Thread must have a parent ID.");
    let n = (0, _.j)(e);
    (0, o.pX)(E.BVt.CHANNEL(n, e.id), { openChannel: !0, ...t });
}
function u(e, t, n) {
    let i = l.A.getChannel(e);
    if (null == i) return;
    let r = (0, _.j)(i);
    (0, o.pX)(E.BVt.CHANNEL(r, i.id, t), { openChannel: !0, ...n });
}
