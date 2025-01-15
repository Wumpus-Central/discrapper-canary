n.d(t, {
    Z: function () {
        return N;
    }
}),
    n(47120);
var i = n(200651),
    s = n(192379),
    r = n(442837),
    a = n(481060),
    l = n(846027),
    o = n(179658),
    c = n(304680),
    d = n(579806),
    u = n(600164),
    m = n(729345),
    g = n(921801),
    h = n(857192),
    p = n(131951),
    x = n(226961),
    f = n(12647),
    _ = n(726985),
    E = n(981631),
    C = n(65154),
    T = n(388032),
    S = n(232186);
async function b() {
    let e = await d.Z.fileManager.getLogPath();
    d.Z.fileManager.showItemInFolder(e);
}
function I(e) {
    (0, a.openModal)((t) =>
        (0, i.jsx)(a.ConfirmModal, {
            header: T.intl.string(T.t['7UXEFx']),
            confirmText: T.intl.string(T.t.BddRzc),
            cancelText: T.intl.string(T.t['ETE/oK']),
            onCancel: t.onClose,
            onConfirm: () => l.Z.setDebugLogging(e),
            ...t,
            children: (0, i.jsx)(a.Text, {
                variant: 'text-md/normal',
                children: T.intl.string(T.t.IYPrRk)
            })
        })
    );
}
function N() {
    let [e, t] = s.useState(!1),
        { debugLogging: n, aecDumpEnabled: d } = (0, r.cj)([p.Z], () => ({
            aecDumpSupported: p.Z.isAecDumpSupported(),
            debugLogging: p.Z.getDebugLogging(),
            aecDumpEnabled: p.Z.getAecDump(),
            supportsConnectionReplay: p.Z.supports(C.AN.CONNECTION_REPLAY)
        })),
        N = (0, r.e7)([h.default], () => h.default.isStreamInfoOverlayEnabled),
        v = (0, r.e7)([x.ZP], () => x.ZP.shouldRecordNextConnection());
    async function A() {
        t(!0);
        try {
            await p.Z.getMediaEngine().writeAudioDebugState(),
                await f.Z.submitLiveCrashReport({ message: { message: 'User Live Dump' } }),
                await (0, m.E)(E.GU0.RTC),
                !(function () {
                    let e = T.intl.string(T.t['fKBB8/']),
                        t = T.intl.string(T.t.BvyxEx);
                    (0, a.openModal)((n) =>
                        (0, i.jsx)(a.ConfirmModal, {
                            header: e,
                            confirmButtonColor: a.Button.Colors.BRAND,
                            confirmText: T.intl.string(T.t.BddRzc),
                            ...n,
                            children: (0, i.jsx)(a.Text, {
                                variant: 'text-md/normal',
                                children: t
                            })
                        })
                    );
                })();
        } catch (e) {
            !(function (e) {
                let t = T.intl.string(T.t.QZg0Jy),
                    n = null != e ? e : T.intl.string(T.t.VzHcSk);
                (0, a.openModal)((e) =>
                    (0, i.jsx)(a.ConfirmModal, {
                        header: t,
                        confirmButtonColor: a.Button.Colors.BRAND,
                        confirmText: T.intl.string(T.t.BddRzc),
                        ...e,
                        children: (0, i.jsx)(a.Text, {
                            variant: 'text-md/normal',
                            children: n
                        })
                    })
                );
            })(e.displayMessage);
        }
    }
    return (0, i.jsxs)(a.FormSection, {
        className: S.marginBottom40,
        title: T.intl.string(T.t.OFpL3d),
        children: [
            (0, i.jsx)(g.F, {
                setting: _.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_STREAM_INFO_OVERLAY,
                children: (0, i.jsx)(a.FormSwitch, {
                    value: N,
                    onChange: (e) => (0, o.y)({ isStreamInfoOverlayEnabled: e }),
                    note: T.intl.string(T.t.kBXuW1),
                    children: T.intl.string(T.t['0CEP6e'])
                })
            }),
            (0, i.jsx)(g.F, {
                setting: _.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_AEC_DUMP,
                children: (0, i.jsx)(a.FormSwitch, {
                    value: d,
                    onChange: (e) => l.Z.setAecDump(e),
                    note: T.intl.string(T.t['xl9+Iy']),
                    children: T.intl.string(T.t['r6K+TE'])
                })
            }),
            (0, i.jsxs)(g.F, {
                setting: _.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_CONNECTION_REPLAY,
                children: [
                    (0, i.jsx)(a.FormSwitch, {
                        hideBorder: !0,
                        value: v,
                        onChange: (e) => c.TC(e),
                        note: T.intl.string(T.t.Lm72RU),
                        children: T.intl.string(T.t.U4FgFB)
                    }),
                    (0, i.jsx)(a.FormItem, {
                        children: (0, i.jsx)(u.Z, {
                            className: S.marginBottom20,
                            children: (0, i.jsx)(u.Z.Child, {
                                grow: 0,
                                shrink: 0,
                                children: (0, i.jsx)(a.Button, {
                                    size: a.Button.Sizes.SMALL,
                                    onClick: () => c.z4(),
                                    children: T.intl.string(T.t.nJnOHB)
                                })
                            })
                        })
                    }),
                    (0, i.jsx)(a.FormDivider, { className: S.marginBottom20 })
                ]
            }),
            (0, i.jsxs)(g.F, {
                setting: _.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_LOGGING,
                children: [
                    (0, i.jsx)(a.FormSwitch, {
                        hideBorder: !0,
                        value: n,
                        onChange: I,
                        note: T.intl.string(T.t['/7ak9f']),
                        children: T.intl.string(T.t['726JHB'])
                    }),
                    (0, i.jsx)(a.FormItem, {
                        children: (0, i.jsxs)(u.Z, {
                            children: [
                                (0, i.jsx)(u.Z.Child, {
                                    grow: 0,
                                    shrink: 0,
                                    children: (0, i.jsx)(a.Button, {
                                        disabled: e,
                                        size: a.Button.Sizes.SMALL,
                                        onClick: A,
                                        children: T.intl.string(T.t['3UB9aW'])
                                    })
                                }),
                                (0, i.jsx)(u.Z.Child, {
                                    grow: 0,
                                    shrink: 0,
                                    children: (0, i.jsx)(a.Button, {
                                        size: a.Button.Sizes.SMALL,
                                        onClick: b,
                                        children: T.intl.string(T.t.nuPtYm)
                                    })
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
}
