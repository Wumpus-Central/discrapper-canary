n.d(t, { A: () => O }), n(321073);
var i = n(627968),
    l = n(64700),
    s = n(735438),
    r = n(990078),
    a = n(939249),
    o = n(243721),
    d = n(530005),
    c = n(534514),
    u = n(834730),
    m = n(821609),
    g = n(442433),
    h = n(525113),
    x = n(611371),
    _ = n(627794),
    p = n(928348),
    A = n(53594),
    E = n(268749),
    f = n(878701),
    j = n(542210),
    N = n(780679),
    I = n(411335),
    C = n(985018),
    b = n(691972);
function v(e) {
    let { rule: t, triggerType: n } = e,
        s = l.useMemo(
            () =>
                null == t
                    ? (0, A.J6)(n).map((e) => (0, i.jsx)(j.A, { actionType: e, triggerType: n }, e))
                    : (0, A.J6)(n).reduce((e, l) => {
                          let s = t.actions.find((e) => {
                              let { type: t } = e;
                              return l === t;
                          });
                          return (
                              null == s ||
                                  e.push(
                                      (0, i.jsx)(
                                          j.A,
                                          { actionType: l, action: s, triggerType: t?.triggerType ?? n },
                                          l,
                                      ),
                                  ),
                              e
                          );
                      }, []),
            [t, n],
        );
    return 0 === s.length ? null : (0, i.jsx)("div", { className: b.Wy, children: s });
}
let S = (e) => {
        e.stopPropagation(), e.preventDefault();
    },
    T = (e) => {
        let { className: t, children: n, ...l } = e;
        return (0, i.jsx)(a.D, { className: t, onClick: S, onMouseDown: S, onMouseUp: S, ...l, children: n });
    };
function y(e) {
    let { rule: t, onChangeRule: n, onContextMenu: l } = e,
        s = () => n({ ...t, enabled: !t.enabled });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("div", { className: b.XG, children: (0, i.jsx)(N.A, { rule: t, onChangeRule: n }) }),
            (0, i.jsxs)(T, {
                className: b.Ik,
                children: [
                    (0, i.jsx)(o.d, { onChange: s, checked: t?.enabled ?? !1 }),
                    (0, i.jsx)(r.m, {
                        text: C.intl.string(C.t["UKOtz+"]),
                        position: "top",
                        "aria-label": C.intl.string(C.t.PdRCRg),
                        children: (0, i.jsx)(a.D, {
                            onClick: (e) => {
                                S(e), l(e);
                            },
                            className: b.p5,
                            children: (0, i.jsx)(d.F, { size: "md", color: "currentColor", className: b.ro }),
                        }),
                    }),
                ],
            }),
        ],
    });
}
function R(e) {
    return (0, A.ub)(e, A.H2.ALPHA)
        ? (0, i.jsx)(h.A, { className: b.n0 })
        : (0, A.ub)(e, A.H2.BETA)
          ? (0, i.jsx)(x.A, { className: b.n0 })
          : null;
}
function L(e) {
    let { rule: t, isDefaultRule: n, onContextMenu: m } = e,
        g = (0, f.l)(t.triggerType, t),
        { isLoading: h, saveRule: x } = (0, E.S)(),
        { updateRule: A } = (0, p.wP)(t.guildId),
        [j, N] = l.useState(t.enabled),
        I = (0, s.throttle)(async () => {
            if (!h) {
                let e = { ...t, enabled: !j };
                N(!j);
                let n = await x(e, []);
                null != n && (A(n), N(n.enabled));
            }
        }, 300);
    if (null == g) return null;
    let { headerText: y, headerSubtext: L, descriptionText: D, icon: O } = g,
        G = !(0, _.wC)(t);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("div", {
                className: b.Ji,
                children: (0, i.jsx)(O, { size: "md", color: "currentColor", className: b.S3 }),
            }),
            (0, i.jsxs)("div", {
                className: b.XG,
                children: [
                    (0, i.jsxs)(c.D, {
                        variant: "text-md/semibold",
                        color: "text-strong",
                        className: b.aY,
                        children: [
                            (0, i.jsxs)("div", { className: b.bR, children: [y, R(t.triggerType)] }),
                            (0, i.jsx)(u.E, { className: b.bL, variant: "text-sm/normal", children: L }),
                        ],
                    }),
                    G && (0, i.jsx)(u.E, { className: b.mT, variant: "text-sm/normal", children: D }),
                    (0, i.jsx)(v, { rule: t, triggerType: t.triggerType }),
                ],
            }),
            (0, i.jsxs)(T, {
                className: b.Ik,
                children: [
                    (0, i.jsx)(o.d, { onChange: I, checked: j ?? !1 }),
                    !n &&
                        (0, i.jsx)(r.m, {
                            text: C.intl.string(C.t["UKOtz+"]),
                            position: "top",
                            "aria-label": C.intl.string(C.t.PdRCRg),
                            children: (0, i.jsx)(a.D, {
                                onClick: (e) => {
                                    S(e), m(e);
                                },
                                className: b.p5,
                                children: (0, i.jsx)(d.F, { size: "md", color: "currentColor", className: b.ro }),
                            }),
                        }),
                ],
            }),
        ],
    });
}
function D(e) {
    let { triggerType: t, onSetupRule: n } = e,
        s = l.useMemo(() => (0, f.l)(t), [t]);
    if (null == s) return null;
    let { headerText: r, descriptionText: a, icon: o } = s;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("div", {
                className: b.Ji,
                children: (0, i.jsx)(o, { color: "currentColor", size: "md", className: b.S3 }),
            }),
            (0, i.jsxs)("div", {
                className: b.XG,
                children: [
                    (0, i.jsx)(c.D, {
                        className: b.bR,
                        variant: "text-md/semibold",
                        color: "text-strong",
                        children: (0, i.jsxs)("div", { className: b.bR, children: [r, R(t)] }),
                    }),
                    (0, i.jsx)(u.E, { className: b.mT, variant: "text-sm/normal", children: a }),
                    (0, i.jsx)(v, { triggerType: t }),
                ],
            }),
            (0, i.jsx)(T, {
                className: b.Ik,
                children: (0, i.jsx)(m.$, {
                    variant: "primary",
                    size: "sm",
                    text: t === I.uh.KEYWORD ? C.intl.string(C.t.CumH4u) : C.intl.string(C.t.oRs6mG),
                    onClick: n,
                }),
            }),
        ],
    });
}
function O(e) {
    let {
            rule: t,
            triggerType: l,
            isEditMode: s,
            isDefaultRule: r,
            forceSetup: o,
            onSetupRule: d,
            onChangeRule: c,
        } = e,
        u = (e) => {
            null != t &&
                (e.preventDefault(),
                e.stopPropagation(),
                (0, g.L3)(e, async () => {
                    let { default: e } = await n.e("52106").then(n.bind(n, 345585));
                    return (n) => (0, i.jsx)(e, { rule: t, ...n });
                }));
        },
        m = (0, i.jsx)(D, { triggerType: l, onSetupRule: d });
    return (
        null == t ||
            o ||
            (m = s
                ? (0, i.jsx)(y, { rule: t, onChangeRule: c, onContextMenu: u })
                : (0, i.jsx)(L, { rule: t, isDefaultRule: r, onContextMenu: u })),
        (0, i.jsx)(a.D, { className: b.rs, onContextMenu: u, children: m })
    );
}
