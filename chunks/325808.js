n.d(t, { Z: () => w });
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(755721),
    c = n(481060),
    u = n(846027),
    d = n(825209),
    f = n(906732),
    _ = n(313201),
    p = n(131951),
    h = n(358085),
    m = n(383451),
    g = n(313789),
    E = n(947889),
    b = n(962100),
    y = n(981631),
    O = n(388032),
    v = n(184767),
    I = n(149715),
    T = n(197571);
function S(e, t, n) {
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
function A(e) {
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
                S(e, t, n[t]);
            });
    }
    return e;
}
let C = !h.isPlatformEmbedded,
    N = (0, _.hQ)();
function R(e) {
    return e >= 1000 ? ((e /= 1000), "".concat(e.toFixed(2), "s")) : "".concat(e.toFixed(0), "\xA0ms");
}
function P(e) {
    let t,
        { inputMode: n } = e,
        { shortcut: i, delay: a, pttLatchingEnabled: f } = (0, s.cj)([p.Z], () => p.Z.getModeOptions()),
        { enableLatching: S } = (0, m.H)({ location: "PTTTools" }),
        A = (0, E.Z)();
    return (
        (t =
            h.isPlatformEmbedded || n !== y.pM4.PUSH_TO_TALK
                ? (0, r.jsx)(c.R94, {
                      type: c.R94.Types.DESCRIPTION,
                      className: o()(v.pttToolsMessage, T.marginBottom8),
                      children: O.intl.format(O.t.HVvn5e, {
                          onClick: () => A(g.n.KEYBINDS_PANEL, { section: y.oAB.KEYBINDS }),
                      }),
                  })
                : (0, r.jsx)(c.R94, {
                      type: c.R94.Types.DESCRIPTION,
                      className: o()(v.pttToolsMessage, v.pttToolsWarning, T.marginBottom8),
                      children: O.intl.format(O.t.zvMPOT, { onDownloadClick: () => (0, b.y)("Help Text PTT") }),
                  })),
        (0, r.jsxs)("div", {
            className: v.pttTools,
            children: [
                (0, r.jsxs)("div", {
                    className: v.pttToolsFlex,
                    children: [
                        (0, r.jsx)("div", {
                            className: v.column,
                            children: (0, r.jsx)(c.xJW, {
                                title: O.intl.string(O.t.YkDjVF),
                                children: (0, r.jsx)(d.Z, {
                                    defaultValue: i,
                                    onChange: (e) => u.Z.setMode(n, { shortcut: e }),
                                }),
                            }),
                        }),
                        (0, r.jsx)("div", {
                            className: v.column,
                            children: (0, r.jsxs)(c.xJW, {
                                children: [
                                    (0, r.jsx)(c.vwX, {
                                        id: N,
                                        className: T.marginBottom8,
                                        children: O.intl.string(O.t.y0ShVl),
                                    }),
                                    (0, r.jsx)(c.iRW, {
                                        initialValue: a,
                                        onValueChange: (e) => u.Z.setMode(n, { delay: e }),
                                        onValueRender: R,
                                        maxValue: y.qhL,
                                        "aria-labelledby": N,
                                    }),
                                ],
                            }),
                        }),
                    ],
                }),
                S &&
                    (0, r.jsxs)("div", {
                        className: T.marginTop8,
                        children: [
                            (0, r.jsx)(_.FG, {
                                children: (e) =>
                                    (0, r.jsxs)("div", {
                                        className: o()(I.horizontal, T.marginBottom4),
                                        children: [
                                            (0, r.jsx)(c.vwX, {
                                                tag: c.RB0.H3,
                                                className: T.marginReset,
                                                children: (0, r.jsx)("label", {
                                                    htmlFor: e,
                                                    children: O.intl.string(O.t.EGn1eH),
                                                }),
                                            }),
                                            (0, r.jsx)(l.T2, {
                                                id: e,
                                                checked: null != f && f,
                                                onChange: (e) => u.Z.setMode(n, { pttLatchingEnabled: e }),
                                            }),
                                        ],
                                    }),
                            }),
                            (0, r.jsx)(c.R94, {
                                type: c.R94.Types.DESCRIPTION,
                                className: T.marginBottom8,
                                children: O.intl.string(O.t.iT257u),
                            }),
                        ],
                    }),
                t,
            ],
        })
    );
}
function w() {
    let { analyticsLocations: e } = (0, f.ZP)(),
        t = (0, s.e7)([p.Z], () => p.Z.getMode()),
        a = [
            {
                value: y.pM4.VOICE_ACTIVITY,
                name: O.intl.string(O.t.cHCEOD),
            },
            {
                value: y.pM4.PUSH_TO_TALK,
                name: C ? O.intl.string(O.t["1AINrK"]) : O.intl.string(O.t.Q8gkVF),
            },
        ],
        o = i.useCallback(
            (t) => {
                let { value: i } = t;
                i === y.pM4.PUSH_TO_TALK &&
                    C &&
                    (0, c.ZDy)(async () => {
                        let { default: e } = await Promise.resolve().then(n.bind(n, 468026));
                        return (t) =>
                            (0, r.jsx)(
                                e,
                                A(
                                    {
                                        title: O.intl.string(O.t.Kdt0GR),
                                        confirmText: O.intl.string(O.t["1WjMbG"]),
                                        cancelText: O.intl.string(O.t.BddRzc),
                                        onConfirm: () => (0, b.y)("PTT Limited Modal"),
                                        body: O.intl.string(O.t.NIozvr),
                                    },
                                    t,
                                ),
                            );
                    }),
                    u.Z.setMode(i, void 0, void 0, { analyticsLocations: e });
            },
            [e],
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(c.xJW, {
                title: O.intl.string(O.t["pS+K2N"]),
                className: T.marginBottom20,
                children: (0, r.jsx)(l.Gu, {
                    onChange: o,
                    options: a,
                    value: t,
                }),
            }),
            t === y.pM4.PUSH_TO_TALK && (0, r.jsx)(P, { inputMode: t }),
        ],
    });
}
