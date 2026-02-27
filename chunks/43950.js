"use strict";
n.d(t, { A: () => v, z: () => j });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(311907),
    o = n(990078),
    c = n(397927),
    d = n(90644),
    u = n(432166),
    h = n(104171),
    A = n(763758),
    p = n(287809),
    g = n(139675),
    m = n(486020),
    _ = n(403362),
    f = n(427262),
    x = n(652215),
    C = n(985018),
    E = n(6676);
let I = h.DN.SIZE_24;
function N(e) {
    let { activity: t, user: n, embeddedApp: s, onOpenSpotifyAlbum: l, compact: r } = e,
        a = t?.assets,
        u = t?.application_id;
    if (null == t || null == a || (null == a.large_image && null == a.small_image))
        if (null == s) return null;
        else {
            let e, t, n;
            return (
                (e = m.Ay.getApplicationIconURL({ id: s.application.id, icon: s.application.icon })),
                (t = s.application.name),
                (n = r ? E.p_ : E.P3),
                (0, i.jsx)(o.m, {
                    text: t,
                    position: "top",
                    asContainer: !0,
                    children: (0, i.jsx)("img", { alt: t, src: e, className: n }),
                })
            );
        }
    let h = a.large_image ?? a.small_image,
        A = (0, d.A)(t),
        p = r ? E.p_ : A ? E.RC : E.P3,
        _ =
            null != h
                ? (0, i.jsx)("img", { alt: a.large_text ?? "", src: (0, g.uD)(u, h, [128, 128]), className: p })
                : null;
    return A && null != l
        ? ((_ = (0, i.jsx)(c.DUT, {
              className: E.vk,
              onClick: () => {
                  l(t, n.id);
              },
              children: _,
          })),
          (0, i.jsx)(o.m, { text: null != a.large_text ? a.large_text : null, position: "top", children: _ }))
        : _;
}
function b(e) {
    let { activity: t, embeddedApp: n, onOpenSpotifyTrack: s, compact: l } = e,
        r = t?.details,
        a = t?.name,
        o = a;
    if (null != n) o = n.application.name;
    else {
        if (!(null != t && (0, d.A)(t)) || null == t.sync_id || null == r || null == s) return null;
        (a = r),
            (o = (0, i.jsx)(c.DUT, {
                className: E.wp,
                onClick: () => {
                    s(t);
                },
                children: r,
            }));
    }
    return (0, i.jsx)(c.Heading, {
        variant: l ? "heading-sm/medium" : "heading-sm/semibold",
        color: "text-strong",
        className: E.wx,
        children: o,
    });
}
function S(e) {
    let { activity: t, user: n, onOpenSpotifyArtist: s, muted: l } = e,
        a = t?.details,
        o = t?.state,
        c = a;
    return (null != t &&
        (0, d.A)(t) &&
        null != o &&
        (c = [
            (0, i.jsx)(
                A.A,
                {
                    artists: o,
                    linkClassName: l ? E.QJ : E.hw,
                    canOpen: null != t.sync_id,
                    onOpenSpotifyArtist: (e) => {
                        s?.(t, n.id, e);
                    },
                },
                o,
            ),
        ]),
    null == c || "" === c)
        ? null
        : (0, i.jsx)("div", { className: r()(E.Mo, l ? E.JF : E.Tf, E.p9), children: c });
}
function T(e) {
    let { activity: t } = e,
        n = t?.state;
    return null == n || "" === n || (0, d.A)(t)
        ? null
        : (0, i.jsx)("div", { className: r()(E.Mo, E.Tf, E.p9, E.__invalid_activity), children: n });
}
function y(e) {
    let { activity: t } = e;
    if (null == t || !(0, d.A)(t)) return null;
    let { timestamps: n } = t;
    if (n?.start == null || n?.end == null) return null;
    let { start: s, end: l } = n;
    return (0, i.jsx)(u.A, { start: s, end: l, className: E.Jq, themed: !0, singleLine: !0 });
}
function v(e) {
    let {
            activity: t,
            embeddedApp: n,
            user: l,
            channel: r,
            sortedVoiceStates: c,
            onOpenSpotifyTrack: u,
            onOpenSpotifyArtist: A,
            onOpenSpotifyAlbum: g,
        } = e,
        m = [];
    null != n
        ? (m = Array.from(n.embeddedActivity.userIds))
        : (0, d.A)(t) && null != c && (m = c.map((e) => e.user.id));
    let x = (0, a.yK)([p.default], () => m.map((e) => p.default.getUser(e)).filter(_.Vq)),
        C = null != n || (0, d.A)(t),
        v = s.useMemo(() => {
            let e = new Map();
            return (
                C &&
                    null != c &&
                    c.forEach((t) => {
                        let n = t.member;
                        null != n && e.set(t.user.id, n);
                    }),
                e
            );
        }, [c, C]);
    return C
        ? (0, i.jsxs)("div", {
              className: E.ec,
              children: [
                  (0, i.jsxs)("div", {
                      className: E.Wh,
                      children: [
                          (0, i.jsx)(N, { activity: t, user: l, embeddedApp: n, onOpenSpotifyAlbum: g }),
                          (0, i.jsxs)("div", {
                              className: E.X0,
                              children: [
                                  (0, i.jsx)(b, { activity: t, embeddedApp: n, onOpenSpotifyTrack: u }),
                                  (0, i.jsx)(S, { activity: t, user: l, onOpenSpotifyArtist: A }),
                                  (0, i.jsx)(T, { activity: t }),
                                  m.length > 0 &&
                                      (0, i.jsx)(h.Ay, {
                                          className: E.TN,
                                          guildId: r.guild_id,
                                          users: x,
                                          size: I,
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
                                                              src: e.getAvatarURL(r.guild_id, I),
                                                              alt: n,
                                                              className: E.my,
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
        user: s,
        onOpenSpotifyTrack: l,
        onOpenSpotifyArtist: r,
        onOpenSpotifyAlbum: a,
    } = e;
    if (!(null != n || (0, d.A)(t))) return null;
    let o = null,
        u = t?.type ?? null;
    return (
        (o =
            null != n
                ? u === x.$pd.WATCHING
                    ? C.intl.string(C.t.xeqvTg)
                    : C.intl.string(C.t.J4MQFX)
                : C.intl.string(C.t.ep6av7)),
        (0, i.jsxs)("div", {
            className: E.ec,
            children: [
                null != o &&
                    (0, i.jsx)("div", {
                        className: E.N1,
                        children: (0, i.jsx)(c.Heading, {
                            variant: "text-xs/medium",
                            color: "text-muted",
                            children: o,
                        }),
                    }),
                (0, i.jsxs)("div", {
                    className: E.Wh,
                    children: [
                        (0, i.jsx)(N, { activity: t, user: s, embeddedApp: n, onOpenSpotifyAlbum: a, compact: !0 }),
                        (0, i.jsxs)("div", {
                            className: E.Be,
                            children: [
                                (0, i.jsx)(b, { activity: t, embeddedApp: n, onOpenSpotifyTrack: l, compact: !0 }),
                                (0, i.jsx)(S, { activity: t, user: s, onOpenSpotifyArtist: r, muted: !0 }),
                                (0, i.jsx)(T, { activity: t }),
                            ],
                        }),
                    ],
                }),
                (0, i.jsx)(y, { activity: t }),
            ],
        })
    );
}
