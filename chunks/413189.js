n.d(t, { Z: () => N });
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
    E = n(388032),
    v = n(510064);
function N(e) {
    var t, n, N, O;
    let j,
        C,
        S,
        { message: I, channel: T, compact: P } = e,
        A = null == (t = I.chatWallpaperInfo) ? void 0 : t.wallpaperId,
        { enabled: w } = (0, m.sX)({ location: 'ChatWallpaperSetSystemMessage' }),
        Z = (0, s.ZP)(I),
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
        W = L === I.id,
        U = (0, l.e7)([d.default], () => d.default.getCurrentUser()),
        F = (null == U ? void 0 : U.id) === I.author.id,
        B = (0, c.m)(y.p9.TIER_2),
        G = h.t(T);
    return (i.useEffect(() => {
        null == k && f.Z.shouldFetchWallpapers && g.k9();
    }, [k]),
    null == A)
        ? null
        : ((j = F
              ? E.NW.format(E.t.z847Tk, { wallpaper_name: null != (n = null == k ? void 0 : k.label) ? n : E.NW.string(E.t['UQMV/P']) })
              : E.NW.format(E.t['+lKndX'], {
                    username: null == Z ? void 0 : Z.nick,
                    wallpaper_name: null != (N = null == k ? void 0 : k.label) ? N : E.NW.string(E.t['UQMV/P'])
                })),
          w
              ? R
                  ? G && W
                      ? (C = E.NW.formatToPlainString(E.t.PzTpVV, { wallpaperName: null != (O = null == k ? void 0 : k.label) ? O : E.NW.string(E.t['UQMV/P']) }))
                      : F ||
                        B ||
                        !W ||
                        (C = E.NW.format(E.t.JwUhHh, {
                            onClickNitro: () => {
                                (0, u.uL)(x.Z5c.NITRO_HOME);
                            }
                        }))
                  : (C = E.NW.format(E.t.dBxFsL, { learnMoreLink: p.Z.getArticleURL(x.BhN.DM_WALLPAPERS) }))
              : (C = E.NW.string(E.t['6JSOu7'])),
          (null == M ? void 0 : M.isViewable) &&
              W &&
              !F &&
              (S = (0, r.jsx)(a.zxk, {
                  className: v.action,
                  onClick: () => {
                      g.X(T, A, {
                          shouldClear: !G,
                          onError: () => {
                              (0, a.showToast)((0, a.createToast)(E.NW.string(E.t.F8FvU1), a.ToastType.FAILURE));
                          }
                      });
                  },
                  submitting: D,
                  children: E.NW.string(G ? E.t.o6850d : E.t['/ubFp6'])
              })),
          (0, r.jsx)(b.Z, {
              channel: T,
              content: j,
              subtitle: C,
              action: S,
              compact: P,
              message: I
          }));
}
