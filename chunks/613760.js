n.d(t, { A: () => x });
var i = n(627968),
    a = n(64700),
    l = n(172218),
    s = n(607399),
    r = n(417597),
    o = n(485724),
    d = n(529200),
    c = n(611010),
    u = n(967198),
    _ = n(954571),
    m = n(354138),
    h = n(212534),
    p = n(652215),
    g = n(985018),
    A = n(64493);
function x(e) {
    let { code: t, message: n } = e,
        [x, f, C] = (0, r.yK)(
            [h.A],
            () => [h.A.getApplication(t), h.A.isInvalidApplication(t), h.A.getApplicationFetchState(t)],
            [t],
        ),
        E = (0, r.bG)([u.A], () => u.A.getGuildId() ?? void 0),
        [I, v] = a.useState(!1),
        b = a.useCallback((e) => {
            e && v(!0);
        }, []),
        T = (0, l.K)(b),
        y = a.useCallback(() => {
            _.default.track(p.HAw.APP_DIRECTORY_PROFILE_EMBED_VIEWED, {
                application_id: t,
                device_platform: s.Fr ? "mobile_web" : "desktop_web",
                sender_user_id: n.author.id,
                guild_id: E,
                channel_id: n.channel_id,
            });
        }, [t, E, n.author.id, n.channel_id]);
    return (a.useEffect(() => {
        (0, m.eP)(t);
    }, [t]),
    a.useEffect(() => {
        I && C === h.e.FETCHED && y();
    }, [I, C, y]),
    a.useEffect(() => {
        I &&
            f &&
            _.default.track(p.HAw.APP_DIRECTORY_PROFILE_INVALID_EMBED_VIEWED, {
                device_platform: s.Fr ? "mobile_web" : "desktop_web",
                sender_user_id: n.author.id,
                guild_id: E,
                channel_id: n.channel_id,
            });
    }, [I, E, f, n.author.id, n.channel_id]),
    f)
        ? (0, i.jsxs)(d.A, {
              containerRef: T,
              children: [
                  (0, i.jsx)(d.A.Header, { text: g.intl.string(g.t.j4KtLa) }),
                  (0, i.jsx)(d.A.Body, {
                      children: (0, i.jsxs)("div", {
                          className: A.k,
                          children: [
                              (0, i.jsx)(d.A.Icon, { expired: !0 }),
                              (0, i.jsx)(d.A.Info, {
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
          ? (0, i.jsxs)(d.A, {
                containerRef: T,
                children: [
                    (0, i.jsx)(d.A.Header, { text: g.intl.string(g.t.m9hXGR) }),
                    (0, i.jsx)(d.A.Body, { resolving: !0 }),
                ],
            })
          : (0, i.jsx)(o.W, { app: c.Ay.createFromServer(x), linkType: o.J.APP_DISCOVERY, onView: y, message: n });
}
