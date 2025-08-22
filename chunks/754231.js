n.d(t, { Z: () => E }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    o = n.n(l),
    a = n(442837),
    s = n(481060),
    c = n(503438),
    u = n(39628),
    d = n(884338),
    p = n(424678),
    h = n(594174),
    f = n(81063),
    g = n(768581),
    m = n(823379),
    b = n(51144),
    O = n(506914);
let y = d.u8.SIZE_24;
function _(e) {
    var t, n;
    let { activity: l, user: o, embeddedApp: a, onOpenSpotifyAlbum: u } = e,
        d = null == l ? void 0 : l.assets,
        p = null == l ? void 0 : l.application_id;
    if (null == l || null == d || (null == d.large_image && null == d.small_image))
        if (null == a) return null;
        else {
            let e = g.ZP.getApplicationIconURL({
                    id: a.application.id,
                    icon: a.application.icon,
                }),
                t = a.application.name;
            return (0, r.jsx)(s.ua7, {
                text: t,
                position: "top",
                children: () =>
                    (0, r.jsx)("img", {
                        alt: t,
                        src: e,
                        className: O.applicationLargeImage,
                    }),
            });
        }
    let h = null != (t = d.large_image) ? t : d.small_image,
        m = (0, c.Z)(l),
        b = m ? O.spotifyLargeImage : O.applicationLargeImage,
        y =
            null != h
                ? (0, r.jsx)("img", {
                      alt: null != (n = d.large_text) ? n : "",
                      src: (0, f.xF)(p, h, [128, 128]),
                      className: b,
                  })
                : null;
    return m && null != u
        ? ((y = (0, r.jsx)(s.P3F, {
              className: O.clickable,
              onClick: () => {
                  u(l, o.id);
              },
              children: y,
          })),
          (0, r.jsx)(s.ua7, {
              text: null != d.large_text ? d.large_text : null,
              position: "top",
              children: (e) => {
                  let { onClick: t } = e,
                      n = (function (e, t) {
                          if (null == e) return {};
                          var n,
                              r,
                              i = (function (e, t) {
                                  if (null == e) return {};
                                  var n,
                                      r,
                                      i = {},
                                      l = Object.keys(e);
                                  for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                                  return i;
                              })(e, t);
                          if (Object.getOwnPropertySymbols) {
                              var l = Object.getOwnPropertySymbols(e);
                              for (r = 0; r < l.length; r++)
                                  (n = l[r]),
                                      !(t.indexOf(n) >= 0) &&
                                          Object.prototype.propertyIsEnumerable.call(e, n) &&
                                          (i[n] = e[n]);
                          }
                          return i;
                      })(e, ["onClick"]);
                  return null != y ? i.cloneElement(y, n) : null;
              },
          }))
        : y;
}
function j(e) {
    let { activity: t, embeddedApp: n, onOpenSpotifyTrack: i } = e,
        l = null == t ? void 0 : t.details,
        o = null == t ? void 0 : t.name,
        a = o;
    if (null != n) a = n.application.name;
    else {
        if (!(null != t && (0, c.Z)(t)) || null == t.sync_id || null == l || null == i) return null;
        (o = l),
            (a = (0, r.jsx)(s.P3F, {
                className: O.headerLink,
                onClick: () => {
                    i(t);
                },
                children: l,
            }));
    }
    return (0, r.jsx)(s.X6q, {
        variant: "heading-sm/semibold",
        color: "header-primary",
        className: O.header,
        children: a,
    });
}
function v(e) {
    let { activity: t, user: n, onOpenSpotifyArtist: i } = e,
        l = null == t ? void 0 : t.details,
        a = null == t ? void 0 : t.state,
        s = l;
    return (null != t &&
        (0, c.Z)(t) &&
        null != a &&
        (s = [
            (0, r.jsx)(
                p.Z,
                {
                    artists: a,
                    linkClassName: O.bodyLink,
                    canOpen: null != t.sync_id,
                    onOpenSpotifyArtist: (e) => {
                        null == i || i(t, n.id, e);
                    },
                },
                a,
            ),
        ]),
    null == s || "" === s)
        ? null
        : (0, r.jsx)("div", {
              className: o()(O.ellipsisRow, O.colorHeaderSecondary, O.bodyTextSize),
              children: s,
          });
}
function x(e) {
    let { activity: t } = e,
        n = null == t ? void 0 : t.state;
    return null == n || "" === n || (0, c.Z)(t)
        ? null
        : (0, r.jsx)("div", {
              className: o()(O.ellipsisRow, O.colorHeaderSecondary, O.bodyTextSize, O.__invalid_activity),
              children: n,
          });
}
function C(e) {
    let { activity: t } = e;
    if (null == t || !(0, c.Z)(t)) return null;
    let { timestamps: n } = t;
    if ((null == n ? void 0 : n.start) == null || (null == n ? void 0 : n.end) == null) return null;
    let { start: i, end: l } = n;
    return (0, r.jsx)(u.Z, {
        start: i,
        end: l,
        className: O.timeBar,
        themed: !0,
        singleLine: !0,
    });
}
function E(e) {
    let {
            activity: t,
            embeddedApp: n,
            user: l,
            channel: o,
            sortedVoiceStates: u,
            onOpenSpotifyTrack: p,
            onOpenSpotifyArtist: f,
            onOpenSpotifyAlbum: g,
        } = e,
        E = [];
    null != n
        ? (E = Array.from(n.embeddedActivity.userIds))
        : (0, c.Z)(t) && null != u && (E = u.map((e) => e.user.id));
    let S = (0, a.Wu)([h.default], () => E.map((e) => h.default.getUser(e)).filter(m.lm)),
        P = null != n || (0, c.Z)(t),
        I = i.useMemo(() => {
            let e = new Map();
            return (
                P &&
                    null != u &&
                    u.forEach((t) => {
                        let n = t.member;
                        null != n && e.set(t.user.id, n);
                    }),
                e
            );
        }, [u, P]);
    return P
        ? (0, r.jsxs)("div", {
              className: O.flexColumn,
              children: [
                  (0, r.jsxs)("div", {
                      className: O.flexRow,
                      children: [
                          (0, r.jsx)(_, {
                              activity: t,
                              user: l,
                              embeddedApp: n,
                              onOpenSpotifyAlbum: g,
                          }),
                          (0, r.jsxs)("div", {
                              className: O.detailsAndAvatarsContainer,
                              children: [
                                  (0, r.jsx)(j, {
                                      activity: t,
                                      embeddedApp: n,
                                      onOpenSpotifyTrack: p,
                                  }),
                                  (0, r.jsx)(v, {
                                      activity: t,
                                      user: l,
                                      onOpenSpotifyArtist: f,
                                  }),
                                  (0, r.jsx)(x, { activity: t }),
                                  E.length > 0 &&
                                      (0, r.jsx)(d.ZP, {
                                          className: O.usersSummary,
                                          guildId: o.guild_id,
                                          users: S,
                                          size: y,
                                          max: 7,
                                          renderUser: (e) => {
                                              var t;
                                              if (null == e || e === d.ag) return null;
                                              let n = I.get(e.id),
                                                  i = null != (t = null == n ? void 0 : n.nick) ? t : b.ZP.getName(e);
                                              return (0, r.jsx)(
                                                  s.DY3,
                                                  {
                                                      text: i,
                                                      position: "bottom",
                                                      children: (0, r.jsx)(
                                                          "img",
                                                          {
                                                              src: e.getAvatarURL(o.guild_id, y),
                                                              alt: i,
                                                              className: O.avatar,
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
                  (0, r.jsx)(C, { activity: t }),
              ],
          })
        : null;
}
