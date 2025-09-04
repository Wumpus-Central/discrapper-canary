n.d(t, { Z: () => g });
var r = n(951288),
    i = n(647438),
    a = n(442837),
    o = n(680018),
    s = n(481060),
    l = n(739566),
    c = n(594174),
    u = n(411149),
    d = n(115215),
    f = n(151480),
    _ = n(680783),
    p = n(66420),
    h = n(388032),
    m = n(664677);
function g(e) {
    var t, n, g;
    let E,
        b,
        { message: y, channel: O, compact: v } = e,
        I = null == (t = y.chatWallpaperInfo) ? void 0 : t.wallpaperId,
        S = (0, l.ZP)(y),
        {
            chatWallpaper: T,
            isUpdatingChatWallpaperFlag: A,
            lastSetMessageId: C,
        } = (0, a.cj)([u.Z], () => ({
            chatWallpaper: u.Z.getWallpaperById(I),
            isUpdatingChatWallpaperFlag: u.Z.isUpdatingChatWallpaperFlagForChannel(O.id),
            lastSetMessageId: u.Z.getLastSetWallpaperMessageIdForChannel(O.id),
        })),
        N = (0, _.Z)(O.id),
        R = C === y.id,
        P = (0, a.e7)([c.default], () => c.default.getCurrentUser()),
        w = (null == P ? void 0 : P.id) === y.author.id,
        D = d.t(O);
    if (
        (i.useEffect(() => {
            null == T && u.Z.shouldFetchWallpapers && f.k9();
        }, [T]),
        null == I)
    )
        return null;
    E = w
        ? h.intl.format(h.t.z847Tk, {
              wallpaper_name: null != (n = null == T ? void 0 : T.label) ? n : h.intl.string(h.t["UQMV/P"]),
          })
        : h.intl.format(h.t["+lKndX"], {
              username: null == S ? void 0 : S.nick,
              wallpaper_name: null != (g = null == T ? void 0 : T.label) ? g : h.intl.string(h.t["UQMV/P"]),
          });
    let x = h.intl.string(h.t["6JSOu7"]);
    return (
        (null == N ? void 0 : N.isViewable) &&
            R &&
            !w &&
            (b = (0, r.jsx)("div", {
                className: m.action,
                children: (0, r.jsx)(o.z, {
                    variant: "primary",
                    text: h.intl.string(D ? h.t.o6850d : h.t["/ubFp6"]),
                    loading: A,
                    onClick: () => {
                        f.X(O, I, {
                            shouldClear: !D,
                            onError: () => {
                                (0, s.showToast)((0, s.createToast)(h.intl.string(h.t.F8FvU1), s.ToastType.FAILURE));
                            },
                        });
                    },
                }),
            })),
        (0, r.jsx)(p.Z, {
            channel: O,
            content: E,
            subtitle: x,
            action: b,
            compact: v,
            message: y,
        })
    );
}
