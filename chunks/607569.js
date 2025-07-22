(n.d(t, { default: () => j }), n(388685), n(704826), n(35282), n(781311));
var r = n(255367),
    l = n(73800),
    a = n(120356),
    i = n.n(a),
    o = n(562075),
    c = n(539202),
    s = n(692547),
    u = n(755721),
    d = n(481060),
    p = n(881052),
    g = n(186523),
    m = n(246364),
    b = n(915509),
    h = n(592286),
    f = n(388032),
    x = n(98847);
let y = 'MULTIPLE_CHOICE',
    v = (e) => {
        let { choice: t, index: n, onChange: a, onClear: s, onReorder: p, isDropHovered: m } = e,
            b = l.useRef(null),
            h = l.useRef(null),
            [, v, j] = (0, o.c)({
                type: y,
                item: {
                    choice: t,
                    index: n
                },
                end: (e, t) => {
                    null == e || t.didDrop() || p(e.choice, null, !0);
                }
            }),
            [, C] = (0, c.L)({
                accept: y,
                hover: (e, t) => {
                    var r;
                    let { index: l } = e,
                        a = null == (r = b.current) ? void 0 : r.getBoundingClientRect(),
                        i = t.getClientOffset();
                    if (null == a || null == i) return;
                    let o = (a.bottom - a.top) / 2,
                        c = i.y - a.top;
                    (l < n && c < o) || (l > n && c > o) || p(e.choice, n, !1);
                },
                drop: (e) => {
                    p(e.choice, n, !0);
                }
            });
        return (
            l.useLayoutEffect(
                () => (
                    v(h),
                    j(C(b)),
                    () => {
                        (v(null), C(null));
                    }
                ),
                [v, C, j]
            ),
            (0, r.jsxs)('div', {
                ref: b,
                className: i()(x.draggableInputContainer, { [x.dragging]: m }),
                'data-dnd-name': t,
                children: [
                    (0, r.jsx)('div', {
                        className: x.radioIconEmptyContainer,
                        children: (0, r.jsx)(g.Z, {
                            height: 20,
                            width: 20,
                            className: x.radioIconEmpty
                        })
                    }),
                    (0, r.jsxs)('div', {
                        className: x.inputWrapper,
                        children: [
                            (0, r.jsx)(u.Is, {
                                autoFocus: !0,
                                onChange: (e) => a(e),
                                placeholder: f.intl.formatToPlainString(f.t['Ep/pbG'], { index: n + 1 }),
                                value: t
                            }),
                            (0, r.jsx)('div', {
                                className: x.clearButton,
                                children: (0, r.jsx)(d.hU, {
                                    icon: d.k$p,
                                    size: 'sm',
                                    'aria-label': f.intl.string(f.t.VkKicX),
                                    variant: 'icon-only',
                                    onClick: s
                                })
                            })
                        ]
                    }),
                    (0, r.jsx)('div', {
                        ref: h,
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
    j = function (e) {
        var t, n, a, i;
        let { field: o, onSave: c, onClose: g } = e,
            [y, j] = l.useState(null != (t = null == o ? void 0 : o.label) ? t : ''),
            [C, _] = l.useState(null != (n = null == o ? void 0 : o.choices) ? n : ['']),
            [I, O] = l.useState(null),
            [w, E] = l.useState(null),
            P = (e, t) => {
                null != I && O(null);
                let n = e.replace(/(\r\n|\n|\r)/g, ' ');
                n.length > h.au && (n = n.slice(0, h.au));
                let r = [...C];
                ((r[t] = n), _(r));
            },
            k = (e, t, n) => {
                if (null == C) return;
                null != I && O(null);
                let r = C.indexOf(e),
                    l = [...C];
                (null != t && t !== r && (l.splice(r, 1), l.splice(t, 0, e), _(l)), n ? null !== t && E(null) : t !== w && E(t));
            },
            N = (e) => {
                null != I && O(null);
                let t = [...C.slice(0, e), ...C.slice(e + 1)];
                _(0 === t.length ? [''] : t);
            },
            S = async () => {
                null != I && O(null);
                let e = y.trim();
                if ('' === e) return void O(f.intl.string(f.t['G+TI4+']));
                if (0 === C.map((e) => e.trim()).filter((e) => '' !== e).length) return void O(f.intl.string(f.t.jZoHgI));
                let t = {
                    field_type: m.QJ.MULTIPLE_CHOICE,
                    label: e,
                    choices: C,
                    required: !0
                };
                try {
                    (await c(t), g());
                } catch (e) {
                    O(new p.Hx(e).getAnyErrorMessage());
                }
            };
        return (0, r.jsxs)(
            b.Z,
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
                    errorText: I,
                    title: f.intl.string(f.t.ooKh3t),
                    onConfirm: S,
                    onCancel: g,
                    children: [
                        (0, r.jsx)(u.Is, {
                            autoFocus: !0,
                            className: x.spacedItem,
                            onChange: (e) => {
                                null != I && O(null);
                                let t = e.replace(/(\r\n|\n|\r)/g, ' ');
                                (t.length > h.XN && (t = e.slice(0, h.XN)), j(t));
                            },
                            placeholder: f.intl.string(f.t.fqVmbG),
                            value: y
                        }),
                        (0, r.jsx)('div', { className: x.divider }),
                        C.map((e, t) =>
                            (0, r.jsx)(
                                v,
                                {
                                    choice: e,
                                    index: t,
                                    onChange: (e) => P(e, t),
                                    onClear: () => N(t),
                                    onReorder: k,
                                    isDropHovered: t === w
                                },
                                'choice-'.concat(t)
                            )
                        ),
                        C.length !== h.mb &&
                            (0, r.jsx)('div', {
                                className: x.addItemContainer,
                                children: (0, r.jsxs)(d.P3F, {
                                    className: x.addItemButton,
                                    onClick: () => {
                                        (null != I && O(null), C.length !== h.mb && _([...C, '']));
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
                                            children: f.intl.string(f.t.sVfx9v)
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
