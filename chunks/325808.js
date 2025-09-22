n.d(t, { Z: () => D });
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(538534),
    c = n(755721),
    u = n(481060),
    d = n(846027),
    f = n(825209),
    _ = n(906732),
    p = n(313201),
    h = n(131951),
    m = n(358085),
    g = n(383451),
    E = n(313789),
    b = n(947889),
    y = n(962100),
    O = n(981631),
    v = n(388032),
    I = n(184767),
    T = n(149715),
    S = n(197571);
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
let N = !m.isPlatformEmbedded,
    R = (0, p.hQ)();
function P(e) {
    return e >= 1000 ? ((e /= 1000), "".concat(e.toFixed(2), "s")) : "".concat(e.toFixed(0), "\xA0ms");
}
function w(e) {
    let t,
        { inputMode: n } = e,
        { shortcut: i, delay: a, pttLatchingEnabled: l } = (0, s.cj)([h.Z], () => h.Z.getModeOptions()),
        { enableLatching: _ } = (0, g.H)({ location: "PTTTools" }),
        A = (0, b.Z)();
    return (
        (t =
            m.isPlatformEmbedded || n !== O.pM4.PUSH_TO_TALK
                ? (0, r.jsx)(u.R94, {
                      type: u.R94.Types.DESCRIPTION,
                      className: o()(I.pttToolsMessage, S.marginBottom8),
                      children: v.intl.format(v.t.HVvn5e, {
                          onClick: () => A(E.n.KEYBINDS_PANEL, { section: O.oAB.KEYBINDS }),
                      }),
                  })
                : (0, r.jsx)(u.R94, {
                      type: u.R94.Types.DESCRIPTION,
                      className: o()(I.pttToolsMessage, I.pttToolsWarning, S.marginBottom8),
                      children: v.intl.format(v.t.zvMPOT, { onDownloadClick: () => (0, y.y)("Help Text PTT") }),
                  })),
        (0, r.jsxs)("div", {
            className: I.pttTools,
            children: [
                (0, r.jsxs)("div", {
                    className: I.pttToolsFlex,
                    children: [
                        (0, r.jsx)("div", {
                            className: I.column,
                            children: (0, r.jsx)(u.xJW, {
                                title: v.intl.string(v.t.YkDjVF),
                                children: (0, r.jsx)(f.Z, {
                                    defaultValue: i,
                                    onChange: (e) => d.Z.setMode(n, { shortcut: e }),
                                }),
                            }),
                        }),
                        (0, r.jsx)("div", {
                            className: I.column,
                            children: (0, r.jsxs)(u.xJW, {
                                children: [
                                    (0, r.jsx)(u.vwX, {
                                        id: R,
                                        className: S.marginBottom8,
                                        children: v.intl.string(v.t.y0ShVl),
                                    }),
                                    (0, r.jsx)(u.iRW, {
                                        initialValue: a,
                                        onValueChange: (e) => d.Z.setMode(n, { delay: e }),
                                        onValueRender: P,
                                        maxValue: O.qhL,
                                        "aria-labelledby": R,
                                    }),
                                ],
                            }),
                        }),
                    ],
                }),
                _ &&
                    (0, r.jsxs)("div", {
                        className: S.marginTop8,
                        children: [
                            (0, r.jsx)(p.FG, {
                                children: (e) =>
                                    (0, r.jsxs)("div", {
                                        className: o()(T.horizontal, S.marginBottom4),
                                        children: [
                                            (0, r.jsx)(u.vwX, {
                                                tag: u.RB0.H3,
                                                className: S.marginReset,
                                                children: (0, r.jsx)("label", {
                                                    htmlFor: e,
                                                    children: v.intl.string(v.t.EGn1eH),
                                                }),
                                            }),
                                            (0, r.jsx)(c.T2, {
                                                id: e,
                                                checked: null != l && l,
                                                onChange: (e) => d.Z.setMode(n, { pttLatchingEnabled: e }),
                                            }),
                                        ],
                                    }),
                            }),
                            (0, r.jsx)(u.R94, {
                                type: u.R94.Types.DESCRIPTION,
                                className: S.marginBottom8,
                                children: v.intl.string(v.t.iT257u),
                            }),
                        ],
                    }),
                t,
            ],
        })
    );
}
function D() {
    let { analyticsLocations: e } = (0, _.ZP)(),
        t = (0, s.e7)([h.Z], () => h.Z.getMode()),
        a = [
            {
                value: O.pM4.VOICE_ACTIVITY,
                name: v.intl.string(v.t.cHCEOD),
            },
            {
                value: O.pM4.PUSH_TO_TALK,
                name: N ? v.intl.string(v.t["1AINrK"]) : v.intl.string(v.t.Q8gkVF),
            },
        ],
        o = i.useCallback(
            (t) => {
                let { value: i } = t;
                i === O.pM4.PUSH_TO_TALK &&
                    N &&
                    (0, u.ZDy)(async () => {
                        let { default: e } = await Promise.resolve().then(n.bind(n, 468026));
                        return (t) =>
                            (0, r.jsx)(
                                e,
                                C(
                                    {
                                        title: v.intl.string(v.t.Kdt0GR),
                                        confirmText: v.intl.string(v.t["1WjMbG"]),
                                        cancelText: v.intl.string(v.t.BddRzc),
                                        onConfirm: () => (0, y.y)("PTT Limited Modal"),
                                        body: v.intl.string(v.t.NIozvr),
                                    },
                                    t,
                                ),
                            );
                    }),
                    d.Z.setMode(i, void 0, void 0, { analyticsLocations: e });
            },
            [e],
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(u.xJW, {
                title: v.intl.string(v.t["pS+K2N"]),
                className: S.marginBottom20,
                children: (0, r.jsx)(l.E, {
                    onChange: (e) => o({ value: e }),
                    options: a,
                    value: t,
                }),
            }),
            t === O.pM4.PUSH_TO_TALK && (0, r.jsx)(w, { inputMode: t }),
        ],
    });
}
