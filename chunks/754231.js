n.d(t, {
    Z: function () {
        return E;
    }
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    o = n(442837),
    s = n(481060),
    c = n(503438),
    u = n(39628),
    d = n(884338),
    h = n(528144),
    p = n(424678),
    f = n(594174),
    m = n(81063),
    g = n(768581),
    v = n(823379),
    C = n(51144),
    x = n(823469);
let I = d.u.SIZE_24;
function _(e) {
    var t, n;
    let { activity: r, user: a, embeddedApp: o, onOpenSpotifyAlbum: u } = e,
        d = null == r ? void 0 : r.assets,
        h = null == r ? void 0 : r.application_id;
    if (null == r || null == d || (null == d.large_image && null == d.small_image))
        return null != o
            ? (function (e) {
                  let t = g.ZP.getApplicationIconURL({
                          id: e.application.id,
                          icon: e.application.icon
                      }),
                      n = e.application.name;
                  return (0, i.jsx)(s.Tooltip, {
                      text: n,
                      position: 'top',
                      children: () =>
                          (0, i.jsx)('img', {
                              alt: n,
                              src: t,
                              className: x.applicationLargeImage
                          })
                  });
              })(o)
            : null;
    let p = null !== (t = d.large_image) && void 0 !== t ? t : d.small_image,
        f = (0, c.Z)(r),
        v = f ? x.spotifyLargeImage : x.applicationLargeImage,
        C =
            null != p
                ? (0, i.jsx)('img', {
                      alt: null !== (n = d.large_text) && void 0 !== n ? n : '',
                      src: (0, m.getAssetImage)(h, p, [128, 128]),
                      className: v
                  })
                : null;
    return f && null != u
        ? ((C = (0, i.jsx)(s.Clickable, {
              className: x.clickable,
              onClick: () => {
                  u(r, a.id);
              },
              children: C
          })),
          (0, i.jsx)(s.Tooltip, {
              text: null != d.large_text ? d.large_text : null,
              position: 'top',
              children: (e) => {
                  let { onClick: t, ...n } = e;
                  return null != C ? l.cloneElement(C, n) : null;
              }
          }))
        : C;
}
function Z(e) {
    let { activity: t, embeddedApp: n, onOpenSpotifyTrack: l } = e,
        r = null == t ? void 0 : t.details,
        a = null == t ? void 0 : t.name,
        o = a;
    if (null != n) o = n.application.name;
    else {
        if (!(null != t && (0, c.Z)(t)) || null == t.sync_id || null == r || null == l) return null;
        (a = r),
            (o = (0, i.jsx)(s.Clickable, {
                className: x.headerLink,
                onClick: () => {
                    l(t);
                },
                children: r
            }));
    }
    return (0, i.jsx)(h.Z, {
        title: a,
        className: x.header,
        children: o
    });
}
function b(e) {
    let { activity: t, user: n, onOpenSpotifyArtist: l } = e,
        r = null == t ? void 0 : t.details,
        o = null == t ? void 0 : t.state,
        s = r;
    return (null != t &&
        (0, c.Z)(t) &&
        null != o &&
        (s = [
            (0, i.jsx)(
                p.Z,
                {
                    artists: o,
                    linkClassName: x.bodyLink,
                    canOpen: null != t.sync_id,
                    onOpenSpotifyArtist: (e) => {
                        null == l || l(t, n.id, e);
                    }
                },
                o
            )
        ]),
    null == s || '' === s)
        ? null
        : (0, i.jsx)('div', {
              className: a()(x.ellipsisRow, x.colorHeaderSecondary, x.bodyTextSize),
              children: s
          });
}
function S(e) {
    let { activity: t } = e,
        n = null == t ? void 0 : t.state;
    return null == n || '' === n || (0, c.Z)(t)
        ? null
        : (0, i.jsx)('div', {
              className: a()(x.ellipsisRow, x.colorHeaderSecondary, x.bodyTextSize, x.__invalid_activity),
              children: n
          });
}
function N(e) {
    let { activity: t } = e;
    if (null == t || !(0, c.Z)(t)) return null;
    let { timestamps: n } = t;
    if ((null == n ? void 0 : n.start) == null || (null == n ? void 0 : n.end) == null) return null;
    let { start: l, end: r } = n;
    return (0, i.jsx)(u.Z, {
        start: l,
        end: r,
        className: x.timeBar,
        themed: !0,
        singleLine: !0
    });
}
function E(e) {
    let { activity: t, embeddedApp: n, user: r, channel: a, sortedVoiceStates: u, onOpenSpotifyTrack: h, onOpenSpotifyArtist: p, onOpenSpotifyAlbum: m } = e,
        g = [];
    null != n ? (g = Array.from(n.embeddedActivity.userIds)) : (0, c.Z)(t) && null != u && (g = u.map((e) => e.user.id));
    let E = (0, o.Wu)([f.default], () => g.map((e) => f.default.getUser(e)).filter(v.lm)),
        y = null != n || (0, c.Z)(t),
        j = l.useMemo(() => {
            let e = new Map();
            return (
                y &&
                    null != u &&
                    u.forEach((t) => {
                        let n = t.member;
                        null != n && e.set(t.user.id, n);
                    }),
                e
            );
        }, [u, y]);
    return y
        ? (0, i.jsxs)('div', {
              className: x.flexColumn,
              children: [
                  (0, i.jsxs)('div', {
                      className: x.flexRow,
                      children: [
                          (0, i.jsx)(_, {
                              activity: t,
                              user: r,
                              embeddedApp: n,
                              onOpenSpotifyAlbum: m
                          }),
                          (0, i.jsxs)('div', {
                              className: x.detailsAndAvatarsContainer,
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
                                  g.length > 0 &&
                                      (0, i.jsx)(d.Z, {
                                          className: x.usersSummary,
                                          guildId: a.guild_id,
                                          users: E,
                                          size: I,
                                          max: 7,
                                          renderUser: (e) => {
                                              var t;
                                              if (null == e) return null;
                                              let n = j.get(e.id),
                                                  l = null !== (t = null == n ? void 0 : n.nick) && void 0 !== t ? t : C.ZP.getName(e);
                                              return (0, i.jsx)(
                                                  s.TooltipContainer,
                                                  {
                                                      text: l,
                                                      position: 'bottom',
                                                      children: (0, i.jsx)(
                                                          'img',
                                                          {
                                                              src: e.getAvatarURL(a.guild_id, I),
                                                              alt: l,
                                                              className: x.avatar
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
