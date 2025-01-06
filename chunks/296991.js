n.d(t, {
    k: function () {
        return T;
    }
}),
    n(47120);
var l = n(200651),
    a = n(192379),
    i = n(120356),
    r = n.n(i),
    o = n(97613),
    s = n.n(o),
    u = n(999153),
    d = n(584922),
    c = n(442837),
    f = n(481060),
    g = n(541716),
    p = n(752305),
    x = n(893718),
    m = n(592125),
    C = n(984933),
    h = n(540457),
    b = n(681460),
    v = n(592286),
    _ = n(981631),
    I = n(388032),
    j = n(163537);
let k = 'RULE';
function N(e) {
    let { rule: t, rulesChannel: n, index: i, onChange: o, onKeyDown: s, onClear: c, onRuleReorder: m, isDropHovered: C, focused: h, onFocus: b, previewEnabled: _, isDragEnabled: N } = e,
        T = a.useRef(null),
        B = a.useRef(null),
        [{ textValue: R, richValue: S }, E] = a.useState((0, p.eK)(t.value)),
        [, y, D] = (0, u.c)({
            type: k,
            item: {
                rule: t,
                index: i
            },
            end: (e, t) => {
                null != e && !t.didDrop() && m(e.rule, null, !0);
            }
        }),
        [, L] = (0, d.L)({
            accept: k,
            hover: (e, t) => {
                var n;
                let { index: l } = e,
                    a = null === (n = T.current) || void 0 === n ? void 0 : n.getBoundingClientRect(),
                    r = t.getClientOffset();
                if (null == a || null == r) return;
                let o = (a.bottom - a.top) / 2,
                    s = r.y - a.top;
                (!(l < i) || !(s < o)) && (!(l > i) || !(s > o)) && m(e.rule, i, !1);
            },
            drop: (e) => {
                m(e.rule, i, !0);
            }
        });
    a.useLayoutEffect(
        () => (
            y(B),
            D(L(T)),
            () => {
                y(null), L(null);
            }
        ),
        [y, L, D]
    );
    if (
        (a.useEffect(() => {
            '' !== t.value && '' === R && E((0, p.eK)(t.value));
        }, [t.value, R]),
        null == n)
    )
        return null;
    let A = '' !== t.value ? t.value : t.id;
    return (0, l.jsx)('div', {
        ref: T,
        className: r()(j.draggableInputContainer, { [j.dragging]: C }),
        'data-dnd-name': A,
        children: (0, l.jsxs)('div', {
            className: j.inputWrapper,
            children: [
                (0, l.jsx)(f.Clickable, {
                    onMouseDown: () => b(i),
                    children: (0, l.jsx)(x.Z, {
                        innerClassName: j.rulesTextAreaInput,
                        type: g.Ie.RULES_INPUT,
                        textValue: R,
                        richValue: S,
                        channel: n,
                        placeholder: I.intl.string(I.t['BRkD4+']),
                        focused: h,
                        onChange: (e, t, n) => {
                            let l = t;
                            l.length > v.fn && (l = l.slice(0, v.fn)),
                                t !== l && ((t = l), (n = (0, p.JM)(l))),
                                o(t),
                                E({
                                    textValue: t,
                                    richValue: n
                                });
                        },
                        onKeyDown: s,
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
                (0, l.jsx)(f.Button, {
                    className: j.clearButton,
                    onClick: c,
                    look: f.Button.Looks.BLANK,
                    size: f.Button.Sizes.NONE,
                    children: (0, l.jsx)(f.CircleXIcon, {
                        size: 'md',
                        color: 'currentColor',
                        className: j.clearIcon
                    })
                }),
                (0, l.jsx)('div', {
                    ref: B,
                    className: j.dragContainer,
                    'data-dnd-name': A,
                    children:
                        N &&
                        (0, l.jsx)(f.DragIcon, {
                            size: 'xs',
                            color: 'currentColor',
                            className: j.dragIcon
                        })
                })
            ]
        })
    });
}
function T(e) {
    let { rules: t, setRules: n, guild: i } = e,
        r = i.rulesChannelId,
        o = i.hasFeature(_.oNc.PREVIEW_ENABLED),
        u = (0, c.e7)([m.Z], () => (null != r ? m.Z.getChannel(r) : null)),
        d = (0, c.e7)([C.ZP], () => C.ZP.getDefaultChannel(i.id)),
        [g, p] = a.useState(null),
        [x, k] = a.useState(0),
        T = a.useCallback(
            (e) => {
                if (t.length !== v.X2) {
                    if (null != e && '' === t[t.length - 1].value) {
                        let l = [...t];
                        (l[t.length - 1] = {
                            ...l[t.length - 1],
                            value: e
                        }),
                            n(l),
                            k(l.length - 1);
                    } else
                        n([
                            ...t,
                            {
                                id: s()(),
                                value: null != e ? e : ''
                            }
                        ]),
                            k(t.length);
                }
            },
            [t, n]
        ),
        B = a.useCallback(() => {
            T(void 0);
        }, [T]),
        R = (e, l) => {
            let a = [...t];
            (a[l] = {
                ...a[l],
                value: e
            }),
                n(a);
        },
        S = (e) => {
            let l = [...t.slice(0, e), ...t.slice(e + 1)];
            n(
                0 === l.length
                    ? [
                          {
                              id: s()(),
                              value: ''
                          }
                      ]
                    : l
            );
        },
        E = a.useCallback(
            (e, l, a) => {
                if (null == t) return;
                let i = t.indexOf(e);
                if (null != l && l !== i) {
                    let a = [...t];
                    a.splice(i, 1), a.splice(l, 0, e), n(a);
                }
                a ? null !== g && p(null) : l !== g && p(l);
            },
            [g, t, n]
        ),
        y = t.length === v.X2,
        D = a.useMemo(() => {
            let e = y ? I.intl.formatToPlainString(I.t.tU718P, { number: v.X2 }) : void 0;
            return [
                {
                    text: I.intl.string(I.t.DXq2oa),
                    onClick: () => T(I.intl.string(I.t.XudkSk)),
                    disabled: y,
                    tooltipText: e
                },
                {
                    text: I.intl.string(I.t.nSqTjI),
                    onClick: () => T(I.intl.string(I.t.np91jI)),
                    disabled: y,
                    tooltipText: e
                },
                {
                    text: I.intl.string(I.t.AtRxsL),
                    onClick: () => T(I.intl.string(I.t.PNIDDA)),
                    disabled: y,
                    tooltipText: e
                },
                {
                    text: I.intl.string(I.t['0K5NJi']),
                    onClick: () => T(I.intl.string(I.t.HolIDw)),
                    disabled: y,
                    tooltipText: e
                }
            ];
        }, [T, y]);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)('div', {
                className: j.rulesContainer,
                children: t.map((e, n) =>
                    (0, l.jsx)(
                        N,
                        {
                            rulesChannel: null != u ? u : d,
                            rule: e,
                            index: n,
                            onChange: (e) => R(e, n),
                            onClear: () => S(n),
                            onRuleReorder: E,
                            isDropHovered: n === g,
                            focused: n === x,
                            onFocus: k,
                            previewEnabled: null == o || o,
                            isDragEnabled: t.length > 1
                        },
                        e.id
                    )
                )
            }),
            !y &&
                (0, l.jsx)(h.A, {
                    text: I.intl.string(I.t.Cq5Jub),
                    onClick: B
                }),
            (0, l.jsx)(f.Heading, {
                variant: 'text-xs/bold',
                color: 'text-muted',
                className: j.exampleRulesTitle,
                children: I.intl.string(I.t.XHWj8f)
            }),
            (0, l.jsx)(b.j, {
                pills: D,
                pillClassName: j.pill
            })
        ]
    });
}
