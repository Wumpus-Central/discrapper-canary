n.d(t, {
    GQ: () => g,
    MC: () => m,
    P: () => E,
    ZP: () => b,
});
var r = n(54381);
n(473749);
var i = n(120356),
    a = n.n(i),
    o = n(481060),
    s = n(933557),
    l = n(471445),
    c = n(266076),
    u = n(592125),
    d = n(699516),
    f = n(246946),
    _ = n(594174),
    p = n(51144),
    h = n(495824);
function m(e) {
    let { channel: t, className: n } = e;
    if (t.isDM()) {
        let e = t.getRecipientId(),
            n = _.default.getUser(e);
        if (null == n) return null;
        let i = n.getAvatarURL(null, 20);
        return (0, r.jsx)(o.qEK, {
            "aria-hidden": !0,
            className: h.searchResultDMChannelIcon,
            size: o.EFr.SIZE_20,
            src: i,
        });
    }
    if (t.isGroupDM())
        return (0, r.jsx)(c.Z, {
            "aria-hidden": !0,
            className: h.searchResultGDMChannelIcon,
            channel: t,
            size: o.EFr.SIZE_20,
        });
    let i = (0, l.KS)(t);
    return null == i
        ? null
        : (0, r.jsx)(i, {
              className: n,
              color: "currentColor",
          });
}
function g(e) {
    let { channel: t } = e;
    return t.isDM() || t.isGroupDM()
        ? (0, r.jsx)("span", {
              className: h.searchResultDMChannelName,
              children: (0, s.F6)(t, _.default, d.Z),
          })
        : (0, r.jsx)("strong", { children: (0, s.F6)(t, _.default, d.Z) });
}
function E(e) {
    let { channel: t } = e,
        n = u.Z.getChannel(t.parent_id);
    if (t.isDM()) {
        let e = t.getRecipientId(),
            n = _.default.getUser(e);
        return null == n
            ? null
            : (0, r.jsx)("span", {
                  className: h.searchResultDMUserName,
                  children: p.ZP.getUserTag(n, {
                      identifiable: f.Z.enabled && f.Z.hidePersonalInformation ? "never" : "always",
                  }),
              });
    }
    if (null != n)
        return (0, r.jsx)("span", {
            className: h.searchResultChannelCategory,
            children: (0, s.F6)(n, _.default, d.Z),
        });
}
function b(e) {
    let { channel: t, text: n, channelContainerClassName: i, textContainerClassName: o } = e;
    return null == t
        ? (0, r.jsx)("strong", { children: n })
        : (0, r.jsxs)("div", {
              className: a()(h.resultChannel, i),
              children: [
                  (0, r.jsx)(m, { channel: t }),
                  (0, r.jsxs)("div", {
                      className: o,
                      children: [(0, r.jsx)(g, { channel: t }), (0, r.jsx)(E, { channel: t })],
                  }),
              ],
          });
}
