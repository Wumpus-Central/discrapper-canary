n.d(t, { Z: () => O });
var r = n(255367),
    i = n(73800),
    l = n(442837),
    a = n(755721),
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
    y = n(981631),
    x = n(474936),
    C = n(388032),
    v = n(510064);
function O(e) {
    var t, n, O, j;
    let I,
        S,
        T,
        { message: N, channel: P, compact: A } = e,
        w = null == (t = N.chatWallpaperInfo) ? void 0 : t.wallpaperId,
        { enabled: Z } = (0, f.sX)({ location: 'ChatWallpaperSetSystemMessage' }),
        R = f.qM.useExperiment({ location: 'ChatWallpaperSetSystemMessage' }).lightMode,
        L = (0, c.ZP)(N),
        D = (0, o.wjy)((0, s.ZP)()),
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
        V = (0, u.m)(x.p9.TIER_2),
        z = g.t(P);
    return (i.useEffect(() => {
        null == M && _.Z.shouldFetchWallpapers && h.k9();
    }, [M]),
    null == w)
        ? null
        : ((I = H
              ? C.intl.format(C.t.z847Tk, { wallpaper_name: null != (n = null == M ? void 0 : M.label) ? n : C.intl.string(C.t['UQMV/P']) })
              : C.intl.format(C.t['+lKndX'], {
                    username: null == L ? void 0 : L.nick,
                    wallpaper_name: null != (O = null == M ? void 0 : M.label) ? O : C.intl.string(C.t['UQMV/P'])
                })),
          Z
              ? D || R
                  ? z && B
                      ? (S = C.intl.formatToPlainString(C.t.PzTpVV, { wallpaperName: null != (j = null == M ? void 0 : M.label) ? j : C.intl.string(C.t['UQMV/P']) }))
                      : H ||
                        V ||
                        !B ||
                        (S = C.intl.format(C.t.JwUhHh, {
                            onClickNitro: () => {
                                (0, d.uL)(y.Z5c.NITRO_HOME);
                            }
                        }))
                  : (S = C.intl.format(C.t.dBxFsL, { learnMoreLink: m.Z.getArticleURL(y.BhN.DM_WALLPAPERS) }))
              : (S = C.intl.string(C.t['6JSOu7'])),
          (null == F ? void 0 : F.isViewable) &&
              B &&
              !H &&
              (T = (0, r.jsx)(a.zx, {
                  className: v.action,
                  onClick: () => {
                      h.X(P, w, {
                          shouldClear: !z,
                          onError: () => {
                              (0, o.showToast)((0, o.createToast)(C.intl.string(C.t.F8FvU1), o.ToastType.FAILURE));
                          }
                      });
                  },
                  submitting: k,
                  children: C.intl.string(z ? C.t.o6850d : C.t['/ubFp6'])
              })),
          (0, r.jsx)(E.Z, {
              channel: P,
              content: I,
              subtitle: S,
              action: T,
              compact: A,
              message: N
          }));
}
