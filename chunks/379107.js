n.d(t, { A: () => E });
var a = n(627968),
    l = n(64700),
    r = n(503698),
    i = n.n(r),
    s = n(284009),
    o = n.n(s),
    d = n(843282),
    c = n(565645),
    u = n(155718),
    m = n(594808),
    _ = n(207963),
    p = n(489414),
    h = n(814890),
    A = n(252592);
function C(e) {
    let { emoji: t, label: n, description: l, isDisabled: r, isOffset: s } = e,
        o = i()(A._A, { [A.r9]: r, [A.cY]: null == t && s });
    return (0, a.jsxs)("div", {
        className: A.uK,
        children: [
            null != t
                ? (0, a.jsx)(c.A, { className: A.Zg, emojiId: t.id, emojiName: t.name, animated: t.animated })
                : null,
            (0, a.jsxs)("div", {
                className: o,
                children: [
                    (0, a.jsx)("strong", { className: A.Pf, children: n }),
                    null != l ? (0, a.jsx)("span", { className: A.h_, children: l }) : null,
                ],
            }),
        ],
    });
}
function x(e) {
    let { emoji: t, label: n } = e;
    return (0, a.jsx)("div", {
        className: A.uK,
        children: (0, a.jsxs)("div", {
            className: i()(A.Uq, A.u9),
            children: [
                null != t
                    ? (0, a.jsx)(c.A, {
                          className: A.Zg,
                          src: t.src,
                          emojiId: t.id,
                          emojiName: t.name,
                          animated: t.animated,
                      })
                    : null,
                (0, a.jsx)("span", { className: A.oX, children: n }),
            ],
        }),
    });
}
function f(e) {
    let { options: t } = e;
    return (0, a.jsx)("div", {
        className: A.uK,
        children: (0, a.jsx)("div", {
            className: A.Uq,
            children: t.map((e, t) =>
                (0, a.jsxs)(
                    "div",
                    {
                        className: A.mK,
                        children: [
                            null != e.emoji
                                ? (0, a.jsx)(c.A, {
                                      className: A.eh,
                                      src: e.emoji.src,
                                      emojiId: e.emoji.id,
                                      emojiName: e.emoji.name,
                                      animated: e.emoji.animated,
                                  })
                                : null,
                            (0, a.jsx)("span", { className: A.Tc, children: e.label }, e.value),
                        ],
                    },
                    t,
                ),
            ),
        }),
    });
}
function E(e) {
    let { type: t, options: n, id: r, maxValues: s, disabled: c } = e,
        E = (0, h.c7)(e),
        I = l.useMemo(() => n.filter((e) => e.default).map((e) => e.value), [n]),
        N = (0, _.jc)();
    o()(null != N, "StringSelectActionComponent must be rendered inside a ComponentStateContext");
    let {
            state: g,
            executeStateUpdate: v,
            visualState: T,
            isDisabled: b,
            error: S,
        } = N.useComponentState(e, I.length > 0 ? { type: t, values: I } : void 0),
        j = null != N.modal,
        O = s > 1,
        y = T === p.BB.LOADING,
        [R, P] = l.useState(!1),
        [L, D] = l.useState(() => new Set(n.filter((e) => e.default).map((e) => e.value))),
        [k, w] = l.useState(L),
        M = l.useMemo(() => n.some((e) => null != e.emoji), [n]);
    l.useEffect(() => {
        if (g?.type === u.I5.STRING_SELECT) {
            let e = new Set(g.values);
            D(e), w(e);
        } else {
            let e = new Set(I);
            D(e), w(e);
        }
    }, [r, I, g]);
    let U = l.useCallback(() => {
        k !== L && v({ type: u.I5.STRING_SELECT, values: Array.from(L) }) && w(L);
    }, [L, k, w, v]);
    l.useEffect(() => {
        R || (L.size === k.size && Array.from(k).every((e) => L.has(e))) || U();
    }, [R, L, k, U]);
    let H = (0, h.Lr)(e, j ? "modal" : "message"),
        B = d.lS;
    O ? (B = d.M8) : H && (B = d.$l);
    let F = (0, d.Ev)({ value: L, onChange: (e) => D(e), onSelectInteraction: B });
    return (0, a.jsxs)(l.Fragment, {
        children: [
            (0, a.jsx)("div", {
                className: A.kL,
                children: (0, a.jsx)(d.Pw, {
                    isProcessing: y,
                    isDisabled: c || T === p.BB.DISABLED || b,
                    className: i()(A.Lt, { [A.zE]: j }),
                    options: n.map((e) => ({ ...e, disabled: O && !L.has(e.value) && L.size === s })),
                    placeholder: E,
                    onClose: () => P(!1),
                    onOpen: () => P(!0),
                    maxVisibleItems: 5,
                    closeOnSelect: !O,
                    optionClassName: A.MT,
                    renderOptionLabel: (e) =>
                        (0, a.jsx)(C, { ...e, isDisabled: O && !L.has(e.value) && L.size === s, isOffset: M }),
                    renderOptionValue: (e) => (O ? (0, a.jsx)(f, { options: e }) : (0, a.jsx)(x, { ...e[0] })),
                    ...F,
                    "data-migration-pending": !0,
                }),
            }),
            null == S || j ? null : (0, a.jsx)(m.S0, { ...(0, m.PS)(S), className: A.z3 }),
        ],
    });
}
