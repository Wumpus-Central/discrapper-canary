t.d(n, {
    Z: function () {
        return T;
    }
}),
    t(47120);
var i = t(200651),
    l = t(192379),
    a = t(120356),
    s = t.n(a),
    r = t(392711),
    o = t(999153),
    c = t(584922),
    d = t(793030),
    u = t(692547),
    m = t(481060),
    x = t(838221),
    f = t(246364),
    h = t(388032),
    g = t(31619);
function v(e) {
    let { type: n } = e,
        t = l.useMemo(() => {
            switch (n) {
                case f.QJ.MULTIPLE_CHOICE:
                    return {
                        icon: m.ListBulletsIcon,
                        text: h.intl.string(h.t.ooKh3t)
                    };
                case f.QJ.PARAGRAPH:
                    return {
                        icon: m.ChannelListIcon,
                        text: h.intl.string(h.t.gG0JBA)
                    };
                case f.QJ.TEXT_INPUT:
                    return {
                        icon: (0, m.makeIconCompat)(x.Z),
                        text: h.intl.string(h.t.w6Q9w8)
                    };
                case f.QJ.TERMS:
                    return {
                        icon: m.BookCheckIcon,
                        text: h.intl.string(h.t['3pz9t7'])
                    };
                default:
                    return null;
            }
        }, [n]);
    return null == t
        ? null
        : (0, i.jsxs)('div', {
              className: g.typeTag,
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
function C(e) {
    let { title: n, children: t, onEdit: l, onRemove: a, canRemove: r, actionsLocation: o, fieldStyle: c, field: d } = e;
    return (0, i.jsxs)('div', {
        className: g.backgroundContainer,
        children: [
            c === f.it.REGULAR
                ? (0, i.jsxs)('div', {
                      className: g.containerPadding,
                      children: [
                          (0, i.jsx)(m.FormTitle, {
                              tag: 'h3',
                              className: g.containerTitle,
                              children: n
                          }),
                          t
                      ]
                  })
                : (0, i.jsxs)('div', {
                      className: g.compactContainer,
                      children: [
                          (0, i.jsx)(m.FormTitle, {
                              tag: 'h3',
                              className: g.compactTitle,
                              children: n
                          }),
                          (0, i.jsx)(v, { type: d.field_type })
                      ]
                  }),
            'footer' === o &&
                (0, i.jsxs)(m.FormSection, {
                    className: g.containerFooter,
                    children: [
                        (0, i.jsx)(m.Tooltip, {
                            text: h.intl.string(h.t.B3Jj1N),
                            shouldShow: !r,
                            children: (e) =>
                                (0, i.jsx)(m.Button, {
                                    ...e,
                                    className: s()(g.removeButton, g.button),
                                    size: m.Button.Sizes.SMALL,
                                    look: m.Button.Looks.BLANK,
                                    onClick: a,
                                    disabled: !r,
                                    children: h.intl.string(h.t.N86XcH)
                                })
                        }),
                        (0, i.jsx)(m.Button, {
                            className: g.button,
                            size: m.Button.Sizes.SMALL,
                            color: m.Button.Colors.PRIMARY,
                            onClick: l,
                            children: h.intl.string(h.t.bt75u7)
                        })
                    ]
                })
        ]
    });
}
let j = 'FORM_FIELD';
function p(e) {
    let { index: n, field: t, isDropHovered: a, onDrop: d, fieldStyle: x } = e,
        h = (0, r.debounce)(async (e, n, t) => {
            await d(e, n, t);
        }),
        v = l.useRef(null),
        [, p] = (0, o.c)({
            type: j,
            item: {
                index: n,
                field: t
            },
            end: (e, n) => {
                null != e && !n.didDrop() && h(e.field, null, !0);
            }
        }),
        [, T] = (0, c.L)({
            accept: j,
            hover: (e, t) => {
                var i;
                let { index: l } = e,
                    a = null === (i = v.current) || void 0 === i ? void 0 : i.getBoundingClientRect(),
                    s = t.getClientOffset();
                if (null == a || null == s) return;
                let r = (a.bottom - a.top) / 2,
                    o = s.y - a.top;
                (!(l < n) || !(o < r)) && (!(l > n) || !(o < r)) && l !== n && h(e.field, n, !1);
            },
            drop: (e) => {
                h(e.field, n, !0);
            }
        });
    return (
        l.useLayoutEffect(
            () => (
                p(T(v)),
                () => {
                    T(null), p(null);
                }
            ),
            [p, T]
        ),
        (0, i.jsxs)('div', {
            ref: v,
            'data-dnd-name': 'field-'.concat(n),
            className: s()(g.dragContainer, { [g.dropHovered]: a }),
            children: [
                (0, i.jsx)('div', {
                    className: s()(g.dragIconContainer, { [g.compact]: x === f.it.COMPACT }),
                    children: (0, i.jsx)(m.DragIcon, {
                        size: 'xs',
                        className: g.dragIcon,
                        color: u.Z.unsafe_rawColors.PRIMARY_400.css
                    })
                }),
                (0, i.jsx)(C, { ...e })
            ]
        })
    );
}
function T(e) {
    return (0, i.jsxs)('div', {
        className: s()(g.formFieldContainer, { [g.compact]: e.fieldStyle === f.it.COMPACT }),
        children: [
            (0, i.jsx)('div', {
                className: g.spacingContainer,
                children: e.isDragEnabled ? (0, i.jsx)(p, { ...e }) : (0, i.jsx)(C, { ...e })
            }),
            'side' === e.actionsLocation &&
                (0, i.jsxs)('div', {
                    className: s()(g.actionButtonsContainer, {
                        [g.compact]: e.fieldStyle === f.it.COMPACT,
                        [g.canRemove]: e.canRemove
                    }),
                    children: [
                        (0, i.jsx)(m.Clickable, {
                            className: g.actionButton,
                            onClick: e.onEdit,
                            'aria-label': h.intl.string(h.t.bt75u7),
                            children: (0, i.jsx)(m.PencilIcon, { size: 'xs' })
                        }),
                        e.canRemove &&
                            (0, i.jsx)(m.Clickable, {
                                className: g.actionButton,
                                onClick: e.onRemove,
                                'aria-label': h.intl.string(h.t.N86XcH),
                                children: (0, i.jsx)(m.TrashIcon, { size: 'xs' })
                            })
                    ]
                })
        ]
    });
}
