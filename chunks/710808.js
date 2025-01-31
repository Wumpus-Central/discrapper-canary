n.d(t, { Z: () => v }), n(47120);
var i = n(200651),
    s = n(192379),
    r = n(442837),
    l = n(481060),
    a = n(846027),
    o = n(179658),
    c = n(304680),
    d = n(579806),
    u = n(600164),
    m = n(729345),
    h = n(921801),
    g = n(857192),
    _ = n(131951),
    x = n(226961),
    p = n(12647),
    E = n(569550),
    C = n(726985),
    f = n(981631),
    T = n(65154),
    N = n(388032),
    I = n(232186);
async function S() {
    let e = await d.Z.fileManager.getLogPath();
    d.Z.fileManager.showItemInFolder(e);
}
function b(e) {
    (0, l.h7j)((t) =>
        (0, i.jsx)(l.ConfirmModal, {
            header: N.intl.string(N.t['7UXEFx']),
            confirmText: N.intl.string(N.t.BddRzc),
            cancelText: N.intl.string(N.t['ETE/oK']),
            onCancel: t.onClose,
            onConfirm: () => a.Z.setDebugLogging(e),
            ...t,
            children: (0, i.jsx)(l.Text, {
                variant: 'text-md/normal',
                children: N.intl.string(N.t.IYPrRk)
            })
        })
    );
}
function v(e) {
    let { refreshStyles: t = !1 } = e,
        [n, d] = s.useState(!1),
        { debugLogging: v, aecDumpEnabled: j } = (0, r.cj)([_.Z], () => ({
            aecDumpSupported: _.Z.isAecDumpSupported(),
            debugLogging: _.Z.getDebugLogging(),
            aecDumpEnabled: _.Z.getAecDump(),
            supportsConnectionReplay: _.Z.supports(T.AN.CONNECTION_REPLAY)
        })),
        A = (0, r.e7)([g.default], () => g.default.isStreamInfoOverlayEnabled),
        O = (0, r.e7)([x.ZP], () => x.ZP.shouldRecordNextConnection());
    async function R() {
        d(!0);
        try {
            await _.Z.getMediaEngine().writeAudioDebugState(),
                await p.Z.submitLiveCrashReport({ message: { message: 'User Live Dump' } }),
                await (0, m.E)(f.GU0.RTC),
                (function () {
                    let e = N.intl.string(N.t['fKBB8/']),
                        t = N.intl.string(N.t.BvyxEx);
                    (0, l.h7j)((n) =>
                        (0, i.jsx)(l.ConfirmModal, {
                            header: e,
                            confirmButtonColor: l.zxk.Colors.BRAND,
                            confirmText: N.intl.string(N.t.BddRzc),
                            ...n,
                            children: (0, i.jsx)(l.Text, {
                                variant: 'text-md/normal',
                                children: t
                            })
                        })
                    );
                })();
        } catch (e) {
            !(function (e) {
                let t = N.intl.string(N.t.QZg0Jy),
                    n = null != e ? e : N.intl.string(N.t.VzHcSk);
                (0, l.h7j)((e) =>
                    (0, i.jsx)(l.ConfirmModal, {
                        header: t,
                        confirmButtonColor: l.zxk.Colors.BRAND,
                        confirmText: N.intl.string(N.t.BddRzc),
                        ...e,
                        children: (0, i.jsx)(l.Text, {
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
            (0, i.jsx)(h.F, {
                setting: C.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_STREAM_INFO_OVERLAY,
                children: (0, i.jsx)(l.j7V, {
                    value: A,
                    onChange: (e) => {
                        (0, E.Z)('stream_info_overlay_enabled', e, A), (0, o.y)({ isStreamInfoOverlayEnabled: e });
                    },
                    note: N.intl.string(N.t.kBXuW1),
                    hideBorder: t,
                    children: N.intl.string(N.t['0CEP6e'])
                })
            }),
            (0, i.jsx)(h.F, {
                setting: C.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_AEC_DUMP,
                children: (0, i.jsx)(l.j7V, {
                    value: j,
                    onChange: (e) => a.Z.setAecDump(e),
                    note: N.intl.string(N.t['xl9+Iy']),
                    hideBorder: t,
                    children: N.intl.string(N.t['r6K+TE'])
                })
            }),
            (0, i.jsxs)(h.F, {
                setting: C.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_CONNECTION_REPLAY,
                children: [
                    (0, i.jsx)(l.j7V, {
                        hideBorder: !0,
                        value: O,
                        onChange: (e) => c.TC(e),
                        note: N.intl.string(N.t.Lm72RU),
                        children: N.intl.string(N.t.U4FgFB)
                    }),
                    (0, i.jsx)(l.xJW, {
                        children: (0, i.jsx)(u.Z, {
                            className: I.marginBottom20,
                            children: (0, i.jsx)(u.Z.Child, {
                                grow: 0,
                                shrink: 0,
                                children: (0, i.jsx)(l.zxk, {
                                    size: l.zxk.Sizes.SMALL,
                                    onClick: () => c.z4(),
                                    children: N.intl.string(N.t.nJnOHB)
                                })
                            })
                        })
                    }),
                    t ? null : (0, i.jsx)(l.$i$, { className: I.marginBottom20 })
                ]
            }),
            (0, i.jsx)(h.F, {
                setting: C.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_LOGGING,
                children: (0, i.jsxs)('div', {
                    children: [
                        (0, i.jsx)(l.j7V, {
                            hideBorder: !0,
                            value: v,
                            onChange: b,
                            note: N.intl.string(N.t['/7ak9f']),
                            children: N.intl.string(N.t['726JHB'])
                        }),
                        (0, i.jsx)(l.xJW, {
                            children: (0, i.jsxs)(u.Z, {
                                children: [
                                    (0, i.jsx)(u.Z.Child, {
                                        grow: 0,
                                        shrink: 0,
                                        children: (0, i.jsx)(l.zxk, {
                                            disabled: n,
                                            size: l.zxk.Sizes.SMALL,
                                            onClick: R,
                                            children: N.intl.string(N.t['3UB9aW'])
                                        })
                                    }),
                                    (0, i.jsx)(u.Z.Child, {
                                        grow: 0,
                                        shrink: 0,
                                        children: (0, i.jsx)(l.zxk, {
                                            size: l.zxk.Sizes.SMALL,
                                            onClick: S,
                                            children: N.intl.string(N.t.nuPtYm)
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
        : (0, i.jsx)(l.hjN, {
              className: I.marginBottom40,
              title: N.intl.string(N.t.OFpL3d),
              children: P
          });
}
