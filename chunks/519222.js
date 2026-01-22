n.d(t, {
    $b: () => M,
    DT: () => S,
    Io: () => x,
    Le: () => w,
    Nw: () => C,
    RC: () => D,
    S: () => _,
    Z4: () => L,
    cl: () => P,
    mF: () => N,
    r7: () => G,
    rS: () => T,
    u_: () => I,
    vc: () => E,
    wF: () => R,
}),
    n(627968),
    n(64700),
    n(397927);
var r = n(687709),
    l = n(843472),
    i = n(419056),
    o = n(294454),
    a = n(997509);
n(928658);
var c = n(118517),
    s = n(164684),
    d = n(747926),
    u = n(961350),
    f = n(734057),
    g = n(954571),
    p = n(147036),
    b = n(957565),
    m = n(203982),
    y = n(661191),
    O = n(965407),
    A = n(439147),
    v = n(249700),
    j = n(145530),
    h = n(652215);
function E(e) {
    let t = e.getGuildId();
    null != t && a.A.open(t, h.BEX.ENGAGEMENT);
}
function S(e, t, n) {
    (0, b.C)(n.shiftKey ? "".concat(t.channel_id, "-").concat(t.id) : t.id);
}
function _(e, t) {
    g.default.track(h.HAw.MESSAGE_LINK_COPIED, {
        message_id: t.id,
        channel: t.channel_id,
    }),
        (0, b.C)((0, p.n)(e.guild_id, e.id, t.id));
}
function D(e, t, n) {
    t.state === h.cmJ.SEND_FAILED || n.shiftKey
        ? l.A.deleteMessage(e.id, t.id, t.state === h.cmJ.SEND_FAILED)
        : j.A.confirmDelete(e, t);
}
function I(e, t) {
    l.A.startEditMessageRecord(e.id, t);
}
function P(e, t) {
    (0, A.A)(e.id, t.id);
}
function T(e, t, n) {
    !1 === t.pinned
        ? n.shiftKey
            ? r.A.pinMessage(e, t.id)
            : j.A.confirmPin(e, t)
        : n.shiftKey
          ? r.A.unpinMessage(e, t.id)
          : j.A.confirmUnpin(e, t);
}
function w(e, t) {
    (0, i.A)(e.id, t.id);
}
function x(e, t) {
    (0, v.A)(e, t, void 0, O.A.getOptions(t.id));
}
function M(e, t, n) {
    let r = e.isPrivate(),
        l = t.author.id === u.default.getId();
    (0, c.Yf)({
        channel: e,
        message: t,
        shouldMention: !n.shiftKey && !l,
        showMentionToggle: !r && !l,
    }),
        m._.dispatch(h.jej.FOCUS_CHANNEL_TEXT_AREA, { channelId: e.id });
}
function C(e, t) {
    (0, d.Tv)(e, t, "Message");
}
function N(e, t) {
    let n = f.A.getChannel(y.default.castMessageIdAsChannelId(t.id));
    null != n && (0, d.JA)(n);
}
function R(e, t) {
    (0, s.Y)({
        channelId: e.id,
        messageId: t.id,
    });
}
function G(e, t) {
    (0, s.x)({
        channelId: e.id,
        messageId: t.id,
    });
}
function L(e, t) {
    (0, o.fO)({
        message: t,
        source: "message-actions",
    });
}
