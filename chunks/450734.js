r.d(n, {
    Z: function () {
        return E;
    }
});
var i = r(200651);
r(192379);
var a = r(120356),
    o = r.n(a),
    s = r(442837),
    l = r(481060),
    u = r(906732),
    c = r(1585),
    d = r(158776),
    f = r(998502),
    p = r(445924),
    h = r(654904),
    _ = r(486324),
    m = r(776458);
let g = f.ZP.getEnableHardwareAcceleration() ? l.AnimatedAvatar : l.Avatar;
function E(e) {
    let { user: n, guild: r, displayProfile: a, canUsePremiumCustomization: f, previewAvatar: E, previewAvatarDecoration: v, previewTheme: y, previewPrimaryColor: b, className: I, disabledInputs: T, isTryItOutFlow: S, onUpsellClick: A } = e,
        { analyticsLocations: C } = (0, u.ZP)(),
        N = (0, s.e7)([d.Z], () => d.Z.getStatus(n.id)),
        R = null == r || (null == a ? void 0 : a.canUsePremiumProfileCustomization) || f,
        O = (0, i.jsx)(g, {
            src: E,
            avatarDecoration: v,
            imageClassName: o()(I, { [m.overlay]: !T }),
            size: l.AvatarSizes.SIZE_80,
            'aria-label': n.username,
            status: N,
            statusTooltip: !1,
            statusBackdropColor: null != b ? (0, l.getStatusBackdropColor)(y) : void 0
        });
    return T
        ? (0, i.jsx)('div', {
              className: m.avatar,
              children: O
          })
        : R
          ? (0, i.jsx)(l.Popout, {
                renderPopout: (e) => {
                    let { closePopout: n } = e;
                    return (0, i.jsx)(p.Z, {
                        className: m.menu,
                        onClose: n,
                        onChangeAvatar: () => (0, h.$r)(_.pC.AVATAR, null == r ? void 0 : r.id, S),
                        onChangeAvatarDecoration: () => {
                            (0, c.ps)({
                                guild: null == r ? void 0 : r,
                                analyticsLocations: C,
                                isTryItOutFlow: S
                            });
                        }
                    });
                },
                children: (e) =>
                    (0, i.jsxs)(l.Clickable, {
                        ...e,
                        className: o()(m.avatar, m.clickable),
                        children: [
                            O,
                            (0, i.jsx)(l.PencilIcon, {
                                size: 'custom',
                                className: m.overlayIcon,
                                width: 20,
                                height: 20,
                                color: 'white'
                            })
                        ]
                    })
            })
          : (0, i.jsxs)(l.Clickable, {
                onClick: A,
                className: o()(m.avatar, m.clickable),
                children: [
                    O,
                    (0, i.jsx)(l.NitroWheelIcon, {
                        size: 'custom',
                        className: m.overlayIcon,
                        width: 20,
                        height: 20,
                        color: 'white'
                    })
                ]
            });
}
