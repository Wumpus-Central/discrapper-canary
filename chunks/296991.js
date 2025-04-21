n.d(t, { k: () => S }), n(388685);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    s = n.n(l),
    a = n(97613),
    o = n.n(a),
    c = n(999153),
    d = n(584922),
    u = n(442837),
    m = n(481060),
    g = n(541716),
    p = n(752305),
    h = n(893718),
    f = n(592125),
    x = n(984933),
    b = n(540457),
    j = n(681460),
    _ = n(592286),
    v = n(981631),
    O = n(388032),
    C = n(350612);
function y(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
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
    let { rule: t, rulesChannel: n, index: l, onChange: a, onKeyDown: o, onClear: u, onRuleReorder: f, isDropHovered: x, focused: b, onFocus: j, previewEnabled: v, isDragEnabled: y } = e,
        N = i.useRef(null),
        E = i.useRef(null),
        [{ textValue: S, richValue: T }, P] = i.useState((0, p.eK)(t.value)),
        [, w, R] = (0, c.c)({
            type: I,
            item: {
                rule: t,
                index: l
            },
            end: (e, t) => {
                null == e || t.didDrop() || f(e.rule, null, !0);
            }
        }),
        [, Z] = (0, d.L)({
            accept: I,
            hover: (e, t) => {
                var n;
                let { index: r } = e,
                    i = null == (n = N.current) ? void 0 : n.getBoundingClientRect(),
                    s = t.getClientOffset();
                if (null == i || null == s) return;
                let a = (i.bottom - i.top) / 2,
                    o = s.y - i.top;
                (r < l && o < a) || (r > l && o > a) || f(e.rule, l, !1);
            },
            drop: (e) => {
                f(e.rule, l, !0);
            }
        });
    if (
        (i.useLayoutEffect(
            () => (
                w(E),
                R(Z(N)),
                () => {
                    w(null), Z(null);
                }
            ),
            [w, Z, R]
        ),
        i.useEffect(() => {
            '' !== t.value && '' === S && P((0, p.eK)(t.value));
        }, [t.value, S]),
        null == n)
    )
        return null;
    let D = '' !== t.value ? t.value : t.id;
    return (0, r.jsx)('div', {
        ref: N,
        className: s()(C.draggableInputContainer, { [C.dragging]: x }),
        'data-dnd-name': D,
        children: (0, r.jsxs)('div', {
            className: C.inputWrapper,
            children: [
                (0, r.jsx)(m.P3F, {
                    onMouseDown: () => j(l),
                    children: (0, r.jsx)(h.Z, {
                        innerClassName: C.rulesTextAreaInput,
                        type: g.Ie.RULES_INPUT,
                        textValue: S,
                        richValue: T,
                        channel: n,
                        placeholder: O.intl.string(O.t['BRkD4+']),
                        focused: b,
                        onChange: (e, t, n) => {
                            let r = t;
                            r.length > _.fn && (r = r.slice(0, _.fn)),
                                t !== r && ((t = r), (n = (0, p.JM)(r))),
                                a(t),
                                P({
                                    textValue: t,
                                    richValue: n
                                });
                        },
                        onKeyDown: o,
                        canMentionChannels: v,
                        canMentionRoles: v,
                        maxCharacterCount: _.fn,
                        onSubmit: () =>
                            Promise.resolve({
                                shouldClear: !1,
                                shouldRefocus: !0
                            })
                    })
                }),
                (0, r.jsx)(m.zxk, {
                    className: C.clearButton,
                    onClick: u,
                    look: m.zxk.Looks.BLANK,
                    size: m.zxk.Sizes.NONE,
                    children: (0, r.jsx)(m.k$p, {
                        size: 'md',
                        color: 'currentColor',
                        className: C.clearIcon
                    })
                }),
                (0, r.jsx)('div', {
                    ref: E,
                    className: C.dragContainer,
                    'data-dnd-name': D,
                    children:
                        y &&
                        (0, r.jsx)(m.Vni, {
                            size: 'xs',
                            color: 'currentColor',
                            className: C.dragIcon
                        })
                })
            ]
        })
    });
}
function S(e) {
    let { rules: t, setRules: n, guild: l } = e,
        s = l.rulesChannelId,
        a = l.hasFeature(v.oNc.PREVIEW_ENABLED),
        c = (0, u.e7)([f.Z], () => (null != s ? f.Z.getChannel(s) : null)),
        d = (0, u.e7)([x.ZP], () => x.ZP.getDefaultChannel(l.id)),
        [g, p] = i.useState(null),
        [h, I] = i.useState(null),
        S = i.useCallback(
            (e) => {
                if (t.length !== _.X2)
                    if (null != e && '' === t[t.length - 1].value) {
                        let r = [...t];
                        (r[t.length - 1] = N(y({}, r[t.length - 1]), { value: e })), n(r), I(r.length - 1);
                    } else
                        n([
                            ...t,
                            {
                                id: o()(),
                                value: null != e ? e : ''
                            }
                        ]),
                            I(t.length);
            },
            [t, n]
        ),
        T = i.useCallback(() => {
            S(void 0);
        }, [S]),
        P = (e, r) => {
            let i = [...t];
            (i[r] = N(y({}, i[r]), { value: e })), n(i);
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
                    i.splice(l, 1), i.splice(r, 0, e), n(i);
                }
                i ? null !== g && p(null) : r !== g && p(r);
            },
            [g, t, n]
        ),
        Z = t.length === _.X2,
        D = i.useMemo(() => {
            let e = Z ? O.intl.formatToPlainString(O.t.tU718P, { number: _.X2 }) : void 0;
            return [
                {
                    text: O.intl.string(O.t.DXq2oa),
                    onClick: () => S(O.intl.string(O.t.XudkSk)),
                    disabled: Z,
                    tooltipText: e
                },
                {
                    text: O.intl.string(O.t.nSqTjI),
                    onClick: () => S(O.intl.string(O.t.np91jI)),
                    disabled: Z,
                    tooltipText: e
                },
                {
                    text: O.intl.string(O.t.AtRxsL),
                    onClick: () => S(O.intl.string(O.t.PNIDDA)),
                    disabled: Z,
                    tooltipText: e
                },
                {
                    text: O.intl.string(O.t['0K5NJi']),
                    onClick: () => S(O.intl.string(O.t.HolIDw)),
                    disabled: Z,
                    tooltipText: e
                }
            ];
        }, [S, Z]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)('div', {
                className: C.rulesContainer,
                children: t.map((e, n) =>
                    (0, r.jsx)(
                        E,
                        {
                            rulesChannel: null != c ? c : d,
                            rule: e,
                            index: n,
                            onChange: (e) => P(e, n),
                            onClear: () => w(n),
                            onRuleReorder: R,
                            isDropHovered: n === g,
                            focused: n === h,
                            onFocus: I,
                            previewEnabled: null == a || a,
                            isDragEnabled: t.length > 1
                        },
                        e.id
                    )
                )
            }),
            !Z &&
                (0, r.jsx)(b.A, {
                    text: O.intl.string(O.t.Cq5Jub),
                    onClick: T
                }),
            (0, r.jsx)(m.X6q, {
                variant: 'text-xs/bold',
                color: 'text-muted',
                className: C.exampleRulesTitle,
                children: O.intl.string(O.t.XHWj8f)
            }),
            (0, r.jsx)(j.j, {
                pills: D,
                pillClassName: C.pill
            })
        ]
    });
}
