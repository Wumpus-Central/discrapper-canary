n.d(t, { A: () => y }), n(896048);
var r = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(317097),
    o = n(311907),
    l = n(397927),
    c = n(775602),
    u = n(345815),
    d = n(590703),
    f = n(543699),
    p = n(112847),
    _ = n(996988);
function h(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function m(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                h(e, t, n[t]);
            });
    }
    return e;
}
let g = {
        [_.d.POPOUT]: "user-profile-popout",
        [_.d.MODAL]: "user-profile-modal",
        [_.d.MODAL_V2]: "user-profile-modal-v2",
        [_.d.SIDEBAR]: "user-profile-sidebar",
        [_.d.VIDEO_TILE_BACKGROUND]: "user-profile-video-tile-background",
    },
    E = "custom-user-profile-theme",
    b = Object.freeze({
        "--profile-gradient-primary-color": "var(--background-surface-high)",
        "--profile-gradient-secondary-color": "var(--background-surface-high)",
        "--profile-gradient-overlay-color": "rgba(0, 0, 0, 0)",
        "--profile-gradient-button-color": "var(--background-mod-subtle)",
        "--profile-gradient-modal-background-color": "var(--background-base-lower)",
    });
function y(e) {
    let { theme: t, themeType: n, primaryColor: i, secondaryColor: _, forceUserTheme: h = !1 } = e,
        [y, O] = (0, o.yK)([c.A], () => [c.A.desaturateUserColors, c.A.syncProfileThemeWithUserTheme]),
        A = (0, p.k)(t),
        v = O || h ? (null == A ? void 0 : A.overlaySyncedWithUserTheme) : null == A ? void 0 : A.overlay;
    return {
        profileThemeStyle: (0, r.useMemo)(() => {
            if (null == i || null == _ || null == A || null == v) return b;
            let e = (e, t) => (0, s.$k)(e, y, null, t);
            return m(
                {
                    "--profile-gradient-primary-color": e(i),
                    "--profile-gradient-secondary-color": e(_),
                    "--profile-gradient-overlay-color": v,
                    "--profile-gradient-button-color": e((0, f.wg)(i)),
                    "--profile-gradient-modal-background-color": e((0, f.v2)(i, _, O || h ? t : void 0)),
                },
                (0, u.Zk)({
                    enabled: !0,
                    primaryColor: i,
                    secondaryColor: _,
                    isDarkTheme: (0, l.Mwr)(t),
                    textMixAmount: 25,
                }),
            );
        }, [i, _, A, v, O, h, t, y]),
        profileThemeClassName: a()((0, l.mo9)(t), null != n ? { [g[n]]: !0 } : void 0, {
            [d.Gc]: null != i,
            [E]: null != i,
        }),
    };
}
