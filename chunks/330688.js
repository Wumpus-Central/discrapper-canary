n.d(t, {
    Ay: () => O,
    TU: () => x,
    hH: () => b,
});
var r = n(627968),
    i = n(64700),
    l = n(311907),
    s = n(397927),
    a = n(827343),
    o = n(117178),
    c = n(688810),
    d = n(430452),
    u = n(723702),
    _ = n(555444),
    p = n(780964),
    m = n(840065),
    g = n(825468),
    A = n(652215),
    f = n(985018);
let h = !u.isPlatformEmbedded;

function b(e) {
    return e >= 1e3 ? ((e /= 1e3), "".concat(e.toFixed(2), "s")) : "".concat(e.toFixed(0), "\xa0ms");
}

function E(e) {
    let t,
        { inputMode: n } = e,
        { shortcut: i, delay: c, pttLatchingEnabled: h } = (0, l.cf)([d.A], () => d.A.getModeOptions()),
        { enableLatching: E } = (0, _.y)({
            location: "PTTTools",
        });
    return (
        (t =
            u.isPlatformEmbedded || n !== A.TBI.PUSH_TO_TALK
                ? (0, r.jsx)(s.po8, {
                      messageType: s.YCn.INFO,
                      children: f.intl.format(f.t.HVvn5T, {
                          onClick: () =>
                              (0, m.openUserSettings)(p.X.KEYBINDS_PANEL, {
                                  section: A.nc_.KEYBINDS,
                              }),
                      }),
                  })
                : (0, r.jsx)(s.po8, {
                      messageType: s.YCn.WARNING,
                      children: f.intl.format(f.t.zvMPOc, {
                          onDownloadClick: () => (0, g._)("Help Text PTT"),
                      }),
                  })),
        (0, r.jsxs)(s.BJc, {
            gap: 20,
            children: [
                (0, r.jsxs)(s.BJc, {
                    gap: 16,
                    direction: "horizontal",
                    children: [
                        (0, r.jsx)(s.D0$, {
                            label: f.intl.string(f.t.YkDjVM),
                            children: (0, r.jsx)(o.A, {
                                defaultValue: i,
                                onChange: (e) =>
                                    a.A.setMode(n, {
                                        shortcut: e,
                                    }),
                            }),
                        }),
                        (0, r.jsx)(s.Apm, {
                            label: f.intl.string(f.t.y0ShVt),
                            initialValue: c,
                            onValueChange: (e) =>
                                a.A.setMode(n, {
                                    delay: e,
                                }),
                            onValueRender: b,
                            maxValue: A.IjB,
                        }),
                    ],
                }),
                E &&
                    (0, r.jsx)(s.dOG, {
                        label: f.intl.string(f.t.EGn1eN),
                        description: f.intl.string(f.t.iT257i),
                        checked: null != h && h,
                        onChange: (e) =>
                            a.A.setMode(n, {
                                pttLatchingEnabled: e,
                            }),
                    }),
                t,
            ],
        })
    );
}

function x(e, t) {
    e === A.TBI.PUSH_TO_TALK &&
        h &&
        (0, s.mMO)(async () => {
            let { default: e } = await n.e("10919").then(n.bind(n, 556506));
            return (t) =>
                (0, r.jsx)(
                    e,
                    (function (e) {
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
                                    var r;
                                    (r = n[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: r,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0,
                                              })
                                            : (e[t] = r);
                                });
                        }
                        return e;
                    })(
                        {
                            title: f.intl.string(f.t.Kdt0Gb),
                            confirmText: f.intl.string(f.t["1WjMbC"]),
                            cancelText: f.intl.string(f.t.BddRzS),
                            onConfirm: () => (0, g._)("PTT Limited Modal"),
                            body: f.intl.string(f.t.NIozvt),
                        },
                        t,
                    ),
                );
        }),
        a.A.setMode(e, void 0, void 0, {
            analyticsLocations: t,
        });
}

function O() {
    let { analyticsLocations: e } = (0, c.Ay)(),
        t = (0, l.bG)([d.A], () => d.A.getMode()),
        n = [
            {
                value: A.TBI.VOICE_ACTIVITY,
                name: f.intl.string(f.t.cHCEOJ),
            },
            {
                value: A.TBI.PUSH_TO_TALK,
                name: h ? f.intl.string(f.t["1AINrB"]) : f.intl.string(f.t.Q8gkVL),
            },
        ],
        a = i.useCallback(
            (t) => {
                let { value: n } = t;
                x(n, e);
            },
            [e],
        );
    return (0, r.jsxs)(s.BJc, {
        gap: 20,
        children: [
            (0, r.jsx)(s.z6M, {
                label: f.intl.string(f.t["pS+K2L"]),
                onChange: (e) =>
                    a({
                        value: e,
                    }),
                options: n,
                value: t,
            }),
            t === A.TBI.PUSH_TO_TALK &&
                (0, r.jsx)(E, {
                    inputMode: t,
                }),
        ],
    });
}
