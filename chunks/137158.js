(n.d(t, { Z: () => O }), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    s = n(392711),
    o = n(562075),
    c = n(539202),
    d = n(793030),
    u = n(692547),
    m = n(481060),
    g = n(838221),
    p = n(246364),
    h = n(388032),
    f = n(664305);
function x(e) {
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
}
function b(e) {
    let { type: t } = e,
        n = i.useMemo(() => {
            switch (t) {
                case p.QJ.MULTIPLE_CHOICE:
                    return {
                        icon: m.jE$,
                        text: h.intl.string(h.t.ooKh3t)
                    };
                case p.QJ.PARAGRAPH:
                    return {
                        icon: m.OvV,
                        text: h.intl.string(h.t.gG0JBA)
                    };
                case p.QJ.TEXT_INPUT:
                    return {
                        icon: (0, m.GSL)(g.Z),
                        text: h.intl.string(h.t.w6Q9w8)
                    };
                case p.QJ.TERMS:
                    return {
                        icon: m.snC,
                        text: h.intl.string(h.t['3pz9t7'])
                    };
                default:
                    return null;
            }
        }, [t]);
    return null == n
        ? null
        : (0, r.jsxs)('div', {
              className: f.typeTag,
              children: [
                  (0, r.jsx)(n.icon, {
                      size: 'xs',
                      color: 'currentColor'
                  }),
                  (0, r.jsx)(d.xv, {
                      variant: 'text-sm/medium',
                      tag: 'span',
                      children: n.text
                  })
              ]
          });
}
function j(e) {
    let { title: t, children: n, fieldStyle: i, field: l } = e;
    return (0, r.jsx)('div', {
        className: f.backgroundContainer,
        children:
            i === p.it.REGULAR
                ? (0, r.jsxs)('div', {
                      className: f.containerPadding,
                      children: [
                          (0, r.jsx)(m.vwX, {
                              tag: 'h3',
                              className: f.containerTitle,
                              children: t
                          }),
                          n
                      ]
                  })
                : (0, r.jsxs)('div', {
                      className: f.compactContainer,
                      children: [
                          (0, r.jsx)(m.vwX, {
                              tag: 'h3',
                              className: f.compactTitle,
                              children: t
                          }),
                          (0, r.jsx)(b, { type: l.field_type })
                      ]
                  })
    });
}
let v = 'FORM_FIELD';
function _(e) {
    let { index: t, field: n, isDropHovered: l, onDrop: d, fieldStyle: g } = e,
        h = (0, s.debounce)(async (e, t, n) => {
            await d(e, t, n);
        }),
        b = i.useRef(null),
        [, _] = (0, o.c)({
            type: v,
            item: {
                index: t,
                field: n
            },
            end: (e, t) => {
                null == e || t.didDrop() || h(e.field, null, !0);
            }
        }),
        [, O] = (0, c.L)({
            accept: v,
            hover: (e, n) => {
                var r;
                let { index: i } = e,
                    l = null == (r = b.current) ? void 0 : r.getBoundingClientRect(),
                    a = n.getClientOffset();
                if (null == l || null == a) return;
                let s = (l.bottom - l.top) / 2,
                    o = a.y - l.top;
                (i < t && o < s) || (i > t && o < s) || i === t || h(e.field, t, !1);
            },
            drop: (e) => {
                h(e.field, t, !0);
            }
        });
    return (
        i.useLayoutEffect(
            () => (
                _(O(b)),
                () => {
                    (O(null), _(null));
                }
            ),
            [_, O]
        ),
        (0, r.jsxs)('div', {
            ref: b,
            'data-dnd-name': 'field-'.concat(t),
            className: a()(f.dragContainer, { [f.dropHovered]: l }),
            children: [
                (0, r.jsx)('div', {
                    className: a()(f.dragIconContainer, { [f.compact]: g === p.it.COMPACT }),
                    children: (0, r.jsx)(m.Vni, {
                        size: 'xs',
                        className: f.dragIcon,
                        color: u.Z.unsafe_rawColors.PRIMARY_400.css
                    })
                }),
                (0, r.jsx)(j, x({}, e))
            ]
        })
    );
}
function O(e) {
    return (0, r.jsxs)('div', {
        className: a()(f.formFieldContainer, { [f.compact]: e.fieldStyle === p.it.COMPACT }),
        children: [
            (0, r.jsx)('div', {
                className: f.spacingContainer,
                children: e.isDragEnabled ? (0, r.jsx)(_, x({}, e)) : (0, r.jsx)(j, x({}, e))
            }),
            'side' === e.actionsLocation &&
                (0, r.jsxs)('div', {
                    className: a()(f.actionButtonsContainer, {
                        [f.compact]: e.fieldStyle === p.it.COMPACT,
                        [f.canRemove]: e.canRemove
                    }),
                    children: [
                        (0, r.jsx)(m.P3F, {
                            className: f.actionButton,
                            onClick: e.onEdit,
                            'aria-label': h.intl.string(h.t.bt75u7),
                            children: (0, r.jsx)(m.vdY, { size: 'xs' })
                        }),
                        e.canRemove &&
                            (0, r.jsx)(m.P3F, {
                                className: f.actionButton,
                                onClick: e.onRemove,
                                'aria-label': h.intl.string(h.t.N86XcH),
                                children: (0, r.jsx)(m.XHJ, { size: 'xs' })
                            })
                    ]
                })
        ]
    });
}
