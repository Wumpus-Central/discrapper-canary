n.d(t, { Ay: () => E, p6: () => f });
var a,
    l = n(627968),
    r = n(64700),
    i = n(503698),
    s = n.n(i),
    o = n(284009),
    d = n.n(o),
    c = n(444550),
    u = n(155718),
    m = n(594808),
    _ = n(207963),
    p = n(489414),
    h = n(814890),
    A = n(568167),
    C = n(252592);
function x(e) {
    let { icon: t, iconSize: n } = e;
    return (0, l.jsx)("div", { className: A.zc, style: { height: n, width: n }, children: t });
}
var f = (((a = {})[(a.PILL_ICON_SIZE = 16)] = "PILL_ICON_SIZE"), (a[(a.ROW_ICON_SIZE = 24)] = "ROW_ICON_SIZE"), a);
function E(e) {
    let { selectActionComponent: t, queryOptions: n, renderIcon: a, renderOptionLabel: i, defaultValues: o } = e,
        { type: f, customId: E, maxValues: I, disabled: N } = t,
        g = (0, h.c7)(t),
        [v, T] = r.useState(!1),
        [b, S] = r.useState(!1),
        [j, O] = r.useState(new Map(o?.map((e) => [e.value, e]))),
        [y, R] = r.useState(new Set(j.keys())),
        P = r.useRef((o ?? []).map((e) => e.value)),
        L = r.useRef(f),
        D = r.useRef(E),
        [k, w] = r.useState(0);
    r.useEffect(() => {
        let e = (o ?? []).map((e) => e.value);
        if (
            e.every((e) => P.current.includes(e)) &&
            P.current.every((t) => e.includes(t)) &&
            f === L.current &&
            E === D.current
        )
            return;
        (P.current = e), (L.current = f), (D.current = E);
        let t = new Map(o?.map((e) => [e.value, e]));
        O(t), R(new Set(t.keys())), w((e) => e + 1);
    }, [o, f, E]);
    let M = (0, _.jc)();
    d()(null != M, "SearchableSelectActionComponent must be rendered inside a ComponentStateContext");
    let {
            state: U,
            executeStateUpdate: H,
            visualState: B,
            isDisabled: F,
            error: G,
        } = M.useComponentState(t, j.size > 0 ? { type: f, selectedOptions: Array.from(j.values()) } : void 0),
        K = null != M.modal,
        V = B === p.BB.LOADING;
    r.useEffect(() => {
        if (
            U?.type === u.I5.USER_SELECT ||
            U?.type === u.I5.ROLE_SELECT ||
            U?.type === u.I5.MENTIONABLE_SELECT ||
            U?.type === u.I5.CHANNEL_SELECT
        ) {
            let e = new Map(U.selectedOptions.map((e) => [e.value, e]));
            O(e), R(new Set(e.keys()));
        }
    }, [U]);
    let z = r.useCallback(() => {
        H({ type: f, selectedOptions: Array.from(j.values()) }) && R(new Set(j.keys()));
    }, [H, f, j]);
    r.useEffect(() => {
        v || b || (j.size === y.size && Array.from(j.keys()).every((e) => y.has(e))) || z();
    }, [v, b, y, j, z]);
    let Y = 0 === j.size || v,
        X = {
            isProcessing: V,
            isDisabled: N || B === p.BB.DISABLED || F,
            wrapperClassName: s()(A.Lt, { [A.zE]: K }),
            options: (e) =>
                new Promise((t) => {
                    t(n(e));
                }),
            placeholder: Y ? g : void 0,
            onClose: () => T(!1),
            onOpen: () => T(!0),
            onBlur: () => S(!1),
            maxVisibleItems: 5,
            renderOptionPrefix: (e, t) => {
                let { inPill: n } = t,
                    r = n ? 16 : 24,
                    i = a(e, r);
                return null != i ? (0, l.jsx)(x, { icon: i, iconSize: r }) : null;
            },
            renderOptionLabel: i,
        };
    return (0, l.jsxs)(r.Fragment, {
        children: [
            (0, l.jsx)("div", {
                className: A.kL,
                children:
                    I > 1
                        ? (0, l.jsx)(
                              c.p,
                              {
                                  value: Array.from(j.values()),
                                  onChange: (e) => {
                                      v || S(!0), O(new Map(e.map((e) => [e.value, e])));
                                  },
                                  multi: !0,
                                  inputClassNames: s()({ [A.R]: !Y }),
                                  closeOnSelect: !1,
                                  ...X,
                                  "data-migration-pending": !0,
                              },
                              k,
                          )
                        : (0, l.jsx)(
                              c.p,
                              {
                                  value: [...j.values()][0],
                                  onChange: (e) => O(null != e ? new Map([[e.value, e]]) : new Map()),
                                  clearable: !0,
                                  ...X,
                                  "data-migration-pending": !0,
                              },
                              k,
                          ),
            }),
            null == G || K ? null : (0, l.jsx)(m.S0, { ...(0, m.PS)(G), className: C.z3 }),
        ],
    });
}
