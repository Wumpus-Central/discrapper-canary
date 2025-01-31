n.d(t, { Z: () => b });
var i = n(200651);
n(192379);
var l = n(120356),
    a = n.n(l),
    r = n(442837),
    s = n(481060),
    o = n(239091),
    c = n(100527),
    d = n(906732),
    u = n(471445),
    h = n(184301),
    p = n(347475),
    m = n(271383),
    f = n(594174),
    g = n(51144),
    _ = n(967128),
    C = n(981631),
    x = n(388032),
    v = n(678606);
function E(e) {
    var t, l;
    let { userId: u, channel: _ } = e,
        { analyticsLocations: C } = (0, d.ZP)(c.Z.USERNAME),
        x = (0, r.e7)([f.default], () => f.default.getUser(u)),
        E = (0, r.e7)([m.ZP], () => (null != u ? m.ZP.getMember(_.guild_id, u) : null));
    function I(e) {
        if (null == x) return null;
        (0, o.jW)(e, async () => {
            let { default: e } = await Promise.all([n.e('79695'), n.e('70675')]).then(n.bind(n, 654663));
            return (t) =>
                (0, i.jsx)(e, {
                    ...t,
                    user: x,
                    guildId: _.guild_id,
                    channel: _
                });
        });
    }
    let b = null !== (l = null !== (t = null == E ? void 0 : E.nick) && void 0 !== t ? t : g.ZP.getName(x)) && void 0 !== l ? l : '???',
        Z = null == E ? void 0 : E.colorString;
    return null == x
        ? (0, i.jsx)('span', {
              className: a()(v.threadCreatorName, v.unknownCreatorName),
              children: b
          })
        : (0, i.jsx)(d.Gt, {
              value: C,
              children: (0, i.jsx)(s.yRy, {
                  preload: () =>
                      (0, h.Z)(x, {
                          guildId: _.guild_id,
                          channelId: _.id
                      }),
                  renderPopout: (e) =>
                      (0, i.jsx)(p.Z, {
                          userId: x.id,
                          guildId: _.guild_id,
                          channelId: _.id,
                          roleId: null == E ? void 0 : E.colorRoleId,
                          ...e
                      }),
                  position: 'right',
                  children: (e) =>
                      (0, i.jsx)(s.P3F, {
                          ...e,
                          tag: 'span',
                          className: v.threadCreatorName,
                          onContextMenu: I,
                          children: (0, i.jsx)(s.PUh, {
                              name: b,
                              color: null != Z ? Z : void 0
                          })
                      })
              })
          });
}
function I(e) {
    let { channel: t } = e,
        { threadMetadata: n } = t;
    return null == n
        ? (0, i.jsx)('div', { style: { marginTop: -8 } })
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(s.Text, {
                      variant: 'text-md/normal',
                      color: 'header-secondary',
                      children: (0, i.jsx)('div', {
                          className: v.subtitle,
                          children: x.intl.format(x.t.imPXd3, {
                              usernameHook: (e, n) =>
                                  (0, i.jsx)(
                                      E,
                                      {
                                          userId: t.ownerId,
                                          channel: t
                                      },
                                      n
                                  )
                          })
                      })
                  }),
                  t.type === C.d4z.PRIVATE_THREAD
                      ? (0, i.jsx)(s.Text, {
                            variant: 'text-md/normal',
                            color: 'header-secondary',
                            children: x.intl.string(x.t['1awbZG'])
                        })
                      : null
              ]
          });
}
function b(e) {
    var t;
    let { channel: n } = e,
        l = null !== (t = (0, u.KS)(n)) && void 0 !== t ? t : s.or_;
    return (0, i.jsxs)(_.ZP, {
        channelId: n.id,
        children: [
            (0, i.jsx)('div', {
                className: v.iconWrapper,
                children: (0, i.jsx)(l, { className: v.icon })
            }),
            (0, i.jsx)(_.Ot, { children: n.name }),
            (0, i.jsx)(I, { channel: n })
        ]
    });
}
