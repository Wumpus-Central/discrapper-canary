r.d(t, { A: () => c });
var l = r(627968);
r(64700);
var n = r(778712),
    s = r(97808),
    a = r(713654),
    i = r(598104),
    u = r(287809),
    o = r(21799);
let c = function (e) {
    let { channel: t, avatarSize: r, iconSize: c, iconClassName: h } = e;
    if (t.isDM()) {
        let e = t.getRecipientId(),
            a = u.default.getUser(e);
        if (null == a) return null;
        let i = a.getAvatarURL(null, n.vC[r].size);
        return (0, l.jsx)(s.eu, { "aria-hidden": !0, className: o.B7, size: r, src: i });
    }
    if (t.isGroupDM()) return (0, l.jsx)(i.A, { "aria-hidden": !0, className: o.w$, channel: t, size: r });
    let d = (0, a.gU)(t);
    return null == d ? null : (0, l.jsx)(d, { className: h, color: "currentColor", size: c });
};
