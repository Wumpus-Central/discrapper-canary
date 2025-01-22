n.r(t),
    n.d(t, {
        default: function () {
            return B;
        }
    }),
    n(47120);
var i = n(200651),
    o = n(192379),
    a = n(481060),
    r = n(846027),
    l = n(410575),
    c = n(2052),
    s = n(100527),
    d = n(906732),
    u = n(600164),
    f = n(313201),
    b = n(695346),
    _ = n(932724),
    g = n(716161),
    h = n(672339),
    m = n(898531),
    p = n(131951),
    T = n(594174),
    v = n(626135),
    I = n(747545),
    C = n(981631),
    w = n(388032),
    N = n(845569);
let S = 368,
    R = 207;
function B(e) {
    let { transitionState: t, videoEnabled: n, onEnable: B, onClose: k } = e,
        O = p.Z.getCameraComponent(),
        x = (0, f.Dt)(),
        E = (0, m.Z)(),
        Z = b.qF.useSetting(),
        [A, P] = o.useState((0, _.P)(T.default.getCurrentUser())),
        L = (0, c.O)(),
        { analyticsLocations: y } = (0, d.ZP)(s.Z.CAMERA_PREVIEW),
        M = o.useRef(null);
    o.useEffect(() => {
        v.default.track(C.rMx.OPEN_MODAL, { type: 'Camera Preview Modal' });
    }, []),
        o.useEffect(() => {
            var e;
            null === (e = M.current) || void 0 === e || e.scrollToTop();
        }, []);
    let F = async () => {
            await D(), r.Z.setVideoEnabled(!0), null == B || B();
        },
        D = async () => {
            try {
                await (0, h.wG)(A, {
                    location: {
                        page: C.ZY5.PREVIEW_CAMERA_MODAL,
                        ...L.location
                    }
                });
            } catch (e) {}
            await k(), (0, g.Up)(A);
        };
    return (0, i.jsx)(d.Gt, {
        value: y,
        children: (0, i.jsx)(l.Z, {
            page: C.ZY5.PREVIEW_CAMERA_MODAL,
            children: (0, i.jsxs)(a.ModalRoot, {
                className: N.modalRoot,
                size: a.ModalSize.DYNAMIC,
                'aria-labelledby': x,
                transitionState: t,
                children: [
                    (0, i.jsxs)(a.ModalContent, {
                        className: E ? N.contentWithVideoBackgrounds : N.content,
                        scrollerRef: M,
                        children: [
                            (0, i.jsx)(a.Heading, {
                                id: x,
                                className: N.header,
                                variant: 'heading-xl/semibold',
                                children: n ? w.intl.string(w.t.LAwwbW) : w.intl.string(w.t['/HITVF'])
                            }),
                            (0, i.jsx)(I.Z, {
                                hidePreviewToggle: !0,
                                showSmallBackgroundOptions: !0,
                                hideDeviceHeader: !0,
                                hideCameraSettingsLink: !0,
                                selectedBackgroundOption: A,
                                onSelectBackgroundOption: P,
                                hideDeviceSelector: n,
                                renderCamera: (e) =>
                                    (0, i.jsxs)('div', {
                                        className: N.cameraPreview,
                                        children: [
                                            (0, i.jsx)('div', {
                                                className: N.camera,
                                                children: (0, i.jsx)(O, {
                                                    disabled: !1,
                                                    deviceId: e,
                                                    width: S,
                                                    height: R
                                                })
                                            }),
                                            (0, i.jsx)(I.S, {})
                                        ]
                                    }),
                                onLearnMore: k
                            })
                        ]
                    }),
                    (0, i.jsxs)(a.ModalFooter, {
                        justify: u.Z.Justify.BETWEEN,
                        children: [
                            (() => {
                                let e = n ? w.intl.string(w.t.KQENho) : w.intl.string(w.t.kgIe9f);
                                return (0, i.jsx)(a.Button, {
                                    onClick: n ? D : F,
                                    size: a.Button.Sizes.SMALL,
                                    autoFocus: !n,
                                    children: e
                                });
                            })(),
                            (0, i.jsx)(a.Checkbox, {
                                size: 18,
                                type: a.Checkbox.Types.INVERTED,
                                value: Z,
                                onChange: () => {
                                    b.qF.updateSetting(!Z), v.default.track(C.rMx.UPDATE_USER_SETTINGS_LOCAL, { always_preview_video: !Z });
                                },
                                children: (0, i.jsx)(a.Text, {
                                    variant: 'text-sm/normal',
                                    children: w.intl.string(w.t['3Ppr1t'])
                                })
                            })
                        ]
                    }),
                    (0, i.jsx)(a.ModalCloseButton, {
                        onClick: k,
                        className: N.modalClose
                    })
                ]
            })
        })
    });
}
