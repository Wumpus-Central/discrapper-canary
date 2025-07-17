(n.d(t, { Z: () => b }), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(873546),
    a = n(399606),
    o = n(434650),
    s = n(230171),
    c = n(955415),
    u = n(973616),
    d = n(914010),
    p = n(626135),
    m = n(471518),
    f = n(370210),
    g = n(981631),
    h = n(388032),
    _ = n(280306);
function b(e) {
    let { code: t, message: n } = e,
        [b, E, x] = (0, a.Wu)([f.Z], () => [f.Z.getApplication(t), f.Z.isInvalidApplication(t), f.Z.getApplicationFetchState(t)], [t]),
        C = (0, a.e7)([d.Z], () => {
            var e;
            return null != (e = d.Z.getGuildId()) ? e : void 0;
        }),
        [v, y] = i.useState(!1),
        O = i.useCallback((e) => {
            e && y(!0);
        }, []),
        j = (0, o.O)(O),
        I = i.useCallback(() => {
            p.default.track(g.rMx.APP_DIRECTORY_PROFILE_EMBED_VIEWED, {
                application_id: t,
                device_platform: l.tq ? 'mobile_web' : 'desktop_web',
                sender_user_id: n.author.id,
                guild_id: C,
                channel_id: n.channel_id
            });
        }, [t, C, n.author.id, n.channel_id]);
    return (i.useEffect(() => {
        (0, m.gZ)(t);
    }, [t]),
    i.useEffect(() => {
        v && x === f.M.FETCHED && I();
    }, [v, x, I]),
    i.useEffect(() => {
        v &&
            E &&
            p.default.track(g.rMx.APP_DIRECTORY_PROFILE_INVALID_EMBED_VIEWED, {
                device_platform: l.tq ? 'mobile_web' : 'desktop_web',
                sender_user_id: n.author.id,
                guild_id: C,
                channel_id: n.channel_id
            });
    }, [v, C, E, n.author.id, n.channel_id]),
    E)
        ? (0, r.jsxs)(c.Z, {
              containerRef: j,
              children: [
                  (0, r.jsx)(c.Z.Header, { text: h.intl.string(h.t.j4KtLS) }),
                  (0, r.jsx)(c.Z.Body, {
                      children: (0, r.jsxs)('div', {
                          className: _.invalidBody,
                          children: [
                              (0, r.jsx)(c.Z.Icon, { expired: !0 }),
                              (0, r.jsx)(c.Z.Info, {
                                  expired: !0,
                                  title: h.intl.string(h.t.NaQLEx),
                                  children: h.intl.string(h.t['0H5OT0'])
                              })
                          ]
                      })
                  })
              ]
          })
        : null == b || x === f.M.FETCHING
          ? (0, r.jsxs)(c.Z, {
                containerRef: j,
                children: [(0, r.jsx)(c.Z.Header, { text: h.intl.string(h.t.m9hXGR) }), (0, r.jsx)(c.Z.Body, { resolving: !0 })]
            })
          : (0, r.jsx)(s.O, {
                app: u.ZP.createFromServer(b),
                linkType: s.U.APP_DISCOVERY,
                onView: I
            });
}
