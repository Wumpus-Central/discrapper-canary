n.d(t, { k: () => S }), n(47120);
var r = n(200651),
    i = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(97613),
    o = n.n(l),
    c = n(999153),
    d = n(584922),
    u = n(442837),
    m = n(481060),
    g = n(541716),
    p = n(752305),
    h = n(893718),
    f = n(592125),
    b = n(984933),
    x = n(540457),
    j = n(681460),
    N = n(592286),
    _ = n(981631),
    v = n(388032),
    C = n(350612);
function O(e) {
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
function y(e, t) {
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
    let { rule: t, rulesChannel: n, index: s, onChange: l, onKeyDown: o, onClear: u, onRuleReorder: f, isDropHovered: b, focused: x, onFocus: j, previewEnabled: _, isDragEnabled: O } = e,
        y = i.useRef(null),
        E = i.useRef(null),
        [{ textValue: S, richValue: T }, P] = i.useState((0, p.eK)(t.value)),
        [, w, R] = (0, c.c)({
            type: I,
            item: {
                rule: t,
                index: s
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
                    i = null == (n = y.current) ? void 0 : n.getBoundingClientRect(),
                    a = t.getClientOffset();
                if (null == i || null == a) return;
                let l = (i.bottom - i.top) / 2,
                    o = a.y - i.top;
                (r < s && o < l) || (r > s && o > l) || f(e.rule, s, !1);
            },
            drop: (e) => {
                f(e.rule, s, !0);
            }
        });
    if (
        (i.useLayoutEffect(
            () => (
                w(E),
                R(Z(y)),
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
        ref: y,
        className: a()(C.draggableInputContainer, { [C.dragging]: b }),
        'data-dnd-name': D,
        children: (0, r.jsxs)('div', {
            className: C.inputWrapper,
            children: [
                (0, r.jsx)(m.P3F, {
                    onMouseDown: () => j(s),
                    children: (0, r.jsx)(h.Z, {
                        innerClassName: C.rulesTextAreaInput,
                        type: g.Ie.RULES_INPUT,
                        textValue: S,
                        richValue: T,
                        channel: n,
                        placeholder: v.NW.string(v.t['BRkD4+']),
                        focused: x,
                        onChange: (e, t, n) => {
                            let r = t;
                            r.length > N.fn && (r = r.slice(0, N.fn)),
                                t !== r && ((t = r), (n = (0, p.JM)(r))),
                                l(t),
                                P({
                                    textValue: t,
                                    richValue: n
                                });
                        },
                        onKeyDown: o,
                        canMentionChannels: _,
                        canMentionRoles: _,
                        maxCharacterCount: N.fn,
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
                        O &&
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
    let { rules: t, setRules: n, guild: s } = e,
        a = s.rulesChannelId,
        l = s.hasFeature(_.oNc.PREVIEW_ENABLED),
        c = (0, u.e7)([f.Z], () => (null != a ? f.Z.getChannel(a) : null)),
        d = (0, u.e7)([b.ZP], () => b.ZP.getDefaultChannel(s.id)),
        [g, p] = i.useState(null),
        [h, I] = i.useState(null),
        S = i.useCallback(
            (e) => {
                if (t.length !== N.X2)
                    if (null != e && '' === t[t.length - 1].value) {
                        let r = [...t];
                        (r[t.length - 1] = y(O({}, r[t.length - 1]), { value: e })), n(r), I(r.length - 1);
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
            (i[r] = y(O({}, i[r]), { value: e })), n(i);
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
                let s = t.indexOf(e);
                if (null != r && r !== s) {
                    let i = [...t];
                    i.splice(s, 1), i.splice(r, 0, e), n(i);
                }
                i ? null !== g && p(null) : r !== g && p(r);
            },
            [g, t, n]
        ),
        Z = t.length === N.X2,
        D = i.useMemo(() => {
            let e = Z ? v.NW.formatToPlainString(v.t.tU718P, { number: N.X2 }) : void 0;
            return [
                {
                    text: v.NW.string(v.t.DXq2oa),
                    onClick: () => S(v.NW.string(v.t.XudkSk)),
                    disabled: Z,
                    tooltipText: e
                },
                {
                    text: v.NW.string(v.t.nSqTjI),
                    onClick: () => S(v.NW.string(v.t.np91jI)),
                    disabled: Z,
                    tooltipText: e
                },
                {
                    text: v.NW.string(v.t.AtRxsL),
                    onClick: () => S(v.NW.string(v.t.PNIDDA)),
                    disabled: Z,
                    tooltipText: e
                },
                {
                    text: v.NW.string(v.t['0K5NJi']),
                    onClick: () => S(v.NW.string(v.t.HolIDw)),
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
                            previewEnabled: null == l || l,
                            isDragEnabled: t.length > 1
                        },
                        e.id
                    )
                )
            }),
            !Z &&
                (0, r.jsx)(x.A, {
                    text: v.NW.string(v.t.Cq5Jub),
                    onClick: T
                }),
            (0, r.jsx)(m.X6q, {
                variant: 'text-xs/bold',
                color: 'text-muted',
                className: C.exampleRulesTitle,
                children: v.NW.string(v.t.XHWj8f)
            }),
            (0, r.jsx)(j.j, {
                pills: D,
                pillClassName: C.pill
            })
        ]
    });
}
