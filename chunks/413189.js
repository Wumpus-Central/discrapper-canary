n.d(t, { Z: () => x });
var r = n(951288),
    i = n(647438),
    l = n(442837),
    o = n(680018),
    a = n(481060),
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
    y = n(664677);
function x(e) {
    var t, n, x, j;
    let I,
        S,
        T,
        { message: P, channel: N, compact: A } = e,
        w = null == (t = P.chatWallpaperInfo) ? void 0 : t.wallpaperId,
        { enabled: Z } = (0, f.sX)({ location: "ChatWallpaperSetSystemMessage" }),
        R = f.qM.useExperiment({ location: "ChatWallpaperSetSystemMessage" }).lightMode,
        D = (0, c.ZP)(P),
        L = (0, a.wjy)((0, s.ZP)()),
        {
            chatWallpaper: M,
            isUpdatingChatWallpaperFlag: k,
            lastSetMessageId: U,
        } = (0, l.cj)([g.Z], () => ({
            chatWallpaper: g.Z.getWallpaperById(w),
            isUpdatingChatWallpaperFlag: g.Z.isUpdatingChatWallpaperFlagForChannel(N.id),
            lastSetMessageId: g.Z.getLastSetWallpaperMessageIdForChannel(N.id),
        })),
        F = (0, b.Z)(N.id),
        B = U === P.id,
        G = (0, l.e7)([p.default], () => p.default.getCurrentUser()),
        H = (null == G ? void 0 : G.id) === P.author.id,
        V = (0, u.m)(v.p9.TIER_2),
        z = _.t(N);
    return (i.useEffect(() => {
        null == M && g.Z.shouldFetchWallpapers && h.k9();
    }, [M]),
    null == w)
        ? null
        : ((I = H
              ? O.intl.format(O.t.z847Tk, {
                    wallpaper_name: null != (n = null == M ? void 0 : M.label) ? n : O.intl.string(O.t["UQMV/P"]),
                })
              : O.intl.format(O.t["+lKndX"], {
                    username: null == D ? void 0 : D.nick,
                    wallpaper_name: null != (x = null == M ? void 0 : M.label) ? x : O.intl.string(O.t["UQMV/P"]),
                })),
          Z
              ? L || R
                  ? z && B
                      ? (S = O.intl.formatToPlainString(O.t.PzTpVV, {
                            wallpaperName:
                                null != (j = null == M ? void 0 : M.label) ? j : O.intl.string(O.t["UQMV/P"]),
                        }))
                      : H ||
                        V ||
                        !B ||
                        (S = O.intl.format(O.t.JwUhHh, {
                            onClickNitro: () => {
                                (0, d.uL)(C.Z5c.NITRO_HOME);
                            },
                        }))
                  : (S = O.intl.format(O.t.dBxFsL, { learnMoreLink: m.Z.getArticleURL(C.BhN.DM_WALLPAPERS) }))
              : (S = O.intl.string(O.t["6JSOu7"])),
          (null == F ? void 0 : F.isViewable) &&
              B &&
              !H &&
              (T = (0, r.jsx)("div", {
                  className: y.action,
                  children: (0, r.jsx)(o.z, {
                      variant: "primary",
                      text: O.intl.string(z ? O.t.o6850d : O.t["/ubFp6"]),
                      loading: k,
                      onClick: () => {
                          h.X(N, w, {
                              shouldClear: !z,
                              onError: () => {
                                  (0, a.showToast)((0, a.createToast)(O.intl.string(O.t.F8FvU1), a.ToastType.FAILURE));
                              },
                          });
                      },
                  }),
              })),
          (0, r.jsx)(E.Z, {
              channel: N,
              content: I,
              subtitle: S,
              action: T,
              compact: A,
              message: P,
          }));
}
