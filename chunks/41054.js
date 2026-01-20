n.d(t, { Z: () => c });
var r = n(54381);
n(473749);
var i = n(481060),
    a = n(471445),
    o = n(266076),
    s = n(594174),
    l = n(707306);
let c = function (e) {
    let { channel: t, avatarSize: n, iconSize: c, iconClassName: u } = e;
    if (t.isDM()) {
        let e = t.getRecipientId(),
            a = s.default.getUser(e);
        if (null == a) return null;
        let o = a.getAvatarURL(null, i.ny6[n].size);
        return (0, r.jsx)(i.qEK, {
            "aria-hidden": !0,
            className: l.searchResultDMChannelIcon,
            size: n,
            src: o,
        });
    }
    if (t.isGroupDM())
        return (0, r.jsx)(o.Z, {
            "aria-hidden": !0,
            className: l.searchResultGDMChannelIcon,
            channel: t,
            size: n,
        });
    let d = (0, a.KS)(t);
    return null == d
        ? null
        : (0, r.jsx)(d, {
              className: u,
              color: "currentColor",
              size: c,
          });
};
