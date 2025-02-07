l.d(t, {
    Z: () => v,
    f: () => I
}),
    l(47120);
var n,
    i = l(200651),
    a = l(192379),
    s = l(120356),
    o = l.n(s),
    r = l(91192),
    d = l(442837),
    c = l(481060),
    u = l(239091),
    h = l(596454),
    m = l(607070),
    p = l(339085),
    _ = l(695346),
    f = l(572004),
    g = l(388032),
    E = l(680475),
    x = (((n = x || {})[(n.SMALL = 0)] = 'SMALL'), (n[(n.MEDIUM = 1)] = 'MEDIUM'), n);
function v(e) {
    let { tag: t, size: n = 1, disabled: s, className: x, onClick: v, onRemove: I, selected: y, ariaLabel: C } = e,
        { name: A, emojiId: M, emojiName: b } = t,
        P = null != I,
        [S, T] = a.useState(!1),
        Z = (0, d.e7)([p.ZP], () => (null != M ? p.ZP.getUsableCustomEmojiById(M) : null)),
        L = P || null != v,
        D = (!P || !S) && (null != M || null != b),
        w = 0 === n,
        j = a.useRef(null),
        U = (0, d.e7)([m.Z], () => m.Z.keyboardModeEnabled),
        R = (e) => {
            let n = _.Sb.getSetting();
            f.wS &&
                n &&
                (0, u.jW)(e, async () => {
                    let { default: e } = await l.e('29646').then(l.bind(l, 955116));
                    return (l) =>
                        (0, i.jsx)(e, {
                            ...l,
                            tag: t
                        });
                });
        },
        O = (0, i.jsxs)(i.Fragment, {
            children: [
                D
                    ? (0, i.jsx)(h.Z, {
                          className: o()(E.emoji, { [E.small]: w }),
                          emojiId: M,
                          emojiName: b,
                          animated: !!(null == Z ? void 0 : Z.animated),
                          size: 'reaction'
                      })
                    : null,
                S &&
                    P &&
                    (0, i.jsx)('div', {
                        className: E.closeCircle,
                        children: (0, i.jsx)(c.Dio, {
                            size: 'md',
                            color: 'currentColor',
                            className: E.close
                        })
                    }),
                (0, i.jsx)(c.Text, {
                    variant: w ? 'text-xs/semibold' : 'text-sm/semibold',
                    lineClamp: 1,
                    color: 'currentColor',
                    children: A
                })
            ]
        }),
        z = {
            key: t.id,
            className: o()(
                E.pill,
                {
                    [E.disabled]: s,
                    [E.clickable]: L,
                    [E.small]: w,
                    [E.selected]: y
                },
                x
            ),
            onClick: (e) => {
                null == v || v(e), null == I || I(t), U || null == j.current || j.current.blur();
            },
            onContextMenu: (e) => R(e),
            onMouseEnter: () => P && T(!0),
            onMouseLeave: () => P && T(!1)
        },
        N = (0, r.JA)('forum-tag-'.concat(t.id));
    return L
        ? (0, i.jsx)(c.P3F, {
              ...N,
              innerRef: j,
              focusProps: { ringTarget: j },
              'aria-label': null != C ? C : g.intl.formatToPlainString(g.t.iyRTLi, { tagName: A }),
              role: 'button',
              'aria-pressed': y,
              ...z,
              children: O
          })
        : (0, i.jsx)('div', {
              ...z,
              children: O
          });
}
function I(e) {
    let { tags: t, count: l, size: n = 1 } = e,
        a = 0 === n;
    return (0, i.jsx)(c.ua7, {
        'aria-label': g.intl.string(g.t['P/y+sr']),
        text: (0, i.jsx)(i.Fragment, {
            children: t.map((e) =>
                (0, i.jsx)(
                    v,
                    {
                        tag: e,
                        className: E.tooltipPill,
                        size: v.Sizes.SMALL
                    },
                    e.id
                )
            )
        }),
        children: (e) =>
            (0, i.jsx)('div', {
                ...e,
                className: o()(E.pill, { [E.small]: a }),
                children: (0, i.jsxs)(c.Text, {
                    variant: a ? 'text-xs/semibold' : 'text-sm/semibold',
                    children: ['+', l]
                })
            })
    });
}
v.Sizes = x;
