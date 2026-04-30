n.d(t, { A: () => f });
var i = n(627968),
    l = n(64700),
    s = n(172218),
    a = n(607399),
    r = n(702841),
    o = n(485724),
    d = n(529200),
    c = n(395671),
    u = n(967198),
    m = n(954571),
    h = n(354138),
    g = n(212534),
    A = n(652215),
    p = n(985018),
    x = n(64493);
function f(e) {
    let { code: t, message: n } = e,
        [f, C, E] = (0, r.yK)(
            [g.A],
            () => [g.A.getApplication(t), g.A.isInvalidApplication(t), g.A.getApplicationFetchState(t)],
            [t],
        ),
        v = (0, r.bG)([u.A], () => u.A.getGuildId() ?? void 0),
        [I, _] = l.useState(!1),
        j = l.useCallback((e) => {
            e && _(!0);
        }, []),
        N = (0, s.K)(j),
        T = l.useCallback(() => {
            m.default.track(A.HAw.APP_DIRECTORY_PROFILE_EMBED_VIEWED, {
                application_id: t,
                device_platform: a.Fr ? "mobile_web" : "desktop_web",
                sender_user_id: n.author.id,
                guild_id: v,
                channel_id: n.channel_id,
            });
        }, [t, v, n.author.id, n.channel_id]);
    return (l.useEffect(() => {
        (0, h.eP)(t);
    }, [t]),
    l.useEffect(() => {
        I && E === g.e.FETCHED && T();
    }, [I, E, T]),
    l.useEffect(() => {
        I &&
            C &&
            m.default.track(A.HAw.APP_DIRECTORY_PROFILE_INVALID_EMBED_VIEWED, {
                device_platform: a.Fr ? "mobile_web" : "desktop_web",
                sender_user_id: n.author.id,
                guild_id: v,
                channel_id: n.channel_id,
            });
    }, [I, v, C, n.author.id, n.channel_id]),
    C)
        ? (0, i.jsxs)(d.A, {
              containerRef: N,
              children: [
                  (0, i.jsx)(d.A.Header, { text: p.intl.string(p.t.j4KtLa) }),
                  (0, i.jsx)(d.A.Body, {
                      children: (0, i.jsxs)("div", {
                          className: x.k,
                          children: [
                              (0, i.jsx)(d.A.Icon, { expired: !0 }),
                              (0, i.jsx)(d.A.Info, {
                                  expired: !0,
                                  title: p.intl.string(p.t.NaQLEx),
                                  children: p.intl.string(p.t["0H5OT2"]),
                              }),
                          ],
                      }),
                  }),
              ],
          })
        : null == f || E === g.e.FETCHING
          ? (0, i.jsxs)(d.A, {
                containerRef: N,
                children: [
                    (0, i.jsx)(d.A.Header, { text: p.intl.string(p.t.m9hXGR) }),
                    (0, i.jsx)(d.A.Body, { resolving: !0 }),
                ],
            })
          : (0, i.jsx)(o.W, { app: c.Ay.createFromServer(f), linkType: o.J.APP_DISCOVERY, onView: T, message: n });
}
