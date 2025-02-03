n.d(t, {
    Z: () => I,
    f: () => m
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
function I(e) {
    let { tag: t, size: i = 1, disabled: s, className: _, onClick: I, onRemove: m, selected: S, ariaLabel: T } = e,
        { name: N, emojiId: y, emojiName: O } = t,
        P = null != m,
        [A, b] = r.useState(!1),
        L = (0, d.e7)([f.ZP], () => (null != y ? f.ZP.getUsableCustomEmojiById(y) : null)),
        R = P || null != I,
        Z = (!P || !A) && (null != y || null != O),
        w = 0 === i,
        D = r.useRef(null),
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
                          className: a()(E.emoji, { [E.small]: w }),
                          emojiId: y,
                          emojiName: O,
                          animated: !!(null == L ? void 0 : L.animated),
                          size: 'reaction'
                      })
                    : null,
                A &&
                    P &&
                    (0, l.jsx)('div', {
                        className: E.closeCircle,
                        children: (0, l.jsx)(u.Dio, {
                            size: 'md',
                            color: 'currentColor',
                            className: E.close
                        })
                    }),
                (0, l.jsx)(u.Text, {
                    variant: w ? 'text-xs/semibold' : 'text-sm/semibold',
                    lineClamp: 1,
                    color: 'currentColor',
                    children: N
                })
            ]
        }),
        G = {
            key: t.id,
            className: a()(
                E.pill,
                {
                    [E.disabled]: s,
                    [E.clickable]: R,
                    [E.small]: w,
                    [E.selected]: S
                },
                _
            ),
            onClick: (e) => {
                null == I || I(e), null == m || m(t), M || null == D.current || D.current.blur();
            },
            onContextMenu: (e) => x(e),
            onMouseEnter: () => P && b(!0),
            onMouseLeave: () => P && b(!1)
        },
        j = (0, o.JA)('forum-tag-'.concat(t.id));
    return R
        ? (0, l.jsx)(u.P3F, {
              ...j,
              innerRef: D,
              focusProps: { ringTarget: D },
              'aria-label': null != T ? T : v.intl.formatToPlainString(v.t.iyRTLi, { tagName: N }),
              role: 'button',
              'aria-pressed': S,
              ...G,
              children: U
          })
        : (0, l.jsx)('div', {
              ...G,
              children: U
          });
}
function m(e) {
    let { tags: t, count: n, size: i = 1 } = e,
        r = 0 === i;
    return (0, l.jsx)(u.ua7, {
        'aria-label': v.intl.string(v.t['P/y+sr']),
        text: (0, l.jsx)(l.Fragment, {
            children: t.map((e) =>
                (0, l.jsx)(
                    I,
                    {
                        tag: e,
                        className: E.tooltipPill,
                        size: I.Sizes.SMALL
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
I.Sizes = _;
