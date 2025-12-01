n.d(t, { Z: () => y }), n(388685);
var r = n(473749),
    i = n(120356),
    a = n.n(i),
    o = n(866442),
    s = n(442837),
    l = n(481060),
    c = n(607070),
    u = n(629935),
    d = n(999203),
    f = n(168631),
    p = n(579132),
    _ = n(671955);
function m(e, t, n) {
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
function h(e) {
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
                m(e, t, n[t]);
            });
    }
    return e;
}
let g = {
        [_.l.POPOUT]: "user-profile-popout",
        [_.l.MODAL]: "user-profile-modal",
        [_.l.MODAL_V2]: "user-profile-modal-v2",
        [_.l.SIDEBAR]: "user-profile-sidebar",
        [_.l.VIDEO_TILE_BACKGROUND]: "user-profile-video-tile-background",
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
    let { theme: t, themeType: n, primaryColor: i, secondaryColor: _, forceUserTheme: m = !1 } = e,
        [y, O] = (0, s.Wu)([c.Z], () => [c.Z.desaturateUserColors, c.Z.syncProfileThemeWithUserTheme]),
        v = (0, p.f)(t),
        S = O || m ? (null == v ? void 0 : v.overlaySyncedWithUserTheme) : null == v ? void 0 : v.overlay;
    return {
        profileThemeStyle: (0, r.useMemo)(() => {
            if (null == i || null == _ || null == v || null == S) return b;
            let e = (e, t) => (0, o.ho)(e, y, null, t);
            return h(
                {
                    "--profile-gradient-primary-color": e(i),
                    "--profile-gradient-secondary-color": e(_),
                    "--profile-gradient-overlay-color": S,
                    "--profile-gradient-button-color": e((0, f.ZB)(i)),
                    "--profile-gradient-modal-background-color": e((0, f.oU)(i, _, O || m ? t : void 0)),
                },
                (0, u.W4)({
                    enabled: !0,
                    primaryColor: i,
                    secondaryColor: _,
                    isDarkTheme: (0, l.wjy)(t),
                    textMixAmount: 25,
                }),
            );
        }, [i, _, v, S, O, m, t, y]),
        profileThemeClassName: a()((0, l.QeD)(t), null != n ? { [g[n]]: !0 } : void 0, {
            [d.e3]: null != i,
            [E]: null != i,
        }),
    };
}
