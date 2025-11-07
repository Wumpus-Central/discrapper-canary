n.d(t, {
    XH: () => I,
    ZP: () => T,
    cO: () => O,
});
var r = n(951288),
    i = n(647438),
    a = n(442837),
    o = n(481060),
    s = n(846027),
    l = n(825209),
    c = n(906732),
    u = n(131951),
    d = n(358085),
    f = n(383451),
    _ = n(313789),
    p = n(518596),
    h = n(962100),
    m = n(981631),
    g = n(388032);
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
    return e >= 1000 ? ((e /= 1000), "".concat(e.toFixed(2), "s")) : "".concat(e.toFixed(0), "\xA0ms");
}
function v(e) {
    let t,
        { inputMode: n } = e,
        { shortcut: i, delay: c, pttLatchingEnabled: E } = (0, a.cj)([u.Z], () => u.Z.getModeOptions()),
        { enableLatching: b } = (0, f.H)({ location: "PTTTools" });
    return (
        (t =
            d.isPlatformEmbedded || n !== m.pM4.PUSH_TO_TALK
                ? (0, r.jsx)(o.Wn, {
                      messageType: o.QYI.INFO,
                      children: g.intl.format(g.t.HVvn5T, {
                          onClick: () => (0, p.openUserSettings)(_.n.KEYBINDS_PANEL, { section: m.oAB.KEYBINDS }),
                      }),
                  })
                : (0, r.jsx)(o.Wn, {
                      messageType: o.QYI.WARNING,
                      children: g.intl.format(g.t.zvMPOc, { onDownloadClick: () => (0, h.y)("Help Text PTT") }),
                  })),
        (0, r.jsxs)(o.Kqy, {
            gap: 20,
            children: [
                (0, r.jsxs)(o.Kqy, {
                    gap: 16,
                    direction: "horizontal",
                    children: [
                        (0, r.jsx)(o.gNt, {
                            label: g.intl.string(g.t.YkDjVM),
                            children: (0, r.jsx)(l.Z, {
                                defaultValue: i,
                                onChange: (e) => s.Z.setMode(n, { shortcut: e }),
                            }),
                        }),
                        (0, r.jsx)(o.iRW, {
                            label: g.intl.string(g.t.y0ShVt),
                            initialValue: c,
                            onValueChange: (e) => s.Z.setMode(n, { delay: e }),
                            onValueRender: O,
                            maxValue: m.qhL,
                        }),
                    ],
                }),
                b &&
                    (0, r.jsx)(o.rsf, {
                        label: g.intl.string(g.t.EGn1eN),
                        description: g.intl.string(g.t.iT257i),
                        checked: null != E && E,
                        onChange: (e) => s.Z.setMode(n, { pttLatchingEnabled: e }),
                    }),
                t,
            ],
        })
    );
}
function I(e, t) {
    e === m.pM4.PUSH_TO_TALK &&
        y &&
        (0, o.ZDy)(async () => {
            let { default: e } = await Promise.resolve().then(n.bind(n, 273352));
            return (t) =>
                (0, r.jsx)(
                    e,
                    b(
                        {
                            title: g.intl.string(g.t.Kdt0Gb),
                            confirmText: g.intl.string(g.t["1WjMbC"]),
                            cancelText: g.intl.string(g.t.BddRzS),
                            onConfirm: () => (0, h.y)("PTT Limited Modal"),
                            body: g.intl.string(g.t.NIozvt),
                        },
                        t,
                    ),
                );
        }),
        s.Z.setMode(e, void 0, void 0, { analyticsLocations: t });
}
function T() {
    let { analyticsLocations: e } = (0, c.ZP)(),
        t = (0, a.e7)([u.Z], () => u.Z.getMode()),
        n = [
            {
                value: m.pM4.VOICE_ACTIVITY,
                name: g.intl.string(g.t.cHCEOJ),
            },
            {
                value: m.pM4.PUSH_TO_TALK,
                name: y ? g.intl.string(g.t["1AINrB"]) : g.intl.string(g.t.Q8gkVL),
            },
        ],
        s = i.useCallback(
            (t) => {
                let { value: n } = t;
                I(n, e);
            },
            [e],
        );
    return (0, r.jsxs)(o.Kqy, {
        gap: 20,
        children: [
            (0, r.jsx)(o.FXm, {
                label: g.intl.string(g.t["pS+K2L"]),
                onChange: (e) => s({ value: e }),
                options: n,
                value: t,
            }),
            t === m.pM4.PUSH_TO_TALK && (0, r.jsx)(v, { inputMode: t }),
        ],
    });
}
