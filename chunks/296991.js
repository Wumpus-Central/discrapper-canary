t.d(n, {
    k: function () {
        return T;
    }
}),
    t(47120);
var l = t(200651),
    a = t(192379),
    i = t(120356),
    r = t.n(i),
    o = t(97613),
    s = t.n(o),
    u = t(999153),
    d = t(584922),
    c = t(442837),
    f = t(481060),
    g = t(541716),
    p = t(752305),
    x = t(893718),
    m = t(592125),
    C = t(984933),
    h = t(540457),
    b = t(681460),
    v = t(592286),
    _ = t(981631),
    I = t(388032),
    j = t(163537);
let k = 'RULE';
function N(e) {
    let { rule: n, rulesChannel: t, index: i, onChange: o, onKeyDown: s, onClear: c, onRuleReorder: m, isDropHovered: C, focused: h, onFocus: b, previewEnabled: _, isDragEnabled: N } = e,
        T = a.useRef(null),
        B = a.useRef(null),
        [{ textValue: R, richValue: S }, E] = a.useState((0, p.eK)(n.value)),
        [, y, D] = (0, u.c)({
            type: k,
            item: {
                rule: n,
                index: i
            },
            end: (e, n) => {
                null != e && !n.didDrop() && m(e.rule, null, !0);
            }
        }),
        [, L] = (0, d.L)({
            accept: k,
            hover: (e, n) => {
                var t;
                let { index: l } = e,
                    a = null === (t = T.current) || void 0 === t ? void 0 : t.getBoundingClientRect(),
                    r = n.getClientOffset();
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
            '' !== n.value && '' === R && E((0, p.eK)(n.value));
        }, [n.value, R]),
        null == t)
    )
        return null;
    let A = '' !== n.value ? n.value : n.id;
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
                        channel: t,
                        placeholder: I.intl.string(I.t['BRkD4+']),
                        focused: h,
                        onChange: (e, n, t) => {
                            let l = n;
                            l.length > v.fn && (l = l.slice(0, v.fn)),
                                n !== l && ((n = l), (t = (0, p.JM)(l))),
                                o(n),
                                E({
                                    textValue: n,
                                    richValue: t
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
    let { rules: n, setRules: t, guild: i } = e,
        r = i.rulesChannelId,
        o = i.hasFeature(_.oNc.PREVIEW_ENABLED),
        u = (0, c.e7)([m.Z], () => (null != r ? m.Z.getChannel(r) : null)),
        d = (0, c.e7)([C.ZP], () => C.ZP.getDefaultChannel(i.id)),
        [g, p] = a.useState(null),
        [x, k] = a.useState(null),
        T = a.useCallback(
            (e) => {
                if (n.length !== v.X2) {
                    if (null != e && '' === n[n.length - 1].value) {
                        let l = [...n];
                        (l[n.length - 1] = {
                            ...l[n.length - 1],
                            value: e
                        }),
                            t(l),
                            k(l.length - 1);
                    } else
                        t([
                            ...n,
                            {
                                id: s()(),
                                value: null != e ? e : ''
                            }
                        ]),
                            k(n.length);
                }
            },
            [n, t]
        ),
        B = a.useCallback(() => {
            T(void 0);
        }, [T]),
        R = (e, l) => {
            let a = [...n];
            (a[l] = {
                ...a[l],
                value: e
            }),
                t(a);
        },
        S = (e) => {
            let l = [...n.slice(0, e), ...n.slice(e + 1)];
            t(
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
                if (null == n) return;
                let i = n.indexOf(e);
                if (null != l && l !== i) {
                    let a = [...n];
                    a.splice(i, 1), a.splice(l, 0, e), t(a);
                }
                a ? null !== g && p(null) : l !== g && p(l);
            },
            [g, n, t]
        ),
        y = n.length === v.X2,
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
                children: n.map((e, t) =>
                    (0, l.jsx)(
                        N,
                        {
                            rulesChannel: null != u ? u : d,
                            rule: e,
                            index: t,
                            onChange: (e) => R(e, t),
                            onClear: () => S(t),
                            onRuleReorder: E,
                            isDropHovered: t === g,
                            focused: t === x,
                            onFocus: k,
                            previewEnabled: null == o || o,
                            isDragEnabled: n.length > 1
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
