n.r(e), n.d(e, { default: () => s });
var u = n(200651);
n(192379);
var t = n(355467),
    d = n(106976),
    i = n(703656),
    o = n(914010),
    a = n(563132),
    c = n(791785),
    r = n(981631);
function s(l) {
    let { onClose: e, onComplete: n, forcesTransitionToGuild: s, ...p } = l,
        { subscriptionMetadataRequest: h } = (0, a.JL)();
    return (0, u.jsx)(c.PaymentModal, {
        ...p,
        onComplete: n,
        onClose: (l) => {
            e(l);
            let u = null == h ? void 0 : h.guild_id;
            l && null != u && (t.jg(), (0, d.i1)(u), null == n || n(), null != u && (s || o.Z.getGuildId() !== u) && (0, i.uL)(r.Z5c.CHANNEL(u)));
        },
        forceNewPaymentModal: !0
    });
}
