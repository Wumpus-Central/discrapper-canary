n.d(t, { Z: () => O });
var r = n(200651),
    i = n(192379),
    a = n(442837),
    o = n(481060),
    l = n(410030),
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
    v = n(981631),
    x = n(474936),
    y = n(388032),
    E = n(918360);
function O(e) {
    var t, n;
    let O, N, j;
    let { message: C, channel: I, compact: S } = e,
        T = h.Y(C),
        P = (0, m.sQ)({ location: 'ChatWallpaperSetSystemMessage' }),
        A = (0, s.ZP)(C),
        w = (0, o.wjy)((0, l.ZP)()),
        {
            chatWallpaper: Z,
            isUpdatingChatWallpaperFlag: k,
            lastSetMessageId: R
        } = (0, a.cj)([f.Z], () => ({
            chatWallpaper: f.Z.getWallpaperById(T),
            isUpdatingChatWallpaperFlag: f.Z.isUpdatingChatWallpaperFlagForChannel(I.id),
            lastSetMessageId: f.Z.getLastSetWallpaperMessageIdForChannel(I.id)
        })),
        D = (0, _.Z)(I.id),
        L = R === C.id,
        M = (0, a.e7)([d.default], () => d.default.getCurrentUser()),
        W = (null == M ? void 0 : M.id) === C.author.id,
        U = (0, c.m)(x.p9.TIER_2),
        F = h.t(I);
    return (i.useEffect(() => {
        null == Z && f.Z.shouldFetchWallpapers && g.k9();
    }, [Z]),
    null == T)
        ? null
        : ((O = w
              ? W
                  ? y.NW.format(y.t.z847Tk, { wallpaper_name: null !== (t = null == Z ? void 0 : Z.label) && void 0 !== t ? t : y.t['UQMV/P'] })
                  : y.NW.format(y.t['+lKndX'], {
                        username: null == A ? void 0 : A.nick,
                        wallpaper_name: null !== (n = null == Z ? void 0 : Z.label) && void 0 !== n ? n : y.t['UQMV/P']
                    })
              : y.NW.format(y.t.dBxFsL, { learnMoreLink: p.Z.getArticleURL(v.BhN.DM_WALLPAPERS) })),
          P
              ? F && L
                  ? (N = y.NW.formatToPlainString(y.t.PzTpVV, { wallpaperName: null == Z ? void 0 : Z.label }))
                  : W ||
                    U ||
                    !L ||
                    (N = y.NW.format(y.t.JwUhHh, {
                        onClickNitro: () => {
                            (0, u.uL)(v.Z5c.NITRO_HOME);
                        }
                    }))
              : (N = y.NW.string(y.t['6JSOu7'])),
          (null == D ? void 0 : D.isViewable) &&
              L &&
              (j = (0, r.jsx)(o.zxk, {
                  className: E.action,
                  onClick: () => {
                      g.X(I, T, { shouldClear: !F });
                  },
                  submitting: k,
                  children: y.NW.string(F ? y.t.o6850d : y.t['/ubFp6'])
              })),
          (0, r.jsx)(b.Z, {
              channel: I,
              content: O,
              subtitle: N,
              action: j,
              compact: S
          }));
}
