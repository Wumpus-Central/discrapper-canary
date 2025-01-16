t.d(n, {
    Z: function () {
        return v;
    }
});
var i = t(200651);
t(192379);
var l = t(442837),
    o = t(481060),
    r = t(353647),
    s = t(63063),
    c = t(369566),
    a = t(678738),
    d = t(151545),
    u = t(744802),
    f = t(493043),
    m = t(228168),
    x = t(981631),
    I = t(388032),
    p = t(189144),
    h = t(731218);
function v(e) {
    let { user: n, currentUser: t, profileGuildId: v, subsection: Z, onClose: g } = e,
        { live: j, recent: _, stream: b } = (0, c.Z)(n.id),
        E = j.length > 0 || _.length > 0 || null != b,
        N = (0, l.e7)([r.Z], () => r.Z.isFetchingUserOutbox(n.id));
    return !E && N
        ? (0, i.jsx)('div', {
              className: h.empty,
              children: (0, i.jsx)(o.Spinner, {})
          })
        : (0, i.jsxs)(o.ScrollerThin, {
              className: p.scroller,
              fade: !0,
              children: [
                  (0, i.jsxs)(a.Z, {
                      children: [
                          null != b &&
                              (0, i.jsx)(f.Z, {
                                  location: 'UserProfileModalActivity',
                                  user: n,
                                  currentUser: t,
                                  stream: b,
                                  onClose: g,
                                  profileGuildId: v
                              }),
                          j.map((e, l) =>
                              (0, i.jsx)(
                                  d.Z,
                                  {
                                      user: n,
                                      currentUser: t,
                                      activity: e,
                                      onClose: g,
                                      profileGuildId: v
                                  },
                                  'live-'.concat(l)
                              )
                          )
                      ]
                  }),
                  _.length > 0 &&
                      (0, i.jsx)(a.Z, {
                          heading: I.intl.string(I.t.M0zgnZ),
                          subheading:
                              n.id === t.id
                                  ? I.intl.format(I.t['4bk9Ag'], {
                                        learnMoreHook: (e, n) =>
                                            (0, i.jsx)(
                                                o.Anchor,
                                                {
                                                    href: s.Z.getArticleURL(x.BhN.ACTIVITY_STATUS_SETTINGS),
                                                    children: e
                                                },
                                                n
                                            )
                                    })
                                  : void 0,
                          scrollIntoView: Z === m.Tb.RECENT_ACTIVITY,
                          children: _.map((e) =>
                              (0, i.jsx)(
                                  u.Z,
                                  {
                                      location: 'UserProfileModalActivity',
                                      user: n,
                                      currentUser: t,
                                      entry: e,
                                      profileGuildId: v,
                                      onClose: g
                                  },
                                  e.id
                              )
                          )
                      })
              ]
          });
}
