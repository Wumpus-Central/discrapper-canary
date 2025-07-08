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
    _ = n(115215),
    g = n(151480),
    h = n(680783),
    b = n(66420),
    E = n(981631),
    y = n(474936),
    C = n(388032),
    x = n(510064);
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
        V = _.t(N);
    return (i.useEffect(() => {
        null == L && f.Z.shouldFetchWallpapers && g.k9();
    }, [L]),
    null == A)
        ? null
        : ((j = G
              ? C.intl.format(C.t.z847Tk, { wallpaper_name: null != (n = null == L ? void 0 : L.label) ? n : C.intl.string(C.t['UQMV/P']) })
              : C.intl.format(C.t['+lKndX'], {
                    username: null == R ? void 0 : R.nick,
                    wallpaper_name: null != (v = null == L ? void 0 : L.label) ? v : C.intl.string(C.t['UQMV/P'])
                })),
          w
              ? k || Z
                  ? V && F
                      ? (I = C.intl.formatToPlainString(C.t.PzTpVV, { wallpaperName: null != (O = null == L ? void 0 : L.label) ? O : C.intl.string(C.t['UQMV/P']) }))
                      : G ||
                        H ||
                        !F ||
                        (I = C.intl.format(C.t.JwUhHh, {
                            onClickNitro: () => {
                                (0, u.uL)(E.Z5c.NITRO_HOME);
                            }
                        }))
                  : (I = C.intl.format(C.t.dBxFsL, { learnMoreLink: p.Z.getArticleURL(E.BhN.DM_WALLPAPERS) }))
              : (I = C.intl.string(C.t['6JSOu7'])),
          (null == U ? void 0 : U.isViewable) &&
              F &&
              !G &&
              (S = (0, r.jsx)(a.zxk, {
                  className: x.action,
                  onClick: () => {
                      g.X(N, A, {
                          shouldClear: !V,
                          onError: () => {
                              (0, a.showToast)((0, a.createToast)(C.intl.string(C.t.F8FvU1), a.ToastType.FAILURE));
                          }
                      });
                  },
                  submitting: D,
                  children: C.intl.string(V ? C.t.o6850d : C.t['/ubFp6'])
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
