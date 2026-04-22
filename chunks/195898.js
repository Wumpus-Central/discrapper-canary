"use strict";
n.d(t, { A: () => g });
var r = n(64700),
    i = n(503698),
    s = n.n(i),
    a = n(317097),
    o = n(311907),
    l = n(366010),
    u = n(112834),
    d = n(775602),
    c = n(345815),
    _ = n(590703),
    f = n(543699),
    E = n(112847),
    h = n(996988);
let p = {
        [h.d.POPOUT]: "user-profile-popout",
        [h.d.MODAL]: "user-profile-modal",
        [h.d.MODAL_V2]: "user-profile-modal-v2",
        [h.d.SIDEBAR]: "user-profile-sidebar",
        [h.d.VIDEO_TILE_BACKGROUND]: "user-profile-video-tile-background",
    },
    m = Object.freeze({
        "--profile-gradient-primary-color": "var(--background-surface-high)",
        "--profile-gradient-secondary-color": "var(--background-surface-high)",
        "--profile-gradient-overlay-color": "rgba(0, 0, 0, 0)",
        "--profile-gradient-button-color": "var(--background-mod-subtle)",
        "--profile-gradient-modal-background-color": "var(--background-base-lower)",
    });
function g(e) {
    let { theme: t, themeType: n, primaryColor: i, secondaryColor: h, forceUserTheme: g = !1 } = e,
        [A, I] = (0, o.yK)([d.A], () => [d.A.desaturateUserColors, d.A.syncProfileThemeWithUserTheme]),
        T = (0, E.k)(t),
        S = I || g ? T?.overlaySyncedWithUserTheme : T?.overlay;
    return {
        profileThemeStyle: (0, r.useMemo)(() => {
            if (null == i || null == h || null == T || null == S) return m;
            let e = (e, t) => (0, a.$k)(e, A, null, t);
            return {
                "--profile-gradient-primary-color": e(i),
                "--profile-gradient-secondary-color": e(h),
                "--profile-gradient-overlay-color": S,
                "--profile-gradient-button-color": e((0, f.wg)(i)),
                "--profile-gradient-modal-background-color": e((0, f.v2)(i, h, I || g ? t : void 0)),
                ...(0, c.Zk)({
                    enabled: !0,
                    primaryColor: i,
                    secondaryColor: h,
                    isDarkTheme: (0, l.M)(t),
                    textMixAmount: 25,
                }),
            };
        }, [i, h, T, S, I, g, t, A]),
        profileThemeClassName: s()((0, u.m)(t), null != n ? { [p[n]]: !0 } : void 0, {
            [_.Gc]: null != i,
            "custom-user-profile-theme": null != i,
        }),
    };
}
