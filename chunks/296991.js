n.d(t, {
    k: function () {
        return S;
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
    _ = n(592286),
    I = n(981631),
    N = n(388032),
    T = n(163537);
let b = 'RULE';
function j(e) {
    let { rule: t, rulesChannel: n, index: l, onChange: a, onKeyDown: o, onClear: u, onRuleReorder: p, isDropHovered: f, focused: C, onFocus: v, previewEnabled: I, isDragEnabled: j } = e,
        S = r.useRef(null),
        E = r.useRef(null),
        [{ textValue: R, richValue: y }, Z] = r.useState((0, g.eK)(t.value)),
        [, A, L] = (0, c.c)({
            type: b,
            item: {
                rule: t,
                index: l
            },
            end: (e, t) => {
                null != e && !t.didDrop() && p(e.rule, null, !0);
            }
        }),
        [, D] = (0, d.L)({
            accept: b,
            hover: (e, t) => {
                var n;
                let { index: i } = e,
                    r = null === (n = S.current) || void 0 === n ? void 0 : n.getBoundingClientRect(),
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
            A(E),
            L(D(S)),
            () => {
                A(null), D(null);
            }
        ),
        [A, D, L]
    );
    if (
        (r.useEffect(() => {
            '' !== t.value && '' === R && Z((0, g.eK)(t.value));
        }, [t.value, R]),
        null == n)
    )
        return null;
    let O = '' !== t.value ? t.value : t.id;
    return (0, i.jsx)('div', {
        ref: S,
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
                        placeholder: N.intl.string(N.t['BRkD4+']),
                        focused: C,
                        onChange: (e, t, n) => {
                            let i = t;
                            i.length > _.fn && (i = i.slice(0, _.fn)),
                                t !== i && ((t = i), (n = (0, g.JM)(i))),
                                a(t),
                                Z({
                                    textValue: t,
                                    richValue: n
                                });
                        },
                        onKeyDown: o,
                        canMentionChannels: I,
                        canMentionRoles: I,
                        maxCharacterCount: _.fn,
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
                    ref: E,
                    className: T.dragContainer,
                    'data-dnd-name': O,
                    children:
                        j &&
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
function S(e) {
    let { rules: t, setRules: n, guild: l } = e,
        s = l.rulesChannelId,
        a = l.hasFeature(I.oNc.PREVIEW_ENABLED),
        c = (0, u.e7)([p.Z], () => (null != s ? p.Z.getChannel(s) : null)),
        d = (0, u.e7)([f.ZP], () => f.ZP.getDefaultChannel(l.id)),
        [h, g] = r.useState(null),
        [x, b] = r.useState(0),
        S = r.useCallback(
            (e) => {
                if (t.length !== _.X2) {
                    if (null != e && '' === t[t.length - 1].value) {
                        let i = [...t];
                        (i[t.length - 1] = {
                            ...i[t.length - 1],
                            value: e
                        }),
                            n(i),
                            b(i.length - 1);
                    } else
                        n([
                            ...t,
                            {
                                id: o()(),
                                value: null != e ? e : ''
                            }
                        ]),
                            b(t.length);
                }
            },
            [t, n]
        ),
        E = r.useCallback(() => {
            S(void 0);
        }, [S]),
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
        Z = r.useCallback(
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
        A = t.length === _.X2,
        L = r.useMemo(() => {
            let e = A ? N.intl.formatToPlainString(N.t.tU718P, { number: _.X2 }) : void 0;
            return [
                {
                    text: N.intl.string(N.t.DXq2oa),
                    onClick: () => S(N.intl.string(N.t.XudkSk)),
                    disabled: A,
                    tooltipText: e
                },
                {
                    text: N.intl.string(N.t.nSqTjI),
                    onClick: () => S(N.intl.string(N.t.np91jI)),
                    disabled: A,
                    tooltipText: e
                },
                {
                    text: N.intl.string(N.t.AtRxsL),
                    onClick: () => S(N.intl.string(N.t.PNIDDA)),
                    disabled: A,
                    tooltipText: e
                },
                {
                    text: N.intl.string(N.t['0K5NJi']),
                    onClick: () => S(N.intl.string(N.t.HolIDw)),
                    disabled: A,
                    tooltipText: e
                }
            ];
        }, [S, A]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)('div', {
                className: T.rulesContainer,
                children: t.map((e, n) =>
                    (0, i.jsx)(
                        j,
                        {
                            rulesChannel: null != c ? c : d,
                            rule: e,
                            index: n,
                            onChange: (e) => R(e, n),
                            onClear: () => y(n),
                            onRuleReorder: Z,
                            isDropHovered: n === h,
                            focused: n === x,
                            onFocus: b,
                            previewEnabled: null == a || a,
                            isDragEnabled: t.length > 1
                        },
                        e.id
                    )
                )
            }),
            !A &&
                (0, i.jsx)(C.A, {
                    text: N.intl.string(N.t.Cq5Jub),
                    onClick: E
                }),
            (0, i.jsx)(m.Heading, {
                variant: 'text-xs/bold',
                color: 'text-muted',
                className: T.exampleRulesTitle,
                children: N.intl.string(N.t.XHWj8f)
            }),
            (0, i.jsx)(v.j, {
                pills: L,
                pillClassName: T.pill
            })
        ]
    });
}
