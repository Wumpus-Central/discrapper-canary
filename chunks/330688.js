n.d(t, {
    Ay: () => S,
    TU: () => v,
    hH: () => O,
});
var r = n(627968),
    i = n(64700),
    a = n(311907),
    s = n(397927),
    o = n(827343),
    l = n(117178),
    c = n(688810),
    u = n(430452),
    d = n(723702),
    f = n(555444),
    p = n(780964),
    _ = n(840065),
    h = n(825468),
    m = n(652215),
    g = n(985018);

function E(e, t, n) {
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

function b(e) {
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
                E(e, t, n[t]);
            });
    }
    return e;
}
let y = !d.isPlatformEmbedded;

function O(e) {
    return e >= 1e3 ? ((e /= 1e3), "".concat(e.toFixed(2), "s")) : "".concat(e.toFixed(0), "\xa0ms");
}

function A(e) {
    let t,
        { inputMode: n } = e,
        { shortcut: i, delay: c, pttLatchingEnabled: E } = (0, a.cf)([u.A], () => u.A.getModeOptions()),
        { enableLatching: b } = (0, f.y)({
            location: "PTTTools",
        });
    return (
        (t =
            d.isPlatformEmbedded || n !== m.TBI.PUSH_TO_TALK
                ? (0, r.jsx)(s.po8, {
                      messageType: s.YCn.INFO,
                      children: g.intl.format(g.t.HVvn5T, {
                          onClick: () =>
                              (0, _.openUserSettings)(p.X.KEYBINDS_PANEL, {
                                  section: m.nc_.KEYBINDS,
                              }),
                      }),
                  })
                : (0, r.jsx)(s.po8, {
                      messageType: s.YCn.WARNING,
                      children: g.intl.format(g.t.zvMPOc, {
                          onDownloadClick: () => (0, h._)("Help Text PTT"),
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
                            label: g.intl.string(g.t.YkDjVM),
                            children: (0, r.jsx)(l.A, {
                                defaultValue: i,
                                onChange: (e) =>
                                    o.A.setMode(n, {
                                        shortcut: e,
                                    }),
                            }),
                        }),
                        (0, r.jsx)(s.Apm, {
                            label: g.intl.string(g.t.y0ShVt),
                            initialValue: c,
                            onValueChange: (e) =>
                                o.A.setMode(n, {
                                    delay: e,
                                }),
                            onValueRender: O,
                            maxValue: m.IjB,
                        }),
                    ],
                }),
                b &&
                    (0, r.jsx)(s.dOG, {
                        label: g.intl.string(g.t.EGn1eN),
                        description: g.intl.string(g.t.iT257i),
                        checked: null != E && E,
                        onChange: (e) =>
                            o.A.setMode(n, {
                                pttLatchingEnabled: e,
                            }),
                    }),
                t,
            ],
        })
    );
}

function v(e, t) {
    e === m.TBI.PUSH_TO_TALK &&
        y &&
        (0, s.mMO)(async () => {
            let { default: e } = await n.e("10919").then(n.bind(n, 556506));
            return (t) =>
                (0, r.jsx)(
                    e,
                    b(
                        {
                            title: g.intl.string(g.t.Kdt0Gb),
                            confirmText: g.intl.string(g.t["1WjMbC"]),
                            cancelText: g.intl.string(g.t.BddRzS),
                            onConfirm: () => (0, h._)("PTT Limited Modal"),
                            body: g.intl.string(g.t.NIozvt),
                        },
                        t,
                    ),
                );
        }),
        o.A.setMode(e, void 0, void 0, {
            analyticsLocations: t,
        });
}

function S() {
    let { analyticsLocations: e } = (0, c.Ay)(),
        t = (0, a.bG)([u.A], () => u.A.getMode()),
        n = [
            {
                value: m.TBI.VOICE_ACTIVITY,
                name: g.intl.string(g.t.cHCEOJ),
            },
            {
                value: m.TBI.PUSH_TO_TALK,
                name: y ? g.intl.string(g.t["1AINrB"]) : g.intl.string(g.t.Q8gkVL),
            },
        ],
        o = i.useCallback(
            (t) => {
                let { value: n } = t;
                v(n, e);
            },
            [e],
        );
    return (0, r.jsxs)(s.BJc, {
        gap: 20,
        children: [
            (0, r.jsx)(s.z6M, {
                label: g.intl.string(g.t["pS+K2L"]),
                onChange: (e) =>
                    o({
                        value: e,
                    }),
                options: n,
                value: t,
            }),
            t === m.TBI.PUSH_TO_TALK &&
                (0, r.jsx)(A, {
                    inputMode: t,
                }),
        ],
    });
}
