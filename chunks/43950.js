n.d(t, { A: () => C }), n(896048);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(311907),
    o = n(990078),
    c = n(397927),
    u = n(90644),
    d = n(432166),
    f = n(104171),
    p = n(763758),
    h = n(287809),
    b = n(139675),
    g = n(486020),
    m = n(403362),
    A = n(427262),
    y = n(6676);
let O = f.DN.SIZE_24;
function j(e) {
    var t, n;
    let { activity: l, user: i, embeddedApp: a, onOpenSpotifyAlbum: s } = e,
        d = null == l ? void 0 : l.assets,
        f = null == l ? void 0 : l.application_id;
    if (null == l || null == d || (null == d.large_image && null == d.small_image))
        if (null == a) return null;
        else {
            let e, t;
            return (
                (e = g.Ay.getApplicationIconURL({
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
                        className: y.P3,
                    }),
                })
            );
        }
    let p = null != (t = d.large_image) ? t : d.small_image,
        h = (0, u.A)(l),
        m = h ? y.RC : y.P3,
        A =
            null != p
                ? (0, r.jsx)("img", {
                      alt: null != (n = d.large_text) ? n : "",
                      src: (0, b.uD)(f, p, [128, 128]),
                      className: m,
                  })
                : null;
    return h && null != s
        ? ((A = (0, r.jsx)(c.DUT, {
              className: y.vk,
              onClick: () => {
                  s(l, i.id);
              },
              children: A,
          })),
          (0, r.jsx)(o.m, {
              text: null != d.large_text ? d.large_text : null,
              position: "top",
              children: A,
          }))
        : A;
}
function v(e) {
    let { activity: t, embeddedApp: n, onOpenSpotifyTrack: l } = e,
        i = null == t ? void 0 : t.details,
        a = null == t ? void 0 : t.name,
        s = a;
    if (null != n) s = n.application.name;
    else {
        if (!(null != t && (0, u.A)(t)) || null == t.sync_id || null == i || null == l) return null;
        (a = i),
            (s = (0, r.jsx)(c.DUT, {
                className: y.wp,
                onClick: () => {
                    l(t);
                },
                children: i,
            }));
    }
    return (0, r.jsx)(c.Heading, {
        variant: "heading-sm/semibold",
        color: "text-strong",
        className: y.wx,
        children: s,
    });
}
function x(e) {
    let { activity: t, user: n, onOpenSpotifyArtist: l } = e,
        i = null == t ? void 0 : t.details,
        s = null == t ? void 0 : t.state,
        o = i;
    return (null != t &&
        (0, u.A)(t) &&
        null != s &&
        (o = [
            (0, r.jsx)(
                p.A,
                {
                    artists: s,
                    linkClassName: y.hw,
                    canOpen: null != t.sync_id,
                    onOpenSpotifyArtist: (e) => {
                        null == l || l(t, n.id, e);
                    },
                },
                s,
            ),
        ]),
    null == o || "" === o)
        ? null
        : (0, r.jsx)("div", {
              className: a()(y.Mo, y.Tf, y.p9),
              children: o,
          });
}
function E(e) {
    let { activity: t } = e,
        n = null == t ? void 0 : t.state;
    return null == n || "" === n || (0, u.A)(t)
        ? null
        : (0, r.jsx)("div", {
              className: a()(y.Mo, y.Tf, y.p9, y.__invalid_activity),
              children: n,
          });
}
function _(e) {
    let { activity: t } = e;
    if (null == t || !(0, u.A)(t)) return null;
    let { timestamps: n } = t;
    if ((null == n ? void 0 : n.start) == null || (null == n ? void 0 : n.end) == null) return null;
    let { start: l, end: i } = n;
    return (0, r.jsx)(d.A, {
        start: l,
        end: i,
        className: y.Jq,
        themed: !0,
        singleLine: !0,
    });
}
function C(e) {
    let {
            activity: t,
            embeddedApp: n,
            user: i,
            channel: a,
            sortedVoiceStates: c,
            onOpenSpotifyTrack: d,
            onOpenSpotifyArtist: p,
            onOpenSpotifyAlbum: b,
        } = e,
        g = [];
    null != n
        ? (g = Array.from(n.embeddedActivity.userIds))
        : (0, u.A)(t) && null != c && (g = c.map((e) => e.user.id));
    let C = (0, s.yK)([h.default], () => g.map((e) => h.default.getUser(e)).filter(m.Vq)),
        S = null != n || (0, u.A)(t),
        I = l.useMemo(() => {
            let e = new Map();
            return (
                S &&
                    null != c &&
                    c.forEach((t) => {
                        let n = t.member;
                        null != n && e.set(t.user.id, n);
                    }),
                e
            );
        }, [c, S]);
    return S
        ? (0, r.jsxs)("div", {
              className: y.ec,
              children: [
                  (0, r.jsxs)("div", {
                      className: y.Wh,
                      children: [
                          (0, r.jsx)(j, {
                              activity: t,
                              user: i,
                              embeddedApp: n,
                              onOpenSpotifyAlbum: b,
                          }),
                          (0, r.jsxs)("div", {
                              className: y.X0,
                              children: [
                                  (0, r.jsx)(v, {
                                      activity: t,
                                      embeddedApp: n,
                                      onOpenSpotifyTrack: d,
                                  }),
                                  (0, r.jsx)(x, {
                                      activity: t,
                                      user: i,
                                      onOpenSpotifyArtist: p,
                                  }),
                                  (0, r.jsx)(E, { activity: t }),
                                  g.length > 0 &&
                                      (0, r.jsx)(f.Ay, {
                                          className: y.TN,
                                          guildId: a.guild_id,
                                          users: C,
                                          size: O,
                                          max: 7,
                                          renderUser: (e) => {
                                              var t;
                                              if (null == e || e === f.mt) return null;
                                              let n = I.get(e.id),
                                                  l = null != (t = null == n ? void 0 : n.nick) ? t : A.Ay.getName(e);
                                              return (0, r.jsx)(
                                                  o.m,
                                                  {
                                                      asContainer: !0,
                                                      text: l,
                                                      position: "bottom",
                                                      children: (0, r.jsx)(
                                                          "img",
                                                          {
                                                              src: e.getAvatarURL(a.guild_id, O),
                                                              alt: l,
                                                              className: y.my,
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
                  (0, r.jsx)(_, { activity: t }),
              ],
          })
        : null;
}
