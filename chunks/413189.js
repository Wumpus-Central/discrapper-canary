n.d(t, { Z: () => O });
var r = n(200651),
    i = n(192379),
    a = n(442837),
    l = n(481060),
    o = n(410030),
    s = n(739566),
    c = n(612659),
    u = n(703656),
    d = n(594174),
    p = n(63063),
    m = n(436952),
    f = n(411149),
    h = n(115215),
    g = n(151480),
    _ = n(680783),
    b = n(66420),
    x = n(981631),
    y = n(474936),
    v = n(388032),
    E = n(510064);
function O(e) {
    var t, n, O, N;
    let j,
        C,
        S,
        { message: I, channel: T, compact: P } = e,
        A = null == (t = I.chatWallpaperInfo) ? void 0 : t.wallpaperId,
        w = (0, m.sQ)({ location: 'ChatWallpaperSetSystemMessage' }),
        Z = (0, s.ZP)(I),
        k = (0, l.wjy)((0, o.ZP)()),
        {
            chatWallpaper: R,
            isUpdatingChatWallpaperFlag: D,
            lastSetMessageId: L
        } = (0, a.cj)([f.Z], () => ({
            chatWallpaper: f.Z.getWallpaperById(A),
            isUpdatingChatWallpaperFlag: f.Z.isUpdatingChatWallpaperFlagForChannel(T.id),
            lastSetMessageId: f.Z.getLastSetWallpaperMessageIdForChannel(T.id)
        })),
        M = (0, _.Z)(T.id),
        W = L === I.id,
        U = (0, a.e7)([d.default], () => d.default.getCurrentUser()),
        F = (null == U ? void 0 : U.id) === I.author.id,
        B = (0, c.m)(y.p9.TIER_2),
        G = h.t(T);
    return (i.useEffect(() => {
        null == R && f.Z.shouldFetchWallpapers && g.k9();
    }, [R]),
    null == A)
        ? null
        : ((j = F
              ? v.NW.format(v.t.z847Tk, { wallpaper_name: null != (n = null == R ? void 0 : R.label) ? n : v.NW.string(v.t['UQMV/P']) })
              : v.NW.format(v.t['+lKndX'], {
                    username: null == Z ? void 0 : Z.nick,
                    wallpaper_name: null != (O = null == R ? void 0 : R.label) ? O : v.NW.string(v.t['UQMV/P'])
                })),
          w
              ? k
                  ? G && W
                      ? (C = v.NW.formatToPlainString(v.t.PzTpVV, { wallpaperName: null != (N = null == R ? void 0 : R.label) ? N : v.NW.string(v.t['UQMV/P']) }))
                      : F ||
                        B ||
                        !W ||
                        (C = v.NW.format(v.t.JwUhHh, {
                            onClickNitro: () => {
                                (0, u.uL)(x.Z5c.NITRO_HOME);
                            }
                        }))
                  : (C = v.NW.format(v.t.dBxFsL, { learnMoreLink: p.Z.getArticleURL(x.BhN.DM_WALLPAPERS) }))
              : (C = v.NW.string(v.t['6JSOu7'])),
          (null == M ? void 0 : M.isViewable) &&
              W &&
              !F &&
              (S = (0, r.jsx)(l.zxk, {
                  className: E.action,
                  onClick: () => {
                      g.X(T, A, { shouldClear: !G });
                  },
                  submitting: D,
                  children: v.NW.string(G ? v.t.o6850d : v.t['/ubFp6'])
              })),
          (0, r.jsx)(b.Z, {
              channel: T,
              content: j,
              subtitle: C,
              action: S,
              compact: P,
              message: I
          }));
}
