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
    _ = n(981631),
    g = n(388032),
    h = n(280306);
function b(e) {
    let { code: t, message: n } = e,
        [b, E, C] = (0, a.Wu)([f.Z], () => [f.Z.getApplication(t), f.Z.isInvalidApplication(t), f.Z.getApplicationFetchState(t)], [t]),
        O = (0, a.e7)([d.Z], () => {
            var e;
            return null != (e = d.Z.getGuildId()) ? e : void 0;
        }),
        [y, v] = i.useState(!1),
        x = i.useCallback((e) => {
            e && v(!0);
        }, []),
        I = (0, o.O)(x),
        j = i.useCallback(() => {
            p.default.track(_.rMx.APP_DIRECTORY_PROFILE_EMBED_VIEWED, {
                application_id: t,
                device_platform: l.tq ? 'mobile_web' : 'desktop_web',
                sender_user_id: n.author.id,
                guild_id: O,
                channel_id: n.channel_id
            });
        }, [t, O, n.author.id, n.channel_id]);
    return (i.useEffect(() => {
        (0, m.gZ)(t);
    }, [t]),
    i.useEffect(() => {
        y && C === f.M.FETCHED && j();
    }, [y, C, j]),
    i.useEffect(() => {
        y &&
            E &&
            p.default.track(_.rMx.APP_DIRECTORY_PROFILE_INVALID_EMBED_VIEWED, {
                device_platform: l.tq ? 'mobile_web' : 'desktop_web',
                sender_user_id: n.author.id,
                guild_id: O,
                channel_id: n.channel_id
            });
    }, [y, O, E, n.author.id, n.channel_id]),
    E)
        ? (0, r.jsxs)(c.Z, {
              containerRef: I,
              children: [
                  (0, r.jsx)(c.Z.Header, { text: g.intl.string(g.t.j4KtLS) }),
                  (0, r.jsx)(c.Z.Body, {
                      children: (0, r.jsxs)('div', {
                          className: h.invalidBody,
                          children: [
                              (0, r.jsx)(c.Z.Icon, { expired: !0 }),
                              (0, r.jsx)(c.Z.Info, {
                                  expired: !0,
                                  title: g.intl.string(g.t.NaQLEx),
                                  children: g.intl.string(g.t['0H5OT0'])
                              })
                          ]
                      })
                  })
              ]
          })
        : null == b || C === f.M.FETCHING
          ? (0, r.jsxs)(c.Z, {
                containerRef: I,
                children: [(0, r.jsx)(c.Z.Header, { text: g.intl.string(g.t.m9hXGR) }), (0, r.jsx)(c.Z.Body, { resolving: !0 })]
            })
          : (0, r.jsx)(s.O, {
                app: u.ZP.createFromServer(b),
                linkType: s.U.APP_DISCOVERY,
                onView: j
            });
}
