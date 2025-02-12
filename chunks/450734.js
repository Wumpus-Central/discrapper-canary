n.d(t, { Z: () => g });
var i = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    s = n(442837),
    o = n(481060),
    l = n(906732),
    u = n(1585),
    c = n(158776),
    d = n(998502),
    f = n(445924),
    _ = n(654904),
    p = n(486324),
    h = n(933967);
let m = d.ZP.getEnableHardwareAcceleration() ? o.Xo$ : o.qEK;
function g(e) {
    let { user: t, guild: n, displayProfile: r, canUsePremiumCustomization: d, previewAvatar: g, previewAvatarDecoration: E, previewTheme: v, previewPrimaryColor: y, className: I, disabledInputs: T, isTryItOutFlow: b, onUpsellClick: S } = e,
        { analyticsLocations: A } = (0, l.ZP)(),
        N = (0, s.e7)([c.Z], () => c.Z.getStatus(t.id)),
        C = null == n || (null == r ? void 0 : r.canUsePremiumProfileCustomization) || d,
        R = (0, i.jsx)(m, {
            src: g,
            avatarDecoration: E,
            imageClassName: a()(I, { [h.overlay]: !T }),
            size: o.EFr.SIZE_80,
            'aria-label': t.username,
            status: N,
            statusTooltip: !1,
            statusBackdropColor: null != y ? (0, o.QFD)(v) : void 0
        });
    return T
        ? (0, i.jsx)('div', {
              className: h.avatar,
              children: R
          })
        : C
          ? (0, i.jsx)(o.yRy, {
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (0, i.jsx)(f.Z, {
                        className: h.menu,
                        onClose: t,
                        onChangeAvatar: () => (0, _.$r)(p.pC.AVATAR, null == n ? void 0 : n.id, b),
                        onChangeAvatarDecoration: () => {
                            (0, u.ps)({
                                guild: null == n ? void 0 : n,
                                analyticsLocations: A,
                                isTryItOutFlow: b
                            });
                        }
                    });
                },
                children: (e) =>
                    (0, i.jsxs)(o.P3F, {
                        ...e,
                        className: a()(h.avatar, h.clickable),
                        children: [
                            R,
                            (0, i.jsx)(o.vdY, {
                                size: 'custom',
                                className: h.overlayIcon,
                                width: 20,
                                height: 20,
                                color: 'white'
                            })
                        ]
                    })
            })
          : (0, i.jsxs)(o.P3F, {
                onClick: S,
                className: a()(h.avatar, h.clickable),
                children: [
                    R,
                    (0, i.jsx)(o.SrA, {
                        size: 'custom',
                        className: h.overlayIcon,
                        width: 20,
                        height: 20,
                        color: 'white'
                    })
                ]
            });
}
