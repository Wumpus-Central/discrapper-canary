n.d(t, {
    Z: () => m,
    f: () => I
}),
    n(47120);
var i,
    l = n(200651),
    r = n(192379),
    s = n(120356),
    a = n.n(s),
    o = n(91192),
    d = n(442837),
    u = n(481060),
    c = n(239091),
    h = n(596454),
    g = n(607070),
    f = n(339085),
    C = n(695346),
    p = n(572004),
    v = n(388032),
    E = n(680475),
    _ = (((i = _ || {})[(i.SMALL = 0)] = 'SMALL'), (i[(i.MEDIUM = 1)] = 'MEDIUM'), i);
function m(e) {
    let { tag: t, size: i = 1, disabled: s, className: _, onClick: m, onRemove: I, selected: S, ariaLabel: T } = e,
        { name: N, emojiId: y, emojiName: O } = t,
        A = null != I,
        [P, b] = r.useState(!1),
        L = (0, d.e7)([f.ZP], () => (null != y ? f.ZP.getUsableCustomEmojiById(y) : null)),
        R = A || null != m,
        Z = (!A || !P) && (null != y || null != O),
        D = 0 === i,
        w = r.useRef(null),
        M = (0, d.e7)([g.Z], () => g.Z.keyboardModeEnabled),
        x = (e) => {
            let i = C.Sb.getSetting();
            p.wS &&
                i &&
                (0, c.jW)(e, async () => {
                    let { default: e } = await n.e('29646').then(n.bind(n, 955116));
                    return (n) =>
                        (0, l.jsx)(e, {
                            ...n,
                            tag: t
                        });
                });
        },
        U = (0, l.jsxs)(l.Fragment, {
            children: [
                Z
                    ? (0, l.jsx)(h.Z, {
                          className: a()(E.emoji, { [E.small]: D }),
                          emojiId: y,
                          emojiName: O,
                          animated: !!(null == L ? void 0 : L.animated),
                          size: 'reaction'
                      })
                    : null,
                P &&
                    A &&
                    (0, l.jsx)('div', {
                        className: E.closeCircle,
                        children: (0, l.jsx)(u.Dio, {
                            size: 'md',
                            color: 'currentColor',
                            className: E.close
                        })
                    }),
                (0, l.jsx)(u.Text, {
                    variant: D ? 'text-xs/semibold' : 'text-sm/semibold',
                    lineClamp: 1,
                    color: 'currentColor',
                    children: N
                })
            ]
        }),
        j = {
            key: t.id,
            className: a()(
                E.pill,
                {
                    [E.disabled]: s,
                    [E.clickable]: R,
                    [E.small]: D,
                    [E.selected]: S
                },
                _
            ),
            onClick: (e) => {
                null == m || m(e), null == I || I(t), M || null == w.current || w.current.blur();
            },
            onContextMenu: (e) => x(e),
            onMouseEnter: () => A && b(!0),
            onMouseLeave: () => A && b(!1)
        },
        G = (0, o.JA)('forum-tag-'.concat(t.id));
    return R
        ? (0, l.jsx)(u.P3F, {
              ...G,
              innerRef: w,
              focusProps: { ringTarget: w },
              'aria-label': null != T ? T : v.intl.formatToPlainString(v.t.iyRTLi, { tagName: N }),
              role: 'button',
              'aria-pressed': S,
              ...j,
              children: U
          })
        : (0, l.jsx)('div', {
              ...j,
              children: U
          });
}
function I(e) {
    let { tags: t, count: n, size: i = 1 } = e,
        r = 0 === i;
    return (0, l.jsx)(u.ua7, {
        'aria-label': v.intl.string(v.t['P/y+sr']),
        text: (0, l.jsx)(l.Fragment, {
            children: t.map((e) =>
                (0, l.jsx)(
                    m,
                    {
                        tag: e,
                        className: E.tooltipPill,
                        size: m.Sizes.SMALL
                    },
                    e.id
                )
            )
        }),
        children: (e) =>
            (0, l.jsx)('div', {
                ...e,
                className: a()(E.pill, { [E.small]: r }),
                children: (0, l.jsxs)(u.Text, {
                    variant: r ? 'text-xs/semibold' : 'text-sm/semibold',
                    children: ['+', n]
                })
            })
    });
}
m.Sizes = _;
