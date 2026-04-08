"use strict";
n.d(t, { A: () => S }), n(321073);
var i = n(627968),
    s = n(64700),
    l = n(735438),
    r = n(990078),
    a = n(397927),
    o = n(442433),
    d = n(525113),
    c = n(611371),
    u = n(627794),
    m = n(928348),
    g = n(53594),
    x = n(268749),
    h = n(878701),
    _ = n(542210),
    p = n(780679),
    A = n(411335),
    f = n(985018),
    j = n(534036);
function N(e) {
    let { rule: t, triggerType: n } = e,
        l = s.useMemo(
            () =>
                null == t
                    ? (0, g.J6)(n).map((e) => (0, i.jsx)(_.A, { actionType: e, triggerType: n }, e))
                    : (0, g.J6)(n).reduce((e, s) => {
                          let l = t.actions.find((e) => {
                              let { type: t } = e;
                              return s === t;
                          });
                          return (
                              null == l ||
                                  e.push(
                                      (0, i.jsx)(
                                          _.A,
                                          { actionType: s, action: l, triggerType: t?.triggerType ?? n },
                                          s,
                                      ),
                                  ),
                              e
                          );
                      }, []),
            [t, n],
        );
    return 0 === l.length ? null : (0, i.jsx)("div", { className: j.Wy, children: l });
}
let E = (e) => {
        e.stopPropagation(), e.preventDefault();
    },
    C = (e) => {
        let { className: t, children: n, ...s } = e;
        return (0, i.jsx)(a.DUT, { className: t, onClick: E, onMouseDown: E, onMouseUp: E, ...s, children: n });
    };
function T(e) {
    let { rule: t, onChangeRule: n, onContextMenu: s } = e,
        l = () => n({ ...t, enabled: !t.enabled });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("div", { className: j.XG, children: (0, i.jsx)(p.A, { rule: t, onChangeRule: n }) }),
            (0, i.jsxs)(C, {
                className: j.Ik,
                children: [
                    (0, i.jsx)(a.dOG, { onChange: l, checked: t?.enabled ?? !1 }),
                    (0, i.jsx)(r.m, {
                        text: f.intl.string(f.t["UKOtz+"]),
                        position: "top",
                        "aria-label": f.intl.string(f.t.PdRCRg),
                        children: (0, i.jsx)(a.DUT, {
                            onClick: (e) => {
                                E(e), s(e);
                            },
                            className: j.p5,
                            children: (0, i.jsx)(a.FHP, { size: "md", color: "currentColor", className: j.ro }),
                        }),
                    }),
                ],
            }),
        ],
    });
}
function I(e) {
    return (0, g.ub)(e, g.H2.ALPHA)
        ? (0, i.jsx)(d.A, { className: j.n0 })
        : (0, g.ub)(e, g.H2.BETA)
          ? (0, i.jsx)(c.A, { className: j.n0 })
          : null;
}
function b(e) {
    let { rule: t, isDefaultRule: n, onContextMenu: o } = e,
        d = (0, h.l)(t.triggerType, t),
        { isLoading: c, saveRule: g } = (0, x.S)(),
        { updateRule: _ } = (0, m.wP)(t.guildId),
        [p, A] = s.useState(t.enabled),
        T = (0, l.throttle)(async () => {
            if (!c) {
                let e = { ...t, enabled: !p };
                A(!p);
                let n = await g(e, []);
                null != n && (_(n), A(n.enabled));
            }
        }, 300);
    if (null == d) return null;
    let { headerText: b, headerSubtext: v, descriptionText: S, icon: y } = d,
        R = !(0, u.wC)(t);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("div", {
                className: j.Ji,
                children: (0, i.jsx)(y, { size: "md", color: "currentColor", className: j.S3 }),
            }),
            (0, i.jsxs)("div", {
                className: j.XG,
                children: [
                    (0, i.jsxs)(a.Heading, {
                        variant: "text-md/semibold",
                        color: "text-strong",
                        className: j.aY,
                        children: [
                            (0, i.jsxs)("div", { className: j.bR, children: [b, I(t.triggerType)] }),
                            (0, i.jsx)(a.Text, { className: j.bL, variant: "text-sm/normal", children: v }),
                        ],
                    }),
                    R && (0, i.jsx)(a.Text, { className: j.mT, variant: "text-sm/normal", children: S }),
                    (0, i.jsx)(N, { rule: t, triggerType: t.triggerType }),
                ],
            }),
            (0, i.jsxs)(C, {
                className: j.Ik,
                children: [
                    (0, i.jsx)(a.dOG, { onChange: T, checked: p ?? !1 }),
                    !n &&
                        (0, i.jsx)(r.m, {
                            text: f.intl.string(f.t["UKOtz+"]),
                            position: "top",
                            "aria-label": f.intl.string(f.t.PdRCRg),
                            children: (0, i.jsx)(a.DUT, {
                                onClick: (e) => {
                                    E(e), o(e);
                                },
                                className: j.p5,
                                children: (0, i.jsx)(a.FHP, { size: "md", color: "currentColor", className: j.ro }),
                            }),
                        }),
                ],
            }),
        ],
    });
}
function v(e) {
    let { triggerType: t, onSetupRule: n } = e,
        l = s.useMemo(() => (0, h.l)(t), [t]);
    if (null == l) return null;
    let { headerText: r, descriptionText: o, icon: d } = l;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("div", {
                className: j.Ji,
                children: (0, i.jsx)(d, { color: "currentColor", size: "md", className: j.S3 }),
            }),
            (0, i.jsxs)("div", {
                className: j.XG,
                children: [
                    (0, i.jsx)(a.Heading, {
                        className: j.bR,
                        variant: "text-md/semibold",
                        color: "text-strong",
                        children: (0, i.jsxs)("div", { className: j.bR, children: [r, I(t)] }),
                    }),
                    (0, i.jsx)(a.Text, { className: j.mT, variant: "text-sm/normal", children: o }),
                    (0, i.jsx)(N, { triggerType: t }),
                ],
            }),
            (0, i.jsx)(C, {
                className: j.Ik,
                children: (0, i.jsx)(a.Button, {
                    variant: "primary",
                    size: "sm",
                    text: t === A.uh.KEYWORD ? f.intl.string(f.t.CumH4u) : f.intl.string(f.t.oRs6mG),
                    onClick: n,
                }),
            }),
        ],
    });
}
function S(e) {
    let {
            rule: t,
            triggerType: s,
            isEditMode: l,
            isDefaultRule: r,
            forceSetup: d,
            onSetupRule: c,
            onChangeRule: u,
        } = e,
        m = (e) => {
            null != t &&
                (e.preventDefault(),
                e.stopPropagation(),
                (0, o.L3)(e, async () => {
                    let { default: e } = await n.e("52106").then(n.bind(n, 345585));
                    return (n) => (0, i.jsx)(e, { rule: t, ...n });
                }));
        },
        g = (0, i.jsx)(v, { triggerType: s, onSetupRule: c });
    return (
        null == t ||
            d ||
            (g = l
                ? (0, i.jsx)(T, { rule: t, onChangeRule: u, onContextMenu: m })
                : (0, i.jsx)(b, { rule: t, isDefaultRule: r, onContextMenu: m })),
        (0, i.jsx)(a.DUT, { className: j.rs, onContextMenu: m, children: g })
    );
}
