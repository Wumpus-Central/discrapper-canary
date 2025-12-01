n.d(t, {
    ZP: () => S,
    tE: () => v,
}),
    n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(512722),
    l = n.n(s),
    c = n(481060),
    u = n(911969),
    d = n(739754),
    f = n(970184),
    p = n(280501),
    _ = n(292419),
    m = n(28517),
    h = n(219879);
function g(e, t, n) {
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
function E(e) {
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
                g(e, t, n[t]);
            });
    }
    return e;
}
function b(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function y(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : b(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function O(e) {
    let { icon: t, iconSize: n } = e;
    return (0, r.jsx)("div", {
        className: m.iconContainer,
        style: {
            height: n,
            width: n,
        },
        children: t,
    });
}
var v = (function (e) {
    return (e[(e.PILL_ICON_SIZE = 16)] = "PILL_ICON_SIZE"), (e[(e.ROW_ICON_SIZE = 24)] = "ROW_ICON_SIZE"), e;
})({});
function S(e) {
    let { selectActionComponent: t, queryOptions: n, renderIcon: a, renderOptionLabel: s, defaultValues: g } = e,
        { type: b, maxValues: v, disabled: S } = t,
        I = (0, _.Wo)(t),
        [T, A] = i.useState(!1),
        [C, N] = i.useState(!1),
        [P, R] = i.useState(new Map(null == g ? void 0 : g.map((e) => [e.value, e]))),
        [w, D] = i.useState(new Set(P.keys())),
        [x, L] = i.useState(() => (null != g ? g : []).map((e) => e.value)),
        [j, M] = i.useState(0);
    i.useEffect(() => {
        let e = (null != g ? g : []).map((e) => e.value);
        if (e.every((e) => x.includes(e)) && x.every((t) => e.includes(t))) return;
        L(e);
        let t = new Map(null == g ? void 0 : g.map((e) => [e.value, e]));
        R(t), D(new Set(t.keys())), M((e) => e + 1);
    }, [g, x]);
    let k = (0, f.CJ)();
    l()(null != k, "SearchableSelectActionComponent must be rendered inside a ComponentStateContext");
    let {
            state: U,
            executeStateUpdate: G,
            visualState: Z,
            isDisabled: B,
            error: F,
        } = k.useComponentState(
            t,
            P.size > 0
                ? {
                      type: b,
                      selectedOptions: Array.from(P.values()),
                  }
                : void 0,
        ),
        V = null != k.modal,
        H = v > 1,
        Y = Z === p.gH.LOADING;
    i.useEffect(() => {
        if (
            (null == U ? void 0 : U.type) === u.re.USER_SELECT ||
            (null == U ? void 0 : U.type) === u.re.ROLE_SELECT ||
            (null == U ? void 0 : U.type) === u.re.MENTIONABLE_SELECT ||
            (null == U ? void 0 : U.type) === u.re.CHANNEL_SELECT
        ) {
            let e = new Map(U.selectedOptions.map((e) => [e.value, e]));
            R(e), D(new Set(e.keys()));
        }
    }, [U]);
    let W = i.useCallback(() => {
        G({
            type: b,
            selectedOptions: Array.from(P.values()),
        }) && D(new Set(P.keys()));
    }, [G, b, P]);
    i.useEffect(() => {
        !T && !C && ((P.size === w.size && Array.from(P.keys()).every((e) => w.has(e))) || W());
    }, [T, C, w, P, W]);
    let K = (e) => {
            T || N(!0), R(new Map(e.map((e) => [e.value, e])));
        },
        z = (e) => R(null != e ? new Map([[e.value, e]]) : new Map()),
        q = (e) =>
            new Promise((t) => {
                t(n(e));
            }),
        Q = (e, t) => {
            let { inPill: n } = t,
                i = n ? 16 : 24,
                o = a(e, i);
            return null != o
                ? (0, r.jsx)(O, {
                      icon: o,
                      iconSize: i,
                  })
                : null;
        },
        X = 0 === P.size || T,
        J = {
            isProcessing: Y,
            isDisabled: S || Z === p.gH.DISABLED || B,
            wrapperClassName: o()(m.select, { [m.inModal]: V }),
            options: q,
            placeholder: X ? I : void 0,
            onClose: () => A(!1),
            onOpen: () => A(!0),
            onBlur: () => N(!1),
            maxVisibleItems: 5,
            renderOptionPrefix: Q,
            renderOptionLabel: s,
        };
    return (0, r.jsxs)(i.Fragment, {
        children: [
            (0, r.jsx)("div", {
                className: m.container,
                children: H
                    ? (0, r.jsx)(
                          c.VcW,
                          E(
                              {
                                  value: Array.from(P.values()),
                                  onChange: K,
                                  multi: !0,
                                  inputClassNames: o()({ [m.hidden]: !X }),
                                  closeOnSelect: !1,
                              },
                              J,
                          ),
                          j,
                      )
                    : (0, r.jsx)(
                          c.VcW,
                          E(
                              {
                                  value: [...P.values()][0],
                                  onChange: z,
                                  clearable: !0,
                              },
                              J,
                          ),
                          j,
                      ),
            }),
            null == F || V ? null : (0, r.jsx)(d.st, y(E({}, (0, d.c4)(F)), { className: h.error })),
        ],
    });
}
