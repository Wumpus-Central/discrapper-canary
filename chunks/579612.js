r.d(t, {
    GQ: () => _,
    MC: () => m,
    P: () => y,
    ZP: () => S
});
var n = r(255367);
r(73800);
var s = r(120356),
    l = r.n(s),
    a = r(481060),
    i = r(933557),
    o = r(471445),
    c = r(266076),
    u = r(592125),
    h = r(699516),
    d = r(246946),
    p = r(594174),
    f = r(51144),
    g = r(290082);
function m(e) {
    let { channel: t } = e;
    if (t.isDM()) {
        let e = t.getRecipientId(),
            r = p.default.getUser(e);
        if (null == r) return null;
        let s = r.getAvatarURL(null, 20);
        return (0, n.jsx)(a.qEK, {
            'aria-hidden': !0,
            className: g.searchResultDMChannelIcon,
            size: a.EFr.SIZE_20,
            src: s
        });
    }
    if (t.isGroupDM())
        return (0, n.jsx)(c.Z, {
            'aria-hidden': !0,
            className: g.searchResultGDMChannelIcon,
            channel: t,
            size: a.EFr.SIZE_20,
            experimentLocation: 'search_popout'
        });
    let r = (0, o.KS)(t);
    return null == r ? null : (0, n.jsx)(r, { className: g.searchResultChannelIcon });
}
function _(e) {
    let { channel: t } = e;
    return t.isDM() || t.isGroupDM()
        ? (0, n.jsx)('span', {
              className: g.searchResultDMChannelName,
              children: (0, i.F6)(t, p.default, h.Z)
          })
        : (0, n.jsx)('strong', { children: (0, i.F6)(t, p.default, h.Z) });
}
function y(e) {
    let { channel: t } = e,
        r = u.Z.getChannel(t.parent_id);
    if (t.isDM()) {
        let e = t.getRecipientId(),
            r = p.default.getUser(e);
        return null == r
            ? null
            : (0, n.jsx)('span', {
                  className: g.searchResultDMUserName,
                  children: f.ZP.getUserTag(r, { identifiable: d.Z.enabled && d.Z.hidePersonalInformation ? 'never' : 'always' })
              });
    }
    if (null != r)
        return (0, n.jsx)('span', {
            className: g.searchResultChannelCategory,
            children: (0, i.F6)(r, p.default, h.Z)
        });
}
function S(e) {
    let { channel: t, text: r, channelContainerClassName: s, textContainerClassName: a } = e;
    return null == t
        ? (0, n.jsx)('strong', { children: r })
        : (0, n.jsxs)('div', {
              className: l()(g.resultChannel, s),
              children: [
                  (0, n.jsx)(m, { channel: t }),
                  (0, n.jsxs)('div', {
                      className: a,
                      children: [(0, n.jsx)(_, { channel: t }), (0, n.jsx)(y, { channel: t })]
                  })
              ]
          });
}
