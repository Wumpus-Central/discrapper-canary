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
    C = n(722914),
    E = n(500557);
function x(e) {
    let { icon: t, iconSize: n } = e;
    return (0, a.jsx)("div", { className: C.zc, style: { height: n, width: n }, children: t });
}
var N = (((l = {})[(l.PILL_ICON_SIZE = 16)] = "PILL_ICON_SIZE"), (l[(l.ROW_ICON_SIZE = 24)] = "ROW_ICON_SIZE"), l);
function I(e) {
    let { selectActionComponent: t, queryOptions: n, renderIcon: l, renderOptionLabel: s, defaultValues: o } = e,
        { type: N, maxValues: I, disabled: f } = t,
        _ = (0, h.c7)(t),
        [g, T] = r.useState(!1),
        [v, j] = r.useState(!1),
        [S, O] = r.useState(new Map(o?.map((e) => [e.value, e]))),
        [R, y] = r.useState(new Set(S.keys())),
        b = r.useRef((o ?? []).map((e) => e.value)),
        P = r.useRef(N),
        [L, D] = r.useState(0);
    r.useEffect(() => {
        let e = (o ?? []).map((e) => e.value);
        if (e.every((e) => b.current.includes(e)) && b.current.every((t) => e.includes(t)) && N === P.current) return;
        (b.current = e), (P.current = N);
        let t = new Map(o?.map((e) => [e.value, e]));
        O(t), y(new Set(t.keys())), D((e) => e + 1);
    }, [o, N]);
    let U = (0, p.jc)();
    c()(null != U, "SearchableSelectActionComponent must be rendered inside a ComponentStateContext");
    let {
            state: k,
            executeStateUpdate: w,
            visualState: M,
            isDisabled: H,
            error: K,
        } = U.useComponentState(t, S.size > 0 ? { type: N, selectedOptions: Array.from(S.values()) } : void 0),
        F = null != U.modal,
        G = M === A.BB.LOADING;
    r.useEffect(() => {
        if (
            k?.type === u.I5.USER_SELECT ||
            k?.type === u.I5.ROLE_SELECT ||
            k?.type === u.I5.MENTIONABLE_SELECT ||
            k?.type === u.I5.CHANNEL_SELECT
        ) {
            let e = new Map(k.selectedOptions.map((e) => [e.value, e]));
            O(e), y(new Set(e.keys()));
        }
    }, [k]);
    let B = r.useCallback(() => {
        w({ type: N, selectedOptions: Array.from(S.values()) }) && y(new Set(S.keys()));
    }, [w, N, S]);
    r.useEffect(() => {
        g || v || (S.size === R.size && Array.from(S.keys()).every((e) => R.has(e))) || B();
    }, [g, v, R, S, B]);
    let Y = 0 === S.size || g,
        z = {
            isProcessing: G,
            isDisabled: f || M === A.BB.DISABLED || H,
            wrapperClassName: i()(C.Lt, { [C.zE]: F }),
            options: (e) =>
                new Promise((t) => {
                    t(n(e));
                }),
            placeholder: Y ? _ : void 0,
            onClose: () => T(!1),
            onOpen: () => T(!0),
            onBlur: () => j(!1),
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
                    I > 1
                        ? (0, a.jsx)(
                              d.p,
                              {
                                  value: Array.from(S.values()),
                                  onChange: (e) => {
                                      g || j(!0), O(new Map(e.map((e) => [e.value, e])));
                                  },
                                  multi: !0,
                                  inputClassNames: i()({ [C.R]: !Y }),
                                  closeOnSelect: !1,
                                  ...z,
                                  "data-migration-pending": !0,
                              },
                              L,
                          )
                        : (0, a.jsx)(
                              d.p,
                              {
                                  value: [...S.values()][0],
                                  onChange: (e) => O(null != e ? new Map([[e.value, e]]) : new Map()),
                                  clearable: !0,
                                  ...z,
                                  "data-migration-pending": !0,
                              },
                              L,
                          ),
            }),
            null == K || F ? null : (0, a.jsx)(m.S0, { ...(0, m.PS)(K), className: E.z3 }),
        ],
    });
}
