(n.d(t, { k: () => S }), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    s = n(97613),
    o = n.n(s),
    c = n(562075),
    d = n(539202),
    u = n(442837),
    m = n(481060),
    g = n(541716),
    p = n(752305),
    h = n(893718),
    f = n(592125),
    x = n(984933),
    b = n(540457),
    j = n(681460),
    v = n(592286),
    _ = n(981631),
    O = n(388032),
    y = n(350612);
function C(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
    }
    return e;
}
function N(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let I = 'RULE';
function E(e) {
    let { rule: t, rulesChannel: n, index: l, onChange: s, onKeyDown: o, onClear: u, onRuleReorder: f, isDropHovered: x, focused: b, onFocus: j, previewEnabled: _, isDragEnabled: C, disabled: N } = e,
        E = i.useRef(null),
        S = i.useRef(null),
        [{ textValue: T, richValue: P }, w] = i.useState((0, p.eK)(t.value)),
        [, R, Z] = (0, c.c)({
            type: I,
            item: {
                rule: t,
                index: l
            },
            end: (e, t) => {
                null == e || t.didDrop() || f(e.rule, null, !0);
            }
        }),
        [, D] = (0, d.L)({
            accept: I,
            hover: (e, t) => {
                var n;
                let { index: r } = e,
                    i = null == (n = E.current) ? void 0 : n.getBoundingClientRect(),
                    a = t.getClientOffset();
                if (null == i || null == a) return;
                let s = (i.bottom - i.top) / 2,
                    o = a.y - i.top;
                (r < l && o < s) || (r > l && o > s) || f(e.rule, l, !1);
            },
            drop: (e) => {
                f(e.rule, l, !0);
            }
        });
    if (
        (i.useLayoutEffect(
            () => (
                R(S),
                Z(D(E)),
                () => {
                    (R(null), D(null));
                }
            ),
            [R, D, Z]
        ),
        i.useEffect(() => {
            '' !== t.value && '' === T && w((0, p.eK)(t.value));
        }, [t.value, T]),
        null == n)
    )
        return null;
    let A = '' !== t.value ? t.value : t.id;
    return (0, r.jsx)('div', {
        ref: E,
        className: a()(y.draggableInputContainer, { [y.dragging]: x }),
        'data-dnd-name': A,
        children: (0, r.jsxs)('div', {
            className: y.inputWrapper,
            children: [
                (0, r.jsx)(m.P3F, {
                    onMouseDown: () => j(l),
                    children: (0, r.jsx)(h.ZP, {
                        innerClassName: y.rulesTextAreaInput,
                        type: g.Ie.RULES_INPUT,
                        textValue: T,
                        richValue: P,
                        channel: n,
                        placeholder: O.intl.string(O.t['BRkD4+']),
                        focused: b,
                        onChange: (e, n, r) => {
                            let i = N ? t.value : n;
                            (i.length > v.fn && (i = i.slice(0, v.fn)),
                                n !== i && ((n = i), (r = (0, p.JM)(i))),
                                s(n),
                                w({
                                    textValue: n,
                                    richValue: r
                                }));
                        },
                        onKeyDown: o,
                        canMentionChannels: _,
                        canMentionRoles: _,
                        maxCharacterCount: v.fn,
                        onSubmit: () =>
                            Promise.resolve({
                                shouldClear: !1,
                                shouldRefocus: !0
                            })
                    })
                }),
                (0, r.jsx)('div', {
                    className: y.clearButton,
                    children: (0, r.jsx)(m.hU, {
                        size: 'sm',
                        variant: 'icon-only',
                        icon: m.k$p,
                        'aria-label': O.intl.string(O.t.VkKicX),
                        onClick: u
                    })
                }),
                (0, r.jsx)('div', {
                    ref: S,
                    className: y.dragContainer,
                    'data-dnd-name': A,
                    children:
                        C &&
                        (0, r.jsx)(m.Vni, {
                            size: 'xs',
                            color: 'currentColor',
                            className: y.dragIcon
                        })
                })
            ]
        })
    });
}
function S(e) {
    let { rules: t, setRules: n, guild: l, disabled: a } = e,
        s = l.rulesChannelId,
        c = l.features.has(_.oNc.PREVIEW_ENABLED),
        d = (0, u.e7)([f.Z], () => (null != s ? f.Z.getChannel(s) : null)),
        g = (0, u.e7)([x.ZP], () => x.ZP.getDefaultChannel(l.id)),
        [p, h] = i.useState(null),
        [I, S] = i.useState(null),
        T = i.useCallback(
            (e) => {
                if (!a && t.length !== v.X2)
                    if (null != e && '' === t[t.length - 1].value) {
                        let r = [...t];
                        ((r[t.length - 1] = N(C({}, r[t.length - 1]), { value: e })), n(r), S(r.length - 1));
                    } else
                        (n([
                            ...t,
                            {
                                id: o()(),
                                value: null != e ? e : ''
                            }
                        ]),
                            S(t.length));
            },
            [a, t, n]
        ),
        P = i.useCallback(() => {
            a || T(void 0);
        }, [T, a]),
        w = i.useCallback(
            (e, r) => {
                if (a) return;
                let i = [...t];
                ((i[r] = N(C({}, i[r]), { value: e })), n(i));
            },
            [a, t, n]
        ),
        R = (e) => {
            if (a) return;
            let r = [...t.slice(0, e), ...t.slice(e + 1)];
            n(
                0 === r.length
                    ? [
                          {
                              id: o()(),
                              value: ''
                          }
                      ]
                    : r
            );
        },
        Z = i.useCallback(
            (e, r, i) => {
                if (a || null == t) return;
                let l = t.indexOf(e);
                if (null != r && r !== l) {
                    let i = [...t];
                    (i.splice(l, 1), i.splice(r, 0, e), n(i));
                }
                i ? null !== p && h(null) : r !== p && h(r);
            },
            [a, p, t, n]
        ),
        D = t.length === v.X2,
        A = i.useMemo(() => {
            let e = D ? O.intl.formatToPlainString(O.t.tU718P, { number: v.X2 }) : void 0;
            return [
                {
                    text: O.intl.string(O.t.DXq2oa),
                    onClick: () => T(O.intl.string(O.t.XudkSk)),
                    disabled: D || a,
                    tooltipText: e
                },
                {
                    text: O.intl.string(O.t.nSqTjI),
                    onClick: () => T(O.intl.string(O.t.np91jI)),
                    disabled: D || a,
                    tooltipText: e
                },
                {
                    text: O.intl.string(O.t.AtRxsL),
                    onClick: () => T(O.intl.string(O.t.PNIDDA)),
                    disabled: D || a,
                    tooltipText: e
                },
                {
                    text: O.intl.string(O.t['0K5NJi']),
                    onClick: () => T(O.intl.string(O.t.HolIDw)),
                    disabled: D || a,
                    tooltipText: e
                }
            ];
        }, [T, a, D]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)('div', {
                className: y.rulesContainer,
                children: t.map((e, n) =>
                    (0, r.jsx)(
                        E,
                        {
                            rulesChannel: null != d ? d : g,
                            rule: e,
                            index: n,
                            onChange: (e) => w(e, n),
                            onClear: () => R(n),
                            onRuleReorder: Z,
                            isDropHovered: n === p,
                            focused: n === I,
                            onFocus: S,
                            previewEnabled: null == c || c,
                            isDragEnabled: !a && t.length > 1,
                            disabled: a
                        },
                        e.id
                    )
                )
            }),
            !D &&
                (0, r.jsx)(b.A, {
                    text: O.intl.string(O.t.Cq5Jub),
                    onClick: P,
                    disabled: a
                }),
            (0, r.jsx)(m.X6q, {
                variant: 'text-xs/bold',
                color: 'text-muted',
                className: y.exampleRulesTitle,
                children: O.intl.string(O.t.XHWj8f)
            }),
            (0, r.jsx)(j.j, {
                pills: A,
                pillClassName: y.pill
            })
        ]
    });
}
