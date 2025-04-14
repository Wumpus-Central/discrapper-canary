n.d(t, { Z: () => v });
var r = n(200651);
n(192379);
var i = n(120356),
    o = n.n(i),
    a = n(442837),
    s = n(481060),
    l = n(906732),
    c = n(1585),
    u = n(158776),
    d = n(998502),
    f = n(445924),
    _ = n(654904),
    p = n(486324),
    h = n(305566);
function m(e, t, n) {
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
function g(e) {
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
                m(e, t, n[t]);
            });
    }
    return e;
}
function E(e, t) {
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
function b(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : E(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let y = d.ZP.getEnableHardwareAcceleration() ? s.Xo$ : s.qEK;
function v(e) {
    let { user: t, guild: n, displayProfile: i, canUsePremiumCustomization: d, previewAvatar: m, previewAvatarDecoration: E, previewTheme: v, previewPrimaryColor: O, className: I, disabledInputs: S, isTryItOutFlow: T, onUpsellClick: N } = e,
        { analyticsLocations: A } = (0, l.ZP)(),
        C = (0, a.e7)([u.Z], () => u.Z.getStatus(t.id)),
        R = null == n || (null == i ? void 0 : i.canUsePremiumProfileCustomization) || d,
        P = (0, r.jsx)(y, {
            src: m,
            avatarDecoration: E,
            imageClassName: o()(I, { [h.overlay]: !S }),
            size: s.EFr.SIZE_80,
            'aria-label': t.username,
            status: C,
            statusTooltip: !1,
            statusBackdropColor: null != O ? (0, s.QFD)(v) : void 0
        });
    return S
        ? (0, r.jsx)('div', {
              className: h.avatar,
              children: P
          })
        : R
          ? (0, r.jsx)(s.yRy, {
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (0, r.jsx)(f.Z, {
                        className: h.menu,
                        onClose: t,
                        onChangeAvatar: () => (0, _.$r)(p.pC.AVATAR, null == n ? void 0 : n.id, T),
                        onChangeAvatarDecoration: () => {
                            (0, c.ps)({
                                guild: null == n ? void 0 : n,
                                analyticsLocations: A,
                                isTryItOutFlow: T
                            });
                        }
                    });
                },
                children: (e) =>
                    (0, r.jsxs)(
                        s.P3F,
                        b(g({}, e), {
                            className: o()(h.avatar, h.clickable),
                            children: [
                                P,
                                (0, r.jsx)(s.vdY, {
                                    size: 'custom',
                                    className: h.overlayIcon,
                                    width: 20,
                                    height: 20,
                                    color: 'white'
                                })
                            ]
                        })
                    )
            })
          : (0, r.jsxs)(s.P3F, {
                onClick: N,
                className: o()(h.avatar, h.clickable),
                children: [
                    P,
                    (0, r.jsx)(s.SrA, {
                        size: 'custom',
                        className: h.overlayIcon,
                        width: 20,
                        height: 20,
                        color: 'white'
                    })
                ]
            });
}
