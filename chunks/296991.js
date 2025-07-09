(n.d(t, { k: () => T }), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    s = n.n(l),
    a = n(97613),
    o = n.n(a),
    c = n(562075),
    d = n(539202),
    u = n(442837),
    m = n(755721),
    g = n(481060),
    p = n(541716),
    f = n(752305),
    h = n(893718),
    x = n(592125),
    b = n(984933),
    j = n(540457),
    _ = n(681460),
    v = n(592286),
    O = n(981631),
    C = n(388032),
    y = n(350612);
function N(e) {
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
function I(e, t) {
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
let E = 'RULE';
function S(e) {
    let { rule: t, rulesChannel: n, index: l, onChange: a, onKeyDown: o, onClear: u, onRuleReorder: x, isDropHovered: b, focused: j, onFocus: _, previewEnabled: O, isDragEnabled: N } = e,
        I = i.useRef(null),
        S = i.useRef(null),
        [{ textValue: T, richValue: P }, w] = i.useState((0, f.eK)(t.value)),
        [, R, Z] = (0, c.c)({
            type: E,
            item: {
                rule: t,
                index: l
            },
            end: (e, t) => {
                null == e || t.didDrop() || x(e.rule, null, !0);
            }
        }),
        [, D] = (0, d.L)({
            accept: E,
            hover: (e, t) => {
                var n;
                let { index: r } = e,
                    i = null == (n = I.current) ? void 0 : n.getBoundingClientRect(),
                    s = t.getClientOffset();
                if (null == i || null == s) return;
                let a = (i.bottom - i.top) / 2,
                    o = s.y - i.top;
                (r < l && o < a) || (r > l && o > a) || x(e.rule, l, !1);
            },
            drop: (e) => {
                x(e.rule, l, !0);
            }
        });
    if (
        (i.useLayoutEffect(
            () => (
                R(S),
                Z(D(I)),
                () => {
                    (R(null), D(null));
                }
            ),
            [R, D, Z]
        ),
        i.useEffect(() => {
            '' !== t.value && '' === T && w((0, f.eK)(t.value));
        }, [t.value, T]),
        null == n)
    )
        return null;
    let A = '' !== t.value ? t.value : t.id;
    return (0, r.jsx)('div', {
        ref: I,
        className: s()(y.draggableInputContainer, { [y.dragging]: b }),
        'data-dnd-name': A,
        children: (0, r.jsxs)('div', {
            className: y.inputWrapper,
            children: [
                (0, r.jsx)(g.P3F, {
                    onMouseDown: () => _(l),
                    children: (0, r.jsx)(h.Z, {
                        innerClassName: y.rulesTextAreaInput,
                        type: p.Ie.RULES_INPUT,
                        textValue: T,
                        richValue: P,
                        channel: n,
                        placeholder: C.intl.string(C.t['BRkD4+']),
                        focused: j,
                        onChange: (e, t, n) => {
                            let r = t;
                            (r.length > v.fn && (r = r.slice(0, v.fn)),
                                t !== r && ((t = r), (n = (0, f.JM)(r))),
                                a(t),
                                w({
                                    textValue: t,
                                    richValue: n
                                }));
                        },
                        onKeyDown: o,
                        canMentionChannels: O,
                        canMentionRoles: O,
                        maxCharacterCount: v.fn,
                        onSubmit: () =>
                            Promise.resolve({
                                shouldClear: !1,
                                shouldRefocus: !0
                            })
                    })
                }),
                (0, r.jsx)(m.zx, {
                    className: y.clearButton,
                    onClick: u,
                    look: m.zx.Looks.BLANK,
                    size: m.zx.Sizes.NONE,
                    children: (0, r.jsx)(g.k$p, {
                        size: 'md',
                        color: 'currentColor',
                        className: y.clearIcon
                    })
                }),
                (0, r.jsx)('div', {
                    ref: S,
                    className: y.dragContainer,
                    'data-dnd-name': A,
                    children:
                        N &&
                        (0, r.jsx)(g.Vni, {
                            size: 'xs',
                            color: 'currentColor',
                            className: y.dragIcon
                        })
                })
            ]
        })
    });
}
function T(e) {
    let { rules: t, setRules: n, guild: l } = e,
        s = l.rulesChannelId,
        a = l.features.has(O.oNc.PREVIEW_ENABLED),
        c = (0, u.e7)([x.Z], () => (null != s ? x.Z.getChannel(s) : null)),
        d = (0, u.e7)([b.ZP], () => b.ZP.getDefaultChannel(l.id)),
        [m, p] = i.useState(null),
        [f, h] = i.useState(null),
        E = i.useCallback(
            (e) => {
                if (t.length !== v.X2)
                    if (null != e && '' === t[t.length - 1].value) {
                        let r = [...t];
                        ((r[t.length - 1] = I(N({}, r[t.length - 1]), { value: e })), n(r), h(r.length - 1));
                    } else
                        (n([
                            ...t,
                            {
                                id: o()(),
                                value: null != e ? e : ''
                            }
                        ]),
                            h(t.length));
            },
            [t, n]
        ),
        T = i.useCallback(() => {
            E(void 0);
        }, [E]),
        P = (e, r) => {
            let i = [...t];
            ((i[r] = I(N({}, i[r]), { value: e })), n(i));
        },
        w = (e) => {
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
        R = i.useCallback(
            (e, r, i) => {
                if (null == t) return;
                let l = t.indexOf(e);
                if (null != r && r !== l) {
                    let i = [...t];
                    (i.splice(l, 1), i.splice(r, 0, e), n(i));
                }
                i ? null !== m && p(null) : r !== m && p(r);
            },
            [m, t, n]
        ),
        Z = t.length === v.X2,
        D = i.useMemo(() => {
            let e = Z ? C.intl.formatToPlainString(C.t.tU718P, { number: v.X2 }) : void 0;
            return [
                {
                    text: C.intl.string(C.t.DXq2oa),
                    onClick: () => E(C.intl.string(C.t.XudkSk)),
                    disabled: Z,
                    tooltipText: e
                },
                {
                    text: C.intl.string(C.t.nSqTjI),
                    onClick: () => E(C.intl.string(C.t.np91jI)),
                    disabled: Z,
                    tooltipText: e
                },
                {
                    text: C.intl.string(C.t.AtRxsL),
                    onClick: () => E(C.intl.string(C.t.PNIDDA)),
                    disabled: Z,
                    tooltipText: e
                },
                {
                    text: C.intl.string(C.t['0K5NJi']),
                    onClick: () => E(C.intl.string(C.t.HolIDw)),
                    disabled: Z,
                    tooltipText: e
                }
            ];
        }, [E, Z]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)('div', {
                className: y.rulesContainer,
                children: t.map((e, n) =>
                    (0, r.jsx)(
                        S,
                        {
                            rulesChannel: null != c ? c : d,
                            rule: e,
                            index: n,
                            onChange: (e) => P(e, n),
                            onClear: () => w(n),
                            onRuleReorder: R,
                            isDropHovered: n === m,
                            focused: n === f,
                            onFocus: h,
                            previewEnabled: null == a || a,
                            isDragEnabled: t.length > 1
                        },
                        e.id
                    )
                )
            }),
            !Z &&
                (0, r.jsx)(j.A, {
                    text: C.intl.string(C.t.Cq5Jub),
                    onClick: T
                }),
            (0, r.jsx)(g.X6q, {
                variant: 'text-xs/bold',
                color: 'text-muted',
                className: y.exampleRulesTitle,
                children: C.intl.string(C.t.XHWj8f)
            }),
            (0, r.jsx)(_.j, {
                pills: D,
                pillClassName: y.pill
            })
        ]
    });
}
