n.d(t, {
    W2: () => R,
    ZP: () => j,
    rT: () => x,
    xI: () => L,
}),
    n(388685);
var r = n(54381),
    i = n(473749),
    a = n(442837),
    o = n(755721),
    s = n(481060),
    l = n(846027),
    c = n(179658),
    u = n(304680),
    d = n(579806),
    f = n(600164),
    p = n(729345),
    _ = n(458725),
    m = n(921801),
    h = n(857192),
    g = n(131951),
    E = n(226961),
    b = n(12647),
    y = n(569550),
    O = n(726985),
    v = n(981631),
    S = n(65154),
    I = n(388032),
    T = n(197571);
function A(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function C(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                A(e, t, n[t]);
            });
    }
    return e;
}
function N(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function P(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : N(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
async function R() {
    let e = await d.Z.fileManager.getLogPath();
    d.Z.fileManager.showItemInFolder(e);
}
function w() {
    let e = I.intl.string(I.t["fKBB8+"]),
        t = I.intl.string(I.t.BvyxE7);
    (0, s.h7j)((n) =>
        (0, r.jsx)(
            s.ConfirmModal,
            P(
                C(
                    {
                        header: e,
                        confirmButtonColor: o.zx.Colors.BRAND,
                        confirmText: I.intl.string(I.t.BddRzS),
                    },
                    n,
                ),
                {
                    children: (0, r.jsx)(s.Text, {
                        variant: "text-md/normal",
                        children: t,
                    }),
                },
            ),
        ),
    );
}
function D(e) {
    var t;
    let n = I.intl.string(I.t.QZg0J7),
        i = null != e ? e : I.intl.string(I.t.VzHcSm),
        a = null == (t = (0, _.hp)(_.u.DEBUG_LOG_UPLOAD_FAILED)) ? void 0 : t.errorCode,
        l = I.intl.formatToPlainString(I.t.ejOT95, { errorCode: a });
    (0, s.h7j)((e) =>
        (0, r.jsx)(
            s.ConfirmModal,
            P(
                C(
                    {
                        header: n,
                        confirmButtonColor: o.zx.Colors.BRAND,
                        confirmText: I.intl.string(I.t.BddRzS),
                    },
                    e,
                ),
                {
                    children: (0, r.jsxs)("div", {
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            height: "100%",
                        },
                        children: [
                            (0, r.jsx)(s.Text, {
                                variant: "text-md/normal",
                                children: i,
                            }),
                            (0, r.jsx)(s.Text, {
                                variant: "text-sm/semibold",
                                selectable: !0,
                                style: { marginTop: "auto" },
                                children: l,
                            }),
                        ],
                    }),
                },
            ),
        ),
    );
}
function x(e) {
    (0, s.h7j)((t) =>
        (0, r.jsx)(
            s.ConfirmModal,
            P(
                C(
                    {
                        header: I.intl.string(I.t["7UXEF2"]),
                        confirmText: I.intl.string(I.t.BddRzS),
                        cancelText: I.intl.string(I.t["ETE/oC"]),
                        onCancel: t.onClose,
                        onConfirm: () => l.Z.setDebugLogging(e),
                    },
                    t,
                ),
                {
                    children: (0, r.jsx)(s.Text, {
                        variant: "text-md/normal",
                        children: I.intl.string(I.t.IYPrRl),
                    }),
                },
            ),
        ),
    );
}
async function L(e) {
    let { onUploadStart: t, onUploadFinish: n } = e;
    null == t || t();
    try {
        await g.Z.getMediaEngine().writeAudioDebugState(),
            await b.Z.submitLiveCrashReport({ message: { message: "User Live Dump" } }),
            await (0, p.E)(v.GU0.RTC),
            w();
    } catch (e) {
        D(e.displayMessage);
    } finally {
        null == n || n();
    }
}
function j() {
    let [e, t] = i.useState(!1),
        { debugLogging: n, aecDumpEnabled: o } = (0, a.cj)([g.Z], () => ({
            aecDumpSupported: g.Z.isAecDumpSupported(),
            debugLogging: g.Z.getDebugLogging(),
            aecDumpEnabled: g.Z.getAecDump(),
            supportsConnectionReplay: g.Z.supports(S.AN.CONNECTION_REPLAY),
        })),
        d = (0, a.e7)([h.default], () => h.default.isStreamInfoOverlayEnabled),
        p = (0, a.e7)([E.ZP], () => E.ZP.shouldRecordNextConnection()),
        _ = i.useCallback(async () => {
            await L({ onUploadStart: () => t(!0) });
        }, []);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(m.F, {
                setting: O.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_STREAM_INFO_OVERLAY,
                children: (0, r.jsx)(s.rsf, {
                    label: I.intl.string(I.t["0CEP6e"]),
                    description: I.intl.string(I.t["kBXuW+"]),
                    checked: d,
                    onChange: (e) => {
                        (0, y.Z)("stream_info_overlay_enabled", e, d), (0, c.y)({ isStreamInfoOverlayEnabled: e });
                    },
                }),
            }),
            (0, r.jsx)(m.F, {
                setting: O.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_AEC_DUMP,
                children: (0, r.jsx)(s.rsf, {
                    label: I.intl.string(I.t["r6K+TL"]),
                    description: I.intl.string(I.t["xl9+I6"]),
                    checked: o,
                    onChange: (e) => l.Z.setAecDump(e),
                }),
            }),
            (0, r.jsxs)(m.F, {
                setting: O.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_CONNECTION_REPLAY,
                children: [
                    (0, r.jsx)(s.rsf, {
                        label: I.intl.string(I.t.U4FgFK),
                        description: I.intl.string(I.t.Lm72RU),
                        checked: p,
                        onChange: (e) => u.TC(e),
                    }),
                    (0, r.jsx)(f.Z, {
                        className: T.marginBottom20,
                        children: (0, r.jsx)(f.Z.Child, {
                            grow: 0,
                            shrink: 0,
                            children: (0, r.jsx)(s.Button, {
                                variant: "primary",
                                size: "sm",
                                text: I.intl.string(I.t.nJnOHO),
                                onClick: () => u.z4(),
                            }),
                        }),
                    }),
                ],
            }),
            (0, r.jsx)(m.F, {
                setting: O.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_LOGGING,
                children: (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(s.rsf, {
                            label: I.intl.string(I.t["726JHL"]),
                            description: I.intl.string(I.t["/7ak9Q"]),
                            checked: n,
                            onChange: x,
                        }),
                        (0, r.jsxs)(s.ButtonGroup, {
                            size: "sm",
                            children: [
                                (0, r.jsx)(s.Button, {
                                    variant: "primary",
                                    text: I.intl.string(I.t["3UB9ad"]),
                                    disabled: e,
                                    onClick: _,
                                }),
                                (0, r.jsx)(s.Button, {
                                    variant: "secondary",
                                    text: I.intl.string(I.t.nuPtYi),
                                    onClick: R,
                                }),
                            ],
                        }),
                    ],
                }),
            }),
        ],
    });
}
