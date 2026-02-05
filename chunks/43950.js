n.d(t, { A: () => v, z: () => y });
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
    f = n(652215),
    E = n(985018),
    C = n(6676);
let I = h.DN.SIZE_24;
function S(e) {
    let { activity: t, user: n, embeddedApp: l, onOpenSpotifyAlbum: s, compact: a } = e,
        r = t?.assets,
        u = t?.application_id;
    if (null == t || null == r || (null == r.large_image && null == r.small_image))
        if (null == l) return null;
        else {
            let e, t, n;
            return (
                (e = p.Ay.getApplicationIconURL({ id: l.application.id, icon: l.application.icon })),
                (t = l.application.name),
                (n = a ? C.p_ : C.P3),
                (0, i.jsx)(o.m, {
                    text: t,
                    position: "top",
                    asContainer: !0,
                    children: (0, i.jsx)("img", { alt: t, src: e, className: n }),
                })
            );
        }
    let h = r.large_image ?? r.small_image,
        A = (0, c.A)(t),
        g = a ? C.p_ : A ? C.RC : C.P3,
        _ =
            null != h
                ? (0, i.jsx)("img", { alt: r.large_text ?? "", src: (0, m.uD)(u, h, [128, 128]), className: g })
                : null;
    return A && null != s
        ? ((_ = (0, i.jsx)(d.DUT, {
              className: C.vk,
              onClick: () => {
                  s(t, n.id);
              },
              children: _,
          })),
          (0, i.jsx)(o.m, { text: null != r.large_text ? r.large_text : null, position: "top", children: _ }))
        : _;
}
function b(e) {
    let { activity: t, embeddedApp: n, onOpenSpotifyTrack: l, compact: s } = e,
        a = t?.details,
        r = t?.name,
        o = r;
    if (null != n) o = n.application.name;
    else {
        if (!(null != t && (0, c.A)(t)) || null == t.sync_id || null == a || null == l) return null;
        (r = a),
            (o = (0, i.jsx)(d.DUT, {
                className: C.wp,
                onClick: () => {
                    l(t);
                },
                children: a,
            }));
    }
    return (0, i.jsx)(d.Heading, {
        variant: s ? "heading-sm/medium" : "heading-sm/semibold",
        color: "text-strong",
        className: C.wx,
        children: o,
    });
}
function N(e) {
    let { activity: t, user: n, onOpenSpotifyArtist: l, muted: s } = e,
        r = t?.details,
        o = t?.state,
        d = r;
    return (null != t &&
        (0, c.A)(t) &&
        null != o &&
        (d = [
            (0, i.jsx)(
                A.A,
                {
                    artists: o,
                    linkClassName: s ? C.QJ : C.hw,
                    canOpen: null != t.sync_id,
                    onOpenSpotifyArtist: (e) => {
                        l?.(t, n.id, e);
                    },
                },
                o,
            ),
        ]),
    null == d || "" === d)
        ? null
        : (0, i.jsx)("div", { className: a()(C.Mo, s ? C.JF : C.Tf, C.p9), children: d });
}
function T(e) {
    let { activity: t } = e,
        n = t?.state;
    return null == n || "" === n || (0, c.A)(t)
        ? null
        : (0, i.jsx)("div", { className: a()(C.Mo, C.Tf, C.p9, C.__invalid_activity), children: n });
}
function j(e) {
    let { activity: t } = e;
    if (null == t || !(0, c.A)(t)) return null;
    let { timestamps: n } = t;
    if (n?.start == null || n?.end == null) return null;
    let { start: l, end: s } = n;
    return (0, i.jsx)(u.A, { start: l, end: s, className: C.Jq, themed: !0, singleLine: !0 });
}
function v(e) {
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
    let f = (0, r.yK)([g.default], () => p.map((e) => g.default.getUser(e)).filter(_.Vq)),
        E = null != n || (0, c.A)(t),
        v = l.useMemo(() => {
            let e = new Map();
            return (
                E &&
                    null != d &&
                    d.forEach((t) => {
                        let n = t.member;
                        null != n && e.set(t.user.id, n);
                    }),
                e
            );
        }, [d, E]);
    return E
        ? (0, i.jsxs)("div", {
              className: C.ec,
              children: [
                  (0, i.jsxs)("div", {
                      className: C.Wh,
                      children: [
                          (0, i.jsx)(S, { activity: t, user: s, embeddedApp: n, onOpenSpotifyAlbum: m }),
                          (0, i.jsxs)("div", {
                              className: C.X0,
                              children: [
                                  (0, i.jsx)(b, { activity: t, embeddedApp: n, onOpenSpotifyTrack: u }),
                                  (0, i.jsx)(N, { activity: t, user: s, onOpenSpotifyArtist: A }),
                                  (0, i.jsx)(T, { activity: t }),
                                  p.length > 0 &&
                                      (0, i.jsx)(h.Ay, {
                                          className: C.TN,
                                          guildId: a.guild_id,
                                          users: f,
                                          size: I,
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
                                                              src: e.getAvatarURL(a.guild_id, I),
                                                              alt: n,
                                                              className: C.my,
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
                  (0, i.jsx)(j, { activity: t }),
              ],
          })
        : null;
}
function y(e) {
    let {
        activity: t,
        embeddedApp: n,
        user: l,
        onOpenSpotifyTrack: s,
        onOpenSpotifyArtist: a,
        onOpenSpotifyAlbum: r,
    } = e;
    if (!(null != n || (0, c.A)(t))) return null;
    let o = null,
        u = t?.type ?? null;
    return (
        (o =
            null != n
                ? u === f.$pd.WATCHING
                    ? E.intl.string(E.t.xeqvTg)
                    : E.intl.string(E.t.J4MQFX)
                : E.intl.string(E.t.ep6av7)),
        (0, i.jsxs)("div", {
            className: C.ec,
            children: [
                null != o &&
                    (0, i.jsx)("div", {
                        className: C.N1,
                        children: (0, i.jsx)(d.Heading, {
                            variant: "text-xs/medium",
                            color: "text-muted",
                            children: o,
                        }),
                    }),
                (0, i.jsxs)("div", {
                    className: C.Wh,
                    children: [
                        (0, i.jsx)(S, { activity: t, user: l, embeddedApp: n, onOpenSpotifyAlbum: r, compact: !0 }),
                        (0, i.jsxs)("div", {
                            className: C.X0,
                            children: [
                                (0, i.jsx)(b, { activity: t, embeddedApp: n, onOpenSpotifyTrack: s, compact: !0 }),
                                (0, i.jsx)(N, { activity: t, user: l, onOpenSpotifyArtist: a, muted: !0 }),
                                (0, i.jsx)(T, { activity: t }),
                            ],
                        }),
                    ],
                }),
                (0, i.jsx)(j, { activity: t }),
            ],
        })
    );
}
