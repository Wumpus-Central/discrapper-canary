n.d(t, {
    W2: () => P,
    ZP: () => M,
    rT: () => x,
    xI: () => L,
}),
    n(388685);
var r = n(951288),
    i = n(647438),
    a = n(442837),
    o = n(755721),
    s = n(481060),
    l = n(846027),
    c = n(179658),
    u = n(304680),
    d = n(579806),
    f = n(600164),
    _ = n(729345),
    p = n(458725),
    h = n(921801),
    m = n(857192),
    g = n(131951),
    E = n(226961),
    b = n(12647),
    y = n(569550),
    O = n(726985),
    v = n(981631),
    I = n(65154),
    S = n(388032),
    T = n(10198);
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
function R(e, t) {
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
async function P() {
    let e = await d.Z.fileManager.getLogPath();
    d.Z.fileManager.showItemInFolder(e);
}
function w() {
    let e = S.intl.string(S.t["fKBB8+"]),
        t = S.intl.string(S.t.BvyxE7);
    (0, s.h7j)((n) =>
        (0, r.jsx)(
            s.ConfirmModal,
            R(
                C(
                    {
                        header: e,
                        confirmButtonColor: o.zx.Colors.BRAND,
                        confirmText: S.intl.string(S.t.BddRzS),
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
    let n = S.intl.string(S.t.QZg0J7),
        i = null != e ? e : S.intl.string(S.t.VzHcSm),
        a = null == (t = (0, p.hp)(p.u.DEBUG_LOG_UPLOAD_FAILED)) ? void 0 : t.errorCode,
        l = S.intl.formatToPlainString(S.t.ejOT95, { errorCode: a });
    (0, s.h7j)((e) =>
        (0, r.jsx)(
            s.ConfirmModal,
            R(
                C(
                    {
                        header: n,
                        confirmButtonColor: o.zx.Colors.BRAND,
                        confirmText: S.intl.string(S.t.BddRzS),
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
            R(
                C(
                    {
                        header: S.intl.string(S.t["7UXEF2"]),
                        confirmText: S.intl.string(S.t.BddRzS),
                        cancelText: S.intl.string(S.t["ETE/oC"]),
                        onCancel: t.onClose,
                        onConfirm: () => l.Z.setDebugLogging(e),
                    },
                    t,
                ),
                {
                    children: (0, r.jsx)(s.Text, {
                        variant: "text-md/normal",
                        children: S.intl.string(S.t.IYPrRl),
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
            await (0, _.E)(v.GU0.RTC),
            w();
    } catch (e) {
        D(e.displayMessage);
    } finally {
        null == n || n();
    }
}
function M() {
    let [e, t] = i.useState(!1),
        { debugLogging: n, aecDumpEnabled: o } = (0, a.cj)([g.Z], () => ({
            aecDumpSupported: g.Z.isAecDumpSupported(),
            debugLogging: g.Z.getDebugLogging(),
            aecDumpEnabled: g.Z.getAecDump(),
            supportsConnectionReplay: g.Z.supports(I.AN.CONNECTION_REPLAY),
        })),
        d = (0, a.e7)([m.default], () => m.default.isStreamInfoOverlayEnabled),
        _ = (0, a.e7)([E.ZP], () => E.ZP.shouldRecordNextConnection()),
        p = i.useCallback(async () => {
            await L({ onUploadStart: () => t(!0) });
        }, []);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(h.F, {
                setting: O.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_STREAM_INFO_OVERLAY,
                children: (0, r.jsx)(s.rsf, {
                    label: S.intl.string(S.t["0CEP6e"]),
                    description: S.intl.string(S.t["kBXuW+"]),
                    checked: d,
                    onChange: (e) => {
                        (0, y.Z)("stream_info_overlay_enabled", e, d), (0, c.y)({ isStreamInfoOverlayEnabled: e });
                    },
                }),
            }),
            (0, r.jsx)(h.F, {
                setting: O.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_AEC_DUMP,
                children: (0, r.jsx)(s.rsf, {
                    label: S.intl.string(S.t["r6K+TL"]),
                    description: S.intl.string(S.t["xl9+I6"]),
                    checked: o,
                    onChange: (e) => l.Z.setAecDump(e),
                }),
            }),
            (0, r.jsxs)(h.F, {
                setting: O.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_CONNECTION_REPLAY,
                children: [
                    (0, r.jsx)(s.rsf, {
                        label: S.intl.string(S.t.U4FgFK),
                        description: S.intl.string(S.t.Lm72RU),
                        checked: _,
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
                                text: S.intl.string(S.t.nJnOHO),
                                onClick: () => u.z4(),
                            }),
                        }),
                    }),
                ],
            }),
            (0, r.jsx)(h.F, {
                setting: O.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_LOGGING,
                children: (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(s.rsf, {
                            label: S.intl.string(S.t["726JHL"]),
                            description: S.intl.string(S.t["/7ak9Q"]),
                            checked: n,
                            onChange: x,
                        }),
                        (0, r.jsxs)(s.ButtonGroup, {
                            size: "sm",
                            children: [
                                (0, r.jsx)(s.Button, {
                                    variant: "primary",
                                    text: S.intl.string(S.t["3UB9ad"]),
                                    disabled: e,
                                    onClick: p,
                                }),
                                (0, r.jsx)(s.Button, {
                                    variant: "secondary",
                                    text: S.intl.string(S.t.nuPtYi),
                                    onClick: P,
                                }),
                            ],
                        }),
                    ],
                }),
            }),
        ],
    });
}
