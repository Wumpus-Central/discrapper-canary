n.d(t, {
    $b: () => M,
    DT: () => N,
    Io: () => L,
    Le: () => R,
    Nw: () => k,
    RC: () => T,
    S: () => j,
    Z4: () => U,
    cl: () => y,
    mF: () => O,
    r7: () => D,
    rS: () => b,
    u_: () => S,
    vc: () => v,
    wF: () => P,
}),
    n(582128);
var i = n(687709),
    l = n(148494),
    s = n(419056),
    a = n(294454),
    r = n(468689);
n(928658);
var o = n(118517),
    c = n(164684),
    d = n(747926),
    u = n(280450),
    m = n(734057),
    h = n(174459),
    g = n(871237),
    p = n(957565),
    A = n(625494),
    x = n(935208),
    f = n(965407),
    E = n(439147),
    C = n(249700),
    _ = n(145530),
    I = n(652215);
function v(e) {
    let t = e.getGuildId();
    null != t && r.A.open(t, I.BEX.ENGAGEMENT);
}
function N(e, t, n) {
    (0, p.C)(n.shiftKey ? `${t.channel_id}-${t.id}` : t.id);
}
function j(e, t) {
    h.default.track(I.HAw.MESSAGE_LINK_COPIED, { message_id: t.id, channel: t.channel_id }),
        (0, p.C)((0, g.n)(e.guild_id, e.id, t.id));
}
function T(e, t, n) {
    t.state === I.cmJ.SEND_FAILED || n.shiftKey
        ? l.A.deleteMessage(e.id, t.id, t.state === I.cmJ.SEND_FAILED)
        : _.A.confirmDelete(e, t);
}
function S(e, t) {
    l.A.startEditMessageRecord(e.id, t);
}
function y(e, t) {
    (0, E.A)(e.id, t.id);
}
function b(e, t, n) {
    !1 === t.pinned
        ? n.shiftKey
            ? i.A.pinMessage(e, t.id)
            : _.A.confirmPin(e, t)
        : n.shiftKey
          ? i.A.unpinMessage(e, t.id)
          : _.A.confirmUnpin(e, t);
}
function R(e, t) {
    (0, s.A)(e.id, t.id);
}
function L(e, t) {
    (0, C.A)(e, t, void 0, f.A.getOptions(t.id));
}
function M(e, t, n) {
    let i = e.isPrivate(),
        l = t.author.id === u.default.getId();
    (0, o.Yf)({ channel: e, message: t, shouldMention: !n.shiftKey && !l, showMentionToggle: !i && !l }),
        A._.dispatch(I.jej.FOCUS_CHANNEL_TEXT_AREA, { channelId: e.id });
}
function k(e, t) {
    (0, d.Tv)(e, t, "Message");
}
function O(e, t) {
    let n = m.A.getChannel(x.default.castMessageIdAsChannelId(t.id));
    null != n && (0, d.JA)(n);
}
function P(e, t) {
    (0, c.Y)({ channelId: e.id, messageId: t.id, displayToast: !0 });
}
function D(e, t) {
    (0, c.x)({ channelId: e.id, messageId: t.id, displayToast: !0 });
}
function U(e, t) {
    (0, a.fO)({ message: t, source: "message-actions" });
}
