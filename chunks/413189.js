n.d(t, { Z: () => T });
var r = n(255367),
    i = n(73800),
    o = n(442837),
    a = n(680018),
    s = n(481060),
    l = n(410030),
    c = n(739566),
    u = n(612659),
    d = n(703656),
    f = n(594174),
    _ = n(63063),
    p = n(436952),
    h = n(411149),
    m = n(115215),
    g = n(151480),
    E = n(680783),
    b = n(66420),
    y = n(981631),
    O = n(474936),
    v = n(388032),
    I = n(664677);
function T(e) {
    var t, n, T, S;
    let A,
        N,
        C,
        { message: R, channel: P, compact: w } = e,
        D = null == (t = R.chatWallpaperInfo) ? void 0 : t.wallpaperId,
        { enabled: L } = (0, p.sX)({ location: "ChatWallpaperSetSystemMessage" }),
        x = p.qM.useExperiment({ location: "ChatWallpaperSetSystemMessage" }).lightMode,
        M = (0, c.ZP)(R),
        k = (0, s.wjy)((0, l.ZP)()),
        {
            chatWallpaper: j,
            isUpdatingChatWallpaperFlag: U,
            lastSetMessageId: G,
        } = (0, o.cj)([h.Z], () => ({
            chatWallpaper: h.Z.getWallpaperById(D),
            isUpdatingChatWallpaperFlag: h.Z.isUpdatingChatWallpaperFlagForChannel(P.id),
            lastSetMessageId: h.Z.getLastSetWallpaperMessageIdForChannel(P.id),
        })),
        B = (0, E.Z)(P.id),
        Z = G === R.id,
        F = (0, o.e7)([f.default], () => f.default.getCurrentUser()),
        V = (null == F ? void 0 : F.id) === R.author.id,
        H = (0, u.m)(O.p9.TIER_2),
        Y = m.t(P);
    return (i.useEffect(() => {
        null == j && h.Z.shouldFetchWallpapers && g.k9();
    }, [j]),
    null == D)
        ? null
        : ((A = V
              ? v.intl.format(v.t.z847Tk, {
                    wallpaper_name: null != (n = null == j ? void 0 : j.label) ? n : v.intl.string(v.t["UQMV/P"]),
                })
              : v.intl.format(v.t["+lKndX"], {
                    username: null == M ? void 0 : M.nick,
                    wallpaper_name: null != (T = null == j ? void 0 : j.label) ? T : v.intl.string(v.t["UQMV/P"]),
                })),
          L
              ? k || x
                  ? Y && Z
                      ? (N = v.intl.formatToPlainString(v.t.PzTpVV, {
                            wallpaperName:
                                null != (S = null == j ? void 0 : j.label) ? S : v.intl.string(v.t["UQMV/P"]),
                        }))
                      : V ||
                        H ||
                        !Z ||
                        (N = v.intl.format(v.t.JwUhHh, {
                            onClickNitro: () => {
                                (0, d.uL)(y.Z5c.NITRO_HOME);
                            },
                        }))
                  : (N = v.intl.format(v.t.dBxFsL, { learnMoreLink: _.Z.getArticleURL(y.BhN.DM_WALLPAPERS) }))
              : (N = v.intl.string(v.t["6JSOu7"])),
          (null == B ? void 0 : B.isViewable) &&
              Z &&
              !V &&
              (C = (0, r.jsx)("div", {
                  className: I.action,
                  children: (0, r.jsx)(a.z, {
                      variant: "primary",
                      text: v.intl.string(Y ? v.t.o6850d : v.t["/ubFp6"]),
                      loading: U,
                      onClick: () => {
                          g.X(P, D, {
                              shouldClear: !Y,
                              onError: () => {
                                  (0, s.showToast)((0, s.createToast)(v.intl.string(v.t.F8FvU1), s.ToastType.FAILURE));
                              },
                          });
                      },
                  }),
              })),
          (0, r.jsx)(b.Z, {
              channel: P,
              content: A,
              subtitle: N,
              action: C,
              compact: w,
              message: R,
          }));
}
