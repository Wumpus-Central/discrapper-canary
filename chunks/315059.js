n.d(t, { A: () => c });
var r = n(627968);
n(64700);
var i = n(397927),
    a = n(713654),
    s = n(598104),
    o = n(287809),
    l = n(996316);
let c = function (e) {
    let { channel: t, avatarSize: n, iconSize: c, iconClassName: u } = e;
    if (t.isDM()) {
        let e = t.getRecipientId(),
            a = o.default.getUser(e);
        if (null == a) return null;
        let s = a.getAvatarURL(null, i.vCh[n].size);
        return (0, r.jsx)(i.euF, {
            "aria-hidden": !0,
            className: l.B7,
            size: n,
            src: s,
        });
    }
    if (t.isGroupDM())
        return (0, r.jsx)(s.A, {
            "aria-hidden": !0,
            className: l.w$,
            channel: t,
            size: n,
        });
    let d = (0, a.gU)(t);
    return null == d
        ? null
        : (0, r.jsx)(d, {
              className: u,
              color: "currentColor",
              size: c,
          });
};
