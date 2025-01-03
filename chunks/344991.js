t.d(n, {
    ZP: function () {
        return g;
    },
    tE: function () {
        return l;
    }
}),
    t(47120);
var l,
    i,
    r = t(200651),
    a = t(192379),
    o = t(120356),
    s = t.n(o),
    c = t(481060),
    u = t(911969),
    d = t(739754),
    m = t(970184),
    f = t(280501),
    p = t(388032),
    h = t(591580),
    x = t(844592);
function v(e) {
    let { icon: n, iconSize: t } = e;
    return (0, r.jsx)('div', {
        className: h.iconContainer,
        style: {
            height: t,
            width: t
        },
        children: n
    });
}
function g(e) {
    let { selectActionComponent: n, queryOptions: t, renderIcon: l, renderOptionLabel: i, defaultValues: o } = e,
        { type: g, placeholder: C, maxValues: _, disabled: b } = n,
        [I, S] = a.useState(!1),
        [j, y] = a.useState(!1),
        [T, N] = a.useState(new Map(null == o ? void 0 : o.map((e) => [e.value, e]))),
        [E, Z] = a.useState(new Set(T.keys())),
        [k, L] = a.useState(() => (null != o ? o : []).map((e) => e.value)),
        [O, M] = a.useState(0);
    a.useEffect(() => {
        let e = (null != o ? o : []).map((e) => e.value);
        if (e.every((e) => k.includes(e)) && k.every((n) => e.includes(n))) return;
        L(e);
        let n = new Map(null == o ? void 0 : o.map((e) => [e.value, e]));
        N(n), Z(new Set(n.keys())), M((e) => e + 1);
    }, [o, k]);
    let {
            state: P,
            executeStateUpdate: R,
            visualState: A,
            isDisabled: w,
            error: B
        } = (0, m.Ee)(n, {
            type: g,
            selectedOptions: Array.from(T.values())
        }),
        U = A === f.gH.LOADING;
    a.useEffect(() => {
        if ((null == P ? void 0 : P.type) === u.re.USER_SELECT || (null == P ? void 0 : P.type) === u.re.ROLE_SELECT || (null == P ? void 0 : P.type) === u.re.MENTIONABLE_SELECT || (null == P ? void 0 : P.type) === u.re.CHANNEL_SELECT) {
            let e = new Map(P.selectedOptions.map((e) => [e.value, e]));
            N(e), Z(new Set(e.keys()));
        }
    }, [P]);
    let G = a.useCallback(() => {
        R({
            type: g,
            selectedOptions: Array.from(T.values())
        }) && Z(new Set(T.keys()));
    }, [R, g, T]);
    a.useEffect(() => {
        if (!(I || j || (T.size === E.size && Array.from(T.keys()).every((e) => E.has(e))))) G();
    }, [I, j, E, T, G]);
    let H = 0 === T.size || I,
        D = {
            isDisabled: b || w,
            wrapperClassName: h.select,
            options: (e) =>
                new Promise((n) => {
                    n(t(e));
                }),
            placeholder: H ? (null != C ? C : p.intl.string(p.t.Otr6W1)) : void 0,
            onClose: () => S(!1),
            onOpen: () => S(!0),
            onBlur: () => y(!1),
            maxVisibleItems: 5,
            optionClassName: h.__invalid_selectOption,
            renderOptionPrefix: (e, n) => {
                let { inPill: t } = n,
                    i = t ? 16 : 24,
                    a = l(e, i);
                return null != a
                    ? (0, r.jsx)(v, {
                          icon: a,
                          iconSize: i
                      })
                    : null;
            },
            renderOptionLabel: i
        };
    return (0, r.jsxs)(a.Fragment, {
        children: [
            (0, r.jsxs)('div', {
                className: h.container,
                children: [
                    _ > 1
                        ? (0, r.jsx)(
                              c.SearchableSelect,
                              {
                                  className: h.badges,
                                  value: Array.from(T.values()),
                                  onChange: (e) => {
                                      !I && y(!0), N(new Map(e.map((e) => [e.value, e])));
                                  },
                                  multi: !0,
                                  inputClassNames: s()({
                                      [h.soloInput]: 0 === T.size,
                                      [h.inlineInput]: T.size > 0,
                                      [h.hidden]: !H
                                  }),
                                  closeOnSelect: !1,
                                  centerCaret: !0,
                                  ...D
                              },
                              O
                          )
                        : (0, r.jsx)(
                              c.SearchableSelect,
                              {
                                  className: (h.badges, h.singleSelect),
                                  value: [...T.values()][0],
                                  onChange: (e) => N(null != e ? new Map([[e.value, e]]) : new Map()),
                                  clearable: !0,
                                  centerCaret: !0,
                                  ...D
                              },
                              O
                          ),
                    U
                        ? (0, r.jsx)('div', {
                              className: h.loading,
                              children: (0, r.jsx)(c.Dots, {
                                  dotRadius: 3.5,
                                  themed: !0
                              })
                          })
                        : null
                ]
            }),
            null != B
                ? (0, r.jsx)(d.st, {
                      ...(0, d.c4)(B),
                      className: x.error
                  })
                : null
        ]
    });
}
((i = l || (l = {}))[(i.PILL_ICON_SIZE = 16)] = 'PILL_ICON_SIZE'), (i[(i.ROW_ICON_SIZE = 24)] = 'ROW_ICON_SIZE');
