n.d(t, { A: () => I });
var l = n(627968),
    a = n(64700),
    r = n(503698),
    s = n.n(r),
    i = n(284009),
    o = n.n(i),
    c = n(843282),
    d = n(565645),
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
                ? (0, l.jsx)(d.A, { className: C.Zg, emojiId: t.id, emojiName: t.name, animated: t.animated })
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
                    ? (0, l.jsx)(d.A, {
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
                                ? (0, l.jsx)(d.A, {
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
    let { type: t, options: n, id: r, maxValues: i, minValues: d, disabled: I } = e,
        _ = (0, h.c7)(e),
        f = a.useMemo(() => n.filter((e) => e.default).map((e) => e.value), [n]),
        g = (0, p.jc)();
    o()(null != g, "StringSelectActionComponent must be rendered inside a ComponentStateContext");
    let {
            state: T,
            executeStateUpdate: v,
            visualState: j,
            isDisabled: S,
            error: O,
        } = g.useComponentState(e, f.length > 0 ? { type: t, values: f } : void 0),
        R = null != g.modal,
        y = i > 1,
        b = j === A.BB.LOADING,
        [P, L] = a.useState(!1),
        [D, U] = a.useState(() => new Set(n.filter((e) => e.default).map((e) => e.value))),
        [k, M] = a.useState(D),
        w = a.useMemo(() => n.some((e) => null != e.emoji), [n]);
    a.useEffect(() => {
        if (T?.type === u.I5.STRING_SELECT) {
            let e = new Set(T.values);
            U(e), M(e);
        } else {
            let e = new Set(f);
            U(e), M(e);
        }
    }, [r, f, T]);
    let H = a.useCallback(() => {
        k !== D && v({ type: u.I5.STRING_SELECT, values: Array.from(D) }) && M(D);
    }, [D, k, M, v]);
    a.useEffect(() => {
        P || (D.size === k.size && Array.from(k).every((e) => D.has(e))) || H();
    }, [P, D, k, H]);
    let K = c.lS;
    y ? (K = c.M8) : 0 === d && (K = c.$l);
    let F = (0, c.Ev)({ value: D, onChange: (e) => U(e), onSelectInteraction: K });
    return (0, l.jsxs)(a.Fragment, {
        children: [
            (0, l.jsx)("div", {
                className: C.kL,
                children: (0, l.jsx)(c.Pw, {
                    isProcessing: b,
                    isDisabled: I || j === A.BB.DISABLED || S,
                    className: s()(C.Lt, { [C.zE]: R }),
                    options: n.map((e) => ({ ...e, disabled: y && !D.has(e.value) && D.size === i })),
                    placeholder: _,
                    onClose: () => L(!1),
                    onOpen: () => L(!0),
                    maxVisibleItems: 5,
                    closeOnSelect: !y,
                    optionClassName: C.MT,
                    renderOptionLabel: (e) =>
                        (0, l.jsx)(E, { ...e, isDisabled: y && !D.has(e.value) && D.size === i, isOffset: w }),
                    renderOptionValue: (e) => (y ? (0, l.jsx)(N, { options: e }) : (0, l.jsx)(x, { ...e[0] })),
                    ...F,
                    "data-migration-pending": !0,
                }),
            }),
            null == O || R ? null : (0, l.jsx)(m.S0, { ...(0, m.PS)(O), className: C.z3 }),
        ],
    });
}
