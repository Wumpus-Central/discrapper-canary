l.d(t, {
    Z: function () {
        return v;
    },
    f: function () {
        return E;
    }
}),
    l(47120);
var i,
    n,
    a = l(200651),
    s = l(192379),
    o = l(120356),
    r = l.n(o),
    d = l(91192),
    u = l(442837),
    c = l(481060),
    m = l(239091),
    f = l(596454),
    g = l(607070),
    h = l(339085),
    p = l(695346),
    x = l(572004),
    _ = l(388032),
    b = l(680475);
function v(e) {
    let { tag: t, size: i = 1, disabled: n, className: o, onClick: v, onRemove: E, selected: I, ariaLabel: j } = e,
        { name: M, emojiId: C, emojiName: P } = t,
        A = null != E,
        [S, z] = s.useState(!1),
        T = (0, u.e7)([h.ZP], () => (null != C ? h.ZP.getUsableCustomEmojiById(C) : null)),
        y = A || null != v,
        Z = (!A || !S) && (null != C || null != P),
        L = 0 === i,
        N = s.useRef(null),
        w = (0, u.e7)([g.Z], () => g.Z.keyboardModeEnabled),
        R = (e) => {
            let i = p.Sb.getSetting();
            x.wS &&
                i &&
                (0, m.jW)(e, async () => {
                    let { default: e } = await l.e('29646').then(l.bind(l, 955116));
                    return (l) =>
                        (0, a.jsx)(e, {
                            ...l,
                            tag: t
                        });
                });
        },
        B = (0, a.jsxs)(a.Fragment, {
            children: [
                Z
                    ? (0, a.jsx)(f.Z, {
                          className: r()(b.emoji, { [b.small]: L }),
                          emojiId: C,
                          emojiName: P,
                          animated: !!(null == T ? void 0 : T.animated),
                          size: 'reaction'
                      })
                    : null,
                S &&
                    A &&
                    (0, a.jsx)('div', {
                        className: b.closeCircle,
                        children: (0, a.jsx)(c.XSmallIcon, {
                            size: 'md',
                            color: 'currentColor',
                            className: b.close
                        })
                    }),
                (0, a.jsx)(c.Text, {
                    variant: L ? 'text-xs/semibold' : 'text-sm/semibold',
                    lineClamp: 1,
                    children: M
                })
            ]
        }),
        U = {
            key: t.id,
            className: r()(
                b.pill,
                {
                    [b.disabled]: n,
                    [b.clickable]: y,
                    [b.small]: L,
                    [b.selected]: I
                },
                o
            ),
            onClick: (e) => {
                null == v || v(e), null == E || E(t), !w && null != N.current && N.current.blur();
            },
            onContextMenu: (e) => R(e),
            onMouseEnter: () => A && z(!0),
            onMouseLeave: () => A && z(!1)
        },
        D = (0, d.JA)('forum-tag-'.concat(t.id));
    return y
        ? (0, a.jsx)(c.Clickable, {
              ...D,
              innerRef: N,
              focusProps: { ringTarget: N },
              'aria-label': null != j ? j : _.intl.formatToPlainString(_.t.iyRTLi, { tagName: M }),
              role: 'button',
              'aria-pressed': I,
              ...U,
              children: B
          })
        : (0, a.jsx)('div', {
              ...U,
              children: B
          });
}
function E(e) {
    let { tags: t, count: l, size: i = 1 } = e,
        n = 0 === i;
    return (0, a.jsx)(c.Tooltip, {
        'aria-label': _.intl.string(_.t['P/y+sr']),
        text: (0, a.jsx)(a.Fragment, {
            children: t.map((e) =>
                (0, a.jsx)(
                    v,
                    {
                        tag: e,
                        className: b.tooltipPill,
                        size: v.Sizes.SMALL
                    },
                    e.id
                )
            )
        }),
        children: (e) =>
            (0, a.jsx)('div', {
                ...e,
                className: r()(b.pill, { [b.small]: n }),
                children: (0, a.jsxs)(c.Text, {
                    variant: n ? 'text-xs/semibold' : 'text-sm/semibold',
                    children: ['+', l]
                })
            })
    });
}
((n = i || (i = {}))[(n.SMALL = 0)] = 'SMALL'), (n[(n.MEDIUM = 1)] = 'MEDIUM'), (v.Sizes = i);
