n.d(t, { N9: () => _, ci: () => E, iN: () => u, vn: () => A });
var i = n(284009),
    r = n.n(i),
    a = n(367513),
    s = n(377480),
    l = n(734057),
    o = n(976860),
    d = n(162199),
    c = n(652215);
function u(e, t) {
    let n = l.A.getChannel(e);
    if (null == n) return;
    let i = (0, d.j)(n);
    ((0, s.A)(n.guild_id, n.id),
        (0, o.pX)(c.BVt.CHANNEL(i, n.id), { openChannel: !0, ...t }),
        t?.openTextInVoiceIfVoiceChannel && n.isGuildVocal() && a.A.updateChatOpen(n.id, !0));
}
function _(e, t) {
    r()(null != e.parent_id, "Thread must have a parent ID.");
    let n = (0, d.j)(e);
    (0, o.pX)(c.BVt.CHANNEL(n, e.id), { openChannel: !0, ...t });
}
function E(e, t, n) {
    let i = l.A.getChannel(e);
    if (null == i) return;
    let r = (0, d.j)(i);
    (0, o.pX)(c.BVt.CHANNEL(r, i.id, t), { openChannel: !0, ...n });
}
function A(e, t, n) {
    (0, o.pX)(c.BVt.CHANNEL(e, t), { openChannel: !0, ...n });
}
