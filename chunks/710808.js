n.d(t, {
    W2: () => D,
    ZP: () => k,
    rT: () => j,
    xI: () => M,
}),
    n(388685);
var r = n(54381),
    i = n(473749),
    a = n(442837),
    o = n(885387),
    s = n(248514),
    l = n(755721),
    c = n(481060),
    u = n(846027),
    d = n(179658),
    f = n(304680),
    p = n(579806),
    _ = n(600164),
    m = n(729345),
    h = n(458725),
    g = n(921801),
    E = n(857192),
    b = n(131951),
    y = n(226961),
    O = n(12647),
    v = n(569550),
    S = n(726985),
    I = n(981631),
    T = n(65154),
    A = n(388032),
    C = n(197571);
function N(e, t, n) {
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
function P(e) {
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
                N(e, t, n[t]);
            });
    }
    return e;
}
function R(e, t) {
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
function w(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : R(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
async function D() {
    let e = await p.Z.fileManager.getLogPath();
    p.Z.fileManager.showItemInFolder(e);
}
function x() {
    let e = A.intl.string(A.t["fKBB8+"]),
        t = A.intl.string(A.t.BvyxE7);
    (0, o.Z)({
        title: e,
        subtitle: t,
    });
}
function L(e) {
    var t;
    let n = A.intl.string(A.t.QZg0J7),
        i = null != e ? e : A.intl.string(A.t.VzHcSm),
        a = null == (t = (0, h.hp)(h.u.DEBUG_LOG_UPLOAD_FAILED)) ? void 0 : t.errorCode,
        o = A.intl.formatToPlainString(A.t.ejOT95, { errorCode: a });
    (0, c.h7j)((e) =>
        (0, r.jsx)(
            c.ConfirmModal,
            w(
                P(
                    {
                        header: n,
                        confirmButtonColor: l.zx.Colors.BRAND,
                        confirmText: A.intl.string(A.t.BddRzS),
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
                            (0, r.jsx)(c.Text, {
                                variant: "text-md/normal",
                                children: i,
                            }),
                            (0, r.jsx)(c.Text, {
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
function j(e) {
    (0, s.Z)({
        title: A.intl.string(A.t["7UXEF2"]),
        subtitle: A.intl.string(A.t.IYPrRl),
        confirmText: A.intl.string(A.t.BddRzS),
        onConfirm: () => u.Z.setDebugLogging(e),
    });
}
async function M(e) {
    let { onUploadStart: t, onUploadFinish: n } = e;
    null == t || t();
    try {
        await b.Z.getMediaEngine().writeAudioDebugState(),
            await O.Z.submitLiveCrashReport({ message: { message: "User Live Dump" } }),
            await (0, m.E)(I.GU0.RTC),
            x();
    } catch (e) {
        L(e.displayMessage);
    } finally {
        null == n || n();
    }
}
function k() {
    let [e, t] = i.useState(!1),
        { debugLogging: n, aecDumpEnabled: o } = (0, a.cj)([b.Z], () => ({
            aecDumpSupported: b.Z.isAecDumpSupported(),
            debugLogging: b.Z.getDebugLogging(),
            aecDumpEnabled: b.Z.getAecDump(),
            supportsConnectionReplay: b.Z.supports(T.AN.CONNECTION_REPLAY),
        })),
        s = (0, a.e7)([E.default], () => E.default.isStreamInfoOverlayEnabled),
        l = (0, a.e7)([y.ZP], () => y.ZP.shouldRecordNextConnection()),
        p = i.useCallback(async () => {
            await M({ onUploadStart: () => t(!0) });
        }, []);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(g.F, {
                setting: S.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_STREAM_INFO_OVERLAY,
                children: (0, r.jsx)(c.rsf, {
                    label: A.intl.string(A.t["0CEP6e"]),
                    description: A.intl.string(A.t["kBXuW+"]),
                    checked: s,
                    onChange: (e) => {
                        (0, v.Z)("stream_info_overlay_enabled", e, s), (0, d.y)({ isStreamInfoOverlayEnabled: e });
                    },
                }),
            }),
            (0, r.jsx)(g.F, {
                setting: S.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_AEC_DUMP,
                children: (0, r.jsx)(c.rsf, {
                    label: A.intl.string(A.t["r6K+TL"]),
                    description: A.intl.string(A.t["xl9+I6"]),
                    checked: o,
                    onChange: (e) => u.Z.setAecDump(e),
                }),
            }),
            (0, r.jsxs)(g.F, {
                setting: S.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_CONNECTION_REPLAY,
                children: [
                    (0, r.jsx)(c.rsf, {
                        label: A.intl.string(A.t.U4FgFK),
                        description: A.intl.string(A.t.Lm72RU),
                        checked: l,
                        onChange: (e) => f.TC(e),
                    }),
                    (0, r.jsx)(_.Z, {
                        className: C.marginBottom20,
                        children: (0, r.jsx)(_.Z.Child, {
                            grow: 0,
                            shrink: 0,
                            children: (0, r.jsx)(c.Button, {
                                variant: "primary",
                                size: "sm",
                                text: A.intl.string(A.t.nJnOHO),
                                onClick: () => f.z4(),
                            }),
                        }),
                    }),
                ],
            }),
            (0, r.jsx)(g.F, {
                setting: S.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_LOGGING,
                children: (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(c.rsf, {
                            label: A.intl.string(A.t["726JHL"]),
                            description: A.intl.string(A.t["/7ak9Q"]),
                            checked: n,
                            onChange: j,
                        }),
                        (0, r.jsxs)(c.ButtonGroup, {
                            size: "sm",
                            children: [
                                (0, r.jsx)(c.Button, {
                                    variant: "primary",
                                    text: A.intl.string(A.t["3UB9ad"]),
                                    disabled: e,
                                    onClick: p,
                                }),
                                (0, r.jsx)(c.Button, {
                                    variant: "secondary",
                                    text: A.intl.string(A.t.nuPtYi),
                                    onClick: D,
                                }),
                            ],
                        }),
                    ],
                }),
            }),
        ],
    });
}
