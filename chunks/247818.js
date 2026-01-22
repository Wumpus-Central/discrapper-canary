n.d(t, {
    Ay: () => v,
    p6: () => A,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(284009),
    l = n.n(o),
    c = n(444550),
    u = n(155718),
    d = n(594808),
    f = n(207963),
    p = n(489414),
    _ = n(814890),
    h = n(57856),
    m = n(979811);

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
        className: h.zc,
        style: {
            height: n,
            width: n,
        },
        children: t,
    });
}
var A = (function (e) {
    return (e[(e.PILL_ICON_SIZE = 16)] = "PILL_ICON_SIZE"), (e[(e.ROW_ICON_SIZE = 24)] = "ROW_ICON_SIZE"), e;
})({});

function v(e) {
    let { selectActionComponent: t, queryOptions: n, renderIcon: a, renderOptionLabel: o, defaultValues: g } = e,
        { type: b, maxValues: A, disabled: v } = t,
        S = (0, _.c7)(t),
        [I, T] = i.useState(!1),
        [C, N] = i.useState(!1),
        [R, w] = i.useState(new Map(null == g ? void 0 : g.map((e) => [e.value, e]))),
        [P, D] = i.useState(new Set(R.keys())),
        [x, L] = i.useState(() => (null != g ? g : []).map((e) => e.value)),
        [j, M] = i.useState(0);
    i.useEffect(() => {
        let e = (null != g ? g : []).map((e) => e.value);
        if (e.every((e) => x.includes(e)) && x.every((t) => e.includes(t))) return;
        L(e);
        let t = new Map(null == g ? void 0 : g.map((e) => [e.value, e]));
        w(t), D(new Set(t.keys())), M((e) => e + 1);
    }, [g, x]);
    let k = (0, f.jc)();
    l()(null != k, "SearchableSelectActionComponent must be rendered inside a ComponentStateContext");
    let {
            state: U,
            executeStateUpdate: G,
            visualState: V,
            isDisabled: F,
            error: B,
        } = k.useComponentState(
            t,
            R.size > 0
                ? {
                      type: b,
                      selectedOptions: Array.from(R.values()),
                  }
                : void 0,
        ),
        H = null != k.modal,
        Y = A > 1,
        W = V === p.BB.LOADING;
    i.useEffect(() => {
        if (
            (null == U ? void 0 : U.type) === u.I5.USER_SELECT ||
            (null == U ? void 0 : U.type) === u.I5.ROLE_SELECT ||
            (null == U ? void 0 : U.type) === u.I5.MENTIONABLE_SELECT ||
            (null == U ? void 0 : U.type) === u.I5.CHANNEL_SELECT
        ) {
            let e = new Map(U.selectedOptions.map((e) => [e.value, e]));
            w(e), D(new Set(e.keys()));
        }
    }, [U]);
    let K = i.useCallback(() => {
        G({
            type: b,
            selectedOptions: Array.from(R.values()),
        }) && D(new Set(R.keys()));
    }, [G, b, R]);
    i.useEffect(() => {
        I || C || (R.size === P.size && Array.from(R.keys()).every((e) => P.has(e))) || K();
    }, [I, C, P, R, K]);
    let z = (e) => {
            I || N(!0), w(new Map(e.map((e) => [e.value, e])));
        },
        q = (e) => w(null != e ? new Map([[e.value, e]]) : new Map()),
        X = (e) =>
            new Promise((t) => {
                t(n(e));
            }),
        Z = (e, t) => {
            let { inPill: n } = t,
                i = n ? 16 : 24,
                s = a(e, i);
            return null != s
                ? (0, r.jsx)(O, {
                      icon: s,
                      iconSize: i,
                  })
                : null;
        },
        Q = 0 === R.size || I,
        $ = {
            isProcessing: W,
            isDisabled: v || V === p.BB.DISABLED || F,
            wrapperClassName: s()(h.Lt, {
                [h.zE]: H,
            }),
            options: X,
            placeholder: Q ? S : void 0,
            onClose: () => T(!1),
            onOpen: () => T(!0),
            onBlur: () => N(!1),
            maxVisibleItems: 5,
            renderOptionPrefix: Z,
            renderOptionLabel: o,
        };
    return (0, r.jsxs)(i.Fragment, {
        children: [
            (0, r.jsx)("div", {
                className: h.kL,
                children: Y
                    ? (0, r.jsx)(
                          c.p,
                          y(
                              E(
                                  {
                                      value: Array.from(R.values()),
                                      onChange: z,
                                      multi: !0,
                                      inputClassNames: s()({
                                          [h.R]: !Q,
                                      }),
                                      closeOnSelect: !1,
                                  },
                                  $,
                              ),
                              {
                                  "data-migration-pending": !0,
                              },
                          ),
                          j,
                      )
                    : (0, r.jsx)(
                          c.p,
                          y(
                              E(
                                  {
                                      value: [...R.values()][0],
                                      onChange: q,
                                      clearable: !0,
                                  },
                                  $,
                              ),
                              {
                                  "data-migration-pending": !0,
                              },
                          ),
                          j,
                      ),
            }),
            null == B || H
                ? null
                : (0, r.jsx)(
                      d.S0,
                      y(E({}, (0, d.PS)(B)), {
                          className: m.z3,
                      }),
                  ),
        ],
    });
}
