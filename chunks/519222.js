n.d(t, {
    $b: () => R,
    DT: () => x,
    Io: () => O,
    Le: () => T,
    Nw: () => N,
    RC: () => j,
    S: () => D,
    Z4: () => w,
    cl: () => v,
    mF: () => G,
    r7: () => P,
    rS: () => M,
    u_: () => C,
    vc: () => I,
    wF: () => L,
}),
    n(64700);
var i = n(687709),
    l = n(720149),
    a = n(419056),
    r = n(294454),
    s = n(997509);
n(928658);
var o = n(118517),
    c = n(164684),
    d = n(747926),
    u = n(495544),
    g = n(734057),
    A = n(954571),
    m = n(147036),
    p = n(957565),
    f = n(625494),
    E = n(935208),
    y = n(965407),
    h = n(439147),
    _ = n(249700),
    S = n(145530),
    b = n(652215);
function I(e) {
    let t = e.getGuildId();
    null != t && s.A.open(t, b.BEX.ENGAGEMENT);
}
function x(e, t, n) {
    (0, p.C)(n.shiftKey ? `${t.channel_id}-${t.id}` : t.id);
}
function D(e, t) {
    A.default.track(b.HAw.MESSAGE_LINK_COPIED, { message_id: t.id, channel: t.channel_id }),
        (0, p.C)((0, m.n)(e.guild_id, e.id, t.id));
}
function j(e, t, n) {
    t.state === b.cmJ.SEND_FAILED || n.shiftKey
        ? l.A.deleteMessage(e.id, t.id, t.state === b.cmJ.SEND_FAILED)
        : S.A.confirmDelete(e, t);
}
function C(e, t) {
    l.A.startEditMessageRecord(e.id, t);
}
function v(e, t) {
    (0, h.A)(e.id, t.id);
}
function M(e, t, n) {
    !1 === t.pinned
        ? n.shiftKey
            ? i.A.pinMessage(e, t.id)
            : S.A.confirmPin(e, t)
        : n.shiftKey
          ? i.A.unpinMessage(e, t.id)
          : S.A.confirmUnpin(e, t);
}
function T(e, t) {
    (0, a.A)(e.id, t.id);
}
function O(e, t) {
    (0, _.A)(e, t, void 0, y.A.getOptions(t.id));
}
function R(e, t, n) {
    let i = e.isPrivate(),
        l = t.author.id === u.default.getId();
    (0, o.Yf)({ channel: e, message: t, shouldMention: !n.shiftKey && !l, showMentionToggle: !i && !l }),
        f._.dispatch(b.jej.FOCUS_CHANNEL_TEXT_AREA, { channelId: e.id });
}
function N(e, t) {
    (0, d.Tv)(e, t, "Message");
}
function G(e, t) {
    let n = g.A.getChannel(E.default.castMessageIdAsChannelId(t.id));
    null != n && (0, d.JA)(n);
}
function L(e, t) {
    (0, c.Y)({ channelId: e.id, messageId: t.id });
}
function P(e, t) {
    (0, c.x)({ channelId: e.id, messageId: t.id });
}
function w(e, t) {
    (0, r.fO)({ message: t, source: "message-actions" });
}
