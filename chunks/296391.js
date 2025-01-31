t.d(n, { Z: () => v });
var i = t(200651);
t(192379);
var l = t(442837),
    o = t(481060),
    s = t(353647),
    r = t(63063),
    a = t(369566),
    c = t(678738),
    d = t(151545),
    u = t(744802),
    m = t(493043),
    x = t(228168),
    p = t(981631),
    f = t(388032),
    I = t(189144),
    h = t(731218);
function v(e) {
    let { user: n, currentUser: t, profileGuildId: v, subsection: Z, onClose: _ } = e,
        { live: g, recent: j, stream: E } = (0, a.Z)(n.id),
        N = g.length > 0 || j.length > 0 || null != E,
        y = (0, l.e7)([s.Z], () => s.Z.isFetchingUserOutbox(n.id));
    return !N && y
        ? (0, i.jsx)('div', {
              className: h.empty,
              children: (0, i.jsx)(o.$jN, {})
          })
        : (0, i.jsxs)(o.zJl, {
              className: I.scroller,
              fade: !0,
              children: [
                  (0, i.jsxs)(c.Z, {
                      children: [
                          null != E &&
                              (0, i.jsx)(m.Z, {
                                  location: 'UserProfileModalActivity',
                                  user: n,
                                  currentUser: t,
                                  stream: E,
                                  onClose: _,
                                  profileGuildId: v
                              }),
                          g.map((e, l) =>
                              (0, i.jsx)(
                                  d.Z,
                                  {
                                      user: n,
                                      currentUser: t,
                                      activity: e,
                                      onClose: _,
                                      profileGuildId: v
                                  },
                                  'live-'.concat(l)
                              )
                          )
                      ]
                  }),
                  j.length > 0 &&
                      (0, i.jsx)(c.Z, {
                          heading: f.intl.string(f.t.M0zgnZ),
                          subheading:
                              n.id === t.id
                                  ? f.intl.format(f.t['4bk9Ag'], {
                                        learnMoreHook: (e, n) =>
                                            (0, i.jsx)(
                                                o.eee,
                                                {
                                                    href: r.Z.getArticleURL(p.BhN.ACTIVITY_STATUS_SETTINGS),
                                                    children: e
                                                },
                                                n
                                            )
                                    })
                                  : void 0,
                          scrollIntoView: Z === x.Tb.RECENT_ACTIVITY,
                          children: j.map((e) =>
                              (0, i.jsx)(
                                  u.Z,
                                  {
                                      location: 'UserProfileModalActivity',
                                      user: n,
                                      currentUser: t,
                                      entry: e,
                                      profileGuildId: v,
                                      onClose: _
                                  },
                                  e.id
                              )
                          )
                      })
              ]
          });
}
