n.d(t, {
    GQ: () => g,
    MC: () => h,
    P: () => E,
    ZP: () => b,
});
var r = n(54381);
n(473749);
var i = n(120356),
    o = n.n(i),
    a = n(481060),
    s = n(933557),
    l = n(471445),
    c = n(266076),
    u = n(592125),
    d = n(699516),
    f = n(246946),
    p = n(594174),
    _ = n(51144),
    m = n(495824);
function h(e) {
    let { channel: t, avatarSize: n, iconSize: i, iconClassName: o } = e;
    if (t.isDM()) {
        let e = t.getRecipientId(),
            i = p.default.getUser(e);
        if (null == i) return null;
        let o = i.getAvatarURL(null, a.ny6[n].size);
        return (0, r.jsx)(a.qEK, {
            "aria-hidden": !0,
            className: m.searchResultDMChannelIcon,
            size: n,
            src: o,
        });
    }
    if (t.isGroupDM())
        return (0, r.jsx)(c.Z, {
            "aria-hidden": !0,
            className: m.searchResultGDMChannelIcon,
            channel: t,
            size: n,
        });
    let s = (0, l.KS)(t);
    return null == s
        ? null
        : (0, r.jsx)(s, {
              className: o,
              color: "currentColor",
              size: i,
          });
}
function g(e) {
    let { channel: t } = e;
    return t.isDM() || t.isGroupDM()
        ? (0, r.jsx)("span", {
              className: m.searchResultDMChannelName,
              children: (0, s.F6)(t, p.default, d.Z),
          })
        : (0, r.jsx)("strong", { children: (0, s.F6)(t, p.default, d.Z) });
}
function E(e) {
    let { channel: t } = e,
        n = u.Z.getChannel(t.parent_id);
    if (t.isDM()) {
        let e = t.getRecipientId(),
            n = p.default.getUser(e);
        return null == n
            ? null
            : (0, r.jsx)("span", {
                  className: m.searchResultDMUserName,
                  children: _.ZP.getUserTag(n, {
                      identifiable: f.Z.enabled && f.Z.hidePersonalInformation ? "never" : "always",
                  }),
              });
    }
    if (null != n)
        return (0, r.jsx)("span", {
            className: m.searchResultChannelCategory,
            children: (0, s.F6)(n, p.default, d.Z),
        });
}
function b(e) {
    let { channel: t, text: n, channelContainerClassName: i, textContainerClassName: s } = e;
    return null == t
        ? (0, r.jsx)("strong", { children: n })
        : (0, r.jsxs)("div", {
              className: o()(m.resultChannel, i),
              children: [
                  (0, r.jsx)(h, {
                      channel: t,
                      avatarSize: a.EFr.SIZE_20,
                      iconSize: "refresh_sm",
                  }),
                  (0, r.jsxs)("div", {
                      className: s,
                      children: [(0, r.jsx)(g, { channel: t }), (0, r.jsx)(E, { channel: t })],
                  }),
              ],
          });
}
