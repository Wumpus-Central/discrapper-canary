n.d(t, { Z: () => P });
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(755721),
    c = n(481060),
    u = n(846027),
    d = n(230711),
    f = n(825209),
    _ = n(906732),
    p = n(313201),
    h = n(131951),
    m = n(358085),
    g = n(383451),
    E = n(962100),
    b = n(981631),
    y = n(388032),
    O = n(184767),
    v = n(149715),
    I = n(197571);
function T(e, t, n) {
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
function S(e) {
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
                T(e, t, n[t]);
            });
    }
    return e;
}
let A = !m.isPlatformEmbedded,
    C = (0, p.hQ)();
function N(e) {
    return e >= 1000 ? ((e /= 1000), "".concat(e.toFixed(2), "s")) : "".concat(e.toFixed(0), "\xA0ms");
}
function R(e) {
    let t,
        { inputMode: n } = e,
        { shortcut: i, delay: a, pttLatchingEnabled: _ } = (0, s.cj)([h.Z], () => h.Z.getModeOptions()),
        { enableLatching: T } = (0, g.H)({ location: "PTTTools" });
    return (
        (t =
            m.isPlatformEmbedded || n !== b.pM4.PUSH_TO_TALK
                ? (0, r.jsx)(c.R94, {
                      type: c.R94.Types.DESCRIPTION,
                      className: o()(O.pttToolsMessage, I.marginBottom8),
                      children: y.intl.format(y.t.HVvn5e, { onClick: () => d.Z.setSection(b.oAB.KEYBINDS) }),
                  })
                : (0, r.jsx)(c.R94, {
                      type: c.R94.Types.DESCRIPTION,
                      className: o()(O.pttToolsMessage, O.pttToolsWarning, I.marginBottom8),
                      children: y.intl.format(y.t.zvMPOT, { onDownloadClick: () => (0, E.y)("Help Text PTT") }),
                  })),
        (0, r.jsxs)("div", {
            className: O.pttTools,
            children: [
                (0, r.jsxs)("div", {
                    className: O.pttToolsFlex,
                    children: [
                        (0, r.jsx)("div", {
                            className: O.column,
                            children: (0, r.jsx)(c.xJW, {
                                title: y.intl.string(y.t.YkDjVF),
                                children: (0, r.jsx)(f.Z, {
                                    defaultValue: i,
                                    onChange: (e) => u.Z.setMode(n, { shortcut: e }),
                                }),
                            }),
                        }),
                        (0, r.jsx)("div", {
                            className: O.column,
                            children: (0, r.jsxs)(c.xJW, {
                                children: [
                                    (0, r.jsx)(c.vwX, {
                                        id: C,
                                        className: I.marginBottom8,
                                        children: y.intl.string(y.t.y0ShVl),
                                    }),
                                    (0, r.jsx)(c.iRW, {
                                        initialValue: a,
                                        onValueChange: (e) => u.Z.setMode(n, { delay: e }),
                                        onValueRender: N,
                                        maxValue: b.qhL,
                                        "aria-labelledby": C,
                                    }),
                                ],
                            }),
                        }),
                    ],
                }),
                T &&
                    (0, r.jsxs)("div", {
                        className: I.marginTop8,
                        children: [
                            (0, r.jsx)(p.FG, {
                                children: (e) =>
                                    (0, r.jsxs)("div", {
                                        className: o()(v.horizontal, I.marginBottom4),
                                        children: [
                                            (0, r.jsx)(c.vwX, {
                                                tag: c.RB0.H3,
                                                className: I.marginReset,
                                                children: (0, r.jsx)("label", {
                                                    htmlFor: e,
                                                    children: y.intl.string(y.t.EGn1eH),
                                                }),
                                            }),
                                            (0, r.jsx)(l.T2, {
                                                id: e,
                                                checked: null != _ && _,
                                                onChange: (e) => u.Z.setMode(n, { pttLatchingEnabled: e }),
                                            }),
                                        ],
                                    }),
                            }),
                            (0, r.jsx)(c.R94, {
                                type: c.R94.Types.DESCRIPTION,
                                className: I.marginBottom8,
                                children: y.intl.string(y.t.iT257u),
                            }),
                        ],
                    }),
                t,
            ],
        })
    );
}
function P() {
    let { analyticsLocations: e } = (0, _.ZP)(),
        t = (0, s.e7)([h.Z], () => h.Z.getMode()),
        a = [
            {
                value: b.pM4.VOICE_ACTIVITY,
                name: y.intl.string(y.t.cHCEOD),
            },
            {
                value: b.pM4.PUSH_TO_TALK,
                name: A ? y.intl.string(y.t["1AINrK"]) : y.intl.string(y.t.Q8gkVF),
            },
        ],
        o = i.useCallback(
            (t) => {
                let { value: i } = t;
                i === b.pM4.PUSH_TO_TALK &&
                    A &&
                    (0, c.ZDy)(async () => {
                        let { default: e } = await Promise.resolve().then(n.bind(n, 468026));
                        return (t) =>
                            (0, r.jsx)(
                                e,
                                S(
                                    {
                                        title: y.intl.string(y.t.Kdt0GR),
                                        confirmText: y.intl.string(y.t["1WjMbG"]),
                                        cancelText: y.intl.string(y.t.BddRzc),
                                        onConfirm: () => (0, E.y)("PTT Limited Modal"),
                                        body: y.intl.string(y.t.NIozvr),
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
                title: y.intl.string(y.t["pS+K2N"]),
                className: I.marginBottom20,
                children: (0, r.jsx)(l.Gu, {
                    onChange: o,
                    options: a,
                    value: t,
                }),
            }),
            t === b.pM4.PUSH_TO_TALK && (0, r.jsx)(R, { inputMode: t }),
        ],
    });
}
