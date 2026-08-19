l.d(t, { A: () => c });
var r = l(477900);
l(582128);
var n = l(778712),
    a = l(97808),
    u = l(174355),
    s = l(598104),
    i = l(287809),
    o = l(205615);
let c = function (e) {
    let { channel: t, avatarSize: l, iconSize: c, iconClassName: f } = e;
    if (t.isDM()) {
        let e = t.getRecipientId(),
            u = i.default.getUser(e);
        if (null == u) return null;
        let s = u.getAvatarURL(null, n.vC[l].size);
        return (0, r.jsx)(a.eu, { "aria-hidden": !0, className: o.B7, size: l, src: s });
    }
    if (t.isGroupDM()) return (0, r.jsx)(s.A, { "aria-hidden": !0, className: o.w$, channel: t, size: l });
    let g = (0, u.gU)(t);
    return null == g ? null : (0, r.jsx)(g, { className: f, color: "currentColor", size: c });
};
