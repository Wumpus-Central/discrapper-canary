n.d(t, { Z: () => y });
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
    g = n(411149),
    _ = n(115215),
    h = n(151480),
    b = n(680783),
    E = n(66420),
    C = n(981631),
    v = n(474936),
    O = n(388032),
    x = n(510064);
function y(e) {
    var t, n, y, I;
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
        } = (0, l.cj)([g.Z], () => ({
            chatWallpaper: g.Z.getWallpaperById(w),
            isUpdatingChatWallpaperFlag: g.Z.isUpdatingChatWallpaperFlagForChannel(P.id),
            lastSetMessageId: g.Z.getLastSetWallpaperMessageIdForChannel(P.id)
        })),
        F = (0, b.Z)(P.id),
        B = U === N.id,
        G = (0, l.e7)([p.default], () => p.default.getCurrentUser()),
        V = (null == G ? void 0 : G.id) === N.author.id,
        H = (0, u.m)(v.p9.TIER_2),
        z = _.t(P);
    return (i.useEffect(() => {
        null == M && g.Z.shouldFetchWallpapers && h.k9();
    }, [M]),
    null == w)
        ? null
        : ((j = V
              ? O.intl.format(O.t.z847Tk, { wallpaper_name: null != (n = null == M ? void 0 : M.label) ? n : O.intl.string(O.t['UQMV/P']) })
              : O.intl.format(O.t['+lKndX'], {
                    username: null == D ? void 0 : D.nick,
                    wallpaper_name: null != (y = null == M ? void 0 : M.label) ? y : O.intl.string(O.t['UQMV/P'])
                })),
          Z
              ? L || R
                  ? z && B
                      ? (S = O.intl.formatToPlainString(O.t.PzTpVV, { wallpaperName: null != (I = null == M ? void 0 : M.label) ? I : O.intl.string(O.t['UQMV/P']) }))
                      : V ||
                        H ||
                        !B ||
                        (S = O.intl.format(O.t.JwUhHh, {
                            onClickNitro: () => {
                                (0, d.uL)(C.Z5c.NITRO_HOME);
                            }
                        }))
                  : (S = O.intl.format(O.t.dBxFsL, { learnMoreLink: m.Z.getArticleURL(C.BhN.DM_WALLPAPERS) }))
              : (S = O.intl.string(O.t['6JSOu7'])),
          (null == F ? void 0 : F.isViewable) &&
              B &&
              !V &&
              (T = (0, r.jsx)('div', {
                  className: x.action,
                  children: (0, r.jsx)(a.z, {
                      variant: 'primary',
                      text: O.intl.string(z ? O.t.o6850d : O.t['/ubFp6']),
                      loading: k,
                      onClick: () => {
                          h.X(P, w, {
                              shouldClear: !z,
                              onError: () => {
                                  (0, o.showToast)((0, o.createToast)(O.intl.string(O.t.F8FvU1), o.ToastType.FAILURE));
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
