n.d(t, {
    Z: function () {
        return v;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    s = n(442837),
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
    _ = n(569550),
    E = n(726985),
    C = n(981631),
    T = n(65154),
    S = n(388032),
    b = n(232186);
async function I() {
    let e = await d.Z.fileManager.getLogPath();
    d.Z.fileManager.showItemInFolder(e);
}
function N(e) {
    (0, a.openModal)((t) =>
        (0, i.jsx)(a.ConfirmModal, {
            header: S.intl.string(S.t['7UXEFx']),
            confirmText: S.intl.string(S.t.BddRzc),
            cancelText: S.intl.string(S.t['ETE/oK']),
            onCancel: t.onClose,
            onConfirm: () => l.Z.setDebugLogging(e),
            ...t,
            children: (0, i.jsx)(a.Text, {
                variant: 'text-md/normal',
                children: S.intl.string(S.t.IYPrRk)
            })
        })
    );
}
function v(e) {
    let { refreshStyles: t = !1 } = e,
        [n, d] = r.useState(!1),
        { debugLogging: v, aecDumpEnabled: A } = (0, s.cj)([p.Z], () => ({
            aecDumpSupported: p.Z.isAecDumpSupported(),
            debugLogging: p.Z.getDebugLogging(),
            aecDumpEnabled: p.Z.getAecDump(),
            supportsConnectionReplay: p.Z.supports(T.AN.CONNECTION_REPLAY)
        })),
        j = (0, s.e7)([h.default], () => h.default.isStreamInfoOverlayEnabled),
        O = (0, s.e7)([x.ZP], () => x.ZP.shouldRecordNextConnection());
    async function R() {
        d(!0);
        try {
            await p.Z.getMediaEngine().writeAudioDebugState(),
                await f.Z.submitLiveCrashReport({ message: { message: 'User Live Dump' } }),
                await (0, m.E)(C.GU0.RTC),
                !(function () {
                    let e = S.intl.string(S.t['fKBB8/']),
                        t = S.intl.string(S.t.BvyxEx);
                    (0, a.openModal)((n) =>
                        (0, i.jsx)(a.ConfirmModal, {
                            header: e,
                            confirmButtonColor: a.Button.Colors.BRAND,
                            confirmText: S.intl.string(S.t.BddRzc),
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
                let t = S.intl.string(S.t.QZg0Jy),
                    n = null != e ? e : S.intl.string(S.t.VzHcSk);
                (0, a.openModal)((e) =>
                    (0, i.jsx)(a.ConfirmModal, {
                        header: t,
                        confirmButtonColor: a.Button.Colors.BRAND,
                        confirmText: S.intl.string(S.t.BddRzc),
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
    let P = (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(g.F, {
                setting: E.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_STREAM_INFO_OVERLAY,
                children: (0, i.jsx)(a.FormSwitch, {
                    value: j,
                    onChange: (e) => {
                        (0, _.Z)('stream_info_overlay_enabled', e, j), (0, o.y)({ isStreamInfoOverlayEnabled: e });
                    },
                    note: S.intl.string(S.t.kBXuW1),
                    hideBorder: t,
                    children: S.intl.string(S.t['0CEP6e'])
                })
            }),
            (0, i.jsx)(g.F, {
                setting: E.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_AEC_DUMP,
                children: (0, i.jsx)(a.FormSwitch, {
                    value: A,
                    onChange: (e) => l.Z.setAecDump(e),
                    note: S.intl.string(S.t['xl9+Iy']),
                    hideBorder: t,
                    children: S.intl.string(S.t['r6K+TE'])
                })
            }),
            (0, i.jsxs)(g.F, {
                setting: E.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_CONNECTION_REPLAY,
                children: [
                    (0, i.jsx)(a.FormSwitch, {
                        hideBorder: !0,
                        value: O,
                        onChange: (e) => c.TC(e),
                        note: S.intl.string(S.t.Lm72RU),
                        children: S.intl.string(S.t.U4FgFB)
                    }),
                    (0, i.jsx)(a.FormItem, {
                        children: (0, i.jsx)(u.Z, {
                            className: b.marginBottom20,
                            children: (0, i.jsx)(u.Z.Child, {
                                grow: 0,
                                shrink: 0,
                                children: (0, i.jsx)(a.Button, {
                                    size: a.Button.Sizes.SMALL,
                                    onClick: () => c.z4(),
                                    children: S.intl.string(S.t.nJnOHB)
                                })
                            })
                        })
                    }),
                    t ? null : (0, i.jsx)(a.FormDivider, { className: b.marginBottom20 })
                ]
            }),
            (0, i.jsx)(g.F, {
                setting: E.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_LOGGING,
                children: (0, i.jsxs)('div', {
                    children: [
                        (0, i.jsx)(a.FormSwitch, {
                            hideBorder: !0,
                            value: v,
                            onChange: N,
                            note: S.intl.string(S.t['/7ak9f']),
                            children: S.intl.string(S.t['726JHB'])
                        }),
                        (0, i.jsx)(a.FormItem, {
                            children: (0, i.jsxs)(u.Z, {
                                children: [
                                    (0, i.jsx)(u.Z.Child, {
                                        grow: 0,
                                        shrink: 0,
                                        children: (0, i.jsx)(a.Button, {
                                            disabled: n,
                                            size: a.Button.Sizes.SMALL,
                                            onClick: R,
                                            children: S.intl.string(S.t['3UB9aW'])
                                        })
                                    }),
                                    (0, i.jsx)(u.Z.Child, {
                                        grow: 0,
                                        shrink: 0,
                                        children: (0, i.jsx)(a.Button, {
                                            size: a.Button.Sizes.SMALL,
                                            onClick: I,
                                            children: S.intl.string(S.t.nuPtYm)
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                })
            })
        ]
    });
    return t
        ? P
        : (0, i.jsx)(a.FormSection, {
              className: b.marginBottom40,
              title: S.intl.string(S.t.OFpL3d),
              children: P
          });
}
