n.d(t, { Z: () => O });
var o = n(255367);
n(73800);
var r = n(442837),
    i = n(481060),
    c = n(468363),
    l = n(353647),
    a = n(158776),
    s = n(885110),
    d = n(63063),
    u = n(209698),
    f = n(369566),
    p = n(29899),
    m = n(151545),
    b = n(744802),
    _ = n(493043),
    y = n(864141),
    x = n(264481),
    h = n(693408),
    g = n(228168),
    j = n(981631),
    v = n(388032),
    I = n(514656);
function O(e) {
    let { user: t, currentUser: n, displayProfile: O, guildId: P, channelId: N, subsection: A, onClose: Z } = e,
        { voiceActivityStatusEnabled: T } = (0, c.U)({ location: 'UserProfileModalV2Activity' }),
        C = (0, u.b)({ location: 'UserProfileModalV2Activity' }),
        { live: w, recent: S, stream: E } = (0, f.Z)(t.id),
        { voiceChannel: B, voiceActivity: D } = (0, p.Z)({
            userId: t.id,
            guildId: P
        }),
        U = (0, r.e7)([l.Z], () => l.Z.isFetchingUserOutbox(t.id)),
        k = t.id === n.id,
        L = (0, r.e7)([s.Z, a.Z], () => {
            let e = k ? s.Z.getStatus() : a.Z.getStatus(t.id);
            return e === i.Skl.OFFLINE || e === i.Skl.INVISIBLE;
        }),
        R = w.length > 0 || null != E,
        M = T && null == E && null == D && null != B,
        G = !L && (R || M),
        V = S.length > 0;
    if (!G && !V && U)
        return (0, o.jsx)('div', {
            className: I.spinner,
            children: (0, o.jsx)(i.$jN, {})
        });
    if (!G && !V && !U) {
        var F;
        return k
            ? (0, o.jsx)(x.Uf, { onClose: Z })
            : (0, o.jsx)(x.P9, {
                  user: t,
                  guildId: null != (F = null == O ? void 0 : O.guildId) ? F : void 0,
                  channelId: N,
                  onClose: Z
              });
    }
    return (0, o.jsxs)(i.Ttm, {
        className: I.scroller,
        fade: !0,
        children: [
            G
                ? (0, o.jsx)(h.Z, {
                      heading: v.intl.string(v.t.J6STd3),
                      children: (0, o.jsxs)('div', {
                          className: I.cards,
                          children: [
                              !C &&
                                  M &&
                                  (0, o.jsx)(y.Z, {
                                      user: t,
                                      currentUser: n,
                                      voiceChannel: B,
                                      onClose: Z
                                  }),
                              null != E &&
                                  (0, o.jsx)(_.Z, {
                                      location: 'UserProfileModalV2Activity',
                                      user: t,
                                      currentUser: n,
                                      stream: E,
                                      onClose: Z,
                                      profileGuildId: null == O ? void 0 : O.guildId
                                  }),
                              w.map((e, r) =>
                                  (0, o.jsx)(
                                      m.Z,
                                      {
                                          user: t,
                                          currentUser: n,
                                          activity: e,
                                          onClose: Z,
                                          profileGuildId: null == O ? void 0 : O.guildId
                                      },
                                      'live-'.concat(r)
                                  )
                              ),
                              C &&
                                  M &&
                                  (0, o.jsx)(y.Z, {
                                      user: t,
                                      currentUser: n,
                                      voiceChannel: B,
                                      onClose: Z
                                  })
                          ]
                      })
                  })
                : null,
            V
                ? (0, o.jsx)(h.Z, {
                      heading: v.intl.string(v.t.jzgEoK),
                      subheading: k
                          ? v.intl.format(v.t['4bk9Ag'], {
                                learnMoreHook: (e, t) =>
                                    (0, o.jsx)(
                                        i.eee,
                                        {
                                            href: d.Z.getArticleURL(j.BhN.ACTIVITY_STATUS_SETTINGS),
                                            children: e
                                        },
                                        t
                                    )
                            })
                          : void 0,
                      scrollIntoView: A === g.Tb.RECENT_ACTIVITY,
                      children: (0, o.jsx)('div', {
                          className: I.cards,
                          children: S.map((e) =>
                              (0, o.jsx)(
                                  b.Z,
                                  {
                                      location: 'UserProfileModalV2Activity',
                                      user: t,
                                      currentUser: n,
                                      entry: e,
                                      profileGuildId: null == O ? void 0 : O.guildId,
                                      onClose: Z
                                  },
                                  e.id
                              )
                          )
                      })
                  })
                : null
        ]
    });
}
