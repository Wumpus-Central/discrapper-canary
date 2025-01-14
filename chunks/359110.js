r.d(n, {
    Kh: function () {
        return f;
    },
    ad: function () {
        return _;
    }
});
var i = r(512722),
    a = r.n(i),
    s = r(493683),
    o = r(475179),
    l = r(727429),
    u = r(592125),
    c = r(703656),
    d = r(981631);
function f(e, n) {
    let r = u.Z.getChannel(e);
    if (null == r) return;
    let i = (0, l.e)(r);
    s.Z.preload(r.guild_id, r.id),
        (0, c.uL)(d.Z5c.CHANNEL(i, r.id), {
            openChannel: !0,
            ...n
        }),
        (null == n ? void 0 : n.openTextInVoiceIfVoiceChannel) && r.isGuildVocal() && o.Z.updateChatOpen(r.id, !0);
}
function _(e, n) {
    a()(null != e.parent_id, 'Thread must have a parent ID.');
    let r = (0, l.e)(e);
    (0, c.uL)(d.Z5c.CHANNEL(r, e.id), {
        openChannel: !0,
        ...n
    });
}
function h(e, n, r) {
    invariant(null != e.parent_id, 'Thread must have a parent ID.');
    let i = getGuildIdForGenericRedirect(e);
    transitionTo(Routes.CHANNEL(i, e.id, n), {
        openChannel: !0,
        ...r
    });
}
