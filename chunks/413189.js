n.d(t, { Z: () => x });
var r = n(255367),
    i = n(73800),
    l = n(442837),
    a = n(680018),
    o = n(481060),
    s = n(410030),
    c = n(739566),
    u = n(612659),
    d = n(703656),
    p = n(594174),
    m = n(63063),
    f = n(436952),
    _ = n(411149),
    g = n(115215),
    h = n(151480),
    b = n(680783),
    E = n(66420),
    C = n(981631),
    O = n(474936),
    y = n(388032),
    v = n(510064);
function x(e) {
    var t, n, x, I;
    let j,
        S,
        T,
        { message: N, channel: P, compact: A } = e,
        w = null == (t = N.chatWallpaperInfo) ? void 0 : t.wallpaperId,
        { enabled: Z } = (0, f.sX)({ location: 'ChatWallpaperSetSystemMessage' }),
        R = f.qM.useExperiment({ location: 'ChatWallpaperSetSystemMessage' }).lightMode,
        D = (0, c.ZP)(N),
        L = (0, o.wjy)((0, s.ZP)()),
        {
            chatWallpaper: M,
            isUpdatingChatWallpaperFlag: k,
            lastSetMessageId: U
        } = (0, l.cj)([_.Z], () => ({
            chatWallpaper: _.Z.getWallpaperById(w),
            isUpdatingChatWallpaperFlag: _.Z.isUpdatingChatWallpaperFlagForChannel(P.id),
            lastSetMessageId: _.Z.getLastSetWallpaperMessageIdForChannel(P.id)
        })),
        F = (0, b.Z)(P.id),
        B = U === N.id,
        G = (0, l.e7)([p.default], () => p.default.getCurrentUser()),
        H = (null == G ? void 0 : G.id) === N.author.id,
        V = (0, u.m)(O.p9.TIER_2),
        z = g.t(P);
    return (i.useEffect(() => {
        null == M && _.Z.shouldFetchWallpapers && h.k9();
    }, [M]),
    null == w)
        ? null
        : ((j = H
              ? y.intl.format(y.t.z847Tk, { wallpaper_name: null != (n = null == M ? void 0 : M.label) ? n : y.intl.string(y.t['UQMV/P']) })
              : y.intl.format(y.t['+lKndX'], {
                    username: null == D ? void 0 : D.nick,
                    wallpaper_name: null != (x = null == M ? void 0 : M.label) ? x : y.intl.string(y.t['UQMV/P'])
                })),
          Z
              ? L || R
                  ? z && B
                      ? (S = y.intl.formatToPlainString(y.t.PzTpVV, { wallpaperName: null != (I = null == M ? void 0 : M.label) ? I : y.intl.string(y.t['UQMV/P']) }))
                      : H ||
                        V ||
                        !B ||
                        (S = y.intl.format(y.t.JwUhHh, {
                            onClickNitro: () => {
                                (0, d.uL)(C.Z5c.NITRO_HOME);
                            }
                        }))
                  : (S = y.intl.format(y.t.dBxFsL, { learnMoreLink: m.Z.getArticleURL(C.BhN.DM_WALLPAPERS) }))
              : (S = y.intl.string(y.t['6JSOu7'])),
          (null == F ? void 0 : F.isViewable) &&
              B &&
              !H &&
              (T = (0, r.jsx)('div', {
                  className: v.action,
                  children: (0, r.jsx)(a.z, {
                      variant: 'primary',
                      text: y.intl.string(z ? y.t.o6850d : y.t['/ubFp6']),
                      loading: k,
                      onClick: () => {
                          h.X(P, w, {
                              shouldClear: !z,
                              onError: () => {
                                  (0, o.showToast)((0, o.createToast)(y.intl.string(y.t.F8FvU1), o.ToastType.FAILURE));
                              }
                          });
                      }
                  })
              })),
          (0, r.jsx)(E.Z, {
              channel: P,
              content: j,
              subtitle: S,
              action: T,
              compact: A,
              message: N
          }));
}
