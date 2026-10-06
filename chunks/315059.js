l.d(t, { A: () => c });
var r = l(477900);
l(582128);
var n = l(778712),
    u = l(97808),
    a = l(713654),
    s = l(598104),
    i = l(287809),
    o = l(948914);
let c = function (e) {
    let { channel: t, avatarSize: l, iconSize: c, iconClassName: E } = e;
    if (t.isDM()) {
        let e = t.getRecipientId(),
            a = i.default.getUser(e);
        if (null == a) return null;
        let s = a.getAvatarURL(null, n.vC[l].size);
        return (0, r.jsx)(u.eu, { "aria-hidden": !0, className: o.B7, size: l, src: s });
    }
    if (t.isGroupDM()) return (0, r.jsx)(s.A, { "aria-hidden": !0, className: o.w$, channel: t, size: l });
    let L = (0, a.gU)(t);
    return null == L ? null : (0, r.jsx)(L, { className: E, color: "currentColor", size: c });
};
