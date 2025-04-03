n.d(t, { Z: () => x }), n(47120);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    c = n.n(o),
    s = n(392711),
    a = n(999153),
    l = n(584922),
    u = n(793030),
    d = n(692547),
    f = n(481060),
    p = n(838221),
    b = n(246364),
    j = n(388032),
    y = n(664305);
function m(e) {
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
function g(e) {
    let { type: t } = e,
        n = i.useMemo(() => {
            switch (t) {
                case b.QJ.MULTIPLE_CHOICE:
                    return {
                        icon: f.jE$,
                        text: j.NW.string(j.t.ooKh3t)
                    };
                case b.QJ.PARAGRAPH:
                    return {
                        icon: f.OvV,
                        text: j.NW.string(j.t.gG0JBA)
                    };
                case b.QJ.TEXT_INPUT:
                    return {
                        icon: (0, f.GSL)(p.Z),
                        text: j.NW.string(j.t.w6Q9w8)
                    };
                case b.QJ.TERMS:
                    return {
                        icon: f.snC,
                        text: j.NW.string(j.t['3pz9t7'])
                    };
                default:
                    return null;
            }
        }, [t]);
    return null == n
        ? null
        : (0, r.jsxs)('div', {
              className: y.typeTag,
              children: [
                  (0, r.jsx)(n.icon, {
                      size: 'xs',
                      color: 'currentColor'
                  }),
                  (0, r.jsx)(u.xv, {
                      variant: 'text-sm/medium',
                      tag: 'span',
                      children: n.text
                  })
              ]
          });
}
function O(e) {
    let { title: t, children: n, onEdit: i, onRemove: o, canRemove: s, actionsLocation: a, fieldStyle: l, field: u } = e;
    return (0, r.jsxs)('div', {
        className: y.backgroundContainer,
        children: [
            l === b.it.REGULAR
                ? (0, r.jsxs)('div', {
                      className: y.containerPadding,
                      children: [
                          (0, r.jsx)(f.vwX, {
                              tag: 'h3',
                              className: y.containerTitle,
                              children: t
                          }),
                          n
                      ]
                  })
                : (0, r.jsxs)('div', {
                      className: y.compactContainer,
                      children: [
                          (0, r.jsx)(f.vwX, {
                              tag: 'h3',
                              className: y.compactTitle,
                              children: t
                          }),
                          (0, r.jsx)(g, { type: u.field_type })
                      ]
                  }),
            'footer' === a &&
                (0, r.jsxs)(f.hjN, {
                    className: y.containerFooter,
                    children: [
                        (0, r.jsx)(f.ua7, {
                            text: j.NW.string(j.t.FoxyPT),
                            shouldShow: !s,
                            children: (e) => {
                                var t, n;
                                return (0, r.jsx)(
                                    f.zxk,
                                    ((t = m({}, e)),
                                    (n = n =
                                        {
                                            className: c()(y.removeButton, y.button),
                                            size: f.zxk.Sizes.SMALL,
                                            look: f.zxk.Looks.BLANK,
                                            onClick: o,
                                            disabled: !s,
                                            children: j.NW.string(j.t.N86XcH)
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
                        (0, r.jsx)(f.zxk, {
                            className: y.button,
                            size: f.zxk.Sizes.SMALL,
                            color: f.zxk.Colors.PRIMARY,
                            onClick: i,
                            children: j.NW.string(j.t.bt75u7)
                        })
                    ]
                })
        ]
    });
}
let h = 'FORM_FIELD';
function v(e) {
    let { index: t, field: n, isDropHovered: o, onDrop: u, fieldStyle: p } = e,
        j = (0, s.debounce)(async (e, t, n) => {
            await u(e, t, n);
        }),
        g = i.useRef(null),
        [, v] = (0, a.c)({
            type: h,
            item: {
                index: t,
                field: n
            },
            end: (e, t) => {
                null == e || t.didDrop() || j(e.field, null, !0);
            }
        }),
        [, x] = (0, l.L)({
            accept: h,
            hover: (e, n) => {
                var r;
                let { index: i } = e,
                    o = null == (r = g.current) ? void 0 : r.getBoundingClientRect(),
                    c = n.getClientOffset();
                if (null == o || null == c) return;
                let s = (o.bottom - o.top) / 2,
                    a = c.y - o.top;
                (i < t && a < s) || (i > t && a < s) || i === t || j(e.field, t, !1);
            },
            drop: (e) => {
                j(e.field, t, !0);
            }
        });
    return (
        i.useLayoutEffect(
            () => (
                v(x(g)),
                () => {
                    x(null), v(null);
                }
            ),
            [v, x]
        ),
        (0, r.jsxs)('div', {
            ref: g,
            'data-dnd-name': 'field-'.concat(t),
            className: c()(y.dragContainer, { [y.dropHovered]: o }),
            children: [
                (0, r.jsx)('div', {
                    className: c()(y.dragIconContainer, { [y.compact]: p === b.it.COMPACT }),
                    children: (0, r.jsx)(f.Vni, {
                        size: 'xs',
                        className: y.dragIcon,
                        color: d.Z.unsafe_rawColors.PRIMARY_400.css
                    })
                }),
                (0, r.jsx)(O, m({}, e))
            ]
        })
    );
}
function x(e) {
    return (0, r.jsxs)('div', {
        className: c()(y.formFieldContainer, { [y.compact]: e.fieldStyle === b.it.COMPACT }),
        children: [
            (0, r.jsx)('div', {
                className: y.spacingContainer,
                children: e.isDragEnabled ? (0, r.jsx)(v, m({}, e)) : (0, r.jsx)(O, m({}, e))
            }),
            'side' === e.actionsLocation &&
                (0, r.jsxs)('div', {
                    className: c()(y.actionButtonsContainer, {
                        [y.compact]: e.fieldStyle === b.it.COMPACT,
                        [y.canRemove]: e.canRemove
                    }),
                    children: [
                        (0, r.jsx)(f.P3F, {
                            className: y.actionButton,
                            onClick: e.onEdit,
                            'aria-label': j.NW.string(j.t.bt75u7),
                            children: (0, r.jsx)(f.vdY, { size: 'xs' })
                        }),
                        e.canRemove &&
                            (0, r.jsx)(f.P3F, {
                                className: y.actionButton,
                                onClick: e.onRemove,
                                'aria-label': j.NW.string(j.t.N86XcH),
                                children: (0, r.jsx)(f.XHJ, { size: 'xs' })
                            })
                    ]
                })
        ]
    });
}
