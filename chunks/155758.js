n.d(t, {
    p: function () {
        return v;
    },
    s: function () {
        return _;
    }
});
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    s = n(676062),
    o = n(481060),
    c = n(313201),
    d = n(817460),
    u = n(723047),
    m = n(528027),
    h = n(686807),
    g = n(157018),
    x = n(828656),
    p = n(388032),
    f = n(290803);
function C(e) {
    let { guildId: t, emojiId: n, emojiName: l, title: s, description: c, targetType: d, index: u, dndName: h, onEdit: g, onMove: C, disabled: v = !1 } = e,
        _ = r.useRef(null),
        I = r.useRef(null),
        { drag: N, dragPreview: T, drop: j, isDragging: b } = (0, x.Z)(_, d, u, C);
    return (
        N(I),
        T(j(_)),
        (0, i.jsxs)('div', {
            ref: _,
            className: a()(f.card, {
                [f.cardDragging]: b,
                [f.disabled]: v
            }),
            children: [
                (0, i.jsxs)('div', {
                    className: f.emojiWrapper,
                    children: [
                        (0, i.jsx)(m.Z, {
                            guildId: t,
                            emojiId: n,
                            emojiName: l,
                            className: f.emoji
                        }),
                        !v &&
                            (0, i.jsx)('div', {
                                ref: I,
                                className: f.dragIconWrapper,
                                'data-dnd-name': h,
                                children: (0, i.jsx)(o.DragIcon, {
                                    size: 'xs',
                                    color: 'currentColor',
                                    className: f.dragIcon
                                })
                            })
                    ]
                }),
                (0, i.jsxs)('div', {
                    className: f.cardText,
                    children: [
                        (0, i.jsx)(o.Text, {
                            color: 'header-primary',
                            variant: 'text-md/semibold',
                            children: s
                        }),
                        (0, i.jsx)(o.Text, {
                            color: 'interactive-normal',
                            variant: 'text-sm/normal',
                            children: c
                        })
                    ]
                }),
                (0, i.jsx)('div', {
                    className: f.cardActions,
                    children:
                        !v &&
                        (0, i.jsx)(o.Clickable, {
                            className: f.cardActionButton,
                            onClick: v ? void 0 : g,
                            'aria-label': p.intl.string(p.t.Eoo8h4),
                            'aria-disabled': v,
                            children: (0, i.jsx)(o.PencilIcon, {
                                size: 'xs',
                                color: 'currentColor',
                                className: f.cardActionButtonIcon
                            })
                        })
                })
            ]
        })
    );
}
function v(e) {
    let { benefits: t, onEdit: n, onMove: l, guildId: o } = e,
        m = (0, c.Dt)(),
        { isDragging: x } = (0, s.f)((e) => ({ isDragging: e.getItemType() === m })),
        p = (0, u.mY)();
    return 0 === t.length
        ? null
        : (0, i.jsx)('div', {
              className: a()(f.container, { [f.isDragging]: x }),
              children: t.map((e, t) =>
                  (0, i.jsxs)(
                      r.Fragment,
                      {
                          children: [
                              t > 0 ? (0, i.jsx)('div', { className: f.divider }) : null,
                              (0, i.jsx)(C, {
                                  guildId: o,
                                  emojiId: e.emoji_id,
                                  emojiName: e.emoji_name,
                                  title: (0, h.Z)(e),
                                  description: e.description,
                                  targetType: m,
                                  index: t,
                                  dndName: (0, g.Z)(e),
                                  onEdit: () => n(t),
                                  onMove: l,
                                  disabled: p
                              })
                          ]
                      },
                      (0, d.ab)(e)
                  )
              )
          });
}
function _(e) {
    let { onClick: t, children: n, disabled: r = !1 } = e;
    return (0, i.jsx)(o.Clickable, {
        className: f.container,
        onClick: r ? void 0 : t,
        'aria-disabled': r,
        children: (0, i.jsxs)('div', {
            className: a()(f.card, f.addBenefit, { [f.disabled]: r }),
            children: [
                (0, i.jsx)('div', {
                    className: f.emojiWrapper,
                    children: (0, i.jsx)(o.CirclePlusIcon, {
                        size: 'xs',
                        color: 'currentColor',
                        className: f.addBenefitIcon
                    })
                }),
                (0, i.jsx)('div', {
                    className: f.cardText,
                    children: (0, i.jsx)(o.Text, {
                        color: 'header-primary',
                        variant: 'text-md/normal',
                        children: n
                    })
                })
            ]
        })
    });
}
