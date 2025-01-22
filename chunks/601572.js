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
    d = n(100527),
    s = n(906732),
    u = n(600164),
    f = n(313201),
    b = n(695346),
    _ = n(932724),
    g = n(716161),
    h = n(672339),
    m = n(898531),
    p = n(131951),
    C = n(594174),
    I = n(626135),
    T = n(747545),
    v = n(981631),
    w = n(388032),
    k = n(845569);
let S = 368,
    N = 207;
function B(e) {
    let { transitionState: t, videoEnabled: n, onEnable: B, onClose: R } = e,
        O = p.Z.getCameraComponent(),
        A = (0, f.Dt)(),
        Z = (0, m.Z)(),
        E = b.qF.useSetting(),
        [x, y] = o.useState((0, _.P)(C.default.getCurrentUser())),
        M = (0, c.O)(),
        { analyticsLocations: P } = (0, s.ZP)(d.Z.CAMERA_PREVIEW),
        L = o.useRef(null);
    o.useEffect(() => {
        I.default.track(v.rMx.OPEN_MODAL, { type: 'Camera Preview Modal' });
    }, []),
        o.useEffect(() => {
            var e;
            null === (e = L.current) || void 0 === e || e.scrollToTop();
        }, []);
    let F = async () => {
            await U(), r.Z.setVideoEnabled(!0), null == B || B();
        },
        U = async () => {
            try {
                await (0, h.wG)(x, {
                    location: {
                        page: v.ZY5.PREVIEW_CAMERA_MODAL,
                        ...M.location
                    }
                });
            } catch (e) {}
            await R(), (0, g.Up)(x);
        };
    return (0, i.jsx)(s.Gt, {
        value: P,
        children: (0, i.jsx)(l.Z, {
            page: v.ZY5.PREVIEW_CAMERA_MODAL,
            children: (0, i.jsxs)(a.ModalRoot, {
                className: k.modalRoot,
                size: a.ModalSize.DYNAMIC,
                'aria-labelledby': A,
                transitionState: t,
                children: [
                    (0, i.jsxs)(a.ModalContent, {
                        className: Z ? k.contentWithVideoBackgrounds : k.content,
                        scrollerRef: L,
                        children: [
                            (0, i.jsx)(a.Heading, {
                                id: A,
                                className: k.header,
                                variant: 'heading-xl/semibold',
                                children: n ? w.intl.string(w.t.LAwwbW) : w.intl.string(w.t['/HITVF'])
                            }),
                            (0, i.jsx)(T.Z, {
                                hidePreviewToggle: !0,
                                showSmallBackgroundOptions: !0,
                                hideDeviceHeader: !0,
                                hideCameraSettingsLink: !0,
                                selectedBackgroundOption: x,
                                onSelectBackgroundOption: y,
                                hideDeviceSelector: n,
                                renderCamera: (e) =>
                                    (0, i.jsxs)('div', {
                                        className: k.cameraPreview,
                                        children: [
                                            (0, i.jsx)('div', {
                                                className: k.camera,
                                                children: (0, i.jsx)(O, {
                                                    disabled: !1,
                                                    deviceId: e,
                                                    width: S,
                                                    height: N
                                                })
                                            }),
                                            (0, i.jsx)(T.S, {})
                                        ]
                                    }),
                                onLearnMore: R
                            })
                        ]
                    }),
                    (0, i.jsxs)(a.ModalFooter, {
                        justify: u.Z.Justify.BETWEEN,
                        children: [
                            (() => {
                                let e = n ? w.intl.string(w.t.KQENho) : w.intl.string(w.t.kgIe9f);
                                return (0, i.jsx)(a.Button, {
                                    onClick: n ? U : F,
                                    size: a.Button.Sizes.SMALL,
                                    autoFocus: !n,
                                    children: e
                                });
                            })(),
                            (0, i.jsx)(a.Checkbox, {
                                size: 18,
                                type: a.Checkbox.Types.INVERTED,
                                value: E,
                                onChange: () => {
                                    b.qF.updateSetting(!E), I.default.track(v.rMx.UPDATE_USER_SETTINGS_LOCAL, { always_preview_video: !E });
                                },
                                children: (0, i.jsx)(a.Text, {
                                    variant: 'text-sm/normal',
                                    children: w.intl.string(w.t['3Ppr1t'])
                                })
                            })
                        ]
                    }),
                    (0, i.jsx)(a.ModalCloseButton, {
                        onClick: R,
                        className: k.modalClose
                    })
                ]
            })
        })
    });
}
