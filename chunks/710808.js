n.d(t, { Z: () => I }), n(47120);
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
    g = n(921801),
    p = n(857192),
    h = n(131951),
    f = n(226961),
    N = n(12647),
    x = n(569550),
    b = n(726985),
    _ = n(981631),
    E = n(65154),
    j = n(388032),
    C = n(455812);
function O(e) {
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
async function S() {
    let e = await d.Z.fileManager.getLogPath();
    d.Z.fileManager.showItemInFolder(e);
}
function T(e) {
    (0, a.h7j)((t) =>
        (0, r.jsx)(
            a.ConfirmModal,
            v(
                O(
                    {
                        header: j.NW.string(j.t['7UXEFx']),
                        confirmText: j.NW.string(j.t.BddRzc),
                        cancelText: j.NW.string(j.t['ETE/oK']),
                        onCancel: t.onClose,
                        onConfirm: () => l.Z.setDebugLogging(e)
                    },
                    t
                ),
                {
                    children: (0, r.jsx)(a.Text, {
                        variant: 'text-md/normal',
                        children: j.NW.string(j.t.IYPrRk)
                    })
                }
            )
        )
    );
}
function I(e) {
    let { refreshStyles: t = !1 } = e,
        [n, d] = i.useState(!1),
        { debugLogging: I, aecDumpEnabled: y } = (0, s.cj)([h.Z], () => ({
            aecDumpSupported: h.Z.isAecDumpSupported(),
            debugLogging: h.Z.getDebugLogging(),
            aecDumpEnabled: h.Z.getAecDump(),
            supportsConnectionReplay: h.Z.supports(E.AN.CONNECTION_REPLAY)
        })),
        A = (0, s.e7)([p.default], () => p.default.isStreamInfoOverlayEnabled),
        P = (0, s.e7)([f.ZP], () => f.ZP.shouldRecordNextConnection());
    async function R() {
        d(!0);
        try {
            await h.Z.getMediaEngine().writeAudioDebugState(),
                await N.Z.submitLiveCrashReport({ message: { message: 'User Live Dump' } }),
                await (0, m.E)(_.GU0.RTC),
                (function () {
                    let e = j.NW.string(j.t['fKBB8/']),
                        t = j.NW.string(j.t.BvyxEx);
                    (0, a.h7j)((n) =>
                        (0, r.jsx)(
                            a.ConfirmModal,
                            v(
                                O(
                                    {
                                        header: e,
                                        confirmButtonColor: a.zxk.Colors.BRAND,
                                        confirmText: j.NW.string(j.t.BddRzc)
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
                })();
        } catch (e) {
            !(function (e) {
                let t = j.NW.string(j.t.QZg0Jy),
                    n = null != e ? e : j.NW.string(j.t.VzHcSk);
                (0, a.h7j)((e) =>
                    (0, r.jsx)(
                        a.ConfirmModal,
                        v(
                            O(
                                {
                                    header: t,
                                    confirmButtonColor: a.zxk.Colors.BRAND,
                                    confirmText: j.NW.string(j.t.BddRzc)
                                },
                                e
                            ),
                            {
                                children: (0, r.jsx)(a.Text, {
                                    variant: 'text-md/normal',
                                    children: n
                                })
                            }
                        )
                    )
                );
            })(e.displayMessage);
        }
    }
    let D = (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(g.F, {
                setting: b.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_STREAM_INFO_OVERLAY,
                children: (0, r.jsx)(a.j7V, {
                    value: A,
                    onChange: (e) => {
                        (0, x.Z)('stream_info_overlay_enabled', e, A), (0, o.y)({ isStreamInfoOverlayEnabled: e });
                    },
                    note: j.NW.string(j.t.kBXuW1),
                    hideBorder: t,
                    children: j.NW.string(j.t['0CEP6e'])
                })
            }),
            (0, r.jsx)(g.F, {
                setting: b.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_AEC_DUMP,
                children: (0, r.jsx)(a.j7V, {
                    value: y,
                    onChange: (e) => l.Z.setAecDump(e),
                    note: j.NW.string(j.t['xl9+Iy']),
                    hideBorder: t,
                    children: j.NW.string(j.t['r6K+TE'])
                })
            }),
            (0, r.jsxs)(g.F, {
                setting: b.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_CONNECTION_REPLAY,
                children: [
                    (0, r.jsx)(a.j7V, {
                        hideBorder: !0,
                        value: P,
                        onChange: (e) => c.TC(e),
                        note: j.NW.string(j.t.Lm72RU),
                        children: j.NW.string(j.t.U4FgFB)
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
                                    children: j.NW.string(j.t.nJnOHB)
                                })
                            })
                        })
                    }),
                    t ? null : (0, r.jsx)(a.$i$, { className: C.marginBottom20 })
                ]
            }),
            (0, r.jsx)(g.F, {
                setting: b.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_LOGGING,
                children: (0, r.jsxs)('div', {
                    children: [
                        (0, r.jsx)(a.j7V, {
                            hideBorder: !0,
                            value: I,
                            onChange: T,
                            note: j.NW.string(j.t['/7ak9f']),
                            children: j.NW.string(j.t['726JHB'])
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
                                            onClick: R,
                                            children: j.NW.string(j.t['3UB9aW'])
                                        })
                                    }),
                                    (0, r.jsx)(u.Z.Child, {
                                        grow: 0,
                                        shrink: 0,
                                        children: (0, r.jsx)(a.zxk, {
                                            size: a.zxk.Sizes.SMALL,
                                            onClick: S,
                                            children: j.NW.string(j.t.nuPtYm)
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
        : (0, r.jsx)(a.hjN, {
              className: C.marginBottom40,
              title: j.NW.string(j.t.OFpL3d),
              children: D
          });
}
