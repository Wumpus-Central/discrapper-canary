(t.d(n, {
    $b: () => v,
    DT: () => x,
    Io: () => T,
    Le: () => G,
    Nw: () => L,
    RC: () => j,
    S: () => b,
    Z4: () => N,
    cl: () => D,
    mF: () => O,
    rS: () => C,
    u_: () => M,
    vc: () => I,
}),
    t(582128));
var i = t(687709),
    l = t(148494),
    a = t(419056),
    r = t(294454),
    s = t(468689);
t(928658);
var o = t(118517),
    c = t(747926),
    d = t(280450),
    u = t(734057),
    g = t(174459),
    A = t(147036),
    m = t(957565),
    f = t(625494),
    p = t(935208),
    y = t(965407),
    h = t(439147),
    E = t(249700),
    _ = t(145530),
    S = t(652215);
function I(e) {
    let n = e.getGuildId();
    null != n && s.default.open(n, S.BEX.ENGAGEMENT);
}
function x(e, n, t) {
    (0, m.C)(t.shiftKey ? `${n.channel_id}-${n.id}` : n.id);
}
function b(e, n) {
    (g.default.track(S.HAw.MESSAGE_LINK_COPIED, { message_id: n.id, channel: n.channel_id }),
        (0, m.C)((0, A.n)(e.guild_id, e.id, n.id)));
}
function j(e, n, t) {
    n.state === S.cmJ.SEND_FAILED || t.shiftKey
        ? l.A.deleteMessage(e.id, n.id, n.state === S.cmJ.SEND_FAILED)
        : _.A.confirmDelete(e, n);
}
function M(e, n) {
    l.A.startEditMessageRecord(e.id, n);
}
function D(e, n) {
    (0, h.A)(e.id, n.id);
}
function C(e, n, t) {
    !1 === n.pinned
        ? t.shiftKey
            ? i.A.pinMessage(e, n.id)
            : _.A.confirmPin(e, n)
        : t.shiftKey
          ? i.A.unpinMessage(e, n.id)
          : _.A.confirmUnpin(e, n);
}
function G(e, n) {
    (0, a.A)(e.id, n.id);
}
function T(e, n) {
    (0, E.A)(e, n, void 0, y.A.getOptions(n.id));
}
function v(e, n, t) {
    let i = e.isPrivate(),
        l = n.author.id === d.default.getId();
    ((0, o.Yf)({ channel: e, message: n, shouldMention: !t.shiftKey && !l, showMentionToggle: !i && !l }),
        f._.dispatch(S.jej.FOCUS_CHANNEL_TEXT_AREA, { channelId: e.id }));
}
function L(e, n) {
    (0, c.Tv)(e, n, "Message");
}
function O(e, n) {
    let t = u.A.getChannel(p.default.castMessageIdAsChannelId(n.id));
    null != t && (0, c.JA)(t);
}
function N(e, n) {
    (0, r.fO)({ message: n, source: "message-actions" });
}
