n.d(t, { R: () => E });
var r = n(200651);
n(192379);
var i = n(120356),
    o = n.n(i),
    a = n(979554),
    s = n(481060),
    l = n(1585),
    c = n(125988),
    u = n(998502),
    d = n(388032),
    f = n(614490);
function _(e, t, n) {
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
function p(e) {
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
                _(e, t, n[t]);
            });
    }
    return e;
}
function h(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function m(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : h(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let g = u.ZP.getEnableHardwareAcceleration() ? s.Xo$ : s.qEK,
    E = (e) => {
        let { item: t, user: n, isHighlighted: i = !1, isPurchased: u = !1, avatarSize: _ = s.EFr.SIZE_152, avatarPlaceholderSrc: h } = e,
            E = (0, l.y9)(_),
            {
                avatarDecorationSrc: b,
                eventHandlers: y,
                avatarPlaceholderSrc: v
            } = (0, c.Z)({
                user: n,
                avatarDecorationOverride: (null == t ? void 0 : t.type) === a.Z.AVATAR_DECORATION ? t : void 0,
                size: E,
                onlyAnimateOnHover: !i
            });
        return (0, r.jsx)(
            g,
            m(p({}, y), {
                avatarDecoration: b,
                src: i ? (null == n ? void 0 : n.getAvatarURL(void 0, 152, !0)) : null != h ? h : v,
                imageClassName: i ? f.fadeInAvatarImg : void 0,
                className: o()(f.avatar, { [f.avatarPurchased]: u && !i }),
                size: _,
                'aria-label': d.NW.string(d.t.lqaIxM)
            })
        );
    };
