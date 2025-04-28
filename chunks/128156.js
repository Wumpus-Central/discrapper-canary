n.d(t, { Z: () => I });
var o = n(200651);
n(192379);
var r = n(442837),
    i = n(481060),
    c = n(468363),
    a = n(353647),
    l = n(158776),
    s = n(885110),
    d = n(63063),
    u = n(369566),
    f = n(29899),
    p = n(151545),
    m = n(744802),
    b = n(493043),
    h = n(864141),
    y = n(693408),
    g = n(228168),
    j = n(981631),
    _ = n(388032),
    x = n(514656);
function I(e) {
    let { user: t, currentUser: n, displayProfile: I, guildId: v, subsection: O, onClose: N } = e,
        { voiceActivityStatusEnabled: P } = (0, c.U)({ location: 'UserProfileModalV2Activity' }),
        { live: A, recent: C, stream: Z } = (0, u.Z)(t.id),
        { voiceChannel: T, voiceActivity: S } = (0, f.Z)({
            userId: t.id,
            guildId: v
        }),
        w = (0, r.e7)([a.Z], () => a.Z.isFetchingUserOutbox(t.id)),
        M = t.id === n.id,
        E = (0, r.e7)([s.Z, l.Z], () => {
            let e = M ? s.Z.getStatus() : l.Z.getStatus(t.id);
            return e === i.Skl.OFFLINE || e === i.Skl.INVISIBLE;
        }),
        U = A.length > 0 || null != Z,
        V = P && null == Z && null == S && null != T,
        D = !E && (U || V),
        k = C.length > 0;
    return D || k || !w
        ? (0, o.jsxs)(i.Ttm, {
              className: x.scroller,
              fade: !0,
              children: [
                  D
                      ? (0, o.jsxs)(y.Z, {
                            heading: _.intl.string(_.t.J6STd3),
                            children: [
                                V &&
                                    (0, o.jsx)(h.Z, {
                                        user: t,
                                        currentUser: n,
                                        voiceChannel: T,
                                        onClose: N
                                    }),
                                null != Z &&
                                    (0, o.jsx)(b.Z, {
                                        location: 'UserProfileModalV2Activity',
                                        user: t,
                                        currentUser: n,
                                        stream: Z,
                                        onClose: N,
                                        profileGuildId: null == I ? void 0 : I.guildId
                                    }),
                                A.map((e, r) =>
                                    (0, o.jsx)(
                                        p.Z,
                                        {
                                            user: t,
                                            currentUser: n,
                                            activity: e,
                                            onClose: N,
                                            profileGuildId: null == I ? void 0 : I.guildId
                                        },
                                        'live-'.concat(r)
                                    )
                                )
                            ]
                        })
                      : null,
                  k
                      ? (0, o.jsx)(y.Z, {
                            heading: _.intl.string(_.t.jzgEoK),
                            subheading: M
                                ? _.intl.format(_.t['4bk9Ag'], {
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
                            scrollIntoView: O === g.Tb.RECENT_ACTIVITY,
                            children: C.map((e) =>
                                (0, o.jsx)(
                                    m.Z,
                                    {
                                        location: 'UserProfileModalV2Activity',
                                        user: t,
                                        currentUser: n,
                                        entry: e,
                                        profileGuildId: null == I ? void 0 : I.guildId,
                                        onClose: N
                                    },
                                    e.id
                                )
                            )
                        })
                      : null
              ]
          })
        : (0, o.jsx)('div', {
              className: x.spinner,
              children: (0, o.jsx)(i.$jN, {})
          });
}
