n.d(t, { Z: () => v }), n(47120);
var i = n(200651),
    s = n(192379),
    l = n(442837),
    r = n(481060),
    a = n(846027),
    o = n(179658),
    c = n(304680),
    d = n(579806),
    u = n(600164),
    h = n(729345),
    m = n(921801),
    g = n(857192),
    x = n(131951),
    _ = n(226961),
    p = n(12647),
    E = n(569550),
    C = n(726985),
    N = n(981631),
    f = n(65154),
    I = n(388032),
    T = n(483938);
async function S() {
    let e = await d.Z.fileManager.getLogPath();
    d.Z.fileManager.showItemInFolder(e);
}
function j(e) {
    (0, r.h7j)((t) =>
        (0, i.jsx)(r.ConfirmModal, {
            header: I.intl.string(I.t['7UXEFx']),
            confirmText: I.intl.string(I.t.BddRzc),
            cancelText: I.intl.string(I.t['ETE/oK']),
            onCancel: t.onClose,
            onConfirm: () => a.Z.setDebugLogging(e),
            ...t,
            children: (0, i.jsx)(r.Text, {
                variant: 'text-md/normal',
                children: I.intl.string(I.t.IYPrRk)
            })
        })
    );
}
function v(e) {
    let { refreshStyles: t = !1 } = e,
        [n, d] = s.useState(!1),
        { debugLogging: v, aecDumpEnabled: b } = (0, l.cj)([x.Z], () => ({
            aecDumpSupported: x.Z.isAecDumpSupported(),
            debugLogging: x.Z.getDebugLogging(),
            aecDumpEnabled: x.Z.getAecDump(),
            supportsConnectionReplay: x.Z.supports(f.AN.CONNECTION_REPLAY)
        })),
        A = (0, l.e7)([g.default], () => g.default.isStreamInfoOverlayEnabled),
        O = (0, l.e7)([_.ZP], () => _.ZP.shouldRecordNextConnection());
    async function R() {
        d(!0);
        try {
            await x.Z.getMediaEngine().writeAudioDebugState(),
                await p.Z.submitLiveCrashReport({ message: { message: 'User Live Dump' } }),
                await (0, h.E)(N.GU0.RTC),
                (function () {
                    let e = I.intl.string(I.t['fKBB8/']),
                        t = I.intl.string(I.t.BvyxEx);
                    (0, r.h7j)((n) =>
                        (0, i.jsx)(r.ConfirmModal, {
                            header: e,
                            confirmButtonColor: r.zxk.Colors.BRAND,
                            confirmText: I.intl.string(I.t.BddRzc),
                            ...n,
                            children: (0, i.jsx)(r.Text, {
                                variant: 'text-md/normal',
                                children: t
                            })
                        })
                    );
                })();
        } catch (e) {
            !(function (e) {
                let t = I.intl.string(I.t.QZg0Jy),
                    n = null != e ? e : I.intl.string(I.t.VzHcSk);
                (0, r.h7j)((e) =>
                    (0, i.jsx)(r.ConfirmModal, {
                        header: t,
                        confirmButtonColor: r.zxk.Colors.BRAND,
                        confirmText: I.intl.string(I.t.BddRzc),
                        ...e,
                        children: (0, i.jsx)(r.Text, {
                            variant: 'text-md/normal',
                            children: n
                        })
                    })
                );
            })(e.displayMessage);
        }
    }
    let D = (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(m.F, {
                setting: C.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_STREAM_INFO_OVERLAY,
                children: (0, i.jsx)(r.j7V, {
                    value: A,
                    onChange: (e) => {
                        (0, E.Z)('stream_info_overlay_enabled', e, A), (0, o.y)({ isStreamInfoOverlayEnabled: e });
                    },
                    note: I.intl.string(I.t.kBXuW1),
                    hideBorder: t,
                    children: I.intl.string(I.t['0CEP6e'])
                })
            }),
            (0, i.jsx)(m.F, {
                setting: C.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_AEC_DUMP,
                children: (0, i.jsx)(r.j7V, {
                    value: b,
                    onChange: (e) => a.Z.setAecDump(e),
                    note: I.intl.string(I.t['xl9+Iy']),
                    hideBorder: t,
                    children: I.intl.string(I.t['r6K+TE'])
                })
            }),
            (0, i.jsxs)(m.F, {
                setting: C.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_CONNECTION_REPLAY,
                children: [
                    (0, i.jsx)(r.j7V, {
                        hideBorder: !0,
                        value: O,
                        onChange: (e) => c.TC(e),
                        note: I.intl.string(I.t.Lm72RU),
                        children: I.intl.string(I.t.U4FgFB)
                    }),
                    (0, i.jsx)(r.xJW, {
                        children: (0, i.jsx)(u.Z, {
                            className: T.marginBottom20,
                            children: (0, i.jsx)(u.Z.Child, {
                                grow: 0,
                                shrink: 0,
                                children: (0, i.jsx)(r.zxk, {
                                    size: r.zxk.Sizes.SMALL,
                                    onClick: () => c.z4(),
                                    children: I.intl.string(I.t.nJnOHB)
                                })
                            })
                        })
                    }),
                    t ? null : (0, i.jsx)(r.$i$, { className: T.marginBottom20 })
                ]
            }),
            (0, i.jsx)(m.F, {
                setting: C.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_LOGGING,
                children: (0, i.jsxs)('div', {
                    children: [
                        (0, i.jsx)(r.j7V, {
                            hideBorder: !0,
                            value: v,
                            onChange: j,
                            note: I.intl.string(I.t['/7ak9f']),
                            children: I.intl.string(I.t['726JHB'])
                        }),
                        (0, i.jsx)(r.xJW, {
                            children: (0, i.jsxs)(u.Z, {
                                children: [
                                    (0, i.jsx)(u.Z.Child, {
                                        grow: 0,
                                        shrink: 0,
                                        children: (0, i.jsx)(r.zxk, {
                                            disabled: n,
                                            size: r.zxk.Sizes.SMALL,
                                            onClick: R,
                                            children: I.intl.string(I.t['3UB9aW'])
                                        })
                                    }),
                                    (0, i.jsx)(u.Z.Child, {
                                        grow: 0,
                                        shrink: 0,
                                        children: (0, i.jsx)(r.zxk, {
                                            size: r.zxk.Sizes.SMALL,
                                            onClick: S,
                                            children: I.intl.string(I.t.nuPtYm)
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
        ? D
        : (0, i.jsx)(r.hjN, {
              className: T.marginBottom40,
              title: I.intl.string(I.t.OFpL3d),
              children: D
          });
}
