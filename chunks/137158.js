t.d(n, { Z: () => N }), t(47120);
var i = t(200651),
    l = t(192379),
    s = t(120356),
    a = t.n(s),
    r = t(392711),
    o = t(999153),
    c = t(584922),
    d = t(793030),
    u = t(692547),
    x = t(481060),
    m = t(838221),
    h = t(246364),
    f = t(388032),
    v = t(241195);
function g(e) {
    let { type: n } = e,
        t = l.useMemo(() => {
            switch (n) {
                case h.QJ.MULTIPLE_CHOICE:
                    return {
                        icon: x.jE$,
                        text: f.intl.string(f.t.ooKh3t)
                    };
                case h.QJ.PARAGRAPH:
                    return {
                        icon: x.OvV,
                        text: f.intl.string(f.t.gG0JBA)
                    };
                case h.QJ.TEXT_INPUT:
                    return {
                        icon: (0, x.GSL)(m.Z),
                        text: f.intl.string(f.t.w6Q9w8)
                    };
                case h.QJ.TERMS:
                    return {
                        icon: x.snC,
                        text: f.intl.string(f.t['3pz9t7'])
                    };
                default:
                    return null;
            }
        }, [n]);
    return null == t
        ? null
        : (0, i.jsxs)('div', {
              className: v.typeTag,
              children: [
                  (0, i.jsx)(t.icon, {
                      size: 'xs',
                      color: 'currentColor'
                  }),
                  (0, i.jsx)(d.xv, {
                      variant: 'text-sm/medium',
                      tag: 'span',
                      children: t.text
                  })
              ]
          });
}
function j(e) {
    let { title: n, children: t, onEdit: l, onRemove: s, canRemove: r, actionsLocation: o, fieldStyle: c, field: d } = e;
    return (0, i.jsxs)('div', {
        className: v.backgroundContainer,
        children: [
            c === h.it.REGULAR
                ? (0, i.jsxs)('div', {
                      className: v.containerPadding,
                      children: [
                          (0, i.jsx)(x.vwX, {
                              tag: 'h3',
                              className: v.containerTitle,
                              children: n
                          }),
                          t
                      ]
                  })
                : (0, i.jsxs)('div', {
                      className: v.compactContainer,
                      children: [
                          (0, i.jsx)(x.vwX, {
                              tag: 'h3',
                              className: v.compactTitle,
                              children: n
                          }),
                          (0, i.jsx)(g, { type: d.field_type })
                      ]
                  }),
            'footer' === o &&
                (0, i.jsxs)(x.hjN, {
                    className: v.containerFooter,
                    children: [
                        (0, i.jsx)(x.ua7, {
                            text: f.intl.string(f.t.B3Jj1N),
                            shouldShow: !r,
                            children: (e) =>
                                (0, i.jsx)(x.zxk, {
                                    ...e,
                                    className: a()(v.removeButton, v.button),
                                    size: x.zxk.Sizes.SMALL,
                                    look: x.zxk.Looks.BLANK,
                                    onClick: s,
                                    disabled: !r,
                                    children: f.intl.string(f.t.N86XcH)
                                })
                        }),
                        (0, i.jsx)(x.zxk, {
                            className: v.button,
                            size: x.zxk.Sizes.SMALL,
                            color: x.zxk.Colors.PRIMARY,
                            onClick: l,
                            children: f.intl.string(f.t.bt75u7)
                        })
                    ]
                })
        ]
    });
}
let C = 'FORM_FIELD';
function p(e) {
    let { index: n, field: t, isDropHovered: s, onDrop: d, fieldStyle: m } = e,
        f = (0, r.debounce)(async (e, n, t) => {
            await d(e, n, t);
        }),
        g = l.useRef(null),
        [, p] = (0, o.c)({
            type: C,
            item: {
                index: n,
                field: t
            },
            end: (e, n) => {
                null == e || n.didDrop() || f(e.field, null, !0);
            }
        }),
        [, N] = (0, c.L)({
            accept: C,
            hover: (e, t) => {
                var i;
                let { index: l } = e,
                    s = null === (i = g.current) || void 0 === i ? void 0 : i.getBoundingClientRect(),
                    a = t.getClientOffset();
                if (null == s || null == a) return;
                let r = (s.bottom - s.top) / 2,
                    o = a.y - s.top;
                (l < n && o < r) || (l > n && o < r) || l === n || f(e.field, n, !1);
            },
            drop: (e) => {
                f(e.field, n, !0);
            }
        });
    return (
        l.useLayoutEffect(
            () => (
                p(N(g)),
                () => {
                    N(null), p(null);
                }
            ),
            [p, N]
        ),
        (0, i.jsxs)('div', {
            ref: g,
            'data-dnd-name': 'field-'.concat(n),
            className: a()(v.dragContainer, { [v.dropHovered]: s }),
            children: [
                (0, i.jsx)('div', {
                    className: a()(v.dragIconContainer, { [v.compact]: m === h.it.COMPACT }),
                    children: (0, i.jsx)(x.Vni, {
                        size: 'xs',
                        className: v.dragIcon,
                        color: u.Z.unsafe_rawColors.PRIMARY_400.css
                    })
                }),
                (0, i.jsx)(j, { ...e })
            ]
        })
    );
}
function N(e) {
    return (0, i.jsxs)('div', {
        className: a()(v.formFieldContainer, { [v.compact]: e.fieldStyle === h.it.COMPACT }),
        children: [
            (0, i.jsx)('div', {
                className: v.spacingContainer,
                children: e.isDragEnabled ? (0, i.jsx)(p, { ...e }) : (0, i.jsx)(j, { ...e })
            }),
            'side' === e.actionsLocation &&
                (0, i.jsxs)('div', {
                    className: a()(v.actionButtonsContainer, {
                        [v.compact]: e.fieldStyle === h.it.COMPACT,
                        [v.canRemove]: e.canRemove
                    }),
                    children: [
                        (0, i.jsx)(x.P3F, {
                            className: v.actionButton,
                            onClick: e.onEdit,
                            'aria-label': f.intl.string(f.t.bt75u7),
                            children: (0, i.jsx)(x.vdY, { size: 'xs' })
                        }),
                        e.canRemove &&
                            (0, i.jsx)(x.P3F, {
                                className: v.actionButton,
                                onClick: e.onRemove,
                                'aria-label': f.intl.string(f.t.N86XcH),
                                children: (0, i.jsx)(x.XHJ, { size: 'xs' })
                            })
                    ]
                })
        ]
    });
}
