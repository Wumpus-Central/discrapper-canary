t.d(n, { Z: () => I });
var o = t(200651);
t(192379);
var i = t(442837),
    c = t(481060),
    r = t(468363),
    a = t(353647),
    l = t(158776),
    s = t(885110),
    d = t(63063),
    u = t(369566),
    f = t(29899),
    p = t(151545),
    m = t(744802),
    h = t(493043),
    _ = t(864141),
    b = t(693408),
    g = t(228168),
    y = t(981631),
    x = t(388032),
    j = t(514656);
function I(e) {
    let { user: n, currentUser: t, displayProfile: I, guildId: v, subsection: A, onClose: N } = e,
        { voiceActivityStatusEnabled: T } = (0, r.U)({ location: 'UserProfileModalV2Activity' }),
        { live: O, recent: C, stream: Z } = (0, u.Z)(n.id),
        { voiceChannel: P, voiceActivity: S } = (0, f.Z)({
            userId: n.id,
            guildId: v
        }),
        w = (0, i.e7)([a.Z], () => a.Z.isFetchingUserOutbox(n.id)),
        M = n.id === t.id,
        U = (0, i.e7)([s.Z, l.Z], () => {
            let e = M ? s.Z.getStatus() : l.Z.getStatus(n.id);
            return e === c.Skl.OFFLINE || e === c.Skl.INVISIBLE;
        }),
        E = O.length > 0 || null != Z,
        V = T && null == Z && null == S && null != P,
        D = !U && (E || V),
        L = C.length > 0;
    return D || L || !w
        ? (0, o.jsxs)(c.Ttm, {
              className: j.scroller,
              fade: !0,
              children: [
                  D
                      ? (0, o.jsxs)(b.Z, {
                            heading: x.intl.string(x.t.J6STd3),
                            children: [
                                V &&
                                    (0, o.jsx)(_.Z, {
                                        user: n,
                                        currentUser: t,
                                        voiceChannel: P,
                                        onClose: N
                                    }),
                                null != Z &&
                                    (0, o.jsx)(h.Z, {
                                        location: 'UserProfileModalV2Activity',
                                        user: n,
                                        currentUser: t,
                                        stream: Z,
                                        onClose: N,
                                        profileGuildId: null == I ? void 0 : I.guildId
                                    }),
                                O.map((e, i) =>
                                    (0, o.jsx)(
                                        p.Z,
                                        {
                                            user: n,
                                            currentUser: t,
                                            activity: e,
                                            onClose: N,
                                            profileGuildId: null == I ? void 0 : I.guildId
                                        },
                                        'live-'.concat(i)
                                    )
                                )
                            ]
                        })
                      : null,
                  L
                      ? (0, o.jsx)(b.Z, {
                            heading: x.intl.string(x.t.jzgEoK),
                            subheading: M
                                ? x.intl.format(x.t['4bk9Ag'], {
                                      learnMoreHook: (e, n) =>
                                          (0, o.jsx)(
                                              c.eee,
                                              {
                                                  href: d.Z.getArticleURL(y.BhN.ACTIVITY_STATUS_SETTINGS),
                                                  children: e
                                              },
                                              n
                                          )
                                  })
                                : void 0,
                            scrollIntoView: A === g.Tb.RECENT_ACTIVITY,
                            children: C.map((e) =>
                                (0, o.jsx)(
                                    m.Z,
                                    {
                                        location: 'UserProfileModalV2Activity',
                                        user: n,
                                        currentUser: t,
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
              className: j.spinner,
              children: (0, o.jsx)(c.$jN, {})
          });
}
