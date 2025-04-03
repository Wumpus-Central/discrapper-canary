n.d(t, { Z: () => y }), n(47120);
var r = n(200651),
    i = n(192379),
    s = n(442837),
    a = n(481060),
    l = n(846027),
    o = n(179658),
    c = n(304680),
    d = n(579806),
    u = n(600164),
    m = n(729345),
    g = n(785141),
    p = n(921801),
    h = n(857192),
    f = n(131951),
    b = n(226961),
    N = n(12647),
    x = n(569550),
    _ = n(726985),
    E = n(981631),
    j = n(65154),
    O = n(388032),
    C = n(20493);
function S(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function v(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
async function T() {
    let e = await d.Z.fileManager.getLogPath();
    d.Z.fileManager.showItemInFolder(e);
}
function I(e) {
    (0, a.h7j)((t) =>
        (0, r.jsx)(
            a.ConfirmModal,
            v(
                S(
                    {
                        header: O.NW.string(O.t['7UXEFx']),
                        confirmText: O.NW.string(O.t.BddRzc),
                        cancelText: O.NW.string(O.t['ETE/oK']),
                        onCancel: t.onClose,
                        onConfirm: () => l.Z.setDebugLogging(e)
                    },
                    t
                ),
                {
                    children: (0, r.jsx)(a.Text, {
                        variant: 'text-md/normal',
                        children: O.NW.string(O.t.IYPrRk)
                    })
                }
            )
        )
    );
}
function y(e) {
    let { refreshStyles: t = !1 } = e,
        [n, d] = i.useState(!1),
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
            await f.Z.getMediaEngine().writeAudioDebugState(), await N.Z.submitLiveCrashReport({ message: { message: 'User Live Dump' } }), await (0, m.E)(E.GU0.RTC);
            let e = O.NW.string(O.t['fKBB8/']),
                t = O.NW.string(O.t.BvyxEx);
            (0, a.h7j)((n) =>
                (0, r.jsx)(
                    a.ConfirmModal,
                    v(
                        S(
                            {
                                header: e,
                                confirmButtonColor: a.zxk.Colors.BRAND,
                                confirmText: O.NW.string(O.t.BddRzc)
                            },
                            n
                        ),
                        {
                            children: (0, r.jsx)(a.Text, {
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
                let n = O.NW.string(O.t.QZg0Jy),
                    i = null != e ? e : O.NW.string(O.t.VzHcSk),
                    s = null == (t = (0, g.hp)(g.u.DEBUG_LOG_UPLOAD_FAILED)) ? void 0 : t.errorCode,
                    l = O.NW.formatToPlainString(O.t['ejOT9/'], { errorCode: s });
                (0, a.h7j)((e) =>
                    (0, r.jsx)(
                        a.ConfirmModal,
                        v(
                            S(
                                {
                                    header: n,
                                    confirmButtonColor: a.zxk.Colors.BRAND,
                                    confirmText: O.NW.string(O.t.BddRzc)
                                },
                                e
                            ),
                            {
                                children: (0, r.jsxs)('div', {
                                    style: {
                                        display: 'flex',
                                        flexDirection: 'column',
                                        height: '100%'
                                    },
                                    children: [
                                        (0, r.jsx)(a.Text, {
                                            variant: 'text-md/normal',
                                            children: i
                                        }),
                                        (0, r.jsx)(a.Text, {
                                            variant: 'text-sm/semibold',
                                            selectable: !0,
                                            style: { marginTop: 'auto' },
                                            children: l
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
    let Z = (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(p.F, {
                setting: _.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_STREAM_INFO_OVERLAY,
                children: (0, r.jsx)(a.j7V, {
                    value: P,
                    onChange: (e) => {
                        (0, x.Z)('stream_info_overlay_enabled', e, P), (0, o.y)({ isStreamInfoOverlayEnabled: e });
                    },
                    note: O.NW.string(O.t.kBXuW1),
                    hideBorder: t,
                    children: O.NW.string(O.t['0CEP6e'])
                })
            }),
            (0, r.jsx)(p.F, {
                setting: _.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_AEC_DUMP,
                children: (0, r.jsx)(a.j7V, {
                    value: A,
                    onChange: (e) => l.Z.setAecDump(e),
                    note: O.NW.string(O.t['xl9+Iy']),
                    hideBorder: t,
                    children: O.NW.string(O.t['r6K+TE'])
                })
            }),
            (0, r.jsxs)(p.F, {
                setting: _.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_CONNECTION_REPLAY,
                children: [
                    (0, r.jsx)(a.j7V, {
                        hideBorder: !0,
                        value: R,
                        onChange: (e) => c.TC(e),
                        note: O.NW.string(O.t.Lm72RU),
                        children: O.NW.string(O.t.U4FgFB)
                    }),
                    (0, r.jsx)(a.xJW, {
                        children: (0, r.jsx)(u.Z, {
                            className: C.marginBottom20,
                            children: (0, r.jsx)(u.Z.Child, {
                                grow: 0,
                                shrink: 0,
                                children: (0, r.jsx)(a.zxk, {
                                    size: a.zxk.Sizes.SMALL,
                                    onClick: () => c.z4(),
                                    children: O.NW.string(O.t.nJnOHB)
                                })
                            })
                        })
                    }),
                    t ? null : (0, r.jsx)(a.$i$, { className: C.marginBottom20 })
                ]
            }),
            (0, r.jsx)(p.F, {
                setting: _.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_LOGGING,
                children: (0, r.jsxs)('div', {
                    children: [
                        (0, r.jsx)(a.j7V, {
                            hideBorder: !0,
                            value: y,
                            onChange: I,
                            note: O.NW.string(O.t['/7ak9f']),
                            children: O.NW.string(O.t['726JHB'])
                        }),
                        (0, r.jsx)(a.xJW, {
                            children: (0, r.jsxs)(u.Z, {
                                children: [
                                    (0, r.jsx)(u.Z.Child, {
                                        grow: 0,
                                        shrink: 0,
                                        children: (0, r.jsx)(a.zxk, {
                                            disabled: n,
                                            size: a.zxk.Sizes.SMALL,
                                            onClick: D,
                                            children: O.NW.string(O.t['3UB9aW'])
                                        })
                                    }),
                                    (0, r.jsx)(u.Z.Child, {
                                        grow: 0,
                                        shrink: 0,
                                        children: (0, r.jsx)(a.zxk, {
                                            size: a.zxk.Sizes.SMALL,
                                            onClick: T,
                                            children: O.NW.string(O.t.nuPtYm)
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
        : (0, r.jsx)(a.hjN, {
              className: C.marginBottom40,
              title: O.NW.string(O.t.OFpL3d),
              children: Z
          });
}
