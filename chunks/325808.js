n.d(t, { Z: () => R });
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(481060),
    c = n(846027),
    u = n(230711),
    d = n(825209),
    f = n(906732),
    _ = n(313201),
    p = n(131951),
    h = n(358085),
    m = n(383451),
    g = n(962100),
    E = n(981631),
    b = n(388032),
    y = n(184767),
    O = n(149715),
    v = n(197571);
function I(e, t, n) {
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
function T(e) {
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
                I(e, t, n[t]);
            });
    }
    return e;
}
let S = !h.isPlatformEmbedded,
    A = (0, _.hQ)();
function C(e) {
    return e >= 1000 ? ((e /= 1000), "".concat(e.toFixed(2), "s")) : "".concat(e.toFixed(0), "\xA0ms");
}
function N(e) {
    let t,
        { inputMode: n } = e,
        { shortcut: i, delay: a, pttLatchingEnabled: f } = (0, s.cj)([p.Z], () => p.Z.getModeOptions()),
        { enableLatching: I } = (0, m.H)({ location: "PTTTools" });
    return (
        (t =
            h.isPlatformEmbedded || n !== E.pM4.PUSH_TO_TALK
                ? (0, r.jsx)(l.R94, {
                      type: l.R94.Types.DESCRIPTION,
                      className: o()(y.pttToolsMessage, v.marginBottom8),
                      children: b.intl.format(b.t.HVvn5e, { onClick: () => u.Z.setSection(E.oAB.KEYBINDS) }),
                  })
                : (0, r.jsx)(l.R94, {
                      type: l.R94.Types.DESCRIPTION,
                      className: o()(y.pttToolsMessage, y.pttToolsWarning, v.marginBottom8),
                      children: b.intl.format(b.t.zvMPOT, { onDownloadClick: () => (0, g.y)("Help Text PTT") }),
                  })),
        (0, r.jsxs)("div", {
            className: y.pttTools,
            children: [
                (0, r.jsxs)("div", {
                    className: y.pttToolsFlex,
                    children: [
                        (0, r.jsx)("div", {
                            className: y.column,
                            children: (0, r.jsx)(l.xJW, {
                                title: b.intl.string(b.t.YkDjVF),
                                children: (0, r.jsx)(d.Z, {
                                    defaultValue: i,
                                    onChange: (e) => c.Z.setMode(n, { shortcut: e }),
                                }),
                            }),
                        }),
                        (0, r.jsx)("div", {
                            className: y.column,
                            children: (0, r.jsxs)(l.xJW, {
                                children: [
                                    (0, r.jsx)(l.vwX, {
                                        id: A,
                                        tag: l.RB0.H5,
                                        className: v.marginBottom8,
                                        children: b.intl.string(b.t.y0ShVl),
                                    }),
                                    (0, r.jsx)(l.iRW, {
                                        initialValue: a,
                                        onValueChange: (e) => c.Z.setMode(n, { delay: e }),
                                        onValueRender: C,
                                        maxValue: E.qhL,
                                        "aria-labelledby": A,
                                    }),
                                ],
                            }),
                        }),
                    ],
                }),
                I &&
                    (0, r.jsxs)(l.xJW, {
                        className: v.marginTop8,
                        children: [
                            (0, r.jsx)(_.FG, {
                                children: (e) =>
                                    (0, r.jsxs)("div", {
                                        className: o()(O.horizontal, v.marginBottom4),
                                        children: [
                                            (0, r.jsx)(l.vwX, {
                                                tag: l.RB0.H3,
                                                className: v.marginReset,
                                                children: (0, r.jsx)("label", {
                                                    htmlFor: e,
                                                    children: b.intl.string(b.t.EGn1eH),
                                                }),
                                            }),
                                            (0, r.jsx)(l.rsf, {
                                                id: e,
                                                checked: null != f && f,
                                                onChange: (e) => c.Z.setMode(n, { pttLatchingEnabled: e }),
                                            }),
                                        ],
                                    }),
                            }),
                            (0, r.jsx)(l.R94, {
                                type: l.R94.Types.DESCRIPTION,
                                className: v.marginBottom8,
                                children: b.intl.string(b.t.iT257u),
                            }),
                        ],
                    }),
                t,
            ],
        })
    );
}
function R() {
    let { analyticsLocations: e } = (0, f.ZP)(),
        t = (0, s.e7)([p.Z], () => p.Z.getMode()),
        a = [
            {
                value: E.pM4.VOICE_ACTIVITY,
                name: b.intl.string(b.t.cHCEOD),
            },
            {
                value: E.pM4.PUSH_TO_TALK,
                name: S ? b.intl.string(b.t["1AINrK"]) : b.intl.string(b.t.Q8gkVF),
            },
        ],
        o = i.useCallback(
            (t) => {
                let { value: i } = t;
                i === E.pM4.PUSH_TO_TALK &&
                    S &&
                    (0, l.ZDy)(async () => {
                        let { default: e } = await Promise.resolve().then(n.bind(n, 468026));
                        return (t) =>
                            (0, r.jsx)(
                                e,
                                T(
                                    {
                                        title: b.intl.string(b.t.Kdt0GR),
                                        confirmText: b.intl.string(b.t["1WjMbG"]),
                                        cancelText: b.intl.string(b.t.BddRzc),
                                        onConfirm: () => (0, g.y)("PTT Limited Modal"),
                                        body: b.intl.string(b.t.NIozvr),
                                    },
                                    t,
                                ),
                            );
                    }),
                    c.Z.setMode(i, void 0, void 0, { analyticsLocations: e });
            },
            [e],
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(l.xJW, {
                title: b.intl.string(b.t["pS+K2N"]),
                className: v.marginBottom20,
                children: (0, r.jsx)(l.FXm, {
                    onChange: o,
                    options: a,
                    value: t,
                }),
            }),
            t === E.pM4.PUSH_TO_TALK && (0, r.jsx)(N, { inputMode: t }),
        ],
    });
}
