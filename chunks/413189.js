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
    v = n(388032),
    y = n(510064);
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
              ? v.intl.format(v.t.z847Tk, { wallpaper_name: null != (n = null == M ? void 0 : M.label) ? n : v.intl.string(v.t['UQMV/P']) })
              : v.intl.format(v.t['+lKndX'], {
                    username: null == D ? void 0 : D.nick,
                    wallpaper_name: null != (x = null == M ? void 0 : M.label) ? x : v.intl.string(v.t['UQMV/P'])
                })),
          Z
              ? L || R
                  ? z && B
                      ? (S = v.intl.formatToPlainString(v.t.PzTpVV, { wallpaperName: null != (I = null == M ? void 0 : M.label) ? I : v.intl.string(v.t['UQMV/P']) }))
                      : H ||
                        V ||
                        !B ||
                        (S = v.intl.format(v.t.JwUhHh, {
                            onClickNitro: () => {
                                (0, d.uL)(C.Z5c.NITRO_HOME);
                            }
                        }))
                  : (S = v.intl.format(v.t.dBxFsL, { learnMoreLink: m.Z.getArticleURL(C.BhN.DM_WALLPAPERS) }))
              : (S = v.intl.string(v.t['6JSOu7'])),
          (null == F ? void 0 : F.isViewable) &&
              B &&
              !H &&
              (T = (0, r.jsx)('div', {
                  className: y.action,
                  children: (0, r.jsx)(a.z, {
                      variant: 'primary',
                      text: v.intl.string(z ? v.t.o6850d : v.t['/ubFp6']),
                      loading: k,
                      onClick: () => {
                          h.X(P, w, {
                              shouldClear: !z,
                              onError: () => {
                                  (0, o.showToast)((0, o.createToast)(v.intl.string(v.t.F8FvU1), o.ToastType.FAILURE));
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
