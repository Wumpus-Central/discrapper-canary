n.d(t, {
    A: () => x,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(311907),
    o = n(990078),
    c = n(397927),
    u = n(90644),
    d = n(432166),
    p = n(104171),
    f = n(763758),
    m = n(287809),
    g = n(139675),
    y = n(486020),
    _ = n(403362),
    b = n(427262),
    A = n(6676);
let h = p.DN.SIZE_24;

function v(e) {
    var t, n;
    let { activity: i, user: l, embeddedApp: a, onOpenSpotifyAlbum: s } = e,
        d = null == i ? void 0 : i.assets,
        p = null == i ? void 0 : i.application_id;
    if (null == i || null == d || (null == d.large_image && null == d.small_image))
        if (null == a) return null;
        else {
            let e, t;
            return (
                (e = y.Ay.getApplicationIconURL({
                    id: a.application.id,
                    icon: a.application.icon,
                })),
                (t = a.application.name),
                (0, r.jsx)(o.m, {
                    text: t,
                    position: "top",
                    asContainer: !0,
                    children: (0, r.jsx)("img", {
                        alt: t,
                        src: e,
                        className: A.P3,
                    }),
                })
            );
        }
    let f = null != (t = d.large_image) ? t : d.small_image,
        m = (0, u.A)(i),
        _ = m ? A.RC : A.P3,
        b =
            null != f
                ? (0, r.jsx)("img", {
                      alt: null != (n = d.large_text) ? n : "",
                      src: (0, g.uD)(p, f, [128, 128]),
                      className: _,
                  })
                : null;
    return m && null != s
        ? ((b = (0, r.jsx)(c.DUT, {
              className: A.vk,
              onClick: () => {
                  s(i, l.id);
              },
              children: b,
          })),
          (0, r.jsx)(o.m, {
              text: null != d.large_text ? d.large_text : null,
              position: "top",
              children: b,
          }))
        : b;
}

function O(e) {
    let { activity: t, embeddedApp: n, onOpenSpotifyTrack: i } = e,
        l = null == t ? void 0 : t.details,
        a = null == t ? void 0 : t.name,
        s = a;
    if (null != n) s = n.application.name;
    else {
        if (!(null != t && (0, u.A)(t)) || null == t.sync_id || null == l || null == i) return null;
        (a = l),
            (s = (0, r.jsx)(c.DUT, {
                className: A.wp,
                onClick: () => {
                    i(t);
                },
                children: l,
            }));
    }
    return (0, r.jsx)(c.Heading, {
        variant: "heading-sm/semibold",
        color: "text-strong",
        className: A.wx,
        children: s,
    });
}

function j(e) {
    let { activity: t, user: n, onOpenSpotifyArtist: i } = e,
        l = null == t ? void 0 : t.details,
        s = null == t ? void 0 : t.state,
        o = l;
    return (null != t &&
        (0, u.A)(t) &&
        null != s &&
        (o = [
            (0, r.jsx)(
                f.A,
                {
                    artists: s,
                    linkClassName: A.hw,
                    canOpen: null != t.sync_id,
                    onOpenSpotifyArtist: (e) => {
                        null == i || i(t, n.id, e);
                    },
                },
                s,
            ),
        ]),
    null == o || "" === o)
        ? null
        : (0, r.jsx)("div", {
              className: a()(A.Mo, A.Tf, A.p9),
              children: o,
          });
}

function S(e) {
    let { activity: t } = e,
        n = null == t ? void 0 : t.state;
    return null == n || "" === n || (0, u.A)(t)
        ? null
        : (0, r.jsx)("div", {
              className: a()(A.Mo, A.Tf, A.p9, A.__invalid_activity),
              children: n,
          });
}

function I(e) {
    let { activity: t } = e;
    if (null == t || !(0, u.A)(t)) return null;
    let { timestamps: n } = t;
    if ((null == n ? void 0 : n.start) == null || (null == n ? void 0 : n.end) == null) return null;
    let { start: i, end: l } = n;
    return (0, r.jsx)(d.A, {
        start: i,
        end: l,
        className: A.Jq,
        themed: !0,
        singleLine: !0,
    });
}

function x(e) {
    let {
            activity: t,
            embeddedApp: n,
            user: l,
            channel: a,
            sortedVoiceStates: c,
            onOpenSpotifyTrack: d,
            onOpenSpotifyArtist: f,
            onOpenSpotifyAlbum: g,
        } = e,
        y = [];
    null != n
        ? (y = Array.from(n.embeddedActivity.userIds))
        : (0, u.A)(t) && null != c && (y = c.map((e) => e.user.id));
    let x = (0, s.yK)([m.default], () => y.map((e) => m.default.getUser(e)).filter(_.Vq)),
        E = null != n || (0, u.A)(t),
        P = i.useMemo(() => {
            let e = new Map();
            return (
                E &&
                    null != c &&
                    c.forEach((t) => {
                        let n = t.member;
                        null != n && e.set(t.user.id, n);
                    }),
                e
            );
        }, [c, E]);
    return E
        ? (0, r.jsxs)("div", {
              className: A.ec,
              children: [
                  (0, r.jsxs)("div", {
                      className: A.Wh,
                      children: [
                          (0, r.jsx)(v, {
                              activity: t,
                              user: l,
                              embeddedApp: n,
                              onOpenSpotifyAlbum: g,
                          }),
                          (0, r.jsxs)("div", {
                              className: A.X0,
                              children: [
                                  (0, r.jsx)(O, {
                                      activity: t,
                                      embeddedApp: n,
                                      onOpenSpotifyTrack: d,
                                  }),
                                  (0, r.jsx)(j, {
                                      activity: t,
                                      user: l,
                                      onOpenSpotifyArtist: f,
                                  }),
                                  (0, r.jsx)(S, {
                                      activity: t,
                                  }),
                                  y.length > 0 &&
                                      (0, r.jsx)(p.Ay, {
                                          className: A.TN,
                                          guildId: a.guild_id,
                                          users: x,
                                          size: h,
                                          max: 7,
                                          renderUser: (e) => {
                                              var t;
                                              if (null == e || e === p.mt) return null;
                                              let n = P.get(e.id),
                                                  i = null != (t = null == n ? void 0 : n.nick) ? t : b.Ay.getName(e);
                                              return (0, r.jsx)(
                                                  o.m,
                                                  {
                                                      asContainer: !0,
                                                      text: i,
                                                      position: "bottom",
                                                      children: (0, r.jsx)(
                                                          "img",
                                                          {
                                                              src: e.getAvatarURL(a.guild_id, h),
                                                              alt: i,
                                                              className: A.my,
                                                          },
                                                          e.id,
                                                      ),
                                                  },
                                                  e.id,
                                              );
                                          },
                                      }),
                              ],
                          }),
                      ],
                  }),
                  (0, r.jsx)(I, {
                      activity: t,
                  }),
              ],
          })
        : null;
}
