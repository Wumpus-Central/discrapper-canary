n.d(t, { Z: () => O });
var r = n(200651),
    i = n(192379),
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
    v = n(388032),
    E = n(510064);
function O(e) {
    var t, n, O, j;
    let C,
        S,
        I,
        { message: N, channel: T, compact: P } = e,
        A = null == (t = N.chatWallpaperInfo) ? void 0 : t.wallpaperId,
        { enabled: w } = (0, m.sX)({ location: 'ChatWallpaperSetSystemMessage' }),
        Z = (0, s.ZP)(N),
        R = (0, a.wjy)((0, o.ZP)()),
        {
            chatWallpaper: k,
            isUpdatingChatWallpaperFlag: D,
            lastSetMessageId: L
        } = (0, l.cj)([f.Z], () => ({
            chatWallpaper: f.Z.getWallpaperById(A),
            isUpdatingChatWallpaperFlag: f.Z.isUpdatingChatWallpaperFlagForChannel(T.id),
            lastSetMessageId: f.Z.getLastSetWallpaperMessageIdForChannel(T.id)
        })),
        M = (0, _.Z)(T.id),
        U = L === N.id,
        F = (0, l.e7)([d.default], () => d.default.getCurrentUser()),
        B = (null == F ? void 0 : F.id) === N.author.id,
        G = (0, c.m)(y.p9.TIER_2),
        H = h.t(T);
    return (i.useEffect(() => {
        null == k && f.Z.shouldFetchWallpapers && g.k9();
    }, [k]),
    null == A)
        ? null
        : ((C = B
              ? v.intl.format(v.t.z847Tk, { wallpaper_name: null != (n = null == k ? void 0 : k.label) ? n : v.intl.string(v.t['UQMV/P']) })
              : v.intl.format(v.t['+lKndX'], {
                    username: null == Z ? void 0 : Z.nick,
                    wallpaper_name: null != (O = null == k ? void 0 : k.label) ? O : v.intl.string(v.t['UQMV/P'])
                })),
          w
              ? R
                  ? H && U
                      ? (S = v.intl.formatToPlainString(v.t.PzTpVV, { wallpaperName: null != (j = null == k ? void 0 : k.label) ? j : v.intl.string(v.t['UQMV/P']) }))
                      : B ||
                        G ||
                        !U ||
                        (S = v.intl.format(v.t.JwUhHh, {
                            onClickNitro: () => {
                                (0, u.uL)(x.Z5c.NITRO_HOME);
                            }
                        }))
                  : (S = v.intl.format(v.t.dBxFsL, { learnMoreLink: p.Z.getArticleURL(x.BhN.DM_WALLPAPERS) }))
              : (S = v.intl.string(v.t['6JSOu7'])),
          (null == M ? void 0 : M.isViewable) &&
              U &&
              !B &&
              (I = (0, r.jsx)(a.zxk, {
                  className: E.action,
                  onClick: () => {
                      g.X(T, A, {
                          shouldClear: !H,
                          onError: () => {
                              (0, a.showToast)((0, a.createToast)(v.intl.string(v.t.F8FvU1), a.ToastType.FAILURE));
                          }
                      });
                  },
                  submitting: D,
                  children: v.intl.string(H ? v.t.o6850d : v.t['/ubFp6'])
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
