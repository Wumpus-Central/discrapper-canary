r.d(t, {
    ZP: () => g,
    tE: () => j
}),
    r(47120);
var n,
    l = r(200651),
    i = r(192379),
    o = r(120356),
    a = r.n(o),
    c = r(481060),
    s = r(911969),
    u = r(739754),
    p = r(970184),
    d = r(280501),
    f = r(388032),
    b = r(749778),
    O = r(950386);
function y(e) {
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
function m(e) {
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
        { type: v, placeholder: P, maxValues: x, disabled: w } = n,
        [S, C] = i.useState(!1),
        [E, N] = i.useState(!1),
        [I, k] = i.useState(new Map(null == h ? void 0 : h.map((e) => [e.value, e]))),
        [Z, T] = i.useState(new Set(I.keys())),
        [D, L] = i.useState(() => (null != h ? h : []).map((e) => e.value)),
        [_, R] = i.useState(0);
    i.useEffect(() => {
        let e = (null != h ? h : []).map((e) => e.value);
        if (e.every((e) => D.includes(e)) && D.every((t) => e.includes(t))) return;
        L(e);
        let t = new Map(null == h ? void 0 : h.map((e) => [e.value, e]));
        k(t), T(new Set(t.keys())), R((e) => e + 1);
    }, [h, D]);
    let {
            state: A,
            executeStateUpdate: M,
            visualState: U,
            isDisabled: W,
            error: F
        } = (0, p.Ee)(n, {
            type: v,
            selectedOptions: Array.from(I.values())
        }),
        H = U === d.gH.LOADING;
    i.useEffect(() => {
        if ((null == A ? void 0 : A.type) === s.re.USER_SELECT || (null == A ? void 0 : A.type) === s.re.ROLE_SELECT || (null == A ? void 0 : A.type) === s.re.MENTIONABLE_SELECT || (null == A ? void 0 : A.type) === s.re.CHANNEL_SELECT) {
            let e = new Map(A.selectedOptions.map((e) => [e.value, e]));
            k(e), T(new Set(e.keys()));
        }
    }, [A]);
    let G = i.useCallback(() => {
        M({
            type: v,
            selectedOptions: Array.from(I.values())
        }) && T(new Set(I.keys()));
    }, [M, v, I]);
    i.useEffect(() => {
        !S && !E && ((I.size === Z.size && Array.from(I.keys()).every((e) => Z.has(e))) || G());
    }, [S, E, Z, I, G]);
    let z = 0 === I.size || S,
        B = {
            isDisabled: w || W,
            wrapperClassName: b.select,
            options: (e) =>
                new Promise((t) => {
                    t(o(e));
                }),
            placeholder: z ? (null != P ? P : f.NW.string(f.t.Otr6W1)) : void 0,
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
                    ? (0, l.jsx)(m, {
                          icon: i,
                          iconSize: n
                      })
                    : null;
            },
            renderOptionLabel: g
        };
    return (0, l.jsxs)(i.Fragment, {
        children: [
            (0, l.jsxs)('div', {
                className: b.container,
                children: [
                    x > 1
                        ? (0, l.jsx)(
                              c.VcW,
                              y(
                                  {
                                      className: b.badges,
                                      value: Array.from(I.values()),
                                      onChange: (e) => {
                                          S || N(!0), k(new Map(e.map((e) => [e.value, e])));
                                      },
                                      multi: !0,
                                      inputClassNames: a()({
                                          [b.soloInput]: 0 === I.size,
                                          [b.inlineInput]: I.size > 0,
                                          [b.hidden]: !z
                                      }),
                                      closeOnSelect: !1,
                                      centerCaret: !0
                                  },
                                  B
                              ),
                              _
                          )
                        : (0, l.jsx)(
                              c.VcW,
                              y(
                                  {
                                      className: (b.badges, b.singleSelect),
                                      value: [...I.values()][0],
                                      onChange: (e) => k(null != e ? new Map([[e.value, e]]) : new Map()),
                                      clearable: !0,
                                      centerCaret: !0
                                  },
                                  B
                              ),
                              _
                          ),
                    H
                        ? (0, l.jsx)('div', {
                              className: b.loading,
                              children: (0, l.jsx)(c.bbz, {
                                  dotRadius: 3.5,
                                  themed: !0
                              })
                          })
                        : null
                ]
            }),
            null != F
                ? (0, l.jsx)(
                      u.st,
                      ((t = y({}, (0, u.c4)(F))),
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
