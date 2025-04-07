n.d(t, { Z: () => b }), n(388685);
var r = n(200651),
    i = n(192379),
    a = n(873546),
    l = n(399606),
    o = n(434650),
    s = n(230171),
    c = n(955415),
    u = n(973616),
    d = n(914010),
    p = n(626135),
    m = n(471518),
    f = n(370210),
    h = n(981631),
    g = n(388032),
    _ = n(280306);
function b(e) {
    let { code: t, message: n, embedUrl: b } = e,
        [x, y, E] = (0, l.Wu)([f.Z], () => [f.Z.getApplication(t), f.Z.isInvalidApplication(t), f.Z.getApplicationFetchState(t)], [t]),
        v = (0, l.e7)([d.Z], () => {
            var e;
            return null != (e = d.Z.getGuildId()) ? e : void 0;
        }),
        [O, N] = i.useState(!1),
        j = i.useCallback((e) => {
            e && N(!0);
        }, []),
        C = (0, o.O)(j),
        S = i.useCallback(() => {
            p.default.track(h.rMx.APP_DIRECTORY_PROFILE_EMBED_VIEWED, {
                application_id: t,
                device_platform: a.tq ? 'mobile_web' : 'desktop_web',
                sender_user_id: n.author.id,
                guild_id: v,
                channel_id: n.channel_id
            });
        }, [t, v, n.author.id, n.channel_id]);
    return (i.useEffect(() => {
        (0, m.gZ)(t);
    }, [t]),
    i.useEffect(() => {
        O && E === f.M.FETCHED && S();
    }, [O, E, S]),
    i.useEffect(() => {
        O &&
            y &&
            p.default.track(h.rMx.APP_DIRECTORY_PROFILE_INVALID_EMBED_VIEWED, {
                device_platform: a.tq ? 'mobile_web' : 'desktop_web',
                sender_user_id: n.author.id,
                guild_id: v,
                channel_id: n.channel_id
            });
    }, [O, v, y, n.author.id, n.channel_id]),
    y)
        ? (0, r.jsxs)(c.Z, {
              containerRef: C,
              children: [
                  (0, r.jsx)(c.Z.Header, { text: g.NW.string(g.t.j4KtLS) }),
                  (0, r.jsx)(c.Z.Body, {
                      children: (0, r.jsxs)('div', {
                          className: _.invalidBody,
                          children: [
                              (0, r.jsx)(c.Z.Icon, { expired: !0 }),
                              (0, r.jsx)(c.Z.Info, {
                                  expired: !0,
                                  title: g.NW.string(g.t.NaQLEx),
                                  children: g.NW.string(g.t['0H5OT0'])
                              })
                          ]
                      })
                  })
              ]
          })
        : null == x || E === f.M.FETCHING
          ? (0, r.jsxs)(c.Z, {
                containerRef: C,
                children: [(0, r.jsx)(c.Z.Header, { text: g.NW.string(g.t.m9hXGR) }), (0, r.jsx)(c.Z.Body, { resolving: !0 })]
            })
          : (0, r.jsx)(s.O, {
                app: u.ZP.createFromServer(x),
                embedUrl: b,
                linkType: s.U.APP_DISCOVERY,
                onView: S
            });
}
