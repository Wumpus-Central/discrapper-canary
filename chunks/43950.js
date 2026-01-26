n.d(t, {
    A: () => C,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(311907),
    l = n(990078),
    c = n(397927),
    u = n(90644),
    d = n(432166),
    f = n(104171),
    p = n(763758),
    _ = n(287809),
    h = n(139675),
    m = n(486020),
    g = n(403362),
    E = n(427262),
    y = n(6676);
let b = f.DN.SIZE_24;

function O(e) {
    let t = m.Ay.getApplicationIconURL({
            id: e.application.id,
            icon: e.application.icon,
        }),
        n = e.application.name;
    return (0, r.jsx)(l.m, {
        text: n,
        position: "top",
        asContainer: !0,
        children: (0, r.jsx)("img", {
            alt: n,
            src: t,
            className: y.P3,
        }),
    });
}

function v(e) {
    var t, n;
    let { activity: i, user: a, embeddedApp: s, onOpenSpotifyAlbum: o } = e,
        d = null == i ? void 0 : i.assets,
        f = null == i ? void 0 : i.application_id;
    if (null == i || null == d || (null == d.large_image && null == d.small_image))
        if (null != s) return O(s);
        else return null;
    let p = null != (t = d.large_image) ? t : d.small_image,
        _ = (0, u.A)(i),
        m = _ ? y.RC : y.P3,
        g =
            null != p
                ? (0, r.jsx)("img", {
                      alt: null != (n = d.large_text) ? n : "",
                      src: (0, h.uD)(f, p, [128, 128]),
                      className: m,
                  })
                : null;
    return _ && null != o
        ? ((g = (0, r.jsx)(c.DUT, {
              className: y.vk,
              onClick: () => {
                  o(i, a.id);
              },
              children: g,
          })),
          (0, r.jsx)(l.m, {
              text: null != d.large_text ? d.large_text : null,
              position: "top",
              children: g,
          }))
        : g;
}

function A(e) {
    let { activity: t, embeddedApp: n, onOpenSpotifyTrack: i } = e,
        a = null == t ? void 0 : t.details,
        s = null == t ? void 0 : t.name,
        o = s;
    if (null != n) o = n.application.name;
    else {
        if (!(null != t && (0, u.A)(t)) || null == t.sync_id || null == a || null == i) return null;
        (s = a),
            (o = (0, r.jsx)(c.DUT, {
                className: y.wp,
                onClick: () => {
                    i(t);
                },
                children: a,
            }));
    }
    return (0, r.jsx)(c.Heading, {
        variant: "heading-sm/semibold",
        color: "text-strong",
        className: y.wx,
        children: o,
    });
}

function I(e) {
    let { activity: t, user: n, onOpenSpotifyArtist: i } = e,
        a = null == t ? void 0 : t.details,
        o = null == t ? void 0 : t.state,
        l = a;
    return (null != t &&
        (0, u.A)(t) &&
        null != o &&
        (l = [
            (0, r.jsx)(
                p.A,
                {
                    artists: o,
                    linkClassName: y.hw,
                    canOpen: null != t.sync_id,
                    onOpenSpotifyArtist: (e) => {
                        null == i || i(t, n.id, e);
                    },
                },
                o,
            ),
        ]),
    null == l || "" === l)
        ? null
        : (0, r.jsx)("div", {
              className: s()(y.Mo, y.Tf, y.p9),
              children: l,
          });
}

function S(e) {
    let { activity: t } = e,
        n = null == t ? void 0 : t.state;
    return null == n || "" === n || (0, u.A)(t)
        ? null
        : (0, r.jsx)("div", {
              className: s()(y.Mo, y.Tf, y.p9, y.__invalid_activity),
              children: n,
          });
}

function T(e) {
    let { activity: t } = e;
    if (null == t || !(0, u.A)(t)) return null;
    let { timestamps: n } = t;
    if ((null == n ? void 0 : n.start) == null || (null == n ? void 0 : n.end) == null) return null;
    let { start: i, end: a } = n;
    return (0, r.jsx)(d.A, {
        start: i,
        end: a,
        className: y.Jq,
        themed: !0,
        singleLine: !0,
    });
}

function C(e) {
    let {
            activity: t,
            embeddedApp: n,
            user: a,
            channel: s,
            sortedVoiceStates: c,
            onOpenSpotifyTrack: d,
            onOpenSpotifyArtist: p,
            onOpenSpotifyAlbum: h,
        } = e,
        m = [];
    null != n
        ? (m = Array.from(n.embeddedActivity.userIds))
        : (0, u.A)(t) && null != c && (m = c.map((e) => e.user.id));
    let O = (0, o.yK)([_.default], () => m.map((e) => _.default.getUser(e)).filter(g.Vq)),
        C = null != n || (0, u.A)(t),
        N = i.useMemo(() => {
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
    if (!C) return null;
    let w = (e) => {
        var t;
        if (null == e || e === f.mt) return null;
        let n = N.get(e.id),
            i = null != (t = null == n ? void 0 : n.nick) ? t : E.Ay.getName(e);
        return (0, r.jsx)(
            l.m,
            {
                asContainer: !0,
                text: i,
                position: "bottom",
                children: (0, r.jsx)(
                    "img",
                    {
                        src: e.getAvatarURL(s.guild_id, b),
                        alt: i,
                        className: y.my,
                    },
                    e.id,
                ),
            },
            e.id,
        );
    };
    return (0, r.jsxs)("div", {
        className: y.ec,
        children: [
            (0, r.jsxs)("div", {
                className: y.Wh,
                children: [
                    (0, r.jsx)(v, {
                        activity: t,
                        user: a,
                        embeddedApp: n,
                        onOpenSpotifyAlbum: h,
                    }),
                    (0, r.jsxs)("div", {
                        className: y.X0,
                        children: [
                            (0, r.jsx)(A, {
                                activity: t,
                                embeddedApp: n,
                                onOpenSpotifyTrack: d,
                            }),
                            (0, r.jsx)(I, {
                                activity: t,
                                user: a,
                                onOpenSpotifyArtist: p,
                            }),
                            (0, r.jsx)(S, {
                                activity: t,
                            }),
                            m.length > 0 &&
                                (0, r.jsx)(f.Ay, {
                                    className: y.TN,
                                    guildId: s.guild_id,
                                    users: O,
                                    size: b,
                                    max: 7,
                                    renderUser: w,
                                }),
                        ],
                    }),
                ],
            }),
            (0, r.jsx)(T, {
                activity: t,
            }),
        ],
    });
}
