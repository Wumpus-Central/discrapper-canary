r.d(t, { A: () => u });
var s = r(627968);
r(64700);
var n = r(397927),
    l = r(713654),
    a = r(598104),
    i = r(287809),
    o = r(996316);
let u = function (e) {
    let { channel: t, avatarSize: r, iconSize: u, iconClassName: c } = e;
    if (t.isDM()) {
        let e = t.getRecipientId(),
            l = i.default.getUser(e);
        if (null == l) return null;
        let a = l.getAvatarURL(null, n.vCh[r].size);
        return (0, s.jsx)(n.euF, { "aria-hidden": !0, className: o.B7, size: r, src: a });
    }
    if (t.isGroupDM()) return (0, s.jsx)(a.A, { "aria-hidden": !0, className: o.w$, channel: t, size: r });
    let d = (0, l.gU)(t);
    return null == d ? null : (0, s.jsx)(d, { className: c, color: "currentColor", size: u });
};
