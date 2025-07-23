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
    h = n(411149),
    g = n(115215),
    _ = n(151480),
    b = n(680783),
    E = n(66420),
    x = n(981631),
    y = n(474936),
    v = n(388032),
    C = n(510064);
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
        k = (0, o.wjy)((0, s.ZP)()),
        {
            chatWallpaper: D,
            isUpdatingChatWallpaperFlag: M,
            lastSetMessageId: U
        } = (0, l.cj)([h.Z], () => ({
            chatWallpaper: h.Z.getWallpaperById(w),
            isUpdatingChatWallpaperFlag: h.Z.isUpdatingChatWallpaperFlagForChannel(P.id),
            lastSetMessageId: h.Z.getLastSetWallpaperMessageIdForChannel(P.id)
        })),
        F = (0, b.Z)(P.id),
        B = U === N.id,
        G = (0, l.e7)([p.default], () => p.default.getCurrentUser()),
        H = (null == G ? void 0 : G.id) === N.author.id,
        V = (0, u.m)(y.p9.TIER_2),
        z = g.t(P);
    return (i.useEffect(() => {
        null == D && h.Z.shouldFetchWallpapers && _.k9();
    }, [D]),
    null == w)
        ? null
        : ((I = H
              ? v.intl.format(v.t.z847Tk, { wallpaper_name: null != (n = null == D ? void 0 : D.label) ? n : v.intl.string(v.t['UQMV/P']) })
              : v.intl.format(v.t['+lKndX'], {
                    username: null == L ? void 0 : L.nick,
                    wallpaper_name: null != (O = null == D ? void 0 : D.label) ? O : v.intl.string(v.t['UQMV/P'])
                })),
          Z
              ? k || R
                  ? z && B
                      ? (S = v.intl.formatToPlainString(v.t.PzTpVV, { wallpaperName: null != (j = null == D ? void 0 : D.label) ? j : v.intl.string(v.t['UQMV/P']) }))
                      : H ||
                        V ||
                        !B ||
                        (S = v.intl.format(v.t.JwUhHh, {
                            onClickNitro: () => {
                                (0, d.uL)(x.Z5c.NITRO_HOME);
                            }
                        }))
                  : (S = v.intl.format(v.t.dBxFsL, { learnMoreLink: m.Z.getArticleURL(x.BhN.DM_WALLPAPERS) }))
              : (S = v.intl.string(v.t['6JSOu7'])),
          (null == F ? void 0 : F.isViewable) &&
              B &&
              !H &&
              (T = (0, r.jsx)(a.zx, {
                  className: C.action,
                  onClick: () => {
                      _.X(P, w, {
                          shouldClear: !z,
                          onError: () => {
                              (0, o.showToast)((0, o.createToast)(v.intl.string(v.t.F8FvU1), o.ToastType.FAILURE));
                          }
                      });
                  },
                  submitting: M,
                  children: v.intl.string(z ? v.t.o6850d : v.t['/ubFp6'])
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
