"use strict";
n.d(t, { A: () => E });
var r = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(317097),
    o = n(311907),
    l = n(397927),
    u = n(775602),
    c = n(345815),
    d = n(590703),
    _ = n(543699),
    f = n(112847),
    p = n(996988);
let h = {
        [p.d.POPOUT]: "user-profile-popout",
        [p.d.MODAL]: "user-profile-modal",
        [p.d.MODAL_V2]: "user-profile-modal-v2",
        [p.d.SIDEBAR]: "user-profile-sidebar",
        [p.d.VIDEO_TILE_BACKGROUND]: "user-profile-video-tile-background",
    },
    m = "custom-user-profile-theme",
    g = Object.freeze({
        "--profile-gradient-primary-color": "var(--background-surface-high)",
        "--profile-gradient-secondary-color": "var(--background-surface-high)",
        "--profile-gradient-overlay-color": "rgba(0, 0, 0, 0)",
        "--profile-gradient-button-color": "var(--background-mod-subtle)",
        "--profile-gradient-modal-background-color": "var(--background-base-lower)",
    });
function E(e) {
    let { theme: t, themeType: n, primaryColor: i, secondaryColor: p, forceUserTheme: E = !1 } = e,
        [A, I] = (0, o.yK)([u.A], () => [u.A.desaturateUserColors, u.A.syncProfileThemeWithUserTheme]),
        T = (0, f.k)(t),
        y = I || E ? T?.overlaySyncedWithUserTheme : T?.overlay;
    return {
        profileThemeStyle: (0, r.useMemo)(() => {
            if (null == i || null == p || null == T || null == y) return g;
            let e = (e, t) => (0, s.$k)(e, A, null, t);
            return {
                "--profile-gradient-primary-color": e(i),
                "--profile-gradient-secondary-color": e(p),
                "--profile-gradient-overlay-color": y,
                "--profile-gradient-button-color": e((0, _.wg)(i)),
                "--profile-gradient-modal-background-color": e((0, _.v2)(i, p, I || E ? t : void 0)),
                ...(0, c.Zk)({
                    enabled: !0,
                    primaryColor: i,
                    secondaryColor: p,
                    isDarkTheme: (0, l.Mwr)(t),
                    textMixAmount: 25,
                }),
            };
        }, [i, p, T, y, I, E, t, A]),
        profileThemeClassName: a()((0, l.mo9)(t), null != n ? { [h[n]]: !0 } : void 0, {
            [d.Gc]: null != i,
            [m]: null != i,
        }),
    };
}
