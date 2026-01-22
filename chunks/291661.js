n.d(t, {
    A: () => d,
});
var r = n(627968);
n(64700);
var i = n(397927),
    a = n(854627),
    s = n(837921),
    o = n(985018);

function l(e, t, n) {
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

function c(e) {
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
                l(e, t, n[t]);
            });
    }
    return e;
}
let u = s.Ay.getEnableHardwareAcceleration() ? i.JsQ : i.euF,
    d = (e) => {
        let {
                user: t,
                guildId: n,
                avatarDecorationOverride: s,
                status: l,
                avatarSize: d = i._3J.SIZE_120,
                "aria-hidden": f = !1,
                className: p,
                animateOnHover: _ = !1,
                questPreviewRewardAssetUrl: h = null,
            } = e,
            {
                avatarDecorationSrc: m,
                avatarSrc: g,
                eventHandlers: E,
            } = (0, a.A)({
                userId: t.id,
                guildId: n,
                size: d,
                showPending: !0,
                avatarDecorationOverride: s,
                animateOnHover: _,
            });
        return (0, r.jsx)(
            u,
            c(
                {
                    avatarDecoration: null != m ? m : h,
                    src: g,
                    size: d,
                    status: l,
                    "aria-label": f ? void 0 : o.intl.string(o.t.lqaIxI),
                    "aria-hidden": f,
                    className: p,
                },
                E,
            ),
        );
    };
