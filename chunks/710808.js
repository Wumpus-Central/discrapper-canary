n.d(t, {
    W2: () => w,
    ZP: () => M,
    rT: () => L,
    xI: () => j,
}),
    n(388685);
var r = n(54381),
    i = n(473749),
    a = n(442837),
    o = n(248514),
    s = n(755721),
    l = n(481060),
    c = n(846027),
    u = n(179658),
    d = n(304680),
    f = n(579806),
    p = n(600164),
    _ = n(729345),
    m = n(458725),
    h = n(921801),
    g = n(857192),
    E = n(131951),
    b = n(226961),
    y = n(12647),
    O = n(569550),
    v = n(726985),
    S = n(981631),
    I = n(65154),
    T = n(388032),
    A = n(197571);
function C(e, t, n) {
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
function N(e) {
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
                C(e, t, n[t]);
            });
    }
    return e;
}
function P(e, t) {
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
            : P(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
async function w() {
    let e = await f.Z.fileManager.getLogPath();
    f.Z.fileManager.showItemInFolder(e);
}
function D() {
    let e = T.intl.string(T.t["fKBB8+"]),
        t = T.intl.string(T.t.BvyxE7);
    (0, l.h7j)((n) =>
        (0, r.jsx)(
            l.ConfirmModal,
            R(
                N(
                    {
                        header: e,
                        confirmButtonColor: s.zx.Colors.BRAND,
                        confirmText: T.intl.string(T.t.BddRzS),
                    },
                    n,
                ),
                {
                    children: (0, r.jsx)(l.Text, {
                        variant: "text-md/normal",
                        children: t,
                    }),
                },
            ),
        ),
    );
}
function x(e) {
    var t;
    let n = T.intl.string(T.t.QZg0J7),
        i = null != e ? e : T.intl.string(T.t.VzHcSm),
        a = null == (t = (0, m.hp)(m.u.DEBUG_LOG_UPLOAD_FAILED)) ? void 0 : t.errorCode,
        o = T.intl.formatToPlainString(T.t.ejOT95, { errorCode: a });
    (0, l.h7j)((e) =>
        (0, r.jsx)(
            l.ConfirmModal,
            R(
                N(
                    {
                        header: n,
                        confirmButtonColor: s.zx.Colors.BRAND,
                        confirmText: T.intl.string(T.t.BddRzS),
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
                            (0, r.jsx)(l.Text, {
                                variant: "text-md/normal",
                                children: i,
                            }),
                            (0, r.jsx)(l.Text, {
                                variant: "text-sm/semibold",
                                selectable: !0,
                                style: { marginTop: "auto" },
                                children: o,
                            }),
                        ],
                    }),
                },
            ),
        ),
    );
}
function L(e) {
    (0, o.Z)({
        title: T.intl.string(T.t["7UXEF2"]),
        subtitle: T.intl.string(T.t.IYPrRl),
        confirmText: T.intl.string(T.t.BddRzS),
        onConfirm: () => c.Z.setDebugLogging(e),
    });
}
async function j(e) {
    let { onUploadStart: t, onUploadFinish: n } = e;
    null == t || t();
    try {
        await E.Z.getMediaEngine().writeAudioDebugState(),
            await y.Z.submitLiveCrashReport({ message: { message: "User Live Dump" } }),
            await (0, _.E)(S.GU0.RTC),
            D();
    } catch (e) {
        x(e.displayMessage);
    } finally {
        null == n || n();
    }
}
function M() {
    let [e, t] = i.useState(!1),
        { debugLogging: n, aecDumpEnabled: o } = (0, a.cj)([E.Z], () => ({
            aecDumpSupported: E.Z.isAecDumpSupported(),
            debugLogging: E.Z.getDebugLogging(),
            aecDumpEnabled: E.Z.getAecDump(),
            supportsConnectionReplay: E.Z.supports(I.AN.CONNECTION_REPLAY),
        })),
        s = (0, a.e7)([g.default], () => g.default.isStreamInfoOverlayEnabled),
        f = (0, a.e7)([b.ZP], () => b.ZP.shouldRecordNextConnection()),
        _ = i.useCallback(async () => {
            await j({ onUploadStart: () => t(!0) });
        }, []);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(h.F, {
                setting: v.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_STREAM_INFO_OVERLAY,
                children: (0, r.jsx)(l.rsf, {
                    label: T.intl.string(T.t["0CEP6e"]),
                    description: T.intl.string(T.t["kBXuW+"]),
                    checked: s,
                    onChange: (e) => {
                        (0, O.Z)("stream_info_overlay_enabled", e, s), (0, u.y)({ isStreamInfoOverlayEnabled: e });
                    },
                }),
            }),
            (0, r.jsx)(h.F, {
                setting: v.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_AEC_DUMP,
                children: (0, r.jsx)(l.rsf, {
                    label: T.intl.string(T.t["r6K+TL"]),
                    description: T.intl.string(T.t["xl9+I6"]),
                    checked: o,
                    onChange: (e) => c.Z.setAecDump(e),
                }),
            }),
            (0, r.jsxs)(h.F, {
                setting: v.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_CONNECTION_REPLAY,
                children: [
                    (0, r.jsx)(l.rsf, {
                        label: T.intl.string(T.t.U4FgFK),
                        description: T.intl.string(T.t.Lm72RU),
                        checked: f,
                        onChange: (e) => d.TC(e),
                    }),
                    (0, r.jsx)(p.Z, {
                        className: A.marginBottom20,
                        children: (0, r.jsx)(p.Z.Child, {
                            grow: 0,
                            shrink: 0,
                            children: (0, r.jsx)(l.Button, {
                                variant: "primary",
                                size: "sm",
                                text: T.intl.string(T.t.nJnOHO),
                                onClick: () => d.z4(),
                            }),
                        }),
                    }),
                ],
            }),
            (0, r.jsx)(h.F, {
                setting: v.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_LOGGING,
                children: (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(l.rsf, {
                            label: T.intl.string(T.t["726JHL"]),
                            description: T.intl.string(T.t["/7ak9Q"]),
                            checked: n,
                            onChange: L,
                        }),
                        (0, r.jsxs)(l.ButtonGroup, {
                            size: "sm",
                            children: [
                                (0, r.jsx)(l.Button, {
                                    variant: "primary",
                                    text: T.intl.string(T.t["3UB9ad"]),
                                    disabled: e,
                                    onClick: _,
                                }),
                                (0, r.jsx)(l.Button, {
                                    variant: "secondary",
                                    text: T.intl.string(T.t.nuPtYi),
                                    onClick: w,
                                }),
                            ],
                        }),
                    ],
                }),
            }),
        ],
    });
}
