n.d(t, { Z: () => E }), n(388685);
var r = n(255367),
    i = n(73800),
    o = n(873546),
    a = n(399606),
    s = n(434650),
    l = n(230171),
    c = n(955415),
    u = n(973616),
    d = n(914010),
    f = n(626135),
    _ = n(471518),
    p = n(370210),
    h = n(981631),
    m = n(388032),
    g = n(280306);
function E(e) {
    let { code: t, message: n } = e,
        [E, b, y] = (0, a.Wu)(
            [p.Z],
            () => [p.Z.getApplication(t), p.Z.isInvalidApplication(t), p.Z.getApplicationFetchState(t)],
            [t],
        ),
        O = (0, a.e7)([d.Z], () => {
            var e;
            return null != (e = d.Z.getGuildId()) ? e : void 0;
        }),
        [v, I] = i.useState(!1),
        T = i.useCallback((e) => {
            e && I(!0);
        }, []),
        S = (0, s.O)(T),
        A = i.useCallback(() => {
            f.default.track(h.rMx.APP_DIRECTORY_PROFILE_EMBED_VIEWED, {
                application_id: t,
                device_platform: o.tq ? "mobile_web" : "desktop_web",
                sender_user_id: n.author.id,
                guild_id: O,
                channel_id: n.channel_id,
            });
        }, [t, O, n.author.id, n.channel_id]);
    return (i.useEffect(() => {
        (0, _.gZ)(t);
    }, [t]),
    i.useEffect(() => {
        v && y === p.M.FETCHED && A();
    }, [v, y, A]),
    i.useEffect(() => {
        v &&
            b &&
            f.default.track(h.rMx.APP_DIRECTORY_PROFILE_INVALID_EMBED_VIEWED, {
                device_platform: o.tq ? "mobile_web" : "desktop_web",
                sender_user_id: n.author.id,
                guild_id: O,
                channel_id: n.channel_id,
            });
    }, [v, O, b, n.author.id, n.channel_id]),
    b)
        ? (0, r.jsxs)(c.Z, {
              containerRef: S,
              children: [
                  (0, r.jsx)(c.Z.Header, { text: m.intl.string(m.t.j4KtLS) }),
                  (0, r.jsx)(c.Z.Body, {
                      children: (0, r.jsxs)("div", {
                          className: g.invalidBody,
                          children: [
                              (0, r.jsx)(c.Z.Icon, { expired: !0 }),
                              (0, r.jsx)(c.Z.Info, {
                                  expired: !0,
                                  title: m.intl.string(m.t.NaQLEx),
                                  children: m.intl.string(m.t["0H5OT0"]),
                              }),
                          ],
                      }),
                  }),
              ],
          })
        : null == E || y === p.M.FETCHING
          ? (0, r.jsxs)(c.Z, {
                containerRef: S,
                children: [
                    (0, r.jsx)(c.Z.Header, { text: m.intl.string(m.t.m9hXGR) }),
                    (0, r.jsx)(c.Z.Body, { resolving: !0 }),
                ],
            })
          : (0, r.jsx)(l.O, {
                app: u.ZP.createFromServer(E),
                linkType: l.U.APP_DISCOVERY,
                onView: A,
            });
}
