n.d(t, { A: () => f });
var i = n(627968),
    l = n(64700),
    a = n(172218),
    s = n(607399),
    r = n(417597),
    o = n(485724),
    d = n(529200),
    c = n(611010),
    u = n(967198),
    m = n(954571),
    _ = n(354138),
    h = n(212534),
    p = n(652215),
    g = n(985018),
    A = n(489709);
function f(e) {
    let { code: t, message: n } = e,
        [f, x, C] = (0, r.yK)(
            [h.A],
            () => [h.A.getApplication(t), h.A.isInvalidApplication(t), h.A.getApplicationFetchState(t)],
            [t],
        ),
        E = (0, r.bG)([u.A], () => u.A.getGuildId() ?? void 0),
        [I, v] = l.useState(!1),
        b = l.useCallback((e) => {
            e && v(!0);
        }, []),
        T = (0, a.K)(b),
        S = l.useCallback(() => {
            m.default.track(p.HAw.APP_DIRECTORY_PROFILE_EMBED_VIEWED, {
                application_id: t,
                device_platform: s.Fr ? "mobile_web" : "desktop_web",
                sender_user_id: n.author.id,
                guild_id: E,
                channel_id: n.channel_id,
            });
        }, [t, E, n.author.id, n.channel_id]);
    return (l.useEffect(() => {
        (0, _.eP)(t);
    }, [t]),
    l.useEffect(() => {
        I && C === h.e.FETCHED && S();
    }, [I, C, S]),
    l.useEffect(() => {
        I &&
            x &&
            m.default.track(p.HAw.APP_DIRECTORY_PROFILE_INVALID_EMBED_VIEWED, {
                device_platform: s.Fr ? "mobile_web" : "desktop_web",
                sender_user_id: n.author.id,
                guild_id: E,
                channel_id: n.channel_id,
            });
    }, [I, E, x, n.author.id, n.channel_id]),
    x)
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
        : null == f || C === h.e.FETCHING
          ? (0, i.jsxs)(d.A, {
                containerRef: T,
                children: [
                    (0, i.jsx)(d.A.Header, { text: g.intl.string(g.t.m9hXGR) }),
                    (0, i.jsx)(d.A.Body, { resolving: !0 }),
                ],
            })
          : (0, i.jsx)(o.W, { app: c.Ay.createFromServer(f), linkType: o.J.APP_DISCOVERY, onView: S, message: n });
}
