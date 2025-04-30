r.d(t, {
    ZP: () => g,
    tE: () => j
}),
    r(388685);
var n,
    l = r(200651),
    i = r(192379),
    o = r(120356),
    a = r.n(o),
    c = r(481060),
    s = r(911969),
    u = r(739754),
    d = r(970184),
    p = r(280501),
    f = r(388032),
    b = r(749778),
    O = r(950386);
function m(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        'function' == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                })
            )),
            n.forEach(function (t) {
                var n;
                (n = r[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = n);
            });
    }
    return e;
}
function y(e) {
    let { icon: t, iconSize: r } = e;
    return (0, l.jsx)('div', {
        className: b.iconContainer,
        style: {
            height: r,
            width: r
        },
        children: t
    });
}
var j = (((n = {})[(n.PILL_ICON_SIZE = 16)] = 'PILL_ICON_SIZE'), (n[(n.ROW_ICON_SIZE = 24)] = 'ROW_ICON_SIZE'), n);
function g(e) {
    var t, r;
    let { selectActionComponent: n, queryOptions: o, renderIcon: j, renderOptionLabel: g, defaultValues: h } = e,
        { type: v, placeholder: P, maxValues: x, disabled: S } = n,
        [w, C] = i.useState(!1),
        [E, N] = i.useState(!1),
        [I, T] = i.useState(new Map(null == h ? void 0 : h.map((e) => [e.value, e]))),
        [k, Z] = i.useState(new Set(I.keys())),
        [L, D] = i.useState(() => (null != h ? h : []).map((e) => e.value)),
        [R, _] = i.useState(0);
    i.useEffect(() => {
        let e = (null != h ? h : []).map((e) => e.value);
        if (e.every((e) => L.includes(e)) && L.every((t) => e.includes(t))) return;
        D(e);
        let t = new Map(null == h ? void 0 : h.map((e) => [e.value, e]));
        T(t), Z(new Set(t.keys())), _((e) => e + 1);
    }, [h, L]);
    let {
            state: A,
            executeStateUpdate: M,
            visualState: U,
            isDisabled: H,
            error: G
        } = (0, d.Ee)(n, {
            type: v,
            selectedOptions: Array.from(I.values())
        }),
        F = U === p.gH.LOADING;
    i.useEffect(() => {
        if ((null == A ? void 0 : A.type) === s.re.USER_SELECT || (null == A ? void 0 : A.type) === s.re.ROLE_SELECT || (null == A ? void 0 : A.type) === s.re.MENTIONABLE_SELECT || (null == A ? void 0 : A.type) === s.re.CHANNEL_SELECT) {
            let e = new Map(A.selectedOptions.map((e) => [e.value, e]));
            T(e), Z(new Set(e.keys()));
        }
    }, [A]);
    let z = i.useCallback(() => {
        M({
            type: v,
            selectedOptions: Array.from(I.values())
        }) && Z(new Set(I.keys()));
    }, [M, v, I]);
    i.useEffect(() => {
        !w && !E && ((I.size === k.size && Array.from(I.keys()).every((e) => k.has(e))) || z());
    }, [w, E, k, I, z]);
    let B = 0 === I.size || w,
        W = {
            isProcessing: F,
            isDisabled: S || U === p.gH.DISABLED || H,
            wrapperClassName: b.select,
            options: (e) =>
                new Promise((t) => {
                    t(o(e));
                }),
            placeholder: B ? (null != P ? P : f.intl.string(f.t.Otr6W1)) : void 0,
            onClose: () => C(!1),
            onOpen: () => C(!0),
            onBlur: () => N(!1),
            maxVisibleItems: 5,
            optionClassName: b.__invalid_selectOption,
            renderOptionPrefix: (e, t) => {
                let { inPill: r } = t,
                    n = r ? 16 : 24,
                    i = j(e, n);
                return null != i
                    ? (0, l.jsx)(y, {
                          icon: i,
                          iconSize: n
                      })
                    : null;
            },
            renderOptionLabel: g
        };
    return (0, l.jsxs)(i.Fragment, {
        children: [
            (0, l.jsx)('div', {
                className: b.container,
                children:
                    x > 1
                        ? (0, l.jsx)(
                              c.VcW,
                              m(
                                  {
                                      className: b.badges,
                                      value: Array.from(I.values()),
                                      onChange: (e) => {
                                          w || N(!0), T(new Map(e.map((e) => [e.value, e])));
                                      },
                                      multi: !0,
                                      inputClassNames: a()({
                                          [b.soloInput]: 0 === I.size,
                                          [b.inlineInput]: I.size > 0,
                                          [b.hidden]: !B
                                      }),
                                      closeOnSelect: !1,
                                      centerCaret: !0
                                  },
                                  W
                              ),
                              R
                          )
                        : (0, l.jsx)(
                              c.VcW,
                              m(
                                  {
                                      className: (b.badges, b.singleSelect),
                                      value: [...I.values()][0],
                                      onChange: (e) => T(null != e ? new Map([[e.value, e]]) : new Map()),
                                      clearable: !0,
                                      centerCaret: !0
                                  },
                                  W
                              ),
                              R
                          )
            }),
            null != G
                ? (0, l.jsx)(
                      u.st,
                      ((t = m({}, (0, u.c4)(G))),
                      (r = r = { className: O.error }),
                      Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
                          : (function (e, t) {
                                var r = Object.keys(e);
                                if (Object.getOwnPropertySymbols) {
                                    var n = Object.getOwnPropertySymbols(e);
                                    r.push.apply(r, n);
                                }
                                return r;
                            })(Object(r)).forEach(function (e) {
                                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
                            }),
                      t)
                  )
                : null
        ]
    });
}
