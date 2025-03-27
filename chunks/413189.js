n.d(t, { Z: () => E });
var r = n(200651),
    i = n(442837),
    a = n(481060),
    o = n(410030),
    l = n(739566),
    s = n(612659),
    c = n(703656),
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
    var t, n, E;
    let O, N, j;
    let { message: C, channel: I, compact: S } = e,
        T = f.Y(C),
        P = (0, p.sQ)({ location: 'ChatWallpaperSetSystemMessage' }),
        A = (0, p.sX)({ location: 'ChatWallpaperSetSystemMessage' }).enabled,
        w = (0, l.ZP)(C),
        Z = (0, a.wjy)((0, o.ZP)()),
        {
            chatWallpaper: k,
            isUpdatingChatWallpaperFlag: R,
            lastSetMessageId: D
        } = (0, i.cj)([m.Z], () => ({
            chatWallpaper: m.Z.getWallpaperById(T),
            isUpdatingChatWallpaperFlag: m.Z.isUpdatingChatWallpaperFlagForChannel(I.id),
            lastSetMessageId: m.Z.getLastSetWallpaperMessageIdForChannel(I.id)
        })),
        L = D === C.id,
        M = (0, i.e7)([u.default], () => u.default.getCurrentUser()),
        W = (null == M ? void 0 : M.id) === C.author.id,
        U = (0, s.m)(v.p9.TIER_2),
        F = (0, g.P)(null === (t = I.wallpaper) || void 0 === t ? void 0 : t.setterId),
        B = f.t(I);
    return null == T
        ? null
        : ((O = Z
              ? W
                  ? x.NW.format(x.t.z847Tk, { wallpaper_name: null !== (n = null == k ? void 0 : k.label) && void 0 !== n ? n : x.t['UQMV/P'] })
                  : x.NW.format(x.t['+lKndX'], {
                        username: null == w ? void 0 : w.nick,
                        wallpaper_name: null !== (E = null == k ? void 0 : k.label) && void 0 !== E ? E : x.t['UQMV/P']
                    })
              : x.NW.format(x.t.dBxFsL, { learnMoreLink: d.Z.getArticleURL(b.BhN.DM_WALLPAPERS) })),
          P
              ? W ||
                (B && L && W
                    ? (N = x.NW.string(x.t.q124kJ))
                    : U ||
                      (N = x.NW.format(x.t.JwUhHh, {
                          onClickNitro: () => {
                              (0, c.uL)(b.Z5c.NITRO_HOME);
                          }
                      })))
              : (N = x.NW.string(x.t['6JSOu7'])),
          P &&
              A &&
              L &&
              Z &&
              (B
                  ? F &&
                    (j = (0, r.jsx)(a.zxk, {
                        className: y.action,
                        onClick: () => {
                            h.X(I, T, { shouldClear: !1 });
                        },
                        submitting: R,
                        children: x.NW.string(x.t.o6850d)
                    }))
                  : (j = (0, r.jsx)(a.zxk, {
                        className: y.action,
                        onClick: () => {
                            h.X(I, T, { shouldClear: !0 });
                        },
                        submitting: R,
                        children: x.NW.string(x.t.VkKicX)
                    }))),
          (0, r.jsx)(_.Z, {
              channel: I,
              content: O,
              subtitle: N,
              action: j,
              compact: S
          }));
}
