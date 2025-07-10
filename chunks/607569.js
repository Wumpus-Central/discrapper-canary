(n.d(t, { default: () => y }), n(388685), n(704826), n(35282), n(781311));
var r = n(255367),
    l = n(73800),
    a = n(120356),
    i = n.n(a),
    o = n(562075),
    c = n(539202),
    s = n(692547),
    d = n(481060),
    u = n(881052),
    p = n(186523),
    m = n(246364),
    g = n(915509),
    b = n(592286),
    h = n(388032),
    x = n(98847);
let f = 'MULTIPLE_CHOICE',
    j = (e) => {
        let { choice: t, index: n, onChange: a, onClear: s, onReorder: u, isDropHovered: m } = e,
            g = l.useRef(null),
            b = l.useRef(null),
            [, j, y] = (0, o.c)({
                type: f,
                item: {
                    choice: t,
                    index: n
                },
                end: (e, t) => {
                    null == e || t.didDrop() || u(e.choice, null, !0);
                }
            }),
            [, _] = (0, c.L)({
                accept: f,
                hover: (e, t) => {
                    var r;
                    let { index: l } = e,
                        a = null == (r = g.current) ? void 0 : r.getBoundingClientRect(),
                        i = t.getClientOffset();
                    if (null == a || null == i) return;
                    let o = (a.bottom - a.top) / 2,
                        c = i.y - a.top;
                    (l < n && c < o) || (l > n && c > o) || u(e.choice, n, !1);
                },
                drop: (e) => {
                    u(e.choice, n, !0);
                }
            });
        return (
            l.useLayoutEffect(
                () => (
                    j(b),
                    y(_(g)),
                    () => {
                        (j(null), _(null));
                    }
                ),
                [j, _, y]
            ),
            (0, r.jsxs)('div', {
                ref: g,
                className: i()(x.draggableInputContainer, { [x.dragging]: m }),
                'data-dnd-name': t,
                children: [
                    (0, r.jsx)('div', {
                        className: x.radioIconEmptyContainer,
                        children: (0, r.jsx)(p.Z, {
                            height: 20,
                            width: 20,
                            className: x.radioIconEmpty
                        })
                    }),
                    (0, r.jsxs)('div', {
                        className: x.inputWrapper,
                        children: [
                            (0, r.jsx)(d.oil, {
                                autoFocus: !0,
                                onChange: (e) => a(e),
                                placeholder: h.intl.formatToPlainString(h.t['Ep/pbG'], { index: n + 1 }),
                                value: t
                            }),
                            (0, r.jsx)('div', {
                                className: x.clearButton,
                                children: (0, r.jsx)(d.hU, {
                                    icon: d.k$p,
                                    size: 'sm',
                                    'aria-label': h.intl.string(h.t.VkKicX),
                                    variant: 'icon-only',
                                    onClick: s
                                })
                            })
                        ]
                    }),
                    (0, r.jsx)('div', {
                        ref: b,
                        className: x.dragContainer,
                        'data-dnd-name': t,
                        children: (0, r.jsx)(d.Vni, {
                            size: 'xs',
                            color: 'currentColor',
                            className: x.dragIcon
                        })
                    })
                ]
            })
        );
    },
    y = function (e) {
        var t, n, a, i;
        let { field: o, onSave: c, onClose: p } = e,
            [f, y] = l.useState(null != (t = null == o ? void 0 : o.label) ? t : ''),
            [_, v] = l.useState(null != (n = null == o ? void 0 : o.choices) ? n : ['']),
            [C, I] = l.useState(null),
            [O, E] = l.useState(null),
            w = (e, t) => {
                null != C && I(null);
                let n = e.replace(/(\r\n|\n|\r)/g, ' ');
                n.length > b.au && (n = n.slice(0, b.au));
                let r = [..._];
                ((r[t] = n), v(r));
            },
            k = (e, t, n) => {
                if (null == _) return;
                null != C && I(null);
                let r = _.indexOf(e),
                    l = [..._];
                (null != t && t !== r && (l.splice(r, 1), l.splice(t, 0, e), v(l)), n ? null !== t && E(null) : t !== O && E(t));
            },
            N = (e) => {
                null != C && I(null);
                let t = [..._.slice(0, e), ..._.slice(e + 1)];
                v(0 === t.length ? [''] : t);
            },
            P = async () => {
                null != C && I(null);
                let e = f.trim();
                if ('' === e) return void I(h.intl.string(h.t['G+TI4+']));
                if (0 === _.map((e) => e.trim()).filter((e) => '' !== e).length) return void I(h.intl.string(h.t.jZoHgI));
                let t = {
                    field_type: m.QJ.MULTIPLE_CHOICE,
                    label: e,
                    choices: _,
                    required: !0
                };
                try {
                    (await c(t), p());
                } catch (e) {
                    I(new u.Hx(e).getAnyErrorMessage());
                }
            };
        return (0, r.jsxs)(
            g.Z,
            ((a = (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    ('function' == typeof Object.getOwnPropertySymbols &&
                        (r = r.concat(
                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                            })
                        )),
                        r.forEach(function (t) {
                            var r;
                            ((r = n[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: r,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0
                                      })
                                    : (e[t] = r));
                        }));
                }
                return e;
            })({}, e)),
            (i = i =
                {
                    errorText: C,
                    title: h.intl.string(h.t.ooKh3t),
                    onConfirm: P,
                    onCancel: p,
                    children: [
                        (0, r.jsx)(d.oil, {
                            autoFocus: !0,
                            className: x.spacedItem,
                            onChange: (e) => {
                                null != C && I(null);
                                let t = e.replace(/(\r\n|\n|\r)/g, ' ');
                                (t.length > b.XN && (t = e.slice(0, b.XN)), y(t));
                            },
                            placeholder: h.intl.string(h.t.fqVmbG),
                            value: f
                        }),
                        (0, r.jsx)('div', { className: x.divider }),
                        _.map((e, t) =>
                            (0, r.jsx)(
                                j,
                                {
                                    choice: e,
                                    index: t,
                                    onChange: (e) => w(e, t),
                                    onClear: () => N(t),
                                    onReorder: k,
                                    isDropHovered: t === O
                                },
                                'choice-'.concat(t)
                            )
                        ),
                        _.length !== b.mb &&
                            (0, r.jsx)('div', {
                                className: x.addItemContainer,
                                children: (0, r.jsxs)(d.P3F, {
                                    className: x.addItemButton,
                                    onClick: () => {
                                        (null != C && I(null), _.length !== b.mb && v([..._, '']));
                                    },
                                    children: [
                                        (0, r.jsx)(d.oFk, {
                                            size: 'custom',
                                            height: 17,
                                            width: 17,
                                            color: s.Z.unsafe_rawColors.BLUE_345.css
                                        }),
                                        (0, r.jsx)(d.Text, {
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
                ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(i))
                : (function (e, t) {
                      var n = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var r = Object.getOwnPropertySymbols(e);
                          n.push.apply(n, r);
                      }
                      return n;
                  })(Object(i)).forEach(function (e) {
                      Object.defineProperty(a, e, Object.getOwnPropertyDescriptor(i, e));
                  }),
            a)
        );
    };
