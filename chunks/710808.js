n.d(t, { Z: () => y }), n(388685);
var i = n(200651),
    r = n(192379),
    s = n(442837),
    l = n(481060),
    a = n(846027),
    o = n(179658),
    c = n(304680),
    d = n(579806),
    u = n(600164),
    m = n(729345),
    p = n(458725),
    g = n(921801),
    h = n(857192),
    f = n(131951),
    b = n(226961),
    _ = n(12647),
    x = n(569550),
    E = n(726985),
    C = n(981631),
    j = n(65154),
    O = n(388032),
    S = n(20493);
function v(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = i);
            });
    }
    return e;
}
function T(e, t) {
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
    let e = await d.Z.fileManager.getLogPath();
    d.Z.fileManager.showItemInFolder(e);
}
function N(e) {
    (0, l.h7j)((t) =>
        (0, i.jsx)(
            l.ConfirmModal,
            T(
                v(
                    {
                        header: O.intl.string(O.t['7UXEFx']),
                        confirmText: O.intl.string(O.t.BddRzc),
                        cancelText: O.intl.string(O.t['ETE/oK']),
                        onCancel: t.onClose,
                        onConfirm: () => a.Z.setDebugLogging(e)
                    },
                    t
                ),
                {
                    children: (0, i.jsx)(l.Text, {
                        variant: 'text-md/normal',
                        children: O.intl.string(O.t.IYPrRk)
                    })
                }
            )
        )
    );
}
function y(e) {
    let { refreshStyles: t = !1 } = e,
        [n, d] = r.useState(!1),
        { debugLogging: y, aecDumpEnabled: A } = (0, s.cj)([f.Z], () => ({
            aecDumpSupported: f.Z.isAecDumpSupported(),
            debugLogging: f.Z.getDebugLogging(),
            aecDumpEnabled: f.Z.getAecDump(),
            supportsConnectionReplay: f.Z.supports(j.AN.CONNECTION_REPLAY)
        })),
        P = (0, s.e7)([h.default], () => h.default.isStreamInfoOverlayEnabled),
        R = (0, s.e7)([b.ZP], () => b.ZP.shouldRecordNextConnection());
    async function D() {
        d(!0);
        try {
            await f.Z.getMediaEngine().writeAudioDebugState(), await _.Z.submitLiveCrashReport({ message: { message: 'User Live Dump' } }), await (0, m.E)(C.GU0.RTC);
            let e = O.intl.string(O.t['fKBB8/']),
                t = O.intl.string(O.t.BvyxEx);
            (0, l.h7j)((n) =>
                (0, i.jsx)(
                    l.ConfirmModal,
                    T(
                        v(
                            {
                                header: e,
                                confirmButtonColor: l.zxk.Colors.BRAND,
                                confirmText: O.intl.string(O.t.BddRzc)
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
                let n = O.intl.string(O.t.QZg0Jy),
                    r = null != e ? e : O.intl.string(O.t.VzHcSk),
                    s = null == (t = (0, p.hp)(p.u.DEBUG_LOG_UPLOAD_FAILED)) ? void 0 : t.errorCode,
                    a = O.intl.formatToPlainString(O.t['ejOT9/'], { errorCode: s });
                (0, l.h7j)((e) =>
                    (0, i.jsx)(
                        l.ConfirmModal,
                        T(
                            v(
                                {
                                    header: n,
                                    confirmButtonColor: l.zxk.Colors.BRAND,
                                    confirmText: O.intl.string(O.t.BddRzc)
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
                                            children: a
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
    let Z = (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(g.F, {
                setting: E.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_STREAM_INFO_OVERLAY,
                children: (0, i.jsx)(l.j7V, {
                    value: P,
                    onChange: (e) => {
                        (0, x.Z)('stream_info_overlay_enabled', e, P), (0, o.y)({ isStreamInfoOverlayEnabled: e });
                    },
                    note: O.intl.string(O.t.kBXuW1),
                    hideBorder: t,
                    children: O.intl.string(O.t['0CEP6e'])
                })
            }),
            (0, i.jsx)(g.F, {
                setting: E.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_AEC_DUMP,
                children: (0, i.jsx)(l.j7V, {
                    value: A,
                    onChange: (e) => a.Z.setAecDump(e),
                    note: O.intl.string(O.t['xl9+Iy']),
                    hideBorder: t,
                    children: O.intl.string(O.t['r6K+TE'])
                })
            }),
            (0, i.jsxs)(g.F, {
                setting: E.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_CONNECTION_REPLAY,
                children: [
                    (0, i.jsx)(l.j7V, {
                        hideBorder: !0,
                        value: R,
                        onChange: (e) => c.TC(e),
                        note: O.intl.string(O.t.Lm72RU),
                        children: O.intl.string(O.t.U4FgFB)
                    }),
                    (0, i.jsx)(l.xJW, {
                        children: (0, i.jsx)(u.Z, {
                            className: S.marginBottom20,
                            children: (0, i.jsx)(u.Z.Child, {
                                grow: 0,
                                shrink: 0,
                                children: (0, i.jsx)(l.zxk, {
                                    size: l.zxk.Sizes.SMALL,
                                    onClick: () => c.z4(),
                                    children: O.intl.string(O.t.nJnOHB)
                                })
                            })
                        })
                    }),
                    t ? null : (0, i.jsx)(l.$i$, { className: S.marginBottom20 })
                ]
            }),
            (0, i.jsx)(g.F, {
                setting: E.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_LOGGING,
                children: (0, i.jsxs)('div', {
                    children: [
                        (0, i.jsx)(l.j7V, {
                            hideBorder: !0,
                            value: y,
                            onChange: N,
                            note: O.intl.string(O.t['/7ak9f']),
                            children: O.intl.string(O.t['726JHB'])
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
                                            onClick: D,
                                            children: O.intl.string(O.t['3UB9aW'])
                                        })
                                    }),
                                    (0, i.jsx)(u.Z.Child, {
                                        grow: 0,
                                        shrink: 0,
                                        children: (0, i.jsx)(l.zxk, {
                                            size: l.zxk.Sizes.SMALL,
                                            onClick: I,
                                            children: O.intl.string(O.t.nuPtYm)
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
        ? Z
        : (0, i.jsx)(l.hjN, {
              className: S.marginBottom40,
              title: O.intl.string(O.t.OFpL3d),
              children: Z
          });
}
