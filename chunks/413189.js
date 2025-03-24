n.d(t, { Z: () => E });
var r = n(200651),
    i = n(948789),
    a = n(442837),
    o = n(481060),
    l = n(410030),
    s = n(739566),
    c = n(612659),
    u = n(594174),
    d = n(63063),
    p = n(436952),
    m = n(411149),
    f = n(115215),
    h = n(151480),
    g = n(373076),
    _ = n(66420),
    b = n(981631),
    v = n(474936),
    x = n(388032),
    y = n(84848);
function E(e) {
    var t, n, E, O;
    let N, j, C;
    let { message: I, channel: S, compact: T } = e,
        P = (0, p.sQ)({ location: 'ChatWallpaperSetSystemMessage' }),
        A = (0, p.sX)({ location: 'ChatWallpaperSetSystemMessage' }).enabled,
        w = (0, s.ZP)(I),
        Z = (0, o.apv)((0, l.ZP)()),
        k = (0, a.e7)([u.default], () => u.default.getCurrentUser()),
        R = (0, c.m)(v.p9.TIER_2),
        D = (null == k ? void 0 : k.id) === I.author.id,
        L = (0, g.P)(null === (t = S.wallpaper) || void 0 === t ? void 0 : t.setterId),
        M = f.t(S),
        W = f.Y(I),
        U = (null === (n = S.wallpaper) || void 0 === n ? void 0 : n.wallpaperId) === W,
        F = (0, a.e7)([m.Z], () => m.Z.getWallpaperById(W));
    return null == W
        ? null
        : ((N = Z
              ? x.NW.format(x.t.dBxFsL, { learnMoreLink: d.Z.getArticleURL(b.BhN.DM_WALLPAPERS) })
              : D
                ? x.NW.format(x.t.z847Tk, { wallpaper_name: null !== (E = null == F ? void 0 : F.label) && void 0 !== E ? E : x.t['UQMV/P'] })
                : x.NW.format(x.t['+lKndX'], {
                      username: null == w ? void 0 : w.nick,
                      wallpaper_name: null !== (O = null == F ? void 0 : F.label) && void 0 !== O ? O : x.t['UQMV/P']
                  })),
          P
              ? D ||
                (M
                    ? (j = x.NW.string(x.t.q124kJ))
                    : R ||
                      (j = x.NW.format(x.t.JwUhHh, {
                          onClickNitro: () => {
                              (0, i.uL)(b.Z5c.NITRO_HOME);
                          }
                      })))
              : (j = x.NW.string(x.t['6JSOu7'])),
          P &&
              A &&
              U &&
              (M
                  ? L &&
                    (C = (0, r.jsx)(o.zxk, {
                        className: y.action,
                        onClick: () => {
                            h.X(S, { shouldClear: !1 });
                        },
                        children: x.NW.string(x.t.o6850d)
                    }))
                  : (C = (0, r.jsx)(o.zxk, {
                        className: y.action,
                        onClick: () => {
                            h.X(S, { shouldClear: !0 });
                        },
                        children: x.NW.string(x.t.VkKicX)
                    }))),
          (0, r.jsx)(_.Z, {
              channel: S,
              content: N,
              subtitle: j,
              action: C,
              compact: T
          }));
}
