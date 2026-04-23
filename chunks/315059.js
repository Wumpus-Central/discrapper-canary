r.d(t, { A: () => c });
var n = r(627968);
r(64700);
var s = r(778712),
    l = r(97808),
    a = r(713654),
    i = r(598104),
    o = r(287809),
    u = r(21799);
let c = function (e) {
    let { channel: t, avatarSize: r, iconSize: c, iconClassName: h } = e;
    if (t.isDM()) {
        let e = t.getRecipientId(),
            a = o.default.getUser(e);
        if (null == a) return null;
        let i = a.getAvatarURL(null, s.vC[r].size);
        return (0, n.jsx)(l.eu, { "aria-hidden": !0, className: u.B7, size: r, src: i });
    }
    if (t.isGroupDM()) return (0, n.jsx)(i.A, { "aria-hidden": !0, className: u.w$, channel: t, size: r });
    let d = (0, a.gU)(t);
    return null == d ? null : (0, n.jsx)(d, { className: h, color: "currentColor", size: c });
};
