n.d(t, { Ay: () => I, p6: () => N });
var l,
    a = n(627968),
    r = n(64700),
    s = n(503698),
    i = n.n(s),
    o = n(284009),
    c = n.n(o),
    d = n(444550),
    u = n(155718),
    m = n(594808),
    p = n(207963),
    A = n(489414),
    h = n(814890),
    C = n(571543),
    E = n(356608);
function x(e) {
    let { icon: t, iconSize: n } = e;
    return (0, a.jsx)("div", { className: C.zc, style: { height: n, width: n }, children: t });
}
var N = (((l = {})[(l.PILL_ICON_SIZE = 16)] = "PILL_ICON_SIZE"), (l[(l.ROW_ICON_SIZE = 24)] = "ROW_ICON_SIZE"), l);
function I(e) {
    let { selectActionComponent: t, queryOptions: n, renderIcon: l, renderOptionLabel: s, defaultValues: o } = e,
        { type: N, customId: I, maxValues: f, disabled: _ } = t,
        g = (0, h.c7)(t),
        [T, v] = r.useState(!1),
        [j, S] = r.useState(!1),
        [O, R] = r.useState(new Map(o?.map((e) => [e.value, e]))),
        [y, b] = r.useState(new Set(O.keys())),
        P = r.useRef((o ?? []).map((e) => e.value)),
        L = r.useRef(N),
        D = r.useRef(I),
        [U, k] = r.useState(0);
    r.useEffect(() => {
        let e = (o ?? []).map((e) => e.value);
        if (
            e.every((e) => P.current.includes(e)) &&
            P.current.every((t) => e.includes(t)) &&
            N === L.current &&
            I === D.current
        )
            return;
        (P.current = e), (L.current = N), (D.current = I);
        let t = new Map(o?.map((e) => [e.value, e]));
        R(t), b(new Set(t.keys())), k((e) => e + 1);
    }, [o, N, I]);
    let w = (0, p.jc)();
    c()(null != w, "SearchableSelectActionComponent must be rendered inside a ComponentStateContext");
    let {
            state: M,
            executeStateUpdate: H,
            visualState: K,
            isDisabled: F,
            error: G,
        } = w.useComponentState(t, O.size > 0 ? { type: N, selectedOptions: Array.from(O.values()) } : void 0),
        B = null != w.modal,
        Y = K === A.BB.LOADING;
    r.useEffect(() => {
        if (
            M?.type === u.I5.USER_SELECT ||
            M?.type === u.I5.ROLE_SELECT ||
            M?.type === u.I5.MENTIONABLE_SELECT ||
            M?.type === u.I5.CHANNEL_SELECT
        ) {
            let e = new Map(M.selectedOptions.map((e) => [e.value, e]));
            R(e), b(new Set(e.keys()));
        }
    }, [M]);
    let z = r.useCallback(() => {
        H({ type: N, selectedOptions: Array.from(O.values()) }) && b(new Set(O.keys()));
    }, [H, N, O]);
    r.useEffect(() => {
        T || j || (O.size === y.size && Array.from(O.keys()).every((e) => y.has(e))) || z();
    }, [T, j, y, O, z]);
    let V = 0 === O.size || T,
        X = {
            isProcessing: Y,
            isDisabled: _ || K === A.BB.DISABLED || F,
            wrapperClassName: i()(C.Lt, { [C.zE]: B }),
            options: (e) =>
                new Promise((t) => {
                    t(n(e));
                }),
            placeholder: V ? g : void 0,
            onClose: () => v(!1),
            onOpen: () => v(!0),
            onBlur: () => S(!1),
            maxVisibleItems: 5,
            renderOptionPrefix: (e, t) => {
                let { inPill: n } = t,
                    r = n ? 16 : 24,
                    s = l(e, r);
                return null != s ? (0, a.jsx)(x, { icon: s, iconSize: r }) : null;
            },
            renderOptionLabel: s,
        };
    return (0, a.jsxs)(r.Fragment, {
        children: [
            (0, a.jsx)("div", {
                className: C.kL,
                children:
                    f > 1
                        ? (0, a.jsx)(
                              d.p,
                              {
                                  value: Array.from(O.values()),
                                  onChange: (e) => {
                                      T || S(!0), R(new Map(e.map((e) => [e.value, e])));
                                  },
                                  multi: !0,
                                  inputClassNames: i()({ [C.R]: !V }),
                                  closeOnSelect: !1,
                                  ...X,
                                  "data-migration-pending": !0,
                              },
                              U,
                          )
                        : (0, a.jsx)(
                              d.p,
                              {
                                  value: [...O.values()][0],
                                  onChange: (e) => R(null != e ? new Map([[e.value, e]]) : new Map()),
                                  clearable: !0,
                                  ...X,
                                  "data-migration-pending": !0,
                              },
                              U,
                          ),
            }),
            null == G || B ? null : (0, a.jsx)(m.S0, { ...(0, m.PS)(G), className: E.z3 }),
        ],
    });
}
