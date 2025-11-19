n.d(t, {
    ZP: () => I,
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
    _ = n(280501),
    p = n(292419),
    h = n(28517),
    m = n(219879);
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
        className: h.iconContainer,
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
function I(e) {
    let { selectActionComponent: t, queryOptions: n, renderIcon: a, renderOptionLabel: s, defaultValues: g } = e,
        { type: b, maxValues: v, disabled: I } = t,
        T = (0, p.Wo)(t),
        [S, A] = i.useState(!1),
        [C, N] = i.useState(!1),
        [R, P] = i.useState(new Map(null == g ? void 0 : g.map((e) => [e.value, e]))),
        [D, w] = i.useState(new Set(R.keys())),
        [L, x] = i.useState(() => (null != g ? g : []).map((e) => e.value)),
        [M, k] = i.useState(0);
    i.useEffect(() => {
        let e = (null != g ? g : []).map((e) => e.value);
        if (e.every((e) => L.includes(e)) && L.every((t) => e.includes(t))) return;
        x(e);
        let t = new Map(null == g ? void 0 : g.map((e) => [e.value, e]));
        P(t), w(new Set(t.keys())), k((e) => e + 1);
    }, [g, L]);
    let j = (0, f.CJ)();
    l()(null != j, "SearchableSelectActionComponent must be rendered inside a ComponentStateContext");
    let {
            state: U,
            executeStateUpdate: G,
            visualState: B,
            isDisabled: Z,
            error: F,
        } = j.useComponentState(
            t,
            R.size > 0
                ? {
                      type: b,
                      selectedOptions: Array.from(R.values()),
                  }
                : void 0,
        ),
        V = null != j.modal,
        H = v > 1,
        Y = B === _.gH.LOADING;
    i.useEffect(() => {
        if (
            (null == U ? void 0 : U.type) === u.re.USER_SELECT ||
            (null == U ? void 0 : U.type) === u.re.ROLE_SELECT ||
            (null == U ? void 0 : U.type) === u.re.MENTIONABLE_SELECT ||
            (null == U ? void 0 : U.type) === u.re.CHANNEL_SELECT
        ) {
            let e = new Map(U.selectedOptions.map((e) => [e.value, e]));
            P(e), w(new Set(e.keys()));
        }
    }, [U]);
    let W = i.useCallback(() => {
        G({
            type: b,
            selectedOptions: Array.from(R.values()),
        }) && w(new Set(R.keys()));
    }, [G, b, R]);
    i.useEffect(() => {
        !S && !C && ((R.size === D.size && Array.from(R.keys()).every((e) => D.has(e))) || W());
    }, [S, C, D, R, W]);
    let K = (e) => {
            S || N(!0), P(new Map(e.map((e) => [e.value, e])));
        },
        z = (e) => P(null != e ? new Map([[e.value, e]]) : new Map()),
        q = (e) =>
            new Promise((t) => {
                t(n(e));
            }),
        X = (e, t) => {
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
        Q = 0 === R.size || S,
        J = {
            isProcessing: Y,
            isDisabled: I || B === _.gH.DISABLED || Z,
            wrapperClassName: o()(h.select, { [h.inModal]: V }),
            options: q,
            placeholder: Q ? T : void 0,
            onClose: () => A(!1),
            onOpen: () => A(!0),
            onBlur: () => N(!1),
            maxVisibleItems: 5,
            renderOptionPrefix: X,
            renderOptionLabel: s,
        };
    return (0, r.jsxs)(i.Fragment, {
        children: [
            (0, r.jsx)("div", {
                className: h.container,
                children: H
                    ? (0, r.jsx)(
                          c.VcW,
                          E(
                              {
                                  value: Array.from(R.values()),
                                  onChange: K,
                                  multi: !0,
                                  inputClassNames: o()({ [h.hidden]: !Q }),
                                  closeOnSelect: !1,
                              },
                              J,
                          ),
                          M,
                      )
                    : (0, r.jsx)(
                          c.VcW,
                          E(
                              {
                                  value: [...R.values()][0],
                                  onChange: z,
                                  clearable: !0,
                              },
                              J,
                          ),
                          M,
                      ),
            }),
            null == F || V ? null : (0, r.jsx)(d.st, y(E({}, (0, d.c4)(F)), { className: m.error })),
        ],
    });
}
