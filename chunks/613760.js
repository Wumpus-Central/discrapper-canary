n.d(t, { A: () => x });
var i = n(627968),
    l = n(64700),
    a = n(172218),
    r = n(607399),
    s = n(702841),
    o = n(485724),
    c = n(529200),
    d = n(395671),
    u = n(967198),
    _ = n(954571),
    m = n(354138),
    h = n(212534),
    p = n(652215),
    g = n(985018),
    f = n(64493);
function x(e) {
    let { code: t, message: n } = e,
        [x, A, C] = (0, s.yK)(
            [h.A],
            () => [h.A.getApplication(t), h.A.isInvalidApplication(t), h.A.getApplicationFetchState(t)],
            [t],
        ),
        v = (0, s.bG)([u.A], () => u.A.getGuildId() ?? void 0),
        [I, E] = l.useState(!1),
        b = l.useCallback((e) => {
            e && E(!0);
        }, []),
        y = (0, a.K)(b),
        T = l.useCallback(() => {
            _.default.track(p.HAw.APP_DIRECTORY_PROFILE_EMBED_VIEWED, {
                application_id: t,
                device_platform: r.Fr ? "mobile_web" : "desktop_web",
                sender_user_id: n.author.id,
                guild_id: v,
                channel_id: n.channel_id,
            });
        }, [t, v, n.author.id, n.channel_id]);
    return (l.useEffect(() => {
        (0, m.eP)(t);
    }, [t]),
    l.useEffect(() => {
        I && C === h.e.FETCHED && T();
    }, [I, C, T]),
    l.useEffect(() => {
        I &&
            A &&
            _.default.track(p.HAw.APP_DIRECTORY_PROFILE_INVALID_EMBED_VIEWED, {
                device_platform: r.Fr ? "mobile_web" : "desktop_web",
                sender_user_id: n.author.id,
                guild_id: v,
                channel_id: n.channel_id,
            });
    }, [I, v, A, n.author.id, n.channel_id]),
    A)
        ? (0, i.jsxs)(c.A, {
              containerRef: y,
              children: [
                  (0, i.jsx)(c.A.Header, { text: g.intl.string(g.t.j4KtLa) }),
                  (0, i.jsx)(c.A.Body, {
                      children: (0, i.jsxs)("div", {
                          className: f.k,
                          children: [
                              (0, i.jsx)(c.A.Icon, { expired: !0 }),
                              (0, i.jsx)(c.A.Info, {
                                  expired: !0,
                                  title: g.intl.string(g.t.NaQLEx),
                                  children: g.intl.string(g.t["0H5OT2"]),
                              }),
                          ],
                      }),
                  }),
              ],
          })
        : null == x || C === h.e.FETCHING
          ? (0, i.jsxs)(c.A, {
                containerRef: y,
                children: [
                    (0, i.jsx)(c.A.Header, { text: g.intl.string(g.t.m9hXGR) }),
                    (0, i.jsx)(c.A.Body, { resolving: !0 }),
                ],
            })
          : (0, i.jsx)(o.W, { app: d.Ay.createFromServer(x), linkType: o.J.APP_DISCOVERY, onView: T, message: n });
}
