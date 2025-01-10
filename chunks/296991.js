n.d(t, {
    k: function () {
        return E;
    }
}),
    n(47120);
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
    f = n(984933),
    C = n(540457),
    v = n(681460),
    I = n(592286),
    N = n(981631),
    _ = n(388032),
    T = n(163537);
let j = 'RULE';
function b(e) {
    let { rule: t, rulesChannel: n, index: l, onChange: a, onKeyDown: o, onClear: u, onRuleReorder: p, isDropHovered: f, focused: C, onFocus: v, previewEnabled: N, isDragEnabled: b } = e,
        E = r.useRef(null),
        S = r.useRef(null),
        [{ textValue: R, richValue: y }, A] = r.useState((0, g.eK)(t.value)),
        [, Z, L] = (0, c.c)({
            type: j,
            item: {
                rule: t,
                index: l
            },
            end: (e, t) => {
                null != e && !t.didDrop() && p(e.rule, null, !0);
            }
        }),
        [, D] = (0, d.L)({
            accept: j,
            hover: (e, t) => {
                var n;
                let { index: i } = e,
                    r = null === (n = E.current) || void 0 === n ? void 0 : n.getBoundingClientRect(),
                    s = t.getClientOffset();
                if (null == r || null == s) return;
                let a = (r.bottom - r.top) / 2,
                    o = s.y - r.top;
                (!(i < l) || !(o < a)) && (!(i > l) || !(o > a)) && p(e.rule, l, !1);
            },
            drop: (e) => {
                p(e.rule, l, !0);
            }
        });
    r.useLayoutEffect(
        () => (
            Z(S),
            L(D(E)),
            () => {
                Z(null), D(null);
            }
        ),
        [Z, D, L]
    );
    if (
        (r.useEffect(() => {
            '' !== t.value && '' === R && A((0, g.eK)(t.value));
        }, [t.value, R]),
        null == n)
    )
        return null;
    let O = '' !== t.value ? t.value : t.id;
    return (0, i.jsx)('div', {
        ref: E,
        className: s()(T.draggableInputContainer, { [T.dragging]: f }),
        'data-dnd-name': O,
        children: (0, i.jsxs)('div', {
            className: T.inputWrapper,
            children: [
                (0, i.jsx)(m.Clickable, {
                    onMouseDown: () => v(l),
                    children: (0, i.jsx)(x.Z, {
                        innerClassName: T.rulesTextAreaInput,
                        type: h.Ie.RULES_INPUT,
                        textValue: R,
                        richValue: y,
                        channel: n,
                        placeholder: _.intl.string(_.t['BRkD4+']),
                        focused: C,
                        onChange: (e, t, n) => {
                            let i = t;
                            i.length > I.fn && (i = i.slice(0, I.fn)),
                                t !== i && ((t = i), (n = (0, g.JM)(i))),
                                a(t),
                                A({
                                    textValue: t,
                                    richValue: n
                                });
                        },
                        onKeyDown: o,
                        canMentionChannels: N,
                        canMentionRoles: N,
                        maxCharacterCount: I.fn,
                        onSubmit: () =>
                            Promise.resolve({
                                shouldClear: !1,
                                shouldRefocus: !0
                            })
                    })
                }),
                (0, i.jsx)(m.Button, {
                    className: T.clearButton,
                    onClick: u,
                    look: m.Button.Looks.BLANK,
                    size: m.Button.Sizes.NONE,
                    children: (0, i.jsx)(m.CircleXIcon, {
                        size: 'md',
                        color: 'currentColor',
                        className: T.clearIcon
                    })
                }),
                (0, i.jsx)('div', {
                    ref: S,
                    className: T.dragContainer,
                    'data-dnd-name': O,
                    children:
                        b &&
                        (0, i.jsx)(m.DragIcon, {
                            size: 'xs',
                            color: 'currentColor',
                            className: T.dragIcon
                        })
                })
            ]
        })
    });
}
function E(e) {
    let { rules: t, setRules: n, guild: l } = e,
        s = l.rulesChannelId,
        a = l.hasFeature(N.oNc.PREVIEW_ENABLED),
        c = (0, u.e7)([p.Z], () => (null != s ? p.Z.getChannel(s) : null)),
        d = (0, u.e7)([f.ZP], () => f.ZP.getDefaultChannel(l.id)),
        [h, g] = r.useState(null),
        [x, j] = r.useState(null),
        E = r.useCallback(
            (e) => {
                if (t.length !== I.X2) {
                    if (null != e && '' === t[t.length - 1].value) {
                        let i = [...t];
                        (i[t.length - 1] = {
                            ...i[t.length - 1],
                            value: e
                        }),
                            n(i),
                            j(i.length - 1);
                    } else
                        n([
                            ...t,
                            {
                                id: o()(),
                                value: null != e ? e : ''
                            }
                        ]),
                            j(t.length);
                }
            },
            [t, n]
        ),
        S = r.useCallback(() => {
            E(void 0);
        }, [E]),
        R = (e, i) => {
            let r = [...t];
            (r[i] = {
                ...r[i],
                value: e
            }),
                n(r);
        },
        y = (e) => {
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
        A = r.useCallback(
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
        Z = t.length === I.X2,
        L = r.useMemo(() => {
            let e = Z ? _.intl.formatToPlainString(_.t.tU718P, { number: I.X2 }) : void 0;
            return [
                {
                    text: _.intl.string(_.t.DXq2oa),
                    onClick: () => E(_.intl.string(_.t.XudkSk)),
                    disabled: Z,
                    tooltipText: e
                },
                {
                    text: _.intl.string(_.t.nSqTjI),
                    onClick: () => E(_.intl.string(_.t.np91jI)),
                    disabled: Z,
                    tooltipText: e
                },
                {
                    text: _.intl.string(_.t.AtRxsL),
                    onClick: () => E(_.intl.string(_.t.PNIDDA)),
                    disabled: Z,
                    tooltipText: e
                },
                {
                    text: _.intl.string(_.t['0K5NJi']),
                    onClick: () => E(_.intl.string(_.t.HolIDw)),
                    disabled: Z,
                    tooltipText: e
                }
            ];
        }, [E, Z]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)('div', {
                className: T.rulesContainer,
                children: t.map((e, n) =>
                    (0, i.jsx)(
                        b,
                        {
                            rulesChannel: null != c ? c : d,
                            rule: e,
                            index: n,
                            onChange: (e) => R(e, n),
                            onClear: () => y(n),
                            onRuleReorder: A,
                            isDropHovered: n === h,
                            focused: n === x,
                            onFocus: j,
                            previewEnabled: null == a || a,
                            isDragEnabled: t.length > 1
                        },
                        e.id
                    )
                )
            }),
            !Z &&
                (0, i.jsx)(C.A, {
                    text: _.intl.string(_.t.Cq5Jub),
                    onClick: S
                }),
            (0, i.jsx)(m.Heading, {
                variant: 'text-xs/bold',
                color: 'text-muted',
                className: T.exampleRulesTitle,
                children: _.intl.string(_.t.XHWj8f)
            }),
            (0, i.jsx)(v.j, {
                pills: L,
                pillClassName: T.pill
            })
        ]
    });
}
