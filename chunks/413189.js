n.d(t, { Z: () => v });
var r = n(255367),
    i = n(73800),
    l = n(442837),
    a = n(481060),
    o = n(410030),
    s = n(739566),
    c = n(612659),
    u = n(703656),
    d = n(594174),
    p = n(63063),
    m = n(436952),
    f = n(411149),
    g = n(115215),
    _ = n(151480),
    h = n(680783),
    b = n(66420),
    E = n(981631),
    y = n(474936),
    x = n(388032),
    C = n(510064);
function v(e) {
    var t, n, v, O;
    let j,
        I,
        S,
        { message: T, channel: N, compact: P } = e,
        A = null == (t = T.chatWallpaperInfo) ? void 0 : t.wallpaperId,
        { enabled: w } = (0, m.sX)({ location: 'ChatWallpaperSetSystemMessage' }),
        Z = m.qM.useExperiment({ location: 'ChatWallpaperSetSystemMessage' }).lightMode,
        R = (0, s.ZP)(T),
        k = (0, a.wjy)((0, o.ZP)()),
        {
            chatWallpaper: L,
            isUpdatingChatWallpaperFlag: D,
            lastSetMessageId: M
        } = (0, l.cj)([f.Z], () => ({
            chatWallpaper: f.Z.getWallpaperById(A),
            isUpdatingChatWallpaperFlag: f.Z.isUpdatingChatWallpaperFlagForChannel(N.id),
            lastSetMessageId: f.Z.getLastSetWallpaperMessageIdForChannel(N.id)
        })),
        U = (0, h.Z)(N.id),
        F = M === T.id,
        B = (0, l.e7)([d.default], () => d.default.getCurrentUser()),
        G = (null == B ? void 0 : B.id) === T.author.id,
        H = (0, c.m)(y.p9.TIER_2),
        V = g.t(N);
    return (i.useEffect(() => {
        null == L && f.Z.shouldFetchWallpapers && _.k9();
    }, [L]),
    null == A)
        ? null
        : ((j = G
              ? x.intl.format(x.t.z847Tk, { wallpaper_name: null != (n = null == L ? void 0 : L.label) ? n : x.intl.string(x.t['UQMV/P']) })
              : x.intl.format(x.t['+lKndX'], {
                    username: null == R ? void 0 : R.nick,
                    wallpaper_name: null != (v = null == L ? void 0 : L.label) ? v : x.intl.string(x.t['UQMV/P'])
                })),
          w
              ? k || Z
                  ? V && F
                      ? (I = x.intl.formatToPlainString(x.t.PzTpVV, { wallpaperName: null != (O = null == L ? void 0 : L.label) ? O : x.intl.string(x.t['UQMV/P']) }))
                      : G ||
                        H ||
                        !F ||
                        (I = x.intl.format(x.t.JwUhHh, {
                            onClickNitro: () => {
                                (0, u.uL)(E.Z5c.NITRO_HOME);
                            }
                        }))
                  : (I = x.intl.format(x.t.dBxFsL, { learnMoreLink: p.Z.getArticleURL(E.BhN.DM_WALLPAPERS) }))
              : (I = x.intl.string(x.t['6JSOu7'])),
          (null == U ? void 0 : U.isViewable) &&
              F &&
              !G &&
              (S = (0, r.jsx)(a.zxk, {
                  className: C.action,
                  onClick: () => {
                      _.X(N, A, {
                          shouldClear: !V,
                          onError: () => {
                              (0, a.showToast)((0, a.createToast)(x.intl.string(x.t.F8FvU1), a.ToastType.FAILURE));
                          }
                      });
                  },
                  submitting: D,
                  children: x.intl.string(V ? x.t.o6850d : x.t['/ubFp6'])
              })),
          (0, r.jsx)(b.Z, {
              channel: N,
              content: j,
              subtitle: I,
              action: S,
              compact: P,
              message: T
          }));
}
