n.d(t, { Z: () => O });
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
    h = n(115215),
    g = n(151480),
    _ = n(680783),
    b = n(66420),
    x = n(981631),
    y = n(474936),
    E = n(388032),
    v = n(510064);
function O(e) {
    var t, n, O, j;
    let C,
        S,
        I,
        { message: N, channel: T, compact: P } = e,
        A = null == (t = N.chatWallpaperInfo) ? void 0 : t.wallpaperId,
        { enabled: w } = (0, m.sX)({ location: 'ChatWallpaperSetSystemMessage' }),
        Z = m.qM.useExperiment({ location: 'ChatWallpaperSetSystemMessage' }).lightMode,
        R = (0, s.ZP)(N),
        k = (0, a.wjy)((0, o.ZP)()),
        {
            chatWallpaper: D,
            isUpdatingChatWallpaperFlag: L,
            lastSetMessageId: M
        } = (0, l.cj)([f.Z], () => ({
            chatWallpaper: f.Z.getWallpaperById(A),
            isUpdatingChatWallpaperFlag: f.Z.isUpdatingChatWallpaperFlagForChannel(T.id),
            lastSetMessageId: f.Z.getLastSetWallpaperMessageIdForChannel(T.id)
        })),
        U = (0, _.Z)(T.id),
        F = M === N.id,
        B = (0, l.e7)([d.default], () => d.default.getCurrentUser()),
        G = (null == B ? void 0 : B.id) === N.author.id,
        H = (0, c.m)(y.p9.TIER_2),
        V = h.t(T);
    return (i.useEffect(() => {
        null == D && f.Z.shouldFetchWallpapers && g.k9();
    }, [D]),
    null == A)
        ? null
        : ((C = G
              ? E.intl.format(E.t.z847Tk, { wallpaper_name: null != (n = null == D ? void 0 : D.label) ? n : E.intl.string(E.t['UQMV/P']) })
              : E.intl.format(E.t['+lKndX'], {
                    username: null == R ? void 0 : R.nick,
                    wallpaper_name: null != (O = null == D ? void 0 : D.label) ? O : E.intl.string(E.t['UQMV/P'])
                })),
          w
              ? k || Z
                  ? V && F
                      ? (S = E.intl.formatToPlainString(E.t.PzTpVV, { wallpaperName: null != (j = null == D ? void 0 : D.label) ? j : E.intl.string(E.t['UQMV/P']) }))
                      : G ||
                        H ||
                        !F ||
                        (S = E.intl.format(E.t.JwUhHh, {
                            onClickNitro: () => {
                                (0, u.uL)(x.Z5c.NITRO_HOME);
                            }
                        }))
                  : (S = E.intl.format(E.t.dBxFsL, { learnMoreLink: p.Z.getArticleURL(x.BhN.DM_WALLPAPERS) }))
              : (S = E.intl.string(E.t['6JSOu7'])),
          (null == U ? void 0 : U.isViewable) &&
              F &&
              !G &&
              (I = (0, r.jsx)(a.zxk, {
                  className: v.action,
                  onClick: () => {
                      g.X(T, A, {
                          shouldClear: !V,
                          onError: () => {
                              (0, a.showToast)((0, a.createToast)(E.intl.string(E.t.F8FvU1), a.ToastType.FAILURE));
                          }
                      });
                  },
                  submitting: L,
                  children: E.intl.string(V ? E.t.o6850d : E.t['/ubFp6'])
              })),
          (0, r.jsx)(b.Z, {
              channel: T,
              content: C,
              subtitle: S,
              action: I,
              compact: P,
              message: N
          }));
}
