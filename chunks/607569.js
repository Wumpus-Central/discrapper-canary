n.d(t, { default: () => j }), n(388685), n(704826), n(35282), n(781311);
var l = n(200651),
    r = n(192379),
    o = n(120356),
    a = n.n(o),
    i = n(999153),
    c = n(584922),
    s = n(692547),
    d = n(481060),
    u = n(881052),
    m = n(186523),
    p = n(246364),
    b = n(915509),
    g = n(592286),
    h = n(388032),
    x = n(98847);
let _ = 'MULTIPLE_CHOICE',
    f = (e) => {
        let { choice: t, index: n, onChange: o, onClear: s, onReorder: u, isDropHovered: p } = e,
            b = r.useRef(null),
            g = r.useRef(null),
            [, f, j] = (0, i.c)({
                type: _,
                item: {
                    choice: t,
                    index: n
                },
                end: (e, t) => {
                    null == e || t.didDrop() || u(e.choice, null, !0);
                }
            }),
            [, C] = (0, c.L)({
                accept: _,
                hover: (e, t) => {
                    var l;
                    let { index: r } = e,
                        o = null == (l = b.current) ? void 0 : l.getBoundingClientRect(),
                        a = t.getClientOffset();
                    if (null == o || null == a) return;
                    let i = (o.bottom - o.top) / 2,
                        c = a.y - o.top;
                    (r < n && c < i) || (r > n && c > i) || u(e.choice, n, !1);
                },
                drop: (e) => {
                    u(e.choice, n, !0);
                }
            });
        return (
            r.useLayoutEffect(
                () => (
                    f(g),
                    j(C(b)),
                    () => {
                        f(null), C(null);
                    }
                ),
                [f, C, j]
            ),
            (0, l.jsxs)('div', {
                ref: b,
                className: a()(x.draggableInputContainer, { [x.dragging]: p }),
                'data-dnd-name': t,
                children: [
                    (0, l.jsx)('div', {
                        className: x.radioIconEmptyContainer,
                        children: (0, l.jsx)(m.Z, {
                            height: 20,
                            width: 20,
                            className: x.radioIconEmpty
                        })
                    }),
                    (0, l.jsxs)('div', {
                        className: x.inputWrapper,
                        children: [
                            (0, l.jsx)(d.oil, {
                                autoFocus: !0,
                                onChange: (e) => o(e),
                                placeholder: h.intl.formatToPlainString(h.t['Ep/pbG'], { index: n + 1 }),
                                value: t
                            }),
                            (0, l.jsx)(d.zxk, {
                                className: x.clearButton,
                                onClick: s,
                                look: d.zxk.Looks.BLANK,
                                size: d.zxk.Sizes.NONE,
                                children: (0, l.jsx)(d.k$p, {
                                    size: 'md',
                                    color: 'currentColor',
                                    className: x.clearIcon
                                })
                            })
                        ]
                    }),
                    (0, l.jsx)('div', {
                        ref: g,
                        className: x.dragContainer,
                        'data-dnd-name': t,
                        children: (0, l.jsx)(d.Vni, {
                            size: 'xs',
                            color: 'currentColor',
                            className: x.dragIcon
                        })
                    })
                ]
            })
        );
    },
    j = function (e) {
        var t, n, o, a;
        let { field: i, onSave: c, onClose: m } = e,
            [_, j] = r.useState(null != (t = null == i ? void 0 : i.label) ? t : ''),
            [C, y] = r.useState(null != (n = null == i ? void 0 : i.choices) ? n : ['']),
            [v, I] = r.useState(null),
            [O, k] = r.useState(null),
            N = (e, t) => {
                null != v && I(null);
                let n = e.replace(/(\r\n|\n|\r)/g, ' ');
                n.length > g.au && (n = n.slice(0, g.au));
                let l = [...C];
                (l[t] = n), y(l);
            },
            z = (e, t, n) => {
                if (null == C) return;
                null != v && I(null);
                let l = C.indexOf(e),
                    r = [...C];
                null != t && t !== l && (r.splice(l, 1), r.splice(t, 0, e), y(r)), n ? null !== t && k(null) : t !== O && k(t);
            },
            w = (e) => {
                null != v && I(null);
                let t = [...C.slice(0, e), ...C.slice(e + 1)];
                y(0 === t.length ? [''] : t);
            },
            E = async () => {
                null != v && I(null);
                let e = _.trim();
                if ('' === e) return void I(h.intl.string(h.t['G+TI4+']));
                if (0 === C.map((e) => e.trim()).filter((e) => '' !== e).length) return void I(h.intl.string(h.t.jZoHgI));
                let t = {
                    field_type: p.QJ.MULTIPLE_CHOICE,
                    label: e,
                    choices: C,
                    required: !0
                };
                try {
                    await c(t), m();
                } catch (e) {
                    I(new u.Hx(e).getAnyErrorMessage());
                }
            };
        return (0, l.jsxs)(
            b.Z,
            ((o = (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        l = Object.keys(n);
                    'function' == typeof Object.getOwnPropertySymbols &&
                        (l = l.concat(
                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                            })
                        )),
                        l.forEach(function (t) {
                            var l;
                            (l = n[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: l,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0
                                      })
                                    : (e[t] = l);
                        });
                }
                return e;
            })({}, e)),
            (a = a =
                {
                    errorText: v,
                    title: h.intl.string(h.t.ooKh3t),
                    onConfirm: E,
                    onCancel: m,
                    children: [
                        (0, l.jsx)(d.oil, {
                            autoFocus: !0,
                            className: x.spacedItem,
                            onChange: (e) => {
                                null != v && I(null);
                                let t = e.replace(/(\r\n|\n|\r)/g, ' ');
                                t.length > g.XN && (t = e.slice(0, g.XN)), j(t);
                            },
                            placeholder: h.intl.string(h.t.fqVmbG),
                            value: _
                        }),
                        (0, l.jsx)('div', { className: x.divider }),
                        C.map((e, t) =>
                            (0, l.jsx)(
                                f,
                                {
                                    choice: e,
                                    index: t,
                                    onChange: (e) => N(e, t),
                                    onClear: () => w(t),
                                    onReorder: z,
                                    isDropHovered: t === O
                                },
                                'choice-'.concat(t)
                            )
                        ),
                        C.length !== g.mb &&
                            (0, l.jsx)('div', {
                                className: x.addItemContainer,
                                children: (0, l.jsxs)(d.P3F, {
                                    className: x.addItemButton,
                                    onClick: () => {
                                        null != v && I(null), C.length !== g.mb && y([...C, '']);
                                    },
                                    children: [
                                        (0, l.jsx)(d.oFk, {
                                            size: 'custom',
                                            height: 17,
                                            width: 17,
                                            color: s.Z.unsafe_rawColors.BLUE_345.css
                                        }),
                                        (0, l.jsx)(d.Text, {
                                            color: 'text-link',
                                            variant: 'text-md/normal',
                                            children: h.intl.string(h.t.sVfx9v)
                                        })
                                    ]
                                })
                            })
                    ]
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(a))
                : (function (e, t) {
                      var n = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var l = Object.getOwnPropertySymbols(e);
                          n.push.apply(n, l);
                      }
                      return n;
                  })(Object(a)).forEach(function (e) {
                      Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(a, e));
                  }),
            o)
        );
    };
