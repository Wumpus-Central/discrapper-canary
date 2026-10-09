(n.d(t, {
    $b: () => C,
    DT: () => S,
    Io: () => v,
    Le: () => T,
    Nw: () => L,
    RC: () => j,
    S: () => b,
    Z4: () => N,
    cl: () => D,
    mF: () => O,
    rS: () => G,
    u_: () => M,
    vc: () => I,
}),
    n(582128));
var i = n(687709),
    l = n(148494),
    a = n(419056),
    s = n(294454),
    r = n(468689);
n(928658);
var o = n(118517),
    c = n(747926),
    d = n(280450),
    u = n(734057),
    g = n(174459),
    A = n(147036),
    m = n(957565),
    f = n(625494),
    p = n(935208),
    y = n(965407),
    h = n(439147),
    E = n(249700),
    _ = n(145530),
    x = n(652215);
function I(e) {
    let t = e.getGuildId();
    null != t && r.default.open(t, x.BEX.ENGAGEMENT);
}
function S(e, t, n) {
    (0, m.C)(n.shiftKey ? `${t.channel_id}-${t.id}` : t.id);
}
function b(e, t) {
    (g.default.track(x.HAw.MESSAGE_LINK_COPIED, { message_id: t.id, channel: t.channel_id }),
        (0, m.C)((0, A.n)(e.guild_id, e.id, t.id)));
}
function j(e, t, n) {
    t.state === x.cmJ.SEND_FAILED || n.shiftKey
        ? l.A.deleteMessage(e.id, t.id, t.state === x.cmJ.SEND_FAILED)
        : _.A.confirmDelete(e, t);
}
function M(e, t) {
    l.A.startEditMessageRecord(e.id, t);
}
function D(e, t) {
    (0, h.A)(e.id, t.id);
}
function G(e, t, n) {
    !1 === t.pinned
        ? n.shiftKey
            ? i.A.pinMessage(e, t.id)
            : _.A.confirmPin(e, t)
        : n.shiftKey
          ? i.A.unpinMessage(e, t.id)
          : _.A.confirmUnpin(e, t);
}
function T(e, t) {
    (0, a.A)(e.id, t.id);
}
function v(e, t) {
    (0, E.A)(e, t, void 0, y.A.getOptions(t.id));
}
function C(e, t, n) {
    let i = e.isPrivate(),
        l = t.author.id === d.default.getId();
    ((0, o.Yf)({ channel: e, message: t, shouldMention: !n.shiftKey && !l, showMentionToggle: !i && !l }),
        f._.dispatch(x.jej.FOCUS_CHANNEL_TEXT_AREA, { channelId: e.id }));
}
function L(e, t) {
    (0, c.Tv)(e, t, "Message");
}
function O(e, t) {
    let n = u.A.getChannel(p.default.castMessageIdAsChannelId(t.id));
    null != n && (0, c.JA)(n);
}
function N(e, t) {
    (0, s.fO)({ message: t, source: "message-actions" });
}
