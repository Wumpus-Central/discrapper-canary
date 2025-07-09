(n.d(t, { Z: () => C }), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    s = n.n(l),
    a = n(392711),
    o = n(562075),
    c = n(539202),
    d = n(793030),
    u = n(692547),
    m = n(755721),
    g = n(481060),
    p = n(838221),
    f = n(246364),
    h = n(388032),
    x = n(664305);
function b(e) {
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
function j(e) {
    let { type: t } = e,
        n = i.useMemo(() => {
            switch (t) {
                case f.QJ.MULTIPLE_CHOICE:
                    return {
                        icon: g.jE$,
                        text: h.intl.string(h.t.ooKh3t)
                    };
                case f.QJ.PARAGRAPH:
                    return {
                        icon: g.OvV,
                        text: h.intl.string(h.t.gG0JBA)
                    };
                case f.QJ.TEXT_INPUT:
                    return {
                        icon: (0, g.GSL)(p.Z),
                        text: h.intl.string(h.t.w6Q9w8)
                    };
                case f.QJ.TERMS:
                    return {
                        icon: g.snC,
                        text: h.intl.string(h.t['3pz9t7'])
                    };
                default:
                    return null;
            }
        }, [t]);
    return null == n
        ? null
        : (0, r.jsxs)('div', {
              className: x.typeTag,
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
function _(e) {
    let { title: t, children: n, onEdit: i, onRemove: l, canRemove: a, actionsLocation: o, fieldStyle: c, field: d } = e;
    return (0, r.jsxs)('div', {
        className: x.backgroundContainer,
        children: [
            c === f.it.REGULAR
                ? (0, r.jsxs)('div', {
                      className: x.containerPadding,
                      children: [
                          (0, r.jsx)(g.vwX, {
                              tag: 'h3',
                              className: x.containerTitle,
                              children: t
                          }),
                          n
                      ]
                  })
                : (0, r.jsxs)('div', {
                      className: x.compactContainer,
                      children: [
                          (0, r.jsx)(g.vwX, {
                              tag: 'h3',
                              className: x.compactTitle,
                              children: t
                          }),
                          (0, r.jsx)(j, { type: d.field_type })
                      ]
                  }),
            'footer' === o &&
                (0, r.jsxs)(g.hjN, {
                    className: x.containerFooter,
                    children: [
                        (0, r.jsx)(g.ua7, {
                            text: h.intl.string(h.t.FoxyPT),
                            shouldShow: !a,
                            children: (e) => {
                                var t, n;
                                return (0, r.jsx)(
                                    m.zx,
                                    ((t = b({}, e)),
                                    (n = n =
                                        {
                                            className: s()(x.removeButton, x.button),
                                            size: m.zx.Sizes.SMALL,
                                            look: m.zx.Looks.BLANK,
                                            onClick: l,
                                            disabled: !a,
                                            children: h.intl.string(h.t.N86XcH)
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
                        (0, r.jsx)(m.zx, {
                            className: x.button,
                            size: m.zx.Sizes.SMALL,
                            color: m.zx.Colors.PRIMARY,
                            onClick: i,
                            children: h.intl.string(h.t.bt75u7)
                        })
                    ]
                })
        ]
    });
}
let v = 'FORM_FIELD';
function O(e) {
    let { index: t, field: n, isDropHovered: l, onDrop: d, fieldStyle: m } = e,
        p = (0, a.debounce)(async (e, t, n) => {
            await d(e, t, n);
        }),
        h = i.useRef(null),
        [, j] = (0, o.c)({
            type: v,
            item: {
                index: t,
                field: n
            },
            end: (e, t) => {
                null == e || t.didDrop() || p(e.field, null, !0);
            }
        }),
        [, O] = (0, c.L)({
            accept: v,
            hover: (e, n) => {
                var r;
                let { index: i } = e,
                    l = null == (r = h.current) ? void 0 : r.getBoundingClientRect(),
                    s = n.getClientOffset();
                if (null == l || null == s) return;
                let a = (l.bottom - l.top) / 2,
                    o = s.y - l.top;
                (i < t && o < a) || (i > t && o < a) || i === t || p(e.field, t, !1);
            },
            drop: (e) => {
                p(e.field, t, !0);
            }
        });
    return (
        i.useLayoutEffect(
            () => (
                j(O(h)),
                () => {
                    (O(null), j(null));
                }
            ),
            [j, O]
        ),
        (0, r.jsxs)('div', {
            ref: h,
            'data-dnd-name': 'field-'.concat(t),
            className: s()(x.dragContainer, { [x.dropHovered]: l }),
            children: [
                (0, r.jsx)('div', {
                    className: s()(x.dragIconContainer, { [x.compact]: m === f.it.COMPACT }),
                    children: (0, r.jsx)(g.Vni, {
                        size: 'xs',
                        className: x.dragIcon,
                        color: u.Z.unsafe_rawColors.PRIMARY_400.css
                    })
                }),
                (0, r.jsx)(_, b({}, e))
            ]
        })
    );
}
function C(e) {
    return (0, r.jsxs)('div', {
        className: s()(x.formFieldContainer, { [x.compact]: e.fieldStyle === f.it.COMPACT }),
        children: [
            (0, r.jsx)('div', {
                className: x.spacingContainer,
                children: e.isDragEnabled ? (0, r.jsx)(O, b({}, e)) : (0, r.jsx)(_, b({}, e))
            }),
            'side' === e.actionsLocation &&
                (0, r.jsxs)('div', {
                    className: s()(x.actionButtonsContainer, {
                        [x.compact]: e.fieldStyle === f.it.COMPACT,
                        [x.canRemove]: e.canRemove
                    }),
                    children: [
                        (0, r.jsx)(g.P3F, {
                            className: x.actionButton,
                            onClick: e.onEdit,
                            'aria-label': h.intl.string(h.t.bt75u7),
                            children: (0, r.jsx)(g.vdY, { size: 'xs' })
                        }),
                        e.canRemove &&
                            (0, r.jsx)(g.P3F, {
                                className: x.actionButton,
                                onClick: e.onRemove,
                                'aria-label': h.intl.string(h.t.N86XcH),
                                children: (0, r.jsx)(g.XHJ, { size: 'xs' })
                            })
                    ]
                })
        ]
    });
}
