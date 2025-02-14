n.d(t, { k: () => T }), n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    s = n.n(l),
    a = n(97613),
    o = n.n(a),
    c = n(999153),
    d = n(584922),
    u = n(442837),
    m = n(481060),
    h = n(541716),
    g = n(752305),
    x = n(893718),
    p = n(592125),
    _ = n(984933),
    C = n(540457),
    f = n(681460),
    v = n(592286),
    N = n(981631),
    j = n(388032),
    I = n(765622);
let E = 'RULE';
function b(e) {
    let { rule: t, rulesChannel: n, index: l, onChange: a, onKeyDown: o, onClear: u, onRuleReorder: p, isDropHovered: _, focused: C, onFocus: f, previewEnabled: N, isDragEnabled: b } = e,
        T = r.useRef(null),
        S = r.useRef(null),
        [{ textValue: R, richValue: Z }, y] = r.useState((0, g.eK)(t.value)),
        [, A, L] = (0, c.c)({
            type: E,
            item: {
                rule: t,
                index: l
            },
            end: (e, t) => {
                null == e || t.didDrop() || p(e.rule, null, !0);
            }
        }),
        [, D] = (0, d.L)({
            accept: E,
            hover: (e, t) => {
                var n;
                let { index: i } = e,
                    r = null === (n = T.current) || void 0 === n ? void 0 : n.getBoundingClientRect(),
                    s = t.getClientOffset();
                if (null == r || null == s) return;
                let a = (r.bottom - r.top) / 2,
                    o = s.y - r.top;
                (i < l && o < a) || (i > l && o > a) || p(e.rule, l, !1);
            },
            drop: (e) => {
                p(e.rule, l, !0);
            }
        });
    if (
        (r.useLayoutEffect(
            () => (
                A(S),
                L(D(T)),
                () => {
                    A(null), D(null);
                }
            ),
            [A, D, L]
        ),
        r.useEffect(() => {
            '' !== t.value && '' === R && y((0, g.eK)(t.value));
        }, [t.value, R]),
        null == n)
    )
        return null;
    let O = '' !== t.value ? t.value : t.id;
    return (0, i.jsx)('div', {
        ref: T,
        className: s()(I.draggableInputContainer, { [I.dragging]: _ }),
        'data-dnd-name': O,
        children: (0, i.jsxs)('div', {
            className: I.inputWrapper,
            children: [
                (0, i.jsx)(m.P3F, {
                    onMouseDown: () => f(l),
                    children: (0, i.jsx)(x.Z, {
                        innerClassName: I.rulesTextAreaInput,
                        type: h.Ie.RULES_INPUT,
                        textValue: R,
                        richValue: Z,
                        channel: n,
                        placeholder: j.intl.string(j.t['BRkD4+']),
                        focused: C,
                        onChange: (e, t, n) => {
                            let i = t;
                            i.length > v.fn && (i = i.slice(0, v.fn)),
                                t !== i && ((t = i), (n = (0, g.JM)(i))),
                                a(t),
                                y({
                                    textValue: t,
                                    richValue: n
                                });
                        },
                        onKeyDown: o,
                        canMentionChannels: N,
                        canMentionRoles: N,
                        maxCharacterCount: v.fn,
                        onSubmit: () =>
                            Promise.resolve({
                                shouldClear: !1,
                                shouldRefocus: !0
                            })
                    })
                }),
                (0, i.jsx)(m.zxk, {
                    className: I.clearButton,
                    onClick: u,
                    look: m.zxk.Looks.BLANK,
                    size: m.zxk.Sizes.NONE,
                    children: (0, i.jsx)(m.k$p, {
                        size: 'md',
                        color: 'currentColor',
                        className: I.clearIcon
                    })
                }),
                (0, i.jsx)('div', {
                    ref: S,
                    className: I.dragContainer,
                    'data-dnd-name': O,
                    children:
                        b &&
                        (0, i.jsx)(m.Vni, {
                            size: 'xs',
                            color: 'currentColor',
                            className: I.dragIcon
                        })
                })
            ]
        })
    });
}
function T(e) {
    let { rules: t, setRules: n, guild: l } = e,
        s = l.rulesChannelId,
        a = l.hasFeature(N.oNc.PREVIEW_ENABLED),
        c = (0, u.e7)([p.Z], () => (null != s ? p.Z.getChannel(s) : null)),
        d = (0, u.e7)([_.ZP], () => _.ZP.getDefaultChannel(l.id)),
        [h, g] = r.useState(null),
        [x, E] = r.useState(null),
        T = r.useCallback(
            (e) => {
                if (t.length !== v.X2) {
                    if (null != e && '' === t[t.length - 1].value) {
                        let i = [...t];
                        (i[t.length - 1] = {
                            ...i[t.length - 1],
                            value: e
                        }),
                            n(i),
                            E(i.length - 1);
                    } else
                        n([
                            ...t,
                            {
                                id: o()(),
                                value: null != e ? e : ''
                            }
                        ]),
                            E(t.length);
                }
            },
            [t, n]
        ),
        S = r.useCallback(() => {
            T(void 0);
        }, [T]),
        R = (e, i) => {
            let r = [...t];
            (r[i] = {
                ...r[i],
                value: e
            }),
                n(r);
        },
        Z = (e) => {
            let i = [...t.slice(0, e), ...t.slice(e + 1)];
            n(
                0 === i.length
                    ? [
                          {
                              id: o()(),
                              value: ''
                          }
                      ]
                    : i
            );
        },
        y = r.useCallback(
            (e, i, r) => {
                if (null == t) return;
                let l = t.indexOf(e);
                if (null != i && i !== l) {
                    let r = [...t];
                    r.splice(l, 1), r.splice(i, 0, e), n(r);
                }
                r ? null !== h && g(null) : i !== h && g(i);
            },
            [h, t, n]
        ),
        A = t.length === v.X2,
        L = r.useMemo(() => {
            let e = A ? j.intl.formatToPlainString(j.t.tU718P, { number: v.X2 }) : void 0;
            return [
                {
                    text: j.intl.string(j.t.DXq2oa),
                    onClick: () => T(j.intl.string(j.t.XudkSk)),
                    disabled: A,
                    tooltipText: e
                },
                {
                    text: j.intl.string(j.t.nSqTjI),
                    onClick: () => T(j.intl.string(j.t.np91jI)),
                    disabled: A,
                    tooltipText: e
                },
                {
                    text: j.intl.string(j.t.AtRxsL),
                    onClick: () => T(j.intl.string(j.t.PNIDDA)),
                    disabled: A,
                    tooltipText: e
                },
                {
                    text: j.intl.string(j.t['0K5NJi']),
                    onClick: () => T(j.intl.string(j.t.HolIDw)),
                    disabled: A,
                    tooltipText: e
                }
            ];
        }, [T, A]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)('div', {
                className: I.rulesContainer,
                children: t.map((e, n) =>
                    (0, i.jsx)(
                        b,
                        {
                            rulesChannel: null != c ? c : d,
                            rule: e,
                            index: n,
                            onChange: (e) => R(e, n),
                            onClear: () => Z(n),
                            onRuleReorder: y,
                            isDropHovered: n === h,
                            focused: n === x,
                            onFocus: E,
                            previewEnabled: null == a || a,
                            isDragEnabled: t.length > 1
                        },
                        e.id
                    )
                )
            }),
            !A &&
                (0, i.jsx)(C.A, {
                    text: j.intl.string(j.t.Cq5Jub),
                    onClick: S
                }),
            (0, i.jsx)(m.X6q, {
                variant: 'text-xs/bold',
                color: 'text-muted',
                className: I.exampleRulesTitle,
                children: j.intl.string(j.t.XHWj8f)
            }),
            (0, i.jsx)(f.j, {
                pills: L,
                pillClassName: I.pill
            })
        ]
    });
}
