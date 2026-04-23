n.d(t, {
    $b: () => O,
    DT: () => x,
    Io: () => N,
    Le: () => j,
    Nw: () => R,
    RC: () => T,
    S: () => b,
    Z4: () => P,
    cl: () => C,
    mF: () => L,
    r7: () => G,
    rS: () => D,
    u_: () => M,
    vc: () => I,
    wF: () => w,
}),
    n(627968),
    n(64700);
var i = n(687709),
    l = n(843472),
    a = n(419056),
    r = n(294454),
    s = n(997509);
n(928658);
var o = n(118517),
    d = n(164684),
    c = n(747926),
    u = n(961350),
    g = n(734057),
    A = n(954571),
    h = n(147036),
    m = n(957565),
    f = n(203982),
    p = n(661191),
    E = n(965407),
    y = n(439147),
    v = n(249700),
    _ = n(145530),
    S = n(652215);
function I(e) {
    let t = e.getGuildId();
    null != t && s.A.open(t, S.BEX.ENGAGEMENT);
}
function x(e, t, n) {
    (0, m.C)(n.shiftKey ? `${t.channel_id}-${t.id}` : t.id);
}
function b(e, t) {
    A.default.track(S.HAw.MESSAGE_LINK_COPIED, { message_id: t.id, channel: t.channel_id }),
        (0, m.C)((0, h.n)(e.guild_id, e.id, t.id));
}
function T(e, t, n) {
    t.state === S.cmJ.SEND_FAILED || n.shiftKey
        ? l.A.deleteMessage(e.id, t.id, t.state === S.cmJ.SEND_FAILED)
        : _.A.confirmDelete(e, t);
}
function M(e, t) {
    l.A.startEditMessageRecord(e.id, t);
}
function C(e, t) {
    (0, y.A)(e.id, t.id);
}
function D(e, t, n) {
    !1 === t.pinned
        ? n.shiftKey
            ? i.A.pinMessage(e, t.id)
            : _.A.confirmPin(e, t)
        : n.shiftKey
          ? i.A.unpinMessage(e, t.id)
          : _.A.confirmUnpin(e, t);
}
function j(e, t) {
    (0, a.A)(e.id, t.id);
}
function N(e, t) {
    (0, v.A)(e, t, void 0, E.A.getOptions(t.id));
}
function O(e, t, n) {
    let i = e.isPrivate(),
        l = t.author.id === u.default.getId();
    (0, o.Yf)({ channel: e, message: t, shouldMention: !n.shiftKey && !l, showMentionToggle: !i && !l }),
        f._.dispatch(S.jej.FOCUS_CHANNEL_TEXT_AREA, { channelId: e.id });
}
function R(e, t) {
    (0, c.Tv)(e, t, "Message");
}
function L(e, t) {
    let n = g.A.getChannel(p.default.castMessageIdAsChannelId(t.id));
    null != n && (0, c.JA)(n);
}
function w(e, t) {
    (0, d.Y)({ channelId: e.id, messageId: t.id });
}
function G(e, t) {
    (0, d.x)({ channelId: e.id, messageId: t.id });
}
function P(e, t) {
    (0, r.fO)({ message: t, source: "message-actions" });
}
