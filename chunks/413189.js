n.d(t, { Z: () => E });
var r = n(200651),
    i = n(948789),
    o = n(442837),
    a = n(481060),
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
    var t, n, E, O, N;
    let j, C, I;
    let { message: S, channel: T, compact: P } = e,
        A = (0, p.sQ)({ location: 'ChatWallpaperSetSystemMessage' }),
        w = (0, p.sX)({ location: 'ChatWallpaperSetSystemMessage' }).enabled,
        Z = (0, s.ZP)(S),
        k = (0, a.wjy)((0, l.ZP)()),
        R = (0, o.e7)([u.default], () => u.default.getCurrentUser()),
        D = (0, c.m)(v.p9.TIER_2),
        L = (null == R ? void 0 : R.id) === S.author.id,
        M = (0, g.P)(null === (t = T.wallpaper) || void 0 === t ? void 0 : t.setterId),
        W = f.t(T),
        U = f.Y(S),
        F = (null === (n = T.wallpaper) || void 0 === n ? void 0 : n.wallpaperId) === U && S.author.id === (null === (E = T.wallpaper) || void 0 === E ? void 0 : E.setterId),
        { chatWallpaper: B, isUpdatingChatWallpaperFlag: G } = (0, o.cj)([m.Z], () => ({
            chatWallpaper: m.Z.getWallpaperById(U),
            isUpdatingChatWallpaperFlag: m.Z.isUpdatingChatWallpaperFlagForChannel(T.id)
        }));
    return null == U
        ? null
        : ((j = k
              ? L
                  ? x.NW.format(x.t.z847Tk, { wallpaper_name: null !== (O = null == B ? void 0 : B.label) && void 0 !== O ? O : x.t['UQMV/P'] })
                  : x.NW.format(x.t['+lKndX'], {
                        username: null == Z ? void 0 : Z.nick,
                        wallpaper_name: null !== (N = null == B ? void 0 : B.label) && void 0 !== N ? N : x.t['UQMV/P']
                    })
              : x.NW.format(x.t.dBxFsL, { learnMoreLink: d.Z.getArticleURL(b.BhN.DM_WALLPAPERS) })),
          A
              ? L ||
                (W && F
                    ? (C = x.NW.string(x.t.q124kJ))
                    : D ||
                      (C = x.NW.format(x.t.JwUhHh, {
                          onClickNitro: () => {
                              (0, i.uL)(b.Z5c.NITRO_HOME);
                          }
                      })))
              : (C = x.NW.string(x.t['6JSOu7'])),
          A &&
              w &&
              F &&
              k &&
              (W
                  ? M &&
                    (I = (0, r.jsx)(a.zxk, {
                        className: y.action,
                        onClick: () => {
                            h.X(T, U, { shouldClear: !1 });
                        },
                        submitting: G,
                        children: x.NW.string(x.t.o6850d)
                    }))
                  : (I = (0, r.jsx)(a.zxk, {
                        className: y.action,
                        onClick: () => {
                            h.X(T, U, { shouldClear: !0 });
                        },
                        submitting: G,
                        children: x.NW.string(x.t.VkKicX)
                    }))),
          (0, r.jsx)(_.Z, {
              channel: T,
              content: j,
              subtitle: C,
              action: I,
              compact: P
          }));
}
