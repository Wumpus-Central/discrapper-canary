n.d(t, {
    p: () => f,
    s: () => v
});
var i = n(200651),
    r = n(192379),
    l = n(120356),
    s = n.n(l),
    a = n(676062),
    o = n(481060),
    c = n(313201),
    d = n(817460),
    u = n(723047),
    m = n(528027),
    h = n(686807),
    g = n(157018),
    x = n(828656),
    p = n(388032),
    _ = n(290803);
function C(e) {
    let { guildId: t, emojiId: n, emojiName: l, title: a, description: c, targetType: d, index: u, dndName: h, onEdit: g, onMove: C, disabled: f = !1 } = e,
        v = r.useRef(null),
        N = r.useRef(null),
        { drag: j, dragPreview: I, drop: E, isDragging: b } = (0, x.Z)(v, d, u, C);
    return (
        j(N),
        I(E(v)),
        (0, i.jsxs)('div', {
            ref: v,
            className: s()(_.card, {
                [_.cardDragging]: b,
                [_.disabled]: f
            }),
            children: [
                (0, i.jsxs)('div', {
                    className: _.emojiWrapper,
                    children: [
                        (0, i.jsx)(m.Z, {
                            guildId: t,
                            emojiId: n,
                            emojiName: l,
                            className: _.emoji
                        }),
                        !f &&
                            (0, i.jsx)('div', {
                                ref: N,
                                className: _.dragIconWrapper,
                                'data-dnd-name': h,
                                children: (0, i.jsx)(o.Vni, {
                                    size: 'xs',
                                    color: 'currentColor',
                                    className: _.dragIcon
                                })
                            })
                    ]
                }),
                (0, i.jsxs)('div', {
                    className: _.cardText,
                    children: [
                        (0, i.jsx)(o.Text, {
                            color: 'header-primary',
                            variant: 'text-md/semibold',
                            children: a
                        }),
                        (0, i.jsx)(o.Text, {
                            color: 'interactive-normal',
                            variant: 'text-sm/normal',
                            children: c
                        })
                    ]
                }),
                (0, i.jsx)('div', {
                    className: _.cardActions,
                    children:
                        !f &&
                        (0, i.jsx)(o.P3F, {
                            className: _.cardActionButton,
                            onClick: f ? void 0 : g,
                            'aria-label': p.intl.string(p.t.Eoo8h4),
                            'aria-disabled': f,
                            children: (0, i.jsx)(o.vdY, {
                                size: 'xs',
                                color: 'currentColor',
                                className: _.cardActionButtonIcon
                            })
                        })
                })
            ]
        })
    );
}
function f(e) {
    let { benefits: t, onEdit: n, onMove: l, guildId: o } = e,
        m = (0, c.Dt)(),
        { isDragging: x } = (0, a.f)((e) => ({ isDragging: e.getItemType() === m })),
        p = (0, u.mY)();
    return 0 === t.length
        ? null
        : (0, i.jsx)('div', {
              className: s()(_.container, { [_.isDragging]: x }),
              children: t.map((e, t) =>
                  (0, i.jsxs)(
                      r.Fragment,
                      {
                          children: [
                              t > 0 ? (0, i.jsx)('div', { className: _.divider }) : null,
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
function v(e) {
    let { onClick: t, children: n, disabled: r = !1 } = e;
    return (0, i.jsx)(o.P3F, {
        className: _.container,
        onClick: r ? void 0 : t,
        'aria-disabled': r,
        children: (0, i.jsxs)('div', {
            className: s()(_.card, _.addBenefit, { [_.disabled]: r }),
            children: [
                (0, i.jsx)('div', {
                    className: _.emojiWrapper,
                    children: (0, i.jsx)(o.oFk, {
                        size: 'xs',
                        color: 'currentColor',
                        className: _.addBenefitIcon
                    })
                }),
                (0, i.jsx)('div', {
                    className: _.cardText,
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
