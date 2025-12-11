n.d(t, { Z: () => I }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
    s = n(28664),
    c = n(481060),
    u = n(503438),
    d = n(39628),
    f = n(884338),
    h = n(424678),
    p = n(594174),
    g = n(81063),
    b = n(768581),
    m = n(823379),
    y = n(51144),
    O = n(273676);
let v = f.u8.SIZE_24;
function j(e) {
    var t, n;
    let { activity: i, user: l, embeddedApp: a, onOpenSpotifyAlbum: o } = e,
        d = null == i ? void 0 : i.assets,
        f = null == i ? void 0 : i.application_id;
    if (null == i || null == d || (null == d.large_image && null == d.small_image))
        if (null == a) return null;
        else {
            let e = b.ZP.getApplicationIconURL({
                    id: a.application.id,
                    icon: a.application.icon,
                }),
                t = a.application.name;
            return (0, r.jsx)(s.u, {
                text: t,
                position: "top",
                asContainer: !0,
                children: (0, r.jsx)("img", {
                    alt: t,
                    src: e,
                    className: O.applicationLargeImage,
                }),
            });
        }
    let h = null != (t = d.large_image) ? t : d.small_image,
        p = (0, u.Z)(i),
        m = p ? O.spotifyLargeImage : O.applicationLargeImage,
        y =
            null != h
                ? (0, r.jsx)("img", {
                      alt: null != (n = d.large_text) ? n : "",
                      src: (0, g.xF)(f, h, [128, 128]),
                      className: m,
                  })
                : null;
    return p && null != o
        ? ((y = (0, r.jsx)(c.P3F, {
              className: O.clickable,
              onClick: () => {
                  o(i, l.id);
              },
              children: y,
          })),
          (0, r.jsx)(s.u, {
              text: null != d.large_text ? d.large_text : null,
              position: "top",
              children: y,
          }))
        : y;
}
function C(e) {
    let { activity: t, embeddedApp: n, onOpenSpotifyTrack: i } = e,
        l = null == t ? void 0 : t.details,
        a = null == t ? void 0 : t.name,
        o = a;
    if (null != n) o = n.application.name;
    else {
        if (!(null != t && (0, u.Z)(t)) || null == t.sync_id || null == l || null == i) return null;
        (a = l),
            (o = (0, r.jsx)(c.P3F, {
                className: O.headerLink,
                onClick: () => {
                    i(t);
                },
                children: l,
            }));
    }
    return (0, r.jsx)(c.Heading, {
        variant: "heading-sm/semibold",
        color: "text-strong",
        className: O.header,
        children: o,
    });
}
function x(e) {
    let { activity: t, user: n, onOpenSpotifyArtist: i } = e,
        l = null == t ? void 0 : t.details,
        o = null == t ? void 0 : t.state,
        s = l;
    return (null != t &&
        (0, u.Z)(t) &&
        null != o &&
        (s = [
            (0, r.jsx)(
                h.Z,
                {
                    artists: o,
                    linkClassName: O.bodyLink,
                    canOpen: null != t.sync_id,
                    onOpenSpotifyArtist: (e) => {
                        null == i || i(t, n.id, e);
                    },
                },
                o,
            ),
        ]),
    null == s || "" === s)
        ? null
        : (0, r.jsx)("div", {
              className: a()(O.ellipsisRow, O.colorHeaderSecondary, O.bodyTextSize),
              children: s,
          });
}
function E(e) {
    let { activity: t } = e,
        n = null == t ? void 0 : t.state;
    return null == n || "" === n || (0, u.Z)(t)
        ? null
        : (0, r.jsx)("div", {
              className: a()(O.ellipsisRow, O.colorHeaderSecondary, O.bodyTextSize, O.__invalid_activity),
              children: n,
          });
}
function S(e) {
    let { activity: t } = e;
    if (null == t || !(0, u.Z)(t)) return null;
    let { timestamps: n } = t;
    if ((null == n ? void 0 : n.start) == null || (null == n ? void 0 : n.end) == null) return null;
    let { start: i, end: l } = n;
    return (0, r.jsx)(d.Z, {
        start: i,
        end: l,
        className: O.timeBar,
        themed: !0,
        singleLine: !0,
    });
}
function I(e) {
    let {
            activity: t,
            embeddedApp: n,
            user: l,
            channel: a,
            sortedVoiceStates: c,
            onOpenSpotifyTrack: d,
            onOpenSpotifyArtist: h,
            onOpenSpotifyAlbum: g,
        } = e,
        b = [];
    null != n
        ? (b = Array.from(n.embeddedActivity.userIds))
        : (0, u.Z)(t) && null != c && (b = c.map((e) => e.user.id));
    let I = (0, o.Wu)([p.default], () => b.map((e) => p.default.getUser(e)).filter(m.lm)),
        _ = null != n || (0, u.Z)(t),
        P = i.useMemo(() => {
            let e = new Map();
            return (
                _ &&
                    null != c &&
                    c.forEach((t) => {
                        let n = t.member;
                        null != n && e.set(t.user.id, n);
                    }),
                e
            );
        }, [c, _]);
    return _
        ? (0, r.jsxs)("div", {
              className: O.flexColumn,
              children: [
                  (0, r.jsxs)("div", {
                      className: O.flexRow,
                      children: [
                          (0, r.jsx)(j, {
                              activity: t,
                              user: l,
                              embeddedApp: n,
                              onOpenSpotifyAlbum: g,
                          }),
                          (0, r.jsxs)("div", {
                              className: O.detailsAndAvatarsContainer,
                              children: [
                                  (0, r.jsx)(C, {
                                      activity: t,
                                      embeddedApp: n,
                                      onOpenSpotifyTrack: d,
                                  }),
                                  (0, r.jsx)(x, {
                                      activity: t,
                                      user: l,
                                      onOpenSpotifyArtist: h,
                                  }),
                                  (0, r.jsx)(E, { activity: t }),
                                  b.length > 0 &&
                                      (0, r.jsx)(f.ZP, {
                                          className: O.usersSummary,
                                          guildId: a.guild_id,
                                          users: I,
                                          size: v,
                                          max: 7,
                                          renderUser: (e) => {
                                              var t;
                                              if (null == e || e === f.ag) return null;
                                              let n = P.get(e.id),
                                                  i = null != (t = null == n ? void 0 : n.nick) ? t : y.ZP.getName(e);
                                              return (0, r.jsx)(
                                                  s.u,
                                                  {
                                                      asContainer: !0,
                                                      text: i,
                                                      position: "bottom",
                                                      children: (0, r.jsx)(
                                                          "img",
                                                          {
                                                              src: e.getAvatarURL(a.guild_id, v),
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
                  (0, r.jsx)(S, { activity: t }),
              ],
          })
        : null;
}
