(n.d(t, { Z: () => A }), n(388685));
var i = n(255367),
    r = n(73800),
    s = n(442837),
    a = n(755721),
    l = n(481060),
    o = n(846027),
    c = n(179658),
    d = n(304680),
    u = n(579806),
    m = n(600164),
    p = n(729345),
    g = n(458725),
    h = n(921801),
    f = n(857192),
    b = n(131951),
    x = n(226961),
    _ = n(12647),
    j = n(569550),
    E = n(726985),
    O = n(981631),
    C = n(65154),
    v = n(388032),
    S = n(20493);
function T(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                ((i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = i));
            }));
    }
    return e;
}
function N(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
async function I() {
    let e = await u.Z.fileManager.getLogPath();
    u.Z.fileManager.showItemInFolder(e);
}
function y(e) {
    (0, l.h7j)((t) =>
        (0, i.jsx)(
            l.ConfirmModal,
            N(
                T(
                    {
                        header: v.intl.string(v.t['7UXEFx']),
                        confirmText: v.intl.string(v.t.BddRzc),
                        cancelText: v.intl.string(v.t['ETE/oK']),
                        onCancel: t.onClose,
                        onConfirm: () => o.Z.setDebugLogging(e)
                    },
                    t
                ),
                {
                    children: (0, i.jsx)(l.Text, {
                        variant: 'text-md/normal',
                        children: v.intl.string(v.t.IYPrRk)
                    })
                }
            )
        )
    );
}
function A(e) {
    let { refreshStyles: t = !1 } = e,
        [n, u] = r.useState(!1),
        { debugLogging: A, aecDumpEnabled: P } = (0, s.cj)([b.Z], () => ({
            aecDumpSupported: b.Z.isAecDumpSupported(),
            debugLogging: b.Z.getDebugLogging(),
            aecDumpEnabled: b.Z.getAecDump(),
            supportsConnectionReplay: b.Z.supports(C.AN.CONNECTION_REPLAY)
        })),
        R = (0, s.e7)([f.default], () => f.default.isStreamInfoOverlayEnabled),
        D = (0, s.e7)([x.ZP], () => x.ZP.shouldRecordNextConnection());
    async function Z() {
        u(!0);
        try {
            (await b.Z.getMediaEngine().writeAudioDebugState(), await _.Z.submitLiveCrashReport({ message: { message: 'User Live Dump' } }), await (0, p.E)(O.GU0.RTC));
            let e = v.intl.string(v.t['fKBB8/']),
                t = v.intl.string(v.t.BvyxEx);
            (0, l.h7j)((n) =>
                (0, i.jsx)(
                    l.ConfirmModal,
                    N(
                        T(
                            {
                                header: e,
                                confirmButtonColor: a.zx.Colors.BRAND,
                                confirmText: v.intl.string(v.t.BddRzc)
                            },
                            n
                        ),
                        {
                            children: (0, i.jsx)(l.Text, {
                                variant: 'text-md/normal',
                                children: t
                            })
                        }
                    )
                )
            );
        } catch (e) {
            !(function (e) {
                var t;
                let n = v.intl.string(v.t.QZg0Jy),
                    r = null != e ? e : v.intl.string(v.t.VzHcSk),
                    s = null == (t = (0, g.hp)(g.u.DEBUG_LOG_UPLOAD_FAILED)) ? void 0 : t.errorCode,
                    o = v.intl.formatToPlainString(v.t['ejOT9/'], { errorCode: s });
                (0, l.h7j)((e) =>
                    (0, i.jsx)(
                        l.ConfirmModal,
                        N(
                            T(
                                {
                                    header: n,
                                    confirmButtonColor: a.zx.Colors.BRAND,
                                    confirmText: v.intl.string(v.t.BddRzc)
                                },
                                e
                            ),
                            {
                                children: (0, i.jsxs)('div', {
                                    style: {
                                        display: 'flex',
                                        flexDirection: 'column',
                                        height: '100%'
                                    },
                                    children: [
                                        (0, i.jsx)(l.Text, {
                                            variant: 'text-md/normal',
                                            children: r
                                        }),
                                        (0, i.jsx)(l.Text, {
                                            variant: 'text-sm/semibold',
                                            selectable: !0,
                                            style: { marginTop: 'auto' },
                                            children: o
                                        })
                                    ]
                                })
                            }
                        )
                    )
                );
            })(e.displayMessage);
        }
    }
    let w = (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(h.F, {
                setting: E.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_STREAM_INFO_OVERLAY,
                children: (0, i.jsx)(l.j7V, {
                    value: R,
                    onChange: (e) => {
                        ((0, j.Z)('stream_info_overlay_enabled', e, R), (0, c.y)({ isStreamInfoOverlayEnabled: e }));
                    },
                    note: v.intl.string(v.t.kBXuW1),
                    hideBorder: t,
                    children: v.intl.string(v.t['0CEP6e'])
                })
            }),
            (0, i.jsx)(h.F, {
                setting: E.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_AEC_DUMP,
                children: (0, i.jsx)(l.j7V, {
                    value: P,
                    onChange: (e) => o.Z.setAecDump(e),
                    note: v.intl.string(v.t['xl9+Iy']),
                    hideBorder: t,
                    children: v.intl.string(v.t['r6K+TE'])
                })
            }),
            (0, i.jsxs)(h.F, {
                setting: E.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_CONNECTION_REPLAY,
                children: [
                    (0, i.jsx)(l.j7V, {
                        hideBorder: !0,
                        value: D,
                        onChange: (e) => d.TC(e),
                        note: v.intl.string(v.t.Lm72RU),
                        children: v.intl.string(v.t.U4FgFB)
                    }),
                    (0, i.jsx)(l.xJW, {
                        children: (0, i.jsx)(m.Z, {
                            className: S.marginBottom20,
                            children: (0, i.jsx)(m.Z.Child, {
                                grow: 0,
                                shrink: 0,
                                children: (0, i.jsx)(l.zxk, {
                                    variant: 'primary',
                                    size: 'sm',
                                    text: v.intl.string(v.t.nJnOHB),
                                    onClick: () => d.z4()
                                })
                            })
                        })
                    }),
                    t ? null : (0, i.jsx)(l.$i$, { className: S.marginBottom20 })
                ]
            }),
            (0, i.jsx)(h.F, {
                setting: E.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_LOGGING,
                children: (0, i.jsxs)('div', {
                    children: [
                        (0, i.jsx)(l.j7V, {
                            hideBorder: !0,
                            value: A,
                            onChange: y,
                            note: v.intl.string(v.t['/7ak9f']),
                            children: v.intl.string(v.t['726JHB'])
                        }),
                        (0, i.jsx)(l.xJW, {
                            children: (0, i.jsxs)(l.hE2, {
                                size: 'sm',
                                children: [
                                    (0, i.jsx)(l.zxk, {
                                        variant: 'primary',
                                        text: v.intl.string(v.t['3UB9aW']),
                                        disabled: n,
                                        onClick: Z
                                    }),
                                    (0, i.jsx)(l.zxk, {
                                        variant: 'primary',
                                        text: v.intl.string(v.t.nuPtYm),
                                        onClick: I
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
        ? w
        : (0, i.jsx)(l.hjN, {
              className: S.marginBottom40,
              title: v.intl.string(v.t.OFpL3d),
              children: w
          });
}
