n.d(t, { Z: () => T });
var r = n(951288),
    i = n(647438),
    a = n(442837),
    o = n(680018),
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
        C,
        N,
        { message: R, channel: P, compact: w } = e,
        D = null == (t = R.chatWallpaperInfo) ? void 0 : t.wallpaperId,
        { enabled: x } = (0, p.sX)({ location: "ChatWallpaperSetSystemMessage" }),
        L = p.qM.useExperiment({ location: "ChatWallpaperSetSystemMessage" }).lightMode,
        j = (0, c.ZP)(R),
        M = (0, s.wjy)((0, l.ZP)()),
        {
            chatWallpaper: k,
            isUpdatingChatWallpaperFlag: U,
            lastSetMessageId: G,
        } = (0, a.cj)([h.Z], () => ({
            chatWallpaper: h.Z.getWallpaperById(D),
            isUpdatingChatWallpaperFlag: h.Z.isUpdatingChatWallpaperFlagForChannel(P.id),
            lastSetMessageId: h.Z.getLastSetWallpaperMessageIdForChannel(P.id),
        })),
        B = (0, E.Z)(P.id),
        Z = G === R.id,
        V = (0, a.e7)([f.default], () => f.default.getCurrentUser()),
        F = (null == V ? void 0 : V.id) === R.author.id,
        H = (0, u.m)(O.p9.TIER_2),
        Y = m.t(P);
    return (i.useEffect(() => {
        null == k && h.Z.shouldFetchWallpapers && g.k9();
    }, [k]),
    null == D)
        ? null
        : ((A = F
              ? v.intl.format(v.t.z847Tk, {
                    wallpaper_name: null != (n = null == k ? void 0 : k.label) ? n : v.intl.string(v.t["UQMV/P"]),
                })
              : v.intl.format(v.t["+lKndX"], {
                    username: null == j ? void 0 : j.nick,
                    wallpaper_name: null != (T = null == k ? void 0 : k.label) ? T : v.intl.string(v.t["UQMV/P"]),
                })),
          x
              ? M || L
                  ? Y && Z
                      ? (C = v.intl.formatToPlainString(v.t.PzTpVV, {
                            wallpaperName:
                                null != (S = null == k ? void 0 : k.label) ? S : v.intl.string(v.t["UQMV/P"]),
                        }))
                      : F ||
                        H ||
                        !Z ||
                        (C = v.intl.format(v.t.JwUhHh, {
                            onClickNitro: () => {
                                (0, d.uL)(y.Z5c.NITRO_HOME);
                            },
                        }))
                  : (C = v.intl.format(v.t.dBxFsL, { learnMoreLink: _.Z.getArticleURL(y.BhN.DM_WALLPAPERS) }))
              : (C = v.intl.string(v.t["6JSOu7"])),
          (null == B ? void 0 : B.isViewable) &&
              Z &&
              !F &&
              (N = (0, r.jsx)("div", {
                  className: I.action,
                  children: (0, r.jsx)(o.z, {
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
              subtitle: C,
              action: N,
              compact: w,
              message: R,
          }));
}
