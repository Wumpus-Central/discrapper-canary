n.d(t, {
    A: () => E,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(172218),
    s = n(607399),
    o = n(417597),
    l = n(485724),
    c = n(529200),
    u = n(611010),
    d = n(967198),
    f = n(954571),
    p = n(354138),
    _ = n(212534),
    h = n(652215),
    m = n(985018),
    g = n(616078);

function E(e) {
    let { code: t, message: n } = e,
        [E, b, y] = (0, o.yK)(
            [_.A],
            () => [_.A.getApplication(t), _.A.isInvalidApplication(t), _.A.getApplicationFetchState(t)],
            [t],
        ),
        O = (0, o.bG)([d.A], () => {
            var e;
            return null != (e = d.A.getGuildId()) ? e : void 0;
        }),
        [A, v] = i.useState(!1),
        S = i.useCallback((e) => {
            e && v(!0);
        }, []),
        I = (0, a.K)(S),
        T = i.useCallback(() => {
            f.default.track(h.HAw.APP_DIRECTORY_PROFILE_EMBED_VIEWED, {
                application_id: t,
                device_platform: s.Fr ? "mobile_web" : "desktop_web",
                sender_user_id: n.author.id,
                guild_id: O,
                channel_id: n.channel_id,
            });
        }, [t, O, n.author.id, n.channel_id]);
    return (i.useEffect(() => {
        (0, p.eP)(t);
    }, [t]),
    i.useEffect(() => {
        A && y === _.e.FETCHED && T();
    }, [A, y, T]),
    i.useEffect(() => {
        A &&
            b &&
            f.default.track(h.HAw.APP_DIRECTORY_PROFILE_INVALID_EMBED_VIEWED, {
                device_platform: s.Fr ? "mobile_web" : "desktop_web",
                sender_user_id: n.author.id,
                guild_id: O,
                channel_id: n.channel_id,
            });
    }, [A, O, b, n.author.id, n.channel_id]),
    b)
        ? (0, r.jsxs)(c.A, {
              containerRef: I,
              children: [
                  (0, r.jsx)(c.A.Header, {
                      text: m.intl.string(m.t.j4KtLa),
                  }),
                  (0, r.jsx)(c.A.Body, {
                      children: (0, r.jsxs)("div", {
                          className: g.k,
                          children: [
                              (0, r.jsx)(c.A.Icon, {
                                  expired: !0,
                              }),
                              (0, r.jsx)(c.A.Info, {
                                  expired: !0,
                                  title: m.intl.string(m.t.NaQLEx),
                                  children: m.intl.string(m.t["0H5OT2"]),
                              }),
                          ],
                      }),
                  }),
              ],
          })
        : null == E || y === _.e.FETCHING
          ? (0, r.jsxs)(c.A, {
                containerRef: I,
                children: [
                    (0, r.jsx)(c.A.Header, {
                        text: m.intl.string(m.t.m9hXGR),
                    }),
                    (0, r.jsx)(c.A.Body, {
                        resolving: !0,
                    }),
                ],
            })
          : (0, r.jsx)(l.W, {
                app: u.Ay.createFromServer(E),
                linkType: l.J.APP_DISCOVERY,
                onView: T,
                message: n,
            });
}
