n.d(t, { A: () => I });
var l = n(627968),
    a = n(64700),
    r = n(503698),
    s = n.n(r),
    i = n(284009),
    o = n.n(i),
    d = n(843282),
    c = n(565645),
    u = n(155718),
    m = n(594808),
    p = n(207963),
    A = n(489414),
    h = n(814890),
    C = n(40816);
function E(e) {
    let { emoji: t, label: n, description: a, isDisabled: r, isOffset: i } = e,
        o = s()(C._A, { [C.r9]: r, [C.cY]: null == t && i });
    return (0, l.jsxs)("div", {
        className: C.uK,
        children: [
            null != t
                ? (0, l.jsx)(c.A, { className: C.Zg, emojiId: t.id, emojiName: t.name, animated: t.animated })
                : null,
            (0, l.jsxs)("div", {
                className: o,
                children: [
                    (0, l.jsx)("strong", { className: C.Pf, children: n }),
                    null != a ? (0, l.jsx)("span", { className: C.h_, children: a }) : null,
                ],
            }),
        ],
    });
}
function x(e) {
    let { emoji: t, label: n } = e;
    return (0, l.jsx)("div", {
        className: C.uK,
        children: (0, l.jsxs)("div", {
            className: s()(C.Uq, C.u9),
            children: [
                null != t
                    ? (0, l.jsx)(c.A, {
                          className: C.Zg,
                          src: t.src,
                          emojiId: t.id,
                          emojiName: t.name,
                          animated: t.animated,
                      })
                    : null,
                (0, l.jsx)("span", { className: C.oX, children: n }),
            ],
        }),
    });
}
function N(e) {
    let { options: t } = e;
    return (0, l.jsx)("div", {
        className: C.uK,
        children: (0, l.jsx)("div", {
            className: C.Uq,
            children: t.map((e, t) =>
                (0, l.jsxs)(
                    "div",
                    {
                        className: C.mK,
                        children: [
                            null != e.emoji
                                ? (0, l.jsx)(c.A, {
                                      className: C.eh,
                                      src: e.emoji.src,
                                      emojiId: e.emoji.id,
                                      emojiName: e.emoji.name,
                                      animated: e.emoji.animated,
                                  })
                                : null,
                            (0, l.jsx)("span", { className: C.Tc, children: e.label }, e.value),
                        ],
                    },
                    t,
                ),
            ),
        }),
    });
}
function I(e) {
    let { type: t, options: n, id: r, maxValues: i, disabled: c } = e,
        I = (0, h.c7)(e),
        _ = a.useMemo(() => n.filter((e) => e.default).map((e) => e.value), [n]),
        f = (0, p.jc)();
    o()(null != f, "StringSelectActionComponent must be rendered inside a ComponentStateContext");
    let {
            state: g,
            executeStateUpdate: T,
            visualState: v,
            isDisabled: j,
            error: S,
        } = f.useComponentState(e, _.length > 0 ? { type: t, values: _ } : void 0),
        O = null != f.modal,
        R = i > 1,
        y = v === A.BB.LOADING,
        [b, P] = a.useState(!1),
        [L, D] = a.useState(() => new Set(n.filter((e) => e.default).map((e) => e.value))),
        [U, k] = a.useState(L),
        M = a.useMemo(() => n.some((e) => null != e.emoji), [n]);
    a.useEffect(() => {
        if (g?.type === u.I5.STRING_SELECT) {
            let e = new Set(g.values);
            D(e), k(e);
        } else {
            let e = new Set(_);
            D(e), k(e);
        }
    }, [r, _, g]);
    let w = a.useCallback(() => {
        U !== L && T({ type: u.I5.STRING_SELECT, values: Array.from(L) }) && k(L);
    }, [L, U, k, T]);
    a.useEffect(() => {
        b || (L.size === U.size && Array.from(U).every((e) => L.has(e))) || w();
    }, [b, L, U, w]);
    let H = (0, h.Lr)(e, O ? "modal" : "message"),
        K = d.lS;
    R ? (K = d.M8) : H && (K = d.$l);
    let F = (0, d.Ev)({ value: L, onChange: (e) => D(e), onSelectInteraction: K });
    return (0, l.jsxs)(a.Fragment, {
        children: [
            (0, l.jsx)("div", {
                className: C.kL,
                children: (0, l.jsx)(d.Pw, {
                    isProcessing: y,
                    isDisabled: c || v === A.BB.DISABLED || j,
                    className: s()(C.Lt, { [C.zE]: O }),
                    options: n.map((e) => ({ ...e, disabled: R && !L.has(e.value) && L.size === i })),
                    placeholder: I,
                    onClose: () => P(!1),
                    onOpen: () => P(!0),
                    maxVisibleItems: 5,
                    closeOnSelect: !R,
                    optionClassName: C.MT,
                    renderOptionLabel: (e) =>
                        (0, l.jsx)(E, { ...e, isDisabled: R && !L.has(e.value) && L.size === i, isOffset: M }),
                    renderOptionValue: (e) => (R ? (0, l.jsx)(N, { options: e }) : (0, l.jsx)(x, { ...e[0] })),
                    ...F,
                    "data-migration-pending": !0,
                }),
            }),
            null == S || O ? null : (0, l.jsx)(m.S0, { ...(0, m.PS)(S), className: C.z3 }),
        ],
    });
}
