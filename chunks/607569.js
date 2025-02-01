l.d(n, { default: () => I }), l(47120), l(757143);
var t = l(200651),
    a = l(192379),
    r = l(120356),
    i = l.n(r),
    o = l(999153),
    s = l(584922),
    c = l(692547),
    d = l(481060),
    u = l(881052),
    m = l(186523),
    x = l(246364),
    h = l(915509),
    g = l(592286),
    p = l(388032),
    _ = l(945330);
let b = 'MULTIPLE_CHOICE',
    C = (e) => {
        let { choice: n, index: l, onChange: r, onClear: c, onReorder: u, isDropHovered: x } = e,
            h = a.useRef(null),
            g = a.useRef(null),
            [, C, I] = (0, o.c)({
                type: b,
                item: {
                    choice: n,
                    index: l
                },
                end: (e, n) => {
                    null == e || n.didDrop() || u(e.choice, null, !0);
                }
            }),
            [, v] = (0, s.L)({
                accept: b,
                hover: (e, n) => {
                    var t;
                    let { index: a } = e,
                        r = null === (t = h.current) || void 0 === t ? void 0 : t.getBoundingClientRect(),
                        i = n.getClientOffset();
                    if (null == r || null == i) return;
                    let o = (r.bottom - r.top) / 2,
                        s = i.y - r.top;
                    (a < l && s < o) || (a > l && s > o) || u(e.choice, l, !1);
                },
                drop: (e) => {
                    u(e.choice, l, !0);
                }
            });
        return (
            a.useLayoutEffect(
                () => (
                    C(g),
                    I(v(h)),
                    () => {
                        C(null), v(null);
                    }
                ),
                [C, v, I]
            ),
            (0, t.jsxs)('div', {
                ref: h,
                className: i()(_.draggableInputContainer, { [_.dragging]: x }),
                'data-dnd-name': n,
                children: [
                    (0, t.jsx)('div', {
                        className: _.radioIconEmptyContainer,
                        children: (0, t.jsx)(m.Z, {
                            height: 20,
                            width: 20,
                            className: _.radioIconEmpty
                        })
                    }),
                    (0, t.jsxs)('div', {
                        className: _.inputWrapper,
                        children: [
                            (0, t.jsx)(d.oil, {
                                autoFocus: !0,
                                onChange: (e) => r(e),
                                placeholder: p.intl.formatToPlainString(p.t['Ep/pbG'], { index: l + 1 }),
                                value: n
                            }),
                            (0, t.jsx)(d.zxk, {
                                className: _.clearButton,
                                onClick: c,
                                look: d.zxk.Looks.BLANK,
                                size: d.zxk.Sizes.NONE,
                                children: (0, t.jsx)(d.k$p, {
                                    size: 'md',
                                    color: 'currentColor',
                                    className: _.clearIcon
                                })
                            })
                        ]
                    }),
                    (0, t.jsx)('div', {
                        ref: g,
                        className: _.dragContainer,
                        'data-dnd-name': n,
                        children: (0, t.jsx)(d.Vni, {
                            size: 'xs',
                            color: 'currentColor',
                            className: _.dragIcon
                        })
                    })
                ]
            })
        );
    },
    I = function (e) {
        var n, l;
        let { field: r, onSave: i, onClose: o } = e,
            [s, m] = a.useState(null !== (n = null == r ? void 0 : r.label) && void 0 !== n ? n : ''),
            [b, I] = a.useState(null !== (l = null == r ? void 0 : r.choices) && void 0 !== l ? l : ['']),
            [v, f] = a.useState(null),
            [j, N] = a.useState(null),
            k = (e, n) => {
                null != v && f(null);
                let l = e.replace(/(\r\n|\n|\r)/g, ' ');
                l.length > g.au && (l = l.slice(0, g.au));
                let t = [...b];
                (t[n] = l), I(t);
            },
            y = (e, n, l) => {
                if (null == b) return;
                null != v && f(null);
                let t = b.indexOf(e),
                    a = [...b];
                null != n && n !== t && (a.splice(t, 1), a.splice(n, 0, e), I(a)), l ? null !== n && N(null) : n !== j && N(n);
            },
            z = (e) => {
                null != v && f(null);
                let n = [...b.slice(0, e), ...b.slice(e + 1)];
                I(0 === n.length ? [''] : n);
            },
            E = async () => {
                null != v && f(null);
                let e = s.trim();
                if ('' === e) {
                    f(p.intl.string(p.t['G+TI4+']));
                    return;
                }
                if (0 === b.map((e) => e.trim()).filter((e) => '' !== e).length) {
                    f(p.intl.string(p.t.jZoHgI));
                    return;
                }
                let n = {
                    field_type: x.QJ.MULTIPLE_CHOICE,
                    label: e,
                    choices: b,
                    required: !0
                };
                try {
                    await i(n), o();
                } catch (e) {
                    f(new u.Hx(e).getAnyErrorMessage());
                }
            };
        return (0, t.jsxs)(h.Z, {
            ...e,
            errorText: v,
            title: p.intl.string(p.t.ooKh3t),
            onConfirm: E,
            onCancel: o,
            children: [
                (0, t.jsx)(d.oil, {
                    autoFocus: !0,
                    className: _.spacedItem,
                    onChange: (e) => {
                        null != v && f(null);
                        let n = e.replace(/(\r\n|\n|\r)/g, ' ');
                        n.length > g.XN && (n = e.slice(0, g.XN)), m(n);
                    },
                    placeholder: p.intl.string(p.t.fqVmbG),
                    value: s
                }),
                (0, t.jsx)('div', { className: _.divider }),
                b.map((e, n) =>
                    (0, t.jsx)(
                        C,
                        {
                            choice: e,
                            index: n,
                            onChange: (e) => k(e, n),
                            onClear: () => z(n),
                            onReorder: y,
                            isDropHovered: n === j
                        },
                        'choice-'.concat(n)
                    )
                ),
                b.length !== g.mb &&
                    (0, t.jsx)('div', {
                        className: _.addItemContainer,
                        children: (0, t.jsxs)(d.P3F, {
                            className: _.addItemButton,
                            onClick: () => {
                                null != v && f(null), b.length !== g.mb && I([...b, '']);
                            },
                            children: [
                                (0, t.jsx)(d.oFk, {
                                    size: 'custom',
                                    height: 17,
                                    width: 17,
                                    color: c.Z.unsafe_rawColors.BLUE_345.css
                                }),
                                (0, t.jsx)(d.Text, {
                                    color: 'text-link',
                                    variant: 'text-md/normal',
                                    children: p.intl.string(p.t.sVfx9v)
                                })
                            ]
                        })
                    })
            ]
        });
    };
