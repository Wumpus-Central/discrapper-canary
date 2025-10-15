n.d(t, { Z: () => T });
var r = n(951288),
    i = n(647438),
    a = n(442837),
    o = n(538534),
    s = n(481060),
    l = n(846027),
    c = n(825209),
    u = n(906732),
    d = n(131951),
    f = n(358085),
    _ = n(383451),
    p = n(313789),
    h = n(518596),
    m = n(962100),
    g = n(981631),
    E = n(388032);
function b(e, t, n) {
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
function y(e) {
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
                b(e, t, n[t]);
            });
    }
    return e;
}
let O = !f.isPlatformEmbedded;
function v(e) {
    return e >= 1000 ? ((e /= 1000), "".concat(e.toFixed(2), "s")) : "".concat(e.toFixed(0), "\xA0ms");
}
function I(e) {
    let t,
        { inputMode: n } = e,
        { shortcut: i, delay: o, pttLatchingEnabled: u } = (0, a.cj)([d.Z], () => d.Z.getModeOptions()),
        { enableLatching: b } = (0, _.H)({ location: "PTTTools" });
    return (
        (t =
            f.isPlatformEmbedded || n !== g.pM4.PUSH_TO_TALK
                ? (0, r.jsx)(s.Wn, {
                      messageType: s.QYI.INFO,
                      children: E.intl.format(E.t.HVvn5e, {
                          onClick: () => (0, h.openUserSettings)(p.n.KEYBINDS_PANEL, { section: g.oAB.KEYBINDS }),
                      }),
                  })
                : (0, r.jsx)(s.Wn, {
                      messageType: s.QYI.WARNING,
                      children: E.intl.format(E.t.zvMPOT, { onDownloadClick: () => (0, m.y)("Help Text PTT") }),
                  })),
        (0, r.jsxs)(s.Kqy, {
            gap: 20,
            children: [
                (0, r.jsxs)(s.Kqy, {
                    gap: 16,
                    direction: "horizontal",
                    children: [
                        (0, r.jsx)(s.gNt, {
                            label: E.intl.string(E.t.YkDjVF),
                            children: (0, r.jsx)(c.Z, {
                                defaultValue: i,
                                onChange: (e) => l.Z.setMode(n, { shortcut: e }),
                            }),
                        }),
                        (0, r.jsx)(s.iRW, {
                            label: E.intl.string(E.t.y0ShVl),
                            initialValue: o,
                            onValueChange: (e) => l.Z.setMode(n, { delay: e }),
                            onValueRender: v,
                            maxValue: g.qhL,
                        }),
                    ],
                }),
                b &&
                    (0, r.jsx)(s.rsf, {
                        label: E.intl.string(E.t.EGn1eH),
                        description: E.intl.string(E.t.iT257u),
                        checked: null != u && u,
                        onChange: (e) => l.Z.setMode(n, { pttLatchingEnabled: e }),
                    }),
                t,
            ],
        })
    );
}
function T() {
    let { analyticsLocations: e } = (0, u.ZP)(),
        t = (0, a.e7)([d.Z], () => d.Z.getMode()),
        c = [
            {
                value: g.pM4.VOICE_ACTIVITY,
                name: E.intl.string(E.t.cHCEOD),
            },
            {
                value: g.pM4.PUSH_TO_TALK,
                name: O ? E.intl.string(E.t["1AINrK"]) : E.intl.string(E.t.Q8gkVF),
            },
        ],
        f = i.useCallback(
            (t) => {
                let { value: i } = t;
                i === g.pM4.PUSH_TO_TALK &&
                    O &&
                    (0, s.ZDy)(async () => {
                        let { default: e } = await Promise.resolve().then(n.bind(n, 468026));
                        return (t) =>
                            (0, r.jsx)(
                                e,
                                y(
                                    {
                                        title: E.intl.string(E.t.Kdt0GR),
                                        confirmText: E.intl.string(E.t["1WjMbG"]),
                                        cancelText: E.intl.string(E.t.BddRzc),
                                        onConfirm: () => (0, m.y)("PTT Limited Modal"),
                                        body: E.intl.string(E.t.NIozvr),
                                    },
                                    t,
                                ),
                            );
                    }),
                    l.Z.setMode(i, void 0, void 0, { analyticsLocations: e });
            },
            [e],
        );
    return (0, r.jsxs)(s.Kqy, {
        gap: 20,
        children: [
            (0, r.jsx)(o.E, {
                label: E.intl.string(E.t["pS+K2N"]),
                onChange: (e) => f({ value: e }),
                options: c,
                value: t,
            }),
            t === g.pM4.PUSH_TO_TALK && (0, r.jsx)(I, { inputMode: t }),
        ],
    });
}
