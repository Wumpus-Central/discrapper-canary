n.d(t, { A: () => T });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(311907),
    o = n(990078),
    d = n(397927),
    c = n(90644),
    u = n(432166),
    h = n(104171),
    A = n(763758),
    g = n(287809),
    m = n(139675),
    p = n(486020),
    _ = n(403362),
    x = n(427262),
    f = n(6676);
let E = h.DN.SIZE_24;
function C(e) {
    let { activity: t, user: n, embeddedApp: l, onOpenSpotifyAlbum: s } = e,
        a = t?.assets,
        r = t?.application_id;
    if (null == t || null == a || (null == a.large_image && null == a.small_image))
        if (null == l) return null;
        else {
            let e, t;
            return (
                (e = p.Ay.getApplicationIconURL({ id: l.application.id, icon: l.application.icon })),
                (t = l.application.name),
                (0, i.jsx)(o.m, {
                    text: t,
                    position: "top",
                    asContainer: !0,
                    children: (0, i.jsx)("img", { alt: t, src: e, className: f.P3 }),
                })
            );
        }
    let u = a.large_image ?? a.small_image,
        h = (0, c.A)(t),
        A = h ? f.RC : f.P3,
        g =
            null != u
                ? (0, i.jsx)("img", { alt: a.large_text ?? "", src: (0, m.uD)(r, u, [128, 128]), className: A })
                : null;
    return h && null != s
        ? ((g = (0, i.jsx)(d.DUT, {
              className: f.vk,
              onClick: () => {
                  s(t, n.id);
              },
              children: g,
          })),
          (0, i.jsx)(o.m, { text: null != a.large_text ? a.large_text : null, position: "top", children: g }))
        : g;
}
function I(e) {
    let { activity: t, embeddedApp: n, onOpenSpotifyTrack: l } = e,
        s = t?.details,
        a = t?.name,
        r = a;
    if (null != n) r = n.application.name;
    else {
        if (!(null != t && (0, c.A)(t)) || null == t.sync_id || null == s || null == l) return null;
        (a = s),
            (r = (0, i.jsx)(d.DUT, {
                className: f.wp,
                onClick: () => {
                    l(t);
                },
                children: s,
            }));
    }
    return (0, i.jsx)(d.Heading, {
        variant: "heading-sm/semibold",
        color: "text-strong",
        className: f.wx,
        children: r,
    });
}
function S(e) {
    let { activity: t, user: n, onOpenSpotifyArtist: l } = e,
        s = t?.details,
        r = t?.state,
        o = s;
    return (null != t &&
        (0, c.A)(t) &&
        null != r &&
        (o = [
            (0, i.jsx)(
                A.A,
                {
                    artists: r,
                    linkClassName: f.hw,
                    canOpen: null != t.sync_id,
                    onOpenSpotifyArtist: (e) => {
                        l?.(t, n.id, e);
                    },
                },
                r,
            ),
        ]),
    null == o || "" === o)
        ? null
        : (0, i.jsx)("div", { className: a()(f.Mo, f.Tf, f.p9), children: o });
}
function b(e) {
    let { activity: t } = e,
        n = t?.state;
    return null == n || "" === n || (0, c.A)(t)
        ? null
        : (0, i.jsx)("div", { className: a()(f.Mo, f.Tf, f.p9, f.__invalid_activity), children: n });
}
function N(e) {
    let { activity: t } = e;
    if (null == t || !(0, c.A)(t)) return null;
    let { timestamps: n } = t;
    if (n?.start == null || n?.end == null) return null;
    let { start: l, end: s } = n;
    return (0, i.jsx)(u.A, { start: l, end: s, className: f.Jq, themed: !0, singleLine: !0 });
}
function T(e) {
    let {
            activity: t,
            embeddedApp: n,
            user: s,
            channel: a,
            sortedVoiceStates: d,
            onOpenSpotifyTrack: u,
            onOpenSpotifyArtist: A,
            onOpenSpotifyAlbum: m,
        } = e,
        p = [];
    null != n
        ? (p = Array.from(n.embeddedActivity.userIds))
        : (0, c.A)(t) && null != d && (p = d.map((e) => e.user.id));
    let T = (0, r.yK)([g.default], () => p.map((e) => g.default.getUser(e)).filter(_.Vq)),
        j = null != n || (0, c.A)(t),
        v = l.useMemo(() => {
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
        ? (0, i.jsxs)("div", {
              className: f.ec,
              children: [
                  (0, i.jsxs)("div", {
                      className: f.Wh,
                      children: [
                          (0, i.jsx)(C, { activity: t, user: s, embeddedApp: n, onOpenSpotifyAlbum: m }),
                          (0, i.jsxs)("div", {
                              className: f.X0,
                              children: [
                                  (0, i.jsx)(I, { activity: t, embeddedApp: n, onOpenSpotifyTrack: u }),
                                  (0, i.jsx)(S, { activity: t, user: s, onOpenSpotifyArtist: A }),
                                  (0, i.jsx)(b, { activity: t }),
                                  p.length > 0 &&
                                      (0, i.jsx)(h.Ay, {
                                          className: f.TN,
                                          guildId: a.guild_id,
                                          users: T,
                                          size: E,
                                          max: 7,
                                          renderUser: (e) => {
                                              if (null == e || e === h.mt) return null;
                                              let t = v.get(e.id),
                                                  n = t?.nick ?? x.Ay.getName(e);
                                              return (0, i.jsx)(
                                                  o.m,
                                                  {
                                                      asContainer: !0,
                                                      text: n,
                                                      position: "bottom",
                                                      children: (0, i.jsx)(
                                                          "img",
                                                          {
                                                              src: e.getAvatarURL(a.guild_id, E),
                                                              alt: n,
                                                              className: f.my,
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
                  (0, i.jsx)(N, { activity: t }),
              ],
          })
        : null;
}
