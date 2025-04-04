n.d(t, { Z: () => d });
var r = n(200651);
n(192379);
var i = n(481060),
    o = n(518950),
    a = n(998502),
    s = n(388032);
function l(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function c(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                l(e, t, n[t]);
            });
    }
    return e;
}
let u = a.ZP.getEnableHardwareAcceleration() ? i.Xo$ : i.qEK,
    d = (e) => {
        let { user: t, guildId: n, avatarDecorationOverride: a, status: l, avatarSize: d = i.EFr.SIZE_120, 'aria-hidden': f = !1, className: _, animateOnHover: p = !1, questPreviewRewardAssetUrl: h = null } = e,
            {
                avatarDecorationSrc: m,
                avatarSrc: g,
                eventHandlers: E
            } = (0, o.Z)({
                user: t,
                guildId: n,
                size: d,
                showPending: !0,
                avatarDecorationOverride: a,
                animateOnHover: p
            });
        return (0, r.jsx)(
            u,
            c(
                {
                    avatarDecoration: null != m ? m : h,
                    src: g,
                    size: d,
                    status: l,
                    'aria-label': f ? void 0 : s.NW.string(s.t.lqaIxM),
                    'aria-hidden': f,
                    className: _
                },
                E
            )
        );
    };
