n.d(t, { Z: () => E }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(907331),
    o = n(873546),
    s = n(399606),
    l = n(230171),
    c = n(955415),
    u = n(973616),
    d = n(914010),
    f = n(626135),
    p = n(471518),
    _ = n(370210),
    m = n(981631),
    h = n(388032),
    g = n(923289);
function E(e) {
    let { code: t, message: n } = e,
        [E, b, y] = (0, s.Wu)(
            [_.Z],
            () => [_.Z.getApplication(t), _.Z.isInvalidApplication(t), _.Z.getApplicationFetchState(t)],
            [t],
        ),
        O = (0, s.e7)([d.Z], () => {
            var e;
            return null != (e = d.Z.getGuildId()) ? e : void 0;
        }),
        [v, S] = i.useState(!1),
        I = i.useCallback((e) => {
            e && S(!0);
        }, []),
        T = (0, a.O)(I),
        A = i.useCallback(() => {
            f.default.track(m.rMx.APP_DIRECTORY_PROFILE_EMBED_VIEWED, {
                application_id: t,
                device_platform: o.tq ? "mobile_web" : "desktop_web",
                sender_user_id: n.author.id,
                guild_id: O,
                channel_id: n.channel_id,
            });
        }, [t, O, n.author.id, n.channel_id]);
    return (i.useEffect(() => {
        (0, p.gZ)(t);
    }, [t]),
    i.useEffect(() => {
        v && y === _.M.FETCHED && A();
    }, [v, y, A]),
    i.useEffect(() => {
        v &&
            b &&
            f.default.track(m.rMx.APP_DIRECTORY_PROFILE_INVALID_EMBED_VIEWED, {
                device_platform: o.tq ? "mobile_web" : "desktop_web",
                sender_user_id: n.author.id,
                guild_id: O,
                channel_id: n.channel_id,
            });
    }, [v, O, b, n.author.id, n.channel_id]),
    b)
        ? (0, r.jsxs)(c.Z, {
              containerRef: T,
              children: [
                  (0, r.jsx)(c.Z.Header, { text: h.intl.string(h.t.j4KtLa) }),
                  (0, r.jsx)(c.Z.Body, {
                      children: (0, r.jsxs)("div", {
                          className: g.invalidBody,
                          children: [
                              (0, r.jsx)(c.Z.Icon, { expired: !0 }),
                              (0, r.jsx)(c.Z.Info, {
                                  expired: !0,
                                  title: h.intl.string(h.t.NaQLEx),
                                  children: h.intl.string(h.t["0H5OT2"]),
                              }),
                          ],
                      }),
                  }),
              ],
          })
        : null == E || y === _.M.FETCHING
          ? (0, r.jsxs)(c.Z, {
                containerRef: T,
                children: [
                    (0, r.jsx)(c.Z.Header, { text: h.intl.string(h.t.m9hXGR) }),
                    (0, r.jsx)(c.Z.Body, { resolving: !0 }),
                ],
            })
          : (0, r.jsx)(l.O, {
                app: u.ZP.createFromServer(E),
                linkType: l.U.APP_DISCOVERY,
                onView: A,
                message: n,
            });
}
