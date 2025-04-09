n.d(t, { Z: () => _ }), n(388685);
var r = n(200651),
    i = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(392711),
    o = n(999153),
    c = n(584922),
    d = n(793030),
    u = n(692547),
    m = n(481060),
    g = n(838221),
    p = n(246364),
    f = n(388032),
    h = n(664305);
function b(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function x(e) {
    let { type: t } = e,
        n = i.useMemo(() => {
            switch (t) {
                case p.QJ.MULTIPLE_CHOICE:
                    return {
                        icon: m.jE$,
                        text: f.NW.string(f.t.ooKh3t)
                    };
                case p.QJ.PARAGRAPH:
                    return {
                        icon: m.OvV,
                        text: f.NW.string(f.t.gG0JBA)
                    };
                case p.QJ.TEXT_INPUT:
                    return {
                        icon: (0, m.GSL)(g.Z),
                        text: f.NW.string(f.t.w6Q9w8)
                    };
                case p.QJ.TERMS:
                    return {
                        icon: m.snC,
                        text: f.NW.string(f.t['3pz9t7'])
                    };
                default:
                    return null;
            }
        }, [t]);
    return null == n
        ? null
        : (0, r.jsxs)('div', {
              className: h.typeTag,
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
    let { title: t, children: n, onEdit: i, onRemove: s, canRemove: l, actionsLocation: o, fieldStyle: c, field: d } = e;
    return (0, r.jsxs)('div', {
        className: h.backgroundContainer,
        children: [
            c === p.it.REGULAR
                ? (0, r.jsxs)('div', {
                      className: h.containerPadding,
                      children: [
                          (0, r.jsx)(m.vwX, {
                              tag: 'h3',
                              className: h.containerTitle,
                              children: t
                          }),
                          n
                      ]
                  })
                : (0, r.jsxs)('div', {
                      className: h.compactContainer,
                      children: [
                          (0, r.jsx)(m.vwX, {
                              tag: 'h3',
                              className: h.compactTitle,
                              children: t
                          }),
                          (0, r.jsx)(x, { type: d.field_type })
                      ]
                  }),
            'footer' === o &&
                (0, r.jsxs)(m.hjN, {
                    className: h.containerFooter,
                    children: [
                        (0, r.jsx)(m.ua7, {
                            text: f.NW.string(f.t.FoxyPT),
                            shouldShow: !l,
                            children: (e) => {
                                var t, n;
                                return (0, r.jsx)(
                                    m.zxk,
                                    ((t = b({}, e)),
                                    (n = n =
                                        {
                                            className: a()(h.removeButton, h.button),
                                            size: m.zxk.Sizes.SMALL,
                                            look: m.zxk.Looks.BLANK,
                                            onClick: s,
                                            disabled: !l,
                                            children: f.NW.string(f.t.N86XcH)
                                        }),
                                    Object.getOwnPropertyDescriptors
                                        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                                        : (function (e, t) {
                                              var n = Object.keys(e);
                                              if (Object.getOwnPropertySymbols) {
                                                  var r = Object.getOwnPropertySymbols(e);
                                                  n.push.apply(n, r);
                                              }
                                              return n;
                                          })(Object(n)).forEach(function (e) {
                                              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                                          }),
                                    t)
                                );
                            }
                        }),
                        (0, r.jsx)(m.zxk, {
                            className: h.button,
                            size: m.zxk.Sizes.SMALL,
                            color: m.zxk.Colors.PRIMARY,
                            onClick: i,
                            children: f.NW.string(f.t.bt75u7)
                        })
                    ]
                })
        ]
    });
}
let N = 'FORM_FIELD';
function v(e) {
    let { index: t, field: n, isDropHovered: s, onDrop: d, fieldStyle: g } = e,
        f = (0, l.debounce)(async (e, t, n) => {
            await d(e, t, n);
        }),
        x = i.useRef(null),
        [, v] = (0, o.c)({
            type: N,
            item: {
                index: t,
                field: n
            },
            end: (e, t) => {
                null == e || t.didDrop() || f(e.field, null, !0);
            }
        }),
        [, _] = (0, c.L)({
            accept: N,
            hover: (e, n) => {
                var r;
                let { index: i } = e,
                    s = null == (r = x.current) ? void 0 : r.getBoundingClientRect(),
                    a = n.getClientOffset();
                if (null == s || null == a) return;
                let l = (s.bottom - s.top) / 2,
                    o = a.y - s.top;
                (i < t && o < l) || (i > t && o < l) || i === t || f(e.field, t, !1);
            },
            drop: (e) => {
                f(e.field, t, !0);
            }
        });
    return (
        i.useLayoutEffect(
            () => (
                v(_(x)),
                () => {
                    _(null), v(null);
                }
            ),
            [v, _]
        ),
        (0, r.jsxs)('div', {
            ref: x,
            'data-dnd-name': 'field-'.concat(t),
            className: a()(h.dragContainer, { [h.dropHovered]: s }),
            children: [
                (0, r.jsx)('div', {
                    className: a()(h.dragIconContainer, { [h.compact]: g === p.it.COMPACT }),
                    children: (0, r.jsx)(m.Vni, {
                        size: 'xs',
                        className: h.dragIcon,
                        color: u.Z.unsafe_rawColors.PRIMARY_400.css
                    })
                }),
                (0, r.jsx)(j, b({}, e))
            ]
        })
    );
}
function _(e) {
    return (0, r.jsxs)('div', {
        className: a()(h.formFieldContainer, { [h.compact]: e.fieldStyle === p.it.COMPACT }),
        children: [
            (0, r.jsx)('div', {
                className: h.spacingContainer,
                children: e.isDragEnabled ? (0, r.jsx)(v, b({}, e)) : (0, r.jsx)(j, b({}, e))
            }),
            'side' === e.actionsLocation &&
                (0, r.jsxs)('div', {
                    className: a()(h.actionButtonsContainer, {
                        [h.compact]: e.fieldStyle === p.it.COMPACT,
                        [h.canRemove]: e.canRemove
                    }),
                    children: [
                        (0, r.jsx)(m.P3F, {
                            className: h.actionButton,
                            onClick: e.onEdit,
                            'aria-label': f.NW.string(f.t.bt75u7),
                            children: (0, r.jsx)(m.vdY, { size: 'xs' })
                        }),
                        e.canRemove &&
                            (0, r.jsx)(m.P3F, {
                                className: h.actionButton,
                                onClick: e.onRemove,
                                'aria-label': f.NW.string(f.t.N86XcH),
                                children: (0, r.jsx)(m.XHJ, { size: 'xs' })
                            })
                    ]
                })
        ]
    });
}
