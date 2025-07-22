n.d(t, {
    GQ: () => _,
    MC: () => m,
    P: () => S,
    ZP: () => y
});
var r = n(255367);
n(73800);
var s = n(120356),
    l = n.n(s),
    a = n(481060),
    i = n(933557),
    o = n(471445),
    c = n(266076),
    u = n(592125),
    d = n(699516),
    h = n(246946),
    p = n(594174),
    f = n(51144),
    g = n(290082);
function m(e) {
    let { channel: t } = e;
    if (t.isDM()) {
        let e = t.getRecipientId(),
            n = p.default.getUser(e);
        if (null == n) return null;
        let s = n.getAvatarURL(null, 20);
        return (0, r.jsx)(a.qEK, {
            'aria-hidden': !0,
            className: g.searchResultDMChannelIcon,
            size: a.EFr.SIZE_20,
            src: s
        });
    }
    if (t.isGroupDM())
        return (0, r.jsx)(c.Z, {
            'aria-hidden': !0,
            className: g.searchResultGDMChannelIcon,
            channel: t,
            size: a.EFr.SIZE_20,
            experimentLocation: 'search_popout'
        });
    let n = (0, o.KS)(t);
    return null == n ? null : (0, r.jsx)(n, { className: g.searchResultChannelIcon });
}
function _(e) {
    let { channel: t } = e;
    return t.isDM() || t.isGroupDM()
        ? (0, r.jsx)('span', {
              className: g.searchResultDMChannelName,
              children: (0, i.F6)(t, p.default, d.Z)
          })
        : (0, r.jsx)('strong', { children: (0, i.F6)(t, p.default, d.Z) });
}
function S(e) {
    let { channel: t } = e,
        n = u.Z.getChannel(t.parent_id);
    if (t.isDM()) {
        let e = t.getRecipientId(),
            n = p.default.getUser(e);
        return null == n
            ? null
            : (0, r.jsx)('span', {
                  className: g.searchResultDMUserName,
                  children: f.ZP.getUserTag(n, { identifiable: h.Z.enabled && h.Z.hidePersonalInformation ? 'never' : 'always' })
              });
    }
    if (null != n)
        return (0, r.jsx)('span', {
            className: g.searchResultChannelCategory,
            children: (0, i.F6)(n, p.default, d.Z)
        });
}
function y(e) {
    let { channel: t, text: n, channelContainerClassName: s, textContainerClassName: a } = e;
    return null == t
        ? (0, r.jsx)('strong', { children: n })
        : (0, r.jsxs)('div', {
              className: l()(g.resultChannel, s),
              children: [
                  (0, r.jsx)(m, { channel: t }),
                  (0, r.jsxs)('div', {
                      className: a,
                      children: [(0, r.jsx)(_, { channel: t }), (0, r.jsx)(S, { channel: t })]
                  })
              ]
          });
}
