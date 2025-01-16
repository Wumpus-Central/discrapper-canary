t.d(i, {
    Z: function () {
        return g;
    }
});
var n = t(200651);
t(192379);
var a = t(120356),
    r = t.n(a),
    o = t(442837),
    s = t(481060),
    l = t(906732),
    c = t(1585),
    d = t(158776),
    u = t(998502),
    f = t(445924),
    p = t(654904),
    _ = t(486324),
    b = t(776458);
let m = u.ZP.getEnableHardwareAcceleration() ? s.AnimatedAvatar : s.Avatar;
function g(e) {
    let { user: i, guild: t, displayProfile: a, canUsePremiumCustomization: u, previewAvatar: g, previewAvatarDecoration: x, previewTheme: h, previewPrimaryColor: v, className: C, disabledInputs: I, isTryItOutFlow: S, onUpsellClick: y } = e,
        { analyticsLocations: k } = (0, l.ZP)(),
        T = (0, o.e7)([d.Z], () => d.Z.getStatus(i.id)),
        B = null == t || (null == a ? void 0 : a.canUsePremiumProfileCustomization) || u,
        j = (0, n.jsx)(m, {
            src: g,
            avatarDecoration: x,
            imageClassName: r()(C, { [b.overlay]: !I }),
            size: s.AvatarSizes.SIZE_80,
            'aria-label': i.username,
            status: T,
            statusTooltip: !1,
            statusBackdropColor: null != v ? (0, s.getStatusBackdropColor)(h) : void 0
        });
    return I
        ? (0, n.jsx)('div', {
              className: b.avatar,
              children: j
          })
        : B
          ? (0, n.jsx)(s.Popout, {
                renderPopout: (e) => {
                    let { closePopout: i } = e;
                    return (0, n.jsx)(f.Z, {
                        className: b.menu,
                        onClose: i,
                        onChangeAvatar: () => (0, p.$r)(_.pC.AVATAR, null == t ? void 0 : t.id, S),
                        onChangeAvatarDecoration: () => {
                            (0, c.ps)({
                                guild: null == t ? void 0 : t,
                                analyticsLocations: k,
                                isTryItOutFlow: S
                            });
                        }
                    });
                },
                children: (e) =>
                    (0, n.jsxs)(s.Clickable, {
                        ...e,
                        className: r()(b.avatar, b.clickable),
                        children: [
                            j,
                            (0, n.jsx)(s.PencilIcon, {
                                size: 'custom',
                                className: b.overlayIcon,
                                width: 20,
                                height: 20,
                                color: 'white'
                            })
                        ]
                    })
            })
          : (0, n.jsxs)(s.Clickable, {
                onClick: y,
                className: r()(b.avatar, b.clickable),
                children: [
                    j,
                    (0, n.jsx)(s.NitroWheelIcon, {
                        size: 'custom',
                        className: b.overlayIcon,
                        width: 20,
                        height: 20,
                        color: 'white'
                    })
                ]
            });
}
