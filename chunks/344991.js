l.d(n, {
    ZP: () => C,
    tE: () => f
}),
    l(47120);
var t,
    i = l(200651),
    r = l(192379),
    a = l(120356),
    s = l.n(a),
    o = l(481060),
    u = l(911969),
    c = l(739754),
    d = l(970184),
    m = l(280501),
    h = l(388032),
    p = l(569173),
    x = l(440078);
function v(e) {
    let { icon: n, iconSize: l } = e;
    return (0, i.jsx)('div', {
        className: p.iconContainer,
        style: {
            height: l,
            width: l
        },
        children: n
    });
}
var f = (((t = {})[(t.PILL_ICON_SIZE = 16)] = 'PILL_ICON_SIZE'), (t[(t.ROW_ICON_SIZE = 24)] = 'ROW_ICON_SIZE'), t);
function C(e) {
    let { selectActionComponent: n, queryOptions: l, renderIcon: t, renderOptionLabel: a, defaultValues: f } = e,
        { type: C, placeholder: g, maxValues: j, disabled: N } = n,
        [S, E] = r.useState(!1),
        [I, Z] = r.useState(!1),
        [T, b] = r.useState(new Map(null == f ? void 0 : f.map((e) => [e.value, e]))),
        [y, L] = r.useState(new Set(T.keys())),
        [k, _] = r.useState(() => (null != f ? f : []).map((e) => e.value)),
        [R, P] = r.useState(0);
    r.useEffect(() => {
        let e = (null != f ? f : []).map((e) => e.value);
        if (e.every((e) => k.includes(e)) && k.every((n) => e.includes(n))) return;
        _(e);
        let n = new Map(null == f ? void 0 : f.map((e) => [e.value, e]));
        b(n), L(new Set(n.keys())), P((e) => e + 1);
    }, [f, k]);
    let {
            state: O,
            executeStateUpdate: A,
            visualState: M,
            isDisabled: w,
            error: U
        } = (0, d.Ee)(n, {
            type: C,
            selectedOptions: Array.from(T.values())
        }),
        H = M === m.gH.LOADING;
    r.useEffect(() => {
        if ((null == O ? void 0 : O.type) === u.re.USER_SELECT || (null == O ? void 0 : O.type) === u.re.ROLE_SELECT || (null == O ? void 0 : O.type) === u.re.MENTIONABLE_SELECT || (null == O ? void 0 : O.type) === u.re.CHANNEL_SELECT) {
            let e = new Map(O.selectedOptions.map((e) => [e.value, e]));
            b(e), L(new Set(e.keys()));
        }
    }, [O]);
    let F = r.useCallback(() => {
        A({
            type: C,
            selectedOptions: Array.from(T.values())
        }) && L(new Set(T.keys()));
    }, [A, C, T]);
    r.useEffect(() => {
        !(S || I || (T.size === y.size && Array.from(T.keys()).every((e) => y.has(e)))) && F();
    }, [S, I, y, T, F]);
    let D = 0 === T.size || S,
        G = {
            isDisabled: N || w,
            wrapperClassName: p.select,
            options: (e) =>
                new Promise((n) => {
                    n(l(e));
                }),
            placeholder: D ? (null != g ? g : h.intl.string(h.t.Otr6W1)) : void 0,
            onClose: () => E(!1),
            onOpen: () => E(!0),
            onBlur: () => Z(!1),
            maxVisibleItems: 5,
            optionClassName: p.__invalid_selectOption,
            renderOptionPrefix: (e, n) => {
                let { inPill: l } = n,
                    r = l ? 16 : 24,
                    a = t(e, r);
                return null != a
                    ? (0, i.jsx)(v, {
                          icon: a,
                          iconSize: r
                      })
                    : null;
            },
            renderOptionLabel: a
        };
    return (0, i.jsxs)(r.Fragment, {
        children: [
            (0, i.jsxs)('div', {
                className: p.container,
                children: [
                    j > 1
                        ? (0, i.jsx)(
                              o.VcW,
                              {
                                  className: p.badges,
                                  value: Array.from(T.values()),
                                  onChange: (e) => {
                                      S || Z(!0), b(new Map(e.map((e) => [e.value, e])));
                                  },
                                  multi: !0,
                                  inputClassNames: s()({
                                      [p.soloInput]: 0 === T.size,
                                      [p.inlineInput]: T.size > 0,
                                      [p.hidden]: !D
                                  }),
                                  closeOnSelect: !1,
                                  centerCaret: !0,
                                  ...G
                              },
                              R
                          )
                        : (0, i.jsx)(
                              o.VcW,
                              {
                                  className: (p.badges, p.singleSelect),
                                  value: [...T.values()][0],
                                  onChange: (e) => b(null != e ? new Map([[e.value, e]]) : new Map()),
                                  clearable: !0,
                                  centerCaret: !0,
                                  ...G
                              },
                              R
                          ),
                    H
                        ? (0, i.jsx)('div', {
                              className: p.loading,
                              children: (0, i.jsx)(o.bbz, {
                                  dotRadius: 3.5,
                                  themed: !0
                              })
                          })
                        : null
                ]
            }),
            null != U
                ? (0, i.jsx)(c.st, {
                      ...(0, c.c4)(U),
                      className: x.error
                  })
                : null
        ]
    });
}
