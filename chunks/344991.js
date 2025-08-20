n.d(t, {
    ZP: () => O,
    tE: () => y,
}),
    n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(481060),
    l = n(911969),
    c = n(739754),
    u = n(970184),
    d = n(280501),
    f = n(388032),
    _ = n(28517),
    p = n(623734);
function h(e, t, n) {
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
function m(e) {
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
                h(e, t, n[t]);
            });
    }
    return e;
}
function g(e, t) {
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
function E(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : g(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function b(e) {
    let { icon: t, iconSize: n } = e;
    return (0, r.jsx)("div", {
        className: _.iconContainer,
        style: {
            height: n,
            width: n,
        },
        children: t,
    });
}
var y = (function (e) {
    return (e[(e.PILL_ICON_SIZE = 16)] = "PILL_ICON_SIZE"), (e[(e.ROW_ICON_SIZE = 24)] = "ROW_ICON_SIZE"), e;
})({});
function O(e) {
    let { selectActionComponent: t, queryOptions: n, renderIcon: a, renderOptionLabel: h, defaultValues: g } = e,
        { type: y, placeholder: O, maxValues: v, disabled: I } = t,
        [T, S] = i.useState(!1),
        [A, C] = i.useState(!1),
        [N, R] = i.useState(new Map(null == g ? void 0 : g.map((e) => [e.value, e]))),
        [P, w] = i.useState(new Set(N.keys())),
        [D, x] = i.useState(() => (null != g ? g : []).map((e) => e.value)),
        [L, j] = i.useState(0);
    i.useEffect(() => {
        let e = (null != g ? g : []).map((e) => e.value);
        if (e.every((e) => D.includes(e)) && D.every((t) => e.includes(t))) return;
        x(e);
        let t = new Map(null == g ? void 0 : g.map((e) => [e.value, e]));
        R(t), w(new Set(t.keys())), j((e) => e + 1);
    }, [g, D]);
    let {
            state: M,
            executeStateUpdate: k,
            visualState: U,
            isDisabled: G,
            error: B,
        } = (0, u.Ee)(t, {
            type: y,
            selectedOptions: Array.from(N.values()),
        }),
        Z = v > 1,
        V = U === d.gH.LOADING;
    i.useEffect(() => {
        if (
            (null == M ? void 0 : M.type) === l.re.USER_SELECT ||
            (null == M ? void 0 : M.type) === l.re.ROLE_SELECT ||
            (null == M ? void 0 : M.type) === l.re.MENTIONABLE_SELECT ||
            (null == M ? void 0 : M.type) === l.re.CHANNEL_SELECT
        ) {
            let e = new Map(M.selectedOptions.map((e) => [e.value, e]));
            R(e), w(new Set(e.keys()));
        }
    }, [M]);
    let F = i.useCallback(() => {
        k({
            type: y,
            selectedOptions: Array.from(N.values()),
        }) && w(new Set(N.keys()));
    }, [k, y, N]);
    i.useEffect(() => {
        !T && !A && ((N.size === P.size && Array.from(N.keys()).every((e) => P.has(e))) || F());
    }, [T, A, P, N, F]);
    let H = (e) => {
            T || C(!0), R(new Map(e.map((e) => [e.value, e])));
        },
        Y = (e) => R(null != e ? new Map([[e.value, e]]) : new Map()),
        W = (e) =>
            new Promise((t) => {
                t(n(e));
            }),
        K = (e, t) => {
            let { inPill: n } = t,
                i = n ? 16 : 24,
                o = a(e, i);
            return null != o
                ? (0, r.jsx)(b, {
                      icon: o,
                      iconSize: i,
                  })
                : null;
        },
        z = 0 === N.size || T,
        q = {
            isProcessing: V,
            isDisabled: I || U === d.gH.DISABLED || G,
            wrapperClassName: _.select,
            options: W,
            placeholder: z ? (null != O ? O : f.intl.string(f.t.Otr6W1)) : void 0,
            onClose: () => S(!1),
            onOpen: () => S(!0),
            onBlur: () => C(!1),
            maxVisibleItems: 5,
            optionClassName: _.__invalid_selectOption,
            renderOptionPrefix: K,
            renderOptionLabel: h,
        };
    return (0, r.jsxs)(i.Fragment, {
        children: [
            (0, r.jsx)("div", {
                className: _.container,
                children: Z
                    ? (0, r.jsx)(
                          s.VcW,
                          m(
                              {
                                  className: _.badges,
                                  value: Array.from(N.values()),
                                  onChange: H,
                                  multi: !0,
                                  inputClassNames: o()({
                                      [_.soloInput]: 0 === N.size,
                                      [_.inlineInput]: N.size > 0,
                                      [_.hidden]: !z,
                                  }),
                                  closeOnSelect: !1,
                                  centerCaret: !0,
                              },
                              q,
                          ),
                          L,
                      )
                    : (0, r.jsx)(
                          s.VcW,
                          m(
                              {
                                  className: (_.badges, _.singleSelect),
                                  value: [...N.values()][0],
                                  onChange: Y,
                                  clearable: !0,
                                  centerCaret: !0,
                              },
                              q,
                          ),
                          L,
                      ),
            }),
            null != B ? (0, r.jsx)(c.st, E(m({}, (0, c.c4)(B)), { className: p.error })) : null,
        ],
    });
}
