n.d(t, { default: () => C }), n(47120);
var o = n(200651),
    i = n(192379),
    a = n(481060),
    r = n(846027),
    l = n(410575),
    c = n(2052),
    _ = n(100527),
    d = n(906732),
    s = n(600164),
    u = n(313201),
    b = n(695346),
    f = n(932724),
    p = n(716161),
    g = n(672339),
    m = n(898531),
    I = n(131951),
    T = n(594174),
    S = n(626135),
    E = n(747545),
    h = n(981631),
    v = n(388032),
    O = n(845569);
function C(e) {
    let { transitionState: t, videoEnabled: n, onEnable: C, onClose: A } = e,
        R = I.Z.getCameraComponent(),
        N = (0, u.Dt)(),
        k = (0, m.Z)(),
        L = b.qF.useSetting(),
        [B, y] = i.useState((0, f.P)(T.default.getCurrentUser())),
        D = (0, c.O)(),
        { analyticsLocations: w } = (0, d.ZP)(_.Z.CAMERA_PREVIEW),
        P = i.useRef(null);
    i.useEffect(() => {
        S.default.track(h.rMx.OPEN_MODAL, { type: 'Camera Preview Modal' });
    }, []),
        i.useEffect(() => {
            var e;
            null === (e = P.current) || void 0 === e || e.scrollToTop();
        }, []);
    let x = async () => {
            await U(), r.Z.setVideoEnabled(!0), null == C || C();
        },
        U = async () => {
            try {
                await (0, g.wG)(B, {
                    location: {
                        page: h.ZY5.PREVIEW_CAMERA_MODAL,
                        ...D.location
                    }
                });
            } catch (e) {}
            await A(), (0, p.Up)(B);
        };
    return (0, o.jsx)(d.Gt, {
        value: w,
        children: (0, o.jsx)(l.Z, {
            page: h.ZY5.PREVIEW_CAMERA_MODAL,
            children: (0, o.jsxs)(a.Y0X, {
                className: O.modalRoot,
                size: a.CgR.DYNAMIC,
                'aria-labelledby': N,
                transitionState: t,
                children: [
                    (0, o.jsxs)(a.hzk, {
                        className: k ? O.contentWithVideoBackgrounds : O.content,
                        scrollerRef: P,
                        children: [
                            (0, o.jsx)(a.X6q, {
                                id: N,
                                className: O.header,
                                variant: 'heading-xl/semibold',
                                children: n ? v.intl.string(v.t.LAwwbW) : v.intl.string(v.t['/HITVF'])
                            }),
                            (0, o.jsx)(E.Z, {
                                hidePreviewToggle: !0,
                                showSmallBackgroundOptions: !0,
                                hideDeviceHeader: !0,
                                hideCameraSettingsLink: !0,
                                selectedBackgroundOption: B,
                                onSelectBackgroundOption: y,
                                hideDeviceSelector: n,
                                renderCamera: (e) =>
                                    (0, o.jsxs)('div', {
                                        className: O.cameraPreview,
                                        children: [
                                            (0, o.jsx)('div', {
                                                className: O.camera,
                                                children: (0, o.jsx)(R, {
                                                    disabled: !1,
                                                    deviceId: e,
                                                    width: 368,
                                                    height: 207
                                                })
                                            }),
                                            (0, o.jsx)(E.S, {})
                                        ]
                                    }),
                                onLearnMore: A
                            })
                        ]
                    }),
                    (0, o.jsxs)(a.mzw, {
                        justify: s.Z.Justify.BETWEEN,
                        children: [
                            (() => {
                                let e = n ? v.intl.string(v.t.KQENho) : v.intl.string(v.t.kgIe9f);
                                return (0, o.jsx)(a.zxk, {
                                    onClick: n ? U : x,
                                    size: a.zxk.Sizes.SMALL,
                                    autoFocus: !n,
                                    children: e
                                });
                            })(),
                            (0, o.jsx)(a.XZJ, {
                                size: 18,
                                type: a.XZJ.Types.INVERTED,
                                value: L,
                                onChange: () => {
                                    b.qF.updateSetting(!L), S.default.track(h.rMx.UPDATE_USER_SETTINGS_LOCAL, { always_preview_video: !L });
                                },
                                children: (0, o.jsx)(a.Text, {
                                    variant: 'text-sm/normal',
                                    children: v.intl.string(v.t['3Ppr1t'])
                                })
                            })
                        ]
                    }),
                    (0, o.jsx)(a.olH, {
                        onClick: A,
                        className: O.modalClose
                    })
                ]
            })
        })
    });
}
