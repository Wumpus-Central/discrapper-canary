n.d(t, { default: () => m }), n(47120);
var i = n(200651),
    o = n(192379),
    a = n(481060),
    l = n(846027),
    r = n(410575),
    c = n(2052),
    _ = n(100527),
    d = n(906732),
    u = n(600164),
    s = n(313201),
    E = n(695346),
    I = n(932724),
    f = n(716161),
    T = n(672339),
    p = n(898531),
    S = n(131951),
    g = n(594174),
    C = n(626135),
    A = n(747545),
    b = n(981631),
    h = n(388032),
    N = n(845569);
function m(e) {
    let { transitionState: t, videoEnabled: n, onEnable: m, onClose: L } = e,
        O = S.Z.getCameraComponent(),
        R = (0, s.Dt)(),
        D = (0, p.Z)(),
        U = E.qF.useSetting(),
        [v, P] = o.useState((0, I.P)(g.default.getCurrentUser())),
        G = (0, c.O)(),
        { analyticsLocations: k } = (0, d.ZP)(_.Z.CAMERA_PREVIEW),
        B = o.useRef(null);
    o.useEffect(() => {
        C.default.track(b.rMx.OPEN_MODAL, { type: 'Camera Preview Modal' });
    }, []),
        o.useEffect(() => {
            var e;
            null === (e = B.current) || void 0 === e || e.scrollToTop();
        }, []);
    let y = async () => {
            await Z(), l.Z.setVideoEnabled(!0), null == m || m();
        },
        Z = async () => {
            try {
                await (0, T.wG)(v, {
                    location: {
                        page: b.ZY5.PREVIEW_CAMERA_MODAL,
                        ...G.location
                    }
                });
            } catch (e) {}
            await L(), (0, f.Up)(v);
        };
    return (0, i.jsx)(d.Gt, {
        value: k,
        children: (0, i.jsx)(r.Z, {
            page: b.ZY5.PREVIEW_CAMERA_MODAL,
            children: (0, i.jsxs)(a.Y0X, {
                className: N.modalRoot,
                size: a.CgR.DYNAMIC,
                'aria-labelledby': R,
                transitionState: t,
                children: [
                    (0, i.jsxs)(a.hzk, {
                        className: D ? N.contentWithVideoBackgrounds : N.content,
                        scrollerRef: B,
                        children: [
                            (0, i.jsx)(a.X6q, {
                                id: R,
                                className: N.header,
                                variant: 'heading-xl/semibold',
                                children: n ? h.intl.string(h.t.LAwwbW) : h.intl.string(h.t['/HITVF'])
                            }),
                            (0, i.jsx)(A.Z, {
                                hidePreviewToggle: !0,
                                showSmallBackgroundOptions: !0,
                                hideDeviceHeader: !0,
                                hideCameraSettingsLink: !0,
                                selectedBackgroundOption: v,
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
                                                    width: 368,
                                                    height: 207
                                                })
                                            }),
                                            (0, i.jsx)(A.S, {})
                                        ]
                                    }),
                                onLearnMore: L
                            })
                        ]
                    }),
                    (0, i.jsxs)(a.mzw, {
                        justify: u.Z.Justify.BETWEEN,
                        children: [
                            (() => {
                                let e = n ? h.intl.string(h.t.KQENho) : h.intl.string(h.t.kgIe9f);
                                return (0, i.jsx)(a.zxk, {
                                    onClick: n ? Z : y,
                                    size: a.zxk.Sizes.SMALL,
                                    autoFocus: !n,
                                    children: e
                                });
                            })(),
                            (0, i.jsx)(a.XZJ, {
                                size: 18,
                                type: a.XZJ.Types.INVERTED,
                                value: U,
                                onChange: () => {
                                    E.qF.updateSetting(!U), C.default.track(b.rMx.UPDATE_USER_SETTINGS_LOCAL, { always_preview_video: !U });
                                },
                                children: (0, i.jsx)(a.Text, {
                                    variant: 'text-sm/normal',
                                    children: h.intl.string(h.t['3Ppr1t'])
                                })
                            })
                        ]
                    }),
                    (0, i.jsx)(a.olH, {
                        onClick: L,
                        className: N.modalClose
                    })
                ]
            })
        })
    });
}
