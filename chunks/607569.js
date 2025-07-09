(n.d(t, { default: () => C }), n(388685), n(704826), n(35282), n(781311));
var l = n(255367),
    r = n(73800),
    o = n(120356),
    a = n.n(o),
    i = n(562075),
    c = n(539202),
    s = n(692547),
    d = n(755721),
    u = n(481060),
    m = n(881052),
    p = n(186523),
    b = n(246364),
    g = n(915509),
    h = n(592286),
    x = n(388032),
    _ = n(98847);
let f = 'MULTIPLE_CHOICE',
    j = (e) => {
        let { choice: t, index: n, onChange: o, onClear: s, onReorder: m, isDropHovered: b } = e,
            g = r.useRef(null),
            h = r.useRef(null),
            [, j, C] = (0, i.c)({
                type: f,
                item: {
                    choice: t,
                    index: n
                },
                end: (e, t) => {
                    null == e || t.didDrop() || m(e.choice, null, !0);
                }
            }),
            [, y] = (0, c.L)({
                accept: f,
                hover: (e, t) => {
                    var l;
                    let { index: r } = e,
                        o = null == (l = g.current) ? void 0 : l.getBoundingClientRect(),
                        a = t.getClientOffset();
                    if (null == o || null == a) return;
                    let i = (o.bottom - o.top) / 2,
                        c = a.y - o.top;
                    (r < n && c < i) || (r > n && c > i) || m(e.choice, n, !1);
                },
                drop: (e) => {
                    m(e.choice, n, !0);
                }
            });
        return (
            r.useLayoutEffect(
                () => (
                    j(h),
                    C(y(g)),
                    () => {
                        (j(null), y(null));
                    }
                ),
                [j, y, C]
            ),
            (0, l.jsxs)('div', {
                ref: g,
                className: a()(_.draggableInputContainer, { [_.dragging]: b }),
                'data-dnd-name': t,
                children: [
                    (0, l.jsx)('div', {
                        className: _.radioIconEmptyContainer,
                        children: (0, l.jsx)(p.Z, {
                            height: 20,
                            width: 20,
                            className: _.radioIconEmpty
                        })
                    }),
                    (0, l.jsxs)('div', {
                        className: _.inputWrapper,
                        children: [
                            (0, l.jsx)(u.oil, {
                                autoFocus: !0,
                                onChange: (e) => o(e),
                                placeholder: x.intl.formatToPlainString(x.t['Ep/pbG'], { index: n + 1 }),
                                value: t
                            }),
                            (0, l.jsx)(d.zx, {
                                className: _.clearButton,
                                onClick: s,
                                look: d.zx.Looks.BLANK,
                                size: d.zx.Sizes.NONE,
                                children: (0, l.jsx)(u.k$p, {
                                    size: 'md',
                                    color: 'currentColor',
                                    className: _.clearIcon
                                })
                            })
                        ]
                    }),
                    (0, l.jsx)('div', {
                        ref: h,
                        className: _.dragContainer,
                        'data-dnd-name': t,
                        children: (0, l.jsx)(u.Vni, {
                            size: 'xs',
                            color: 'currentColor',
                            className: _.dragIcon
                        })
                    })
                ]
            })
        );
    },
    C = function (e) {
        var t, n, o, a;
        let { field: i, onSave: c, onClose: d } = e,
            [p, f] = r.useState(null != (t = null == i ? void 0 : i.label) ? t : ''),
            [C, y] = r.useState(null != (n = null == i ? void 0 : i.choices) ? n : ['']),
            [v, I] = r.useState(null),
            [O, N] = r.useState(null),
            z = (e, t) => {
                null != v && I(null);
                let n = e.replace(/(\r\n|\n|\r)/g, ' ');
                n.length > h.au && (n = n.slice(0, h.au));
                let l = [...C];
                ((l[t] = n), y(l));
            },
            E = (e, t, n) => {
                if (null == C) return;
                null != v && I(null);
                let l = C.indexOf(e),
                    r = [...C];
                (null != t && t !== l && (r.splice(l, 1), r.splice(t, 0, e), y(r)), n ? null !== t && N(null) : t !== O && N(t));
            },
            w = (e) => {
                null != v && I(null);
                let t = [...C.slice(0, e), ...C.slice(e + 1)];
                y(0 === t.length ? [''] : t);
            },
            k = async () => {
                null != v && I(null);
                let e = p.trim();
                if ('' === e) return void I(x.intl.string(x.t['G+TI4+']));
                if (0 === C.map((e) => e.trim()).filter((e) => '' !== e).length) return void I(x.intl.string(x.t.jZoHgI));
                let t = {
                    field_type: b.QJ.MULTIPLE_CHOICE,
                    label: e,
                    choices: C,
                    required: !0
                };
                try {
                    (await c(t), d());
                } catch (e) {
                    I(new m.Hx(e).getAnyErrorMessage());
                }
            };
        return (0, l.jsxs)(
            g.Z,
            ((o = (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        l = Object.keys(n);
                    ('function' == typeof Object.getOwnPropertySymbols &&
                        (l = l.concat(
                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                            })
                        )),
                        l.forEach(function (t) {
                            var l;
                            ((l = n[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: l,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0
                                      })
                                    : (e[t] = l));
                        }));
                }
                return e;
            })({}, e)),
            (a = a =
                {
                    errorText: v,
                    title: x.intl.string(x.t.ooKh3t),
                    onConfirm: k,
                    onCancel: d,
                    children: [
                        (0, l.jsx)(u.oil, {
                            autoFocus: !0,
                            className: _.spacedItem,
                            onChange: (e) => {
                                null != v && I(null);
                                let t = e.replace(/(\r\n|\n|\r)/g, ' ');
                                (t.length > h.XN && (t = e.slice(0, h.XN)), f(t));
                            },
                            placeholder: x.intl.string(x.t.fqVmbG),
                            value: p
                        }),
                        (0, l.jsx)('div', { className: _.divider }),
                        C.map((e, t) =>
                            (0, l.jsx)(
                                j,
                                {
                                    choice: e,
                                    index: t,
                                    onChange: (e) => z(e, t),
                                    onClear: () => w(t),
                                    onReorder: E,
                                    isDropHovered: t === O
                                },
                                'choice-'.concat(t)
                            )
                        ),
                        C.length !== h.mb &&
                            (0, l.jsx)('div', {
                                className: _.addItemContainer,
                                children: (0, l.jsxs)(u.P3F, {
                                    className: _.addItemButton,
                                    onClick: () => {
                                        (null != v && I(null), C.length !== h.mb && y([...C, '']));
                                    },
                                    children: [
                                        (0, l.jsx)(u.oFk, {
                                            size: 'custom',
                                            height: 17,
                                            width: 17,
                                            color: s.Z.unsafe_rawColors.BLUE_345.css
                                        }),
                                        (0, l.jsx)(u.Text, {
                                            color: 'text-link',
                                            variant: 'text-md/normal',
                                            children: x.intl.string(x.t.sVfx9v)
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
