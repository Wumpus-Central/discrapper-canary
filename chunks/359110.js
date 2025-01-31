n.d(t, {
    Kh: () => d,
    ad: () => f
});
var i = n(512722),
    r = n.n(i),
    a = n(493683),
    s = n(475179),
    o = n(727429),
    l = n(592125),
    u = n(703656),
    c = n(981631);
function d(e, t) {
    let n = l.Z.getChannel(e);
    if (null == n) return;
    let i = (0, o.e)(n);
    a.Z.preload(n.guild_id, n.id),
        (0, u.uL)(c.Z5c.CHANNEL(i, n.id), {
            openChannel: !0,
            ...t
        }),
        (null == t ? void 0 : t.openTextInVoiceIfVoiceChannel) && n.isGuildVocal() && s.Z.updateChatOpen(n.id, !0);
}
function f(e, t) {
    r()(null != e.parent_id, 'Thread must have a parent ID.');
    let n = (0, o.e)(e);
    (0, u.uL)(c.Z5c.CHANNEL(n, e.id), {
        openChannel: !0,
        ...t
    });
}
