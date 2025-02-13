n.d(t, { default: () => S }), n(47120);
var i = n(200651),
    a = n(192379),
    o = n(481060),
    r = n(846027),
    l = n(410575),
    c = n(2052),
    s = n(100527),
    _ = n(906732),
    d = n(600164),
    u = n(313201),
    f = n(695346),
    p = n(932724),
    h = n(716161),
    g = n(672339),
    b = n(898531),
    m = n(131951),
    C = n(594174),
    E = n(626135),
    I = n(747545),
    T = n(981631),
    R = n(388032),
    O = n(60112);
function S(e) {
    let { transitionState: t, videoEnabled: n, onEnable: S, onClose: A } = e,
        v = m.Z.getCameraComponent(),
        N = (0, u.Dt)(),
        L = (0, b.Z)(),
        k = f.qF.useSetting(),
        [B, y] = a.useState((0, p.P)(C.default.getCurrentUser())),
        U = (0, c.O)(),
        { analyticsLocations: w } = (0, _.ZP)(s.Z.CAMERA_PREVIEW),
        D = a.useRef(null);
    a.useEffect(() => {
        E.default.track(T.rMx.OPEN_MODAL, { type: 'Camera Preview Modal' });
    }, []),
        a.useEffect(() => {
            var e;
            null === (e = D.current) || void 0 === e || e.scrollToTop();
        }, []);
    let P = async () => {
            await x(), r.Z.setVideoEnabled(!0), null == S || S();
        },
        x = async () => {
            try {
                await (0, g.wG)(B, {
                    location: {
                        page: T.ZY5.PREVIEW_CAMERA_MODAL,
                        ...U.location
                    }
                });
            } catch (e) {}
            await A(), (0, h.Up)(B);
        };
    return (0, i.jsx)(_.Gt, {
        value: w,
        children: (0, i.jsx)(l.Z, {
            page: T.ZY5.PREVIEW_CAMERA_MODAL,
            children: (0, i.jsxs)(o.Y0X, {
                className: O.modalRoot,
                size: o.CgR.DYNAMIC,
                'aria-labelledby': N,
                transitionState: t,
                children: [
                    (0, i.jsxs)(o.hzk, {
                        className: L ? O.contentWithVideoBackgrounds : O.content,
                        scrollerRef: D,
                        children: [
                            (0, i.jsx)(o.X6q, {
                                id: N,
                                className: O.header,
                                variant: 'heading-xl/semibold',
                                children: n ? R.intl.string(R.t.LAwwbW) : R.intl.string(R.t['/HITVF'])
                            }),
                            (0, i.jsx)(I.Z, {
                                hidePreviewToggle: !0,
                                showSmallBackgroundOptions: !0,
                                hideDeviceHeader: !0,
                                hideCameraSettingsLink: !0,
                                selectedBackgroundOption: B,
                                onSelectBackgroundOption: y,
                                hideDeviceSelector: n,
                                renderCamera: (e) =>
                                    (0, i.jsxs)('div', {
                                        className: O.cameraPreview,
                                        children: [
                                            (0, i.jsx)('div', {
                                                className: O.camera,
                                                children: (0, i.jsx)(v, {
                                                    disabled: !1,
                                                    deviceId: e,
                                                    width: 368,
                                                    height: 207
                                                })
                                            }),
                                            (0, i.jsx)(I.S, {})
                                        ]
                                    }),
                                onLearnMore: A
                            })
                        ]
                    }),
                    (0, i.jsxs)(o.mzw, {
                        justify: d.Z.Justify.BETWEEN,
                        children: [
                            (() => {
                                let e = n ? R.intl.string(R.t.KQENho) : R.intl.string(R.t.kgIe9f);
                                return (0, i.jsx)(o.zxk, {
                                    onClick: n ? x : P,
                                    size: o.zxk.Sizes.SMALL,
                                    autoFocus: !n,
                                    children: e
                                });
                            })(),
                            (0, i.jsx)(o.XZJ, {
                                size: 18,
                                type: o.XZJ.Types.INVERTED,
                                value: k,
                                onChange: () => {
                                    f.qF.updateSetting(!k), E.default.track(T.rMx.UPDATE_USER_SETTINGS_LOCAL, { always_preview_video: !k });
                                },
                                children: (0, i.jsx)(o.Text, {
                                    variant: 'text-sm/normal',
                                    children: R.intl.string(R.t['3Ppr1t'])
                                })
                            })
                        ]
                    }),
                    (0, i.jsx)(o.olH, {
                        onClick: A,
                        className: O.modalClose
                    })
                ]
            })
        })
    });
}
