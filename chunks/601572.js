n.d(t, { default: () => S }), n(47120);
var a = n(200651),
    i = n(192379),
    o = n(481060),
    r = n(846027),
    l = n(410575),
    c = n(2052),
    s = n(100527),
    _ = n(906732),
    d = n(600164),
    u = n(313201),
    p = n(695346),
    b = n(932724),
    f = n(716161),
    h = n(672339),
    g = n(898531),
    m = n(131951),
    E = n(594174),
    C = n(626135),
    I = n(747545),
    T = n(981631),
    R = n(388032),
    O = n(60112);
function S(e) {
    let { transitionState: t, videoEnabled: n, onEnable: S, onClose: A } = e,
        v = m.Z.getCameraComponent(),
        N = (0, u.Dt)(),
        L = (0, g.Z)(),
        k = p.qF.useSetting(),
        [B, y] = i.useState((0, b.P)(E.default.getCurrentUser())),
        U = (0, c.O)(),
        { analyticsLocations: w } = (0, _.ZP)(s.Z.CAMERA_PREVIEW),
        D = i.useRef(null);
    i.useEffect(() => {
        C.default.track(T.rMx.OPEN_MODAL, { type: 'Camera Preview Modal' });
    }, []),
        i.useEffect(() => {
            var e;
            null === (e = D.current) || void 0 === e || e.scrollToTop();
        }, []);
    let P = async () => {
            await x(), r.Z.setVideoEnabled(!0), null == S || S();
        },
        x = async () => {
            try {
                await (0, h.wG)(B, {
                    location: {
                        page: T.ZY5.PREVIEW_CAMERA_MODAL,
                        ...U.location
                    }
                });
            } catch (e) {}
            await A(), (0, f.Up)(B);
        };
    return (0, a.jsx)(_.Gt, {
        value: w,
        children: (0, a.jsx)(l.Z, {
            page: T.ZY5.PREVIEW_CAMERA_MODAL,
            children: (0, a.jsxs)(o.Y0X, {
                className: O.modalRoot,
                size: o.CgR.DYNAMIC,
                'aria-labelledby': N,
                transitionState: t,
                children: [
                    (0, a.jsxs)(o.hzk, {
                        className: L ? O.contentWithVideoBackgrounds : O.content,
                        scrollerRef: D,
                        children: [
                            (0, a.jsx)(o.X6q, {
                                id: N,
                                className: O.header,
                                variant: 'heading-xl/semibold',
                                children: n ? R.intl.string(R.t.LAwwbW) : R.intl.string(R.t['/HITVF'])
                            }),
                            (0, a.jsx)(I.Z, {
                                hidePreviewToggle: !0,
                                showSmallBackgroundOptions: !0,
                                hideDeviceHeader: !0,
                                hideCameraSettingsLink: !0,
                                selectedBackgroundOption: B,
                                onSelectBackgroundOption: y,
                                hideDeviceSelector: n,
                                renderCamera: (e) =>
                                    (0, a.jsxs)('div', {
                                        className: O.cameraPreview,
                                        children: [
                                            (0, a.jsx)('div', {
                                                className: O.camera,
                                                children: (0, a.jsx)(v, {
                                                    disabled: !1,
                                                    deviceId: e,
                                                    width: 368,
                                                    height: 207
                                                })
                                            }),
                                            (0, a.jsx)(I.S, {})
                                        ]
                                    }),
                                onLearnMore: A
                            })
                        ]
                    }),
                    (0, a.jsxs)(o.mzw, {
                        justify: d.Z.Justify.BETWEEN,
                        children: [
                            (() => {
                                let e = n ? R.intl.string(R.t.KQENho) : R.intl.string(R.t.kgIe9f);
                                return (0, a.jsx)(o.zxk, {
                                    onClick: n ? x : P,
                                    size: o.zxk.Sizes.SMALL,
                                    autoFocus: !n,
                                    children: e
                                });
                            })(),
                            (0, a.jsx)(o.XZJ, {
                                size: 18,
                                type: o.XZJ.Types.INVERTED,
                                value: k,
                                onChange: () => {
                                    p.qF.updateSetting(!k), C.default.track(T.rMx.UPDATE_USER_SETTINGS_LOCAL, { always_preview_video: !k });
                                },
                                children: (0, a.jsx)(o.Text, {
                                    variant: 'text-sm/normal',
                                    children: R.intl.string(R.t['3Ppr1t'])
                                })
                            })
                        ]
                    }),
                    (0, a.jsx)(o.olH, {
                        onClick: A,
                        className: O.modalClose
                    })
                ]
            })
        })
    });
}
