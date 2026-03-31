n.d(t, { A: () => v, z: () => j });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(311907),
    o = n(990078),
    c = n(397927),
    d = n(90644),
    u = n(432166),
    h = n(104171),
    A = n(763758),
    _ = n(287809),
    m = n(139675),
    g = n(486020),
    p = n(403362),
    f = n(427262),
    x = n(652215),
    E = n(985018),
    I = n(777741);
let C = h.DN.SIZE_24;
function N(e) {
    let { activity: t, user: n, embeddedApp: l, onOpenSpotifyAlbum: s, compact: a } = e,
        r = t?.assets,
        u = t?.application_id;
    if (null == t || null == r || (null == r.large_image && null == r.small_image))
        if (null == l) return null;
        else {
            let e, t, n;
            return (
                (e = g.Ay.getApplicationIconURL({ id: l.application.id, icon: l.application.icon })),
                (t = l.application.name),
                (n = a ? I.p_ : I.P3),
                (0, i.jsx)(o.m, {
                    text: t,
                    position: "top",
                    asContainer: !0,
                    children: (0, i.jsx)("img", { alt: t, src: e, className: n }),
                })
            );
        }
    let h = r.large_image ?? r.small_image,
        A = (0, d.A)(t),
        _ = a ? I.p_ : A ? I.RC : I.P3,
        p =
            null != h
                ? (0, i.jsx)("img", { alt: r.large_text ?? "", src: (0, m.uD)(u, h, [128, 128]), className: _ })
                : null;
    return A && null != s
        ? ((p = (0, i.jsx)(c.DUT, {
              className: I.vk,
              onClick: () => {
                  s(t, n.id);
              },
              children: p,
          })),
          (0, i.jsx)(o.m, { text: null != r.large_text ? r.large_text : null, position: "top", children: p }))
        : p;
}
function T(e) {
    let { activity: t, embeddedApp: n, onOpenSpotifyTrack: l, compact: s } = e,
        a = t?.details,
        r = t?.name,
        o = r;
    if (null != n) o = n.application.name;
    else {
        if (!(null != t && (0, d.A)(t)) || null == t.sync_id || null == a || null == l) return null;
        (r = a),
            (o = (0, i.jsx)(c.DUT, {
                className: I.wp,
                onClick: () => {
                    l(t);
                },
                children: a,
            }));
    }
    return (0, i.jsx)(c.Heading, {
        variant: s ? "heading-sm/medium" : "heading-sm/semibold",
        color: "text-strong",
        className: I.wx,
        children: o,
    });
}
function S(e) {
    let { activity: t, user: n, onOpenSpotifyArtist: l, muted: s } = e,
        r = t?.details,
        o = t?.state,
        c = r;
    return (null != t &&
        (0, d.A)(t) &&
        null != o &&
        (c = [
            (0, i.jsx)(
                A.A,
                {
                    artists: o,
                    linkClassName: s ? I.QJ : I.hw,
                    canOpen: null != t.sync_id,
                    onOpenSpotifyArtist: (e) => {
                        l?.(t, n.id, e);
                    },
                },
                o,
            ),
        ]),
    null == c || "" === c)
        ? null
        : (0, i.jsx)("div", { className: a()(I.Mo, s ? I.JF : I.Tf, I.p9), children: c });
}
function b(e) {
    let { activity: t } = e,
        n = t?.state;
    return null == n || "" === n || (0, d.A)(t)
        ? null
        : (0, i.jsx)("div", { className: a()(I.Mo, I.Tf, I.p9, I.__invalid_activity), children: n });
}
function y(e) {
    let { activity: t } = e;
    if (null == t || !(0, d.A)(t)) return null;
    let { timestamps: n } = t;
    if (n?.start == null || n?.end == null) return null;
    let { start: l, end: s } = n;
    return (0, i.jsx)(u.A, { start: l, end: s, className: I.Jq, themed: !0, singleLine: !0 });
}
function v(e) {
    let {
            activity: t,
            embeddedApp: n,
            user: s,
            channel: a,
            sortedVoiceStates: c,
            onOpenSpotifyTrack: u,
            onOpenSpotifyArtist: A,
            onOpenSpotifyAlbum: m,
        } = e,
        g = [];
    null != n
        ? (g = Array.from(n.embeddedActivity.userIds))
        : (0, d.A)(t) && null != c && (g = c.map((e) => e.user.id));
    let x = (0, r.yK)([_.default], () => g.map((e) => _.default.getUser(e)).filter(p.Vq)),
        E = null != n || (0, d.A)(t),
        v = l.useMemo(() => {
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
        ? (0, i.jsxs)("div", {
              className: I.ec,
              children: [
                  (0, i.jsxs)("div", {
                      className: I.Wh,
                      children: [
                          (0, i.jsx)(N, { activity: t, user: s, embeddedApp: n, onOpenSpotifyAlbum: m }),
                          (0, i.jsxs)("div", {
                              className: I.X0,
                              children: [
                                  (0, i.jsx)(T, { activity: t, embeddedApp: n, onOpenSpotifyTrack: u }),
                                  (0, i.jsx)(S, { activity: t, user: s, onOpenSpotifyArtist: A }),
                                  (0, i.jsx)(b, { activity: t }),
                                  g.length > 0 &&
                                      (0, i.jsx)(h.Ay, {
                                          className: I.TN,
                                          guildId: a.guild_id,
                                          users: x,
                                          size: C,
                                          max: 7,
                                          renderUser: (e) => {
                                              if (null == e || e === h.mt) return null;
                                              let t = v.get(e.id),
                                                  n = t?.nick ?? f.Ay.getName(e);
                                              return (0, i.jsx)(
                                                  o.m,
                                                  {
                                                      asContainer: !0,
                                                      text: n,
                                                      position: "bottom",
                                                      children: (0, i.jsx)(
                                                          "img",
                                                          {
                                                              src: e.getAvatarURL(a.guild_id, C),
                                                              alt: n,
                                                              className: I.my,
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
                  (0, i.jsx)(y, { activity: t }),
              ],
          })
        : null;
}
function j(e) {
    let {
        activity: t,
        embeddedApp: n,
        user: l,
        onOpenSpotifyTrack: s,
        onOpenSpotifyArtist: a,
        onOpenSpotifyAlbum: r,
    } = e;
    if (!(null != n || (0, d.A)(t))) return null;
    let o = null,
        u = t?.type ?? null;
    return (
        (o =
            null != n
                ? u === x.$pd.WATCHING
                    ? E.intl.string(E.t.xeqvTg)
                    : E.intl.string(E.t.J4MQFX)
                : E.intl.string(E.t.ep6av7)),
        (0, i.jsxs)("div", {
            className: I.ec,
            children: [
                null != o &&
                    (0, i.jsx)("div", {
                        className: I.N1,
                        children: (0, i.jsx)(c.Heading, {
                            variant: "text-xs/medium",
                            color: "text-muted",
                            children: o,
                        }),
                    }),
                (0, i.jsxs)("div", {
                    className: I.Wh,
                    children: [
                        (0, i.jsx)(N, { activity: t, user: l, embeddedApp: n, onOpenSpotifyAlbum: r, compact: !0 }),
                        (0, i.jsxs)("div", {
                            className: I.Be,
                            children: [
                                (0, i.jsx)(T, { activity: t, embeddedApp: n, onOpenSpotifyTrack: s, compact: !0 }),
                                (0, i.jsx)(S, { activity: t, user: l, onOpenSpotifyArtist: a, muted: !0 }),
                                (0, i.jsx)(b, { activity: t }),
                            ],
                        }),
                    ],
                }),
                (0, i.jsx)(y, { activity: t }),
            ],
        })
    );
}
