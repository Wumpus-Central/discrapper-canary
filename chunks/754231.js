n.d(t, { Z: () => E }), n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    o = n.n(r),
    a = n(442837),
    s = n(481060),
    c = n(503438),
    d = n(39628),
    u = n(884338),
    h = n(528144),
    p = n(424678),
    m = n(594174),
    g = n(81063),
    f = n(768581),
    _ = n(823379),
    v = n(51144),
    C = n(597024);
let x = u.u.SIZE_24;
function I(e) {
    var t, n;
    let { activity: r, user: o, embeddedApp: a, onOpenSpotifyAlbum: d } = e,
        u = null == r ? void 0 : r.assets,
        h = null == r ? void 0 : r.application_id;
    if (null == r || null == u || (null == u.large_image && null == u.small_image))
        return null != a
            ? (function (e) {
                  let t = f.ZP.getApplicationIconURL({
                          id: e.application.id,
                          icon: e.application.icon
                      }),
                      n = e.application.name;
                  return (0, i.jsx)(s.ua7, {
                      text: n,
                      position: 'top',
                      children: () =>
                          (0, i.jsx)('img', {
                              alt: n,
                              src: t,
                              className: C.applicationLargeImage
                          })
                  });
              })(a)
            : null;
    let p = null !== (t = u.large_image) && void 0 !== t ? t : u.small_image,
        m = (0, c.Z)(r),
        _ = m ? C.spotifyLargeImage : C.applicationLargeImage,
        v =
            null != p
                ? (0, i.jsx)('img', {
                      alt: null !== (n = u.large_text) && void 0 !== n ? n : '',
                      src: (0, g.getAssetImage)(h, p, [128, 128]),
                      className: _
                  })
                : null;
    return m && null != d
        ? ((v = (0, i.jsx)(s.P3F, {
              className: C.clickable,
              onClick: () => {
                  d(r, o.id);
              },
              children: v
          })),
          (0, i.jsx)(s.ua7, {
              text: null != u.large_text ? u.large_text : null,
              position: 'top',
              children: (e) => {
                  let { onClick: t, ...n } = e;
                  return null != v ? l.cloneElement(v, n) : null;
              }
          }))
        : v;
}
function Z(e) {
    let { activity: t, embeddedApp: n, onOpenSpotifyTrack: l } = e,
        r = null == t ? void 0 : t.details,
        o = null == t ? void 0 : t.name,
        a = o;
    if (null != n) a = n.application.name;
    else {
        if (!(null != t && (0, c.Z)(t)) || null == t.sync_id || null == r || null == l) return null;
        (o = r),
            (a = (0, i.jsx)(s.P3F, {
                className: C.headerLink,
                onClick: () => {
                    l(t);
                },
                children: r
            }));
    }
    return (0, i.jsx)(h.Z, {
        title: o,
        className: C.header,
        children: a
    });
}
function b(e) {
    let { activity: t, user: n, onOpenSpotifyArtist: l } = e,
        r = null == t ? void 0 : t.details,
        a = null == t ? void 0 : t.state,
        s = r;
    return (null != t &&
        (0, c.Z)(t) &&
        null != a &&
        (s = [
            (0, i.jsx)(
                p.Z,
                {
                    artists: a,
                    linkClassName: C.bodyLink,
                    canOpen: null != t.sync_id,
                    onOpenSpotifyArtist: (e) => {
                        null == l || l(t, n.id, e);
                    }
                },
                a
            )
        ]),
    null == s || '' === s)
        ? null
        : (0, i.jsx)('div', {
              className: o()(C.ellipsisRow, C.colorHeaderSecondary, C.bodyTextSize),
              children: s
          });
}
function S(e) {
    let { activity: t } = e,
        n = null == t ? void 0 : t.state;
    return null == n || '' === n || (0, c.Z)(t)
        ? null
        : (0, i.jsx)('div', {
              className: o()(C.ellipsisRow, C.colorHeaderSecondary, C.bodyTextSize, C.__invalid_activity),
              children: n
          });
}
function N(e) {
    let { activity: t } = e;
    if (null == t || !(0, c.Z)(t)) return null;
    let { timestamps: n } = t;
    if ((null == n ? void 0 : n.start) == null || (null == n ? void 0 : n.end) == null) return null;
    let { start: l, end: r } = n;
    return (0, i.jsx)(d.Z, {
        start: l,
        end: r,
        className: C.timeBar,
        themed: !0,
        singleLine: !0
    });
}
function E(e) {
    let { activity: t, embeddedApp: n, user: r, channel: o, sortedVoiceStates: d, onOpenSpotifyTrack: h, onOpenSpotifyArtist: p, onOpenSpotifyAlbum: g } = e,
        f = [];
    null != n ? (f = Array.from(n.embeddedActivity.userIds)) : (0, c.Z)(t) && null != d && (f = d.map((e) => e.user.id));
    let E = (0, a.Wu)([m.default], () => f.map((e) => m.default.getUser(e)).filter(_.lm)),
        j = null != n || (0, c.Z)(t),
        y = l.useMemo(() => {
            let e = new Map();
            return (
                j &&
                    null != d &&
                    d.forEach((t) => {
                        let n = t.member;
                        null != n && e.set(t.user.id, n);
                    }),
                e
            );
        }, [d, j]);
    return j
        ? (0, i.jsxs)('div', {
              className: C.flexColumn,
              children: [
                  (0, i.jsxs)('div', {
                      className: C.flexRow,
                      children: [
                          (0, i.jsx)(I, {
                              activity: t,
                              user: r,
                              embeddedApp: n,
                              onOpenSpotifyAlbum: g
                          }),
                          (0, i.jsxs)('div', {
                              className: C.detailsAndAvatarsContainer,
                              children: [
                                  (0, i.jsx)(Z, {
                                      activity: t,
                                      embeddedApp: n,
                                      onOpenSpotifyTrack: h
                                  }),
                                  (0, i.jsx)(b, {
                                      activity: t,
                                      user: r,
                                      onOpenSpotifyArtist: p
                                  }),
                                  (0, i.jsx)(S, { activity: t }),
                                  f.length > 0 &&
                                      (0, i.jsx)(u.Z, {
                                          className: C.usersSummary,
                                          guildId: o.guild_id,
                                          users: E,
                                          size: x,
                                          max: 7,
                                          renderUser: (e) => {
                                              var t;
                                              if (null == e) return null;
                                              let n = y.get(e.id),
                                                  l = null !== (t = null == n ? void 0 : n.nick) && void 0 !== t ? t : v.ZP.getName(e);
                                              return (0, i.jsx)(
                                                  s.DY3,
                                                  {
                                                      text: l,
                                                      position: 'bottom',
                                                      children: (0, i.jsx)(
                                                          'img',
                                                          {
                                                              src: e.getAvatarURL(o.guild_id, x),
                                                              alt: l,
                                                              className: C.avatar
                                                          },
                                                          e.id
                                                      )
                                                  },
                                                  e.id
                                              );
                                          }
                                      })
                              ]
                          })
                      ]
                  }),
                  (0, i.jsx)(N, { activity: t })
              ]
          })
        : null;
}
