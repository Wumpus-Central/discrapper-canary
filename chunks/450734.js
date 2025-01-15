t.d(n, {
    Z: function () {
        return v;
    }
});
var a = t(200651);
t(192379);
var i = t(120356),
    c = t.n(i),
    o = t(442837),
    s = t(481060),
    r = t(906732),
    d = t(1585),
    l = t(158776),
    u = t(998502),
    f = t(445924),
    p = t(654904),
    A = t(486324),
    b = t(745490);
let m = u.ZP.getEnableHardwareAcceleration() ? s.AnimatedAvatar : s.Avatar;
function v(e) {
    let { user: n, guild: t, displayProfile: i, canUsePremiumCustomization: u, previewAvatar: v, previewAvatarDecoration: Z, previewTheme: h, previewPrimaryColor: g, className: C, disabledInputs: E, isTryItOutFlow: P, onUpsellClick: N } = e,
        { analyticsLocations: T } = (0, r.ZP)(),
        R = (0, o.e7)([l.Z], () => l.Z.getStatus(n.id)),
        I = null == t || (null == i ? void 0 : i.canUsePremiumProfileCustomization) || u,
        _ = (0, a.jsx)(m, {
            src: v,
            avatarDecoration: Z,
            imageClassName: c()(C, { [b.overlay]: !E }),
            size: s.AvatarSizes.SIZE_80,
            'aria-label': n.username,
            status: R,
            statusTooltip: !1,
            statusBackdropColor: null != g ? (0, s.getStatusBackdropColor)(h) : void 0
        });
    return E
        ? (0, a.jsx)('div', {
              className: b.avatar,
              children: _
          })
        : I
          ? (0, a.jsx)(s.Popout, {
                renderPopout: (e) => {
                    let { closePopout: n } = e;
                    return (0, a.jsx)(f.Z, {
                        className: b.menu,
                        onClose: n,
                        onChangeAvatar: () => (0, p.$r)(A.pC.AVATAR, null == t ? void 0 : t.id, P),
                        onChangeAvatarDecoration: () => {
                            (0, d.ps)({
                                guild: null == t ? void 0 : t,
                                analyticsLocations: T,
                                isTryItOutFlow: P
                            });
                        }
                    });
                },
                children: (e) =>
                    (0, a.jsxs)(s.Clickable, {
                        ...e,
                        className: c()(b.avatar, b.clickable),
                        children: [
                            _,
                            (0, a.jsx)(s.PencilIcon, {
                                size: 'custom',
                                className: b.overlayIcon,
                                width: 20,
                                height: 20,
                                color: 'white'
                            })
                        ]
                    })
            })
          : (0, a.jsxs)(s.Clickable, {
                onClick: N,
                className: c()(b.avatar, b.clickable),
                children: [
                    _,
                    (0, a.jsx)(s.NitroWheelIcon, {
                        size: 'custom',
                        className: b.overlayIcon,
                        width: 20,
                        height: 20,
                        color: 'white'
                    })
                ]
            });
}
