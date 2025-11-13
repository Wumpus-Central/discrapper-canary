n.d(t, { Z: () => S }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    o = n.n(l),
    a = n(442837),
    s = n(28664),
    c = n(481060),
    u = n(503438),
    d = n(39628),
    p = n(884338),
    h = n(424678),
    f = n(594174),
    g = n(81063),
    m = n(768581),
    b = n(823379),
    _ = n(51144),
    y = n(506914);
let O = p.u8.SIZE_24;
function v(e) {
    var t, n;
    let { activity: i, user: l, embeddedApp: o, onOpenSpotifyAlbum: a } = e,
        d = null == i ? void 0 : i.assets,
        p = null == i ? void 0 : i.application_id;
    if (null == i || null == d || (null == d.large_image && null == d.small_image))
        if (null == o) return null;
        else {
            let e = m.ZP.getApplicationIconURL({
                    id: o.application.id,
                    icon: o.application.icon,
                }),
                t = o.application.name;
            return (0, r.jsx)(s.u, {
                text: t,
                position: "top",
                asContainer: !0,
                children: (0, r.jsx)("img", {
                    alt: t,
                    src: e,
                    className: y.applicationLargeImage,
                }),
            });
        }
    let h = null != (t = d.large_image) ? t : d.small_image,
        f = (0, u.Z)(i),
        b = f ? y.spotifyLargeImage : y.applicationLargeImage,
        _ =
            null != h
                ? (0, r.jsx)("img", {
                      alt: null != (n = d.large_text) ? n : "",
                      src: (0, g.xF)(p, h, [128, 128]),
                      className: b,
                  })
                : null;
    return f && null != a
        ? ((_ = (0, r.jsx)(c.P3F, {
              className: y.clickable,
              onClick: () => {
                  a(i, l.id);
              },
              children: _,
          })),
          (0, r.jsx)(s.u, {
              text: null != d.large_text ? d.large_text : null,
              position: "top",
              children: _,
          }))
        : _;
}
function j(e) {
    let { activity: t, embeddedApp: n, onOpenSpotifyTrack: i } = e,
        l = null == t ? void 0 : t.details,
        o = null == t ? void 0 : t.name,
        a = o;
    if (null != n) a = n.application.name;
    else {
        if (!(null != t && (0, u.Z)(t)) || null == t.sync_id || null == l || null == i) return null;
        (o = l),
            (a = (0, r.jsx)(c.P3F, {
                className: y.headerLink,
                onClick: () => {
                    i(t);
                },
                children: l,
            }));
    }
    return (0, r.jsx)(c.Heading, {
        variant: "heading-sm/semibold",
        color: "header-primary",
        className: y.header,
        children: a,
    });
}
function x(e) {
    let { activity: t, user: n, onOpenSpotifyArtist: i } = e,
        l = null == t ? void 0 : t.details,
        a = null == t ? void 0 : t.state,
        s = l;
    return (null != t &&
        (0, u.Z)(t) &&
        null != a &&
        (s = [
            (0, r.jsx)(
                h.Z,
                {
                    artists: a,
                    linkClassName: y.bodyLink,
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
              className: o()(y.ellipsisRow, y.colorHeaderSecondary, y.bodyTextSize),
              children: s,
          });
}
function C(e) {
    let { activity: t } = e,
        n = null == t ? void 0 : t.state;
    return null == n || "" === n || (0, u.Z)(t)
        ? null
        : (0, r.jsx)("div", {
              className: o()(y.ellipsisRow, y.colorHeaderSecondary, y.bodyTextSize, y.__invalid_activity),
              children: n,
          });
}
function E(e) {
    let { activity: t } = e;
    if (null == t || !(0, u.Z)(t)) return null;
    let { timestamps: n } = t;
    if ((null == n ? void 0 : n.start) == null || (null == n ? void 0 : n.end) == null) return null;
    let { start: i, end: l } = n;
    return (0, r.jsx)(d.Z, {
        start: i,
        end: l,
        className: y.timeBar,
        themed: !0,
        singleLine: !0,
    });
}
function S(e) {
    let {
            activity: t,
            embeddedApp: n,
            user: l,
            channel: o,
            sortedVoiceStates: c,
            onOpenSpotifyTrack: d,
            onOpenSpotifyArtist: h,
            onOpenSpotifyAlbum: g,
        } = e,
        m = [];
    null != n
        ? (m = Array.from(n.embeddedActivity.userIds))
        : (0, u.Z)(t) && null != c && (m = c.map((e) => e.user.id));
    let S = (0, a.Wu)([f.default], () => m.map((e) => f.default.getUser(e)).filter(b.lm)),
        I = null != n || (0, u.Z)(t),
        P = i.useMemo(() => {
            let e = new Map();
            return (
                I &&
                    null != c &&
                    c.forEach((t) => {
                        let n = t.member;
                        null != n && e.set(t.user.id, n);
                    }),
                e
            );
        }, [c, I]);
    return I
        ? (0, r.jsxs)("div", {
              className: y.flexColumn,
              children: [
                  (0, r.jsxs)("div", {
                      className: y.flexRow,
                      children: [
                          (0, r.jsx)(v, {
                              activity: t,
                              user: l,
                              embeddedApp: n,
                              onOpenSpotifyAlbum: g,
                          }),
                          (0, r.jsxs)("div", {
                              className: y.detailsAndAvatarsContainer,
                              children: [
                                  (0, r.jsx)(j, {
                                      activity: t,
                                      embeddedApp: n,
                                      onOpenSpotifyTrack: d,
                                  }),
                                  (0, r.jsx)(x, {
                                      activity: t,
                                      user: l,
                                      onOpenSpotifyArtist: h,
                                  }),
                                  (0, r.jsx)(C, { activity: t }),
                                  m.length > 0 &&
                                      (0, r.jsx)(p.ZP, {
                                          className: y.usersSummary,
                                          guildId: o.guild_id,
                                          users: S,
                                          size: O,
                                          max: 7,
                                          renderUser: (e) => {
                                              var t;
                                              if (null == e || e === p.ag) return null;
                                              let n = P.get(e.id),
                                                  i = null != (t = null == n ? void 0 : n.nick) ? t : _.ZP.getName(e);
                                              return (0, r.jsx)(
                                                  s.u,
                                                  {
                                                      asContainer: !0,
                                                      text: i,
                                                      position: "bottom",
                                                      children: (0, r.jsx)(
                                                          "img",
                                                          {
                                                              src: e.getAvatarURL(o.guild_id, O),
                                                              alt: i,
                                                              className: y.avatar,
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
                  (0, r.jsx)(E, { activity: t }),
              ],
          })
        : null;
}
