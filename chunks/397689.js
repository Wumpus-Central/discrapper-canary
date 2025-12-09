n.d(t, { Z: () => v });
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(481060),
    c = n(906732),
    u = n(1585),
    d = n(158776),
    f = n(998502),
    p = n(445924),
    _ = n(654904),
    m = n(486324),
    h = n(86698);
function g(e, t, n) {
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
function E(e) {
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
                g(e, t, n[t]);
            });
    }
    return e;
}
function b(e, t) {
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
function y(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : b(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let O = f.ZP.getEnableHardwareAcceleration() ? l.Xo$ : l.qEK;
function v(e) {
    let {
            user: t,
            guild: n,
            displayProfile: a,
            canUsePremiumCustomization: f,
            previewAvatar: g,
            previewAvatarDecorationSrc: b,
            previewTheme: v,
            previewPrimaryColor: S,
            className: I,
            disabledInputs: T,
            isTryItOut: A,
            onUpsellClick: C,
        } = e,
        N = i.useRef(null),
        { analyticsLocations: P, newestAnalyticsLocation: R } = (0, c.ZP)(),
        D = (0, s.e7)([d.Z], () => d.Z.getStatus(t.id)),
        w = null == n || (null == a ? void 0 : a.canUsePremiumProfileCustomization) || f,
        x = (0, r.jsx)(O, {
            src: g,
            avatarDecoration: b,
            imageClassName: o()(I, { [h.overlay]: !T }),
            size: l.EFr.SIZE_80,
            "aria-label": t.username,
            status: D,
            statusTooltip: !1,
            statusBackdropColor: null != S ? (0, l.QFD)(v) : void 0,
        });
    return T
        ? (0, r.jsx)("div", {
              className: h.avatar,
              children: x,
          })
        : w
          ? (0, r.jsx)(l.yRy, {
                targetElementRef: N,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (0, r.jsx)(p.Z, {
                        className: h.menu,
                        onClose: t,
                        onChangeAvatar: () =>
                            (0, _.$r)({
                                uploadType: m.pC.AVATAR,
                                guildId: null == n ? void 0 : n.id,
                                analyticsSource: R,
                                isTryItOut: A,
                            }),
                        onChangeAvatarDecoration: () => {
                            (0, u.ps)({
                                guild: null == n ? void 0 : n,
                                analyticsLocations: P,
                            });
                        },
                    });
                },
                children: (e) =>
                    (0, r.jsxs)(
                        l.P3F,
                        y(E({}, e), {
                            innerRef: N,
                            className: o()(h.avatar, h.clickable),
                            children: [
                                x,
                                (0, r.jsx)(l.vdY, {
                                    size: "custom",
                                    className: h.overlayIcon,
                                    width: 20,
                                    height: 20,
                                    color: "white",
                                }),
                            ],
                        }),
                    ),
            })
          : (0, r.jsxs)(l.P3F, {
                onClick: C,
                className: o()(h.avatar, h.clickable),
                children: [
                    x,
                    (0, r.jsx)(l.SrA, {
                        size: "custom",
                        className: h.overlayIcon,
                        width: 20,
                        height: 20,
                        color: "white",
                    }),
                ],
            });
}
